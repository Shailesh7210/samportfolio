"use client";

import React from 'react';
import { Award, Briefcase, ExternalLink, Shield, Cpu, Terminal } from 'lucide-react';

export default function Experience() {
  const jobSimulations = [
    {
      company: 'WELLS FARGO',
      role: 'Software Engineering Job Simulation',
      date: '2024 - 2025',
      bullets: [
        'Understood relevant requirements for building a system to manage financial portfolios.',
        'Drafted a visual representation of the data as an entity relationship diagram (ERD).',
        'Used the IntelliJ developer application to implement the ERD and published it to GitHub.',
      ],
      link: '#',
      icon: <Briefcase size={20} className="text-[#ccff00]" />,
    },
    {
      company: 'VERIZON',
      role: 'Cloud Platform Job Simulation',
      date: '2024 - 2025',
      bullets: [
        'Analyzed cloud-native VPN solution for scalability and security.',
        'Used Python CLI tools to test application behavior.',
        'Summarized security strategies in a presentation for stakeholders.',
      ],
      link: '#',
      icon: <Shield size={20} className="text-[#ccff00]" />,
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
            03 // INDUSTRY SIMULATIONS & CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f4f5]">
            JOB SIMULATIONS & CERTIFICATIONS<span className="text-[#ccff00]">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Job Simulations */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-mono text-xs text-[#888890] uppercase tracking-widest flex items-center gap-2">
            <Terminal size={14} className="text-[#ccff00]" />
            <span>VIRTUAL INDUSTRY EXPERIENCE</span>
          </h3>

          <div className="space-y-4">
            {jobSimulations.map((sim, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      {sim.icon}
                      <div>
                        <h4 className="font-extrabold font-mono text-[#f4f4f5] text-base">
                          {sim.company}
                        </h4>
                        <span className="text-xs text-[#888890] font-mono">
                          {sim.role}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#ccff00]">
                      {sim.date}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#888890] font-light">
                    {sim.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#ccff00] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
                  <a
                    href={sim.link}
                    className="font-mono text-xs text-[#ccff00] hover:underline flex items-center gap-1"
                    data-cursor="CERTIFICATE"
                  >
                    <span>VIEW CERTIFICATE</span>
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
