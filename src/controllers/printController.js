const prisma = require('../config/database');
const { s3, BUCKET, PRINT_BUCKET } = require('../config/s3');
const { Upload } = require('@aws-sdk/lib-storage');
const { GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
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

// Upload files to S3 and create PrintJob + PrintFiles
const uploadPrintJob = async (req, res, next) => {
  const uploadedS3Keys = [];
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, error: 'No files uploaded' });
    }

    const code = await generateCode();
    
    // Expires in 24 hours
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    const printJob = await prisma.printJob.create({
      data: {
        code,
        expiresAt,
      },
    });

    const filePromises = req.files.map(async (file) => {
      const sanitizedName = sanitize(file.originalname);
      const ext = path.extname(sanitizedName);
      const s3Key = `print-queue/${uuidv4()}${ext}`;

      // Upload to S3
      const uploader = new Upload({
        client: s3,
        params: {
          Bucket: PRINT_BUCKET,
          Key: s3Key,
          Body: fs.createReadStream(file.path),
          ContentType: file.mimetype,
          Metadata: {
            originalName: sanitizedName,
            type: 'print-job',
          },
        },
      });

      await uploader.done();
      uploadedS3Keys.push(s3Key);

      return prisma.printFile.create({
        data: {
          jobId: printJob.id,
          fileName: sanitizedName,
          fileSize: file.size,
          mimeType: file.mimetype,
          s3Key,
        },
      });
    });

    const savedFiles = await Promise.all(filePromises);

    res.status(201).json({
      success: true,
      data: {
        code: printJob.code,
        expiresAt: printJob.expiresAt,
        files: savedFiles.map(f => ({
          id: f.id,
          fileName: f.fileName,
          fileSize: f.fileSize.toString(),
          mimeType: f.mimeType
        }))
      }
    });
  } catch (error) {
    console.error('Print upload error:', error);
    // Cleanup orphaned S3 objects
    for (const key of uploadedS3Keys) {
      try {
        await s3.send(new DeleteObjectCommand({ Bucket: PRINT_BUCKET, Key: key }));
      } catch (err) {
        console.error('Failed to cleanup orphaned S3 print file:', key, err);
      }
    }
    next(error);
  } finally {
    // Cleanup temporary multer files
    if (req.files) {
      for (const file of req.files) {
        if (file.path) {
          fs.unlink(file.path, (err) => {
            if (err) console.error('Failed to cleanup temp print file:', err);
          });
        }
      }
    }
  }
};

// Create a print job from an existing Drive file (no re-upload needed)
const createPrintJobFromDrive = async (req, res, next) => {
  try {
    const { fileId } = req.body;
    if (!fileId) {
      return res.status(400).json({ success: false, error: 'fileId is required' });
    }

    // Verify the file belongs to the user
    const file = await prisma.file.findFirst({
      where: { id: fileId, userId: req.user.id, deletedAt: null },
    });

    if (!file) {
      return res.status(404).json({ success: false, error: 'File not found' });
    }

    const code = await generateCode();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    const printJob = await prisma.printJob.create({
      data: {
        code,
        expiresAt,
      },
    });

    const printFile = await prisma.printFile.create({
      data: {
        jobId: printJob.id,
        fileName: file.name,
        fileSize: file.size,
        mimeType: file.mimeType,
        s3Key: file.s3Key,
        isDriveRef: true, // Mark as Drive reference so we don't delete the original
      },
    });

    res.status(201).json({
      success: true,
      data: {
        code: printJob.code,
        expiresAt: printJob.expiresAt,
        files: [{
          id: printFile.id,
          fileName: printFile.fileName,
          fileSize: printFile.fileSize.toString(),
          mimeType: printFile.mimeType,
        }]
      }
    });
  } catch (error) {
    console.error('Print from drive error:', error);
    next(error);
  }
};

// Get job details by code
const getPrintJob = async (req, res, next) => {
  try {
    const { code } = req.params;
    const printJob = await prisma.printJob.findUnique({ 
      where: { code },
      include: { files: true }
    });

    if (!printJob) {
      return res.status(404).json({ success: false, error: 'Code not found or expired' });
    }

    res.json({
      success: true,
      data: {
        code: printJob.code,
        status: printJob.status,
        createdAt: printJob.createdAt,
        expiresAt: printJob.expiresAt,
        files: printJob.files.map(f => ({
          id: f.id,
          fileName: f.fileName,
          fileSize: f.fileSize.toString(),
          mimeType: f.mimeType,
          downloads: f.downloads
        }))
      }
    });
  } catch (error) {
    next(error);
  }
};

// Download/Stream file (requires fileId now since a job can have multiple files)
const downloadPrintJob = async (req, res, next) => {
  try {
    const { code } = req.params;
    const { fileId } = req.query; // Must pass ?fileId=...
    const { preview } = req.query; // ?preview=true to view inline

    if (!fileId) {
      return res.status(400).json({ success: false, error: 'fileId query parameter required' });
    }

    const printFile = await prisma.printFile.findUnique({
      where: { id: fileId },
      include: { job: true }
    });

    if (!printFile || printFile.job.code !== code) {
      return res.status(404).json({ success: false, error: 'File not found' });
    }

    const command = new GetObjectCommand({
      Bucket: printFile.isDriveRef ? BUCKET : PRINT_BUCKET,
      Key: printFile.s3Key,
    });

    const s3Item = await s3.send(command);

    if (preview === 'true') {
      res.setHeader('Content-Disposition', `inline; filename="${encodeURIComponent(printFile.fileName)}"`);
    } else {
      res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(printFile.fileName)}"`);
    }

    if (printFile.mimeType) {
      res.setHeader('Content-Type', printFile.mimeType);
    }

    res.setHeader('Content-Length', printFile.fileSize.toString());

    // Update download count if not previewing
    if (preview !== 'true') {
      await prisma.printFile.update({
        where: { id: printFile.id },
        data: { downloads: { increment: 1 } }
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

// Delete a single file from a print job
const deletePrintJob = async (req, res, next) => {
  try {
    const { code } = req.params;
    const { fileId } = req.query;
    
    if (fileId) {
      const printFile = await prisma.printFile.findUnique({ where: { id: fileId }, include: { job: true } });
      if (!printFile || printFile.job.code !== code) {
        return res.status(404).json({ success: false, error: 'File not found' });
      }
      // Only delete from S3 if it's NOT a Drive reference
      if (!printFile.isDriveRef) {
        await s3.send(new DeleteObjectCommand({ Bucket: PRINT_BUCKET, Key: printFile.s3Key }));
      }
      await prisma.printFile.delete({ where: { id: fileId } });
      return res.json({ success: true, message: 'File deleted successfully' });
    }

    // If no fileId, delete the whole job
    const printJob = await prisma.printJob.findUnique({ where: { code }, include: { files: true } });
    if (!printJob) return res.status(404).json({ success: false, error: 'Code not found' });

    for (const f of printJob.files) {
      // Only delete from S3 if it's NOT a Drive reference
      if (!f.isDriveRef) {
        await s3.send(new DeleteObjectCommand({ Bucket: PRINT_BUCKET, Key: f.s3Key }));
      }
    }
    await prisma.printJob.delete({ where: { id: printJob.id } });

    res.json({ success: true, message: 'Print job deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Cleanup expired jobs
const cleanupExpiredJobs = async () => {
  try {
    const expiredJobs = await prisma.printJob.findMany({
      where: { expiresAt: { lt: new Date() } },
      include: { files: true }
    });

    for (const job of expiredJobs) {
      try {
        for (const f of job.files) {
          // Only delete from S3 if it's NOT a Drive reference
          if (!f.isDriveRef) {
            await s3.send(new DeleteObjectCommand({ Bucket: PRINT_BUCKET, Key: f.s3Key }));
          }
        }
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
  createPrintJobFromDrive,
  getPrintJob,
  downloadPrintJob,
  deletePrintJob,
  cleanupExpiredJobs
};

