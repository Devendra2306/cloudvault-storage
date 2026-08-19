/**
 * Chat Controller
 * Handles AI chat messages powered by Gemini or smart fallback
 */
const { getAIResponse } = require('../services/aiService');

exports.askChatbot = async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: "Message is required" });
    }

    // Trim and limit message length
    const trimmed = message.trim().slice(0, 2000);
    if (!trimmed) {
      return res.status(400).json({ error: "Message cannot be empty" });
    }

    // Limit history to last 20 messages to save tokens
    const recentHistory = Array.isArray(history) ? history.slice(-20) : [];

    const reply = await getAIResponse(trimmed, recentHistory, req.user.id);

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("Chat error:", error.message);
    res.status(500).json({ 
      success: false,
      error: "Something went wrong. Please try again.",
      reply: "Sorry, I encountered an issue. Please try again in a moment! 🔄"
    });
  }
};
