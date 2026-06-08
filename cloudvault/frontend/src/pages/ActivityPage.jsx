import { useState, useEffect } from "react";
import { timeAgo } from "../lib/fileTypes.js";

export default function ActivityPage({ api, onBack }) {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    api("/account/activity").then((d) => setActivity(d.activity || [])).catch(() => {});
  }, [api]);

  return (
    <div style={{ maxWidth: 640 }}>
      <button type="button" onClick={onBack} style={backBtn}>← Back</button>
      <h1 style={title}>Activity</h1>
      {activity.length === 0 ? (
        <p style={{ color: "var(--text-muted)" }}>No recent activity.</p>
      ) : (
        activity.map((a) => (
          <div key={a.id} style={row}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{a.action.replace(/_/g, " ")}</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              {a.resourceName || a.resourceType} · {timeAgo(a.createdAt)}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

const backBtn = { background: "none", border: "none", color: "var(--accent-blue)", cursor: "pointer", fontWeight: 600, marginBottom: 12, fontFamily: "var(--font)" };
const title = { fontSize: 26, fontWeight: 800, marginBottom: 20 };
const row = { padding: "14px 0", borderBottom: "1px solid var(--border)" };
