const { verifyAccessToken } = require('../config/jwt');
const prisma = require('../config/database');

/**
 * Authentication middleware
 * Verifies JWT token and attaches user to request
 */
const authenticate = async (req, res, next) => {
  try {
    console.log('=== AUTH MIDDLEWARE START ===');
    console.log('AUTH HEADER:', req.headers.authorization);
    console.log('PATH:', req.path);
    console.log('METHOD:', req.method);

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.error('ERROR: No auth header or invalid format');
      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
        message: 'Authentication required',
      });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    console.log('TOKEN LENGTH:', token.length);
    console.log('TOKEN PREFIX:', token.substring(0, 20) + '...');

    try {
      const decoded = verifyAccessToken(token);
      console.log('TOKEN DECODED:', { userId: decoded.userId });

      // Get user from database
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
        console.error('ERROR: User not found');
        return res.status(401).json({
          success: false,
          error: 'Unauthorized',
          message: 'User not found',
        });
      }

      if (!user.isActive) {
        console.error('ERROR: Account deactivated');
        return res.status(403).json({
          success: false,
          error: 'Forbidden',
          message: 'Account is deactivated',
        });
      }

      console.log('AUTH SUCCESS:', { userId: user.id, email: user.email });
      req.user = user;
      next();
    } catch (jwtError) {
      console.error('JWT ERROR:', jwtError);
      console.error('JWT ERROR NAME:', jwtError.name);
      console.error('JWT ERROR MESSAGE:', jwtError.message);
      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
        message: 'Invalid or expired token',
      });
    }
  } catch (error) {
    console.error('AUTH MIDDLEWARE ERROR:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Authentication failed',
    });
  }
};

/**
 * Optional authentication middleware
 * Attaches user if token is valid, but doesn't require it
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
    } catch (jwtError) {
      // Ignore JWT errors for optional auth
    }
    
    next();
  } catch (error) {
    console.error('Optional auth middleware error:', error);
    next();
  }
};

module.exports = {
  authenticate,
  optionalAuthenticate,
};
