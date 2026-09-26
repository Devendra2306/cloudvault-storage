import { useState } from "react";
import { fmt } from "../lib/fileTypes.js";
import { X } from "lucide-react";

export default function TrialBanner({ account, onUpgrade }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!account?.onTrial || !isVisible) return null;

  const days = account.trialDaysLeft ?? 0;

  return (
    <div
      style={{
        background: "linear-gradient(90deg, rgba(240,22,58,.12), rgba(64,144,255,.1))",
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
        <strong style={{ color: "var(--text)" }}>Pro trial</strong> — {days} day{days !== 1 ? "s" : ""} left • {fmt(account.storageUsed)} used
      </span>
      <button
        type="button"
        onClick={onUpgrade}
        style={{
          padding: "6px 16px",
          borderRadius: 8,
          border: "none",
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 700,
          cursor: "pointer",
          fontSize: 12,
        }}
      >
        Upgrade
      </button>
      <button
        onClick={() => setIsVisible(false)}
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
