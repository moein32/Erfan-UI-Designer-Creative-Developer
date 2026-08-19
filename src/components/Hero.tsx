import React, { useEffect, useRef } from 'react';
import { useCursor } from '../context/CursorContext';
import { ArrowDown, Sparkles, MoveRight, Layers } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
  isPersianMode?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenContact, isPersianMode }) => {
  const { setCursor, resetCursor } = useCursor();
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax & Entrance GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered reveal
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          '.hero-char-line',
          { opacity: 0, y: 50, rotateX: 20 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1.1, stagger: 0.15 },
          '-=0.5'
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );

      // Subtle mouse move parallax on the headline
      const handleMouseMove = (e: MouseEvent) => {
        if (!headlineRef.current) return;
        const { clientX, clientY } = e;
        const xOffset = (clientX / window.innerWidth - 0.5) * 16;
        const yOffset = (clientY / window.innerHeight - 0.5) * 16;

        gsap.to(headlineRef.current, {
          x: xOffset,
          y: yOffset,
          duration: 1.2,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Background Natural Warm Blush Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#FF6B6B] opacity-[0.08] blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Top Tagline / Status */}
      <div ref={badgeRef} className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-[#111111] rounded-full"></div>
          <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase">
            Professional Portfolio 2026
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] opacity-50 uppercase">
          <span>BASED IN TEHRAN</span>
          <span>·</span>
          <span>WORKING GLOBALLY</span>
        </div>
      </div>

      {/* Hero Primary Headline */}
      <div className="my-auto py-6 md:py-10 space-y-6 md:space-y-8">
        <div className="flex flex-col">
          <h1
            ref={headlineRef}
            className="text-[52px] sm:text-[84px] md:text-[96px] lg:text-[110px] leading-[0.88] md:leading-[0.85] font-semibold tracking-[-0.03em] uppercase text-[#111111] will-change-transform"
          >
            <div className="hero-char-line overflow-hidden">
              UI DESIGNER
            </div>
            <div className="hero-char-line overflow-hidden flex items-baseline gap-3">
              <span className="stroke-text font-serif italic text-transparent font-light">&amp;</span>
              <span>CREATIVE</span>
            </div>
            <div className="hero-char-line overflow-hidden">
              DEVELOPER
            </div>
          </h1>
        </div>

        {/* Supporting statement */}
        <div
          ref={subtextRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-[#d1d1cf]"
        >
          <div className="space-y-2 max-w-md">
            <p className="text-base sm:text-lg leading-relaxed font-medium text-[#444444]">
              I design digital experiences that feel <span className="font-semibold text-[#111111] underline decoration-[#FF6B6B] decoration-2 underline-offset-4">alive</span>. Specializing in high-end design systems and interactive motion.
            </p>
            <p className="text-xs sm:text-sm font-persian text-[#666666] leading-relaxed">
              طراحی رابط‌های کاربری چشم‌نواز و توسعه وب‌سایت‌های خلاقانه با تکیه بر جزئیات و موشن هدفمند.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreWork}
              id="hero-explore-btn"
              className="group px-6 py-3.5 rounded-full bg-[#111111] text-[#F7F7F5] text-xs font-mono font-bold tracking-wider hover:bg-[#2B2B2B] transition-all flex items-center gap-3 shadow-md"
              onMouseEnter={() => setCursor({ type: 'button', text: 'VIEW ↗' })}
              onMouseLeave={resetCursor}
            >
              <span>EXPLORE SELECTED WORK</span>
              <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenContact}
              id="hero-contact-btn"
              className="px-5 py-3.5 rounded-full bg-[#FFFFFF] border border-[#d1d1cf] text-[#111111] text-xs font-mono font-semibold tracking-wider hover:border-[#111111] hover:bg-[#111111]/5 transition-all"
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              LET'S TALK
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Disciplines Ribbon */}
      <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs font-mono text-[#777777]">
        <div className="flex items-center gap-6 overflow-x-auto max-w-full pb-1">
          <span className="hover:text-[#111111] transition-colors">UI/UX DESIGN</span>
          <span className="text-[#d1d1cf]">·</span>
          <span className="hover:text-[#111111] transition-colors">PRODUCT DESIGN</span>
          <span className="text-[#d1d1cf]">·</span>
          <span className="hover:text-[#111111] transition-colors">DESIGN SYSTEMS</span>
          <span className="text-[#d1d1cf]">·</span>
          <span className="hover:text-[#111111] transition-colors">MOTION &amp; GSAP</span>
        </div>

        <a
          href="#selected-work"
          className="group flex items-center gap-3 text-[#111111] hover:opacity-75 transition-opacity"
          onMouseEnter={() => setCursor({ type: 'button' })}
          onMouseLeave={resetCursor}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#111111] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-all">
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-60">
            Scroll to explore
          </span>
        </a>
      </div>
    </section>
  );
};
