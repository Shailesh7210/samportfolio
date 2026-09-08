"use client";

import React from 'react';
import { GraduationCap, Award, Server, Cpu, Database, CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'B.TECH CGPA', value: '8.5 / 10', detail: 'O.P Jindal University' },
    { label: 'CLASS XII SCORE', value: '91%', detail: 'Jawahar Navodaya Vidyalaya' },
    { label: 'CLASS X SCORE', value: '94%', detail: 'Jawahar Navodaya Vidyalaya' },
    { label: 'CERTIFICATIONS', value: 'Oracle & Forage', detail: 'Professional Java & Backend' },
  ];

  return (
    <section id="about" className="w-full space-y-12">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-[#ccff00] uppercase tracking-widest block mb-1">
            01 // BIOGRAPHY & BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f4f5]">
            ENGINEERING RESILIENT BACKENDS<span className="text-[#ccff00]">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Bio Glass Card */}
        <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#f4f4f5] leading-snug">
              Backend Software Engineer specializing in Java, Spring Boot, and Cloud-Native DevOps Automation.
            </h3>
            <p className="text-[#888890] leading-relaxed text-sm sm:text-base font-light">
              Currently pursuing a Bachelor of Technology in Computer Science & Engineering at O.P Jindal University (CGPA 8.5), I focus on building robust RESTful APIs, thread-safe ingestion backends, and containerized microservice architectures.
            </p>
            <p className="text-[#888890] leading-relaxed text-sm sm:text-base font-light">
              My engineering philosophy emphasizes clean code principles, database-level uniqueness constraints, transaction safety, and continuous integration using Jenkins, Docker, and GitHub Actions.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-[#f4f4f5]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ccff00]" />
                <span>Thread-safe Concurrency & Ingestion</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ccff00]" />
                <span>Docker & CI/CD Pipeline Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ccff00]" />
                <span>Role-Based Access (JWT Auth)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ccff00]" />
                <span>Relational & NoSQL Data Modeling</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#888890]">
            <span>DEGREE: B.TECH CSE (2022 - 2026)</span>
            <span className="text-[#ccff00]">AVAILABLE FOR ROLES</span>
          </div>
        </div>

        {/* Stats Grid & Education Summary */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-xl border border-white/10 glass-panel-hover flex flex-col justify-between"
            >
              <div className="font-mono text-[10px] text-[#888890] uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="my-4 text-3xl font-extrabold font-mono text-[#ccff00]">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-[#888890]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
