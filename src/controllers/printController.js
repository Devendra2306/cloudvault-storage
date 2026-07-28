const prisma = require('../config/database');
const { s3, BUCKET } = require('../config/s3');
const { Upload } = require('@aws-sdk/lib-storage');
const { GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const sanitize = require('sanitize-filename');

// Helper to generate a 4-digit code
const generateCode = async () => {
  let code;
  let exists = true;
  while (exists) {
    code = Math.floor(1000 + Math.random() * 9000).toString(); // 1000-9999
    const count = await prisma.printJob.count({ where: { code } });
    if (count === 0) exists = false;
  }
  return code;
};

// Upload file to S3 and create PrintJob
const uploadPrintJob = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file uploaded' });
    }

    const sanitizedName = sanitize(req.file.originalname);
    const ext = path.extname(sanitizedName);
    const s3Key = `print-queue/${uuidv4()}${ext}`;

    // Upload to S3
    const uploader = new Upload({
      client: s3,
      params: {
        Bucket: BUCKET,
        Key: s3Key,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
        Metadata: {
          originalName: sanitizedName,
          type: 'print-job',
        },
      },
    });

    await uploader.done();

    const code = await generateCode();
    
    // Expires in 24 hours
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    const printJob = await prisma.printJob.create({
      data: {
        code,
        fileName: sanitizedName,
        fileSize: req.file.size,
        mimeType: req.file.mimetype,
        s3Key,
        expiresAt,
      },
    });

    res.status(201).json({
      success: true,
      data: {
        code: printJob.code,
        fileName: printJob.fileName,
        expiresAt: printJob.expiresAt,
      }
    });
  } catch (error) {
    console.error('Print upload error:', error);
    next(error);
  }
};

// Get job details by code
const getPrintJob = async (req, res, next) => {
  try {
    const { code } = req.params;
    const printJob = await prisma.printJob.findUnique({ where: { code } });

    if (!printJob) {
      return res.status(404).json({ success: false, error: 'Code not found or expired' });
    }

    res.json({
      success: true,
      data: {
        code: printJob.code,
        fileName: printJob.fileName,
        fileSize: printJob.fileSize.toString(),
        mimeType: printJob.mimeType,
        status: printJob.status,
        createdAt: printJob.createdAt,
        expiresAt: printJob.expiresAt,
      }
    });
  } catch (error) {
    next(error);
  }
};

// Download/Stream file
const downloadPrintJob = async (req, res, next) => {
  try {
    const { code } = req.params;
    const { preview } = req.query; // ?preview=true to view inline

    const printJob = await prisma.printJob.findUnique({ where: { code } });

    if (!printJob) {
      return res.status(404).json({ success: false, error: 'Code not found or expired' });
    }

    const command = new GetObjectCommand({
      Bucket: BUCKET,
      Key: printJob.s3Key,
    });

    const s3Item = await s3.send(command);

    if (preview === 'true') {
      res.setHeader('Content-Disposition', `inline; filename="${encodeURIComponent(printJob.fileName)}"`);
    } else {
      res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(printJob.fileName)}"`);
    }

    if (printJob.mimeType) {
      res.setHeader('Content-Type', printJob.mimeType);
    }

    res.setHeader('Content-Length', printJob.fileSize.toString());

    // Update download count and status if not previewing
    if (preview !== 'true') {
      await prisma.printJob.update({
        where: { id: printJob.id },
        data: {
          downloads: { increment: 1 },
          status: 'downloaded'
        }
      });
    }

    s3Item.Body.pipe(res);
  } catch (error) {
    if (error.name === 'NoSuchKey') {
      return res.status(404).json({ success: false, error: 'File not found on storage' });
    }
    next(error);
  }
};

// Delete a print job
const deletePrintJob = async (req, res, next) => {
  try {
    const { code } = req.params;
    const printJob = await prisma.printJob.findUnique({ where: { code } });

    if (!printJob) {
      return res.status(404).json({ success: false, error: 'Code not found' });
    }

    // Delete from S3
    await s3.send(new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: printJob.s3Key
    }));

    // Delete from DB
    await prisma.printJob.delete({ where: { id: printJob.id } });

    res.json({ success: true, message: 'Print job deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Cleanup expired jobs (can be called by a cron)
const cleanupExpiredJobs = async () => {
  try {
    const expiredJobs = await prisma.printJob.findMany({
      where: { expiresAt: { lt: new Date() } }
    });

    for (const job of expiredJobs) {
      try {
        await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: job.s3Key }));
        await prisma.printJob.delete({ where: { id: job.id } });
      } catch (err) {
        console.error(`Failed to cleanup expired job ${job.id}:`, err);
      }
    }
  } catch (error) {
    console.error('Error during cleanupExpiredJobs:', error);
  }
};

module.exports = {
  uploadPrintJob,
  getPrintJob,
  downloadPrintJob,
  deletePrintJob,
  cleanupExpiredJobs
};
