/**
 * Chat Controller
 * Handles AI chat messages (standard JSON response)
 */

exports.askChatbot = async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Since we don't have an LLM API key yet, we will return a mock response
    // To wire up OpenAI/Gemini, you would pass `message` and `history` to the respective API here
    
    // Simulate slight network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    const mockResponse = `Hello! I am your new CloudVault AI Assistant. I can see you said: *${message}*. \n\nCurrently, I am running in **Mock Mode** using standard JSON. Please add your API key to the backend to enable real AI responses! 🚀`;

    res.json({
      success: true,
      reply: mockResponse
    });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
