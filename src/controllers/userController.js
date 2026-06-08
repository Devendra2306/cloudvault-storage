const bcrypt = require('bcryptjs');
const prisma = require('../config/database');
const { formatAccountUser, syncExpiredTrial } = require('../services/userAccount');
const { NotFoundError, ValidationError } = require('../middleware/errorHandler');

/**
 * Get current user profile
 */
const getProfile = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        fullName: true,
        avatarUrl: true,
        storageUsed: true,
        storageQuota: true,
        role: true,
        isVerified: true,
        isActive: true,
        lastLoginAt: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    const synced = await syncExpiredTrial(user.id);
    const full = await prisma.user.findUnique({ where: { id: synced.id } });

    res.json({
      success: true,
      data: formatAccountUser(full),
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update user profile
 */
const updateProfile = async (req, res, next) => {
  try {
    const { fullName, avatarUrl } = req.body;

    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        ...(fullName && { fullName }),
        ...(avatarUrl && { avatarUrl }),
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        avatarUrl: true,
        storageUsed: true,
        storageQuota: true,
        role: true,
        isVerified: true,
        updatedAt: true,
      },
    });

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Change password
 */
const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Get user with password
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { passwordHash: true },
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isPasswordValid) {
      throw new ValidationError('Current password is incorrect');
    }

    // Hash new password
    const passwordHash = await bcrypt.hash(newPassword, 12);

    // Update password
    await prisma.user.update({
      where: { id: req.user.id },
      data: { passwordHash },
    });

    // Revoke all sessions except current
    // (Optional - you might want to keep the current session)

    res.json({
      success: true,
      message: 'Password changed successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Upload avatar
 */
const uploadAvatar = async (req, res, next) => {
  try {
    // This would integrate with S3 service
    // For now, just return the URL that would be provided
    const avatarUrl = req.file?.location || req.body.avatarUrl;

    if (!avatarUrl) {
      throw new ValidationError('Avatar URL is required');
    }

    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { avatarUrl },
      select: {
        id: true,
        email: true,
        fullName: true,
        avatarUrl: true,
        updatedAt: true,
      },
    });

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
  updateProfile,
  changePassword,
  uploadAvatar,
};
