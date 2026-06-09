export default function VerifyEmailBanner({ account, onOpenSettings }) {
  if (!account?.emailVerificationRequired || account?.isVerified !== false) return null;

  return (
    <div
      style={{
        background: "rgba(240, 22, 58, 0.12)",
        borderBottom: "1px solid rgba(240, 22, 58, 0.35)",
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
        <strong style={{ color: "var(--danger)" }}>Email not verified</strong>
        {" — "}
        Uploads are disabled until you verify. Check your inbox or resend the link.
      </span>
      <button
        type="button"
        onClick={onOpenSettings}
        style={{
          padding: "6px 16px",
          borderRadius: 8,
          border: "none",
          background: "var(--danger)",
          color: "#fff",
          fontWeight: 700,
          cursor: "pointer",
          fontSize: 12,
        }}
      >
        Verify email
      </button>
    </div>
  );
}
