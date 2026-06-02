require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Derive API URL dynamically based on environment
const getApiBaseUrl = () => {
  if (process.env.RENDER_EXTERNAL_URL) {
    return process.env.RENDER_EXTERNAL_URL;
  }
  if (process.env.NODE_ENV === 'production') {
    // In production, use the actual host from request or environment
    return process.env.API_BASE_URL || `http://localhost:${PORT}`;
  }
  return `http://localhost:${PORT}`;
};

app.listen(PORT, HOST, () => {
  const apiBaseUrl = getApiBaseUrl();
  console.log(`🚀 Server running on ${HOST}:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 API Base URL: ${apiBaseUrl}/api/v1`);
  console.log(`❤️  Health Check: ${apiBaseUrl}/health`);
});
