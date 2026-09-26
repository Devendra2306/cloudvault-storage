import React from 'react';

export default function Security() {
  return (
    <div className="lr-section">
      <div className="lr-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', paddingTop: '100px', paddingBottom: '100px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>CloudVault Security</h1>
        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '48px' }}>Security is an important part of how we build CloudVault.</p>
        
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '48px', color: 'var(--text)' }}>
          We believe in transparency regarding how we secure your data. Below is an overview of the security architecture and mechanisms we have implemented to keep your digital workspace safe.
        </p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>Authentication & Access Control</h2>
        <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li><strong>Strong Password Hashing:</strong> Passwords are never stored in plaintext. We use bcrypt hashing with dynamic salts to secure credentials.</li>
          <li><strong>Secure Session Tokens:</strong> Authentication relies on securely signed JSON Web Tokens (JWT) that expire and require active validation.</li>
          <li><strong>Rate Limiting:</strong> Endpoints are protected by strict rate limiting to prevent brute-force login attempts and DDoS attacks.</li>
          <li><strong>File-level Access Controls:</strong> Only the owner of a file or users explicitly granted permission via sharing links can access a file.</li>
        </ul>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>Cloud Storage Architecture</h2>
        <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li><strong>Data Encryption in Transit:</strong> All communication between your browser and CloudVault servers occurs over HTTPS using TLS 1.3, ensuring your files cannot be intercepted while uploading or downloading.</li>
          <li><strong>Data Encryption at Rest:</strong> Files stored on our backend infrastructure are encrypted at rest using industry-standard AES-256 encryption.</li>
          <li><strong>Pre-Signed URLs:</strong> File downloads and previews are served via short-lived, pre-signed cryptographic URLs that expire automatically, preventing unauthorized hotlinking or unauthorized sharing.</li>
        </ul>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>Infrastructure Security</h2>
        <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li><strong>Isolated Environments:</strong> Our production systems are isolated and require strict cryptographic key access.</li>
          <li><strong>Automated Backups:</strong> Database and infrastructure states are backed up securely to prevent data loss in the event of hardware failure.</li>
          <li><strong>Content Security Policy (CSP):</strong> We utilize modern browser security headers (Helmet) to mitigate XSS (Cross-Site Scripting) and other injection attacks.</li>
        </ul>
        
        <div style={{ padding: '24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', marginTop: '48px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Vulnerability Disclosure</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
            If you are a security researcher and believe you have found a vulnerability in CloudVault, please contact us immediately at <a href="mailto:security@cloudvault.co.in" style={{ color: 'var(--accent)' }}>security@cloudvault.co.in</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
