const { sendEmail, emailTemplates } = require('../services/emailService');

/**
 * Send welcome email
 */
const sendWelcomeEmail = async (to, fullName) => {
  return sendEmail(to, 'welcome', { name: fullName });
};

/**
 * Send verification email with OTP
 */
const sendVerificationEmail = async (to, otp) => {
  return sendEmail(to, 'verification', { name: to.split('@')[0], otp });
};

/**
 * Send password reset email
 */
const sendPasswordResetEmail = async (to, token) => {
  const resetUrl = `${process.env.APP_URL || 'http://localhost:3000'}/reset-password?token=${token}`;
  return sendEmail(to, 'forgotPassword', { name: to.split('@')[0], resetLink: resetUrl });
};

/**
 * Send password changed alert
 */
const sendPasswordChangedEmail = async (to, fullName) => {
  const timestamp = new Date().toLocaleString();
  return sendEmail(to, 'passwordChanged', { name: fullName, timestamp });
};

/**
 * Send new login alert
 */
const sendNewLoginEmail = async (to, fullName, deviceInfo, location) => {
  const timestamp = new Date().toLocaleString();
  return sendEmail(to, 'newLogin', { name: fullName, deviceInfo, timestamp, location });
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
  sendPasswordChangedEmail,
  sendNewLoginEmail,
  sendShareInvitationEmail,
};
