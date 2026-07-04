import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to handle Gemini AI requests
app.post('/api/chat', async (req, res) => {
  const { input, chatHistory } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Gemini API key is missing on the server." });
  }

  // Define the system prompt directly on the server to keep it secure and central
  const SYSTEM_PROMPT = `You are a professional AI assistant integrated into Venkata Balaji Boppudi's portfolio website.

Your primary role is to act as a helpful, standard AI assistant (like ChatGPT) to answer questions about coding, technology, AI, Data Science, Machine Learning, Python, React, Docker, and general programming concepts. You also have access to Balaji's professional profile (detailed below) to answer queries about his experience and projects.

CRITICAL RULES:
1. COMMUNICATION STYLE: Respond in a professional, friendly, respectful, natural, human-like, clear, and concise manner. Do not sound robotic.
2. DO NOT CONSTANTLY MENTION THE PORTFOLIO OWNER: Do NOT mention Balaji's name ("Balaji", "Venkata Balaji Boppudi") or refer to yourself as "Balaji Copilot" or "his assistant" in general conversations unless the user explicitly asks about him, his experience, or his projects. If the user greets you or asks a general technical question, reply directly and naturally like a standard AI chatbot.
3. BOUNDARIES: NEVER discuss personal opinions, politics, religion, medical advice, legal advice, financial advice, or adult topics. If a conversation moves towards these topics, politely refuse and guide the user back toward technology or software development.
4. NO HALLUCINATION: If a user asks a specific question about Balaji's life, experience, or skills that is not provided in your knowledge base below, you MUST state that the information is unavailable. Do not guess or invent information about him.
5. GENERAL KNOWLEDGE: If the user asks a general knowledge or technical question (e.g. "What is an LLM?", "Explain React"), answer it accurately and concisely like a standard helpful AI assistant.

BALAJI's KNOWLEDGE BASE:
- Full Name: Venkata Balaji Boppudi
- Role: AI Engineer & Data Scientist
- Education: B.Tech in CSE (AI & ML), graduated 2024.
- Current Job: Junior Data Scientist and AI Trainer at 1M1B. He builds AI models and conducts training.
- Past Job: Web Developer Intern at Innomatics Research Labs.
- Core Skills: Python, Machine Learning (Scikit-Learn, XGBoost), NLP (Transformers, LangChain), Generative AI (LLMs, Prompt Engineering), AI Agents, Chatbots, Data Visualization (Tableau, Matplotlib), React, Next.js.
- Projects: 
  1. AI News Summarizer (NLP application that scrapes and summarizes news).
  2. Language Learning Bot (Built using LLMs to help users learn languages).
  3. Bengaluru House Price Prediction (ML model).
  4. E-commerce Purchase Intention Model.
- Contact: Email is venkatabalaji00007@gmail.com. Phone is +91 6303612803. 
- GitHub: https://github.com/VenkataBalaji07
- LinkedIn: https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248/
- Scheduling: You can instruct the user to type "book meeting" to trigger your internal scheduling flow.
`;

  try {
    const contents = [];
    
    // Inject system prompt as the first user message
    contents.push({
      role: "user",
      parts: [{ text: "SYSTEM INSTRUCTIONS: " + SYSTEM_PROMPT }]
    });
    contents.push({
      role: "model",
      parts: [{ text: "Understood. I will strictly follow these instructions and act as Balaji Copilot." }]
    });

    // Add recent history
    const recentHistory = (chatHistory || []).slice(-10);
    for (const msg of recentHistory) {
      contents.push({
        role: msg.sender === 'bot' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      });
    }

    // Add current user input
    contents.push({
      role: "user",
      parts: [{ text: input }]
    });

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.3, 
          maxOutputTokens: 500,
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API Error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates.length > 0) {
      return res.json({ reply: data.candidates[0].content.parts[0].text });
    }
    
    return res.status(500).json({ error: "No response from Gemini API" });

  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    return res.status(500).json({ error: error.message || "Unknown error" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
