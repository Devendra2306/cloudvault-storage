require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
// const { createRedisClient } = require('./config/redis'); // Disabled for testing
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const folderRoutes = require('./routes/folderRoutes');
const fileRoutes = require('./routes/fileRoutes');
const trashRoutes = require('./routes/trashRoutes');
const shareRoutes = require('./routes/shareRoutes');
const searchRoutes = require('./routes/searchRoutes');
const storageRoutes = require('./routes/storageRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const recentRoutes = require('./routes/recentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const publicRoutes = require('./routes/publicRoutes');
const accountRoutes = require('./routes/accountRoutes');
const billingRoutes = require('./routes/billingRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

// Security headers
app.use(helmet());

// Logging middleware for OPTIONS requests
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    console.log('CORS Preflight Request:', {
      method: req.method,
      origin: req.headers.origin,
      path: req.path,
      headers: req.headers
    });
  }
  // Log all API requests
  if (req.path.startsWith('/api/v1')) {
    console.log(`${req.method} ${req.path} - User: ${req.user?.id || 'anonymous'}`);
  }
  next();
});

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173', 'https://cloudvault-storage-2jsb.vercel.app'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Global OPTIONS handler for CORS preflight (must be before rate limiter)
app.options('*', cors());

// Request size limits
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));

// Rate limiting (skip OPTIONS requests for CORS preflight)
const apiLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 200,
  message: 'Too many API requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.method === 'OPTIONS',
});

const uploadLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.UPLOAD_RATE_LIMIT_MAX) || 100,
  message: 'Too many upload requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.method === 'OPTIONS',
});

app.use('/api/v1', apiLimiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// API routes
console.log('Registering API routes...');
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/folders', folderRoutes);
app.use('/api/v1/files', fileRoutes);
app.use('/api/v1/trash', trashRoutes);
app.use('/api/v1/search', searchRoutes);
app.use('/api/v1/storage', storageRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);
app.use('/api/v1/recent', recentRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/public', publicRoutes);
app.use('/api/v1/account', accountRoutes);
app.use('/api/v1/billing', billingRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1', shareRoutes);
console.log('All API routes registered successfully');

// 404 handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

// Initialize Redis (optional, app can work without it) - Disabled for testing
// createRedisClient().catch((err) => {
//   console.warn('Redis initialization failed, app will work without caching:', err.message);
// });

module.exports = app;
