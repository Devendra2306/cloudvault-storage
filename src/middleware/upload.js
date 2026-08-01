/**
 * upload.js — Fixed middleware
 *
 * ROOT CAUSE OF UPLOAD FAILURES:
 *   multer-s3@3.0.1 (installed) requires multer@2.x
 *   multer@1.4.5-lts.2 (installed) is incompatible — files silently never reach S3
 *
 * FIX STRATEGY:
 *   Use multer with memoryStorage (stores file in req.file.buffer),
 *   then upload to S3 ourselves using @aws-sdk/lib-storage (Upload).
 *   This removes the multer-s3 dependency entirely and is more reliable.
 *
 * SETUP:
 *   npm install @aws-sdk/lib-storage
 *   npm uninstall multer-s3   (optional, but cleans up)
 *   Keep multer@1.4.5-lts in package.json (no change needed)
 */

const multer = require('multer');
const { Upload } = require('@aws-sdk/lib-storage');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const os = require('os');
const fs = require('fs');
const sanitize = require('sanitize-filename');
const { s3, BUCKET } = require('../config/s3');
const { QuotaExceededError, ValidationError } = require('./errorHandler');

const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE) || 2 * 1024 * 1024 * 1024;

// ─── Step 1: Pre-check quota using Content-Length ────────────────────────────
const preCheckQuota = async (req, res, next) => {
  try {
    const contentLength = parseInt(req.headers['content-length'] || '0', 10);
    if (!contentLength) return next();

    const prisma = require('../config/database');
    const { getStorageQuotaBytes, syncExpiredTrial } = require('../services/userAccount');
    
    let user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) throw new ValidationError('User not found');
    user = await syncExpiredTrial(user.id);

    const quota = getStorageQuotaBytes(user);
    if (user.storageUsed + BigInt(contentLength) > quota) {
      console.error('ERROR: Storage quota exceeded (pre-check)');
      throw new QuotaExceededError('Storage quota exceeded');
    }
    
    next();
  } catch (err) {
    next(err);
  }
};

// ─── Step 2: multer stores the file in OS temp directory ─────────────────────
const _multerDisk = multer({
  storage: multer.diskStorage({
    destination: os.tmpdir(),
    filename: (req, file, cb) => cb(null, uuidv4() + path.extname(file.originalname))
  }),
  limits: { fileSize: MAX_FILE_SIZE },
});

// ─── Step 3: Quota check (verifies actual file size) ─────────────────────────
const checkQuota = async (req, res, next) => {
  try {
    const prisma = require('../config/database');
    const { getStorageQuotaBytes, syncExpiredTrial } = require('../services/userAccount');
    let user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) throw new ValidationError('User not found');
    user = await syncExpiredTrial(user.id);

    let totalSize = 0;
    if (req.file) totalSize = req.file.size;
    else if (req.files?.length) totalSize = req.files.reduce((sum, f) => sum + f.size, 0);

    const quota = getStorageQuotaBytes(user);
    if (user.storageUsed + BigInt(totalSize) > quota) {
      throw new QuotaExceededError('Storage quota exceeded');
    }

    next();
  } catch (error) {
    // Clean up temp files if quota fails
    if (req.file && req.file.path) fs.unlink(req.file.path, () => {});
    if (req.files?.length) req.files.forEach(f => fs.unlink(f.path, () => {}));
    next(error);
  }
};

// ─── Step 4: custom S3 uploader middleware ────────────────────────────────────
const _uploadToS3 = async (req, res, next) => {
  if (!req.file) return next();

  try {
    const sanitizedName = sanitize(req.file.originalname);
    const ext = path.extname(sanitizedName);
    const s3Key = `uploads/${req.user.id}/${uuidv4()}${ext}`;

    const uploader = new Upload({
      client: s3,
      params: {
        Bucket: BUCKET,
        Key: s3Key,
        Body: fs.createReadStream(req.file.path),
        ContentType: req.file.mimetype,
        Metadata: {
          originalName: sanitizedName,
          userId: req.user.id,
          uploadedAt: new Date().toISOString(),
        },
      },
    });

    const result = await uploader.done();

    req.file.key = s3Key;
    req.file.bucket = BUCKET;
    req.file.location = result.Location || `https://${BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;

    next();
  } catch (err) {
    console.error('=== S3 UPLOAD FAILED ===', err);
    next(err);
  } finally {
    // Always clean up the temp file
    if (req.file && req.file.path) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Failed to cleanup temp file:', err);
      });
    }
  }
};

// Combined middleware: pre-check → multer disk parse → quota check → S3 upload
const upload = {
  single: (fieldName) => [preCheckQuota, _multerDisk.single(fieldName), checkQuota, _uploadToS3],
  array: (fieldName, max) => [preCheckQuota, _multerDisk.array(fieldName, max), checkQuota, _uploadToS3],
  fields: (fields) => [preCheckQuota, _multerDisk.fields(fields), checkQuota, _uploadToS3],
};

module.exports = {
  upload,
  checkQuota,
  preCheckQuota,
  MAX_FILE_SIZE,
};