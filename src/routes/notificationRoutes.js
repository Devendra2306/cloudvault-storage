const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, notificationController.listNotifications);
router.post('/read-all', authenticate, notificationController.markAllRead);
router.post('/:id/read', authenticate, notificationController.markRead);

module.exports = router;
