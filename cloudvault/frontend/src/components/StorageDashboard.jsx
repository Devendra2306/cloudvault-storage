import { fmt } from "../lib/fileTypes.js";

export default function StorageDashboard({ stats, usage, onBack }) {
  const breakdown = usage?.breakdown || {};
  const totalBreakdown = Object.values(breakdown).reduce((a, b) => a + b, 0) || 1;
  const storagePercent = stats.storageQuota > 0
    ? Math.min(100, Math.round((stats.storageUsed / stats.storageQuota) * 100))
    : 0;

  const segments = [
    { key: "images", label: "Images", color: "#22c55e" },
    { key: "videos", label: "Videos", color: "#2563eb" },
    { key: "documents", label: "Documents", color: "#f59e0b" },
    { key: "audio", label: "Audio", color: "#a78bfa" },
    { key: "other", label: "Other", color: "#94a3b8" },
  ];

  return (
    <div style={{ animation: "fadeIn .3s ease" }}>
      <button type="button" onClick={onBack} className="page-back-btn">
        ← Back to My Drive
      </button>
      <h2 style={{ fontWeight: 900, fontSize: 26, margin: "12px 0 8px", color: "var(--text)" }}>Storage dashboard</h2>
      <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 28 }}>
        {storagePercent}% of your storage is in use
      </p>

      <div className="dashboard-stat-grid">
        <StatCard label="Total files" value={stats.totalFiles} />
        <StatCard label="Total folders" value={stats.totalFolders} />
        <StatCard label="Storage used" value={fmt(stats.storageUsed)} />
        <StatCard label="Storage remaining" value={fmt(Math.max(0, stats.storageQuota - stats.storageUsed))} />
      </div>

      <section className="glass-card" style={{ padding: 24, borderRadius: "var(--radius-lg)", marginBottom: 24 }}>
        <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 16, color: "var(--text)" }}>Storage breakdown</h3>
        <div style={{ height: 14, borderRadius: 99, overflow: "hidden", display: "flex", background: "var(--border)" }}>
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 16 }}>
          {segments.map((s) => (
            <span key={s.key} style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 99, background: s.color, flexShrink: 0 }} />
              {s.label}: {fmt(breakdown[s.key] || 0)}
            </span>
          ))}
        </div>
      </section>

      <section className="glass-card" style={{ padding: 24, borderRadius: "var(--radius-lg)" }}>
        <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 16, color: "var(--text)" }}>File type distribution</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {segments.map((s) => {
            const val = breakdown[s.key] || 0;
            const pct = Math.round((val / totalBreakdown) * 100);
            return (
              <div key={s.key}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>{s.label}</span>
                  <span style={{ color: "var(--text-muted)", fontWeight: 700 }}>{pct}%</span>
                </div>
                <div style={{ height: 8, background: "var(--border)", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: s.color, borderRadius: 99, transition: "width .4s ease" }} />
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
    <div className="dashboard-stat-card">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
}
