import { fmt } from "../lib/fileTypes.js";

export default function AdminPanel({ users, systemHealth, loading, onBack }) {
  return (
    <div>
      <button type="button" onClick={onBack} style={backBtn}>
        ← Back to My Cloud
      </button>
      <h2 style={{ fontWeight: 800, fontSize: 22, margin: "12px 0 8px" }}>Admin panel</h2>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>User management and system overview</p>

      {systemHealth && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 28 }}>
          <Stat label="Total users" value={systemHealth.totalUsers ?? "—"} />
          <Stat label="Active users" value={systemHealth.activeUsers ?? "—"} />
          <Stat label="Total files" value={systemHealth.totalFiles ?? "—"} />
          <Stat label="Storage used" value={systemHealth.totalStorageUsed != null ? fmt(systemHealth.totalStorageUsed) : "—"} />
          <Stat label="Uploads today" value={systemHealth.uploadsToday ?? "—"} />
        </div>
      )}

      <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Users</h3>
      {loading ? (
        <p style={{ color: "var(--text-muted)" }}>Loading…</p>
      ) : (
        <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: 12 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "var(--bg-card)", textAlign: "left" }}>
                <th style={th}>Email</th>
                <th style={th}>Name</th>
                <th style={th}>Role</th>
                <th style={th}>Storage</th>
                <th style={th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} style={{ borderTop: "1px solid var(--border)" }}>
                  <td style={td}>{u.email}</td>
                  <td style={td}>{u.fullName || "—"}</td>
                  <td style={td}>{u.role}</td>
                  <td style={td}>
                    {fmt(u.storageUsed)} / {fmt(u.storageQuota)}
                  </td>
                  <td style={td}>{u.isActive ? "Active" : "Inactive"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && (
            <p style={{ padding: 24, textAlign: "center", color: "var(--text-muted)" }}>No users found</p>
          )}
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 14 }}>
      <div style={{ fontWeight: 800, fontSize: 20 }}>{value}</div>
      <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

const th = { padding: "12px 14px", color: "var(--text-muted)", fontWeight: 600 };
const td = { padding: "12px 14px", color: "var(--text-secondary)" };
const backBtn = {
  background: "none",
  border: "none",
  color: "var(--accent-blue)",
  cursor: "pointer",
  fontWeight: 600,
  fontFamily: "var(--font)",
};
