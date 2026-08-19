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
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Top Tagline / Status */}
      <div ref={badgeRef} className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#0A0A0A] rounded-full"></div>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#71717A] uppercase">
            SELECTED WORK · 2024–2026
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.15em] text-[#71717A] uppercase">
          <span>TEHRAN</span>
          <span>·</span>
          <span>AVAILABLE WORLDWIDE</span>
        </div>
      </div>

      {/* Hero Primary Headline */}
      <div className="my-auto py-8 md:py-14 space-y-8 md:space-y-10">
        <div className="flex flex-col">
          <h1
            ref={headlineRef}
            className="text-[54px] sm:text-[88px] md:text-[104px] lg:text-[120px] leading-[0.88] md:leading-[0.84] font-semibold tracking-[-0.035em] uppercase text-[#0A0A0A] will-change-transform"
          >
            <div className="hero-char-line overflow-hidden">
              UI DESIGNER
            </div>
            <div className="hero-char-line overflow-hidden flex items-baseline gap-3 md:gap-5">
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-[#E5E7EB]"
        >
          <div className="space-y-2 max-w-lg">
            <p className="text-base sm:text-lg leading-relaxed font-medium text-[#3F3F46]">
              Architecting thoughtful digital experiences with uncompromising craft. Specializing in high-end design systems, mobile ergonomics, and creative engineering.
            </p>
            <p className="text-xs sm:text-sm font-persian text-[#71717A] leading-relaxed">
              طراحی رابط‌های کاربری محصول‌محور و مهندسی تجربیات تعاملی با بالاترین استاندارد استودیوهای جهانی.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreWork}
              id="hero-explore-btn"
              className="group px-7 py-4 rounded-full bg-[#0A0A0A] text-[#FFFFFF] text-xs font-mono font-bold tracking-wider hover:bg-[#27272A] transition-all flex items-center gap-3 shadow-sm active:scale-95 cursor-pointer"
              onMouseEnter={() => setCursor({ type: 'button', text: 'VIEW ↗' })}
              onMouseLeave={resetCursor}
            >
              <span>EXPLORE SELECTED WORK</span>
              <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenContact}
              id="hero-contact-btn"
              className="px-6 py-4 rounded-full bg-[#FFFFFF] border border-[#E5E7EB] text-[#0A0A0A] text-xs font-mono font-semibold tracking-wider hover:border-[#0A0A0A] hover:bg-[#F4F4F5] transition-all active:scale-95 cursor-pointer"
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              LET’S TALK
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Disciplines Ribbon */}
      <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs font-mono text-[#71717A]">
        <div className="flex items-center gap-6 overflow-x-auto max-w-full pb-1">
          <span className="hover:text-[#0A0A0A] transition-colors">UI/UX DESIGN</span>
          <span className="text-[#E5E7EB]">·</span>
          <span className="hover:text-[#0A0A0A] transition-colors">PRODUCT ARCHITECTURE</span>
          <span className="text-[#E5E7EB]">·</span>
          <span className="hover:text-[#0A0A0A] transition-colors">DESIGN SYSTEMS</span>
          <span className="text-[#E5E7EB]">·</span>
          <span className="hover:text-[#0A0A0A] transition-colors">CREATIVE DEV &amp; GSAP</span>
        </div>

        <a
          href="#selected-work"
          className="group flex items-center gap-3 text-[#0A0A0A] hover:opacity-75 transition-opacity"
          onMouseEnter={() => setCursor({ type: 'button' })}
          onMouseLeave={resetCursor}
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#0A0A0A] flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-white transition-all">
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#71717A]">
            SCROLL TO DISCOVER
          </span>
        </a>
      </div>
    </section>
  );
};
