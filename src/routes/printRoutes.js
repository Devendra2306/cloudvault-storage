const express = require('express');
const router = express.Router();
const multer = require('multer');
const printController = require('../controllers/printController');

// Configure multer for memory storage (up to 50MB)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
});

/**
 * @route   POST /api/v1/print/upload
 * @desc    Upload multiple files and get a print code
 * @access  Public
 */
router.post('/upload', upload.array('files', 10), printController.uploadPrintJob);

/**
 * @route   GET /api/v1/print/:code
 * @desc    Get print job details by code
 * @access  Public
 */
router.get('/:code', printController.getPrintJob);

/**
 * @route   GET /api/v1/print/:code/download
 * @desc    Download the print job file
 * @access  Public
 */
router.get('/:code/download', printController.downloadPrintJob);

/**
 * @route   GET /api/v1/print/:code/preview
 * @desc    Inline preview of the print job file
 * @access  Public
 */
router.get('/:code/preview', (req, res, next) => {
  req.query.preview = 'true';
  next();
}, printController.downloadPrintJob);

/**
 * @route   DELETE /api/v1/print/:code
 * @desc    Delete the print job
 * @access  Public
 */
router.delete('/:code', printController.deletePrintJob);

module.exports = router;
