"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Hello! I am Samia's AI Assistant. Ask me about her Software Development Internship at IGT Solutions (Fastbooking, Agoda), Java/Spring Boot stack, projects, or education!",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    const query = input.toLowerCase();
    setInput('');

    setTimeout(() => {
      let botResponse = "I can tell you about Samia's internship at IGT Solutions, her skills in Java, Spring Boot, MySQL, Swagger, Docker, or her projects like the Machine Events Backend and Task Manager!";

      if (query.includes('intern') || query.includes('experience') || query.includes('igt') || query.includes('fastbooking') || query.includes('agoda') || query.includes('company') || query.includes('work')) {
        botResponse = "Samia worked as a Software Development Intern at IGT Solutions Pvt. Ltd. (Fastbooking, Agoda branch) from June 2025 – Aug 2025. She built live production features using Java, PHP, MySQL, HTML, CSS, JavaScript, optimized MySQL queries, and collaborated across engineering teams.";
      } else if (query.includes('skill') || query.includes('tech') || query.includes('stack') || query.includes('language') || query.includes('swagger')) {
        botResponse = "Samia's technical skills include:\n• Languages & Frameworks: Java, Spring Boot, Hibernate, Maven, HTML, CSS, JavaScript, PHP\n• DevOps: GitHub Actions, Docker (CLI, Dockerfile, Compose)\n• API & Testing: Postman, Swagger (OpenAPI)\n• Databases: MySQL, MongoDB\n• OS: Linux/Unix, Windows";
      } else if (query.includes('project') || query.includes('machine') || query.includes('trello') || query.includes('task')) {
        botResponse = "Samia's key backend projects include:\n1. Machine Events Backend System (Spring Boot, JPA, H2, REST APIs — deduplication, thread-safe ingestion, defect metrics APIs)\n2. Task Manager System (Java, Spring Boot, Hibernate/JPA, Maven, MySQL — JWT role-based auth, project/task tracking).";
      } else if (query.includes('education') || query.includes('cgpa') || query.includes('college') || query.includes('university') || query.includes('gpa')) {
        botResponse = "Samia is pursuing her Bachelor of Technology in CSE at O.P Jindal University (2022–2026) with an 8.5 CGPA. She scored 91% in Class XII and 94% in Class X at Jawahar Navodaya Vidyalaya.";
      } else if (query.includes('certif') || query.includes('oracle') || query.includes('forage')) {
        botResponse = "Samia holds two official certifications:\n1. Oracle – Professional Developer 2025\n2. Forage – Back-End Engineering Program";
      } else if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('reach') || query.includes('hire')) {
        botResponse = "You can contact Samia directly via:\n• Email: samia.saba0422@gmail.com\n• Phone: +91 9113449653\n• LinkedIn & GitHub profiles!";
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'bot', text: botResponse },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        suppressHydrationWarning
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#ccff00] text-black shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2 font-mono font-bold text-xs uppercase"
        data-cursor="AI BOT"
      >
        {isOpen ? <X size={20} /> : <Bot size={20} />}
        {!isOpen && <span>AI ASSISTANT</span>}
      </button>

      {/* Chat Drawer Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] glass-panel rounded-2xl border border-white/10 shadow-2xl flex flex-col h-[500px] overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between font-mono text-xs text-[#ccff00]">
            <div className="flex items-center gap-2">
              <Sparkles size={16} />
              <span className="font-bold">SAMIA'S AI ASSISTANT</span>
            </div>
            <button onClick={() => setIsOpen(false)} suppressHydrationWarning className="text-[#888890] hover:text-white">
              <X size={16} />
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-[#ccff00]/20 text-[#ccff00] flex items-center justify-center shrink-0">
                    <Bot size={12} />
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl max-w-[80%] whitespace-pre-line leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#ccff00] text-black font-semibold'
                      : 'bg-white/5 border border-white/10 text-[#f4f4f5]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} suppressHydrationWarning className="p-3 border-t border-white/10 flex items-center gap-2 bg-black/40">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about internship, skills, projects..."
              suppressHydrationWarning
              className="flex-1 bg-transparent font-mono text-xs text-[#f4f4f5] focus:outline-none px-2"
            />
            <button type="submit" suppressHydrationWarning className="p-2 rounded-lg bg-[#ccff00] text-black hover:bg-white transition-colors">
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
