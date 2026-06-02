const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
} = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { NodeHttpHandler } = require('@smithy/node-http-handler');
const http = require('http');
const https = require('https');

// S3 Client with connection pooling
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  requestHandler: new NodeHttpHandler({
    connectionTimeout: 3000,
    socketTimeout: 300000,
    httpAgent: new http.Agent({
      keepAlive: true,
      maxSockets: 50,
      maxFreeSockets: 10,
    }),
    httpsAgent: new https.Agent({
      keepAlive: true,
      maxSockets: 50,
      maxFreeSockets: 10,
    }),
  }),
});

const BUCKET = process.env.AWS_S3_BUCKET_NAME;

/**
 * Generate a pre-signed URL for S3 object
 */
const getSignedFileUrl = async (key, expiresInSeconds = 3600) => {
  const command = new GetObjectCommand({ Bucket: BUCKET, Key: key });
  return getSignedUrl(s3, command, { expiresIn: expiresInSeconds });
};

/**
 * Delete a file from S3
 */
const deleteFile = async (key) => {
  try {
    await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }));
    return { success: true };
  } catch (err) {
    if (err.name === 'NoSuchKey') {
      throw new Error('File not found');
    }
    throw err;
  }
};

/**
 * List files in a folder/prefix
 */
const listFiles = async (prefix = 'uploads/', maxKeys = 1000, continuationToken = null) => {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET,
    Prefix: prefix,
    MaxKeys: maxKeys,
    ContinuationToken: continuationToken,
  });
  const response = await s3.send(command);
  return {
    files: (response.Contents || []).map((obj) => ({
      key: obj.Key,
      size: obj.Size,
      lastModified: obj.LastModified,
    })),
    isTruncated: response.IsTruncated,
    nextContinuationToken: response.NextContinuationToken,
  };
};

module.exports = {
  s3,
  BUCKET,
  getSignedFileUrl,
  deleteFile,
  listFiles,
};
