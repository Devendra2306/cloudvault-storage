const { verifyAccessToken } = require('../config/jwt');
const prisma = require('../config/database');

const isDev = process.env.NODE_ENV !== 'production';

/**
 * Authentication middleware — verifies JWT and attaches user to request.
 */
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
        message: 'Authentication required',
      });
    }

    const token = authHeader.substring(7);

    try {
      const decoded = verifyAccessToken(token);

      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
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
        },
      });

      if (!user) {
        return res.status(401).json({
          success: false,
          error: 'Unauthorized',
          message: 'User not found',
        });
      }

      if (!user.isActive) {
        return res.status(403).json({
          success: false,
          error: 'Forbidden',
          message: 'Account is deactivated',
        });
      }

      req.user = user;
      next();
    } catch (jwtError) {
      if (isDev) console.error('JWT verification failed:', jwtError.message);
      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
        message: 'Invalid or expired token',
      });
    }
  } catch (error) {
    console.error('Authentication middleware error:', error.message);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Authentication failed',
    });
  }
};

/**
 * Optional authentication — attaches user when token is valid, but does not require it.
 */
const optionalAuthenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next();
    }

    const token = authHeader.substring(7);

    try {
      const decoded = verifyAccessToken(token);
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
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
        },
      });

      if (user && user.isActive) {
        req.user = user;
      }
    } catch {
      // Ignore invalid tokens for optional auth
    }

    next();
  } catch (error) {
    if (isDev) console.error('Optional auth middleware error:', error.message);
    next();
  }
};

module.exports = {
  authenticate,
  optionalAuthenticate,
};
