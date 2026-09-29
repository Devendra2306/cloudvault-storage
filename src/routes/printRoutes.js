const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const prisma = require('../config/database');
const { generatePresignedDownloadUrl } = require('../services/s3Service');

// In-memory store for 6-digit print codes (expires quickly, perfectly fine to keep in memory)
const printCodes = new Map();

// Helper to generate 6 digit code
const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

/**
 * @route   POST /api/v1/print/from-drive
 * @desc    Generate a 6-digit print code for a file
 * @access  Private
 */
router.post('/from-drive', authenticate, async (req, res, next) => {
  try {
    const { fileId } = req.body;
    
    if (!fileId) {
      return res.status(400).json({ success: false, error: 'fileId is required' });
    }

    const file = await prisma.file.findFirst({
      where: { id: fileId, userId: req.user.id, trashedAt: null }
    });

    if (!file) {
      return res.status(404).json({ success: false, error: 'File not found' });
    }

    let code;
    // ensure uniqueness in memory
    do {
      code = generateCode();
    } while (printCodes.has(code));

    // Expires in 15 minutes
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    printCodes.set(code, {
      fileId: file.id,
      name: file.name,
      mimeType: file.mimeType,
      s3Key: file.s3Key,
      s3Bucket: file.s3Bucket,
      expiresAt: expiresAt.getTime()
    });

    // Cleanup interval (basic)
    setTimeout(() => {
      printCodes.delete(code);
    }, 15 * 60 * 1000);

    res.json({
      success: true,
      data: {
        code,
        expiresAt: expiresAt.toISOString(),
        fileName: file.name
      }
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route   GET /api/v1/print/:code
 * @desc    Get file info by 6-digit code
 * @access  Public
 */
router.get('/:code', async (req, res, next) => {
  try {
    const { code } = req.params;
    const printJob = printCodes.get(code);

    if (!printJob || Date.now() > printJob.expiresAt) {
      if (printJob) printCodes.delete(code);
      return res.status(404).json({ success: false, error: 'Invalid or expired print code' });
    }

    res.json({
      success: true,
      data: {
        fileName: printJob.name,
        mimeType: printJob.mimeType,
        expiresAt: new Date(printJob.expiresAt).toISOString()
      }
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route   GET /api/v1/print/:code/download
 * @desc    Download the file using the 6-digit code
 * @access  Public
 */
router.get('/:code/download', async (req, res, next) => {
  try {
    const { code } = req.params;
    const printJob = printCodes.get(code);

    if (!printJob || Date.now() > printJob.expiresAt) {
      if (printJob) printCodes.delete(code);
      return res.status(404).json({ success: false, error: 'Invalid or expired print code' });
    }

    // Generate presigned download URL
    const downloadUrl = await generatePresignedDownloadUrl(printJob.s3Key, printJob.name);
    
    // We could delete the code immediately after download for 1-time use, but users might fail to print and retry.
    // Let's keep it until expiry.

    res.json({
      success: true,
      data: {
        downloadUrl,
        fileName: printJob.name
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
