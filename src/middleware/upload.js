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
const sanitize = require('sanitize-filename');
const { s3, BUCKET } = require('../config/s3');
const { QuotaExceededError, ValidationError } = require('./errorHandler');

// File size limit (from env or default 100MB)
const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE) || 100 * 1024 * 1024;

// Allowed MIME types
const ALLOWED_MIMES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'video/mp4',
  'video/mpeg',
  'audio/mpeg',
  'audio/mp3',
  'audio/wav',
  'audio/x-wav',
];

const ALLOWED_EXTS = /\.(jpeg|jpg|png|gif|webp|pdf|doc|docx|txt|xls|xlsx|ppt|pptx|mp4|mpeg|mp3|wav)$/i;

// ─── Step 1: multer stores the file in memory ────────────────────────────────
const _multerMemory = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: (req, file, cb) => {
    console.log('=== FILE FILTER ===');
    console.log('File:', { originalname: file.originalname, mimetype: file.mimetype });

    const extOk = ALLOWED_EXTS.test(path.extname(file.originalname));
    const mimeOk = ALLOWED_MIMES.includes(file.mimetype);
    const genericMime = !file.mimetype || file.mimetype === 'application/octet-stream';
    console.log('File type check:', { extOk, mimeOk, genericMime });

    if (extOk && (mimeOk || genericMime)) return cb(null, true);
    if (mimeOk) return cb(null, true);
    cb(new ValidationError(`File type not allowed (${file.mimetype || 'unknown'})`));
  },
});

// ─── Step 2: custom S3 uploader middleware ────────────────────────────────────
const _uploadToS3 = async (req, res, next) => {
  if (!req.file) return next(); // no file attached — let controller handle it

  try {
    console.log('=== S3 UPLOAD START ===');
    console.log('S3_BUCKET:', BUCKET);
    console.log('AWS_REGION:', process.env.AWS_REGION);

    const sanitizedName = sanitize(req.file.originalname);
    const ext = path.extname(sanitizedName);
    const s3Key = `uploads/${req.user.id}/${uuidv4()}${ext}`;
    console.log('Generated S3 key:', s3Key);

    const uploader = new Upload({
      client: s3,
      params: {
        Bucket: BUCKET,
        Key: s3Key,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
        Metadata: {
          originalName: sanitizedName,
          userId: req.user.id,
          uploadedAt: new Date().toISOString(),
        },
      },
    });

    const result = await uploader.done();
    console.log('S3 upload result:', result);

    // Attach fields that fileController.js expects (mirrors what multer-s3 used to provide)
    req.file.key = s3Key;
    req.file.bucket = BUCKET;
    req.file.location = result.Location || `https://${BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;

    console.log('=== S3 UPLOAD SUCCESS ===', { key: req.file.key, location: req.file.location });
    next();
  } catch (err) {
    console.error('=== S3 UPLOAD FAILED ===', err);
    next(err);
  }
};

// ─── Quota check (runs after multer parses req.file) ─────────────────────────
const checkQuota = async (req, res, next) => {
  try {
    console.log('=== CHECK QUOTA MIDDLEWARE ===');
    console.log('REQ.USER:', req.user);

    const prisma = require('../config/database');
    const { getStorageQuotaBytes, syncExpiredTrial } = require('../services/userAccount');
    let user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) throw new ValidationError('User not found');
    user = await syncExpiredTrial(user.id);

    console.log('USER STORAGE:', { storageUsed: user.storageUsed, storageQuota: user.storageQuota });

    let totalSize = 0;
    if (req.file) totalSize = req.file.size;
    else if (req.files?.length) totalSize = req.files.reduce((sum, f) => sum + f.size, 0);

    console.log('UPLOAD SIZE:', totalSize);

    const quota = getStorageQuotaBytes(user);
    if (user.storageUsed + BigInt(totalSize) > quota) {
      console.error('ERROR: Storage quota exceeded');
      throw new QuotaExceededError('Storage quota exceeded');
    }

    console.log('QUOTA CHECK PASSED');
    next();
  } catch (error) {
    console.error('QUOTA CHECK ERROR:', error);
    next(error);
  }
};

// Combined middleware: multer memory parse → quota check → S3 upload
const upload = {
  single: (fieldName) => [_multerMemory.single(fieldName), checkQuota, _uploadToS3],
  array: (fieldName, max) => [_multerMemory.array(fieldName, max), checkQuota, _uploadToS3],
  fields: (fields) => [_multerMemory.fields(fields), checkQuota, _uploadToS3],
};

module.exports = {
  upload,
  checkQuota,
  MAX_FILE_SIZE,
};