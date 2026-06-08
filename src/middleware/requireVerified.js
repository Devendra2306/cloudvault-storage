const { ForbiddenError } = require('./errorHandler');

const requireVerified = (req, res, next) => {
  if (!req.user?.isVerified) {
    return next(new ForbiddenError('Verify your email before uploading files. Check your inbox or resend verification from Settings.'));
  }
  next();
};

module.exports = { requireVerified };
