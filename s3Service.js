const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const sanitize = require("sanitize-filename");

// ─── S3 Client Setup ─────────────────────────────────────────────────────────
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const BUCKET = process.env.AWS_S3_BUCKET_NAME;

// ─── Multer + S3 Upload Middleware ────────────────────────────────────────────
const upload = multer({
  storage: multerS3({
    s3,
    bucket: BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      try {
        const sanitizedName = sanitize(file.originalname);
        const ext = path.extname(sanitizedName);
        const uniqueKey = `uploads/${uuidv4()}${ext}`;
        cb(null, uniqueKey);
      } catch (err) {
        cb(err);
      }
    },
    metadata: (req, file, cb) => {
      try {
        const sanitizedName = sanitize(file.originalname);
        cb(null, { originalName: sanitizedName });
      } catch (err) {
        cb(err);
      }
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (req, file, cb) => {
    const allowedExts = /\.jpeg$|\.jpg$|\.png$|\.gif$|\.webp$|\.pdf$|\.doc$|\.docx$|\.txt$/i;
    const allowedMimes = [
      'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp',
      'application/pdf', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];
    const ext = allowedExts.test(path.extname(file.originalname).toLowerCase());
    const mime = allowedMimes.includes(file.mimetype);
    if (ext && mime) return cb(null, true);
    cb(new Error("File type not allowed"));
  },
});

// ─── Generate a Pre-signed URL to serve/download a private file ───────────────
async function getSignedFileUrl(key, expiresInSeconds = 3600) {
  const command = new GetObjectCommand({ Bucket: BUCKET, Key: key });
  return getSignedUrl(s3, command, { expiresIn: expiresInSeconds });
}

// ─── Delete a file from S3 ────────────────────────────────────────────────────
async function deleteFile(key) {
  try {
    await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }));
    return { success: true };
  } catch (err) {
    if (err.name === 'NoSuchKey') {
      throw new Error('File not found');
    }
    throw err;
  }
}

// ─── List files in a folder/prefix ───────────────────────────────────────────
async function listFiles(prefix = "uploads/", maxKeys = 1000, continuationToken = null) {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET,
    Prefix: prefix,
    MaxKeys: maxKeys,
    ContinuationToken: continuationToken
  });
  const response = await s3.send(command);
  return {
    files: (response.Contents || []).map((obj) => ({
      key: obj.Key,
      size: obj.Size,
      lastModified: obj.LastModified,
    })),
    isTruncated: response.IsTruncated,
    nextContinuationToken: response.NextContinuationToken
  };
}

module.exports = { s3, upload, getSignedFileUrl, deleteFile, listFiles };
