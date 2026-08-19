import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCursor } from '../../context/CursorContext';
import {
  Compass,
  Sliders,
  Layers,
  Code2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Cpu,
  Eye,
  Activity,
  Maximize2,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const InteractiveApproach: React.FC = () => {
  const { t, isRTL, formatNumber } = useLanguage();
  const { setCursor, resetCursor } = useCursor();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [interactiveMode, setInteractiveMode] = useState<'tokens' | 'physics' | 'render'>('tokens');

  const containerRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  const approachData = t.experienceSection.approach;
  const steps = approachData.steps;
  const currentStep = steps[activeStepIndex] || steps[0];

  // GSAP ScrollTrigger Pinned Timeline for Desktop
  useEffect(() => {
    const containerEl = containerRef.current;
    const pinEl = pinSectionRef.current;
    if (!containerEl || !pinEl) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    if (prefersReducedMotion || !isDesktop) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerEl,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinEl,
        pinSpacing: false,
        onUpdate: (self) => {
          const progress = self.progress;
          // Split progress into 4 equal bands (0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1)
          const newIndex = Math.min(Math.floor(progress * 4), 3);
          setActiveStepIndex(newIndex);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isRTL]);

  const stepIcons = [
    <Compass key="0" size={18} />,
    <Sliders key="1" size={18} />,
    <Layers key="2" size={18} />,
    <Code2 key="3" size={18} />,
  ];

  return (
    <section
      ref={containerRef}
      id="approach"
      className="relative lg:min-h-[320vh] bg-gradient-to-b from-[#FFFFFF] via-[#FAFAFA] to-[#FFFFFF] border-t border-[#E5E7EB]"
    >
      {/* Pinned Viewport Container on Desktop / Normal flow on Mobile */}
      <div
        ref={pinSectionRef}
        className="lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
      >
        {/* Top Header & Chapter Identifier */}
        <div>
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A]" />
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#71717A] uppercase">
                {formatNumber(approachData.number)} / {approachData.tag}
              </span>
            </div>

            {/* Interactive Step Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-full liquid-glass border border-[#E5E7EB]">
              {steps.map((step, idx) => (
                <button
                  key={step.phase}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    activeStepIndex === idx
                      ? 'bg-[#0A0A0A] text-white shadow-xs'
                      : 'text-[#71717A] hover:text-[#0A0A0A]'
                  }`}
                  onMouseEnter={() => setCursor({ type: 'button' })}
                  onMouseLeave={resetCursor}
                >
                  {formatNumber(step.number)} {step.phase}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Central Visual Composition: Narrative on one side, Central Visual Object on other */}
        <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Step Phase Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full liquid-glass border border-[#E5E7EB]">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-widest text-[#0A0A0A] uppercase">
                {formatNumber(currentStep.number)} · {currentStep.phase}
              </span>
            </div>

            {/* Step Title */}
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0A0A0A] tracking-tight leading-tight transition-all duration-300">
              {currentStep.title}
            </h3>

            {/* Step Description */}
            <p className="text-base sm:text-lg leading-relaxed text-[#3F3F46] font-normal transition-all duration-300">
              {currentStep.desc}
            </p>

            {/* Key Activities / Bullet Points */}
            <div className="space-y-2.5 pt-2">
              {currentStep.bulletPoints.map((bp) => (
                <div key={bp} className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[#0A0A0A]">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>{bp}</span>
                </div>
              ))}
            </div>

            {/* Interactive Step Navigation Controls */}
            <div className="flex items-center gap-3 pt-4">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="w-10 h-10 rounded-full liquid-glass border border-[#E5E7EB] flex items-center justify-center text-[#0A0A0A] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#0A0A0A] hover:text-white transition-all cursor-pointer shadow-xs"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </button>

              <button
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                className="w-10 h-10 rounded-full liquid-glass border border-[#E5E7EB] flex items-center justify-center text-[#0A0A0A] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#0A0A0A] hover:text-white transition-all cursor-pointer shadow-xs"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>

              <span className="font-mono text-xs text-[#71717A] ml-2">
                {formatNumber(String(activeStepIndex + 1))} / {formatNumber(String(steps.length))}
              </span>
            </div>
          </div>

          {/* Central Visual Object: The Tactile Liquid Glass Interface HUD */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              ref={hudRef}
              className="w-full max-w-[480px] rounded-[32px] liquid-glass-strong border border-[#E5E7EB] p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden group"
            >
              {/* Top Specular Glass Reflection */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none" />

              {/* HUD Header & Live Telemetry Indicator */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB] relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#0A0A0A] text-white flex items-center justify-center shadow-xs">
                    {stepIcons[activeStepIndex] || <Sparkles size={16} />}
                  </div>
                  <div>
                    <span className="block font-mono text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">
                      {currentStep.hudTitle}
                    </span>
                    <span className="block font-mono text-[10px] text-[#71717A]">
                      {isRTL ? 'محیط شبیه‌ساز زنده' : 'LIVE DESIGN ENGINE'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-[10px] font-bold text-emerald-700">60 FPS</span>
                </div>
              </div>

              {/* Dynamic State Visualizer depending on active phase */}
              <div className="relative z-10 space-y-4">
                
                {/* Phase 01: Discover (Nodes & Cognitive Mapping) */}
                {activeStepIndex === 0 && (
                  <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                      <span>{isRTL ? 'تحلیل جریان کاربر' : 'COGNITIVE ARCHITECTURE'}</span>
                      <span className="text-[#0A0A0A] font-bold">NODE_GRAPH_V2</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['Intent', 'Synthesis', 'Outcome'].map((node, i) => (
                        <div
                          key={node}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            i === 1
                              ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                              : 'bg-[#FAFAFA] border-[#E5E7EB] text-[#0A0A0A]'
                          }`}
                        >
                          <span className="block font-mono text-[10px] font-bold uppercase">{node}</span>
                          <span className="block font-mono text-[9px] opacity-70">
                            {i === 1 ? 'ACTIVE' : 'SYNCD'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Phase 02: Define (Token Matrix & Typography Cadence) */}
                {activeStepIndex === 1 && (
                  <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                      <span>{isRTL ? 'ماتریس توکن‌ها' : 'TOKEN SCALE (8PT GRID)'}</span>
                      <span className="text-emerald-600 font-bold">AAA COMPLIANT</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {['4px', '8px', '16px', '24px', '32px'].map((spacing, idx) => (
                        <div
                          key={spacing}
                          className="flex-1 p-2 rounded-lg bg-[#FAFAFA] border border-[#E5E7EB] text-center"
                        >
                          <div className="h-6 flex items-center justify-center">
                            <div
                              className="bg-[#0A0A0A] rounded-xs"
                              style={{ width: `${(idx + 1) * 3}px`, height: `${(idx + 1) * 3}px` }}
                            />
                          </div>
                          <span className="block font-mono text-[9px] text-[#71717A]">{spacing}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Phase 03: Design (Liquid Glass & Tactile Material Surface) */}
                {activeStepIndex === 2 && (
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-white/90 to-white/40 border border-[#E5E7EB] shadow-inner space-y-3 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                      <span>{isRTL ? 'شکست نور و متریال لمسی' : 'TACTILE SPECULAR SHADER'}</span>
                      <span className="text-[#0A0A0A] font-bold">GLASS_ALPHA_0.8</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white">
                          <Maximize2 size={12} />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#0A0A0A]">
                          {isRTL ? 'ارگونومی لمسی ۴۴px' : '44px Touch Target'}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-600 font-bold">OPTIMAL</span>
                    </div>
                  </div>
                )}

                {/* Phase 04: Build (GSAP Kinetic Engine & Production Code) */}
                {activeStepIndex === 3 && (
                  <div className="p-4 rounded-2xl bg-[#0A0A0A] text-white space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                      <span>GSAP_SCROLLTRIGGER.TS</span>
                      <span className="text-emerald-400 font-bold">CLEAN_AST</span>
                    </div>
                    <div className="font-mono text-[11px] text-white/90 space-y-1 bg-[#18181B] p-3 rounded-lg border border-white/10">
                      <div><span className="text-purple-400">const</span> timeline = gsap.<span className="text-blue-400">timeline</span>();</div>
                      <div>timeline.<span className="text-blue-400">to</span>(target, &#123; ease: <span className="text-emerald-400">&apos;power3.out&apos;</span>, fps: <span className="text-amber-400">60</span> &#125;);</div>
                    </div>
                  </div>
                )}

                {/* HUD Live Metrics Strip */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {currentStep.hudMetrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB]">
                      <span className="block text-[10px] font-mono text-[#71717A] uppercase">{m.label}</span>
                      <span className="block text-lg font-mono font-bold text-[#0A0A0A]">{m.val}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Pinned Footer Info */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5E7EB] text-xs font-mono text-[#71717A]">
          <span>{isRTL ? 'معماری و توسعه تعاملی توسط عرفان' : 'ARCHITECTURE & CRAFT BY ERFAN'}</span>
          <span className="hidden sm:inline-block">
            {isRTL ? 'اسکرول کنید تا مراحل بعدی آشکار شوند' : 'SCROLL TO ADVANCE METHODOLOGY PHASES'}
          </span>
        </div>
      </div>
    </section>
  );
};
