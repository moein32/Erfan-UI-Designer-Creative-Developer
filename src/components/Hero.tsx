import React, { useEffect, useRef, useState } from 'react';
import { useCursor } from '../context/CursorContext';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, MoveRight, MoveLeft, Sparkles, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenContact }) => {
  const { setCursor, resetCursor } = useCursor();
  const { t, isRTL } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const portraitContainerRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);
  const floatingBadgeRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);

  // GSAP Choreographed Entrance, Mouse Parallax & ScrollTrigger
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    // Check if device has fine pointer (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Instant graceful reveal for reduced motion
        gsap.set([badgeRef.current, headlineRef.current, portraitContainerRef.current, subtextRef.current, ctaRef.current, ribbonRef.current], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      // Choreographed Master Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Top Metadata
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.15 }
      )
        // 2. Main Identity & Display Typography
        .fromTo(
          '.hero-reveal-line',
          { opacity: 0, y: 45, rotateX: 15 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.12 },
          '-=0.4'
        )
        // 3. Portrait Art Element (opacity: 0, scale: 0.94, y: 30 -> 1, 1, 0)
        .fromTo(
          portraitContainerRef.current,
          { opacity: 0, scale: 0.94, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'power2.out' },
          '-=0.7'
        )
        // Floating glass badge
        .fromTo(
          floatingBadgeRef.current,
          { opacity: 0, scale: 0.85, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.4)' },
          '-=0.5'
        )
        // 4. Supporting Statement & Value Proposition
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        // 5. CTAs & Bottom Disciplines Ribbon
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          ribbonRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.4'
        );

      // Subtle Scroll Parallax on Hero elements
      ScrollTrigger.create({
        trigger: heroEl,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (portraitContainerRef.current) {
            gsap.to(portraitContainerRef.current, {
              y: progress * 60,
              scale: 1 - progress * 0.06,
              opacity: 1 - progress * 0.45,
              duration: 0.1,
              overwrite: 'auto',
            });
          }
          if (headlineRef.current) {
            gsap.to(headlineRef.current, {
              y: progress * 40,
              opacity: 1 - progress * 0.35,
              duration: 0.1,
              overwrite: 'auto',
            });
          }
        },
      });

      // Controlled Mouse Parallax (Multi-plane depth)
      if (isFinePointer) {
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const xPercent = (clientX / window.innerWidth - 0.5) * 2;
          const yPercent = (clientY / window.innerHeight - 0.5) * 2;
          const dirFactor = isRTL ? -1 : 1;

          // Portrait moves 10-14px
          if (portraitImgRef.current) {
            gsap.to(portraitImgRef.current, {
              x: xPercent * 12 * dirFactor,
              y: yPercent * 10,
              duration: 1.4,
              ease: 'power2.out',
            });
          }

          // Floating badge moves with slight lag
          if (floatingBadgeRef.current) {
            gsap.to(floatingBadgeRef.current, {
              x: xPercent * 18 * dirFactor,
              y: yPercent * 14,
              duration: 1.6,
              ease: 'power2.out',
            });
          }

          // Headline moves with subtle opposing plane (4-6px)
          if (headlineRef.current) {
            gsap.to(headlineRef.current, {
              x: xPercent * -5 * dirFactor,
              y: yPercent * -4,
              duration: 1.8,
              ease: 'power2.out',
            });
          }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-10 px-6 md:px-12 max-w-7xl mx-auto select-none overflow-visible"
    >
      {/* Top Status & Location Ribbon — Liquid Glass */}
      <div
        ref={badgeRef}
        className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-[#0A0A0A] uppercase">
            {t.hero.statusPill}
          </span>
          <span className="text-[#E5E7EB]">/</span>
          <span className="text-[11px] font-mono text-[#71717A] uppercase hidden sm:inline-block">
            {t.hero.experienceBadge}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.1em] text-[#71717A] uppercase">
          <MapPin size={12} className="text-[#0A0A0A]" />
          <span className="font-semibold text-[#0A0A0A]">{t.hero.location}</span>
          <span>·</span>
          <span>{t.hero.availability}</span>
        </div>
      </div>

      {/* Main Hero Visual Composition: Intersecting Typography + Portrait */}
      <div className="my-auto py-8 md:py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (or Right in RTL): Editorial Typography & Designer Identity */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 z-10">
            
            {/* Designer Brand Identity Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full liquid-glass border border-[#E5E7EB] self-start shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" />
              <span className="font-mono text-xs font-bold tracking-wider text-[#0A0A0A] uppercase">
                {t.hero.designerName}
              </span>
              <span className="text-[#D4D4D8]">·</span>
              <span className="text-[11px] font-mono text-[#71717A]">
                {isRTL ? 'تهران' : 'EST. 2018'}
              </span>
            </div>

            {/* Primary Display Headline with Layered Character Lines */}
            <div ref={headlineRef} className="space-y-1 will-change-transform">
              {isRTL ? (
                <h1 className="text-[40px] sm:text-[62px] md:text-[76px] lg:text-[84px] leading-[1.08] font-bold text-[#0A0A0A] tracking-tight">
                  <div className="hero-reveal-line overflow-hidden pb-1">
                    {t.hero.roleLine1}
                  </div>
                  <div className="hero-reveal-line overflow-hidden flex items-baseline gap-3 md:gap-4 pb-1">
                    <span className="font-serif italic font-light text-[#71717A]">&amp;</span>
                    <span>{t.hero.roleLine2}</span>
                  </div>
                </h1>
              ) : (
                <h1 className="text-[48px] sm:text-[72px] md:text-[88px] lg:text-[96px] xl:text-[104px] leading-[0.88] font-black tracking-[-0.04em] uppercase text-[#0A0A0A]">
                  <div className="hero-reveal-line overflow-hidden pb-1">
                    {t.hero.roleLine1}
                  </div>
                  <div className="hero-reveal-line overflow-hidden flex items-baseline gap-3 md:gap-4 pb-1">
                    <span className="font-serif italic font-light text-[#71717A] tracking-normal">&amp;</span>
                    <span>{t.hero.roleLine2}</span>
                  </div>
                </h1>
              )}
            </div>

            {/* Supporting Value Statement */}
            <div ref={subtextRef} className="max-w-xl space-y-4">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal text-[#3F3F46]">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Action Buttons with Liquid Glass & Precision Styling */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreWork}
                id="hero-explore-btn"
                className="group px-7 py-4 rounded-full bg-[#0A0A0A] text-[#FFFFFF] text-xs font-mono font-bold tracking-wider hover:bg-[#27272A] transition-all flex items-center gap-3 shadow-xs active:scale-95 cursor-pointer"
                onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.view })}
                onMouseLeave={resetCursor}
              >
                <span>{t.hero.exploreWork}</span>
                {isRTL ? (
                  <MoveLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              <button
                onClick={onOpenContact}
                id="hero-contact-btn"
                className="px-6 py-4 rounded-full liquid-glass-pill text-[#0A0A0A] text-xs font-mono font-semibold tracking-wider transition-all active:scale-95 cursor-pointer"
                onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.send })}
                onMouseLeave={resetCursor}
              >
                {t.hero.getInTouch}
              </button>
            </div>

          </div>

          {/* Right Column (or Left in RTL): Art-Directed Personal Portrait Anchor */}
          <div
            ref={portraitContainerRef}
            className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end relative order-first lg:order-last"
          >
            {/* Outer Subtle Glass Atmosphere Backdrop */}
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-[4/5] rounded-[32px] sm:rounded-[36px] overflow-hidden bg-[#FAFAFA] border border-[#E5E7EB] shadow-lg shadow-black/[0.03] group">
              
              {/* Subtle Top-Edge Specular Glass Light */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent pointer-events-none z-10" />

              {/* Graceful Fallback if Image Fails or is Loading */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-[#F4F4F5] animate-pulse flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#E4E4E7] flex items-center justify-center text-[#71717A] font-mono text-sm font-bold">
                    EM
                  </div>
                </div>
              )}

              {/* Error Fallback */}
              {imageError && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#F4F4F5] to-[#E4E4E7] flex flex-col items-center justify-center p-6 text-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] text-white flex items-center justify-center font-display font-bold text-xl">
                    EM
                  </div>
                  <span className="font-mono text-xs font-bold text-[#0A0A0A]">
                    {t.hero.designerName}
                  </span>
                  <span className="text-[11px] font-mono text-[#71717A]">
                    {t.hero.roleLine1} &amp; {t.hero.roleLine2}
                  </span>
                </div>
              )}

              {/* The Real Personal Portrait Photograph */}
              <img
                ref={portraitImgRef}
                src="/assets/images/erfan.png"
                alt={t.hero.portraitAlt}
                loading="eager"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover object-top filter grayscale contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.02] will-change-transform ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Subtle Bottom Vignette Gradient to blend with framing */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

              {/* Bottom Identity Label Overlay Inside Frame */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white z-20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase drop-shadow-sm">
                    {t.hero.shortName}
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-white/80 uppercase">
                  {isRTL ? 'تهران' : 'IR · 2026'}
                </span>
              </div>
            </div>

            {/* Floating Refined Liquid Glass Card Overlay (Apple / Editorial Detail) */}
            <div
              ref={floatingBadgeRef}
              className={`absolute -bottom-5 ${
                isRTL ? '-right-4 sm:-right-6' : '-left-4 sm:-left-6'
              } liquid-glass-strong border border-[#E5E7EB] rounded-2xl p-3.5 sm:p-4 shadow-xl z-20 max-w-[210px] sm:max-w-[230px]`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#0A0A0A] text-white flex items-center justify-center shrink-0">
                  <Sparkles size={14} className="text-emerald-400" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="text-[10px] font-mono font-bold text-[#0A0A0A] truncate uppercase">
                    {isRTL ? 'معماری رابط کاربری' : 'UI ARCHITECTURE'}
                  </div>
                  <div className="text-[9px] font-mono text-[#71717A] truncate">
                    {isRTL ? 'طراحی + کدنویسی فرانت‌اند' : 'Design Systems + Code'}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Disciplines Ribbon & Scroll Trigger */}
      <div
        ref={ribbonRef}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E5E7EB] text-xs font-mono text-[#71717A]"
      >
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto max-w-full pb-1">
          {t.hero.disciplines.map((disc, idx) => (
            <React.Fragment key={disc}>
              {idx > 0 && <span className="text-[#E5E7EB]">·</span>}
              <span className="hover:text-[#0A0A0A] transition-colors whitespace-nowrap">
                {disc}
              </span>
            </React.Fragment>
          ))}
        </div>

        <a
          href="#selected-work"
          className="group flex items-center gap-3 text-[#0A0A0A] hover:opacity-75 transition-opacity cursor-pointer shrink-0"
          onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.top })}
          onMouseLeave={resetCursor}
          aria-label={t.hero.scrollHint}
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full liquid-glass flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-white transition-all shadow-xs">
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#71717A]">
            {t.hero.scrollHint}
          </span>
        </a>
      </div>
    </section>
  );
};
