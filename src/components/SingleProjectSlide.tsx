"use client";

import React from 'react';
import { ExternalLink, Terminal, CheckCircle } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export interface ProjectData {
  number: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  techStack: string[];
  github: string;
  live?: string;
  gradient: string;
  accent: string;
}

interface SingleProjectSlideProps {
  project: ProjectData;
}

export default function SingleProjectSlide({ project }: SingleProjectSlideProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto">
      {/* Container Panel with gradient glow */}
      <div className={`relative glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 font-mono text-xs text-[#888890]">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: project.accent }}></span>
            <span className="uppercase tracking-widest text-[#f4f4f5] font-bold">{project.category}</span>
          </div>
          <span className="text-2xl font-extrabold font-mono" style={{ color: project.accent }}>
            PROJECT // {project.number}
          </span>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#f4f4f5] leading-tight">
              {project.title}
            </h3>

            <p className="text-[#888890] text-sm sm:text-base leading-relaxed font-light">
              {project.description}
            </p>

            {/* Bullet Highlights from Resume */}
            <div className="space-y-3 font-mono text-xs text-[#f4f4f5]">
              {project.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: project.accent }} />
                  <span className="leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tech Stack & Link Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-white/10">
            
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#888890] uppercase tracking-wider block">
                TECHNOLOGY STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-[#f4f4f5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2"
                data-cursor="GITHUB"
              >
                <GithubIcon size={16} />
                <span>VIEW REPOSITORY</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-white/20 hover:border-[#ccff00] text-[#ccff00] font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2"
                  data-cursor="LIVE DEMO"
                >
                  <ExternalLink size={16} />
                  <span>LIVE SYSTEM</span>
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
