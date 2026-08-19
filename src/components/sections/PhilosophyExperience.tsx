import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCursor } from '../../context/CursorContext';
import { Sparkles, Compass, Layers, ShieldCheck, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PhilosophyExperience: React.FC = () => {
  const { t, isRTL, formatNumber } = useLanguage();
  const { setCursor, resetCursor } = useCursor();
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteContainerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const data = t.experienceSection.philosophy;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Large headline word reveal on scroll
      const words = headlineRef.current?.querySelectorAll('.philosophy-word');
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.15, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 80%',
              end: 'bottom 50%',
              scrub: 0.5,
            },
          }
        );
      }

      // Pillars staggered reveal
      gsap.fromTo(
        '.philosophy-pillar-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.philosophy-pillars-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  const pillarIcons = [
    <Layers key="layers" size={18} className="text-[#0A0A0A]" />,
    <Sparkles key="sparkles" size={18} className="text-[#0A0A0A]" />,
    <ShieldCheck key="shield" size={18} className="text-[#0A0A0A]" />,
  ];

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle Environmental Ambient Lighting & Grid Accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#F4F4F5] to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#F4F4F5_1px,transparent_1px),linear-gradient(to_bottom,#F4F4F5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      {/* Chapter Tagline */}
      <div className="flex items-center gap-3 mb-10 md:mb-16">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A]" />
        <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#71717A] uppercase">
          {formatNumber(data.number)} / {data.tag}
        </span>
      </div>

      {/* Monumental Kinetic Statement */}
      <div className="mb-20 md:mb-28">
        <h2
          ref={headlineRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#0A0A0A] leading-[1.1] md:leading-[1.05]"
        >
          <span className="block philosophy-word">{data.headlineLine1}</span>
          <span className="block philosophy-word text-[#71717A] font-light">{data.headlineLine2}</span>
          <span className="block philosophy-word">{data.headlineLine3}</span>
        </h2>
      </div>

      {/* Two-Column Editorial Layout: Manifesto & Core Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Manifesto Narrative */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8">
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-[#3F3F46] font-normal">
              {data.paragraph1}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#3F3F46] font-normal">
              {data.paragraph2}
            </p>
          </div>

          {/* Quote Attribution Pill */}
          <div
            ref={quoteContainerRef}
            className="p-5 rounded-2xl liquid-glass border border-[#E5E7EB] flex items-start gap-4 shadow-xs"
          >
            <div className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center shrink-0 mt-0.5">
              <Quote size={14} className="text-white/80" />
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-mono font-bold text-[#0A0A0A] tracking-wider uppercase">
                {data.quoteAuthor}
              </span>
              <span className="block text-[11px] font-mono text-[#71717A]">
                {isRTL ? 'تهران · تعهد به بالاترین کیفیت تولید' : 'EST. 2018 · COMMITTED TO CRAFT'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Three Structural Pillars */}
        <div className="lg:col-span-7 philosophy-pillars-grid space-y-4">
          {data.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="philosophy-pillar-card p-6 sm:p-8 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-[#E5E7EB] hover:border-[#D4D4D8] transition-all duration-300 shadow-xs hover:shadow-md group cursor-default"
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {pillarIcons[idx] || <Compass size={18} />}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#A1A1AA] group-hover:text-[#0A0A0A] transition-colors">
                    {formatNumber(pillar.number)}
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#A1A1AA] uppercase">
                  {isRTL ? 'اصل بنیادین' : 'CORE TENET'}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A] tracking-tight mb-2 group-hover:translate-x-1 transition-transform">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#71717A] group-hover:text-[#3F3F46] transition-colors">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
