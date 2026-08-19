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
  Maximize2,
  Type,
  Palette,
  Activity,
  Zap,
} from 'lucide-react';
import { AmbientLight, GridField, TypographicWatermark } from '../ui/VisualEnvironment';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const InteractiveApproach: React.FC = () => {
  const { t, isRTL, formatNumber } = useLanguage();
  const { setCursor, resetCursor } = useCursor();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Interactive controls state inside the central design system object
  const [spacingScale, setSpacingScale] = useState<number>(16);
  const [selectedColorToken, setSelectedColorToken] = useState<string>('ink-primary');
  const [glassActiveToggle, setGlassActiveToggle] = useState<boolean>(true);
  const [isPhysicsActive, setIsPhysicsActive] = useState<boolean>(false);

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
          const newIndex = Math.min(Math.floor(progress * 4), 3);
          setActiveStepIndex(newIndex);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isRTL]);

  const stepIcons = [
    <Type key="0" size={16} />,
    <Palette key="1" size={16} />,
    <Layers key="2" size={16} />,
    <Code2 key="3" size={16} />,
  ];

  const colorTokens = [
    { id: 'ink-primary', name: '--token-ink', hex: '#0A0A0A', label: 'Primary Ink' },
    { id: 'glass-specular', name: '--token-glass-highlight', hex: '#FFFFFF', label: 'Specular Shine' },
    { id: 'neutral-silver', name: '--token-surface-subtle', hex: '#F4F4F5', label: 'Cool Neutral' },
    { id: 'accent-emerald', name: '--token-telemetry-active', hex: '#10B981', label: 'Living State' },
  ];

  return (
    <section
      ref={containerRef}
      id="approach"
      className="relative lg:min-h-[320vh] bg-gradient-to-b from-[#FFFFFF] via-[#FAFAFA] to-[#FFFFFF] border-t border-[#E5E7EB] overflow-hidden"
    >
      {/* Environmental Architectural Depth */}
      <AmbientLight position="top-right" size="xl" intensity="subtle" />
      <AmbientLight position="bottom-left" size="lg" intensity="soft" />
      <GridField opacity={0.3} />
      <TypographicWatermark text="SYSTEM" position="center" opacity="opacity-[0.015]" />

      {/* Pinned Viewport Container on Desktop / Normal flow on Mobile */}
      <div
        ref={pinSectionRef}
        className="lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden relative z-10"
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

            {/* Interactive Step Switcher Tabs — Subtle Liquid Glass */}
            <div className="flex items-center gap-1.5 p-1 rounded-full glass-subtle border border-[#E5E7EB]">
              {steps.map((step, idx) => (
                <button
                  key={step.phase}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-3.5 py-1 rounded-full text-[11px] font-mono font-bold transition-all cursor-pointer ${
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

        {/* Central Visual Composition: Narrative on one side, Design System Interface Object on other */}
        <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Step Phase Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-subtle border border-[#E5E7EB]">
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
                className="w-10 h-10 rounded-full glass-subtle border border-[#E5E7EB] flex items-center justify-center text-[#0A0A0A] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#0A0A0A] hover:text-white transition-all cursor-pointer shadow-xs"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </button>

              <button
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                className="w-10 h-10 rounded-full glass-subtle border border-[#E5E7EB] flex items-center justify-center text-[#0A0A0A] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#0A0A0A] hover:text-white transition-all cursor-pointer shadow-xs"
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

          {/* Central Visual Object: Authentic Liquid Glass Design System Interface */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              ref={hudRef}
              className="w-full max-w-[480px] rounded-[32px] glass-strong border border-[#E5E7EB] p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden group"
            >
              {/* Top Specular Shimmer Reflection */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/90 via-white/20 to-transparent pointer-events-none" />

              {/* Interface Header */}
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
                      {isRTL ? 'سیستم طراحی و کنترل توکن‌ها' : 'DESIGN SYSTEM SPEC · v2.4'}
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
                
                {/* Phase 01: Discover — Typographic Cadence & Optical Spacing */}
                {activeStepIndex === 0 && (
                  <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] space-y-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                      <span>{isRTL ? 'سلسله‌مراتب تایپوگرافی' : 'TYPOGRAPHIC HIERARCHY'}</span>
                      <span className="text-[#0A0A0A] font-bold">RATIO 1.333 (4:3)</span>
                    </div>

                    <div className="space-y-2 border-y border-[#F4F4F5] py-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xl font-bold tracking-tight text-[#0A0A0A]">Display Headline</span>
                        <span className="font-mono text-[10px] text-[#71717A]">48px / -0.03em</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm font-medium text-[#3F3F46]">Editorial Body Cadence</span>
                        <span className="font-mono text-[10px] text-[#71717A]">16px / 1.6</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-xs text-[#71717A]">JETBRAINS MONO TOKENS</span>
                        <span className="font-mono text-[10px] text-[#71717A]">12px / 0.15em</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Phase 02: Define — Design Token Matrix (8pt Spacing & Swatches) */}
                {activeStepIndex === 1 && (
                  <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] space-y-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                      <span>{isRTL ? 'توکن‌های رنگ و شبکه ۸ پیکسلی' : 'TOKEN MATRIX · 8PT RHYTHM'}</span>
                      <span className="text-emerald-600 font-bold">AAA CONTRAST</span>
                    </div>

                    {/* Color Swatch Tokens */}
                    <div className="grid grid-cols-4 gap-2">
                      {colorTokens.map((token) => (
                        <button
                          key={token.id}
                          onClick={() => setSelectedColorToken(token.id)}
                          className={`p-2 rounded-xl border text-start transition-all cursor-pointer ${
                            selectedColorToken === token.id
                              ? 'border-[#0A0A0A] bg-[#FAFAFA] shadow-xs'
                              : 'border-[#E5E7EB] hover:border-[#D4D4D8]'
                          }`}
                        >
                          <div
                            className="w-full h-6 rounded-md border border-[#E5E7EB] mb-1.5"
                            style={{ backgroundColor: token.hex }}
                          />
                          <span className="block font-mono text-[8px] text-[#71717A] truncate">
                            {token.name}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Spacing Matrix Slider */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[10px] font-mono text-[#71717A]">
                        <span>SPACING STEP: {spacingScale}px</span>
                        <span>GRID: 8px BASE</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {[8, 16, 24, 32, 48].map((s) => (
                          <button
                            key={s}
                            onClick={() => setSpacingScale(s)}
                            className={`flex-1 py-1 rounded-md text-[10px] font-mono font-bold transition-all ${
                              spacingScale === s
                                ? 'bg-[#0A0A0A] text-white'
                                : 'bg-[#F4F4F5] text-[#71717A] hover:bg-[#E4E4E7]'
                            }`}
                          >
                            {s}p
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Phase 03: Design — Liquid Glass Material & Interactive Studio */}
                {activeStepIndex === 2 && (
                  <div className="p-5 rounded-2xl glass-medium border border-[#E5E7EB] space-y-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                      <span>{isRTL ? 'متریال تعاملی Liquid Glass' : 'LIQUID GLASS SHADER TEST'}</span>
                      <span className="text-[#0A0A0A] font-bold">BLUR 20px / SAT 190%</span>
                    </div>

                    {/* Interactive Glass Component */}
                    <div className="p-4 rounded-xl bg-white/60 border border-[#E5E7EB] flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white">
                          <Maximize2 size={14} />
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-[#0A0A0A]">
                            {isRTL ? 'ارگونومی لمسی ۴۴px' : '44px Touch Boundary'}
                          </span>
                          <span className="block text-[10px] font-mono text-[#71717A]">
                            {isRTL ? 'منطقه لمس بهینه موبایل' : 'WCAG 2.5.5 PASS'}
                          </span>
                        </div>
                      </div>

                      {/* Tactile Switch */}
                      <button
                        onClick={() => setGlassActiveToggle(!glassActiveToggle)}
                        className={`w-11 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                          glassActiveToggle ? 'bg-[#0A0A0A]' : 'bg-[#D4D4D8]'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-white transition-transform ${
                            glassActiveToggle ? (isRTL ? '-translate-x-5' : 'translate-x-5') : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                )}

                {/* Phase 04: Build — Kinetic 60fps Spring Motion & AST Code */}
                {activeStepIndex === 3 && (
                  <div className="p-5 rounded-2xl bg-[#0A0A0A] text-white space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                      <span className="flex items-center gap-1.5">
                        <Zap size={12} className="text-amber-400" />
                        GSAP_SPRING_AST.TS
                      </span>
                      <span className="text-emerald-400 font-bold">60 FPS VERIFIED</span>
                    </div>

                    <div className="font-mono text-[11px] text-white/90 space-y-1 bg-[#18181B] p-3 rounded-lg border border-white/10 select-all">
                      <div><span className="text-purple-400">export const</span> motionSpec = &#123;</div>
                      <div className="ps-3">ease: <span className="text-emerald-400">&apos;cubic-bezier(0.16, 1, 0.3, 1)&apos;</span>,</div>
                      <div className="ps-3">duration: <span className="text-amber-400">0.85</span>,</div>
                      <div className="ps-3">stagger: <span className="text-blue-400">0.08</span>,</div>
                      <div>&#125;;</div>
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
            {isRTL ? 'اسکرول کنید تا مراحل بعدی متدولوژی آشکار شوند' : 'SCROLL TO ADVANCE METHODOLOGY PHASES'}
          </span>
        </div>
      </div>
    </section>
  );
};
