import { useEffect, useState } from "react";
import { BRAND, API } from "../lib/constants.js";
import { fmt } from "../lib/fileTypes.js";
import { PLANS } from "../lib/plans.js";
import { GLOBAL_STYLES } from "../styles/globalStyles.js";

const FEATURES = [
  {
    title: "Effortless syncing",
    desc: "Drag, drop, and organize files from one calm workspace that stays in sync everywhere.",
    icon: "☁",
  },
  {
    title: "Private sharing",
    desc: "Send secure links with clear permissions, passwords, and expiration controls.",
    icon: "🔒",
  },
  {
    title: "Fast previews",
    desc: "Open images, documents, and downloads without breaking your flow.",
    icon: "⚡",
  },
  {
    title: "Smart search",
    desc: "Find anything instantly with filters, tags, and full-text search across your drive.",
    icon: "🔍",
  },
  {
    title: "Version history",
    desc: "Track changes and restore previous versions when you need them.",
    icon: "📋",
  },
  {
    title: "Enterprise security",
    desc: "Encrypted storage, activity logs, and role-based access for teams.",
    icon: "🛡",
  },
];

const TESTIMONIALS = [
  {
    quote: "CloudVault replaced three tools for our team. Uploads are fast, sharing is simple, and the UI just feels right.",
    name: "Sarah Chen",
    role: "Product Designer, Acme Corp",
  },
  {
    quote: "We migrated 2TB of client assets in a weekend. The folder structure and permissions made onboarding painless.",
    name: "Marcus Webb",
    role: "Engineering Lead, GlobalTech",
  },
  {
    quote: "Finally a drive that looks premium and works on mobile. Our sales team shares proposals in seconds.",
    name: "Priya Sharma",
    role: "Operations, Nexus",
  },
];

const FAQS = [
  {
    q: "Is CloudVault free to use?",
    a: "Yes. Every account includes 10 GB of free storage with no credit card required. Upgrade anytime for more space and team features.",
  },
  {
    q: "How secure are my files?",
    a: "Files are encrypted in transit and at rest. Share links support passwords, view limits, and expiration dates for fine-grained control.",
  },
  {
    q: "Can I share files with people outside my team?",
    a: "Absolutely. Create public or protected links, or invite collaborators by email with view, download, or edit permissions.",
  },
  {
    q: "Does CloudVault work on mobile?",
    a: "Yes. CloudVault is fully responsive and works in any modern browser on phone, tablet, and desktop.",
  },
  {
    q: "Can I cancel or change my plan?",
    a: "Plans are flexible. Upgrade, downgrade, or cancel from your billing settings at any time.",
  },
];

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
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
    <div className="marketing-shell">
      <style>{GLOBAL_STYLES}</style>

      <header className="landing-header">
        <button type="button" className="brand-lockup" onClick={onGetStarted} aria-label={`${BRAND.name} home`}>
          <span className="brand-mark">{BRAND.logo}</span>
          <span>{BRAND.name}</span>
        </button>
        <nav className="landing-links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="landing-nav">
          <button type="button" className="btn-ghost" onClick={onLogin}>Log in</button>
          <button type="button" className="btn-primary" onClick={onSignUp}>Get Started Free</button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-glow hero-glow-green" aria-hidden="true" />
          <div className="hero-glow hero-glow-blue" aria-hidden="true" />
          <div className="hero-copy animate-fade-up">
            <div className="eyebrow"><span aria-hidden="true" /> Introducing {BRAND.name}</div>
            <h1>
              The intelligent home for your <span>digital life.</span>
            </h1>
            <p>
              Never lose a file again. Store, organize, and securely share your documents,
              photos, and projects from anywhere — on any device.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn-primary btn-hero-dark" onClick={onGetStarted}>
                Start for free
              </button>
              <button type="button" className="btn-secondary btn-hero-light" onClick={onLogin}>
                Sign in
              </button>
            </div>
            <div className="hero-note">No credit card required · 10 GB free forever</div>
          </div>

          <div className="dashboard-preview animate-fade-up delay-1" aria-label="CloudVault preview">
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
                  <button type="button" aria-hidden="true" tabIndex={-1}>Upload</button>
                </div>
                {[
                  ["Project Alpha", "1.2 GB · Last edited 2h ago"],
                  ["Q3 Financials.xlsx", "2.4 MB · Last edited 2h ago"],
                  ["Campaign Banner.png", "4.1 MB · Last edited 2h ago"],
                ].map(([name, meta]) => (
                  <div key={name} className="preview-file">
                    <div className="preview-file-icon" aria-hidden="true" />
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

        <section className="logo-strip" aria-label="Trusted by">
          <p>Trusted by innovative teams worldwide</p>
          <div>
            {["Acme Corp", "GlobalTech", "NEXUS", "Horizon", "Vertex"].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </section>

        <section id="features" className="content-section split-section">
          <div>
            <p className="section-kicker">Why CloudVault?</p>
            <h2>More than storage. Your central hub.</h2>
          </div>
          <p>
            In a world scattered with devices and apps, CloudVault brings everything together
            in a single, secure place for photos, documents, and creative projects.
          </p>
        </section>

        <section id="how-it-works" className="content-section feature-grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="feature-card animate-fade-up">
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </section>

        <section className="stats-band" aria-label="Platform statistics">
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
            <p className="section-subtitle">Start free. Scale when you need more.</p>
          </div>
          <div className="pricing-grid">
            {PLANS.map((plan) => (
              <article key={plan.id} className={`plan-card${plan.highlight ? " highlight" : ""}`}>
                {plan.highlight && <span className="plan-badge">Most popular</span>}
                <h3>{plan.name}</h3>
                <div className="plan-price">{plan.price}<span>{plan.period}</span></div>
                <p>{plan.storage} storage</p>
                <ul className="plan-features">
                  {(plan.features || []).slice(0, 4).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button type="button" className={plan.highlight ? "btn-primary" : "btn-secondary"} onClick={onGetStarted}>
                  Choose {plan.name}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section testimonials-section" aria-label="Customer testimonials">
          <div className="section-center">
            <p className="section-kicker">Testimonials</p>
            <h2>Loved by teams everywhere.</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="testimonial-card">
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="faq" className="content-section faq-section">
          <div className="section-center">
            <p className="section-kicker">FAQ</p>
            <h2>Questions? We have answers.</h2>
          </div>
          <div className="faq-list">
            {FAQS.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta-band">
          <h2>Ready to organize your digital life?</h2>
          <p>Join thousands of users who trust CloudVault with their most important files.</p>
          <div className="hero-actions">
            <button type="button" className="btn-primary btn-hero-dark" onClick={onGetStarted}>
              Get started free
            </button>
            <button type="button" className="btn-secondary btn-hero-light" onClick={onLogin}>
              Log in
            </button>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-mark">{BRAND.logo}</span>
            <strong>{BRAND.name}</strong>
            <p>Secure cloud storage for individuals and teams.</p>
          </div>
          <div className="footer-links">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">About</a>
            <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">Privacy</a>
            <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
