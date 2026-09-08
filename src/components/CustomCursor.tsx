"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement | null;
      const hoverable = target?.closest('[data-cursor]');
      if (hoverable) {
        const text = hoverable.getAttribute('data-cursor') || '';
        if (cursorRef.current) {
          cursorRef.current.style.width = '48px';
          cursorRef.current.style.height = '48px';
        }
        if (textRef.current) {
          textRef.current.innerText = text;
          textRef.current.style.opacity = '1';
        }
      } else {
        if (cursorRef.current) {
          cursorRef.current.style.width = '10px';
          cursorRef.current.style.height = '10px';
        }
        if (textRef.current) {
          textRef.current.innerText = '';
          textRef.current.style.opacity = '0';
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 pointer-events-none rounded-full bg-[#ccff00] mix-blend-difference transition-[width,height] duration-200 ease-out will-change-transform"
        style={{ width: '10px', height: '10px' }}
      />
      <div
        ref={textRef}
        className="fixed top-0 left-0 z-50 pointer-events-none font-mono text-[10px] font-bold text-black uppercase tracking-widest flex items-center justify-center opacity-0 transition-opacity duration-150 will-change-transform"
      />
    </>
  );
}
