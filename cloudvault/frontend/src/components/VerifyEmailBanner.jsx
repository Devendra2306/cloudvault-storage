import { useState, useEffect } from "react";
import { apiFetch } from "../lib/api.js";

export default function VerifyEmailBanner({ account, onOpenSettings }) {
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((c) => (c > 0 ? c - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  if (!account?.emailVerificationRequired || account?.isVerified === true) return null;

  const handleResend = async () => {
    if (resending || cooldown > 0) return;
    setResending(true);
    setStatusMessage("");
    try {
      const token = localStorage.getItem("cv_token") || sessionStorage.getItem("cv_token");
      await apiFetch("/auth/resend-verification", { method: "POST" }, token);
      setStatusMessage("Verification link sent!");
      setCooldown(60);
    } catch (e) {
      setStatusMessage(e.message || "Failed to resend");
    } finally {
      setResending(false);
    }
  };

  return (
    <div
      style={{
        background: "rgba(245, 158, 11, 0.12)",
        borderBottom: "1px solid rgba(245, 158, 11, 0.35)",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        flexWrap: "wrap",
        fontFamily: "var(--font)",
        fontSize: 13,
      }}
    >
      <span style={{ color: "var(--text)" }}>
        <strong style={{ color: "#f59e0b" }}>Email not verified</strong>
        {" — "}
        Uploads and sharing are limited until verified.
      </span>

      {statusMessage && (
        <span style={{ fontSize: 12, color: "#f59e0b", fontWeight: 600 }}>{statusMessage}</span>
      )}

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button
          type="button"
          onClick={handleResend}
          disabled={resending || cooldown > 0}
          style={{
            padding: "5px 12px",
            borderRadius: 8,
            border: "1px solid rgba(245, 158, 11, 0.4)",
            background: "rgba(245, 158, 11, 0.15)",
            color: "#f59e0b",
            fontWeight: 700,
            cursor: resending || cooldown > 0 ? "not-allowed" : "pointer",
            fontSize: 12,
            opacity: resending || cooldown > 0 ? 0.6 : 1,
          }}
        >
          {resending ? "Sending..." : cooldown > 0 ? `Resend (${cooldown}s)` : "Resend Link"}
        </button>

        <button
          type="button"
          onClick={onOpenSettings}
          style={{
            padding: "5px 14px",
            borderRadius: 8,
            border: "none",
            background: "#f59e0b",
            color: "#000",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 12,
          }}
        >
          Settings
        </button>
      </div>
    </div>
  );
}
