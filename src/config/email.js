const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  if (process.env.EMAIL_SERVICE === 'sendgrid') {
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.EMAIL_API_KEY,
      },
    });
  }

  // Default to Gmail (for development)
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

/**
 * Send email
 */
const sendEmail = async (to, subject, html, text = null) => {
  try {
    const hasSendGridConfig = process.env.EMAIL_SERVICE === 'sendgrid' && process.env.EMAIL_API_KEY;
    const hasGmailConfig = process.env.EMAIL_USER && process.env.EMAIL_PASSWORD;

    if (!hasSendGridConfig && !hasGmailConfig) {
      console.warn('Email service is not configured; skipping email send.');
      return { success: false, skipped: true, error: 'Email service is not configured' };
    }

    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@cloudvault.com',
      to,
      subject,
      html,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Send verification email
 */
const sendVerificationEmail = async (to, token) => {
  const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/verify-email?token=${token}`;
  
  const html = `
    <h1>Email Verification</h1>
    <p>Please click the link below to verify your email address:</p>
    <a href="${verificationUrl}">${verificationUrl}</a>
    <p>This link will expire in 24 hours.</p>
  `;

  return sendEmail(to, 'Verify your email address', html);
};

/**
 * Send password reset email
 */
const sendPasswordResetEmail = async (to, token) => {
  const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${token}`;
  
  const html = `
    <h1>Password Reset</h1>
    <p>Please click the link below to reset your password:</p>
    <a href="${resetUrl}">${resetUrl}</a>
    <p>This link will expire in 1 hour.</p>
    <p>If you did not request this password reset, please ignore this email.</p>
  `;

  return sendEmail(to, 'Reset your password', html);
};

module.exports = {
  sendEmail,
  sendVerificationEmail,
  sendPasswordResetEmail,
};
