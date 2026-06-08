import { useState, useRef, useEffect } from "react";
import { timeAgo } from "../lib/fileTypes.js";

export default function NotificationBell({ notifications, unreadCount, onMarkAllRead }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          border: "1px solid var(--border)",
          background: "var(--bg-card)",
          cursor: "pointer",
          fontSize: 18,
          position: "relative",
        }}
        title="Notifications"
      >
        🔔
        {unreadCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: 4,
              right: 4,
              minWidth: 16,
              height: 16,
              borderRadius: 99,
              background: "var(--accent)",
              color: "#fff",
              fontSize: 10,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 4px",
            }}
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 8px)",
            width: 320,
            maxHeight: 400,
            overflow: "auto",
            background: "var(--bg-primary)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            boxShadow: "var(--shadow)",
            zIndex: 300,
          }}
        >
          <div
            style={{
              padding: "12px 14px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 14 }}>Notifications</span>
            {unreadCount > 0 && (
              <button type="button" onClick={onMarkAllRead} style={linkBtn}>
                Mark all read
              </button>
            )}
          </div>
          {notifications.length === 0 ? (
            <p style={{ padding: 24, textAlign: "center", color: "var(--text-muted)", fontSize: 13 }}>Nothing new</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                style={{
                  padding: "12px 14px",
                  borderBottom: "1px solid var(--border)",
                  background: n.read ? "transparent" : "rgba(240,22,58,.06)",
                }}
              >
                <div style={{ fontWeight: 600, fontSize: 13 }}>{n.title}</div>
                {n.body && <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{n.body}</div>}
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 6 }}>{timeAgo(n.createdAt)}</div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

const linkBtn = {
  background: "none",
  border: "none",
  color: "var(--accent-blue)",
  fontSize: 12,
  cursor: "pointer",
  fontWeight: 600,
};
