const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const { authenticate } = require('../middleware/auth');
const { validate, schemas } = require('../middleware/validation');
const { upload, checkQuota } = require('../middleware/upload');
const { requireVerified } = require('../middleware/requireVerified');

/**
 * @route   POST /api/v1/files/upload
 * @desc    Upload a file
 * @access  Private
 */
router.post('/upload', authenticate, requireVerified, checkQuota, upload.single('file'), fileController.uploadFile);

/**
 * @route   GET /api/v1/files
 * @desc    List user's files
 * @access  Private
 */
router.get('/', authenticate, fileController.listFiles);

/**
 * @route   GET /api/v1/files/tags
 * @desc    List user's file tags
 * @access  Private
 */
router.get('/tags', authenticate, fileController.listFileTags);

/**
 * @route   GET /api/v1/files/:id
 * @desc    Get file details
 * @access  Private
 */
router.get('/:id', authenticate, fileController.getFile);

/**
 * @route   GET /api/v1/files/:id/download
 * @desc    Stream file download with correct headers
 * @access  Private
 */
router.get('/:id/download', authenticate, fileController.downloadFile);

/**
 * @route   GET /api/v1/files/:id/preview
 * @desc    Stream file for inline preview
 * @access  Private
 */
router.get('/:id/preview', authenticate, fileController.previewFile);

/**
 * @route   GET /api/v1/files/:id/download-url
 * @desc    Get signed download URL
 * @access  Private
 */
router.get('/:id/download-url', authenticate, fileController.getDownloadUrl);

/**
 * @route   PUT /api/v1/files/:id
 * @desc    Update file details
 * @access  Private
 */
router.put('/:id', authenticate, validate(schemas.updateFile), fileController.updateFile);

/**
 * @route   POST /api/v1/files/:id/move
 * @desc    Move file to another folder
 * @access  Private
 */
router.post('/:id/move', authenticate, validate(schemas.moveFile), fileController.moveFile);

/**
 * @route   POST /api/v1/files/:id/copy
 * @desc    Copy file to another folder
 * @access  Private
 */
router.post('/:id/copy', authenticate, validate(schemas.copyFile), fileController.copyFile);

/**
 * @route   DELETE /api/v1/files/:id
 * @desc    Delete file (move to trash)
 * @access  Private
 */
router.delete('/:id', authenticate, fileController.deleteFile);

/**
 * @route   POST /api/v1/files/:id/restore
 * @desc    Restore file from trash
 * @access  Private
 */
router.post('/:id/restore', authenticate, fileController.restoreFile);

/**
 * @route   DELETE /api/v1/files/:id/permanent
 * @desc    Permanently delete file
 * @access  Private
 */
router.delete('/:id/permanent', authenticate, fileController.permanentDeleteFile);

module.exports = router;
