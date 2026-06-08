import { fmt } from "../lib/fileTypes.js";

export default function StorageDashboard({ stats, usage, onBack }) {
  const breakdown = usage?.breakdown || {};
  const totalBreakdown = Object.values(breakdown).reduce((a, b) => a + b, 0) || 1;

  const segments = [
    { key: "images", label: "Images", color: "#f0163a" },
    { key: "videos", label: "Videos", color: "#4090ff" },
    { key: "documents", label: "Documents", color: "#f6b347" },
    { key: "audio", label: "Audio", color: "#22c55e" },
    { key: "other", label: "Other", color: "#94a3b8" },
  ];

  return (
    <div>
      <button type="button" onClick={onBack} style={backBtn}>
        ← Back to My Cloud
      </button>
      <h2 style={{ fontWeight: 800, fontSize: 22, margin: "12px 0 24px" }}>Storage dashboard</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 28 }}>
        <StatCard label="Total files" value={stats.totalFiles} />
        <StatCard label="Total folders" value={stats.totalFolders} />
        <StatCard label="Storage used" value={fmt(stats.storageUsed)} />
        <StatCard label="Storage remaining" value={fmt(Math.max(0, stats.storageQuota - stats.storageUsed))} />
      </div>

      <section style={{ marginBottom: 28 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Storage usage</h3>
        <div style={{ height: 12, borderRadius: 99, overflow: "hidden", display: "flex", background: "var(--border)" }}>
          {segments.map((s) => {
            const pct = ((breakdown[s.key] || 0) / totalBreakdown) * 100;
            if (pct < 0.5) return null;
            return (
              <div
                key={s.key}
                title={`${s.label}: ${fmt(breakdown[s.key] || 0)}`}
                style={{ width: `${pct}%`, background: s.color, transition: "width .4s ease" }}
              />
            );
          })}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 12 }}>
          {segments.map((s) => (
            <span key={s.key} style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: s.color }} />
              {s.label}: {fmt(breakdown[s.key] || 0)}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>File type distribution</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {segments.map((s) => {
            const val = breakdown[s.key] || 0;
            const pct = Math.round((val / totalBreakdown) * 100);
            return (
              <div key={s.key}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                  <span>{s.label}</span>
                  <span style={{ color: "var(--text-muted)" }}>{pct}%</span>
                </div>
                <div style={{ height: 6, background: "var(--border)", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: s.color, borderRadius: 99 }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 16 }}>
      <div style={{ fontSize: 22, fontWeight: 800 }}>{value}</div>
      <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

const backBtn = {
  background: "none",
  border: "none",
  color: "var(--accent-blue)",
  cursor: "pointer",
  fontWeight: 600,
  fontFamily: "var(--font)",
};
