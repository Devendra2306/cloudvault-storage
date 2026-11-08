const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

let JWT_SECRET = process.env.JWT_SECRET;
let JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

if (!JWT_SECRET || !JWT_REFRESH_SECRET) {
  if (process.env.NODE_ENV === 'production') {
    console.error("CRITICAL ERROR: JWT_SECRET or JWT_REFRESH_SECRET is not set in environment variables!");
    process.exit(1);
  } else {
    console.warn("WARNING: JWT_SECRET or JWT_REFRESH_SECRET not set; using local development fallback.");
    JWT_SECRET = JWT_SECRET || 'dev_jwt_secret_cloudvault_super_secure';
    JWT_REFRESH_SECRET = JWT_REFRESH_SECRET || 'dev_jwt_refresh_secret_cloudvault_super_secure';
  }
}

const JWT_ACCESS_EXPIRY = process.env.JWT_ACCESS_EXPIRY || '15m';
const JWT_REFRESH_EXPIRY = process.env.JWT_REFRESH_EXPIRY || '7d';

/**
 * Generate access token
 */
const generateAccessToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_ACCESS_EXPIRY,
  });
};

/**
 * Generate refresh token
 */
const generateRefreshToken = (payload) => {
  return jwt.sign({ ...payload, jti: uuidv4() }, JWT_REFRESH_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRY,
  });
};

/**
 * Verify access token
 */
const verifyAccessToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

/**
 * Verify refresh token
 */
const verifyRefreshToken = (token) => {
  return jwt.verify(token, JWT_REFRESH_SECRET);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  JWT_ACCESS_EXPIRY,
  JWT_REFRESH_EXPIRY,
};
