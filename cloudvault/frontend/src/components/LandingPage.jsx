import { useEffect, useState } from "react";
import { BRAND, API } from "../lib/constants.js";
import { fmt } from "../lib/fileTypes.js";
import { PLANS } from "../lib/plans.js";
import { GLOBAL_STYLES } from "../styles/globalStyles.js";

const FEATURES = [
  { title: "Effortless syncing", desc: "Drag, drop, and organize files from one calm workspace." },
  { title: "Private sharing", desc: "Send secure links with clear permissions and expiration controls." },
  { title: "Fast previews", desc: "Open images, documents, and downloads without breaking your flow." },
];

const NAV_ITEMS = ["Features", "How it works", "Pricing"];

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
    <div className="marketing-shell">
      <style>{GLOBAL_STYLES}</style>

      <header className="landing-header">
        <button type="button" className="brand-lockup" onClick={onGetStarted}>
          <span className="brand-mark">{BRAND.logo}</span>
          <span>{BRAND.name}</span>
        </button>
        <nav className="landing-links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="landing-nav">
          <button type="button" className="btn-ghost" onClick={onLogin}>Log in</button>
          <button type="button" className="btn-primary" onClick={onSignUp}>Get Started Free</button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-glow hero-glow-green" />
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-copy">
            <div className="eyebrow"><span /> Introducing {BRAND.name}</div>
            <h1>
              The intelligent home for your <span>digital life.</span>
            </h1>
            <p>
              Never lose a file again. Store, organize, and securely share your documents,
              photos, and projects from anywhere.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn-primary btn-hero-dark" onClick={onGetStarted}>
                Start for free
              </button>
              <button type="button" className="btn-secondary btn-hero-light" onClick={onLogin}>
                See how it works
              </button>
            </div>
            <div className="hero-note">No credit card required. 10GB free forever.</div>
          </div>

          <div className="dashboard-preview" aria-label="CloudVault preview">
            <div className="preview-panel">
              <aside className="preview-sidebar">
                <div className="preview-logo">
                  <span className="brand-mark small">{BRAND.logo}</span>
                  <strong>My Storage</strong>
                </div>
                {["Recent", "Starred", "Shared", "Trash"].map((item, index) => (
                  <div key={item} className={`preview-nav-item${index === 0 ? " active" : ""}`}>{item}</div>
                ))}
                <div className="preview-usage">
                  <div><span>Storage Usage</span><strong>4.5 GB / 10 GB</strong></div>
                  <div className="preview-bar"><span /></div>
                </div>
              </aside>
              <section className="preview-files">
                <div className="preview-topline">
                  <h3>Recent Files</h3>
                  <button type="button">Upload</button>
                </div>
                {[
                  ["Project Alpha", "1.2 GB - Last edited 2h ago"],
                  ["Q3 Financials.xlsx", "2.4 MB - Last edited 2h ago"],
                  ["Campaign Banner.png", "4.1 MB - Last edited 2h ago"],
                ].map(([name, meta]) => (
                  <div key={name} className="preview-file">
                    <div className="preview-file-icon" />
                    <div>
                      <h4>{name}</h4>
                      <p>{meta}</p>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </section>

        <section className="logo-strip">
          <p>Trusted by innovative teams worldwide</p>
          <div>
            {["Acme Corp", "GlobalTech", "NEXUS", "horizon", "Vertex"].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </section>

        <section id="features" className="content-section split-section">
          <div>
            <p className="section-kicker">Why CloudVault?</p>
            <h2>More than just storage. It is your central hub.</h2>
          </div>
          <p>
            In a world scattered with devices and apps, CloudVault brings everything together
            in a single, secure place for photos, documents, and creative projects.
          </p>
        </section>

        <section id="how-it-works" className="content-section feature-grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-dot" />
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </section>

        <section className="stats-band">
          <div className="stat-mini">
            <strong>{stats.filesStored.toLocaleString()}+</strong>
            <span>Files stored</span>
          </div>
          <div className="stat-mini">
            <strong>{fmt(stats.storageCapacity)}</strong>
            <span>Storage capacity</span>
          </div>
          <div className="stat-mini">
            <strong>{stats.activeUsers.toLocaleString()}+</strong>
            <span>Active users</span>
          </div>
        </section>

        <section id="pricing" className="content-section pricing-section">
          <div className="section-center">
            <p className="section-kicker">Pricing</p>
            <h2>Simple plans for clean storage.</h2>
          </div>
          <div className="pricing-grid">
            {PLANS.map((plan) => (
              <article key={plan.id} className={`plan-card${plan.highlight ? " highlight" : ""}`}>
                <h3>{plan.name}</h3>
                <div className="plan-price">{plan.price}<span>{plan.period}</span></div>
                <p>{plan.storage} storage</p>
                <button type="button" className={plan.highlight ? "btn-primary" : "btn-secondary"} onClick={onGetStarted}>
                  Choose {plan.name}
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
