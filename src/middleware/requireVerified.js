const { ForbiddenError } = require('./errorHandler');
const { isEmailVerificationEnforced } = require('../config/emailPolicy');

const requireVerified = (req, res, next) => {
  if (!isEmailVerificationEnforced()) {
    return next();
  }

  console.log('=== REQUIRE VERIFIED MIDDLEWARE ===');
  console.log('USER:', req.user);
  console.log('IS VERIFIED:', req.user?.isVerified);

  if (!req.user?.isVerified) {
    console.error('ERROR: User email not verified');
    return next(new ForbiddenError('Verify your email before uploading files. Check your inbox or resend verification from Settings.'));
  }
  
  console.log('VERIFIED CHECK PASSED');
  next();
};

module.exports = { requireVerified };
