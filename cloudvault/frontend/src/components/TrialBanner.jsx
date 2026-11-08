import { useState } from "react";
import { fmt } from "../lib/fileTypes.js";
import { X } from "lucide-react";

export default function TrialBanner({ account, onUpgrade }) {
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem("cv_trial_banner_dismissed") !== "true";
  });

  if (!account?.onTrial || !isVisible) return null;

  const days = Math.max(0, account.trialDaysLeft ?? 0);
  const used = Number(account.storageUsed || 0);
  const quota = Number(account.storageQuota || 0);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("cv_trial_banner_dismissed", "true");
  };

  return (
    <div
      style={{
        background: "linear-gradient(90deg, rgba(59,130,246,.12), rgba(139,92,246,.12))",
        borderBottom: "1px solid var(--border)",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        flexWrap: "wrap",
        fontFamily: "var(--font)",
        fontSize: 13,
        position: "relative"
      }}
    >
      <span style={{ color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text)" }}>Pro trial</strong> — {days} {days === 1 ? "day" : "days"} left • {fmt(used)}{quota > 0 ? ` of ${fmt(quota)}` : ""} used
      </span>
      <button
        type="button"
        onClick={onUpgrade}
        style={{
          padding: "6px 16px",
          borderRadius: 8,
          border: "none",
          background: "var(--accent-blue, #3b82f6)",
          color: "#fff",
          fontWeight: 700,
          cursor: "pointer",
          fontSize: 12,
        }}
      >
        Upgrade
      </button>
      <button
        onClick={handleDismiss}
        style={{
          position: 'absolute',
          right: '16px',
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Dismiss"
      >
        <X size={16} />
      </button>
    </div>
  );
}
