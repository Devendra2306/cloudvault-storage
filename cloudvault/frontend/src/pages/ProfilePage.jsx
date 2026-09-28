import { fmt } from "../lib/fileTypes.js";

export default function ProfilePage({ account, onBack }) {
  if (!account) return null;

  const joined = new Date(account.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const premiumCard = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(24px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: 16,
    padding: 32,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  };

  const premiumInput = {
    background: "rgba(0,0,0,0.2)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", animation: "fade-in 0.4s ease-out" }}>
      <button type="button" onClick={onBack} style={backBtn}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to Dashboard
      </button>
      
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 24, background: "linear-gradient(90deg, #fff, #a1a1aa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        User Profile
      </h1>

      <div style={premiumCard}>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: account.avatarUrl
                ? `url(${account.avatarUrl}) center/cover`
                : "linear-gradient(135deg, var(--accent), #f43f5e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              color: "#fff",
              fontWeight: 800,
              boxShadow: "0 0 0 4px rgba(255,255,255,0.05), 0 8px 24px rgba(0,0,0,0.4)"
            }}
          >
            {!account.avatarUrl && (account.fullName?.[0] || "?").toUpperCase()}
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ margin: 0, fontSize: 26, fontWeight: 700 }}>{account.fullName || "User"}</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 6, fontSize: 15 }}>{account.email}</p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)", padding: "4px 12px", borderRadius: 99, marginTop: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
              <span style={{ color: "#10b981", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {account.planDetails?.name || account.plan} Plan
                {account.onTrial && ` (Trial: ${account.trialDaysLeft}d)`}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...premiumCard, marginTop: 20, padding: "24px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#fff" }}>Storage & Account</h3>
          <button
            type="button"
            onClick={() => window.location.href = "/billing"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              borderRadius: 10,
              background: "linear-gradient(135deg, var(--accent), #f43f5e)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              border: "none",
              boxShadow: "0 4px 14px rgba(244, 63, 94, 0.3)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(244, 63, 94, 0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(244, 63, 94, 0.3)"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            Manage Billing
          </button>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Row label="Member Since" value={joined} />
          <Row label="Authentication" value={account.authProvider || "Email & Password"} />
          <Row label="Email Status" value={account.isVerified ? "Verified \u2714" : "Unverified \u26A0"} color={account.isVerified ? "#10b981" : "#f59e0b"} />
          
          <div style={{ marginTop: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Storage Capacity</span>
              <span style={{ fontWeight: 600, fontSize: 14, color: "#fff" }}>{fmt(account.storageUsed)} / {fmt(account.storageQuota)}</span>
            </div>
            <div style={{ width: "100%", height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 99, overflow: "hidden" }}>
              <div style={{ width: `${Math.min(100, (account.storageUsed / account.storageQuota) * 100)}%`, height: "100%", background: "linear-gradient(90deg, var(--accent), #f43f5e)", borderRadius: 99 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, color }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 15 }}>
      <span style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
      <span style={{ fontWeight: 500, color: color || "#fff" }}>{value}</span>
    </div>
  );
}

const backBtn = { display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontWeight: 600, marginBottom: 16, padding: 0, fontSize: 15, transition: "color 0.2s ease" };
