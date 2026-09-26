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
  const stInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || slideRefs.current.length === 0) return;

    const ctx = gsap.context(() => {
      const totalSlides = sections.length;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalSlides * 180}%`,
          pin: true,
          scrub: 0.4,
          snap: {
            snapTo: 1 / (totalSlides - 1),
            duration: { min: 0.25, max: 0.5 },
            delay: 0.05,
            ease: 'power1.inOut',
            directional: false,
          },
          onUpdate: (self) => {
            const progressVal = self.progress * (totalSlides - 1);
            const idx = Math.min(
              totalSlides - 1,
              Math.max(0, Math.round(progressVal))
            );
            setActiveIndex(idx);

            // Dynamic Visibility Management: Keep active and adjacent slides visible
            // so returning backward from last section to top section is 100% fluid
            slideRefs.current.forEach((slide, i) => {
              if (!slide) return;
              const dist = Math.abs(progressVal - i);
              if (dist <= 1.2) {
                slide.style.visibility = 'visible';
                slide.style.pointerEvents = Math.round(progressVal) === i ? 'auto' : 'none';
              } else {
                slide.style.visibility = 'hidden';
                slide.style.pointerEvents = 'none';
              }
            });
          },
        },
      });

      stInstanceRef.current = timeline.scrollTrigger;

      // Initial state setup for 3D stack
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;
        if (i === 0) {
          gsap.set(slide, {
            opacity: 1,
            scale: 1,
            z: 0,
            pointerEvents: 'auto',
            visibility: 'visible',
          });
        } else {
          gsap.set(slide, {
            opacity: 0,
            scale: 0.15,
            z: -1800,
            pointerEvents: 'none',
            visibility: i === 1 ? 'visible' : 'hidden',
          });
        }
      });

      // Build 3D spatial zoom transitions for each slide step
      for (let i = 0; i < totalSlides - 1; i++) {
        const currentSlide = slideRefs.current[i];
        const nextSlide = slideRefs.current[i + 1];

        if (!currentSlide || !nextSlide) continue;

        const stepLabel = `step-${i}`;

        // 1. Current slide zooms forward into camera and disappears
        timeline
          .to(
            currentSlide,
            {
              scale: 2.8,
              z: 900,
              opacity: 0,
              ease: 'power1.inOut',
            },
            stepLabel
          )
          // 2. Next slide flies in from deep space to screen center
          .to(
            nextSlide,
            {
              scale: 1,
              z: 0,
              opacity: 1,
              ease: 'power1.inOut',
            },
            stepLabel
          );
      }
    }, containerRef);

    // Global click listener for navbar links and buttons to trigger smooth spatial deck scroll
    const handleGlobalNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          const id = href.replace('#', '');
          let targetIdx = 0;
          if (id === 'hero' || id === '') {
            targetIdx = 0;
          } else {
            targetIdx = sections.findIndex(
              (s) => s.id === id || s.id.startsWith(id) || id.startsWith(s.id)
            );
            if (id === 'projects' || id === 'project') {
              targetIdx = sections.findIndex((s) => s.id.includes('project'));
            }
          }

          if (targetIdx !== -1) {
            e.preventDefault();
            scrollToSlide(targetIdx);
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalNavClick);

    return () => {
      document.removeEventListener('click', handleGlobalNavClick);
      ctx.revert();
    };
  }, [sections]);

  const scrollToSlide = (index: number) => {
    if (!stInstanceRef.current) {
      if (index === 0) window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const st = stInstanceRef.current;
    const totalSlides = sections.length;
    const targetScroll = st.start + (index / (totalSlides - 1)) * (st.end - st.start);

    window.scrollTo({
      top: targetScroll,
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
            className="absolute inset-0 w-full h-full flex items-center justify-center p-6 sm:p-12 lg:p-16 will-change-transform"
            style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
          >
            <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
              {section.component}
            </div>
          </div>
        ))}
      </div>

      {/* Side Spatial Flight Index Indicator */}
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
              suppressHydrationWarning
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
