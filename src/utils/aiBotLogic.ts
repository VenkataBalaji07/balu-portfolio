// aiBotLogic.ts

type Intent = {
  keywords: string[];
  response: string;
};

// Strict knowledge base ensuring no hallucinations (Fallback for when API key is missing).
const intents: Intent[] = [
  {
    keywords: ["hi", "hello", "hey", "greetings"],
    response: "Hello there! I'm an AI assistant. How can I help you today?",
  },
  {
    keywords: ["who are you", "what are you", "bot", "copilot"],
    response: "I'm an AI assistant here to help you navigate this portfolio and answer any general technical questions you might have!",
  },
  {
    keywords: ["about", "background", "education", "who is balaji"],
    response: "Balaji is a passionate AI Engineer and Data Scientist who loves working with Machine Learning, NLP, and Generative AI. He holds a B.Tech in CSE (AI & ML) from 2024 and is currently doing some great work as a Junior Data Scientist at 1M1B. Would you like to hear more about his recent projects?",
  },
  {
    keywords: ["skills", "tech", "stack", "tools", "languages"],
    response: "Balaji is highly proficient in Python, Machine Learning (like Scikit-Learn and XGBoost), and Generative AI (including LLMs and Prompt Engineering). He's also experienced with Data Visualization tools like Tableau, and modern web frameworks like React and Next.js. Are you looking for a specific skill?",
  },
  {
    keywords: ["ai", "machine learning", "deep learning", "nlp", "llm", "generative ai", "prompt engineering", "ai agents", "chatbots", "product development"],
    response: "Balaji has deep expertise in AI, Machine Learning, and Generative AI. He truly excels at Prompt Engineering, building intelligent AI Agents, and developing end-to-end AI products like myself! Let me know if you'd like examples of his AI projects.",
  },
  {
    keywords: ["experience", "work", "job", "role"],
    response: "Currently, Balaji works at 1M1B as a Junior Data Scientist and AI Trainer, where he builds AI models and conducts training sessions. Before that, he gained valuable experience as a Web Developer Intern at Innomatics Research Labs.",
  },
  {
    keywords: ["projects", "portfolio"],
    response: "Balaji has built some fantastic projects, including a Bengaluru House Price Prediction model, an E-commerce Purchase Intention Model, a Language Learning Bot, and an AI News Summarizer. You can explore all of them in detail in the Projects section above!",
  },
  {
    keywords: ["github", "git", "source"],
    response: "I'd love to share that! You can check out all of Balaji's code repositories on his GitHub profile here: [GitHub](https://github.com/VenkataBalaji07)",
  },
  {
    keywords: ["linkedin", "connect"],
    response: "Balaji is always happy to connect with professionals. You can find him on LinkedIn here: [LinkedIn](https://www.linkedin.com/in/venkata-balaji-boppudi-632b5b248/)",
  },
  {
    keywords: ["resume", "cv", "download"],
    response: "Absolutely! You can view and download Balaji's latest verified resume right here: [Download Resume](https://drive.google.com/file/d/1OqDC4Skyt03NCrKlHsCQ0mrbgsqyUkzh/view?usp=sharing)",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire"],
    response: "You can reach out to Balaji via email at venkatabalaji00007@gmail.com, or give him a call at +91 6303612803. If you'd prefer, you can also just type 'book meeting' here and I'll help you schedule a time to chat!",
  },
  {
    keywords: ["certifications", "certificate", "certified"],
    response: "Balaji holds several certifications in Data Science and AI. For the most up-to-date and comprehensive list, I recommend checking out the certifications section of his LinkedIn profile.",
  },
  {
    keywords: ["schedule", "meeting", "calendar", "appointment", "book", "call", "meet"],
    response: "I'd be delighted to help you schedule a meeting with Balaji! Please type 'book meeting' to start the quick scheduling process.",
  }
];

export const getBotResponse = async (input: string, chatHistory: {sender: string, text: string}[] = []): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input,
        chatHistory
      })
    });

    if (!response.ok) {
      // If the backend fails, fallback to strict intents matching
      console.warn("Backend API call failed. Falling back to static intents.");
      return fallbackResponse(input);
    }

    const data = await response.json();
    
    if (data.reply) {
      return data.reply;
    }
    
    return "I encountered an unexpected response from the AI server. Please try again later.";
    
  } catch (error: any) {
    console.error("Error communicating with AI backend:", error);
    // Network error or backend down
    return fallbackResponse(input);
  }
};

const fallbackResponse = (input: string): string => {
  const normalizedInput = input.toLowerCase();
  
  // Strict matching
  for (const intent of intents) {
    if (intent.keywords.some((kw) => normalizedInput.includes(kw))) {
      return intent.response;
    }
  }

  // Strict fallback preventing hallucination
  return "I'm sorry, but that information is unavailable right now. Please check out my resume or GitHub for more details!";
};

// ==========================================
// MOCKED BACKEND SERVICES (Until API Keys are provided)
// ==========================================

export const saveConversation = async (question: string, response: string, visitorInfo?: { name: string, email: string }) => {
  // Mock saving to Firebase/Database
  const log = {
    visitorQuestion: question,
    aiResponse: response,
    timestamp: new Date().toISOString(),
    visitorName: visitorInfo?.name || "Anonymous",
    visitorEmail: visitorInfo?.email || "Unknown"
  };
  console.log("[DB MOCK] Conversation Saved:", log);
  return Promise.resolve(true);
};

export type CalendarAvailabilityResponse = {
  available: boolean;
  alternativeSlots?: string[];
};

export const checkCalendarAvailability = async (date: string, time: string): Promise<CalendarAvailabilityResponse> => {
  // Mock Google Calendar API Check
  console.log(`[CALENDAR MOCK] Checking availability for ${date} at ${time}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate that 2:00 PM / 14:00 is always booked, everything else is free
      if (time.includes("14:00") || time.includes("2:00") || time.includes("14:")) {
        resolve({ available: false, alternativeSlots: ["3:00 PM", "4:30 PM", "10:00 AM (Next Day)"] });
      } else {
        resolve({ available: true });
      }
    }, 800);
  });
};

export const bookMeeting = async (details: { name: string, email: string, company: string, purpose: string, date: string, time: string }) => {
  // Mock Google Calendar Event Creation & Emailing
  console.log("[CALENDAR MOCK] Creating meeting event...", details);
  console.log("[EMAIL MOCK] Sending confirmation email to visitor:", details.email);
  console.log("[EMAIL MOCK] Sending notification email to balaji...");
  
  return new Promise<{success: boolean, meetLink: string}>((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        meetLink: "https://meet.google.com/mock-link-xyz"
      });
    }, 1500);
  });
};
