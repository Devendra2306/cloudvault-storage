import { fmt } from "../lib/fileTypes.js";

export default function ProfilePage({ account, onBack }) {
  if (!account) return null;

  const joined = new Date(account.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={{ maxWidth: 640 }}>
      <button type="button" onClick={onBack} style={backBtn}>← Back</button>
      <h1 style={title}>My Profile</h1>

      <div style={card}>
        <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: account.avatarUrl
                ? `url(${account.avatarUrl}) center/cover`
                : "var(--gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              color: "#fff",
              fontWeight: 800,
            }}
          >
            {!account.avatarUrl && (account.fullName?.[0] || "?").toUpperCase()}
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: 22 }}>{account.fullName || "User"}</h2>
            <p style={{ color: "var(--text-muted)", marginTop: 6 }}>{account.email}</p>
            <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: 13, marginTop: 8 }}>
              {account.planDetails?.name || account.plan} plan
              {account.onTrial && ` · Trial (${account.trialDaysLeft}d left)`}
            </p>
          </div>
        </div>
      </div>

      <div style={{ ...card, marginTop: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>Storage Plan</h3>
          <button
            type="button"
            onClick={() => window.location.href = "/billing"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid var(--accent)",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "var(--font)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--accent-hover)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--accent)"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Upgrade Plan
          </button>
        </div>
        <Row label="Member since" value={joined} />
        <Row label="Sign-in method" value={account.authProvider || "email"} />
        <Row label="Email verified" value={account.isVerified ? "Yes" : "No"} />
        <Row label="Storage used" value={`${fmt(account.storageUsed)} / ${fmt(account.storageQuota)}`} />
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid var(--border)", fontSize: 14 }}>
      <span style={{ color: "var(--text-muted)" }}>{label}</span>
      <span style={{ fontWeight: 600, textTransform: "capitalize" }}>{value}</span>
    </div>
  );
}

const backBtn = { background: "none", border: "none", color: "var(--accent-blue)", cursor: "pointer", fontWeight: 600, marginBottom: 12, fontFamily: "var(--font)" };
const title = { fontSize: 26, fontWeight: 800, marginBottom: 20 };
const card = { background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: 24 };
