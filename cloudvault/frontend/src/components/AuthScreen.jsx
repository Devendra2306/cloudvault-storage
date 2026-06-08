import { useState } from "react";
import { BRAND } from "../lib/constants.js";
import { apiFetch } from "../lib/api.js";
import { GLOBAL_STYLES } from "../styles/globalStyles.js";
import { isFirebaseConfigured, signInWithProvider, resetPassword } from "../firebase.js";

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

export default function AuthScreen({ onAuth, onBack, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({ email: "", password: "", fullName: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [showForgot, setShowForgot] = useState(false);
  const firebaseReady = isFirebaseConfigured();

  const submit = async () => {
    setError("");
    setInfo("");
    setLoading(true);
    try {
      let data;
      if (mode === "login") {
        data = await apiFetch("/auth/login", {
          method: "POST",
          body: JSON.stringify({ email: form.email, password: form.password }),
        });
      } else {
        data = await apiFetch("/auth/register", {
          method: "POST",
          body: JSON.stringify({
            email: form.email,
            password: form.password,
            fullName: form.fullName,
          }),
        });
      }
      if (!data?.accessToken) throw new Error("Login response did not include an access token");
      if (keepLoggedIn) {
        localStorage.setItem("cv_token", data.accessToken);
        if (data.refreshToken) localStorage.setItem("cv_refreshToken", data.refreshToken);
        localStorage.setItem("cv_user", data.user?.fullName || form.email);
      }
      onAuth(data.accessToken, data.refreshToken, data.user?.fullName || form.email, data.user);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  const handleOAuth = async (providerId) => {
    setError("");
    setInfo("");
    setLoading(true);
    try {
      const data = await signInWithProvider(providerId);
      if (!data?.accessToken) throw new Error("OAuth login failed");
      localStorage.setItem("cv_token", data.accessToken);
      if (data.refreshToken) localStorage.setItem("cv_refreshToken", data.refreshToken);
      localStorage.setItem("cv_user", data.user?.fullName || form.email);
      onAuth(data.accessToken, data.refreshToken, data.user?.fullName || form.email, data.user);
    } catch (e) {
      setError(e.message);
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
      if (firebaseReady) {
        await resetPassword(form.email);
        setInfo("Password reset email sent. Check your inbox.");
      } else {
        await apiFetch("/auth/forgot-password", {
          method: "POST",
          body: JSON.stringify({ email: form.email }),
        });
        setInfo("If an account exists, a reset link has been sent.");
      }
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
    setShowForgot(false);
  };

  const inp = (name, label, placeholder, type = "text") => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: 13 }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[name]}
        onChange={(e) => setForm((p) => ({ ...p, [name]: e.target.value }))}
        onKeyDown={(e) => e.key === "Enter" && !showForgot && submit()}
        style={{
          width: "100%",
          padding: "11px 14px",
          background: "#0f141c",
          border: "1.5px solid var(--border)",
          borderRadius: "var(--radius)",
          color: "var(--text)",
          fontFamily: "var(--font)",
          fontSize: 14,
        }}
      />
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(130deg, #191115 0%, #171d27 40%, #0f141d 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font)",
      }}
    >
      <style>{GLOBAL_STYLES}</style>
      <button
        type="button"
        onClick={onBack}
        style={{
          position: "fixed",
          left: 26,
          top: 16,
          background: "transparent",
          border: "none",
          color: "var(--text-secondary)",
          cursor: "pointer",
          fontFamily: "var(--font)",
          fontWeight: 600,
        }}
      >
        ← Back
      </button>
      <div
        style={{
          width: 400,
          maxWidth: "92vw",
          padding: "32px 28px",
          background: "#0d131b",
          border: "1px solid var(--border)",
          borderRadius: 18,
          boxShadow: "var(--shadow)",
          animation: "fadeIn .35s ease",
        }}
      >
        <div style={{ marginBottom: 22 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 999,
              marginBottom: 14,
              background: "var(--gradient)",
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
                background: "#151b24",
                borderRadius: "var(--radius)",
                padding: 4,
                marginBottom: 20,
              }}
            >
              {["login", "register"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    background: mode === m ? "rgba(240,22,58,.15)" : "transparent",
                    color: mode === m ? "#fff" : "var(--text-muted)",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
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

        {error && <div style={{ color: "var(--danger)", fontSize: 13, marginTop: 14 }}>{error}</div>}
        {info && <div style={{ color: "var(--accent-blue)", fontSize: 13, marginTop: 14 }}>{info}</div>}

        <button
          type="button"
          onClick={showForgot ? handleForgotPassword : submit}
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 20,
            borderRadius: "var(--radius)",
            border: "none",
            background: "#e8e8e8",
            color: "#1a1a1a",
            fontWeight: 700,
            fontSize: 15,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? (
            <Spinner />
          ) : showForgot ? (
            "Send reset link"
          ) : mode === "login" ? (
            "Log in"
          ) : (
            "Create account"
          )}
        </button>

        {firebaseReady && !showForgot && mode === "login" && (
          <div style={{ marginBottom: 20 }}>
            <button
              type="button"
              disabled={loading}
              onClick={() => handleOAuth("google")}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
                background: "#fff",
                color: "#1a1a1a",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                fontFamily: "var(--font)",
              }}
            >
              <span style={{ fontSize: 18 }}>G</span> Continue with Google
            </button>
            <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 12, margin: "14px 0" }}>or use email</p>
          </div>
        )}

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
          firebaseReady && (
            <div style={{ marginTop: 20 }}>
              <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 12, marginBottom: 12 }}>
                Or continue with
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { id: "google", label: "Google" },
                  { id: "github", label: "GitHub" },
                  { id: "microsoft", label: "Microsoft" },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    disabled={loading}
                    onClick={() => handleOAuth(p.id)}
                    style={{
                      padding: 10,
                      borderRadius: "var(--radius)",
                      border: "1px solid var(--border)",
                      background: "var(--bg-card)",
                      color: "var(--text)",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    Continue with {p.label}
                  </button>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
