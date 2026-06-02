const redis = require('redis');

let redisClient;

/**
 * Create Redis client
 */
const createRedisClient = async () => {
  try {
    redisClient = redis.createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    });

    redisClient.on('error', (err) => {
      console.error('Redis Client Error:', err);
    });

    redisClient.on('connect', () => {
      console.log('✅ Redis connected successfully');
    });

    await redisClient.connect();
    return redisClient;
  } catch (error) {
    console.error('❌ Redis connection failed:', error);
    // Don't exit, app can work without Redis
    return null;
  }
};

/**
 * Get Redis client
 */
const getRedisClient = () => {
  return redisClient;
};

/**
 * Set value in Redis
 */
const setCache = async (key, value, expirySeconds = 3600) => {
  if (!redisClient) return null;
  try {
    await redisClient.setEx(key, expirySeconds, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Redis set error:', error);
    return false;
  }
};

/**
 * Get value from Redis
 */
const getCache = async (key) => {
  if (!redisClient) return null;
  try {
    const value = await redisClient.get(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Redis get error:', error);
    return null;
  }
};

/**
 * Delete value from Redis
 */
const deleteCache = async (key) => {
  if (!redisClient) return null;
  try {
    await redisClient.del(key);
    return true;
  } catch (error) {
    console.error('Redis delete error:', error);
    return false;
  }
};

/**
 * Delete multiple keys matching pattern
 */
const deleteCachePattern = async (pattern) => {
  if (!redisClient) return null;
  try {
    const keys = await redisClient.keys(pattern);
    if (keys.length > 0) {
      await redisClient.del(keys);
    }
    return true;
  } catch (error) {
    console.error('Redis delete pattern error:', error);
    return false;
  }
};

module.exports = {
  createRedisClient,
  getRedisClient,
  setCache,
  getCache,
  deleteCache,
  deleteCachePattern,
};
