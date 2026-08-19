import React, { useRef, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { useCursor } from '../context/CursorContext';
import { Sparkles, Terminal, Compass, Layers, CheckCircle2, ArrowUpRight, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-stagger-item', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const corePillars = [
    {
      title: 'UI & Visual Craft',
      desc: 'Obsessive attention to optical balance, typographic rhythm, and tactile micro-textures that command aesthetic respect.',
      icon: <Layers size={18} className="text-[#FF5C39]" />,
    },
    {
      title: 'UX Cognitive Architecture',
      desc: 'Engineering low-friction user journeys and information systems that eliminate cognitive overload.',
      icon: <Compass size={18} className="text-[#6366F1]" />,
    },
    {
      title: 'Motion Choreography',
      desc: 'Sculpting cinematic transitions with GSAP and spring physics so every state change communicates meaning.',
      icon: <Sparkles size={18} className="text-[#10B981]" />,
    },
    {
      title: 'Creative Engineering',
      desc: 'Bridging the design-to-code chasm with production-grade TypeScript, Next.js, and strict semantic accessibility.',
      icon: <Code2 size={18} className="text-[#D97706]" />,
    },
  ];

  const tools = [
    'Figma Master',
    'GSAP / ScrollTrigger',
    'React 19 & Next.js',
    'TypeScript Strict',
    'Tailwind CSS v4',
    'Design Tokens (JSON)',
    'Motion & Lenis',
    'RTL / Persian Typography',
    'SwiftUI Concepts',
    'Framer',
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#d1d1cf]"
    >
      <SectionHeading
        number="02"
        tag="ABOUT ERFAN"
        title="DESIGN MEETS TECHNOLOGY."
        persianTitle="تلاقی هنر طراحی و مهندسی خلاق"
        description="I operate at the intersection of aesthetic authority and deep engineering discipline, turning ambitious product visions into living software."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Narrative Manifesto */}
        <div className="lg:col-span-7 space-y-8">
          <div className="about-stagger-item space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] leading-snug">
              Most digital products suffer from a broken handoff. Designers draw static pictures; engineers build approximate code.
            </h3>
            <p className="text-base md:text-lg text-[#555555] leading-relaxed">
              I eliminate that boundary. As both a <span className="font-semibold text-[#111111]">senior UI designer</span> and <span className="font-semibold text-[#111111]">creative frontend developer</span>, I design systems with an innate understanding of layout engines, memory overhead, and state orchestration.
            </p>
          </div>

          {/* Persian Editorial Quote Card */}
          <div className="about-stagger-item p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#d1d1cf] shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5C39]/05 rounded-full blur-2xl pointer-events-none" />
            <span className="text-xs font-mono text-[#888888] tracking-widest uppercase block mb-3">
              DESIGN PHILOSOPHY / فلسفه طراحی
            </span>
            <blockquote className="font-persian text-xl sm:text-2xl font-medium text-[#111111] leading-loose text-right">
              «زیبایی واقعی در تناسب بی‌نقص جزئیات زاده می‌شود، و کارایی در ساختار مهندسی‌شده پایدار می‌ماند.»
            </blockquote>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#F0F0EC] text-xs font-mono text-[#777777]">
              <span>ERFAN MOEIN</span>
              <span>TEHRAN / GLOBAL</span>
            </div>
          </div>

          {/* Core Pillars 2x2 Grid */}
          <div className="about-stagger-item grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#d1d1cf] space-y-2 hover:border-[#111111]/40 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#111111]/5">{pillar.icon}</div>
                  <h4 className="font-display font-bold text-base text-[#111111]">{pillar.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Credentials & Stack Box */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Profile Summary */}
          <div className="about-stagger-item p-6 sm:p-8 rounded-3xl bg-[#111111] text-[#F7F7F5] shadow-xl space-y-6 border border-[#222222]">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold block mb-0.5">
                  ● ACTIVE PRACTITIONER
                </span>
                <h4 className="font-display text-2xl font-bold">Erfan Moein</h4>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-display font-bold text-lg">
                EM
              </div>
            </div>

            <div className="space-y-3 text-xs font-mono text-white/80">
              <div className="flex justify-between py-1.5 border-b border-white/05">
                <span className="text-white/40">EXPERIENCE</span>
                <span>6+ Years in Digital Craft</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/05">
                <span className="text-white/40">SPECIALIZATION</span>
                <span>Mobile Apps & Design Systems</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/05">
                <span className="text-white/40">LOCALIZATION</span>
                <span>Fluent English + Native Persian</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/05">
                <span className="text-white/40">AVAILABILITY</span>
                <span className="text-emerald-400">Available for Select Q3/Q4</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-white/50 block mb-3">CURATED TECH ARSENAL</span>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/10 text-white/90 border border-white/05"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Studio Guarantee Banner */}
          <div className="about-stagger-item p-6 rounded-3xl bg-[#FFFFFF] border border-[#d1d1cf] flex items-start gap-4 shadow-xs">
            <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-bold text-[#111111] font-mono block">NO TEMPLATES. NO AI SLOP.</span>
              <p className="text-[#666666] leading-relaxed">
                Every project is crafted from a blank canvas with custom tokens, bespoke typography, and handcrafted animation curves tailored specifically to your brand identity.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
