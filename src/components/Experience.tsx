"use client";

import React from 'react';
import { Award, Briefcase, ExternalLink, Terminal, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'IGT Solutions Pvt. Ltd.',
      branch: 'Fastbooking, Agoda branch',
      role: 'Software Development Intern',
      date: 'June 2025 – Aug 2025',
      bullets: [
        'Built and maintained features for the Fastbooking platform (Agoda branch) using Java, PHP, MySQL, HTML, CSS, and JavaScript in a live production environment.',
        'Worked across multiple internal projects during the internship, taking ownership of assigned modules from development through testing.',
        'Wrote and optimized MySQL queries to support backend data handling and reporting for internal tools.',
        'Collaborated with cross-functional engineering teams, consistently delivering all assignments on schedule.',
        'Recognized by management as a fast learner and effective team player, reflecting strong adaptability across the Java/PHP stack.',
      ],
      link: '#',
      icon: <Briefcase size={20} className="text-[#ccff00]" />,
    },
  ];

  const certifications = [
    {
      title: 'Oracle – Professional Developer 2025',
      issuer: 'Oracle Corporation',
      date: '2025',
      link: '#',
    },
    {
      title: 'Forage – Back-End Engineering Program',
      issuer: 'Forage / Industry Partners',
      date: '2025',
      link: '#',
    },
  ];

  return (
    <section id="experience" className="w-full space-y-10">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-[#ccff00] uppercase tracking-widest block mb-1">
            03 // INDUSTRY EXPERIENCE & CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f4f5]">
            PRODUCTION EXPERIENCE & CERTIFICATIONS<span className="text-[#ccff00]">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Internship Experience */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-mono text-xs text-[#888890] uppercase tracking-widest flex items-center gap-2">
            <Terminal size={14} className="text-[#ccff00]" />
            <span>LIVE PRODUCTION INTERNSHIP</span>
          </h3>

          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      {exp.icon}
                      <div>
                        <h4 className="font-extrabold font-mono text-[#f4f4f5] text-base">
                          {exp.company}
                        </h4>
                        <span className="text-xs text-[#888890] font-mono block">
                          {exp.role} • <span className="text-[#ccff00]">{exp.branch}</span>
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#ccff00] font-bold">
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#888890] font-light">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-[#ccff00] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                  <a
                    href={exp.link}
                    className="font-mono text-xs text-[#ccff00] hover:underline flex items-center gap-1"
                    data-cursor="CERTIFICATE"
                  >
                    <span>VIEW INTERNSHIP CERTIFICATE</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Professional Certifications */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-mono text-xs text-[#888890] uppercase tracking-widest flex items-center gap-2">
            <Award size={14} className="text-[#ccff00]" />
            <span>OFFICIAL CERTIFICATIONS</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-mono font-bold text-[#f4f4f5] text-sm sm:text-base">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-xs text-[#888890]">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                  <span className="font-mono text-xs px-2 py-1 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20">
                    {cert.date}
                  </span>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                  <a
                    href={cert.link}
                    className="font-mono text-xs text-[#ccff00] hover:underline flex items-center gap-1"
                    data-cursor="VERIFY"
                  >
                    <span>VERIFY CREDENTIAL</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
