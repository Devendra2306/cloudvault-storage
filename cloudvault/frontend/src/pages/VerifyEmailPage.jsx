import { useEffect, useState } from "react";
import { API } from "../lib/constants.js";

export default function VerifyEmailPage({ token, onDone }) {
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("Verifying your email…");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Missing verification link. Open Settings to resend a new one.");
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API}/auth/verify-email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await res.json().catch(() => ({}));
        if (cancelled) return;
        if (res.ok) {
          setStatus("success");
          setMessage(data.message || "Email verified! You can upload files now.");
          window.history.replaceState({}, "", "/");
        } else {
          setStatus("error");
          setMessage(data.message || data.error || "Verification failed.");
        }
      } catch {
        if (!cancelled) {
          setStatus("error");
          setMessage("Could not reach the server. Try again in a moment.");
        }
      }
    })();

    return () => { cancelled = true; };
  }, [token]);

  const color = status === "success" ? "var(--accent)" : status === "error" ? "var(--danger)" : "var(--accent-blue)";

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "var(--bg-primary)", padding: 24, fontFamily: "var(--font)",
    }}>
      <div style={{
        maxWidth: 440, width: "100%", background: "var(--bg-card)", border: "1px solid var(--border)",
        borderRadius: 16, padding: 32, textAlign: "center", boxShadow: "var(--shadow)",
      }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>
          {status === "loading" ? "⏳" : status === "success" ? "✓" : "✕"}
        </div>
        <h1 style={{ fontSize: 22, marginBottom: 12, color: "var(--text)" }}>Email verification</h1>
        <p style={{ color, fontSize: 15, lineHeight: 1.5, marginBottom: 24 }}>{message}</p>
        {status !== "loading" && (
          <button
            type="button"
            onClick={() => (status === "success" ? window.location.assign("/") : onDone())}
            style={{
              padding: "10px 20px", borderRadius: 10, border: "none",
              background: "var(--accent)", color: "#fff", fontWeight: 700, cursor: "pointer",
            }}
          >
            {status === "success" ? "Continue to CloudVault" : "Back to app"}
          </button>
        )}
      </div>
    </div>
  );
}
