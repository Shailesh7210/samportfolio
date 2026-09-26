"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Software Development Intern',
    company: 'IGT Solutions Pvt. Ltd.',
    branch: 'Fastbooking, Agoda branch',
    period: 'June 2025 – Aug 2025',
    location: 'Live Production System',
    details: [
      'Built and maintained features for the Fastbooking platform (Agoda branch) using Java, PHP, MySQL, HTML, CSS, and JavaScript in a live production environment.',
      'Worked across multiple internal projects during the internship, taking ownership of assigned modules from development through testing.',
      'Wrote and optimized MySQL queries to support backend data handling and reporting for internal tools.',
      'Collaborated with cross-functional engineering teams, consistently delivering all assignments on schedule.',
      'Recognized by management as a fast learner and effective team player across the Java/PHP stack.',
    ],
    badge: 'INTERNSHIP',
  },
];

const CERTIFICATIONS = [
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

export default function Experience() {
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
    hidden: { opacity: 0, x: -30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      x: 0,
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
          <span>// 04. CAREER TIMELINE</span>
          <div className="h-[1px] w-24 bg-[#ccff00]/30"></div>
        </div>
        <h2 className="text-display-sub font-extrabold tracking-tighter text-[#f4f4f5]">
          WORK EXPERIENCE<span className="text-[#ccff00]">.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Timeline Grid */}
        <div className="lg:col-span-8 space-y-8 sm:space-y-10 relative pl-6 border-l border-white/10">
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="glass-panel glass-panel-hover tech-card-corner p-6 sm:p-8 rounded-2xl relative"
              data-cursor="WORK"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-8 w-3 h-3 rounded-full bg-[#ccff00] border-4 border-[#070708]"></div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#f4f4f5]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] font-semibold mt-0.5">
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white font-normal">{exp.branch}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1 font-mono text-xs text-[#888890]">
                    <div className="flex items-center gap-1.5 text-white">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 font-light text-xs sm:text-sm text-[#888890]">
                  {exp.details.map((point, pIdx) => (
                    <motion.li
                      key={pIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: pIdx * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-1.5 shrink-0"></span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[#888890] uppercase tracking-widest">
            <Award size={14} className="text-[#ccff00]" />
            <span>OFFICIAL CERTIFICATIONS</span>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-mono font-bold text-[#f4f4f5] text-sm">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-xs text-[#888890] mt-1">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20">
                    {cert.date}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/5 flex justify-end font-mono text-xs text-[#ccff00]">
                  <a href={cert.link} className="hover:underline flex items-center gap-1">
                    <span>VERIFY</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
