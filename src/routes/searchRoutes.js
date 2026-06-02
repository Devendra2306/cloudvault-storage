const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
const { authenticate } = require('../middleware/auth');
const { validate, schemas } = require('../middleware/validation');

/**
 * @route   GET /api/v1/search
 * @desc    Search files and folders
 * @access  Private
 */
router.get('/', authenticate, validate(schemas.search), searchController.search);

module.exports = router;
