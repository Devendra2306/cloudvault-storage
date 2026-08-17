const redis = require('redis');

let redisClient;

/**
 * Create Redis client
 */
const createRedisClient = async () => {
  try {
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
    
    redisClient = redis.createClient({
      url: redisUrl,
      socket: {
        reconnectStrategy: (retries) => {
          if (retries > 3) {
            console.warn('⚠️  Redis: max reconnection attempts reached, running without cache.');
            return false; // stop retrying
          }
          return Math.min(retries * 500, 3000); // backoff: 500ms, 1s, 1.5s
        },
      },
    });

    redisClient.on('error', (err) => {
      // Only log the first error, suppress the reconnect spam
      if (!redisClient._errorLogged) {
        console.warn('Redis Client Error (suppressing further):', err.message);
        redisClient._errorLogged = true;
      }
    });

    redisClient.on('connect', () => {
      console.log('✅ Redis connected successfully');
      redisClient._errorLogged = false;
    });

    await redisClient.connect();
    return redisClient;
  } catch (error) {
    console.warn('⚠️  Redis connection failed, app will work without caching:', error.message);
    redisClient = null; // Ensure null so getCache/setCache bail out
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
