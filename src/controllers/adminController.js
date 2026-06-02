const prisma = require('../config/database');
const { NotFoundError, ForbiddenError } = require('../middleware/errorHandler');

/**
 * List all users (admin only)
 */
const listUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, search, role, status } = req.query;
    const userId = req.user.id;

    // Check if user is admin
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (currentUser.role !== 'admin' && currentUser.role !== 'super_admin') {
      throw new ForbiddenError('Admin access required');
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {
      ...(search && {
        OR: [
          { email: { contains: search, mode: 'insensitive' } },
          { fullName: { contains: search, mode: 'insensitive' } },
        ],
      }),
      ...(role && { role }),
      ...(status === 'active' ? { isActive: true } : status === 'inactive' ? { isActive: false } : {}),
    };

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          email: true,
          fullName: true,
          storageUsed: true,
          storageQuota: true,
          role: true,
          isActive: true,
          isVerified: true,
          lastLoginAt: true,
          createdAt: true,
        },
      }),
      prisma.user.count({ where }),
    ]);

    const usersWithNumbers = users.map((user) => ({
      ...user,
      storageUsed: Number(user.storageUsed),
      storageQuota: Number(user.storageQuota),
    }));

    res.json({
      success: true,
      data: {
        users: usersWithNumbers,
        pagination: {
          total,
          page: parseInt(page),
          limit: parseInt(limit),
          totalPages: Math.ceil(total / parseInt(limit)),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update user storage quota (admin only)
 */
const updateUserQuota = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { storageQuota } = req.body;
    const userId = req.user.id;

    // Check if user is admin
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (currentUser.role !== 'admin' && currentUser.role !== 'super_admin') {
      throw new ForbiddenError('Admin access required');
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { storageQuota: BigInt(storageQuota) },
      select: {
        id: true,
        email: true,
        storageQuota: true,
        updatedAt: true,
      },
    });

    res.json({
      success: true,
      data: {
        ...updatedUser,
        storageQuota: Number(updatedUser.storageQuota),
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update user status (admin only)
 */
const updateUserStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    const userId = req.user.id;

    // Check if user is admin
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (currentUser.role !== 'admin' && currentUser.role !== 'super_admin') {
      throw new ForbiddenError('Admin access required');
    }

    // Prevent deactivating yourself
    if (id === userId) {
      throw new ValidationError('Cannot deactivate your own account');
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { isActive },
      select: {
        id: true,
        email: true,
        isActive: true,
        updatedAt: true,
      },
    });

    res.json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get platform-wide analytics (admin only)
 */
const getPlatformAnalytics = async (req, res, next) => {
  try {
    const { startDate, endDate, granularity = 'day' } = req.query;
    const userId = req.user.id;

    // Check if user is admin
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (currentUser.role !== 'admin' && currentUser.role !== 'super_admin') {
      throw new ForbiddenError('Admin access required');
    }

    // Get overall stats
    const totalUsers = await prisma.user.count();
    const activeUsers = await prisma.user.count({ where: { isActive: true } });
    const totalFiles = await prisma.file.count({ where: { deletedAt: null } });
    const totalStorageUsed = await prisma.user.aggregate({
      _sum: { storageUsed: true },
    });

    // Get recent activity
    const uploadsToday = await prisma.file.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
    });

    const downloadsToday = await prisma.file.aggregate({
      where: {
        lastAccessedAt: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
      _sum: { downloadCount: true },
    });

    res.json({
      success: true,
      data: {
        totalUsers,
        activeUsers,
        totalStorageUsed: Number(totalStorageUsed._sum.storageUsed || 0),
        totalFiles,
        uploadsToday,
        downloadsToday: Number(downloadsToday._sum.downloadCount || 0),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listUsers,
  updateUserQuota,
  updateUserStatus,
  getPlatformAnalytics,
};
