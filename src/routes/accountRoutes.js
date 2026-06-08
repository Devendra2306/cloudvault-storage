const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, accountController.getAccount);
router.get('/sessions', authenticate, accountController.listSessions);
router.delete('/sessions', authenticate, accountController.revokeAllSessions);
router.delete('/sessions/:id', authenticate, accountController.revokeSession);
router.get('/security/login-history', authenticate, accountController.getLoginHistory);
router.get('/activity', authenticate, accountController.getActivityFeed);
router.post('/verify-email/resend', authenticate, accountController.resendVerification);
router.post('/security/2fa', authenticate, accountController.toggleTwoFactor);
router.delete('/', authenticate, accountController.deleteAccount);

module.exports = router;
