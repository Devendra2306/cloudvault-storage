/**
 * AI Service — Google Gemini Integration
 * Provides CloudVault-aware AI assistant capabilities
 */
const { GoogleGenerativeAI } = require('@google/generative-ai');
const prisma = require('../config/database');

let genAI = null;
let model = null;

/**
 * Initialize Gemini (lazy, once)
 */
function getModel() {
  if (model) return model;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.7,
    },
  });
  return model;
}

/**
 * Build a system prompt with user context
 */
function buildSystemPrompt(userContext) {
  return `You are CloudVault AI — a helpful, concise assistant built into the CloudVault cloud storage platform.

## About CloudVault
- CloudVault is a secure cloud storage service (like Google Drive / Dropbox)
- Users can upload files, create folders, share files with links, use a "Quick Print" kiosk feature, manage trash, and view storage usage
- Plans: Free (5 GB), Pro (100 GB), Premium (1 TB), Team (2 TB)
- The domain is cloudvault.co.in
- Files are encrypted with AES-256 at rest and TLS 1.3 in transit

## Current User Context
- Name: ${userContext.name || 'Unknown'}
- Plan: ${userContext.plan || 'free'}
- Storage Used: ${userContext.storageUsed}
- Storage Quota: ${userContext.storageQuota}
- Total Files: ${userContext.fileCount}
- Total Folders: ${userContext.folderCount}
- Account Created: ${userContext.createdAt}

## Guidelines
- Be friendly, helpful, and concise (2-4 sentences max unless explaining something complex)
- Use markdown formatting for clarity (bold, bullet lists, code)
- When asked about storage, use the user context above
- When asked how to do something, give step-by-step instructions
- Never reveal internal system details, API keys, or database schemas
- If you don't know something CloudVault-specific, say so honestly
- You can help with: file management tips, storage questions, sharing help, account questions, general tech support
- Do NOT make up features that don't exist`;
}

/**
 * Fetch user context from the database
 */
async function getUserContext(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        fullName: true,
        plan: true,
        storageUsed: true,
        storageQuota: true,
        extraStorageBytes: true,
        createdAt: true,
        _count: { select: { files: true, folders: true } },
      },
    });

    if (!user) return { name: 'User', plan: 'free', storageUsed: '0 B', storageQuota: '5 GB', fileCount: 0, folderCount: 0, createdAt: 'Unknown' };

    const formatBytes = (bytes) => {
      const b = Number(bytes);
      if (b === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(b) / Math.log(k));
      return parseFloat((b / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    return {
      name: user.fullName || 'User',
      plan: user.plan,
      storageUsed: formatBytes(user.storageUsed),
      storageQuota: formatBytes(BigInt(user.storageQuota) + BigInt(user.extraStorageBytes)),
      fileCount: user._count.files,
      folderCount: user._count.folders,
      createdAt: user.createdAt.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }),
    };
  } catch (err) {
    console.warn('Failed to fetch user context for AI:', err.message);
    return { name: 'User', plan: 'free', storageUsed: '0 B', storageQuota: '5 GB', fileCount: 0, folderCount: 0, createdAt: 'Unknown' };
  }
}

/**
 * Get AI response from Gemini
 */
async function getAIResponse(message, history, userId) {
  const gemini = getModel();
  const userContext = await getUserContext(userId);

  // If no Gemini API key, use smart fallback
  if (!gemini) {
    return getSmartFallback(message, userContext);
  }

  try {
    // Convert our history format to Gemini format
    const geminiHistory = [];
    if (history && history.length > 0) {
      for (const msg of history) {
        geminiHistory.push({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }],
        });
      }
    }

    const chat = gemini.startChat({
      history: geminiHistory,
      systemInstruction: buildSystemPrompt(userContext),
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API error:', error.message);

    // Rate limit or quota exceeded — fall back gracefully
    if (error.status === 429 || error.message?.includes('quota')) {
      return "I'm getting a lot of questions right now! Please try again in a moment. 🙏";
    }

    return getSmartFallback(message, userContext);
  }
}

/**
 * Smart fallback when no API key or Gemini is down
 */
function getSmartFallback(message, ctx) {
  const msg = message.toLowerCase();

  // Storage questions
  if (msg.includes('storage') || msg.includes('space') || msg.includes('quota') || msg.includes('how much')) {
    return `📊 **Your Storage**\n- **Used:** ${ctx.storageUsed} of ${ctx.storageQuota}\n- **Plan:** ${ctx.plan.charAt(0).toUpperCase() + ctx.plan.slice(1)}\n- **Files:** ${ctx.fileCount} files in ${ctx.folderCount} folders\n\nNeed more space? Go to **Settings → Billing** to upgrade your plan!`;
  }

  // Upload questions
  if (msg.includes('upload') || msg.includes('add file')) {
    return "📤 **To upload files:**\n1. Click the **↑ Upload** button in your drive\n2. Select files from your computer\n3. They'll stream directly to encrypted cloud storage\n\n💡 **Tip:** You can also drag & drop files directly into your drive!";
  }

  // Share questions
  if (msg.includes('share') || msg.includes('link') || msg.includes('send file')) {
    return "🔗 **To share a file:**\n1. Right-click on any file → **Share**\n2. Choose **Anyone with the link** or specific users\n3. Set permissions (View / Download / Edit)\n4. Optionally add a **password** or **expiration date**\n\nThe share link works even for people without a CloudVault account!";
  }

  // Print feature
  if (msg.includes('print') || msg.includes('kiosk')) {
    return "🖨️ **Quick Print feature:**\n1. Select a file → click **Print Code**\n2. A temporary 4-digit code is generated\n3. Go to any print kiosk at `print.cloudvault.co.in`\n4. Enter the code to download and print\n\nCodes auto-expire after 24 hours for security.";
  }

  // Trash / delete
  if (msg.includes('trash') || msg.includes('delete') || msg.includes('recover') || msg.includes('restore')) {
    return "🗑️ **Trash & Recovery:**\n- Deleted files go to **Trash** first (not permanently deleted)\n- Go to **Trash** in the sidebar to restore or permanently delete\n- Permanently deleted files cannot be recovered\n- Emptying trash frees up your storage space";
  }

  // Plan / pricing
  if (msg.includes('plan') || msg.includes('price') || msg.includes('upgrade') || msg.includes('billing')) {
    return "💳 **CloudVault Plans:**\n| Plan | Storage | Price |\n|------|---------|-------|\n| Free | 5 GB | ₹0/mo |\n| Pro | 100 GB | ₹749/mo |\n| Premium | 1 TB | ₹1,599/mo |\n| Team | 2 TB | ₹3,999/mo |\n\nUpgrade from **Settings → Billing**. You're currently on the **" + ctx.plan + "** plan.";
  }

  // Security
  if (msg.includes('security') || msg.includes('encrypt') || msg.includes('safe') || msg.includes('protect')) {
    return "🛡️ **CloudVault Security:**\n- **AES-256** encryption at rest\n- **TLS 1.3** encryption in transit\n- **Password-protected** share links\n- **Activity audit logs** for all actions\n- **Rate limiting** against brute force\n- Two-factor authentication support\n\nYour data is private by default.";
  }

  // Greeting
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.match(/^(yo|sup|hola)/)) {
    return `👋 Hey ${ctx.name}! I'm CloudVault AI. I can help you with:\n\n- 📊 **Storage** — check usage, plan info\n- 📤 **Uploads** — how to upload files\n- 🔗 **Sharing** — create share links\n- 🖨️ **Print** — Quick Print kiosk\n- 🗑️ **Trash** — recover deleted files\n- 💳 **Billing** — plans & pricing\n\nWhat would you like to know?`;
  }

  // Help
  if (msg.includes('help') || msg.includes('what can you do') || msg.includes('feature')) {
    return `I can help you with:\n\n- 📊 **"How much storage do I have?"**\n- 📤 **"How do I upload files?"**\n- 🔗 **"How do I share a file?"**\n- 🖨️ **"How does Quick Print work?"**\n- 🗑️ **"How do I recover deleted files?"**\n- 💳 **"What plans are available?"**\n- 🛡️ **"How secure is my data?"**\n\nJust ask me anything about CloudVault!`;
  }

  // Default
  return `Thanks for your message, ${ctx.name}! I'm here to help with CloudVault — ask me about **storage, uploads, sharing, printing, security, or billing** and I'll guide you through it. 😊`;
}

module.exports = { getAIResponse, getUserContext };
