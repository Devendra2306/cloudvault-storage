import React, { useState, useEffect } from 'react';
import { apiFetch } from '../lib/api';
import { timeAgo } from '../lib/fileTypes';

export default function CommentsPanel({ file, token }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const fetchComments = async () => {
    try {
      const res = await apiFetch(`/comments/${file.id}`, {}, token);
      setComments(res.data || []);
    } catch (err) {
      setError('Failed to load comments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [file.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setSubmitting(true);
    try {
      const res = await apiFetch(`/comments/${file.id}`, {
        method: 'POST',
        body: JSON.stringify({ content })
      }, token);
      
      setComments([res.data, ...comments]);
      setContent('');
    } catch (err) {
      setError('Failed to post comment');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (commentId) => {
    if (!window.confirm('Delete this comment?')) return;
    try {
      await apiFetch(`/comments/${commentId}`, { method: 'DELETE' }, token);
      setComments(comments.filter(c => c.id !== commentId));
    } catch (err) {
      alert('Failed to delete comment');
    }
  };

  const currentUserId = localStorage.getItem('cv_userId') || sessionStorage.getItem('cv_userId'); // We might need a better way to check ownership, but let's assume if it doesn't match it will just throw 403.

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: 320, borderLeft: '1px solid var(--border)', background: 'var(--bg-card)' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid var(--border)' }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Comments</h3>
      </div>
      
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
        {loading ? (
          <p style={{ color: 'var(--text-muted)' }}>Loading comments...</p>
        ) : comments.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: 20 }}>No comments yet. Be the first to start the discussion!</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {comments.map(comment => (
              <div key={comment.id} style={{ display: 'flex', gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 'bold' }}>
                  {comment.user?.fullName?.[0] || comment.user?.email?.[0]?.toUpperCase() || '?'}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontWeight: 600, fontSize: 13 }}>{comment.user?.fullName || comment.user?.email.split('@')[0]}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{timeAgo(comment.createdAt)}</span>
                  </div>
                  <p style={{ fontSize: 13, marginTop: 4, marginBottom: 4, lineHeight: 1.4, wordBreak: 'break-word' }}>
                    {comment.content}
                  </p>
                  <button 
                    onClick={() => handleDelete(comment.id)} 
                    style={{ background: 'none', border: 'none', color: 'var(--danger)', fontSize: 11, cursor: 'pointer', padding: 0, opacity: 0.7 }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ padding: '16px', borderTop: '1px solid var(--border)' }}>
        {error && <p style={{ color: 'var(--danger)', fontSize: 12, marginBottom: 8 }}>{error}</p>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add a comment..."
            style={{ width: '100%', minHeight: 80, padding: 12, borderRadius: 8, background: 'var(--bg-primary)', border: '1px solid var(--border)', color: 'var(--text)', resize: 'none', fontFamily: 'var(--font)' }}
          />
          <button type="submit" disabled={submitting || !content.trim()} className="btn-primary" style={{ padding: '8px 16px', alignSelf: 'flex-end', opacity: submitting || !content.trim() ? 0.5 : 1 }}>
            {submitting ? 'Posting...' : 'Post'}
          </button>
        </form>
      </div>
    </div>
  );
}
