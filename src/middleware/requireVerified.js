const { ForbiddenError } = require('./errorHandler');
const { isEmailVerificationEnforced } = require('../config/emailPolicy');

const requireVerified = (req, res, next) => {
  if (!isEmailVerificationEnforced()) {
    return next();
  }



  if (!req.user?.isVerified) {
    console.error('ERROR: User email not verified');
    return next(new ForbiddenError('Verify your email before uploading files. Check your inbox or resend verification from Settings.'));
  }
  

  next();
};

module.exports = { requireVerified };
