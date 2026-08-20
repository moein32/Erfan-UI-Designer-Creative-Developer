import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useCursor } from '../context/CursorContext';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, MoveRight, MoveLeft, MapPin, Sparkles } from 'lucide-react';
import { AmbientLight, GridField, TypographicWatermark } from './ui/VisualEnvironment';

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
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const portraitContainerRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);
  const floatingBadgeRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Top status badge fades down
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      );

      // 2. Main Display Headline lines slide up gracefully
      const revealLines = headlineRef.current?.querySelectorAll('.hero-reveal-line');
      if (revealLines && revealLines.length > 0) {
        tl.fromTo(
          revealLines,
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 1.1, stagger: 0.14, ease: 'power4.out' },
          '-=0.5'
        );
      }

      // 3. Subtext softly fades in
      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.7'
      );

      // 4. Portrait photo container & lighting reveal
      if (portraitContainerRef.current) {
        tl.fromTo(
          portraitContainerRef.current,
          { opacity: 0, scale: 0.94, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.8'
        );
      }

      // 5. Floating design badge emerges
      if (floatingBadgeRef.current) {
        tl.fromTo(
          floatingBadgeRef.current,
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
          '-=0.6'
        );
      }

      // 6. Action buttons and bottom ribbon
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );

      tl.fromTo(
        ribbonRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      );

      // Subtle float animation for the glass badge
      if (floatingBadgeRef.current) {
        gsap.to(floatingBadgeRef.current, {
          y: '-=6',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isRTL]);

  // Subtle interactive parallax on mouse move for the portrait
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      if (!portraitImgRef.current) return;

      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 12;
      const yPercent = (clientY / window.innerHeight - 0.5) * 12;

      gsap.to(portraitImgRef.current, {
        x: xPercent,
        y: yPercent,
        duration: 1.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-10 px-6 md:px-12 max-w-7xl mx-auto select-none overflow-visible"
    >
      {/* Dark Environmental Ambient Light & Precision Grid */}
      <AmbientLight position="top-right" color="silver" size="xl" intensity="medium" />
      <AmbientLight position="bottom-center" color="silver" size="lg" intensity="subtle" />
      <GridField opacity={0.25} />
      <TypographicWatermark text="ERFAN" position="top-right" opacity="opacity-[0.02]" />

      {/* Top Status & Location Ribbon — Dark Liquid Glass */}
      <div
        ref={badgeRef}
        className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-[#F5F5F7] uppercase">
            {t.hero.statusPill}
          </span>
          <span className="text-white/20">/</span>
          <span className="text-[11px] font-mono text-[#A1A1AA] uppercase hidden sm:inline-block">
            {t.hero.experienceBadge}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.1em] text-[#A1A1AA] uppercase">
          <MapPin size={12} className="text-[#F5F5F7]" />
          <span className="font-semibold text-[#F5F5F7]">{t.hero.location}</span>
          <span className="text-white/20">·</span>
          <span>{t.hero.availability}</span>
        </div>
      </div>

      {/* Main Hero Visual Composition: Intersecting Typography + Portrait */}
      <div className="my-auto py-8 md:py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (or Right in RTL): Editorial Typography & Designer Identity */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8 z-10">
            
            {/* Designer Brand Identity Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-subtle border border-white/10 self-start shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="font-mono text-xs font-bold tracking-wider text-[#F5F5F7] uppercase">
                {t.hero.designerName}
              </span>
              <span className="text-white/20">·</span>
              <span className="text-[11px] font-mono text-[#A1A1AA]">
                {isRTL ? 'قزوین' : 'QAZVIN, IR'}
              </span>
            </div>

            {/* Primary Display Headline with Layered Character Lines */}
            <div ref={headlineRef} className="space-y-1 will-change-transform">
              {isRTL ? (
                <h1 className="text-[42px] sm:text-[64px] md:text-[78px] lg:text-[84px] xl:text-[90px] leading-[1.08] font-bold text-[#F5F5F7] tracking-tight">
                  <div className="hero-reveal-line overflow-hidden pb-1">
                    {t.hero.roleLine1}
                  </div>
                  <div className="hero-reveal-line overflow-hidden flex items-baseline gap-3 md:gap-4 pb-1">
                    <span className="font-serif italic font-light text-[#71717A]">&amp;</span>
                    <span className="text-white">{t.hero.roleLine2}</span>
                  </div>
                </h1>
              ) : (
                <h1 className="text-[48px] sm:text-[72px] md:text-[86px] lg:text-[92px] xl:text-[100px] leading-[0.9] font-black tracking-[-0.04em] uppercase text-[#F5F5F7]">
                  <div className="hero-reveal-line overflow-hidden pb-1">
                    {t.hero.roleLine1}
                  </div>
                  <div className="hero-reveal-line overflow-hidden flex items-baseline gap-3 md:gap-4 pb-1">
                    <span className="font-serif italic font-light text-[#71717A] tracking-normal">&amp;</span>
                    <span className="text-white">{t.hero.roleLine2}</span>
                  </div>
                </h1>
              )}
            </div>

            {/* Supporting Value Statement */}
            <div ref={subtextRef} className="max-w-xl space-y-4">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed font-normal text-[#A1A1AA]">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Action Buttons with Liquid Glass & Precision Styling */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreWork}
                id="hero-explore-btn"
                className="group px-7 py-4 rounded-full bg-[#F5F5F7] text-[#070709] text-xs font-mono font-bold tracking-wider hover:bg-white transition-all flex items-center gap-3 shadow-lg active:scale-95 cursor-pointer"
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
                className="px-6 py-4 rounded-full glass-subtle text-[#F5F5F7] text-xs font-mono font-semibold tracking-wider hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 cursor-pointer"
                onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.send })}
                onMouseLeave={resetCursor}
              >
                {t.hero.getInTouch}
              </button>
            </div>

          </div>

          {/* Right Column (or Left in RTL): Dominant Personal Portrait Visual */}
          <div
            ref={portraitContainerRef}
            className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end relative order-first lg:order-last"
          >
            {/* Soft Ambient Atmospheric Light behind Portrait */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-white/16 via-white/8 to-transparent rounded-[56px] blur-3xl pointer-events-none -z-10" />

            {/* Dominant Editorial Portrait Composition Frame */}
            <div 
              className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[620px] aspect-[4/4.85] rounded-[36px] sm:rounded-[44px] md:rounded-[48px] overflow-hidden bg-[#0D0D12] border border-white/14 shadow-[0_35px_100px_rgba(0,0,0,0.92)] group"
              style={{
                width: 'clamp(340px, 38vw, 620px)',
              }}
            >
              
              {/* Subtle Top-Edge Specular Glass Light */}
              <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/22 via-white/6 to-transparent pointer-events-none z-10" />

              {/* Graceful Fallback if Image Fails or is Loading */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-[#121217] animate-pulse flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-[#A1A1AA] font-mono text-sm font-bold">
                    EM
                  </div>
                </div>
              )}

              {/* Error Fallback */}
              {imageError && (
                <div className="absolute inset-0 bg-[#0D0D11] flex flex-col items-center justify-center p-6 text-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center font-display font-bold text-xl">
                    EM
                  </div>
                  <span className="font-mono text-xs font-bold text-[#F5F5F7]">
                    {t.hero.designerName}
                  </span>
                  <span className="text-[11px] font-mono text-[#A1A1AA]">
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
                className={`w-full h-full object-cover object-top filter grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.02] will-change-transform ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Subtle Bottom Vignette Gradient to blend smoothly with dark framing */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/75 to-transparent pointer-events-none" />

              {/* Bottom Identity Label Overlay Inside Frame */}
              <div className="absolute bottom-5 inset-x-6 flex items-center justify-between text-white z-20">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="font-mono text-xs font-bold tracking-wider uppercase drop-shadow-sm text-[#F5F5F7]">
                    {t.hero.shortName}
                  </span>
                </div>
                <span className="font-mono text-[11px] tracking-widest text-[#A1A1AA] uppercase">
                  {isRTL ? 'قزوین' : 'QAZVIN · 2026'}
                </span>
              </div>
            </div>

            {/* Floating Refined Liquid Glass Card Overlay (Apple / Editorial Detail) */}
            <div
              ref={floatingBadgeRef}
              className={`absolute -bottom-6 ${
                isRTL ? '-right-2 sm:-right-4' : '-left-2 sm:-left-4'
              } glass-strong border border-white/16 rounded-2xl p-4 sm:p-4.5 shadow-2xl z-20 max-w-[230px] sm:max-w-[260px]`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/12 text-white flex items-center justify-center shrink-0 border border-white/12">
                  <Sparkles size={16} className="text-emerald-400" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="text-[11px] font-mono font-bold text-[#F5F5F7] truncate uppercase">
                    {isRTL ? 'معماری رابط کاربری' : 'UI ARCHITECTURE'}
                  </div>
                  <div className="text-[10px] font-mono text-[#A1A1AA] truncate">
                    {isRTL ? 'سیستم‌های طراحی + فرانت‌اند' : 'Design Systems + Code'}
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
        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono text-[#A1A1AA]"
      >
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto max-w-full pb-1">
          {t.hero.disciplines.map((disc, idx) => (
            <React.Fragment key={disc}>
              {idx > 0 && <span className="text-white/20">·</span>}
              <span className="hover:text-[#F5F5F7] transition-colors whitespace-nowrap">
                {disc}
              </span>
            </React.Fragment>
          ))}
        </div>

        <a
          href="#selected-work"
          className="group flex items-center gap-3 text-[#F5F5F7] hover:opacity-85 transition-opacity cursor-pointer shrink-0"
          onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.top })}
          onMouseLeave={resetCursor}
          aria-label={t.hero.scrollHint}
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full glass-subtle flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shadow-md border border-white/10">
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#A1A1AA]">
            {t.hero.scrollHint}
          </span>
        </a>
      </div>
    </section>
  );
};
