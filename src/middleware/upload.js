
const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const sanitize = require('sanitize-filename');
const { s3, BUCKET } = require('../config/s3');
const { QuotaExceededError, ValidationError } = require('./errorHandler');

// Lower max upload size to 500MB to prevent server OOM/Disk exhaustion
const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE) || 500 * 1024 * 1024;

// Pre-check quota using Content-Length
const preCheckQuota = async (req, res, next) => {
  try {
    const contentLength = parseInt(req.headers['content-length'] || '0', 10);
    if (!contentLength) return next();

    const prisma = require('../config/database');
    const { getStorageQuotaBytes, syncExpiredTrial } = require('../services/userAccount');
    
    const user = await syncExpiredTrial(req.user.id);
    if (!user) throw new ValidationError('User not found');

    // Cache on req so checkQuota + controller don't re-fetch
    req._quotaUser = user;

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

// Stream files directly to S3
const _multerS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {
        originalName: sanitize(file.originalname),
        userId: req.user.id,
      });
    },
    key: function (req, file, cb) {
      const sanitizedName = sanitize(file.originalname);
      const ext = path.extname(sanitizedName);
      cb(null, `uploads/${req.user.id}/${uuidv4()}${ext}`);
    }
  }),
  limits: { fileSize: MAX_FILE_SIZE },
});

// Quota check (verifies actual file size)
const checkQuota = async (req, res, next) => {
  try {
    const { getStorageQuotaBytes, syncExpiredTrial } = require('../services/userAccount');

    // Reuse cached user from preCheckQuota if available
    const user = req._quotaUser || await syncExpiredTrial(req.user.id);
    if (!user) throw new ValidationError('User not found');
    req._quotaUser = user;

    let totalSize = 0;
    if (req.file) totalSize = req.file.size;
    else if (req.files?.length) totalSize = req.files.reduce((sum, f) => sum + f.size, 0);

    const quota = getStorageQuotaBytes(user);
    if (user.storageUsed + BigInt(totalSize) > quota) {
      throw new QuotaExceededError('Storage quota exceeded');
    }

    next();
  } catch (error) {
    // Clean up S3 files if quota fails
    const { DeleteObjectCommand } = require('@aws-sdk/client-s3');
    
    if (req.file && req.file.key) {
      s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: req.file.key })).catch(console.error);
    }
    if (req.files?.length) {
      req.files.forEach(f => {
        if (f.key) s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: f.key })).catch(console.error);
      });
    }
    next(error);
  }
};

// Combined upload middlewares
const upload = {
  single: (fieldName) => [preCheckQuota, _multerS3.single(fieldName), checkQuota],
  array: (fieldName, max) => [preCheckQuota, _multerS3.array(fieldName, max), checkQuota],
  fields: (fields) => [preCheckQuota, _multerS3.fields(fields), checkQuota],
};

module.exports = {
  upload,
  checkQuota,
  preCheckQuota,
  MAX_FILE_SIZE,
};