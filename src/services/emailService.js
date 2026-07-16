const { Resend } = require('resend');

if (!process.env.RESEND_API_KEY) {
  console.warn('RESEND_API_KEY not set. Email service will be disabled.');
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@cloudvault.co.in';
const APP_URL = process.env.APP_URL || 'https://cloudvault.co.in';

console.log('EMAIL SERVICE: Loaded', {
  configured: Boolean(resend),
  emailFrom: EMAIL_FROM,
  appUrl: APP_URL,
});

/**
 * Email Templates
 */

const emailTemplates = {
  otpEmail: (name, otp) => ({
    subject: `${otp} is your CloudVault reset code`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Your CloudVault OTP</title></head><body style="margin:0;padding:0;background:#0a0a0f;font-family:'Inter',Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:48px 16px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;"><tr><td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:2px;border-radius:20px;"><table width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#0f0f1a;border-radius:19px;overflow:hidden;"><div style="padding:40px 48px 0;text-align:center;"><div style="display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:16px;margin-bottom:24px;"><span style="font-size:28px;">☁</span></div><h1 style="margin:0 0 8px;font-size:28px;font-weight:800;color:#fff;letter-spacing:-0.5px;">CloudVault</h1><p style="margin:0 0 40px;color:#94a3b8;font-size:15px;">Secure Cloud Storage</p></div><div style="padding:0 48px;"><h2 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#fff;">Password Reset Code</h2><p style="margin:0 0 32px;color:#94a3b8;font-size:15px;line-height:1.6;">Hi ${name}, use the code below to reset your CloudVault password. This code expires in <strong style="color:#fff;">10 minutes</strong>.</p><div style="background:#1a1a2e;border:1px solid rgba(99,102,241,0.3);border-radius:16px;padding:32px;margin-bottom:32px;text-align:center;"><div style="font-size:48px;font-weight:900;letter-spacing:12px;color:#fff;font-family:monospace;">${otp}</div><p style="margin:12px 0 0;color:#6366f1;font-size:13px;font-weight:600;">ONE-TIME CODE · EXPIRES IN 10 MIN</p></div><div style="background:rgba(234,179,8,0.08);border:1px solid rgba(234,179,8,0.2);border-radius:12px;padding:16px;margin-bottom:32px;"><p style="margin:0;color:#fbbf24;font-size:13px;line-height:1.6;">⚠️ Never share this code with anyone. CloudVault will never ask for it.</p></div></div><div style="padding:32px 48px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;"><p style="margin:0;color:#475569;font-size:12px;">If you didn't request this, you can safely ignore this email.</p><p style="margin:8px 0 0;color:#334155;font-size:12px;">© 2025 CloudVault · All rights reserved</p></div></td></tr></table></td></tr></table></td></tr></table></body></html>`,
  }),

  verification: (name, verifyLink) => ({
    subject: 'Verify your CloudVault email',
    html: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Verify Your Email</title></head><body style="margin:0;padding:0;background:#0a0a0f;font-family:'Inter',Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:48px 16px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;"><tr><td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:2px;border-radius:20px;"><table width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#0f0f1a;border-radius:19px;overflow:hidden;"><div style="padding:40px 48px 0;text-align:center;"><div style="display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:16px;margin-bottom:24px;"><span style="font-size:28px;">☁</span></div><h1 style="margin:0 0 8px;font-size:28px;font-weight:800;color:#fff;letter-spacing:-0.5px;">CloudVault</h1><p style="margin:0 0 40px;color:#94a3b8;font-size:15px;">Secure Cloud Storage</p></div><div style="padding:0 48px;"><h2 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#fff;">Confirm your email address</h2><p style="margin:0 0 32px;color:#94a3b8;font-size:15px;line-height:1.6;">Hi ${name}, thanks for joining CloudVault! Click the button below to verify your email and activate your account.</p><div style="text-align:center;margin-bottom:24px;"><a href="${verifyLink}" style="display:inline-block;padding:16px 40px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;text-decoration:none;border-radius:12px;font-weight:700;font-size:16px;">Verify Email Address</a></div><p style="color:#475569;font-size:13px;text-align:center;word-break:break-all;">Or paste this link: <a href="${verifyLink}" style="color:#6366f1;">${verifyLink}</a></p><p style="color:#64748b;font-size:13px;text-align:center;margin-top:16px;">This link expires in 24 hours.</p></div><div style="padding:32px 48px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;"><p style="margin:0;color:#475569;font-size:12px;">If you didn't create a CloudVault account, you can safely ignore this email.</p><p style="margin:8px 0 0;color:#334155;font-size:12px;">© 2025 CloudVault · All rights reserved</p></div></td></tr></table></td></tr></table></td></tr></table></body></html>`,
  }),

  welcome: (name) => ({
    subject: `Welcome to CloudVault, ${name}! 🎉`,
    html: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Welcome to CloudVault</title></head><body style="margin:0;padding:0;background:#0a0a0f;font-family:'Inter',Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:48px 16px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;"><tr><td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:2px;border-radius:20px;"><table width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#0f0f1a;border-radius:19px;overflow:hidden;"><div style="padding:48px 48px 0;text-align:center;"><div style="font-size:48px;margin-bottom:16px;">🎉</div><h1 style="margin:0 0 8px;font-size:32px;font-weight:800;color:#fff;letter-spacing:-0.5px;">Welcome aboard, ${name}!</h1><p style="margin:0 0 40px;color:#94a3b8;font-size:16px;">Your CloudVault account is ready.</p></div><div style="padding:0 48px;"><div style="display:grid;gap:16px;margin-bottom:32px;"><div style="background:#1a1a2e;border:1px solid rgba(99,102,241,0.2);border-radius:14px;padding:20px;margin-bottom:12px;"><p style="margin:0 0 4px;font-weight:700;color:#fff;font-size:15px;">📁 Unlimited file storage</p><p style="margin:0;color:#94a3b8;font-size:13px;">Upload, organize, and access your files from anywhere</p></div><div style="background:#1a1a2e;border:1px solid rgba(99,102,241,0.2);border-radius:14px;padding:20px;margin-bottom:12px;"><p style="margin:0 0 4px;font-weight:700;color:#fff;font-size:15px;">🔗 Secure file sharing</p><p style="margin:0;color:#94a3b8;font-size:13px;">Share with anyone using secure, expiring links</p></div><div style="background:#1a1a2e;border:1px solid rgba(99,102,241,0.2);border-radius:14px;padding:20px;"><p style="margin:0 0 4px;font-weight:700;color:#fff;font-size:15px;">🔒 End-to-end security</p><p style="margin:0;color:#94a3b8;font-size:13px;">Your files are encrypted and protected at all times</p></div></div><div style="text-align:center;margin-bottom:32px;"><a href="${APP_URL}" style="display:inline-block;padding:16px 40px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;text-decoration:none;border-radius:12px;font-weight:700;font-size:16px;">Go to CloudVault</a></div></div><div style="padding:32px 48px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;"><p style="margin:0;color:#334155;font-size:12px;">© 2025 CloudVault · All rights reserved</p></div></td></tr></table></td></tr></table></td></tr></table></body></html>`,
  }),

  passwordChanged: (name, timestamp) => ({
    subject: 'Your CloudVault password was changed',
    html: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Password Changed</title></head><body style="margin:0;padding:0;background:#0a0a0f;font-family:'Inter',Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:48px 16px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;"><tr><td style="background:linear-gradient(135deg,#10b981,#059669);padding:2px;border-radius:20px;"><table width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#0f0f1a;border-radius:19px;overflow:hidden;"><div style="padding:40px 48px 0;text-align:center;"><div style="font-size:48px;margin-bottom:16px;">✅</div><h1 style="margin:0 0 8px;font-size:28px;font-weight:800;color:#fff;">Password Changed</h1><p style="margin:0 0 40px;color:#94a3b8;font-size:15px;">CloudVault Security Alert</p></div><div style="padding:0 48px;"><p style="color:#94a3b8;font-size:15px;line-height:1.6;">Hi ${name}, your CloudVault password was successfully changed on <strong style="color:#fff;">${timestamp}</strong>.</p><div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:12px;padding:16px;margin:24px 0;"><p style="margin:0;color:#34d399;font-size:14px;">✓ If you made this change, you're all set — no action needed.</p></div><div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);border-radius:12px;padding:16px;margin-bottom:32px;"><p style="margin:0;color:#f87171;font-size:14px;">⚠️ If you did NOT make this change, contact support immediately and secure your account.</p></div></div><div style="padding:32px 48px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;"><p style="margin:0;color:#334155;font-size:12px;">© 2025 CloudVault · All rights reserved</p></div></td></tr></table></td></tr></table></td></tr></table></body></html>`,
  }),

  forgotPassword: (name, resetLink) => ({
    subject: 'Reset your CloudVault password',
    html: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Reset Password</title></head><body style="margin:0;padding:0;background:#0a0a0f;font-family:'Inter',Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:48px 16px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;"><tr><td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:2px;border-radius:20px;"><table width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#0f0f1a;border-radius:19px;overflow:hidden;"><div style="padding:40px 48px 0;text-align:center;"><div style="font-size:48px;margin-bottom:16px;">🔐</div><h1 style="margin:0 0 8px;font-size:28px;font-weight:800;color:#fff;">Reset Password</h1><p style="margin:0 0 40px;color:#94a3b8;font-size:15px;">CloudVault Account Recovery</p></div><div style="padding:0 48px;"><p style="color:#94a3b8;font-size:15px;line-height:1.6;margin-bottom:32px;">Hi ${name}, we received a request to reset your password. Click below to choose a new one.</p><div style="text-align:center;margin-bottom:24px;"><a href="${resetLink}" style="display:inline-block;padding:16px 40px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;text-decoration:none;border-radius:12px;font-weight:700;font-size:16px;">Reset My Password</a></div><p style="color:#64748b;font-size:13px;text-align:center;">This link expires in 15 minutes.</p><div style="background:rgba(234,179,8,0.08);border:1px solid rgba(234,179,8,0.2);border-radius:12px;padding:16px;margin-top:24px;margin-bottom:32px;"><p style="margin:0;color:#fbbf24;font-size:13px;">⚠️ If you didn't request this, no action is needed. Your password won't change.</p></div></div><div style="padding:32px 48px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;"><p style="margin:0;color:#334155;font-size:12px;">© 2025 CloudVault · All rights reserved</p></div></td></tr></table></td></tr></table></td></tr></table></body></html>`,
  }),

  newLogin: (name, deviceInfo, timestamp, location) => ({
    subject: 'New login detected on your CloudVault account',
    html: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New Login Detected</title></head><body style="margin:0;padding:0;background:#0a0a0f;font-family:'Inter',Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:48px 16px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;"><tr><td style="background:linear-gradient(135deg,#f59e0b,#d97706);padding:2px;border-radius:20px;"><table width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#0f0f1a;border-radius:19px;overflow:hidden;"><div style="padding:40px 48px 0;text-align:center;"><div style="font-size:48px;margin-bottom:16px;">🔔</div><h1 style="margin:0 0 8px;font-size:28px;font-weight:800;color:#fff;">New Login Detected</h1><p style="margin:0 0 40px;color:#94a3b8;font-size:15px;">CloudVault Security Alert</p></div><div style="padding:0 48px;"><p style="color:#94a3b8;font-size:15px;line-height:1.6;margin-bottom:24px;">Hi ${name}, a new login was detected on your CloudVault account.</p><div style="background:#1a1a2e;border:1px solid rgba(99,102,241,0.2);border-radius:14px;padding:20px;margin-bottom:24px;"><p style="margin:0 0 8px;color:#fff;font-weight:700;">Login Details</p><p style="margin:0 0 4px;color:#94a3b8;font-size:13px;">📱 Device: ${deviceInfo || 'Unknown device'}</p><p style="margin:0 0 4px;color:#94a3b8;font-size:13px;">🕐 Time: ${timestamp}</p><p style="margin:0;color:#94a3b8;font-size:13px;">📍 Location: ${location || 'Unknown'}</p></div><div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);border-radius:12px;padding:16px;margin-bottom:32px;"><p style="margin:0;color:#f87171;font-size:13px;">⚠️ If this wasn't you, change your password immediately.</p></div></div><div style="padding:32px 48px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;"><p style="margin:0;color:#334155;font-size:12px;">© 2025 CloudVault · All rights reserved</p></div></td></tr></table></td></tr></table></td></tr></table></body></html>`,
  }),
};

/**
 * Send Email Function
 */
function resolveTemplate(templateName, templateData) {
  const template = emailTemplates[templateName];
  if (!template) throw new Error(`Email template '${templateName}' not found`);

  if (templateName === 'verification') return template(templateData.name, templateData.verifyLink);
  if (templateName === 'forgotPassword') return template(templateData.name, templateData.resetLink);
  if (templateName === 'welcome') return template(templateData.name);
  if (templateName === 'passwordChanged') return template(templateData.name, templateData.timestamp);
  if (templateName === 'newLogin') return template(templateData.name, templateData.deviceInfo, templateData.timestamp, templateData.location);
  if (templateName === 'otpEmail') return template(templateData.name, templateData.otp);

  return template(templateData);
}

async function sendEmail(to, templateName, templateData, text) {
  if (!resend) {
    console.warn('Email service not configured. Skipping email send.');
    return { success: false, message: 'Email service not configured. Missing RESEND_API_KEY.' };
  }

  try {
    const { subject, html } = typeof templateData === 'string'
      ? { subject: templateName, html: templateData }
      : resolveTemplate(templateName, templateData || {});

    const payload = {
      from: EMAIL_FROM,
      to: [to],
      subject,
      html,
      ...(text ? { text } : {}),
    };

    console.log('RESEND REQUEST:', {
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
    });

    const result = await resend.emails.send(payload);

    console.log('RESEND RESPONSE BODY:', JSON.stringify(result, null, 2));
    if (result?.error) {
      console.error('RESEND ERROR BODY:', JSON.stringify(result.error, null, 2));
      return { success: false, error: result.error.message || 'Resend email send failed', details: result.error };
    }
    console.log(`Email sent successfully to ${to}:`, result);
    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send email:', error);
    console.error('RESEND ERROR BODY:', JSON.stringify(error?.response?.data || error?.response || error, null, 2));
    return { success: false, error: error.message, details: error?.response?.data || error?.response };
  }
}

module.exports = {
  sendEmail,
  emailTemplates
};
