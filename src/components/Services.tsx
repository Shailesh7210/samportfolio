"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, Cpu, ShieldCheck, Server } from 'lucide-react';

const SERVICES = [
  {
    icon: <Code2 className="text-[#ccff00]" size={26} />,
    title: 'Production Feature Development (Java & PHP)',
    tag: '01 // PRODUCTION',
    description:
      'Building and maintaining live production software features for enterprise platforms (Fastbooking/Agoda) using Java, PHP, Spring Boot, MySQL, and modern JavaScript.',
  },
  {
    icon: <Cpu className="text-[#00f0ff]" size={26} />,
    title: 'Database Query Optimization & Schemas',
    tag: '02 // DATABASE',
    description:
      'Writing & optimizing high-performance MySQL queries, enforcing database-level uniqueness constraints, and designing scalable relational schemas for internal tools.',
  },
  {
    icon: <ShieldCheck className="text-[#a78bfa]" size={26} />,
    title: 'RESTful API & Swagger Documentation',
    tag: '03 // APIS',
    description:
      'Designing stateless RESTful APIs, authoring interactive Swagger (OpenAPI) documentation, and building automated Postman testing collections.',
  },
  {
    icon: <Server className="text-[#34d399]" size={26} />,
    title: 'DevOps & Containerization Pipelines',
    tag: '04 // DEVOPS',
    description:
      'Creating multi-stage Docker images, Docker Compose orchestrations, and automated GitHub Actions CI/CD workflows for reliable application deployment.',
  },
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35, scale: 0.96, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="w-full max-w-7xl mx-auto space-y-14 sm:space-y-16"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="space-y-2">
        <div className="flex items-center gap-3 font-mono text-xs text-[#ccff00] uppercase tracking-widest">
          <span>// 05. CAPABILITIES</span>
          <div className="h-[1px] w-24 bg-[#ccff00]/30"></div>
        </div>
        <h2 className="text-display-sub font-extrabold tracking-tighter text-[#f4f4f5]">
          SERVICES & EXPERTISE<span className="text-[#ccff00]">.</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {SERVICES.map((srv) => (
          <motion.div
            key={srv.title}
            variants={itemVariants}
            className="glass-panel glass-panel-hover tech-card-corner p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 group h-full"
            data-cursor="SERVICE"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#ccff00]/50 transition-colors">
                  {srv.icon}
                </div>
                <span className="font-mono text-xs text-[#888890]">
                  {srv.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#f4f4f5] group-hover:text-[#ccff00] transition-colors leading-snug">
                {srv.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#888890] font-light leading-relaxed">
                {srv.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 font-mono text-xs text-[#888890] group-hover:text-white transition-colors">
              PRODUCTION READY →
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
