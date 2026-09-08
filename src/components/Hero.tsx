"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { ArrowDownRight, Server, ShieldCheck, Cpu } from 'lucide-react';

interface HeroProps {
  ready?: boolean;
}

export default function Hero({ ready = true }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const footerInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.4 } });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }
      )
      .fromTo(
        titleLine1Ref.current,
        { opacity: 0, y: 80, filter: 'blur(15px)', rotateX: -20 },
        { opacity: 1, y: 0, filter: 'blur(0px)', rotateX: 0 },
        '-=0.5'
      )
      .fromTo(
        titleLine2Ref.current,
        { opacity: 0, y: 80, filter: 'blur(15px)', rotateX: -20 },
        { opacity: 1, y: 0, filter: 'blur(0px)', rotateX: 0 },
        '-=1.1'
      )
      .fromTo(
        introRef.current,
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)' },
        '-=0.9'
      )
      .fromTo(
        footerInfoRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        '-=1.0'
      );
    }, containerRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 pt-32 pb-12 overflow-hidden bg-noise"
    >
      {/* Intro Label */}
      <div ref={labelRef} className="opacity-0">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 font-mono text-xs text-[#888890] uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#ccff00]"></span>
          <span>SAMIA SABA // JAVA BACKEND & DEVOPS ENGINEER</span>
        </div>
      </div>

      {/* Main Oversized Display Typography */}
      <div className="my-auto py-12 space-y-2">
        <h1
          ref={titleLine1Ref}
          className="text-display-giant font-extrabold tracking-tighter text-[#f4f4f5] opacity-0"
          data-cursor="SAMIA"
        >
          BACKEND &
        </h1>
        <h1
          ref={titleLine2Ref}
          className="text-display-giant font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#f4f4f5] via-[#888890] to-[#ccff00] opacity-0"
          data-cursor="ENGINEER"
        >
          DEVOPS<span className="text-[#ccff00]">.</span>
        </h1>
      </div>

      {/* Intro & Supporting Metadata */}
      <div ref={introRef} className="opacity-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-lg sm:text-2xl text-[#888890] font-light max-w-2xl leading-relaxed">
            Building high-throughput Java Spring Boot backend microservices, thread-safe ingestion platforms, containerized CI/CD pipelines & cloud architectures.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center lg:justify-end gap-4">
          <a
            href="#projects"
            className="group px-8 py-4 rounded-full bg-[#ccff00] text-black font-mono text-xs font-extrabold uppercase tracking-wider hover:bg-white transition-colors duration-300 flex items-center gap-3 shadow-lg shadow-[#ccff00]/10"
            data-cursor="EXPLORE"
          >
            <span>SELECTED PROJECTS</span>
            <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/15 bg-white/5 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-300"
            data-cursor="CONTACT"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* Footer Info & Animated Scroll Down Indicator */}
      <div
        ref={footerInfoRef}
        className="opacity-0 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#888890]"
      >
        <div className="flex items-center gap-8">
          <div>
            <span className="block text-[10px] text-[#888890] uppercase">Education</span>
            <span className="text-[#f4f4f5] font-semibold">B.Tech CSE (CGPA 8.5)</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#888890] uppercase">Core Tech</span>
            <span className="text-[#f4f4f5] font-semibold">Java • Spring Boot • Docker • REST</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs tracking-widest text-[#ccff00]">
          <span>SCROLL DOWN</span>
          <div className="w-5 h-9 rounded-full border-2 border-white/20 p-1 flex justify-center">
            <div className="w-1 h-2 rounded-full bg-[#ccff00] animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
