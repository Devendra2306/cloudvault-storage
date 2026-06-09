/**
 * Email verification is opt-in: set REQUIRE_EMAIL_VERIFICATION=true after Resend is configured.
 * Set SKIP_EMAIL_VERIFICATION=true to force-disable (e.g. staging).
 */
function isEmailVerificationEnforced() {
  if (process.env.SKIP_EMAIL_VERIFICATION === 'true') return false;
  if (process.env.REQUIRE_EMAIL_VERIFICATION !== 'true') return false;
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

module.exports = { isEmailVerificationEnforced };
