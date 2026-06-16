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
  verification: (name, verifyLink) => ({
    subject: 'Verify Your CloudVault Account',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your CloudVault Account</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .container { background: #f9f9f9; border-radius: 8px; padding: 30px; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #2563eb; }
          .content { background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; }
          .link { word-break: break-all; color: #2563eb; font-size: 13px; line-height: 1.6; }
          .button { display: inline-block; padding: 12px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; font-size: 12px; color: #666; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">CloudVault</div>
          </div>
          <div class="content">
            <h2>Welcome to CloudVault!</h2>
            <p>Hi ${name},</p>
            <p>Thank you for signing up. To complete your registration, verify your email address with the secure link below:</p>
            <a href="${verifyLink}" class="button">Verify email</a>
            <p class="link">${verifyLink}</p>
            <p>This link will expire in 24 hours.</p>
            <p>If you didn't create an account with CloudVault, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>&copy; 2026 CloudVault. All rights reserved.</p>
            <p>This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  forgotPassword: (name, resetLink) => ({
    subject: 'Reset Your CloudVault Password',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Your CloudVault Password</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .container { background: #f9f9f9; border-radius: 8px; padding: 30px; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #2563eb; }
          .content { background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; }
          .button { display: inline-block; padding: 12px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; font-size: 12px; color: #666; margin-top: 30px; }
          .warning { background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #ffc107; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">CloudVault</div>
          </div>
          <div class="content">
            <h2>Password Reset Request</h2>
            <p>Hi ${name},</p>
            <p>We received a request to reset your password for your CloudVault account.</p>
            <p>Click the button below to reset your password:</p>
            <a href="${resetLink}" class="button">Reset Password</a>
            <p>Or copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #2563eb;">${resetLink}</p>
            <div class="warning">
              <p><strong>Important:</strong> This link will expire in 15 minutes.</p>
            </div>
            <p>If you didn't request a password reset, please ignore this email and your password will remain unchanged.</p>
          </div>
          <div class="footer">
            <p>&copy; 2026 CloudVault. All rights reserved.</p>
            <p>This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  welcome: (name) => ({
    subject: 'Welcome to CloudVault!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to CloudVault</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .container { background: #f9f9f9; border-radius: 8px; padding: 30px; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #2563eb; }
          .content { background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; }
          .button { display: inline-block; padding: 12px 30px; background: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; font-size: 12px; color: #666; margin-top: 30px; }
          .features { background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .features ul { list-style: none; padding: 0; }
          .features li { padding: 10px 0; border-bottom: 1px solid #e0f2fe; }
          .features li:last-child { border-bottom: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">CloudVault</div>
          </div>
          <div class="content">
            <h2>Welcome to CloudVault!</h2>
            <p>Hi ${name},</p>
            <p>Your email has been successfully verified. Your CloudVault account is now ready to use!</p>
            <div class="features">
              <h3>What you can do with CloudVault:</h3>
              <ul>
                <li>📁 Store and organize your files securely</li>
                <li>🔗 Share files with anyone using secure links</li>
                <li>📱 Access your files from any device</li>
                <li>🔒 Enjoy end-to-end encryption</li>
              </ul>
            </div>
            <p>Get started by logging in to your account:</p>
            <a href="${APP_URL}" class="button">Login to CloudVault</a>
          </div>
          <div class="footer">
            <p>&copy; 2026 CloudVault. All rights reserved.</p>
            <p>This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  passwordChanged: (name, timestamp) => ({
    subject: 'Your CloudVault Password Has Been Changed',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Changed</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .container { background: #f9f9f9; border-radius: 8px; padding: 30px; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #2563eb; }
          .content { background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; }
          .alert { background: #d1fae5; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #10b981; }
          .footer { text-align: center; font-size: 12px; color: #666; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">CloudVault</div>
          </div>
          <div class="content">
            <h2>Password Changed Successfully</h2>
            <p>Hi ${name},</p>
            <div class="alert">
              <p><strong>Security Alert:</strong> Your CloudVault password was changed on ${timestamp}.</p>
            </div>
            <p>If you made this change, no further action is needed.</p>
            <p>If you did not make this change, please contact support immediately and change your password.</p>
          </div>
          <div class="footer">
            <p>&copy; 2026 CloudVault. All rights reserved.</p>
            <p>This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  newLogin: (name, deviceInfo, timestamp, location) => ({
    subject: 'New Login Detected on Your CloudVault Account',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Login Detected</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .container { background: #f9f9f9; border-radius: 8px; padding: 30px; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #2563eb; }
          .content { background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; }
          .alert { background: #fef3c7; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #f59e0b; }
          .info { background: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; font-size: 12px; color: #666; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">CloudVault</div>
          </div>
          <div class="content">
            <h2>New Login Detected</h2>
            <p>Hi ${name},</p>
            <div class="alert">
              <p><strong>Security Alert:</strong> A new login was detected on your CloudVault account.</p>
            </div>
            <div class="info">
              <p><strong>Login Details:</strong></p>
              <p>Device: ${deviceInfo}</p>
              <p>Time: ${timestamp}</p>
              <p>Location: ${location || 'Unknown'}</p>
            </div>
            <p>If this was you, no further action is needed.</p>
            <p>If you did not recognize this login, please secure your account immediately by changing your password.</p>
          </div>
          <div class="footer">
            <p>&copy; 2026 CloudVault. All rights reserved.</p>
            <p>This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </body>
      </html>
    `
  })
};

/**
 * Send Email Function
 */
function resolveTemplate(templateName, templateData) {
  const template = emailTemplates[templateName];
  if (!template) {
    throw new Error(`Email template '${templateName}' not found`);
  }

  if (templateName === 'verification') {
    return template(templateData.name, templateData.verifyLink);
  }
  if (templateName === 'forgotPassword') {
    return template(templateData.name, templateData.resetLink);
  }
  if (templateName === 'welcome') {
    return template(templateData.name);
  }
  if (templateName === 'passwordChanged') {
    return template(templateData.name, templateData.timestamp);
  }
  if (templateName === 'newLogin') {
    return template(templateData.name, templateData.deviceInfo, templateData.timestamp, templateData.location);
  }

  return template(templateData);
}

async function sendEmail(to, templateName, templateData, text) {
  if (!resend) {
    console.warn('Email service not configured. Skipping email send.');
    return { success: false, message: 'Email service not configured' };
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
