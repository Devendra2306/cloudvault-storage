import { useState, useRef, useEffect } from "react";
import { BRAND } from "../lib/constants.js";
import { apiFetch } from "../lib/api.js";
import { GLOBAL_STYLES } from "../styles/globalStyles.js";
import { isFirebaseConfigured, getFirebaseProviderStatus, signInWithProvider } from "../firebase.js";
import Turnstile from "./Turnstile.jsx";

// ── Helpers ────────────────────────────────────────────────────────────────────
const friendlyError = (msg = "") => {
  const m = msg.toLowerCase();
  if (m.includes("failed to fetch") || m.includes("cannot reach") || m.includes("networkerror"))
    return "Unable to reach CloudVault. Please check your connection.";
  if (m.includes("firebase") || m.includes("oauth") || m.includes("access token"))
    return "Social login failed. Please try again.";
  return msg || "Something went wrong. Please try again.";
};

const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const validatePassword = (p) => p.length >= 8 && /[A-Z]/.test(p) && /[a-z]/.test(p) && /\d/.test(p);

// ── Sub-components ─────────────────────────────────────────────────────────────
function Spinner({ size = 20 }) {
  return (
    <span style={{
      display: "inline-block", width: size, height: size,
      border: "2.5px solid rgba(255,255,255,0.25)",
      borderTopColor: "#fff", borderRadius: "50%",
      animation: "cv-spin 0.7s linear infinite",
    }} />
  );
}

function BrandMark({ size = 42 }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: "50%",
      background: "var(--mega-red, #d90007)", display: "inline-flex", alignItems: "center",
      justifyContent: "center", boxShadow: "0 8px 24px rgba(217,0,7,.35)",
      flexShrink: 0, overflow: "hidden",
    }}>
      <img src={BRAND.logoImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </span>
  );
}

function FloatingInput({ label, type = "text", value, onChange, placeholder, autoFocus, error }) {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;
  return (
    <div style={{ position: "relative", marginBottom: 4 }}>
      <label style={{
        position: "absolute", left: 16,
        top: focused || hasValue ? 8 : "50%",
        transform: focused || hasValue ? "translateY(0) scale(0.82)" : "translateY(-50%)",
        transformOrigin: "left top",
        fontSize: focused || hasValue ? 11 : 14,
        fontWeight: 600,
        color: focused ? "var(--cv-accent)" : error ? "var(--cv-danger)" : "var(--cv-text-muted)",
        transition: "all 0.18s cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: "none", zIndex: 1,
        letterSpacing: focused || hasValue ? "0.04em" : "0",
        textTransform: focused || hasValue ? "uppercase" : "none",
      }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoFocus={autoFocus}
        placeholder={focused ? placeholder : ""}
        style={{
          width: "100%", padding: "28px 16px 10px",
          background: "var(--cv-bg-card)",
          border: `1.5px solid ${error ? "var(--cv-danger)" : focused ? "var(--cv-accent)" : "var(--cv-border)"}`,
          borderRadius: "var(--cv-radius-lg)",
          color: "var(--cv-text)", fontSize: 15, outline: "none",
          transition: "border-color 0.18s ease, box-shadow 0.18s ease",
          boxShadow: focused ? `0 0 0 3px ${error ? "rgba(239,68,68,0.12)" : "rgba(99,102,241,0.12)"}` : "none",
        }}
      />
      {error && (
        <div style={{ fontSize: 12, color: "var(--cv-danger)", marginTop: 4, paddingLeft: 4, fontWeight: 500 }}>
          {error}
        </div>
      )}
    </div>
  );
}

function OtpInput({ value, onChange }) {
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const digits = (value + "      ").slice(0, 6).split("");

  const handleKey = (i, e) => {
    if (e.key === "Backspace") {
      if (digits[i] !== " ") {
        const next = digits.map((d, idx) => idx === i ? " " : d).join("").trimEnd();
        onChange(next);
      } else if (i > 0) {
        refs[i - 1].current?.focus();
        const next = digits.map((d, idx) => idx === i - 1 ? " " : d).join("").trimEnd();
        onChange(next);
      }
    } else if (e.key >= "0" && e.key <= "9") {
      e.preventDefault();
      const next = digits.map((d, idx) => idx === i ? e.key : d).join("").replace(/ /g, "");
      onChange(next.slice(0, 6));
      if (i < 5) refs[i + 1].current?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted) { onChange(pasted); refs[Math.min(pasted.length, 5)].current?.focus(); }
  };

  return (
    <div style={{ display: "flex", gap: 10, justifyContent: "center", margin: "8px 0" }}>
      {refs.map((ref, i) => (
        <input
          key={i}
          ref={ref}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digits[i]?.trim() || ""}
          onKeyDown={(e) => handleKey(i, e)}
          onPaste={handlePaste}
          onChange={() => {}}
          style={{
            width: 52, height: 60,
            textAlign: "center", fontSize: 24, fontWeight: 800,
            background: "var(--cv-bg-card)",
            border: `2px solid ${digits[i]?.trim() ? "var(--cv-accent)" : "var(--cv-border)"}`,
            borderRadius: 14, color: "var(--cv-text)", outline: "none",
            transition: "border-color 0.18s ease, transform 0.1s ease",
            transform: digits[i]?.trim() ? "scale(1.05)" : "scale(1)",
            boxShadow: digits[i]?.trim() ? "0 0 0 3px rgba(99,102,241,0.15)" : "none",
          }}
        />
      ))}
    </div>
  );
}

function SocialButton({ label, icon, onClick, disabled }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
        width: "100%", padding: "12px 16px", minHeight: 48,
        background: hovered ? "rgba(0,183,79,.08)" : "var(--bg-card)",
        border: hovered ? "1px solid rgba(0,183,79,.35)" : "1px solid var(--border)",
        borderRadius: 14, 
        cursor: disabled ? "not-allowed" : "pointer",
        color: "var(--text)", fontSize: 14, fontWeight: 700,
        transition: "all 0.2s ease", 
        opacity: disabled ? 0.5 : 1,
        boxShadow: hovered ? "0 12px 28px rgba(0,0,0,.08)" : "none",
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        {icon}
      </span>
      <span>Continue with {label}</span>
    </button>
  );
}

function PasswordStrength({ password }) {
  if (!password) return null;
  const checks = [
    { label: "8+ chars", ok: password.length >= 8 },
    { label: "Uppercase", ok: /[A-Z]/.test(password) },
    { label: "Lowercase", ok: /[a-z]/.test(password) },
    { label: "Number", ok: /\d/.test(password) },
  ];
  const score = checks.filter((c) => c.ok).length;
  const colors = ["var(--cv-danger)", "var(--cv-danger)", "#f59e0b", "#10b981"];
  const labels = ["Weak", "Weak", "Fair", "Strong"];
  return (
    <div style={{ marginTop: 6 }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 99,
            background: i < score ? colors[score - 1] : "var(--cv-border)",
            transition: "background 0.3s ease",
          }} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {checks.map((c) => (
          <span key={c.label} style={{ fontSize: 11, color: c.ok ? "#10b981" : "var(--cv-text-muted)", fontWeight: 500 }}>
            {c.ok ? "✓" : "○"} {c.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Auth Screen Views ──────────────────────────────────────────────────────────

const STEPS = {
  LOGIN: "login",
  REGISTER: "register",
  FORGOT: "forgot",
  VERIFY_OTP: "verify_otp",
  RESET_PASSWORD: "reset_password",
};

// ── Main Component ─────────────────────────────────────────────────────────────
export default function AuthScreen({ onAuth, onBack, onNeedsVerification, initialMode = "login" }) {
  const [step, setStep] = useState(initialMode === "login" ? STEPS.LOGIN : STEPS.REGISTER);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [animDir, setAnimDir] = useState("forward");

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [otp, setOtp] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpResendCooldown, setOtpResendCooldown] = useState(0);

  // Turnstile
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [turnstileVerified, setTurnstileVerified] = useState(false);
  const [turnstileKey, setTurnstileKey] = useState(0);
  const turnstileEnabled = Boolean(import.meta.env.VITE_TURNSTILE_SITE_KEY);

  // Firebase
  const firebaseReady = isFirebaseConfigured();
  const firebaseProviders = getFirebaseProviderStatus();

  // Field errors
  const [fieldErrors, setFieldErrors] = useState({});

  // OTP resend countdown
  useEffect(() => {
    if (otpResendCooldown <= 0) return;
    const t = setTimeout(() => setOtpResendCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [otpResendCooldown]);

  const goTo = (newStep) => {
    setAnimDir("forward");
    setError("");
    setInfo("");
    setFieldErrors({});
    setStep(newStep);
  };

  const goBack = () => {
    setAnimDir("back");
    setError("");
    setInfo("");
    setFieldErrors({});
    if (step === STEPS.REGISTER || step === STEPS.FORGOT) setStep(STEPS.LOGIN);
    else if (step === STEPS.VERIFY_OTP) setStep(STEPS.FORGOT);
    else if (step === STEPS.RESET_PASSWORD) setStep(STEPS.VERIFY_OTP);
    else onBack?.();
  };

  const resetTurnstile = () => {
    setTurnstileToken(null);
    setTurnstileVerified(false);
    setTurnstileKey((k) => k + 1);
  };

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleLogin = async () => {
    const errs = {};
    if (!validateEmail(email)) errs.email = "Enter a valid email address";
    if (!password) errs.password = "Password is required";
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }
    if (turnstileEnabled && !turnstileVerified) { setError("Please complete the security check"); return; }

    setLoading(true);
    setError("");
    try {
      const data = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password, rememberMe: keepLoggedIn, ...(turnstileEnabled && { turnstileToken }) }),
      });
      if (!data?.accessToken) throw new Error("Login failed. Please try again.");
      const storage = keepLoggedIn ? localStorage : sessionStorage;
      storage.setItem("cv_token", data.accessToken);
      if (data.refreshToken) storage.setItem("cv_refreshToken", data.refreshToken);
      storage.setItem("cv_user", data.user?.fullName || email);
      onAuth(data.accessToken, data.refreshToken, data.user?.fullName || email, data.user, keepLoggedIn);
    } catch (e) {
      setError(friendlyError(e.message));
      resetTurnstile();
    }
    setLoading(false);
  };

  const handleRegister = async () => {
    const errs = {};
    if (!fullName || fullName.trim().length < 2) errs.fullName = "Full name must be at least 2 characters";
    if (!validateEmail(email)) errs.email = "Enter a valid email address";
    if (!validatePassword(password)) errs.password = "Password must be 8+ chars with uppercase, lowercase, and number";
    if (password !== confirmPassword) errs.confirmPassword = "Passwords do not match";
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }
    if (turnstileEnabled && !turnstileVerified) { setError("Please complete the security check"); return; }

    setLoading(true);
    setError("");
    try {
      await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password, fullName, ...(turnstileEnabled && { turnstileToken }) }),
      });
      setInfo("Account created! Check your email to verify your account, then sign in.");
      goTo(STEPS.LOGIN);
    } catch (e) {
      setError(friendlyError(e.message));
      resetTurnstile();
    }
    setLoading(false);
  };

  const handleForgotPassword = async () => {
    if (!validateEmail(email)) { setFieldErrors({ email: "Enter a valid email address" }); return; }
    if (turnstileEnabled && !turnstileVerified) { setError("Please complete the security check"); return; }

    setLoading(true);
    setError("");
    try {
      await apiFetch("/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email, ...(turnstileEnabled && { turnstileToken }) }),
      });
      setOtpResendCooldown(60);
      goTo(STEPS.VERIFY_OTP);
      setInfo("A 6-digit OTP has been sent to your email.");
    } catch (e) {
      setError(friendlyError(e.message));
      resetTurnstile();
    }
    setLoading(false);
  };

  const handleResendOtp = async () => {
    if (otpResendCooldown > 0) return;
    setLoading(true);
    setError("");
    try {
      await apiFetch("/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      setOtpResendCooldown(60);
      setInfo("A new OTP has been sent.");
    } catch (e) {
      setError(friendlyError(e.message));
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) { setError("Enter the 6-digit code from your email"); return; }
    setLoading(true);
    setError("");
    try {
      const data = await apiFetch("/auth/verify-otp", {
        method: "POST",
        body: JSON.stringify({ email, otp }),
      });
      setResetToken(data.resetToken);
      goTo(STEPS.RESET_PASSWORD);
    } catch (e) {
      setError(friendlyError(e.message));
      setOtp("");
    }
    setLoading(false);
  };

  const handleResetPassword = async () => {
    const errs = {};
    if (!validatePassword(password)) errs.password = "Password must be 8+ chars with uppercase, lowercase, and number";
    if (password !== confirmPassword) errs.confirmPassword = "Passwords do not match";
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }

    setLoading(true);
    setError("");
    try {
      await apiFetch("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ token: resetToken, newPassword: password }),
      });
      setInfo("Password reset successfully! Please sign in.");
      setPassword("");
      setConfirmPassword("");
      goTo(STEPS.LOGIN);
    } catch (e) {
      setError(friendlyError(e.message));
    }
    setLoading(false);
  };

  const handleOAuth = async (providerId) => {
    if (!firebaseReady) { setError("Social login is not available. Please use email and password."); return; }
    setLoading(true);
    setError("");
    try {
      const data = await signInWithProvider(providerId);
      if (!data?.accessToken) throw new Error("Social login failed.");
      localStorage.setItem("cv_token", data.accessToken);
      if (data.refreshToken) localStorage.setItem("cv_refreshToken", data.refreshToken);
      localStorage.setItem("cv_user", data.user?.fullName || email);
      onAuth(data.accessToken, data.refreshToken, data.user?.fullName || email, data.user, true);
    } catch (e) {
      setError(friendlyError(e.message));
    }
    setLoading(false);
  };

  // ── Step Configs ────────────────────────────────────────────────────────────
  const stepTitles = {
    [STEPS.LOGIN]: { title: "Welcome back", sub: `Sign in to ${BRAND.name}` },
    [STEPS.REGISTER]: { title: "Create account", sub: "Start your CloudVault journey" },
    [STEPS.FORGOT]: { title: "Forgot password?", sub: "We'll send a code to your email" },
    [STEPS.VERIFY_OTP]: { title: "Enter your code", sub: `Sent to ${email || "your email"}` },
    [STEPS.RESET_PASSWORD]: { title: "New password", sub: "Choose a strong password" },
  };

  const canSubmit = !loading && (!turnstileEnabled || turnstileVerified ||
    step === STEPS.VERIFY_OTP || step === STEPS.RESET_PASSWORD);

  const handleSubmit = () => {
    if (step === STEPS.LOGIN) handleLogin();
    else if (step === STEPS.REGISTER) handleRegister();
    else if (step === STEPS.FORGOT) handleForgotPassword();
    else if (step === STEPS.VERIFY_OTP) handleVerifyOtp();
    else if (step === STEPS.RESET_PASSWORD) handleResetPassword();
  };

  const submitLabel = {
    [STEPS.LOGIN]: "Sign in",
    [STEPS.REGISTER]: "Create account",
    [STEPS.FORGOT]: "Send code",
    [STEPS.VERIFY_OTP]: "Verify code",
    [STEPS.RESET_PASSWORD]: "Reset password",
  }[step];

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="auth-splash">
      <style>{GLOBAL_STYLES}</style>
      <style>{`
        :root {
          --cv-bg-card: #141414;
          --cv-surface-raised: #1a1a1a;
          --cv-border: rgba(255,255,255,.08);
          --cv-border-strong: rgba(217,0,7,.4);
          --cv-text: #ffffff;
          --cv-text-muted: #737373;
          --cv-accent: #d90007;
          --cv-danger: #ef4444;
          --cv-radius-lg: 14px;
        }
        @keyframes cv-spin { to { transform: rotate(360deg); } }
        @keyframes cv-slide-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cv-fade { from { opacity: 0; } to { opacity: 1; } }
        .cv-auth-card { animation: cv-slide-in 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .cv-auth-step { animation: cv-fade 0.3s ease; }
      `}</style>

      {/* MEGA-style floating cloud logo */}
      <div className="auth-cloud-logo" style={{ marginBottom: 48 }}>
        <div className="auth-cloud-bg" />
        <div className="auth-mega-mark">
          <div className="auth-mega-circle"><img src={BRAND.logoImage} alt="" /></div>
        </div>
      </div>

      <div className="cv-auth-card" style={{
        width: "100%", maxWidth: 440,
        background: "rgba(20, 20, 20, .96)",
        borderRadius: 20, border: "1px solid rgba(255,255,255,.08)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Red accent bar */}
        <div style={{
          height: 3, background: "var(--cv-accent)",
          position: "absolute", top: 0, left: 0, right: 0,
        }} />

        <div style={{ padding: "36px 32px 32px" }}>
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, justifyContent: "center" }}>
            <BrandMark size={36} />
            <div style={{ fontSize: 18, fontWeight: 800, color: "var(--cv-text)", letterSpacing: "-0.02em" }}>
              {BRAND.name}
            </div>
          </div>

          {/* Back / Step indicator */}
          {step !== STEPS.LOGIN && (
            <button type="button" onClick={goBack} style={{
              display: "flex", alignItems: "center", gap: 6, marginBottom: 24,
              background: "none", border: "none", cursor: "pointer",
              color: "var(--text-muted)", fontSize: 13, fontWeight: 600,
              padding: "4px 0", transition: "color 0.15s",
            }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>
              ← Back
            </button>
          )}

          {/* Title */}
          <div className="cv-auth-step" style={{ marginBottom: 28 }}>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.03em", margin: "0 0 4px" }}>
              {stepTitles[step].title}
            </h1>
            <p style={{ fontSize: 14, color: "var(--text-muted)", margin: 0, fontWeight: 500 }}>
              {stepTitles[step].sub}
            </p>
          </div>

          {/* Login/Register Tab Switcher */}
          {(step === STEPS.LOGIN || step === STEPS.REGISTER) && (
            <div style={{
              display: "flex", gap: 4, background: "var(--surface-raised)",
              borderRadius: 14, padding: 4, marginBottom: 24,
              border: "1px solid var(--border)",
            }}>
              {[STEPS.LOGIN, STEPS.REGISTER].map((s) => (
                <button key={s} type="button" onClick={() => goTo(s)} style={{
                  flex: 1, padding: "9px 12px", borderRadius: 10, border: "none",
                  background: step === s ? "var(--bg-card)" : "transparent",
                  color: step === s ? "var(--text)" : "var(--text-muted)",
                  fontSize: 14, fontWeight: step === s ? 700 : 500, cursor: "pointer",
                  boxShadow: step === s ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                  transition: "all 0.18s ease",
                }}>
                  {s === STEPS.LOGIN ? "Sign In" : "Sign Up"}
                </button>
              ))}
            </div>
          )}

          {/* ── FORM FIELDS ── */}
          <div className="cv-auth-step" style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* REGISTER: Full Name */}
            {step === STEPS.REGISTER && (
              <FloatingInput
                label="Full Name"
                value={fullName}
                onChange={(e) => { setFullName(e.target.value); setFieldErrors((p) => ({ ...p, fullName: "" })); }}
                placeholder="Jane Smith"
                autoFocus
                error={fieldErrors.fullName}
              />
            )}

            {/* LOGIN + REGISTER + FORGOT: Email */}
            {[STEPS.LOGIN, STEPS.REGISTER, STEPS.FORGOT].includes(step) && (
              <FloatingInput
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: "" })); }}
                placeholder="you@example.com"
                autoFocus={step === STEPS.LOGIN || step === STEPS.FORGOT}
                error={fieldErrors.email}
              />
            )}

            {/* LOGIN + REGISTER + RESET: Password */}
            {[STEPS.LOGIN, STEPS.REGISTER, STEPS.RESET_PASSWORD].includes(step) && (
              <div>
                <div style={{ position: "relative" }}>
                  <FloatingInput
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setFieldErrors((p) => ({ ...p, password: "" })); }}
                    placeholder={step === STEPS.LOGIN ? "Your password" : "Min 8 chars, A-Z, 0-9"}
                    autoFocus={step === STEPS.RESET_PASSWORD}
                    error={fieldErrors.password}
                  />
                  <button type="button" onClick={() => setShowPassword((v) => !v)} style={{
                    position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer",
                    color: "var(--text-muted)", fontSize: 13, fontWeight: 600, marginTop: fieldErrors.password ? -10 : 0,
                  }}>
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {(step === STEPS.REGISTER || step === STEPS.RESET_PASSWORD) && (
                  <PasswordStrength password={password} />
                )}
              </div>
            )}

            {/* REGISTER + RESET: Confirm Password */}
            {[STEPS.REGISTER, STEPS.RESET_PASSWORD].includes(step) && (
              <div style={{ position: "relative" }}>
                <FloatingInput
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setFieldErrors((p) => ({ ...p, confirmPassword: "" })); }}
                  placeholder="Repeat your password"
                  error={fieldErrors.confirmPassword}
                />
                <button type="button" onClick={() => setShowConfirmPassword((v) => !v)} style={{
                  position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--text-muted)", fontSize: 13, fontWeight: 600, marginTop: fieldErrors.confirmPassword ? -10 : 0,
                }}>
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            )}

            {/* OTP Input */}
            {step === STEPS.VERIFY_OTP && (
              <div>
                <OtpInput value={otp} onChange={setOtp} />
                <div style={{ textAlign: "center", marginTop: 12 }}>
                  <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
                    Didn't get the code?{" "}
                  </span>
                  <button type="button" onClick={handleResendOtp} disabled={otpResendCooldown > 0 || loading} style={{
                    background: "none", border: "none", cursor: otpResendCooldown > 0 ? "default" : "pointer",
                    color: otpResendCooldown > 0 ? "var(--text-muted)" : "var(--accent-blue)",
                    fontSize: 13, fontWeight: 600,
                  }}>
                    {otpResendCooldown > 0 ? `Resend in ${otpResendCooldown}s` : "Resend"}
                  </button>
                </div>
              </div>
            )}

            {/* LOGIN: Remember me + Forgot password */}
            {step === STEPS.LOGIN && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                  <input type="checkbox" checked={keepLoggedIn} onChange={(e) => setKeepLoggedIn(e.target.checked)}
                    style={{ width: 16, height: 16, accentColor: "var(--accent-blue)" }} />
                  <span style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 500 }}>Remember me</span>
                </label>
                <button type="button" onClick={() => goTo(STEPS.FORGOT)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--accent-blue)", fontSize: 13, fontWeight: 600,
                }}>
                  Forgot password?
                </button>
              </div>
            )}
          </div>

          {/* ── Error / Info Banners ── */}
          {error && (
            <div style={{
              marginTop: 16, padding: "12px 14px",
              background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: 12, color: "#ef4444", fontSize: 13, fontWeight: 500, lineHeight: 1.5,
            }}>
              {error}
              {error.includes("verify your email") && (
                <button type="button" onClick={async () => {
                  try {
                    await apiFetch("/auth/resend-verification", { method: "POST", body: JSON.stringify({ email }) });
                    setInfo("Verification email resent. Check your inbox.");
                    setError("");
                  } catch (e) { /* noop */ }
                }} style={{
                  display: "block", marginTop: 8, background: "none", border: "none",
                  cursor: "pointer", color: "var(--accent-blue)", fontSize: 12, fontWeight: 600,
                }}>
                  Resend verification email →
                </button>
              )}
            </div>
          )}
          {info && (
            <div style={{
              marginTop: 16, padding: "12px 14px",
              background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: 12, color: "#10b981", fontSize: 13, fontWeight: 500, lineHeight: 1.5,
            }}>
              {info}
            </div>
          )}

          {/* Turnstile */}
          {turnstileEnabled && [STEPS.LOGIN, STEPS.REGISTER, STEPS.FORGOT].includes(step) && (
            <div style={{ marginTop: 16 }}>
              <Turnstile
                key={turnstileKey}
                onVerified={(t) => { setTurnstileToken(t); setTurnstileVerified(true); }}
                onError={(message) => { setError(message || "Security check failed. Please refresh."); setTurnstileVerified(false); }}
                onExpire={() => { setTurnstileToken(null); setTurnstileVerified(false); }}
              />
            </div>
          )}

          {/* ── Submit Button ── */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            style={{
              width: "100%", marginTop: 20, padding: "14px 20px",
              background: canSubmit
                ? "var(--cv-accent)"
                : "var(--surface-raised)",
              color: canSubmit ? "#fff" : "var(--text-muted)",
              border: "none", borderRadius: 14, fontSize: 15, fontWeight: 700,
              cursor: canSubmit ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              transition: "all 0.2s ease",
              boxShadow: canSubmit ? "0 16px 34px rgba(217,0,7,0.28)" : "none",
              transform: canSubmit ? "translateY(0)" : "translateY(0)",
            }}
            onMouseEnter={(e) => { if (canSubmit) e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {loading ? <Spinner /> : submitLabel}
          </button>

          {/* ── Social Login (Login + Register only) ── */}
          {[STEPS.LOGIN, STEPS.REGISTER].includes(step) && (
            <div style={{ marginTop: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  or
                </span>
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { id: "google", label: "Google", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
                  { id: "github", label: "GitHub", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
                  { id: "microsoft", label: "Microsoft", icon: <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0H0v10h10V0z" fill="#F25022"/><path d="M21 0H11v10h10V0z" fill="#7FBA00"/><path d="M10 11H0v10h10V11z" fill="#00A4EF"/><path d="M21 11H11v10h10V11z" fill="#FFB900"/></svg> },
                ].map((p) => (
                  <SocialButton
                    key={p.id}
                    label={p.label}
                    icon={p.icon}
                    disabled={loading || !firebaseReady}
                    onClick={() => handleOAuth(p.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Back to Landing */}
          {step === STEPS.LOGIN && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <button type="button" onClick={onBack} style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--text-muted)", fontSize: 13, fontWeight: 500,
              }}>
                ← Back to home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
