"use client";

import React from 'react';
import { Server, ShieldCheck, Cpu, Code2, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Production Feature Development (Java & PHP)',
      desc: 'Building and maintaining live production software features for enterprise platforms (Fastbooking/Agoda) using Java, PHP, Spring Boot, MySQL, and modern JavaScript.',
      icon: <Code2 size={24} className="text-[#ccff00]" />,
      tags: ['Java', 'PHP', 'Spring Boot', 'Live Production'],
    },
    {
      num: '02',
      title: 'Database Design & MySQL Query Optimization',
      desc: 'Writing and optimizing high-performance MySQL queries, enforcing database-level uniqueness constraints, and designing scalable relational schemas for internal tools.',
      icon: <Cpu size={24} className="text-[#ccff00]" />,
      tags: ['MySQL', 'Query Optimization', 'JPA', 'Transactions'],
    },
    {
      num: '03',
      title: 'API Testing & Documentation (Postman & Swagger)',
      desc: 'Designing stateless RESTful APIs, authoring interactive Swagger (OpenAPI) documentation, and building comprehensive Postman test collections.',
      icon: <ShieldCheck size={24} className="text-[#ccff00]" />,
      tags: ['Swagger', 'Postman', 'REST APIs', 'JWT'],
    },
    {
      num: '04',
      title: 'DevOps & Containerization Pipelines',
      desc: 'Creating multi-stage Docker images, Docker Compose setups, and automated GitHub Actions CI/CD workflows for reliable application deployment.',
      icon: <Server size={24} className="text-[#ccff00]" />,
      tags: ['Docker', 'GitHub Actions', 'Linux', 'CI/CD'],
    },
  ];

  return (
    <section id="services" className="w-full space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-[#ccff00] uppercase tracking-widest block mb-1">
            04 // SPECIALIZATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f4f5]">
            ENGINEERING OFFERINGS<span className="text-[#ccff00]">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="glass-panel p-8 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {srv.icon}
                </div>
                <span className="font-mono text-2xl font-extrabold text-[#ccff00]">
                  {srv.num}
                </span>
              </div>

              <h3 className="text-xl font-bold font-mono text-[#f4f4f5] mb-3">
                {srv.title}
              </h3>

              <p className="text-sm text-[#888890] font-light leading-relaxed mb-6">
                {srv.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {srv.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20 font-mono text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
