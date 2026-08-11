const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { authenticate } = require('../middleware/auth');

// POST /api/v1/chat/ask
router.post('/ask', authenticate, chatController.askChatbot);

module.exports = router;
