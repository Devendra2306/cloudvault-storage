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
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const isLocalHost =
    typeof window !== "undefined" &&
    ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
  const isTurnstileTestKey = turnstileSiteKey?.startsWith("1x");
  const turnstileEnabled = Boolean(turnstileSiteKey && (!isTurnstileTestKey || isLocalHost));

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
    <div style={{ minHeight: '100vh', background: '#0d1117', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif' }}>
      <style>{`
        :root {
          --cv-bg-card: #0d1117;
          --cv-border: #30363d;
          --cv-accent: #2f81f7;
          --cv-text: #e6edf3;
        }
        .gh-input {
          width: 100%; padding: 5px 12px; font-size: 14px; line-height: 20px;
          color: #e6edf3; vertical-align: middle; background-color: #0d1117;
          background-repeat: no-repeat; background-position: right 8px center;
          border: 1px solid #30363d; border-radius: 6px; outline: none;
          box-shadow: 0 0 transparent; transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
          transition-property: color,background-color,box-shadow,border-color;
        }
        .gh-input:focus { border-color: #2f81f7; box-shadow: inset 0 0 0 1px #2f81f7; }
        .gh-btn {
          color: #ffffff; background-color: #238636; border: 1px solid rgba(240,246,252,0.1);
          border-radius: 6px; display: inline-block; padding: 5px 16px; font-size: 14px;
          font-weight: 500; line-height: 20px; white-space: nowrap; vertical-align: middle;
          cursor: pointer; appearance: none; text-align: center;
        }
        .gh-btn:hover { background-color: #2ea043; border-color: rgba(240,246,252,0.1); }
        .gh-btn:disabled { background-color: #238636; opacity: 0.5; cursor: default; }
        .gh-label { display: block; margin-bottom: 6px; font-size: 14px; font-weight: 400; color: #e6edf3; text-align: left; }
        .gh-card {
          width: 308px; background-color: #161b22; border: 1px solid #30363d;
          border-radius: 6px; padding: 20px; margin-top: 16px;
        }
        .gh-link { color: #2f81f7; text-decoration: none; font-size: 12px; }
        .gh-link:hover { text-decoration: underline; }
      `}</style>

      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: 24, cursor: 'pointer' }} onClick={onBack}>
        <img src={BRAND.logoImage} alt="CloudVault" style={{ width: 48, height: 48, borderRadius: '50%', background: '#d90007', padding: 8 }} />
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 24, fontWeight: 300, color: '#e6edf3', letterSpacing: '-0.5px', marginBottom: 8 }}>
        {stepTitles[step].title}
      </h1>

      {/* Auth Card */}
      <form className="gh-card" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        {error && (
          <div style={{ padding: '12px 16px', background: 'rgba(248,81,73,0.1)', border: '1px solid rgba(248,81,73,0.4)', borderRadius: 6, color: '#ff7b72', fontSize: 13, marginBottom: 16 }}>
            {error}
          </div>
        )}

        {info && (
          <div style={{ padding: '12px 16px', background: 'rgba(46,160,67,0.1)', border: '1px solid rgba(46,160,67,0.4)', borderRadius: 6, color: '#3fb950', fontSize: 13, marginBottom: 16 }}>
            {info}
          </div>
        )}

        {step === STEPS.LOGIN && (
          <>
            <div style={{ marginBottom: 16 }}>
              <label className="gh-label">Email address</label>
              <input type="email" className="gh-input" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                <label className="gh-label" style={{ margin: 0 }}>Password</label>
                <button type="button" onClick={() => goTo(STEPS.FORGOT)} style={{ background: 'none', border: 'none', color: '#2f81f7', fontSize: 12, cursor: 'pointer', padding: 0 }}>Forgot password?</button>
              </div>
              <input type="password" className="gh-input" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </>
        )}

        {step === STEPS.REGISTER && (
          <>
            <div style={{ marginBottom: 16 }}>
              <label className="gh-label">Email address</label>
              <input type="email" className="gh-input" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label className="gh-label">Password</label>
              <input type="password" className="gh-input" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label className="gh-label">Confirm password</label>
              <input type="password" className="gh-input" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
          </>
        )}

        {step === STEPS.FORGOT && (
          <>
            <div style={{ marginBottom: 16 }}>
              <label className="gh-label">Email address</label>
              <input type="email" className="gh-input" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
            </div>
          </>
        )}

        {step === STEPS.VERIFY_OTP && (
          <>
            <div style={{ marginBottom: 16 }}>
              <label className="gh-label">Verification code</label>
              <OtpInput value={otp} onChange={setOtp} />
            </div>
          </>
        )}

        {step === STEPS.RESET_PASSWORD && (
          <>
            <div style={{ marginBottom: 16 }}>
              <label className="gh-label">New password</label>
              <input type="password" className="gh-input" value={password} onChange={e => setPassword(e.target.value)} autoFocus />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label className="gh-label">Confirm new password</label>
              <input type="password" className="gh-input" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
          </>
        )}

        {/* Turnstile */}
        {turnstileEnabled && [STEPS.LOGIN, STEPS.REGISTER, STEPS.FORGOT].includes(step) && (
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <Turnstile
              key={turnstileKey}
              onVerified={(t) => { setTurnstileToken(t); setTurnstileVerified(true); }}
              onError={(message) => { setError(message || "Security check failed. Please refresh."); setTurnstileVerified(false); }}
              onExpire={() => { setTurnstileToken(null); setTurnstileVerified(false); }}
            />
          </div>
        )}

        <button type="submit" disabled={!canSubmit || loading} className="gh-btn" style={{ width: '100%', marginTop: 8 }}>
          {loading ? <Spinner /> : submitLabel}
        </button>

        {/* Social Logins */}
        {[STEPS.LOGIN, STEPS.REGISTER].includes(step) && (
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #30363d', textAlign: 'center' }}>
            <button type="button" onClick={() => handleOAuth('google')} disabled={loading || !firebaseReady} className="gh-btn" style={{ background: 'transparent', color: '#c9d1d9', borderColor: '#30363d', width: '100%', marginBottom: 8, opacity: (loading || !firebaseReady) ? 0.5 : 1 }}>
               Sign in with Google
            </button>
            <button type="button" onClick={() => handleOAuth('github')} disabled={loading || !firebaseReady} className="gh-btn" style={{ background: 'transparent', color: '#c9d1d9', borderColor: '#30363d', width: '100%', opacity: (loading || !firebaseReady) ? 0.5 : 1 }}>
               Sign in with GitHub
            </button>
          </div>
        )}
      </form>

      {/* Footer / Toggle Step */}
      <div style={{ width: 308, marginTop: 16, padding: '16px 20px', border: '1px solid #30363d', borderRadius: 6, textAlign: 'center', fontSize: 14, color: '#e6edf3' }}>
        {step === STEPS.LOGIN && (
          <>New to CloudVault? <button onClick={() => goTo(STEPS.REGISTER)} style={{ background:'none',border:'none',color:'#2f81f7',cursor:'pointer',padding:0, fontSize: 14 }}>Create an account</button>.</>
        )}
        {step === STEPS.REGISTER && (
          <>Already have an account? <button onClick={() => goTo(STEPS.LOGIN)} style={{ background:'none',border:'none',color:'#2f81f7',cursor:'pointer',padding:0, fontSize: 14 }}>Sign in</button>.</>
        )}
        {(step === STEPS.FORGOT || step === STEPS.VERIFY_OTP || step === STEPS.RESET_PASSWORD) && (
           <button onClick={() => goTo(STEPS.LOGIN)} style={{ background:'none',border:'none',color:'#2f81f7',cursor:'pointer',padding:0, fontSize: 14 }}>Return to sign in</button>
        )}
      </div>
    </div>
  );
}