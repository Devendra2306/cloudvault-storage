import React from 'react';

export default function Contact() {
  return (
    <div className="lr-section">
      <div className="lr-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', paddingTop: '100px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>Contact CloudVault</h1>
        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '64px' }}>
          Have a question, need help, or want to get in touch with the CloudVault team?
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', textAlign: 'left', marginBottom: '64px' }}>
          <div>
            <h3 style={{ color: 'var(--text)', marginBottom: '16px' }}>General Enquiries</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Email: <a href="mailto:contact@cloudvault.co.in" style={{ color: 'var(--accent)' }}>contact@cloudvault.co.in</a></p>
            
            <h3 style={{ color: 'var(--text)', marginBottom: '16px' }}>Support</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Email: <a href="mailto:support@cloudvault.co.in" style={{ color: 'var(--accent)' }}>support@cloudvault.co.in</a></p>
            
            <h3 style={{ color: 'var(--text)', marginBottom: '16px' }}>Business Enquiries</h3>
            <p style={{ color: 'var(--text-secondary)' }}>For partnerships, business opportunities, or enterprise enquiries:</p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}><a href="mailto:business@cloudvault.co.in" style={{ color: 'var(--accent)' }}>business@cloudvault.co.in</a></p>
          </div>
          
          <div style={{ background: 'var(--surface)', padding: '32px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>Name</label>
                <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>Subject</label>
                <input type="text" placeholder="What can we help you with?" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>Message</label>
                <textarea placeholder="Write your message..." rows={4} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text)', resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="lr-btn lr-btn--mega-red" style={{ marginTop: '8px', padding: '12px 24px', borderRadius: '8px', fontWeight: '600' }}>
                Send Message
              </button>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '16px' }}>
                We usually respond as soon as possible during our support hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
