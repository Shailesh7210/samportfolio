"use client";

import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-[#ccff00] uppercase tracking-widest block mb-1">
            05 // GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f4f5]">
            START A CONVERSATION<span className="text-[#ccff00]">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-mono text-[#f4f4f5]">
              Let's Connect & Build Together
            </h3>
            <p className="text-[#888890] text-sm font-light leading-relaxed">
              Open for Java Backend Engineering, Spring Boot Microservices, and DevOps/Cloud Roles. Reach out via email, phone, or direct message!
            </p>

            <div className="space-y-4 font-mono text-xs text-[#f4f4f5]">
              <a
                href="mailto:samia.saba0422@gmail.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors"
                data-cursor="EMAIL"
              >
                <Mail size={18} className="text-[#ccff00]" />
                <div>
                  <span className="block text-[10px] text-[#888890]">EMAIL ADDRESS</span>
                  <span className="font-bold">samia.saba0422@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+919113449653"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors"
                data-cursor="CALL"
              >
                <Phone size={18} className="text-[#ccff00]" />
                <div>
                  <span className="block text-[10px] text-[#888890]">PHONE NUMBER</span>
                  <span className="font-bold">+91 9113449653</span>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#ccff00] hover:text-[#ccff00] text-[#888890] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              data-cursor="LINKEDIN"
            >
              <LinkedinIcon size={16} />
              <span>LINKEDIN</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#ccff00] hover:text-[#ccff00] text-[#888890] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              data-cursor="GITHUB"
            >
              <GithubIcon size={16} />
              <span>GITHUB</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-white/10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center py-16 text-center space-y-4 font-mono">
              <CheckCircle2 size={48} className="text-[#ccff00] animate-bounce" />
              <h4 className="text-2xl font-bold text-[#f4f4f5]">MESSAGE SENT!</h4>
              <p className="text-sm text-[#888890] max-w-sm">
                Thank you for reaching out. Samia will respond to your message shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-[#888890] uppercase mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#f4f4f5] text-sm focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#888890] uppercase mb-1">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#f4f4f5] text-sm focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-[#888890] uppercase mb-1">
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Backend Engineer Position / Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#f4f4f5] text-sm focus:outline-none focus:border-[#ccff00]"
                />
              </div>

              <div>
                <label className="block text-[10px] text-[#888890] uppercase mb-1">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Samia, we saw your portfolio and would like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#f4f4f5] text-sm focus:outline-none focus:border-[#ccff00] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#ccff00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                data-cursor="SEND"
              >
                <Send size={16} />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
