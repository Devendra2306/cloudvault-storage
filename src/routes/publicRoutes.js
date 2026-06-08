const express = require('express');
const router = express.Router();
const { getPublicStats } = require('../controllers/publicStatsController');

router.get('/stats', getPublicStats);

module.exports = router;
