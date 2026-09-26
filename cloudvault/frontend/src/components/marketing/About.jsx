import React from 'react';

export default function About() {
  return (
    <div className="lr-section">
      <div className="lr-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', paddingTop: '100px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>About CloudVault</h1>
        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '64px' }}>Cloud storage without the complexity.</p>
        
        <div style={{ textAlign: 'left', marginBottom: '64px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px', color: 'var(--text)' }}>
            CloudVault is built with a simple idea: storing and managing your files online should be easy, accessible, and secure.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px', color: 'var(--text)' }}>
            We are building CloudVault as a modern cloud-storage platform focused on providing users with a clean experience for uploading, organizing, accessing, and managing their digital files.
          </p>
        </div>

        <h2 style={{ fontSize: '32px', marginBottom: '24px', textAlign: 'left' }}>Our Mission</h2>
        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '40px', textAlign: 'left' }}>Make secure cloud storage simple for everyone.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', textAlign: 'left', marginBottom: '64px' }}>
          <div style={{ background: 'var(--surface)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '12px' }}>Simplicity</h3>
            <p style={{ color: 'var(--text-secondary)' }}>A clean interface without unnecessary complexity.</p>
          </div>
          <div style={{ background: 'var(--surface)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '12px' }}>Security</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Protecting accounts and stored files through modern security practices.</p>
          </div>
          <div style={{ background: 'var(--surface)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '12px' }}>Accessibility</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Making files available whenever and wherever users need them.</p>
          </div>
          <div style={{ background: 'var(--surface)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '12px' }}>Reliability</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Building dependable infrastructure for everyday file storage.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
