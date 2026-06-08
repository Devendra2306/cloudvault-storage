import { PLANS, STORAGE_ADDONS } from "../lib/plans.js";

export default function BillingPage({ account, api, onBack, notify, onUpdated }) {
  const changePlan = async (planId) => {
    try {
      await api("/billing/plan", { method: "POST", body: JSON.stringify({ planId }) });
      notify(`Switched to ${planId}`, "success");
      onUpdated();
    } catch (e) {
      notify(e.message, "error");
    }
  };

  const buyStorage = async (addonId) => {
    try {
      await api("/billing/storage", { method: "POST", body: JSON.stringify({ addonId }) });
      notify("Storage add-on applied", "success");
      onUpdated();
    } catch (e) {
      notify(e.message, "error");
    }
  };

  return (
    <div style={{ maxWidth: 900 }}>
      <button type="button" onClick={onBack} style={backBtn}>← Back</button>
      <h1 style={title}>Billing & plans</h1>
      {account?.onTrial && (
        <p style={{ color: "var(--accent-amber)", marginBottom: 20, fontSize: 14 }}>
          Pro trial active — {account.trialDaysLeft} days remaining, then you move to Free unless you upgrade.
        </p>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 32 }}>
        {PLANS.map((p) => (
          <div
            key={p.id}
            style={{
              ...planCard,
              borderColor: account?.plan === p.id ? "var(--accent)" : "var(--border)",
            }}
          >
            <h3 style={{ margin: 0 }}>{p.name}</h3>
            <div style={{ fontSize: 28, fontWeight: 800, margin: "8px 0" }}>
              {p.price}
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-muted)" }}>{p.period}</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 13 }}>{p.storage}</p>
            <ul style={{ fontSize: 12, color: "var(--text-secondary)", paddingLeft: 18, margin: "12px 0" }}>
              {p.features.map((f) => (
                <li key={f} style={{ marginBottom: 4 }}>{f}</li>
              ))}
            </ul>
            <button
              type="button"
              disabled={account?.plan === p.id && !account?.onTrial}
              onClick={() => changePlan(p.id)}
              style={account?.plan === p.id ? secondaryBtn : primaryBtn}
            >
              {account?.plan === p.id && !account?.onTrial ? "Current" : "Select"}
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Add storage</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {STORAGE_ADDONS.map((a) => (
          <button key={a.id} type="button" onClick={() => buyStorage(a.id)} style={addonBtn}>
            {a.label} · {a.price}
          </button>
        ))}
      </div>
    </div>
  );
}

const backBtn = { background: "none", border: "none", color: "var(--accent-blue)", cursor: "pointer", fontWeight: 600, marginBottom: 12, fontFamily: "var(--font)" };
const title = { fontSize: 26, fontWeight: 800, marginBottom: 8 };
const planCard = { background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: 20 };
const primaryBtn = { width: "100%", marginTop: 8, padding: 10, borderRadius: 10, border: "none", background: "var(--accent)", color: "#fff", fontWeight: 700, cursor: "pointer" };
const secondaryBtn = { ...primaryBtn, background: "var(--bg-primary)", color: "var(--text-muted)", border: "1px solid var(--border)" };
const addonBtn = { padding: "12px 18px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text)", cursor: "pointer", fontWeight: 600, fontFamily: "var(--font)" };
