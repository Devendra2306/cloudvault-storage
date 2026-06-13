const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const prisma = require('../config/database');
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require('../config/jwt');
const { sendVerificationEmail, sendPasswordResetEmail, sendWelcomeEmail } = require('../config/email');
const { verifyFirebaseIdToken } = require('../config/firebase');
const {
  formatAccountUser,
  newUserTrialData,
  logActivity,
} = require('../services/userAccount');
const {
  AuthenticationError,
  ValidationError,
  NotFoundError,
} = require('../middleware/errorHandler');

const formatAuthUser = (user) => formatAccountUser(user);

const logEmailResult = (label, result) => {
  const serialized = JSON.stringify(result, null, 2);
  if (result?.success === false) {
    console.error(`AUTH CONTROLLER: ${label} failure:`, serialized);
    return;
  }
  console.log(`AUTH CONTROLLER: ${label} success:`, serialized);
};

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
        authProvider: 'email',
        ...newUserTrialData(),
        storageQuota: BigInt(parseInt(process.env.DEFAULT_STORAGE_QUOTA, 10) || 5368709120),
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

    // Create verification OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('AUTH CONTROLLER: OTP generated for email verification', {
      userId: user.id,
      email,
      expiresInMinutes: 15,
    });
    
    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: otp,
        tokenType: 'email_verification',
        expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
      },
    });

    // Send verification email with OTP
    try {
      console.log('AUTH CONTROLLER: Sending verification email to:', email);
      const emailResult = await sendVerificationEmail(email, otp);
      logEmailResult('OTP email send', emailResult);
    } catch (emailError) {
      console.error('AUTH CONTROLLER: OTP email send failure:', emailError);
      console.error('AUTH CONTROLLER: Email error stack:', emailError.stack);
      // Continue anyway, user can request new email
    }

    res.status(201).json({
      success: true,
      message: 'Registration successful. Please check your email for the OTP to verify your account.',
      data: { email, fullName },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Resend email verification OTP
 */
const resendVerification = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      throw new ValidationError('Email is required');
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        fullName: true,
        isVerified: true,
      },
    });

    if (!user) {
      return res.json({
        success: true,
        message: 'If an account exists and needs verification, a new OTP has been sent',
      });
    }

    if (user.isVerified) {
      return res.json({
        success: true,
        message: 'Email is already verified. Please log in.',
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('AUTH CONTROLLER: OTP generated for resend verification', {
      userId: user.id,
      email,
      expiresInMinutes: 15,
    });

    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: otp,
        tokenType: 'email_verification',
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
      },
    });

    try {
      console.log('AUTH CONTROLLER: Sending verification OTP email to:', email);
      const emailResult = await sendVerificationEmail(email, otp);
      logEmailResult('OTP email send', emailResult);
    } catch (emailError) {
      console.error('AUTH CONTROLLER: OTP email send failure:', emailError);
      console.error('AUTH CONTROLLER: Email error stack:', emailError.stack);
    }

    res.json({
      success: true,
      message: 'If an account exists and needs verification, a new OTP has been sent',
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

    // Check email verification
    if (!user.isVerified) {
      throw new AuthenticationError('Please verify your email before logging in');
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

    await logActivity(user.id, 'login', 'auth', user.id, user.email, req);
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
 * Verify email with OTP
 */
const verifyEmail = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new ValidationError('User not found');
    }

    // Find verification token
    console.log('AUTH CONTROLLER: Looking up OTP for user:', user.id);
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        userId: user.id,
        token: otp,
        tokenType: 'email_verification',
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!verificationToken) {
      console.log('AUTH CONTROLLER: Invalid OTP provided');
      throw new ValidationError('Invalid OTP');
    }

    if (verificationToken.usedAt) {
      console.log('AUTH CONTROLLER: OTP already used');
      throw new ValidationError('Email already verified');
    }

    if (verificationToken.expiresAt < new Date()) {
      console.log('AUTH CONTROLLER: OTP expired at:', verificationToken.expiresAt);
      throw new ValidationError('OTP has expired');
    }

    console.log('AUTH CONTROLLER: OTP valid, marking as used');
    // Mark token as used
    await prisma.verificationToken.update({
      where: { id: verificationToken.id },
      data: { usedAt: new Date() },
    });

    // Verify user
    console.log('AUTH CONTROLLER: Setting user as verified');
    await prisma.user.update({
      where: { id: user.id },
      data: { isVerified: true },
    });

    // Send welcome email
    try {
      console.log('AUTH CONTROLLER: Sending welcome email to:', email);
      const welcomeResult = await sendWelcomeEmail(email, user.fullName);
      logEmailResult('Welcome email send', welcomeResult);
    } catch (emailError) {
      console.error('AUTH CONTROLLER: Welcome email send failure:', emailError);
    }

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
    console.log('AUTH CONTROLLER: Password reset token generated', {
      userId: user.id,
      email,
      expiresInMinutes: 15,
    });
    
    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: resetToken,
        tokenType: 'password_reset',
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
      },
    });

    // Send reset email
    try {
      console.log('AUTH CONTROLLER: Sending password reset email to:', email);
      const resetResult = await sendPasswordResetEmail(email, resetToken);
      logEmailResult('Password reset email send', resetResult);
    } catch (emailError) {
      console.error('AUTH CONTROLLER: Password reset email send failure:', emailError);
      console.error('AUTH CONTROLLER: Email error stack:', emailError.stack);
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
    console.log('AUTH CONTROLLER: Looking up password reset token');
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    });

    if (!verificationToken) {
      console.log('AUTH CONTROLLER: Invalid reset token');
      throw new ValidationError('Invalid reset token');
    }

    if (verificationToken.usedAt) {
      console.log('AUTH CONTROLLER: Reset token already used');
      throw new ValidationError('Token has already been used');
    }

    if (verificationToken.expiresAt < new Date()) {
      console.log('AUTH CONTROLLER: Reset token expired at:', verificationToken.expiresAt);
      throw new ValidationError('Reset token has expired');
    }

    if (verificationToken.tokenType !== 'password_reset') {
      console.log('AUTH CONTROLLER: Invalid token type:', verificationToken.tokenType);
      throw new ValidationError('Invalid token type');
    }

    console.log('AUTH CONTROLLER: Reset token valid, updating password for user:', verificationToken.userId);
    // Hash new password
    const passwordHash = await bcrypt.hash(newPassword, 12);

    // Update user password
    await prisma.user.update({
      where: { id: verificationToken.userId },
      data: { passwordHash },
    });

    console.log('AUTH CONTROLLER: Marking reset token as used');
    // Mark token as used
    await prisma.verificationToken.update({
      where: { id: verificationToken.id },
      data: { usedAt: new Date() },
    });

    console.log('AUTH CONTROLLER: Revoking all sessions for user:', verificationToken.userId);
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

/**
 * Login or register via Firebase ID token (Google, GitHub, Microsoft)
 */
const firebaseAuth = async (req, res, next) => {
  try {
    const { idToken, email: bodyEmail, fullName: bodyFullName, avatarUrl, provider } = req.body;
    if (!idToken) throw new ValidationError('Firebase ID token is required');

    const decoded = await verifyFirebaseIdToken(idToken);
    const email = (decoded.email || bodyEmail || '').toLowerCase();
    if (!email) throw new ValidationError('Email is required from Firebase account');

    const displayName = bodyFullName || decoded.name || email.split('@')[0];
    const photo = avatarUrl || decoded.picture || null;
    const authProvider = provider || decoded.firebase?.sign_in_provider?.replace('.com', '') || 'google';

    let user = await prisma.user.findUnique({ where: { email } });
    let isNew = false;

    if (!user) {
      isNew = true;
      const passwordHash = await bcrypt.hash(uuidv4(), 12);
      user = await prisma.user.create({
        data: {
          email,
          passwordHash,
          fullName: displayName,
          avatarUrl: photo,
          authProvider,
          isVerified: decoded.email_verified === true,
          ...newUserTrialData(),
          storageQuota: BigInt(parseInt(process.env.DEFAULT_STORAGE_QUOTA, 10) || 5368709120),
        },
      });
    } else if (!user.isActive) {
      throw new AuthenticationError('Account is deactivated');
    }

    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        lastLoginAt: new Date(),
        authProvider,
        ...(photo ? { avatarUrl: photo } : {}),
        ...(displayName ? { fullName: displayName } : {}),
        ...(decoded.email_verified ? { isVerified: true } : {}),
      },
    });

    await logActivity(user.id, isNew ? 'signup_oauth' : 'oauth_login', 'auth', user.id, authProvider, req);
    const authPayload = await createAuthPayload(user, req);
    res.json({ success: true, data: authPayload });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  resendVerification,
  login,
  logout,
  refreshToken,
  verifyEmail,
  forgotPassword,
  resetPassword,
  firebaseAuth,
};
