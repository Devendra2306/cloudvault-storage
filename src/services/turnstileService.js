/**
 * Cloudflare Turnstile Verification Service
 * Verifies Turnstile tokens using Cloudflare Siteverify API
 */

const https = require('https');

const TURNSTILE_TEST_SECRET_KEY = '1x0000000000000000000000000000000AA';

function getTurnstileSecretKey() {
  if (process.env.NODE_ENV !== 'production' && process.env.TURNSTILE_USE_TEST_KEYS !== 'false') {
    return TURNSTILE_TEST_SECRET_KEY;
  }

  return process.env.TURNSTILE_SECRET_KEY;
}

/**
 * Verify Turnstile token with Cloudflare
 * @param {string} token - The Turnstile token from frontend
 * @param {string} remoteIp - Optional IP address of the user
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function verifyTurnstileToken(token, remoteIp = null) {
  const secretKey = getTurnstileSecretKey();

  if (!secretKey) {
    console.error('TURNSTILE SERVICE: TURNSTILE_SECRET_KEY not configured');
    return { success: false, error: 'Turnstile not configured on server' };
  }

  if (!token) {
    console.error('TURNSTILE SERVICE: No token provided');
    return { success: false, error: 'Turnstile token is required' };
  }

  const postData = JSON.stringify({
    secret: secretKey,
    response: token,
    remoteip: remoteIp,
  });

  const options = {
    hostname: 'challenges.cloudflare.com',
    port: 443,
    path: '/turnstile/v0/siteverify',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData),
    },
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          
          console.log('TURNSTILE SERVICE: Verification result:', {
            success: result.success,
            hostname: result.hostname,
            errorCodes: result['error-codes'],
          });

          if (result.success) {
            resolve({ success: true });
          } else {
            const errorCodes = result['error-codes'] || [];
            const errorMessages = {
              'missing-input-secret': 'Missing secret key',
              'invalid-input-secret': 'Invalid secret key',
              'missing-input-response': 'Missing response token',
              'invalid-input-response': 'Invalid response token',
              'invalid-widget-id': 'Invalid widget ID',
              'invalid-parsed-secret': 'Invalid parsed secret',
              'timeout-or-duplicate': 'Timeout or duplicate submission',
              'internal-error': 'Internal error',
            };
            
            const errorMessage = errorCodes
              .map(code => errorMessages[code] || code)
              .join(', ');
            
            console.error('TURNSTILE SERVICE: Verification failed:', errorMessage);
            resolve({ success: false, error: errorMessage });
          }
        } catch (error) {
          console.error('TURNSTILE SERVICE: JSON parse error:', error);
          resolve({ success: false, error: 'Verification service error' });
        }
      });
    });

    req.on('error', (error) => {
      console.error('TURNSTILE SERVICE: Request error:', error);
      resolve({ success: false, error: 'Network error during verification' });
    });

    req.write(postData);
    req.end();
  });
}

module.exports = {
  verifyTurnstileToken,
};
