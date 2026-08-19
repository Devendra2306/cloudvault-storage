import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Sparkles, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './CloudVaultAssistant.css';
import { apiFetch } from '../lib/api';

const SUGGESTIONS = [
  { label: '📊 Storage usage', msg: 'How much storage do I have?' },
  { label: '📤 Upload help', msg: 'How do I upload files?' },
  { label: '🔗 Share a file', msg: 'How do I share a file with someone?' },
  { label: '🖨️ Quick Print', msg: 'How does the Quick Print feature work?' },
  { label: '💳 Plans & pricing', msg: 'What plans are available?' },
  { label: '🛡️ Security', msg: 'How secure is my data?' },
];

export default function CloudVaultAssistant({ elevated = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! 👋 I\'m **CloudVault AI**. I can help you with storage, file sharing, uploads, and more.\n\nTry one of the suggestions below or ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Keyboard shortcut: Alt+C to toggle
  useEffect(() => {
    const handler = (e) => {
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const sendMessage = async (userMsg) => {
    if (!userMsg.trim() || isLoading) return;

    const trimmed = userMsg.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: trimmed }]);
    setIsLoading(true);

    try {
      const history = messages.slice(1); // skip initial greeting
      
      const response = await apiFetch('/chat/ask', {
        method: 'POST',
        body: JSON.stringify({ message: trimmed, history })
      });

      if (response && (response.reply || response.error)) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: response.reply || response.error || 'Sorry, something went wrong.'
        }]);
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I couldn\'t connect to the server. Please check your connection and try again. 🔄' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (msg) => {
    sendMessage(msg);
  };

  const clearChat = () => {
    setMessages([
      { role: 'assistant', content: 'Chat cleared! 🧹 How can I help you?' }
    ]);
  };

  const showSuggestions = messages.length <= 2 && !isLoading;

  return (
    <div className={`cva-widget-container${elevated ? ' cva-widget-container--elevated' : ''}`}>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="window"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="cva-window"
          >
            {/* Header */}
            <div className="cva-header">
              <div className="cva-header-info">
                <div className="cva-header-avatar">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="cva-header-title">CloudVault AI</h3>
                  <div className="cva-header-status">
                    <span></span> Online
                  </div>
                </div>
              </div>
              <div className="cva-header-actions">
                <button type="button" className="cva-icon-btn" onClick={clearChat} aria-label="Clear chat" title="Clear chat">
                  <Trash2 size={15} />
                </button>
                <button type="button" className="cva-icon-btn" onClick={() => setIsOpen(false)} aria-label="Close">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="cva-messages">
              {messages.map((msg, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index === messages.length - 1 ? 0.05 : 0 }}
                  key={index}
                  className={`cva-message-row ${msg.role}`}
                >
                  <div className="cva-message-avatar">
                    {msg.role === 'assistant' ? <Sparkles size={16} /> : <User size={16} />}
                  </div>
                  <div className="cva-message-bubble">
                    <ReactMarkdown
                      components={{
                        table: ({node, ...props}) => <table className="cva-table" {...props} />,
                        a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />,
                      }}
                    >{msg.content}</ReactMarkdown>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="cva-message-row assistant"
                >
                  <div className="cva-message-avatar">
                    <Sparkles size={16} />
                  </div>
                  <div className="cva-message-bubble">
                    <div className="cva-typing">
                      <div className="cva-dot"></div>
                      <div className="cva-dot"></div>
                      <div className="cva-dot"></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Chips */}
            {showSuggestions && (
              <div className="cva-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.msg}
                    type="button"
                    className="cva-chip"
                    onClick={() => handleSuggestion(s.msg)}
                    disabled={isLoading}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="cva-input-area">
              <form onSubmit={handleSubmit} className="cva-input-wrapper">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything…"
                  className="cva-input"
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  className="cva-send-btn"
                  disabled={!input.trim() || isLoading}
                >
                  <Send size={14} style={{ marginLeft: '1px' }} />
                </button>
              </form>
              <div className="cva-input-hint">Alt+C to toggle · Powered by AI</div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="toggle"
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={() => setIsOpen(true)}
            className="cva-toggle-btn"
            aria-label="Open CloudVault AI (Alt+C)"
            title="CloudVault AI (Alt+C)"
          >
            <Sparkles size={22} />
            <span className="cva-status-dot" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
