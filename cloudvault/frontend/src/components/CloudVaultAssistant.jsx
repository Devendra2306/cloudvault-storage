import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './CloudVaultAssistant.css';
import { apiFetch } from '../lib/api';

export default function CloudVaultAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! I am CloudVault AI. How can I assist you with your storage today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      // Create history array, excluding the very first greeting to save tokens/bandwidth
      const history = messages.slice(1);
      
      const response = await apiFetch('/chat/ask', {
        method: 'POST',
        body: JSON.stringify({ message: userMsg, history })
      });

      if (response && response.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: response.reply }]);
      } else {
        throw new Error("Invalid response format from server");
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error connecting to the server. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="cva-widget-container">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="cva-toggle-btn"
          >
            <Bot size={28} />
            <span className="cva-status-dot"></span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="cva-window"
          >
            {/* Header */}
            <div className="cva-header">
              <div className="cva-header-info">
                <div className="cva-header-avatar">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="cva-header-title">CloudVault AI</h3>
                  <div className="cva-header-status">
                    <span></span> Online
                  </div>
                </div>
              </div>
              <button className="cva-close-btn" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="cva-messages">
              {messages.map((msg, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index}
                  className={`cva-message-row ${msg.role}`}
                >
                  <div className="cva-message-avatar">
                    {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />}
                  </div>
                  <div className="cva-message-bubble">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="cva-message-row assistant"
                >
                  <div className="cva-message-avatar">
                    <Bot size={18} />
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

            {/* Input Area */}
            <div className="cva-input-area">
              <form onSubmit={handleSubmit} className="cva-input-wrapper">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about CloudVault..."
                  className="cva-input"
                  disabled={isLoading}
                  autoFocus
                />
                <button 
                  type="submit" 
                  className="cva-send-btn"
                  disabled={!input.trim() || isLoading}
                >
                  <Send size={14} style={{ marginLeft: '2px' }} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
