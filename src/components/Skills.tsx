"use client";

import React, { useState } from 'react';
import { Cpu, Terminal, Server, Database, ShieldCheck, GitBranch, Layers } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: 'PROGRAMMING & FRAMEWORKS',
      icon: <Cpu size={20} className="text-[#ccff00]" />,
      skills: [
        { name: 'Java', level: 'Expert', desc: 'Core Java, OOP, Multithreading, Streams API' },
        { name: 'Spring Boot', level: 'Advanced', desc: 'REST Controllers, Services, Auto-config' },
        { name: 'Hibernate / JPA', level: 'Advanced', desc: 'ORM, Entity mapping, Criteria queries' },
        { name: 'Maven', level: 'Advanced', desc: 'Dependency management, Build lifecycles' },
        { name: 'Spring Security', level: 'Intermediate', desc: 'Authentication, Authorization, Filters' },
        { name: 'JavaScript / HTML / CSS', level: 'Intermediate', desc: 'Frontend basics & integration' },
      ],
    },
    {
      title: 'DEVOPS & CI/CD',
      icon: <Server size={20} className="text-[#ccff00]" />,
      skills: [
        { name: 'Docker (CLI, Dockerfile, Compose)', level: 'Advanced', desc: 'Containerization, multi-stage builds' },
        { name: 'Jenkins', level: 'Intermediate', desc: 'Automated CI pipelines & build jobs' },
        { name: 'GitHub Actions', level: 'Advanced', desc: 'Workflow automation & automated deployment' },
      ],
    },
    {
      title: 'NETWORKING & CLOUD',
      icon: <Layers size={20} className="text-[#ccff00]" />,
      skills: [
        { name: 'TCP/IP & DNS', level: 'Proficient', desc: 'Protocol fundamentals & domain resolution' },
        { name: 'HTTP / HTTPS', level: 'Expert', desc: 'REST verb semantics, headers, status codes' },
        { name: 'VPC & Subnets', level: 'Intermediate', desc: 'Virtual private clouds, network security groups' },
      ],
    },
    {
      title: 'DATABASES & STORAGE',
      icon: <Database size={20} className="text-[#ccff00]" />,
      skills: [
        { name: 'MySQL', level: 'Advanced', desc: 'Relational schemas, indexing, foreign keys' },
        { name: 'MongoDB', level: 'Intermediate', desc: 'Document schemas, aggregation pipelines' },
        { name: 'H2 Database', level: 'Advanced', desc: 'In-memory testing DB for Spring Boot integration' },
      ],
    },
    {
      title: 'API TESTING & SECURITY',
      icon: <ShieldCheck size={20} className="text-[#ccff00]" />,
      skills: [
        { name: 'RESTful APIs', level: 'Expert', desc: 'Stateless API design, JSON payloads' },
        { name: 'Postman', level: 'Advanced', desc: 'API testing collections, environment variables' },
        { name: 'JWT Authentication', level: 'Advanced', desc: 'Token authorization, stateless security' },
      ],
    },
    {
      title: 'VERSION CONTROL & OS',
      icon: <GitBranch size={20} className="text-[#ccff00]" />,
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', desc: 'Branching, PRs, version history' },
        { name: 'Linux / Unix Fundamentals', level: 'Advanced', desc: 'CLI commands, file permissions, shell tools' },
      ],
    },
  ];

  return (
    <section id="skills" className="w-full space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs text-[#ccff00] uppercase tracking-widest block mb-1">
            02 // TECHNICAL MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f4f4f5]">
            CORE SKILLS & TECH STACK<span className="text-[#ccff00]">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Category Menu Buttons */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`p-4 rounded-xl font-mono text-xs font-bold text-left transition-all duration-300 flex items-center justify-between border ${
                activeCategory === idx
                  ? 'bg-[#ccff00] text-black border-[#ccff00] shadow-lg shadow-[#ccff00]/20 scale-[1.02]'
                  : 'glass-panel text-[#888890] border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                {React.cloneElement(cat.icon, {
                  className: activeCategory === idx ? 'text-black' : 'text-[#ccff00]',
                })}
                <span>{cat.title}</span>
              </div>
              <span className="text-[10px] opacity-70">
                ({cat.skills.length})
              </span>
            </button>
          ))}
        </div>

        {/* Right Active Skills Grid */}
        <div className="lg:col-span-8 glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[380px]">
          <div>
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10 font-mono text-sm text-[#ccff00]">
              {categories[activeCategory].icon}
              <span className="font-bold">{categories[activeCategory].title}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories[activeCategory].skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#ccff00]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold font-mono text-[#f4f4f5] text-sm">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-[#888890] font-light leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex justify-between font-mono text-xs text-[#888890]">
            <span>STRICT ACCORDANCE WITH RESUME PROFILE</span>
            <span className="text-[#ccff00]">JAVA & DEVOPS READY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
