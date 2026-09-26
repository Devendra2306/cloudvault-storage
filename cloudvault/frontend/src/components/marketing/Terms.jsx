import React from 'react';

export default function Terms() {
  return (
    <div className="lr-section">
      <div className="lr-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', paddingTop: '100px', paddingBottom: '100px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Terms of Service</h1>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '48px' }}>Last Updated: September 2026</p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>1. Acceptance of Terms</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          By accessing or using CloudVault, you agree to these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>2. Your Account</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          Users are responsible for maintaining the security of their account credentials. You must notify us immediately of any breach of security or unauthorized use of your account.
        </p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>3. Acceptable Use</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '16px', color: 'var(--text-secondary)' }}>Users must not use CloudVault to:</p>
        <ul style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '32px', paddingLeft: '24px' }}>
          <li>Upload or share illegal content</li>
          <li>Distribute malware, viruses, or destructive code</li>
          <li>Attempt unauthorized access to other accounts or infrastructure</li>
          <li>Abuse, disrupt, or excessively burden the service</li>
          <li>Violate applicable laws or infringe on intellectual-property rights</li>
        </ul>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>4. User Content</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          Users retain full ownership and responsibility for the files and content they upload to CloudVault. We do not claim any ownership rights to your files.
        </p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>5. Account Suspension</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          CloudVault may restrict, suspend, or terminate accounts where required to protect the service, protect other users, or comply with applicable law, particularly in cases of Acceptable Use violations.
        </p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>6. Service Availability</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          While we strive for high uptime, service availability may occasionally be affected by scheduled maintenance, infrastructure problems, or circumstances outside our control. We do not guarantee uninterrupted service.
        </p>

        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text)' }}>7. Contact</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px', color: 'var(--text-secondary)' }}>
          If you have any questions regarding these Terms, please contact us at <a href="mailto:legal@cloudvault.co.in" style={{ color: 'var(--accent)' }}>legal@cloudvault.co.in</a>.
        </p>
      </div>
    </div>
  );
}
