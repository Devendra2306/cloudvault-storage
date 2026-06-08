const prisma = require('../config/database');

/**
 * Public platform statistics for marketing landing page
 */
const getPublicStats = async (req, res, next) => {
  try {
    const [fileCount, userCount, storageAgg] = await Promise.all([
      prisma.file.count({ where: { deletedAt: null } }),
      prisma.user.count({ where: { isActive: true, deletedAt: null } }),
      prisma.file.aggregate({
        where: { deletedAt: null },
        _sum: { size: true },
      }),
    ]);

    const storageUsed = Number(storageAgg._sum.size || 0);
    const storageCapacity = Number(process.env.PLATFORM_STORAGE_CAPACITY) || 10 * 1024 * 1024 * 1024 * 1024;

    res.json({
      success: true,
      data: {
        filesStored: fileCount,
        activeUsers: userCount,
        storageUsed,
        storageCapacity,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getPublicStats };
