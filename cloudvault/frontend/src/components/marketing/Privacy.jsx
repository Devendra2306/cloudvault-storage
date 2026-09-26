import React from 'react';

export default function Privacy() {
  return (
    <div className="lr-section">
      <div className="lr-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', paddingTop: '100px', paddingBottom: '100px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '48px' }}>Last Updated: September 2026</p>
        
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text)' }}>
          CloudVault respects your privacy and is committed to protecting the information associated with your account and use of our services.
        </p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>1. Information We Collect</h2>
        <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li>Account information (name, email)</li>
          <li>Authentication information (hashed passwords)</li>
          <li>Files uploaded by users (stored securely on AWS S3)</li>
          <li>Technical and Usage information (logs for security purposes)</li>
        </ul>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>2. How We Use Information</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '16px', color: 'var(--text-secondary)' }}>Information may be used to:</p>
        <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li>Provide CloudVault services and core storage functionality</li>
          <li>Authenticate users and maintain account security</li>
          <li>Improve the platform and provide support</li>
          <li>Detect abuse or unauthorized activity</li>
        </ul>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>3. File Privacy</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          Your uploaded files are strictly associated with your CloudVault account and are handled exclusively as part of providing the storage service. You retain full control over sharing permissions.
        </p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>4. Data Security</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          We implement modern security practices including AES-256 encryption at rest, TLS 1.3 encryption in transit, and short-lived signed URLs to ensure your files remain secure and inaccessible to unauthorized parties.
        </p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>5. Data Retention</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          When you delete a file, it is moved to your Trash. Once emptied from Trash, or upon account deletion, the file is permanently and irrecoverably removed from our storage systems.
        </p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>6. Contact</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@cloudvault.co.in" style={{ color: 'var(--accent)' }}>privacy@cloudvault.co.in</a>.
        </p>
      </div>
    </div>
  );
}
