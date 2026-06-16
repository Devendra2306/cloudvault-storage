import { useEffect, useMemo, useState } from "react";
import { BRAND } from "../lib/constants.js";
import { apiFetch } from "../lib/api.js";
import { GLOBAL_STYLES } from "../styles/globalStyles.js";
import { getFirebaseProviderStatus, isFirebaseConfigured, logFirebaseDiagnostics, signInWithProvider } from "../firebase.js";
import Turnstile from "./Turnstile.jsx";

const SOCIAL_PROVIDERS = [
  { id: "google", label: "Google", mark: "G" },
  { id: "github", label: "GitHub", mark: "GH" },
  { id: "microsoft", label: "Microsoft", mark: "MS" },
];

const friendlyError = (message) => {
  if (!message) return "Something went wrong. Please try again.";
  const lower = message.toLowerCase();
  if (lower.includes("access token") || lower.includes("firebase") || lower.includes("oauth")) {
    return "Something went wrong. Please try again.";
  }
  if (lower.includes("failed to fetch") || lower.includes("cannot reach")) {
    return "We could not reach CloudVault. Please try again in a moment.";
  }
  return message;
};

function Spinner({ size = 22, color = "#1a1a1a" }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: "3px solid rgba(255,255,255,.15)",
        borderTopColor: color,
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
        display: "inline-block",
      }}
    />
  );
}

export default function AuthScreen({ onAuth, onBack, onNeedsVerification, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({ email: "", password: "", fullName: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [showForgot, setShowForgot] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [turnstileVerified, setTurnstileVerified] = useState(false);
  const [turnstileKey, setTurnstileKey] = useState(0);
  const firebaseReady = isFirebaseConfigured();
  const firebaseProviderStatus = useMemo(() => getFirebaseProviderStatus(), []);
  const turnstileEnabled = Boolean(import.meta.env.VITE_TURNSTILE_SITE_KEY);

  useEffect(() => {
    logFirebaseDiagnostics("AuthScreen");
  }, []);

  const submit = async () => {
    setError("");
    setInfo("");
    setLoading(true);
    try {
      if (turnstileEnabled && !turnstileVerified) {
        setError("Please complete the security verification");
        setLoading(false);
        return;
      }

      const body = {
        email: form.email,
        password: form.password,
        rememberMe: keepLoggedIn,
        ...(turnstileEnabled && { turnstileToken }),
      };

      if (mode === "login") {
        const data = await apiFetch("/auth/login", {
          method: "POST",
          body: JSON.stringify(body),
        });
        if (!data?.accessToken) throw new Error("Something went wrong. Please try again.");
        if (keepLoggedIn) {
          localStorage.setItem("cv_token", data.accessToken);
          if (data.refreshToken) localStorage.setItem("cv_refreshToken", data.refreshToken);
          localStorage.setItem("cv_user", data.user?.fullName || form.email);
        } else {
          sessionStorage.setItem("cv_token", data.accessToken);
          if (data.refreshToken) sessionStorage.setItem("cv_refreshToken", data.refreshToken);
          sessionStorage.setItem("cv_user", data.user?.fullName || form.email);
        }
        onAuth(data.accessToken, data.refreshToken, data.user?.fullName || form.email, data.user, keepLoggedIn);
      } else {
        body.fullName = form.fullName;
        const data = await apiFetch("/auth/register", {
          method: "POST",
          body: JSON.stringify(body),
        });
        setInfo("Account created. Check your email and open the verification link to activate your account.");
        onAuth?.(null, null, data.email || form.email, {
          email: data.email || form.email,
          fullName: data.fullName || form.fullName,
        });
      }
    } catch (e) {
      setError(friendlyError(e.message));
      if (turnstileEnabled) {
        setTurnstileToken(null);
        setTurnstileVerified(false);
        setTurnstileKey((key) => key + 1);
      }
    }
    setLoading(false);
  };

  const handleOAuth = async (providerId) => {
    setError("");
    setInfo("");
    if (!firebaseReady) {
      setError("Social login is not available right now. Please use email and password.");
      logFirebaseDiagnostics(`AuthScreen:${providerId}`);
      return;
    }
    setLoading(true);
    try {
      const data = await signInWithProvider(providerId);
      if (!data?.accessToken) throw new Error("Something went wrong. Please try again.");
      localStorage.setItem("cv_token", data.accessToken);
      if (data.refreshToken) localStorage.setItem("cv_refreshToken", data.refreshToken);
      localStorage.setItem("cv_user", data.user?.fullName || form.email);
      onAuth(data.accessToken, data.refreshToken, data.user?.fullName || form.email, data.user, true);
    } catch (e) {
      setError(friendlyError(e.message));
    }
    setLoading(false);
  };

  const authError = error?.includes("Please verify your email before logging in")
    ? "Please verify your email before logging in. Check your inbox for the verification link, then return to sign in."
    : error;
  const needsEmailVerification = error?.includes("Please verify your email before logging in");

  const resendVerification = async () => {
    if (!form.email) {
      setError("Enter your email address first");
      return;
    }
    setError("");
    setInfo("");
    setLoading(true);
    try {
      await apiFetch("/auth/resend-verification", {
        method: "POST",
        body: JSON.stringify({ email: form.email }),
      });
      setInfo("A new verification email has been sent. Open the link in your inbox to continue.");
      onNeedsVerification?.({ email: form.email, fullName: form.fullName });
    } catch (e) {
      setError(friendlyError(e.message));
    }
    setLoading(false);
  };

  const handleForgotPassword = async () => {
    if (!form.email) {
      setError("Enter your email address first");
      return;
    }
    setError("");
    setInfo("");
    setLoading(true);
    try {
      if (turnstileEnabled && !turnstileVerified) {
        setError("Please complete the security verification");
        setLoading(false);
        return;
      }

      const body = { email: form.email };
      if (turnstileEnabled) {
        body.turnstileToken = turnstileToken;
      }

      await apiFetch("/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify(body),
      });
      setInfo("If an account exists, a reset link has been sent.");
      setShowForgot(false);
    } catch (e) {
      setError(friendlyError(e.message));
      if (turnstileEnabled) {
        setTurnstileToken(null);
        setTurnstileVerified(false);
        setTurnstileKey((key) => key + 1);
      }
    }
    setLoading(false);
  };

  const inp = (name, label, placeholder, type = "text") => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: 13 }}>{label}</label>
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={form[name]}
        onChange={(e) => setForm((p) => ({ ...p, [name]: e.target.value }))}
        onKeyDown={(e) => e.key === "Enter" && !showForgot && submit()}
      />
    </div>
  );

  return (
    <div className="auth-screen">
      <style>{GLOBAL_STYLES}</style>
      <button
        type="button"
        className="page-back-btn"
        onClick={onBack}
        style={{ position: "fixed", left: 26, top: 16 }}
      >
        ← Back
      </button>
      <div className="auth-card">
        <div style={{ marginBottom: 22 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              marginBottom: 14,
              background: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
            }}
          >
            {BRAND.logo}
          </div>
          <h1 style={{ color: "var(--text)", fontSize: 26, fontWeight: 800 }}>
            {showForgot ? "Reset password" : mode === "login" ? `Log in to ${BRAND.name}` : `Create your account`}
          </h1>
        </div>

        {!showForgot && (
          <>
            <div
              style={{
                display: "flex",
                gap: 4,
                background: "#f3f4f6",
                borderRadius: 14,
                padding: 4,
                marginBottom: 20,
                border: "1px solid var(--border)",
              }}
            >
              {["login", "register"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`auth-tab${mode === m ? " active" : ""}`}
                >
                  {m === "login" ? "Sign In" : "Sign Up"}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {inp("email", "Email address", "Email address", "email")}
              {mode === "register" && inp("fullName", "Full name", "Full name")}
              {inp("password", "Password", "Password", "password")}
            </div>
            {mode === "login" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 14,
                }}
              >
                <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", fontSize: 12 }}>
                  <input type="checkbox" checked={keepLoggedIn} onChange={(e) => setKeepLoggedIn(e.target.checked)} />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgot(true)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--accent-blue)",
                    fontSize: 12,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Forgot password?
                </button>
              </div>
            )}
          </>
        )}

        {showForgot && (
          <div style={{ marginBottom: 16 }}>
            {inp("email", "Email address", "your@email.com", "email")}
            <p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 10 }}>
              We'll send a link to reset your password.
            </p>
          </div>
        )}

        {authError && (
          <div
            role="alert"
            style={{
              color: "var(--danger)",
              fontSize: 13,
              lineHeight: 1.45,
              marginTop: 14,
              padding: "10px 12px",
              border: "1px solid rgba(248,113,113,.24)",
              borderRadius: 12,
              background: "rgba(248,113,113,.08)",
            }}
          >
            {authError}
            {needsEmailVerification && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
                <button
                  type="button"
                  onClick={() => onNeedsVerification?.({ email: form.email, fullName: form.fullName })}
                  className="btn-secondary"
                  style={{ minHeight: 40, fontSize: 12 }}
                >
                  Verify email
                </button>
                <button
                  type="button"
                  onClick={resendVerification}
                  disabled={loading}
                  className="btn-secondary"
                  style={{ minHeight: 40, fontSize: 12 }}
                >
                  Resend email
                </button>
              </div>
            )}
          </div>
        )}
        {info && <div style={{ color: "var(--accent-blue)", fontSize: 13, marginTop: 14 }}>{info}</div>}

        {turnstileEnabled && (
          <div style={{ marginTop: 16 }}>
            <Turnstile
              key={turnstileKey}
              onVerified={(token) => {
                setTurnstileToken(token);
                setTurnstileVerified(true);
              }}
              onError={() => {
                setError("Security verification failed. Please try again.");
                setTurnstileVerified(false);
              }}
              onExpire={() => {
                setTurnstileToken(null);
                setTurnstileVerified(false);
              }}
            />
          </div>
        )}

        <button
          type="button"
          onClick={showForgot ? handleForgotPassword : submit}
          disabled={loading || (turnstileEnabled && !turnstileVerified)}
          className="btn-primary"
          style={{ width: "100%", marginTop: 20, opacity: loading || (turnstileEnabled && !turnstileVerified) ? 0.7 : 1, cursor: loading || (turnstileEnabled && !turnstileVerified) ? "not-allowed" : "pointer" }}
        >
          {loading ? (
            <Spinner />
          ) : showForgot ? (
            "Send reset link"
          ) : turnstileEnabled && !turnstileVerified ? (
            "Complete security verification first"
          ) : mode === "login" ? (
            "Log in"
          ) : (
            "Create account"
          )}
        </button>

        {showForgot ? (
          <button
            type="button"
            onClick={() => setShowForgot(false)}
            style={{
              width: "100%",
              marginTop: 12,
              background: "none",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
            }}
          >
            Back to login
          </button>
        ) : (
          <div style={{ marginTop: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ height: 1, flex: 1, background: "var(--border)" }} />
              <span style={{ color: "var(--text-muted)", fontSize: 12 }}>Or continue with</span>
              <div style={{ height: 1, flex: 1, background: "var(--border)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
              {SOCIAL_PROVIDERS.map((p) => {
                const status = firebaseProviderStatus.providers.find((provider) => provider.id === p.id);
                return (
                  <button
                    key={p.id}
                    type="button"
                    disabled={loading}
                    aria-disabled={!status?.configured}
                    onClick={() => handleOAuth(p.id)}
                    className="btn-secondary"
                    style={{
                      width: "100%",
                      minHeight: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 8,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#f3f4f6",
                        color: "#111827",
                        fontSize: 11,
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {p.mark}
                    </span>
                    Continue with {p.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
