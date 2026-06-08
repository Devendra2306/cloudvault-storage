const prisma = require('../config/database');
const { PLANS, STORAGE_ADDONS } = require('../config/plans');
const {
  formatAccountUser,
  syncExpiredTrial,
  createNotification,
  getStorageQuotaBytes,
} = require('../services/userAccount');
const { ValidationError } = require('../middleware/errorHandler');

const listPlans = async (req, res, next) => {
  try {
    res.json({
      success: true,
      data: {
        plans: Object.values(PLANS),
        addons: STORAGE_ADDONS,
      },
    });
  } catch (e) {
    next(e);
  }
};

const changePlan = async (req, res, next) => {
  try {
    const { planId } = req.body;
    if (!PLANS[planId] || planId === 'free') {
      throw new ValidationError('Invalid plan');
    }

    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        plan: planId,
        trialEndsAt: null,
        storageQuota: BigInt(PLANS[planId].storageBytes),
      },
    });

    await createNotification(
      req.user.id,
      'plan_changed',
      'Plan updated',
      `You are now on the ${PLANS[planId].name} plan.`,
      { planId }
    );

    res.json({ success: true, data: formatAccountUser(user) });
  } catch (e) {
    next(e);
  }
};

const purchaseStorage = async (req, res, next) => {
  try {
    const { addonId } = req.body;
    const addon = STORAGE_ADDONS.find((a) => a.id === addonId);
    if (!addon) throw new ValidationError('Invalid storage add-on');

    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    const extra = BigInt(user.extraStorageBytes || 0) + BigInt(addon.bytes);

    const updated = await prisma.user.update({
      where: { id: req.user.id },
      data: { extraStorageBytes: extra },
    });

    await createNotification(
      req.user.id,
      'storage_purchased',
      'Storage added',
      `${addon.label} has been added to your account.`,
      { addonId }
    );

    const synced = await syncExpiredTrial(updated.id);
    res.json({
      success: true,
      data: formatAccountUser(synced),
      message: 'Storage add-on applied. Payment integration connects in production.',
    });
  } catch (e) {
    next(e);
  }
};

const getBillingSummary = async (req, res, next) => {
  try {
    const user = await syncExpiredTrial(req.user.id);
    const full = await prisma.user.findUnique({ where: { id: user.id } });
    const account = formatAccountUser(full);

    res.json({
      success: true,
      data: {
        account,
        plans: Object.values(PLANS),
        addons: STORAGE_ADDONS,
      },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  listPlans,
  changePlan,
  purchaseStorage,
  getBillingSummary,
};
