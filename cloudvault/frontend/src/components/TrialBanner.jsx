import { fmt } from "../lib/fileTypes.js";

export default function TrialBanner({ account, onUpgrade }) {
  if (!account?.onTrial) return null;

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
      }}
    >
      <span style={{ color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text)" }}>Pro trial</strong> — {days} day{days !== 1 ? "s" : ""} left · {fmt(account.storageUsed)} used
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
    </div>
  );
}
