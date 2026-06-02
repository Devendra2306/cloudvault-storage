const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const prisma = require('../config/database');
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require('../config/jwt');
const { sendVerificationEmail, sendPasswordResetEmail } = require('../config/email');
const {
  AuthenticationError,
  ValidationError,
  NotFoundError,
} = require('../middleware/errorHandler');

const formatAuthUser = (user) => ({
  id: user.id,
  email: user.email,
  fullName: user.fullName,
  avatarUrl: user.avatarUrl || null,
  storageUsed: Number(user.storageUsed || 0),
  storageQuota: Number(user.storageQuota || 0),
  role: user.role,
  isVerified: user.isVerified,
  createdAt: user.createdAt,
});

const createAuthPayload = async (user, req) => {
  const accessToken = generateAccessToken({ userId: user.id });
  const refreshToken = generateRefreshToken({ userId: user.id });

  await prisma.session.create({
    data: {
      userId: user.id,
      refreshToken,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      ipAddress: req.ip,
      deviceInfo: req.headers['user-agent'],
    },
  });

  return {
    accessToken,
    refreshToken,
    user: formatAuthUser(user),
  };
};

/**
 * Register a new user
 */
const register = async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ValidationError('User with this email already exists');
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        fullName,
        storageQuota: parseInt(process.env.DEFAULT_STORAGE_QUOTA) || 5368709120, // 5GB
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
        createdAt: true,
      },
    });

    // Create verification token
    const verificationToken = uuidv4();
    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: verificationToken,
        tokenType: 'email_verification',
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      },
    });

    // Send verification email
    try {
      await sendVerificationEmail(email, verificationToken);
    } catch (emailError) {
      console.error('Failed to send verification email:', emailError);
      // Continue anyway, user can request new email
    }

    const authPayload = await createAuthPayload(user, req);

    res.status(201).json({
      success: true,
      message: 'Registration successful. Please check your email to verify your account.',
      data: authPayload,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Login user
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AuthenticationError('Invalid email or password');
    }

    if (!user.isActive) {
      throw new AuthenticationError('Account is deactivated');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new AuthenticationError('Invalid email or password');
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    const authPayload = await createAuthPayload(user, req);

    res.json({
      success: true,
      data: authPayload,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Logout user
 */
const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (refreshToken) {
      // Revoke refresh token
      await prisma.session.updateMany({
        where: { refreshToken },
        data: { revokedAt: new Date() },
      });
    }

    res.json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Refresh access token
 */
const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken: token } = req.body;

    if (!token) {
      throw new AuthenticationError('Refresh token is required');
    }

    // Verify refresh token
    const decoded = verifyRefreshToken(token);

    // Check if token exists in database and is not revoked
    const session = await prisma.session.findUnique({
      where: { refreshToken: token },
    });

    if (!session || session.revokedAt || session.expiresAt < new Date()) {
      throw new AuthenticationError('Invalid or expired refresh token');
    }

    // Generate new access token
    const accessToken = generateAccessToken({ userId: decoded.userId });

    res.json({
      success: true,
      data: { accessToken },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Verify email
 */
const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.body;

    // Find verification token
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    });

    if (!verificationToken) {
      throw new ValidationError('Invalid verification token');
    }

    if (verificationToken.usedAt) {
      throw new ValidationError('Email already verified');
    }

    if (verificationToken.expiresAt < new Date()) {
      throw new ValidationError('Verification token has expired');
    }

    if (verificationToken.tokenType !== 'email_verification') {
      throw new ValidationError('Invalid token type');
    }

    // Mark token as used
    await prisma.verificationToken.update({
      where: { id: verificationToken.id },
      data: { usedAt: new Date() },
    });

    // Verify user
    await prisma.user.update({
      where: { id: verificationToken.userId },
      data: { isVerified: true },
    });

    res.json({
      success: true,
      message: 'Email verified successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Request password reset
 */
const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Don't reveal if user exists or not
      return res.json({
        success: true,
        message: 'If an account exists with this email, a password reset link has been sent',
      });
    }

    // Create reset token
    const resetToken = uuidv4();
    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: resetToken,
        tokenType: 'password_reset',
        expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
      },
    });

    // Send reset email
    try {
      await sendPasswordResetEmail(email, resetToken);
    } catch (emailError) {
      console.error('Failed to send password reset email:', emailError);
    }

    res.json({
      success: true,
      message: 'If an account exists with this email, a password reset link has been sent',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Reset password
 */
const resetPassword = async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;

    // Find verification token
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    });

    if (!verificationToken) {
      throw new ValidationError('Invalid reset token');
    }

    if (verificationToken.usedAt) {
      throw new ValidationError('Token has already been used');
    }

    if (verificationToken.expiresAt < new Date()) {
      throw new ValidationError('Reset token has expired');
    }

    if (verificationToken.tokenType !== 'password_reset') {
      throw new ValidationError('Invalid token type');
    }

    // Hash new password
    const passwordHash = await bcrypt.hash(newPassword, 12);

    // Update user password
    await prisma.user.update({
      where: { id: verificationToken.userId },
      data: { passwordHash },
    });

    // Mark token as used
    await prisma.verificationToken.update({
      where: { id: verificationToken.id },
      data: { usedAt: new Date() },
    });

    // Revoke all sessions for this user
    await prisma.session.updateMany({
      where: { userId: verificationToken.userId },
      data: { revokedAt: new Date() },
    });

    res.json({
      success: true,
      message: 'Password reset successfully. Please login with your new password.',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  refreshToken,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
