const prisma = require('../config/database');
const { PLANS, TRIAL_DAYS } = require('../config/plans');
const { isEmailVerificationEnforced } = require('../config/emailPolicy');

const MS_DAY = 24 * 60 * 60 * 1000;

function resolvePlan(user) {
  const now = Date.now();
  if (user.trialEndsAt && new Date(user.trialEndsAt).getTime() > now) {
    return 'pro';
  }
  return user.plan || 'free';
}

function getStorageQuotaBytes(user) {
  const planId = resolvePlan(user);
  const base = PLANS[planId]?.storageBytes || PLANS.free.storageBytes;
  return BigInt(base) + BigInt(user.extraStorageBytes || 0);
}

async function syncExpiredTrial(userId) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user?.trialEndsAt) return user;
  if (new Date(user.trialEndsAt) > new Date()) return user;

  if (user.plan === 'pro' && user.trialEndsAt) {
    return prisma.user.update({
      where: { id: userId },
      data: { plan: 'free', trialEndsAt: null },
    });
  }
  return user;
}

function trialDaysLeft(trialEndsAt) {
  if (!trialEndsAt) return 0;
  const diff = new Date(trialEndsAt).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / MS_DAY));
}

function formatAccountUser(user) {
  const plan = resolvePlan(user);
  const quota = getStorageQuotaBytes(user);
  const used = BigInt(user.storageUsed || 0);
  const pct = quota > 0n ? Number((used * 10000n) / quota) / 100 : 0;

  return {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    avatarUrl: user.avatarUrl,
    authProvider: user.authProvider,
    role: user.role,
    isVerified: user.isVerified,
    emailVerificationRequired: isEmailVerificationEnforced(),
    isActive: user.isActive,
    twoFactorEnabled: user.twoFactorEnabled,
    createdAt: user.createdAt,
    lastLoginAt: user.lastLoginAt,
    plan,
    planDetails: PLANS[plan],
    trialEndsAt: user.trialEndsAt,
    trialDaysLeft: trialDaysLeft(user.trialEndsAt),
    onTrial: Boolean(user.trialEndsAt && new Date(user.trialEndsAt) > new Date()),
    storageUsed: Number(used),
    storageQuota: Number(quota),
    storagePercent: Math.min(100, pct),
    storageWarning: pct >= 95 ? 'critical' : pct >= 80 ? 'warning' : null,
  };
}

function newUserTrialData() {
  return {
    plan: 'pro',
    trialEndsAt: new Date(Date.now() + TRIAL_DAYS * MS_DAY),
  };
}

async function createNotification(userId, type, title, body, metadata) {
  return prisma.notification.create({
    data: { userId, type, title, body, metadata: metadata || undefined },
  });
}

async function logActivity(userId, action, resourceType, resourceId, resourceName, req) {
  return prisma.activityLog.create({
    data: {
      userId,
      action,
      resourceType,
      resourceId: resourceId || userId,
      resourceName,
      ipAddress: req?.ip,
      userAgent: req?.headers?.['user-agent'],
    },
  });
}

module.exports = {
  resolvePlan,
  getStorageQuotaBytes,
  syncExpiredTrial,
  formatAccountUser,
  newUserTrialData,
  createNotification,
  logActivity,
  trialDaysLeft,
};
