const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const sanitize = require('sanitize-filename');
const { s3, BUCKET } = require('../config/s3');
const { QuotaExceededError, ValidationError } = require('./errorHandler');

// File size limit (from env or default 100MB)
const MAX_FILE_SIZE = parseInt(process.env.MAX_FILE_SIZE) || 100 * 1024 * 1024;

// Allowed file types
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
  'audio/wav',
];

const ALLOWED_EXTS = /\.jpeg$|\.jpg$|\.png$|\.gif$|\.webp$|\.pdf$|\.doc$|\.docx$|\.txt$|\.xls$|\.xlsx$|\.ppt$|\.pptx$|\.mp4$|\.mpeg$|\.mp3$|\.wav$/i;

// Multer S3 storage configuration
const upload = multer({
  storage: multerS3({
    s3,
    bucket: BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      try {
        console.log('=== UPLOAD KEY GENERATION ===');
        console.log('S3_BUCKET:', BUCKET);
        console.log('AWS_REGION:', process.env.AWS_REGION);
        console.log('Upload attempt:', { userId: req.user?.id, filename: file.originalname });
        const sanitizedName = sanitize(file.originalname);
        const ext = path.extname(sanitizedName);
        const uniqueKey = `uploads/${req.user.id}/${uuidv4()}${ext}`;
        console.log('Generated S3 key:', uniqueKey);
        cb(null, uniqueKey);
      } catch (err) {
        console.error('Error generating S3 key:', err);
        cb(err);
      }
    },
    metadata: (req, file, cb) => {
      try {
        console.log('=== UPLOAD METADATA ===');
        const sanitizedName = sanitize(file.originalname);
        console.log('Metadata:', { originalName: sanitizedName, userId: req.user.id });
        cb(null, {
          originalName: sanitizedName,
          userId: req.user.id,
          uploadedAt: new Date().toISOString(),
        });
      } catch (err) {
        console.error('Error generating metadata:', err);
        cb(err);
      }
    },
  }),
  limits: {
    fileSize: MAX_FILE_SIZE,
  },
  fileFilter: (req, file, cb) => {
    console.log('=== FILE FILTER ===');
    console.log('File:', { originalname: file.originalname, mimetype: file.mimetype });
    const ext = ALLOWED_EXTS.test(path.extname(file.originalname).toLowerCase());
    const mime = ALLOWED_MIMES.includes(file.mimetype);
    console.log('File type check:', { ext, mime });

    if (ext && mime) {
      return cb(null, true);
    }

    cb(new ValidationError('File type not allowed'));
  },
});

// Middleware to check storage quota before upload
const checkQuota = async (req, res, next) => {
  try {
    const prisma = require('../config/database');
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { storageUsed: true, storageQuota: true },
    });

    if (!user) {
      throw new ValidationError('User not found');
    }

    // Calculate total size of files being uploaded
    let totalSize = 0;
    if (req.file) {
      totalSize = req.file.size;
    } else if (req.files && Array.isArray(req.files)) {
      totalSize = req.files.reduce((sum, file) => sum + file.size, 0);
    }

    if (user.storageUsed + BigInt(totalSize) > user.storageQuota) {
      throw new QuotaExceededError('Storage quota exceeded');
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  upload,
  checkQuota,
  MAX_FILE_SIZE,
};
