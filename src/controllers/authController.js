const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const prisma = require('../config/database');
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require('../config/jwt');
const { sendVerificationEmail, sendPasswordResetEmail, sendWelcomeEmail, sendOtpEmail, sendPasswordChangedEmail } = require('../config/email');
const { verifyFirebaseIdToken } = require('../config/firebase');
const { isEmailVerificationEnforced } = require('../config/emailPolicy');
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
const { verifyTurnstileToken } = require('../services/turnstileService');

const formatAuthUser = (user) => formatAccountUser(user);
const isTurnstileRequired = () => {
  if (!process.env.TURNSTILE_SECRET_KEY) return false;
  if (process.env.TURNSTILE_REQUIRED !== undefined) {
    return process.env.TURNSTILE_REQUIRED === 'true';
  }
  return process.env.NODE_ENV === 'production';
};

const logEmailResult = (label, result) => {
  if (result?.success === false) {
    console.error(`${label} failed:`, result?.error || result?.message || 'Unknown error');
  }
};

const createAuthPayload = async (user, req, rememberMe = true) => {
  const accessToken = generateAccessToken({ userId: user.id });
  const refreshToken = generateRefreshToken({ userId: user.id });
  const ttlDays = rememberMe ? 30 : 1;

  await prisma.session.create({
    data: {
      userId: user.id,
      refreshToken,
      expiresAt: new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1000),
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
    const { email, password, fullName, turnstileToken } = req.body;

    // Verify Turnstile token if provided
    if (turnstileToken) {
      const turnstileResult = await verifyTurnstileToken(turnstileToken, req.ip);
      if (!turnstileResult.success) {
        throw new ValidationError(turnstileResult.error || 'Security verification failed');
      }
    } else if (isTurnstileRequired()) {
      // Turnstile is configured but no token provided
      throw new ValidationError('Security verification is required');
    }

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
        isVerified: !isEmailVerificationEnforced(),
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

    // Create verification link token
    const verificationToken = uuidv4();

    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: verificationToken,
        tokenType: 'email_verification',
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    // Send verification email with one-time link
    try {
      const emailResult = await sendVerificationEmail(email, verificationToken);
      logEmailResult('Verification email', emailResult);
    } catch (emailError) {
      console.error('Verification email send failure:', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Registration successful. Please check your email to verify your account.',
      data: { email, fullName },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Resend email verification link
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
        message: 'If an account exists and needs verification, a new verification email has been sent',
      });
    }

    if (user.isVerified) {
      return res.json({
        success: true,
        message: 'Email is already verified. Please log in.',
      });
    }

    const verificationToken = uuidv4();

    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: verificationToken,
        tokenType: 'email_verification',
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    try {
      const emailResult = await sendVerificationEmail(email, verificationToken);
      logEmailResult('Verification email resend', emailResult);
    } catch (emailError) {
      console.error('Verification email resend failure:', emailError.message);
    }

    res.json({
      success: true,
      message: 'If an account exists and needs verification, a new verification email has been sent',
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
    const { email, password, turnstileToken, rememberMe = true } = req.body;

    // Verify Turnstile token if provided
    if (turnstileToken) {
      const turnstileResult = await verifyTurnstileToken(turnstileToken, req.ip);
      if (!turnstileResult.success) {
        throw new ValidationError(turnstileResult.error || 'Security verification failed');
      }
    } else if (isTurnstileRequired()) {
      // Turnstile is configured but no token provided
      throw new ValidationError('Security verification is required');
    }

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
    if (isEmailVerificationEnforced() && !user.isVerified) {
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
    const authPayload = await createAuthPayload(user, req, rememberMe);

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
 * Verify email with one-time link token
 */
const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) throw new ValidationError('Verification link is required');

    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        token,
        tokenType: 'email_verification',
      },
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });

    if (!verificationToken) {
      throw new ValidationError('Verification link is invalid or expired');
    }

    if (verificationToken.usedAt) {
      throw new ValidationError('Email already verified');
    }

    if (verificationToken.expiresAt < new Date()) {
      throw new ValidationError('Verification link has expired');
    }

    // Mark token as used
    await prisma.verificationToken.update({
      where: { id: verificationToken.id },
      data: { usedAt: new Date() },
    });

    await prisma.user.update({
      where: { id: verificationToken.userId },
      data: { isVerified: true },
    });

    // Send welcome email
    try {
      const welcomeResult = await sendWelcomeEmail(verificationToken.user.email, verificationToken.user.fullName);
      logEmailResult('Welcome email', welcomeResult);
    } catch (emailError) {
      console.error('Welcome email send failure:', emailError.message);
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
 * Generate a 6-digit OTP
 */
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

/**
 * Request password reset — sends 6-digit OTP to email
 */
const forgotPassword = async (req, res, next) => {
  try {
    const { email, turnstileToken } = req.body;

    // Verify Turnstile token if provided
    if (turnstileToken) {
      const turnstileResult = await verifyTurnstileToken(turnstileToken, req.ip);
      if (!turnstileResult.success) {
        throw new ValidationError(turnstileResult.error || 'Security verification failed');
      }
    } else if (isTurnstileRequired()) {
      throw new ValidationError('Security verification is required');
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.json({
        success: true,
        message: 'If an account exists with this email, an OTP has been sent',
      });
    }

    // Invalidate any existing OTPs for this user
    await prisma.verificationToken.updateMany({
      where: {
        userId: user.id,
        tokenType: 'password_reset_otp',
        usedAt: null,
      },
      data: { usedAt: new Date() },
    });

    const otp = generateOtp();
    const otpToken = uuidv4(); // unique storage key

    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: otpToken,
        tokenType: 'password_reset_otp',
        expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 min
        // Store OTP in token field as: "otp:XXXXXX:uuid"
      },
    });

    // Re-create with OTP embedded in token field
    await prisma.verificationToken.update({
      where: { token: otpToken },
      data: { token: `otp:${otp}:${otpToken}` },
    });

    try {
      await sendOtpEmail(email, user.fullName || email.split('@')[0], otp);
    } catch (emailError) {
      console.error('OTP email send failure:', emailError.message);
    }

    res.json({
      success: true,
      message: 'If an account exists with this email, an OTP has been sent',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Verify OTP — returns a reset session token
 */
const verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) throw new ValidationError('Email and OTP are required');

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new ValidationError('Invalid OTP or email');

    // Find matching OTP token
    const tokens = await prisma.verificationToken.findMany({
      where: {
        userId: user.id,
        tokenType: 'password_reset_otp',
        usedAt: null,
      },
      orderBy: { createdAt: 'desc' },
    });

    const matching = tokens.find((t) => t.token === `otp:${otp}:${t.token.split(':')[2]}`);

    if (!matching) throw new ValidationError('Invalid OTP');
    if (matching.expiresAt < new Date()) throw new ValidationError('OTP has expired. Please request a new one.');

    // Mark OTP as used
    await prisma.verificationToken.update({
      where: { id: matching.id },
      data: { usedAt: new Date() },
    });

    // Create a short-lived password reset token (15 min)
    const resetToken = uuidv4();
    await prisma.verificationToken.create({
      data: {
        userId: user.id,
        token: resetToken,
        tokenType: 'password_reset',
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
      },
    });

    res.json({
      success: true,
      data: { resetToken },
      message: 'OTP verified. You can now reset your password.',
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

    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        token,
        tokenType: 'password_reset',
        usedAt: null,
      },
    });

    if (!verificationToken) throw new ValidationError('Invalid or expired reset token');
    if (verificationToken.expiresAt < new Date()) throw new ValidationError('Reset token has expired. Please start over.');

    const passwordHash = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
      where: { id: verificationToken.userId },
      data: { passwordHash },
    });

    await prisma.verificationToken.update({
      where: { id: verificationToken.id },
      data: { usedAt: new Date() },
    });

    await prisma.session.updateMany({
      where: { userId: verificationToken.userId },
      data: { revokedAt: new Date() },
    });

    // Send confirmation email
    try {
      const user = await prisma.user.findUnique({ where: { id: verificationToken.userId }, select: { email: true, fullName: true } });
      if (user) await sendPasswordChangedEmail(user.email, user.fullName || user.email.split('@')[0]);
    } catch {}

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
    const authPayload = await createAuthPayload(user, req, true);
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
  verifyOtp,
  resetPassword,
  firebaseAuth,
};
