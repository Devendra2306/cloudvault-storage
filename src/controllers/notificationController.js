const prisma = require('../config/database');
const { NotFoundError } = require('../middleware/errorHandler');

const listNotifications = async (req, res, next) => {
  try {
    const { unreadOnly } = req.query;
    const notifications = await prisma.notification.findMany({
      where: {
        userId: req.user.id,
        ...(unreadOnly === 'true' && { read: false }),
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    const unreadCount = await prisma.notification.count({
      where: { userId: req.user.id, read: false },
    });
    res.json({ success: true, data: { notifications, unreadCount } });
  } catch (e) {
    next(e);
  }
};

const markRead = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.notification.updateMany({
      where: { id, userId: req.user.id },
      data: { read: true },
    });
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};

const markAllRead = async (req, res, next) => {
  try {
    await prisma.notification.updateMany({
      where: { userId: req.user.id, read: false },
      data: { read: true },
    });
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
};

module.exports = { listNotifications, markRead, markAllRead };
