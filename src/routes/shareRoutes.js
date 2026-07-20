const express = require('express');
const router = express.Router();
const shareController = require('../controllers/shareController');
const { authenticate, optionalAuthenticate } = require('../middleware/auth');
const { validate, schemas } = require('../middleware/validation');

/**
 * @route   POST /api/v1/files/:id/share
 * @desc    Create a share link for file
 * @access  Private
 */
router.post('/files/:id/share', authenticate, validate(schemas.createFileShare), shareController.createFileShare);

/**
 * @route   POST /api/v1/files/:id/share/user
 * @desc    Share file with specific user
 * @access  Private
 */
router.post('/files/:id/share/user', authenticate, validate(schemas.shareFileWithUser), shareController.shareFileWithUser);

/**
 * @route   GET /api/v1/files/:id/shares
 * @desc    List all shares for a file
 * @access  Private
 */
router.get('/files/:id/shares', authenticate, shareController.listFileShares);

/**
 * @route   DELETE /api/v1/files/:id/shares/:shareId
 * @desc    Revoke file share
 * @access  Private
 */
router.delete('/files/:id/shares/:shareId', authenticate, shareController.revokeFileShare);

/**
 * @route   GET /api/v1/share/:token
 * @desc    Access shared file (public endpoint)
 * @access  Public
 */
router.get('/share/:token', optionalAuthenticate, shareController.accessSharedFile);

/**
 * @route   GET /api/v1/share/:token/download
 * @desc    Download shared file (public endpoint - streams from S3)
 * @access  Public
 */
router.get('/share/:token/download', shareController.downloadSharedFile);

/**
 * @route   GET /api/v1/share/:token/preview
 * @desc    Preview/stream shared file inline (public endpoint)
 * @access  Public
 */
router.get('/share/:token/preview', shareController.previewSharedFile);

/**
 * @route   POST /api/v1/folders/:id/share
 * @desc    Share folder with user
 * @access  Private
 */
router.post('/folders/:id/share', authenticate, validate(schemas.shareFolder), shareController.shareFolder);

/**
 * @route   GET /api/v1/folders/:id/shares
 * @desc    List folder shares
 * @access  Private
 */
router.get('/folders/:id/shares', authenticate, shareController.listFolderShares);

/**
 * @route   DELETE /api/v1/folders/:id/shares/:shareId
 * @desc    Revoke folder share
 * @access  Private
 */
router.delete('/folders/:id/shares/:shareId', authenticate, shareController.revokeFolderShare);

module.exports = router;
