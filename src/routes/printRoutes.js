const express = require('express');
const router = express.Router();
const multer = require('multer');
const printController = require('../controllers/printController');
const { authenticate } = require('../middleware/auth');
const rateLimit = require('express-rate-limit');

const printLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 print jobs per windowMs
  message: { success: false, error: 'Too many print jobs created from this IP, please try again after an hour.' }
});

const os = require('os');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Configure multer for disk storage (prevent OOM)
const upload = multer({
  storage: multer.diskStorage({
    destination: os.tmpdir(),
    filename: (req, file, cb) => cb(null, uuidv4() + path.extname(file.originalname))
  }),
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
});

/**
 * @route   POST /api/v1/print/upload
 * @desc    Upload multiple files and get a print code
 * @access  Public
 */
router.post('/upload', printLimiter, upload.array('files', 10), printController.uploadPrintJob);

/**
 * @route   POST /api/v1/print/from-drive
 * @desc    Create a print job from an existing Drive file
 * @access  Private (requires auth)
 */
router.post('/from-drive', authenticate, printController.createPrintJobFromDrive);

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

