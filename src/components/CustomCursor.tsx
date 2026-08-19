import React, { useEffect, useRef } from 'react';
import { useCursor } from '../context/CursorContext';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const { cursor, isTouchDevice } = useCursor();
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isTouchDevice || !cursorRef.current) return;

    const cursorEl = cursorRef.current;
    
    // GSAP quickTo for 60fps jitter-free cursor tracking
    const xTo = gsap.quickTo(cursorEl, 'x', { duration: 0.15, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursorEl, 'y', { duration: 0.15, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  const isExpanded = cursor.isHovered && !!cursor.text;
  const isButtonHover = cursor.isHovered && !cursor.text;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 will-change-transform"
      style={{ transform: 'translate3d(-50%, -50%, 0)' }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out backdrop-blur-[2px] ${
          isExpanded
            ? 'w-24 h-24 bg-[#0A0A0A] text-[#FFFFFF] shadow-2xl scale-100'
            : isButtonHover
            ? 'w-12 h-12 bg-[#0A0A0A]/15 border border-[#0A0A0A]/30 scale-100'
            : 'w-3 h-3 bg-[#0A0A0A] shadow-xs'
        }`}
      >
        {isExpanded && (
          <span
            ref={textRef}
            className="text-[11px] font-mono font-semibold tracking-wider uppercase text-center flex items-center gap-1 select-none animate-in fade-in zoom-in-90 duration-200"
          >
            {cursor.text}
          </span>
        )}
      </div>
    </div>
  );
};
