import { useState, useEffect, useRef } from "react";
import { Bot, X, Send, Mic, MicOff, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getBotResponse, saveConversation, checkCalendarAvailability, bookMeeting } from "../utils/aiBotLogic";

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  isLink?: boolean;
};

// Extends Window to allow webkitSpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const SleekAiOrb = () => {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Outer breathing blue glow */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.4, 0.15] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#3B82F6] rounded-full blur-lg pointer-events-none"
      />
      {/* Secondary cyan rotating dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute inset-2 border border-dashed border-[#06B6D4]/40 rounded-full pointer-events-none"
      />
      {/* Inner green counter-rotating dotted ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute inset-3 border-2 border-dotted border-[#22C55E]/30 rounded-full pointer-events-none"
      />
      {/* Core Glowing Orb */}
      <motion.div
        animate={{ scale: [0.93, 1.07, 0.93] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-10 h-10 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] flex items-center justify-center relative border border-white/20 z-10 overflow-hidden bg-black"
      >
        <img src="/ailogo.avif" alt="AI" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

const FloatingChatWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedData = localStorage.getItem("balaji_copilot_messages");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Check if the saved messages are less than 5 minutes old
        if (parsed.timestamp && Date.now() - parsed.timestamp < 5 * 60 * 1000) {
          return parsed.messages;
        } else {
          localStorage.removeItem("balaji_copilot_messages");
        }
      } catch (e) {
        console.error("Failed to parse saved messages", e);
      }
    }
    return [
      {
        id: '1',
        text: "Hi! I'm an AI Assistant. How can I assist you today?",
        sender: 'bot'
      }
    ];
  });

  useEffect(() => {
    const dataToSave = {
      timestamp: Date.now(),
      messages: messages
    };
    localStorage.setItem("balaji_copilot_messages", JSON.stringify(dataToSave));
  }, [messages]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Voice Assistant State
  const [isListening, setIsListening] = useState(false);

  // Meeting Scheduler State
  const [meetingState, setMeetingState] = useState<'idle' | 'name' | 'email' | 'company' | 'purpose' | 'date' | 'time' | 'checking' | 'confirming'>('idle');
  const [meetingDetails, setMeetingDetails] = useState({ name: '', email: '', company: '', purpose: '', date: '', time: '' });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Speech to Text
  const toggleListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return; // The recognition.onend will handle stopping
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const processMeetingFlow = async (input: string) => {
    let nextPrompt = "";
    
    if (meetingState === 'name') {
      setMeetingDetails(prev => ({ ...prev, name: input }));
      setMeetingState('email');
      nextPrompt = "Nice to meet you! What is your email address?";
    } else if (meetingState === 'email') {
      setMeetingDetails(prev => ({ ...prev, email: input }));
      setMeetingState('company');
      nextPrompt = "Which company are you from? (Or type 'None')";
    } else if (meetingState === 'company') {
      setMeetingDetails(prev => ({ ...prev, company: input }));
      setMeetingState('purpose');
      nextPrompt = "What is the primary purpose of this meeting?";
    } else if (meetingState === 'purpose') {
      setMeetingDetails(prev => ({ ...prev, purpose: input }));
      setMeetingState('date');
      nextPrompt = "Great. What date works for you? (Format: YYYY-MM-DD)";
    } else if (meetingState === 'date') {
      setMeetingDetails(prev => ({ ...prev, date: input }));
      setMeetingState('time');
      nextPrompt = "And what time? (Format: HH:MM AM/PM)";
    } else if (meetingState === 'time') {
      const requestedTime = input;
      setMeetingDetails(prev => ({ ...prev, time: requestedTime }));
      setMeetingState('checking');
      nextPrompt = `Checking Balaji's calendar for ${meetingDetails.date} at ${requestedTime}...`;
    } else if (meetingState === 'confirming') {
      // User is picking an alternative slot
      setMeetingDetails(prev => ({ ...prev, time: input }));
      setMeetingState('checking');
      nextPrompt = `Checking Balaji's calendar for ${meetingDetails.date} at ${input}...`;
    }

    addBotMessage(nextPrompt);

    // If we just hit the 'checking' state, actually do the backend call
    if (meetingState === 'time' || meetingState === 'confirming') {
      setIsTyping(true);
      const timeToCheck = meetingState === 'time' ? input : input; // use the latest input
      
      const availability = await checkCalendarAvailability(meetingDetails.date, timeToCheck);
      setIsTyping(false);

      if (availability.available) {
        addBotMessage("Great! That slot is available. I am booking the meeting now...");
        setIsTyping(true);
        const bookingResult = await bookMeeting({ ...meetingDetails, time: timeToCheck });
        setIsTyping(false);
        if (bookingResult.success) {
           addBotMessage(`Meeting confirmed! I have emailed you the invitation. Here is the Google Meet link: [Join Meeting](${bookingResult.meetLink})`);
           setMeetingState('idle'); // Reset flow
        }
      } else {
        setMeetingState('confirming');
        const slotsStr = availability.alternativeSlots?.join(", ") || "Please suggest another time.";
        addBotMessage(`I'm sorry, Balaji is busy at that time. However, these slots are available: ${slotsStr}. Please type one of these times or a different time.`);
      }
    }
  };

  const addBotMessage = (text: string) => {
    const hasLink = text.includes("[") && text.includes("]");
    const botMessage: Message = {
      id: Date.now().toString() + Math.random().toString(),
      text,
      sender: 'bot',
      isLink: hasLink
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();

    const userMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    if (meetingState !== 'idle') {
      processMeetingFlow(userText);
      return;
    }

    if (userText.toLowerCase().includes("book meeting") || userText.toLowerCase().includes("schedule")) {
      setMeetingState('name');
      addBotMessage("I can help you schedule a meeting! What is your full name?");
      return;
    }

    setIsTyping(true);

    // Call the advanced AI logic
    try {
      const chatHistory = messages.map(m => ({ sender: m.sender, text: m.text }));
      const responseText = await getBotResponse(userText, chatHistory);
      
      addBotMessage(responseText);
      
      // Save conversation to DB Mock
      await saveConversation(userText, responseText);
    } catch (e) {
      console.error(e);
      addBotMessage("Sorry, I encountered an error connecting to my AI brain. Please try again.");
    } finally {
      setIsTyping(false);
    }
  };

  const renderMessageText = (message: Message) => {
    if (!message.isLink) return message.text;
    
    // Convert markdown link [Text](URL) to actual HTML
    const parts = message.text.split(/\[([^\]]+)\]\(([^)]+)\)/);
    if (parts.length === 3) {
      return (
        <>
          {parts[0]}
          <a href={parts[2]} target="_blank" rel="noopener noreferrer" className="text-[#06B6D4] hover:text-[#3B82F6] underline font-bold transition-colors break-words">
            {parts[1]}
          </a>
        </>
      );
    }
    return message.text;
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Greeting Bubble */}
      <AnimatePresence>
        {showGreeting && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-20 right-0 mb-2 mr-2"
          >
            <div className="bg-[#111827]/95 backdrop-blur-md text-[#F8FAFC] px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgba(59,130,246,0.25)] border border-[#334155] relative">
              <p className="text-sm whitespace-nowrap font-medium flex items-center gap-2">
                <Sparkles className="text-[#06B6D4] w-4 h-4" /> 
                Balaji Copilot is here!
              </p>
              <div className="absolute -bottom-1 right-6 w-3 h-3 bg-[#111827]/95 border-r border-b border-[#334155] transform rotate-45"></div>
              <button
                onClick={() => setShowGreeting(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-[#3B82F6] hover:bg-[#2563EB] rounded-full flex items-center justify-center text-white"
              >
                <X size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-24 right-0 flex flex-col"
          >
            {/* Glassmorphism Container */}
            <div className="bg-[#030712]/90 backdrop-blur-2xl border border-[#334155] rounded-[28px] shadow-[0_20px_60px_rgba(59,130,246,0.25)] w-[340px] sm:w-[380px] h-[540px] max-h-[75vh] flex flex-col overflow-hidden relative">
              
              {/* Header */}
              <div className="bg-[#111827] border-b border-[#334155] text-[#F8FAFC] p-5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center border border-[#334155] relative overflow-hidden">
                    <img src="/ailogo.avif" alt="AI" className="w-full h-full object-cover" />
                    <Sparkles size={12} className="absolute top-1 right-1 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-[16px] tracking-tight">Balaji Copilot</h3>
                    <p className="text-xs text-[#CBD5E1] flex items-center gap-1.5 font-medium mt-0.5">
                      <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                      Verified Assistant
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-gradient-to-b from-[#030712] to-[#111827] custom-scrollbar">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-3`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#111827] to-[#030712] border border-[#334155] flex items-center justify-center shrink-0 mt-1 shadow-sm">
                        <Bot size={14} className="text-[#F8FAFC]" />
                      </div>
                    )}
                    
                    <div 
                      className={`px-4 py-3 text-[14px] leading-relaxed max-w-[82%] shadow-sm ${
                        msg.sender === 'user' 
                          ? 'bg-[#3B82F6] text-white rounded-[20px] rounded-tr-sm' 
                          : 'bg-[#111827] border border-[#334155] text-[#F8FAFC] rounded-[20px] rounded-tl-sm'
                      }`}
                    >
                      {renderMessageText(msg)}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#111827] to-[#030712] border border-[#334155] flex items-center justify-center shrink-0 mt-1 shadow-sm">
                      <Bot size={14} className="text-[#F8FAFC]" />
                    </div>
                    <div className="px-4 py-4 bg-[#111827] border border-[#334155] shadow-sm rounded-[20px] rounded-tl-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#CBD5E1] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-[#CBD5E1] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-[#CBD5E1] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Disclaimer */}
              <div className="px-4 py-2 bg-[#111827]/90 border-t border-[#334155] text-[10px] text-center text-[#CBD5E1] leading-tight shrink-0">
                This AI Assistant provides information based only on Venkata Balaji Boppudi's verified portfolio and professional profile. It does not generate or assume information beyond its available knowledge.
              </div>

              {/* Input Area */}
              <form 
                onSubmit={handleSendMessage}
                className="p-4 bg-[#111827]/95 backdrop-blur-md border-t border-[#334155] flex items-center gap-2 shrink-0 relative"
              >
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isListening 
                      ? 'bg-red-950/40 border-red-500/60 text-red-400 animate-pulse' 
                      : 'bg-[#030712] border-[#334155]/60 text-[#CBD5E1] hover:bg-[#334155] hover:text-[#F8FAFC]'
                  }`}
                  title={isListening ? "Listening..." : "Speak"}
                >
                  {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                </button>
                
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={isListening ? "Listening..." : "Ask me anything..."}
                  className="flex-1 bg-[#030712] text-[#F8FAFC] border border-[#334155]/60 rounded-full px-4 py-3 text-[14px] focus:outline-none focus:border-[#3B82F6] transition-all font-medium placeholder:font-normal placeholder:text-[#CBD5E1]/50"
                />
                
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="w-11 h-11 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2563EB] shadow-[0_4px_12px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send size={18} className="ml-0.5" />
                </button>
              </form>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Button with Sleek AI Orb */}
      <div className="relative mt-4">
        {/* Pulsing Outer Glow */}
        <div className="absolute inset-0 bg-[#3B82F6]/20 rounded-full animate-ping opacity-75 z-0 pointer-events-none" style={{ animationDuration: '3s' }}></div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => {
            setIsExpanded(!isExpanded);
            setShowGreeting(false);
          }}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-[#030712] hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group relative z-50 border border-[#334155] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="z-10"
              >
                <X size={24} className="text-[#F8FAFC]" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center justify-center w-full h-full z-10"
              >
                <SleekAiOrb />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingChatWidget;
