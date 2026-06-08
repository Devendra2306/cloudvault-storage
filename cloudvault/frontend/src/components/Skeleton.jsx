export function Skeleton({ width = "100%", height = 16, radius = 8, style = {} }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        background: "linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.2s infinite",
        ...style,
      }}
    />
  );
}

export function FileListSkeleton({ count = 6, grid = false }) {
  if (grid) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 12,
        }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }}>
            <Skeleton height={140} radius={0} />
            <div style={{ padding: 12 }}>
              <Skeleton height={12} width="80%" />
              <Skeleton height={10} width="50%" style={{ marginTop: 8 }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "14px 18px",
            background: "var(--bg-card)",
            borderRadius: 12,
            border: "1px solid var(--border)",
          }}
        >
          <Skeleton width={36} height={36} radius={8} />
          <div style={{ flex: 1 }}>
            <Skeleton height={14} width="40%" />
            <Skeleton height={10} width="25%" style={{ marginTop: 8 }} />
          </div>
        </div>
      ))}
    </div>
  );
}
