"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-[#070708]/80 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#hero" className="flex items-center gap-3 group" data-cursor="HOME">
          <div className="w-9 h-9 rounded-lg bg-[#ccff00] text-black flex items-center justify-center font-mono font-black text-sm group-hover:rotate-6 transition-transform">
            <Terminal size={18} />
          </div>
          <div>
            <span className="font-mono text-sm font-bold tracking-tight text-[#f4f4f5] block">
              SAMIA SABA
            </span>
            <span className="font-mono text-[10px] text-[#888890] block tracking-widest uppercase">
              JAVA & DEVOPS ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-[#888890] uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#ccff00] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ccff00] hover:after:w-full after:transition-all"
              data-cursor={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Actions */}
        <div className="hidden md:flex items-center gap-4 font-mono text-xs">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/10 hover:border-[#ccff00] hover:text-[#ccff00] text-[#888890] transition-colors"
            title="GitHub"
            data-cursor="GITHUB"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/10 hover:border-[#ccff00] hover:text-[#ccff00] text-[#888890] transition-colors"
            title="LinkedIn"
            data-cursor="LINKEDIN"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:samia.saba0422@gmail.com"
            className="px-4 py-2 rounded-full border border-[#ccff00]/40 bg-[#ccff00]/10 text-[#ccff00] font-bold hover:bg-[#ccff00] hover:text-black transition-all duration-300 flex items-center gap-2"
            data-cursor="HIRE"
          >
            <Mail size={14} />
            <span>RESUME / HIRE</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#f4f4f5] focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070708] border-b border-white/10 px-6 py-6 space-y-4 font-mono text-sm uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#888890] hover:text-[#ccff00] py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center gap-4">
            <a href="mailto:samia.saba0422@gmail.com" className="text-[#ccff00] font-bold">
              samia.saba0422@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
