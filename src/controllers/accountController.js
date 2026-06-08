const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const prisma = require('../config/database');
const { sendVerificationEmail } = require('../config/email');
const {
  formatAccountUser,
  syncExpiredTrial,
  logActivity,
  getStorageQuotaBytes,
} = require('../services/userAccount');
const { NotFoundError, ValidationError, ForbiddenError } = require('../middleware/errorHandler');

const getAccount = async (req, res, next) => {
  try {
    const user = await syncExpiredTrial(req.user.id);
    const full = await prisma.user.findUnique({ where: { id: user.id } });
    res.json({ success: true, data: formatAccountUser(full) });
  } catch (e) {
    next(e);
  }
};

const listSessions = async (req, res, next) => {
  try {
    const sessions = await prisma.session.findMany({
      where: { userId: req.user.id, revokedAt: null, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        deviceInfo: true,
        ipAddress: true,
        createdAt: true,
        expiresAt: true,
      },
    });
    res.json({ success: true, data: { sessions } });
  } catch (e) {
    next(e);
  }
};

const revokeSession = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.session.updateMany({
      where: { id, userId: req.user.id },
      data: { revokedAt: new Date() },
    });
    res.json({ success: true, message: 'Session revoked' });
  } catch (e) {
    next(e);
  }
};

const revokeAllSessions = async (req, res, next) => {
  try {
    await prisma.session.updateMany({
      where: { userId: req.user.id, revokedAt: null },
      data: { revokedAt: new Date() },
    });
    res.json({ success: true, message: 'All sessions revoked' });
  } catch (e) {
    next(e);
  }
};

const getLoginHistory = async (req, res, next) => {
  try {
    const logs = await prisma.activityLog.findMany({
      where: { userId: req.user.id, action: { in: ['login', 'oauth_login'] } },
      orderBy: { createdAt: 'desc' },
      take: 30,
    });
    res.json({ success: true, data: { history: logs } });
  } catch (e) {
    next(e);
  }
};

const getActivityFeed = async (req, res, next) => {
  try {
    const logs = await prisma.activityLog.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
      take: 40,
    });
    res.json({ success: true, data: { activity: logs } });
  } catch (e) {
    next(e);
  }
};

const resendVerification = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) throw new NotFoundError('User not found');
    if (user.isVerified) {
      return res.json({ success: true, message: 'Email already verified' });
    }

    const token = uuidv4();
    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token,
        tokenType: 'email_verification',
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    await sendVerificationEmail(user.email, token);
    res.json({ success: true, message: 'Verification email sent' });
  } catch (e) {
    next(e);
  }
};

const deleteAccount = async (req, res, next) => {
  try {
    const { password } = req.body;
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) throw new NotFoundError('User not found');

    if (user.authProvider === 'email') {
      const ok = await bcrypt.compare(password || '', user.passwordHash);
      if (!ok) throw new ValidationError('Password is incorrect');
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { isActive: false, deletedAt: new Date() },
    });

    await prisma.session.updateMany({
      where: { userId: user.id },
      data: { revokedAt: new Date() },
    });

    res.json({ success: true, message: 'Account scheduled for deletion' });
  } catch (e) {
    next(e);
  }
};

const toggleTwoFactor = async (req, res, next) => {
  try {
    const { enabled } = req.body;
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { twoFactorEnabled: Boolean(enabled) },
    });
    await logActivity(req.user.id, enabled ? '2fa_enabled' : '2fa_disabled', 'security', req.user.id, null, req);
    res.json({
      success: true,
      data: { twoFactorEnabled: user.twoFactorEnabled },
      message: enabled
        ? 'Two-factor authentication enabled. Full TOTP setup ships in the next release.'
        : 'Two-factor authentication disabled',
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAccount,
  listSessions,
  revokeSession,
  revokeAllSessions,
  getLoginHistory,
  getActivityFeed,
  resendVerification,
  deleteAccount,
  toggleTwoFactor,
};
