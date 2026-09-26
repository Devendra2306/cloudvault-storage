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

  // 👇👇 Render 👇👇
  return (
    <div style={{ minHeight: '100vh', background: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'var(--font, -apple-system, BlinkMacSystemFont, sans-serif)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle Background Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vw', maxWidth: 800, maxHeight: 800, background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none', zIndex: 0 }}></div>

      <style>{`
        .auth-container { position: relative; z-index: 10; width: 100%; max-width: 420px; display: flex; flex-direction: column; align-items: center; }
        .auth-card { width: 100%; background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
        .auth-title { font-size: 28px; font-weight: 700; color: #fff; margin-bottom: 8px; text-align: center; letter-spacing: -0.02em; }
        .auth-subtitle { font-size: 15px; color: #a1a1aa; text-align: center; margin-bottom: 32px; }
        .auth-label { display: block; font-size: 13px; font-weight: 500; color: #d4d4d8; margin-bottom: 8px; }
        .auth-input { width: 100%; background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 14px 16px; color: #fff; font-size: 15px; outline: none; transition: all 0.2s ease; box-sizing: border-box; }
        .auth-input:focus { border-color: #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15); background: rgba(0, 0, 0, 0.4); }
        .auth-btn-primary { width: 100%; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #fff; border: none; border-radius: 12px; padding: 14px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.25); display: flex; align-items: center; justify-content: center; margin-top: 24px; }
        .auth-btn-primary:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px 0 rgba(59, 130, 246, 0.4); }
        .auth-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
        .auth-btn-social { width: 100%; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px; font-size: 14px; font-weight: 500; color: #e4e4e7; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 10px; }
        .auth-btn-social:hover:not(:disabled) { background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.15); }
        .auth-btn-social:disabled { opacity: 0.5; cursor: not-allowed; }
        .auth-link { color: #3b82f6; text-decoration: none; background: none; border: none; padding: 0; font-size: inherit; cursor: pointer; font-weight: 500; transition: color 0.2s ease; }
        .auth-link:hover { color: #60a5fa; }
        .auth-divider { display: flex; align-items: center; text-align: center; margin: 24px 0; color: #71717a; font-size: 13px; }
        .auth-divider::before, .auth-divider::after { content: ''; flex: 1; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .auth-divider:not(:empty)::before { margin-right: 16px; }
        .auth-divider:not(:empty)::after { margin-left: 16px; }
        /* Variables for OtpInput */
        :root {
          --cv-bg-card: rgba(0,0,0,0.2);
          --cv-border: rgba(255,255,255,0.1);
          --cv-text: #fff;
          --cv-accent: #3b82f6;
        }
      `}</style>

      <div className="auth-container">
        {/* Logo */}
        <div style={{ marginBottom: 32, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={onBack}>
          <div style={{
            width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #d90007, #ff4d4d)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(217,0,7,0.3)'
          }}>
            <img src={BRAND.logoImage} alt="CloudVault" style={{ width: 32, height: 32 }} />
          </div>
        </div>

        <form className="auth-card" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <h1 className="auth-title">{stepTitles[step].title}</h1>
          <p className="auth-subtitle">
            {step === STEPS.LOGIN ? "Enter your credentials to access your vault" : 
             step === STEPS.REGISTER ? "Sign up to start securely storing your files" :
             "Follow the instructions to regain access"}
          </p>

          {error && (
            <div style={{ padding: '14px 16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, color: '#fca5a5', fontSize: 14, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <span>{error}</span>
            </div>
          )}

          {info && (
            <div style={{ padding: '14px 16px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, color: '#86efac', fontSize: 14, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>{info}</span>
            </div>
          )}

          {step === STEPS.LOGIN && (
            <>
              <div style={{ marginBottom: 20 }}>
                <label className="auth-label">Email Address</label>
                <input type="email" className="auth-input" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
              </div>
              <div style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <label className="auth-label" style={{ margin: 0 }}>Password</label>
                  <button type="button" onClick={() => goTo(STEPS.FORGOT)} className="auth-link" style={{ fontSize: 13 }}>Forgot password?</button>
                </div>
                <input type="password" className="auth-input" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
            </>
          )}

          {step === STEPS.REGISTER && (
            <>
              <div style={{ marginBottom: 20 }}>
                <label className="auth-label">Email Address</label>
                <input type="email" className="auth-input" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label className="auth-label">Password</label>
                <input type="password" className="auth-input" placeholder="Create a password" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div style={{ marginBottom: 8 }}>
                <label className="auth-label">Confirm Password</label>
                <input type="password" className="auth-input" placeholder="Confirm your password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              </div>
            </>
          )}

          {step === STEPS.FORGOT && (
            <div style={{ marginBottom: 8 }}>
              <label className="auth-label">Email Address</label>
              <input type="email" className="auth-input" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
            </div>
          )}

          {step === STEPS.VERIFY_OTP && (
            <div style={{ marginBottom: 8 }}>
              <label className="auth-label" style={{ textAlign: 'center', marginBottom: 16 }}>Verification Code</label>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <OtpInput value={otp} onChange={setOtp} />
              </div>
            </div>
          )}

          {step === STEPS.RESET_PASSWORD && (
            <>
              <div style={{ marginBottom: 20 }}>
                <label className="auth-label">New Password</label>
                <input type="password" className="auth-input" placeholder="New password" value={password} onChange={e => setPassword(e.target.value)} autoFocus />
              </div>
              <div style={{ marginBottom: 8 }}>
                <label className="auth-label">Confirm New Password</label>
                <input type="password" className="auth-input" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              </div>
            </>
          )}

          {/* Turnstile */}
          {turnstileEnabled && [STEPS.LOGIN, STEPS.REGISTER, STEPS.FORGOT].includes(step) && (
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
              <Turnstile
                key={turnstileKey}
                onVerified={(t) => { setTurnstileToken(t); setTurnstileVerified(true); }}
                onError={(message) => { setError(message || "Security check failed."); setTurnstileVerified(false); }}
                onExpire={() => { setTurnstileToken(null); setTurnstileVerified(false); }}
              />
            </div>
          )}

          <button type="submit" disabled={!canSubmit || loading} className="auth-btn-primary">
            {loading ? <Spinner /> : submitLabel}
          </button>

          {/* Social Logins */}
          {[STEPS.LOGIN, STEPS.REGISTER].includes(step) && (
            <>
              <div className="auth-divider">Or continue with</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <button type="button" onClick={() => handleOAuth('google')} disabled={loading || !firebaseReady} className="auth-btn-social">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Google
                </button>
                <button type="button" onClick={() => handleOAuth('github')} disabled={loading || !firebaseReady} className="auth-btn-social">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  GitHub
                </button>
              </div>
            </>
          )}
        </form>

        {/* Footer */}
        <div style={{ marginTop: 24, textAlign: 'center', fontSize: 14, color: '#a1a1aa' }}>
          {step === STEPS.LOGIN && (
            <>Don't have an account? <button type="button" onClick={() => goTo(STEPS.REGISTER)} className="auth-link">Sign up</button></>
          )}
          {step === STEPS.REGISTER && (
            <>Already have an account? <button type="button" onClick={() => goTo(STEPS.LOGIN)} className="auth-link">Log in</button></>
          )}
          {(step === STEPS.FORGOT || step === STEPS.VERIFY_OTP || step === STEPS.RESET_PASSWORD) && (
             <button type="button" onClick={() => goTo(STEPS.LOGIN)} className="auth-link">Back to log in</button>
          )}
        </div>
      </div>
    </div>
  );
}
