const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');
const { authenticate } = require('../middleware/auth');

router.get('/plans', billingController.listPlans);
router.get('/summary', authenticate, billingController.getBillingSummary);
router.post('/plan', authenticate, billingController.changePlan);
router.post('/storage', authenticate, billingController.purchaseStorage);

module.exports = router;
