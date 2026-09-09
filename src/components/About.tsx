"use client";

import React from 'react';
import { CheckCircle2, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'PRODUCTION EXPERIENCE', value: 'IGT Solutions', detail: 'Fastbooking (Agoda branch)' },
    { label: 'B.TECH CGPA', value: '8.5 / 10', detail: 'O.P Jindal University (CSE)' },
    { label: 'CLASS XII SCORE', value: '91%', detail: 'Jawahar Navodaya Vidyalaya' },
    { label: 'CLASS X SCORE', value: '94%', detail: 'Jawahar Navodaya Vidyalaya' },
  ];

  return (
    <section id="about" className="w-full space-y-12">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-[#ccff00] uppercase tracking-widest block mb-1">
            01 // BIOGRAPHY & SUMMARY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f4f5]">
            BUILDING REAL-WORLD SOFTWARE<span className="text-[#ccff00]">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Bio Glass Card */}
        <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#f4f4f5] leading-snug">
              B.Tech Computer Science graduate with a strong foundation in Java, Spring Boot, databases, and API development.
            </h3>
            <p className="text-[#888890] leading-relaxed text-sm sm:text-base font-light">
              Backed by hands-on industry experience at <span className="text-[#f4f4f5] font-semibold">IGT Solutions Pvt. Ltd. (Fastbooking, Agoda branch)</span>, I have contributed to live production features, query optimizations, and cross-functional software delivery.
            </p>
            <p className="text-[#888890] leading-relaxed text-sm sm:text-base font-light">
              Recognized by engineering management as a fast learner and adaptable team player, I excel at taking ownership of backend modules from initial design through testing and production deployment.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-[#f4f4f5]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ccff00]" />
                <span>Live Production Feature Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ccff00]" />
                <span>MySQL Query Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ccff00]" />
                <span>RESTful API & Swagger Docs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ccff00]" />
                <span>Docker & GitHub Actions CI/CD</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#888890]">
            <span>DEGREE: B.TECH CSE (2022 - 2026)</span>
            <span className="text-[#ccff00]">AVAILABLE FOR ROLES</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-xl border border-white/10 glass-panel-hover flex flex-col justify-between"
            >
              <div className="font-mono text-[10px] text-[#888890] uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="my-4 text-2xl font-extrabold font-mono text-[#ccff00]">
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
