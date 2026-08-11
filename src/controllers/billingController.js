const prisma = require('../config/database');
const { PLANS, STORAGE_ADDONS } = require('../config/plans');
const {
  formatAccountUser,
  syncExpiredTrial,
  createNotification,
  getStorageQuotaBytes,
} = require('../services/userAccount');
const { ValidationError, ForbiddenError } = require('../middleware/errorHandler');
const { getCache, setCache, deleteCache } = require('../config/redis');

const listPlans = async (req, res, next) => {
  try {
    const cacheKey = 'billing_plans';
    let data = await getCache(cacheKey);
    if (!data) {
      data = {
        plans: Object.values(PLANS),
        addons: STORAGE_ADDONS,
      };
      await setCache(cacheKey, data, 3600); // 1 hour TTL
    }
    res.json({
      success: true,
      data,
    });
  } catch (e) {
    next(e);
  }
};

const changePlan = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      throw new ForbiddenError('Payment integration required for self-service upgrades');
    }
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
    
    await deleteCache(`user_profile_${req.user.id}`);
    await deleteCache(`user_auth_${req.user.id}`);
    await deleteCache(`billing_summary_${req.user.id}`);

    res.json({ success: true, data: formatAccountUser(user) });
  } catch (e) {
    next(e);
  }
};

const purchaseStorage = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      throw new ForbiddenError('Payment integration required for self-service storage purchases');
    }
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
    
    await deleteCache(`user_profile_${req.user.id}`);
    await deleteCache(`user_auth_${req.user.id}`);
    await deleteCache(`billing_summary_${req.user.id}`);
    
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
    const cacheKey = `billing_summary_${req.user.id}`;
    let data = await getCache(cacheKey);
    
    if (data) {
      data.account.storageUsed = BigInt(data.account.storageUsed);
      data.account.storageQuota = BigInt(data.account.storageQuota);
      if (data.account.extraStorageBytes) data.account.extraStorageBytes = BigInt(data.account.extraStorageBytes);
      return res.json({ success: true, data });
    }

    const user = await syncExpiredTrial(req.user.id);
    const full = await prisma.user.findUnique({ where: { id: user.id } });
    const account = formatAccountUser(full);

    data = {
      account,
      plans: Object.values(PLANS),
      addons: STORAGE_ADDONS,
    };
    
    const dataForCache = {
      ...data,
      account: {
        ...account,
        storageUsed: account.storageUsed.toString(),
        storageQuota: account.storageQuota.toString(),
        extraStorageBytes: account.extraStorageBytes ? account.extraStorageBytes.toString() : null,
      }
    };
    await setCache(cacheKey, dataForCache, 60);

    res.json({
      success: true,
      data,
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
