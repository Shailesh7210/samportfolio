"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';

interface SpatialDeckProps {
  sections: {
    id: string;
    label: string;
    component: React.ReactNode;
  }[];
}

export default function SpatialDeck({ sections }: SpatialDeckProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current || slideRefs.current.length === 0) return;

    const ctx = gsap.context(() => {
      const totalSlides = sections.length;

      // 3D Spatial Deck ScrollTrigger timeline
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalSlides * 180}%`,
          pin: true,
          scrub: 0.4, // Responsive, balanced scrub for both forward and reverse scrolling
          onUpdate: (self) => {
            const idx = Math.min(
              totalSlides - 1,
              Math.max(0, Math.round(self.progress * (totalSlides - 1)))
            );
            setActiveIndex(idx);
          },
        },
      });

      // Initial state setup for 3D stack
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;
        if (i === 0) {
          gsap.set(slide, {
            opacity: 1,
            scale: 1,
            z: 0,
            pointerEvents: 'auto',
          });
        } else {
          gsap.set(slide, {
            opacity: 0,
            scale: 0.08,
            z: -2000,
            pointerEvents: 'none',
          });
        }
      });

      // Build Symmetric 3D Spatial Z-Axis Zoom Animations for each slide step
      for (let i = 0; i < totalSlides - 1; i++) {
        const currentSlide = slideRefs.current[i];
        const nextSlide = slideRefs.current[i + 1];

        if (!currentSlide || !nextSlide) continue;

        // Using symmetric power1.inOut ease ensures going forward AND returning backward have identical smooth motion curves
        timeline
          .to(
            currentSlide,
            {
              scale: 2.8,
              z: 1000,
              opacity: 0,
              pointerEvents: 'none',
              ease: 'power1.inOut',
            },
            `step-${i}`
          )
          .to(
            nextSlide,
            {
              scale: 1,
              z: 0,
              opacity: 1,
              pointerEvents: 'auto',
              ease: 'power1.inOut',
            },
            `step-${i}`
          );
      }
    }, containerRef);

    // Global anchor click & navigation handler for smooth section jumping & returning
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          const id = href.replace('#', '');
          if (!id) return;

          let targetIdx = sections.findIndex(
            (s) => s.id === id || s.id.startsWith(id) || id.startsWith(s.id)
          );
          if (id === 'projects' || id === 'project') {
            targetIdx = sections.findIndex((s) => s.id.includes('project'));
          }

          if (targetIdx !== -1) {
            e.preventDefault();
            scrollToSlide(targetIdx);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      ctx.revert();
    };
  }, [sections]);

  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const totalSlides = sections.length;
    const scrollTarget =
      containerRef.current.offsetTop +
      (index / (totalSlides - 1)) * (containerRef.current.offsetHeight * (totalSlides - 1));

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-transparent"
    >
      {/* 3D Spatial Viewport Container */}
      <div
        className="w-full h-full relative"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        {sections.map((section, idx) => (
          <div
            key={section.id}
            ref={(el) => {
              slideRefs.current[idx] = el;
            }}
            id={section.id}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-6 sm:p-16 lg:p-24 will-change-transform"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
              {section.component}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Side Index Indicator */}
      <div className="fixed right-6 sm:right-12 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4 font-mono text-xs text-[#888890]">
        <div className="text-[#ccff00] font-bold text-sm">
          {activeIndex < 9 ? `0${activeIndex + 1}` : activeIndex + 1}
        </div>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <div
            className="w-full bg-[#ccff00] transition-all duration-300"
            style={{
              height: `${((activeIndex + 1) / sections.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="text-white/40">{sections.length < 10 ? `0${sections.length}` : sections.length}</div>

        {/* Slide Navigation Dots */}
        <div className="flex flex-col gap-2 mt-4">
          {sections.map((sec, i) => (
            <button
              key={sec.id}
              onClick={() => scrollToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                activeIndex === i
                  ? 'bg-[#ccff00] scale-125 shadow-lg shadow-[#ccff00]/60'
                  : 'bg-white/20 hover:bg-white/50'
              }`}
              title={sec.label}
              data-cursor={sec.id.toUpperCase()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
