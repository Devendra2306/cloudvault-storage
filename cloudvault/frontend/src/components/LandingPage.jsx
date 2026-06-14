import { useEffect, useState } from "react";
import { BRAND, API } from "../lib/constants.js";
import { fmt } from "../lib/fileTypes.js";
import { PLANS } from "../lib/plans.js";
import { GLOBAL_STYLES } from "../styles/globalStyles.js";

const FEATURES = [
  { icon: "☁", title: "AWS S3 powered", desc: "Enterprise-grade object storage with global durability." },
  { icon: "🔒", title: "Secure uploads", desc: "Encrypted transfers and private buckets by default." },
  { icon: "⚡", title: "Fast downloads", desc: "Optimized streaming with correct file headers." },
  { icon: "🔗", title: "File sharing", desc: "Share links with view or download permissions." },
  { icon: "📁", title: "Folder organization", desc: "Nested folders, search, and smart filters." },
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

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", fontFamily: "var(--font)", color: "var(--text)" }}>
      <style>{GLOBAL_STYLES}</style>

      <header className="landing-header">
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800, fontSize: 20 }}>
          <span
            style={{
              width: 40,
              height: 40,
              borderRadius: 999,
              background: "var(--gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(45,212,191,.22)",
            }}
          >
            {BRAND.logo}
          </span>
          {BRAND.name}
        </div>
        <nav className="landing-nav">
          <button type="button" className="btn-ghost" onClick={onLogin}>
            Login
          </button>
          <button type="button" className="btn-primary" onClick={onSignUp}>
            Sign Up
          </button>
        </nav>
      </header>

      <section
        className="hero-section"
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
            <button type="button" className="btn-primary" onClick={onGetStarted}>
              Get Started
            </button>
            <button type="button" className="btn-ghost" onClick={onLogin}>
              Log in
            </button>
          </div>
        </div>
        <div className="hero-visual">{BRAND.logo}</div>
      </section>

      <section className="section-pad" style={{ padding: "48px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Everything you need</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="feature-card"
              style={{ animation: `fadeIn .4s ease ${i * 0.06}s both` }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="section-pad"
        style={{
          padding: "48px 32px",
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="stats-row"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            textAlign: "center",
          }}
        >
          <div className="stat-mini">
            <div style={{ fontSize: 36, fontWeight: 900 }}>{stats.filesStored.toLocaleString()}+</div>
            <div style={{ color: "var(--text-muted)", marginTop: 6 }}>Files stored</div>
          </div>
          <div className="stat-mini">
            <div style={{ fontSize: 36, fontWeight: 900 }}>{fmt(stats.storageCapacity)}</div>
            <div style={{ color: "var(--text-muted)", marginTop: 6 }}>Storage capacity</div>
          </div>
          <div className="stat-mini">
            <div style={{ fontSize: 36, fontWeight: 900 }}>{stats.activeUsers.toLocaleString()}+</div>
            <div style={{ color: "var(--text-muted)", marginTop: 6 }}>Active users</div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ padding: "64px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Simple pricing</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card${plan.highlight ? " highlight" : ""}`}
            >
              <h3 style={{ fontSize: 20, fontWeight: 800 }}>{plan.name}</h3>
              <div style={{ fontSize: 32, fontWeight: 900, margin: "12px 0" }}>
                {plan.price}
                <span style={{ fontSize: 14, color: "var(--text-muted)", fontWeight: 500 }}>{plan.period}</span>
              </div>
              <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>{plan.storage} storage</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 8 }}>
                    ✓ {f}
                  </li>
                ))}
              </ul>
              <button type="button" className={plan.highlight ? "btn-primary" : "btn-ghost"} onClick={onGetStarted} style={{ width: "100%" }}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ padding: "48px 32px", maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Loved by teams</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.author} className="testimonial-card">
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
