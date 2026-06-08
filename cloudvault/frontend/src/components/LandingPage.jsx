import { useEffect, useState } from "react";
import { BRAND, API } from "../lib/constants.js";
import { fmt } from "../lib/fileTypes.js";
import { GLOBAL_STYLES } from "../styles/globalStyles.js";

const FEATURES = [
  { icon: "☁", title: "AWS S3 powered", desc: "Enterprise-grade object storage with global durability." },
  { icon: "🔒", title: "Secure uploads", desc: "Encrypted transfers and private buckets by default." },
  { icon: "⚡", title: "Fast downloads", desc: "Optimized streaming with correct file headers." },
  { icon: "🔗", title: "File sharing", desc: "Share links with view or download permissions." },
  { icon: "📁", title: "Folder organization", desc: "Nested folders, search, and smart filters." },
];

const PLANS = [
  {
    name: "Free",
    price: "$0",
    storage: "5 GB",
    features: ["Standard uploads", "Basic sharing", "Web previews"],
  },
  {
    name: "Pro",
    price: "$9",
    storage: "100 GB",
    features: ["Faster uploads", "Version history", "30-day trial for new users"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$19",
    storage: "1 TB",
    features: ["Team sharing", "Advanced analytics", "Priority support"],
  },
  {
    name: "Team",
    price: "$49",
    storage: "2 TB",
    features: ["Shared workspaces", "Admin controls", "Multiple users"],
  },
];

const TESTIMONIALS = [
  { quote: "CloudVault replaced our scattered drives with one clean workspace.", author: "Alex M.", role: "Startup founder" },
  { quote: "Uploads are fast and previews just work — exactly what we needed.", author: "Priya S.", role: "Designer" },
  { quote: "The S3 backend gives us confidence our files are safe.", author: "Jordan K.", role: "Engineer" },
];

export default function LandingPage({ onGetStarted, onLogin, onSignUp }) {
  const [stats, setStats] = useState({
    filesStored: 0,
    activeUsers: 0,
    storageUsed: 0,
    storageCapacity: 10 * 1024 ** 4,
  });

  useEffect(() => {
    fetch(`${API}/public/stats`)
      .then((r) => r.json())
      .then((d) => {
        if (d.success && d.data) setStats(d.data);
      })
      .catch(() => {});
  }, []);

  const btnPrimary = {
    padding: "12px 28px",
    borderRadius: "var(--radius)",
    border: "none",
    background: "var(--gradient)",
    color: "#fff",
    cursor: "pointer",
    fontFamily: "var(--font)",
    fontWeight: 700,
    fontSize: 15,
    boxShadow: "0 8px 24px rgba(240,22,58,.3)",
  };

  const btnGhost = {
    ...btnPrimary,
    background: "transparent",
    border: "1.5px solid var(--border)",
    color: "var(--text)",
    boxShadow: "none",
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", fontFamily: "var(--font)", color: "var(--text)" }}>
      <style>{GLOBAL_STYLES}</style>

      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 32px",
          borderBottom: "1px solid var(--border)",
          position: "sticky",
          top: 0,
          background: "rgba(11,15,20,.9)",
          backdropFilter: "blur(12px)",
          zIndex: 50,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 20 }}>
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "var(--gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {BRAND.logo}
          </span>
          {BRAND.name}
        </div>
        <nav style={{ display: "flex", gap: 10 }}>
          <button type="button" style={btnGhost} onClick={onLogin}>
            Login
          </button>
          <button type="button" style={btnPrimary} onClick={onSignUp}>
            Sign Up
          </button>
        </nav>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 40,
          padding: "80px 32px",
          maxWidth: 1200,
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <div style={{ animation: "fadeIn .5s ease" }}>
          <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: 13, letterSpacing: 1.2, marginBottom: 12 }}>
            CLOUD STORAGE REIMAGINED
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            {BRAND.tagline}
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 17, lineHeight: 1.6, marginBottom: 28, maxWidth: 480 }}>
            Store, preview, and share files with a modern experience powered by AWS S3, Node.js, and Firebase Authentication.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="button" style={btnPrimary} onClick={onGetStarted}>
              Get Started
            </button>
            <button type="button" style={btnGhost} onClick={onLogin}>
              Log in
            </button>
          </div>
        </div>
        <div
          style={{
            height: 320,
            borderRadius: 24,
            background: "linear-gradient(145deg, rgba(240,22,58,.2), rgba(64,144,255,.15))",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 120,
            animation: "scaleIn .4s ease",
          }}
        >
          {BRAND.logo}
        </div>
      </section>

      <section style={{ padding: "48px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Everything you need</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 24,
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "48px 32px",
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 36, fontWeight: 900 }}>{stats.filesStored.toLocaleString()}+</div>
            <div style={{ color: "var(--text-muted)", marginTop: 6 }}>Files stored</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 900 }}>{fmt(stats.storageCapacity)}</div>
            <div style={{ color: "var(--text-muted)", marginTop: 6 }}>Storage capacity</div>
          </div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 900 }}>{stats.activeUsers.toLocaleString()}+</div>
            <div style={{ color: "var(--text-muted)", marginTop: 6 }}>Active users</div>
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Simple pricing</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlight ? "var(--bg-card)" : "transparent",
                border: `1.5px solid ${plan.highlight ? "var(--accent)" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                padding: 28,
                transform: plan.highlight ? "scale(1.02)" : "none",
              }}
            >
              <h3 style={{ fontSize: 20, fontWeight: 800 }}>{plan.name}</h3>
              <div style={{ fontSize: 32, fontWeight: 900, margin: "12px 0" }}>
                {plan.price}
                <span style={{ fontSize: 14, color: "var(--text-muted)", fontWeight: 500 }}>/mo</span>
              </div>
              <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>{plan.storage} storage</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 8 }}>
                    ✓ {f}
                  </li>
                ))}
              </ul>
              <button type="button" style={plan.highlight ? btnPrimary : btnGhost} onClick={onGetStarted}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "48px 32px", maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Loved by teams</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 24,
                margin: 0,
              }}
            >
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>"{t.quote}"</p>
              <footer style={{ fontWeight: 700 }}>{t.author}</footer>
              <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.role}</div>
            </blockquote>
          ))}
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "32px",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: 14,
        }}
      >
        <p>
          © {new Date().getFullYear()} {BRAND.name}. Built with React, Node.js, AWS S3, Prisma & Firebase.
        </p>
      </footer>
    </div>
  );
}
