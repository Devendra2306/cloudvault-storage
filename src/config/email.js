const { Resend } = require('resend');

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send email using Resend
 */
const sendEmail = async (to, subject, html, text = null) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn('Resend API key is not configured; skipping email send.');
      return { success: false, skipped: true, error: 'Resend API key is not configured' };
    }

    const emailData = {
      from: process.env.EMAIL_FROM || 'noreply@cloudvault.com',
      to,
      subject,
      html,
    };

    if (text) {
      emailData.text = text;
    }

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend email error:', error);
      return { success: false, error: error.message };
    }

    console.log('Email sent via Resend:', data.id);
    return { success: true, messageId: data.id };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Send welcome email
 */
const sendWelcomeEmail = async (to, fullName) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333;">Welcome to CloudVault!</h1>
      <p style="color: #666; font-size: 16px;">Hi ${fullName || 'there'},</p>
      <p style="color: #666; font-size: 16px;">Thank you for signing up for CloudVault. We're excited to have you on board!</p>
      <p style="color: #666; font-size: 16px;">With CloudVault, you can:</p>
      <ul style="color: #666; font-size: 16px;">
        <li>Store and organize your files securely</li>
        <li>Access your files from anywhere</li>
        <li>Share files with others easily</li>
        <li>Upgrade your storage plan as needed</li>
      </ul>
      <p style="color: #666; font-size: 16px;">If you have any questions, feel free to reach out to our support team.</p>
      <p style="color: #666; font-size: 16px;">Best regards,<br>The CloudVault Team</p>
    </div>
  `;

  return sendEmail(to, 'Welcome to CloudVault!', html);
};

/**
 * Send verification email
 */
const sendVerificationEmail = async (to, token) => {
  const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/verify-email?token=${token}`;

  if (!process.env.RESEND_API_KEY) {
    console.warn('Verification email skipped (no RESEND_API_KEY). Use this link to verify:');
    console.warn(verificationUrl);
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333;">Email Verification</h1>
      <p style="color: #666; font-size: 16px;">Please click the link below to verify your email address:</p>
      <a href="${verificationUrl}" style="display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0;">Verify Email</a>
      <p style="color: #666; font-size: 14px;">This link will expire in 24 hours.</p>
    </div>
  `;

  return sendEmail(to, 'Verify your email address', html);
};

/**
 * Send password reset email
 */
const sendPasswordResetEmail = async (to, token) => {
  const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${token}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333;">Password Reset</h1>
      <p style="color: #666; font-size: 16px;">Please click the link below to reset your password:</p>
      <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0;">Reset Password</a>
      <p style="color: #666; font-size: 14px;">This link will expire in 15 minutes.</p>
      <p style="color: #666; font-size: 14px;">If you did not request this password reset, please ignore this email.</p>
    </div>
  `;

  return sendEmail(to, 'Reset your password', html);
};

/**
 * Send a polished file sharing invitation.
 */
const sendShareInvitationEmail = async ({ to, senderName, fileName, shareUrl, permission, expiresAt, passwordProtected }) => {
  const expiryText = expiresAt ? `This invitation expires on ${new Date(expiresAt).toLocaleString()}.` : 'This invitation does not have an expiry date.';
  const html = `
    <div style="margin:0;padding:32px;background:#0b0f14;font-family:Inter,Arial,sans-serif;color:#f8fafc;">
      <div style="max-width:620px;margin:0 auto;background:#111827;border:1px solid rgba(255,255,255,.12);border-radius:22px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,.35);">
        <div style="padding:28px 32px;background:linear-gradient(135deg,#f0163a,#4090ff);">
          <div style="font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.78);">CloudVault Share</div>
          <h1 style="margin:10px 0 0;font-size:30px;line-height:1.15;color:#fff;">${senderName || 'Someone'} shared a file with you</h1>
        </div>
        <div style="padding:30px 32px;">
          <p style="margin:0 0 18px;color:#cbd5e1;font-size:16px;line-height:1.6;">You have been invited to access <strong style="color:#fff;">${fileName}</strong> with <strong style="color:#fff;">${permission || 'view'}</strong> permission.</p>
          <div style="padding:16px 18px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:14px;margin-bottom:24px;">
            <div style="color:#94a3b8;font-size:13px;line-height:1.6;">${expiryText}</div>
            <div style="color:#94a3b8;font-size:13px;line-height:1.6;">${passwordProtected ? 'A password is required to open this shared link.' : 'No password is required.'}</div>
          </div>
          <a href="${shareUrl}" style="display:inline-block;padding:14px 22px;background:#f0163a;color:#fff;text-decoration:none;border-radius:12px;font-weight:800;">Open shared file</a>
          <p style="margin:24px 0 0;color:#64748b;font-size:12px;line-height:1.6;">If the button does not work, paste this URL into your browser:<br>${shareUrl}</p>
        </div>
      </div>
    </div>
  `;
  const text = `${senderName || 'Someone'} shared "${fileName}" with you. Open it here: ${shareUrl}`;
  return sendEmail(to, `${senderName || 'CloudVault'} shared "${fileName}"`, html, text);
};

module.exports = {
  sendEmail,
  sendWelcomeEmail,
  sendVerificationEmail,
  sendPasswordResetEmail,
  sendShareInvitationEmail,
};
