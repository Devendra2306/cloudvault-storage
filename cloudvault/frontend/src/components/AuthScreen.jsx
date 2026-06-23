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

function SocialButton({ label, mark, onClick, disabled }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        width: "100%", padding: "12px 16px",
        background: hovered ? "var(--cv-surface-raised)" : "var(--cv-bg-card)",
        border: "1.5px solid var(--cv-border)",
        borderRadius: "var(--cv-radius-lg)", cursor: disabled ? "not-allowed" : "pointer",
        color: "var(--cv-text)", fontSize: 14, fontWeight: 600,
        transition: "all 0.15s ease", opacity: disabled ? 0.5 : 1,
      }}
    >
      <span style={{
        width: 24, height: 24, borderRadius: 6, background: "var(--cv-surface-raised)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 10, fontWeight: 900, color: "var(--cv-text-secondary)",
      }}>{mark}</span>
      Continue with {label}
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
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.06) 0%, transparent 50%), var(--bg-primary)",
      padding: "20px 16px",
      fontFamily: "var(--font)",
    }}>
      <style>{GLOBAL_STYLES}</style>
      <style>{`
        @keyframes cv-spin { to { transform: rotate(360deg); } }
        @keyframes cv-slide-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cv-fade { from { opacity: 0; } to { opacity: 1; } }
        .cv-auth-card { animation: cv-slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .cv-auth-step { animation: cv-fade 0.22s ease; }
      `}</style>

      <div className="cv-auth-card" style={{
        width: "100%", maxWidth: 440,
        background: "var(--bg-card)",
        borderRadius: 24, border: "1px solid var(--border)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Gradient header bar */}
        <div style={{
          height: 4, background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",
          position: "absolute", top: 0, left: 0, right: 0,
        }} />

        <div style={{ padding: "40px 36px 36px" }}>
          {/* Logo + Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, color: "#fff", boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
            }}>
              {BRAND.logo}
            </div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>
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
                onError={() => { setError("Security check failed. Please refresh."); setTurnstileVerified(false); }}
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
                ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                : "var(--surface-raised)",
              color: canSubmit ? "#fff" : "var(--text-muted)",
              border: "none", borderRadius: 14, fontSize: 15, fontWeight: 700,
              cursor: canSubmit ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              transition: "all 0.2s ease",
              boxShadow: canSubmit ? "0 4px 16px rgba(99,102,241,0.35)" : "none",
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
                  { id: "google", label: "Google", mark: "G" },
                  { id: "github", label: "GitHub", mark: "GH" },
                  { id: "microsoft", label: "Microsoft", mark: "MS" },
                ].map((p) => (
                  <SocialButton
                    key={p.id}
                    label={p.label}
                    mark={p.mark}
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
