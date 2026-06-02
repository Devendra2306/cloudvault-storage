/**
 * Global error handler middleware
 */
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Prisma errors
  if (err.code === 'P2002') {
    return res.status(409).json({
      success: false,
      error: 'Conflict',
      message: 'A record with this information already exists',
      details: {
        field: err.meta?.target?.join(', '),
      },
    });
  }

  if (err.code === 'P2025') {
    return res.status(404).json({
      success: false,
      error: 'Not Found',
      message: 'Record not found',
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
      message: 'Invalid token',
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
      message: 'Token expired',
    });
  }

  // Custom errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      message: err.message,
      details: err.details,
    });
  }

  if (err.name === 'AuthenticationError') {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
      message: err.message,
    });
  }

  if (err.name === 'ForbiddenError') {
    return res.status(403).json({
      success: false,
      error: 'Forbidden',
      message: err.message,
    });
  }

  if (err.name === 'NotFoundError') {
    return res.status(404).json({
      success: false,
      error: 'Not Found',
      message: err.message,
    });
  }

  if (err.name === 'QuotaExceededError') {
    return res.status(413).json({
      success: false,
      error: 'Payload Too Large',
      message: err.message,
    });
  }

  // Default error
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    error: statusCode === 500 ? 'Internal Server Error' : 'Error',
    message: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred' : message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
};

/**
 * 404 Not Found handler
 */
const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
  });
};

/**
 * Custom error classes
 */
class ValidationError extends Error {
  constructor(message, details = null) {
    super(message);
    this.name = 'ValidationError';
    this.details = details;
  }
}

class AuthenticationError extends Error {
  constructor(message = 'Authentication failed') {
    super(message);
    this.name = 'AuthenticationError';
    this.statusCode = 401;
  }
}

class ForbiddenError extends Error {
  constructor(message = 'Access forbidden') {
    super(message);
    this.name = 'ForbiddenError';
    this.statusCode = 403;
  }
}

class NotFoundError extends Error {
  constructor(message = 'Resource not found') {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

class QuotaExceededError extends Error {
  constructor(message = 'Storage quota exceeded') {
    super(message);
    this.name = 'QuotaExceededError';
    this.statusCode = 413;
  }
}

module.exports = {
  errorHandler,
  notFoundHandler,
  ValidationError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  QuotaExceededError,
};
