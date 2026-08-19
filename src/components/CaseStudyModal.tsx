import React, { useEffect, useState, useRef } from 'react';
import { ProjectData } from '../types';
import { useCursor } from '../context/CursorContext';
import {
  X,
  ArrowUpRight,
  CheckCircle,
  Layers,
  Palette,
  Type,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  User,
  Compass,
} from 'lucide-react';
import { IphoneMockup } from './IphoneMockup';
import { OvaraPhoneScene } from './projects/ovara/OvaraPhoneScene';
import { PROJECTS } from '../data/projectsData';

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onSelectProject?: (project: ProjectData) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const { setCursor, resetCursor } = useCursor();
  const [activeSection, setActiveSection] = useState('overview');
  const [modalScreenIndex, setModalScreenIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const chapters = [
    { id: 'overview', label: '01 Overview' },
    { id: 'challenge', label: '02 Challenge & Friction' },
    { id: 'solution', label: '03 System Architecture' },
    { id: 'tokens', label: '04 Design Tokens' },
    { id: 'simulation', label: '05 Device Studio' },
    { id: 'impact', label: '06 Measurable Impact' },
  ];

  const scrollToChapter = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(`cs-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="case-study-fullscreen-takeover"
      ref={scrollContainerRef}
      className="fixed inset-0 z-[9000] bg-[#F7F7F5] overflow-y-auto text-[#111111] animate-in fade-in duration-300 select-text"
    >
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#d1d1cf] px-6 md:px-12 py-4 flex items-center justify-between transition-all">
        {/* Breadcrumb Info */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#777777] hover:text-[#111111] transition-colors"
            onMouseEnter={() => setCursor({ type: 'button' })}
            onMouseLeave={resetCursor}
          >
            <ChevronLeft size={14} />
            <span>PORTFOLIO</span>
          </button>
          <span className="text-[#CCCCCC]">/</span>
          <span className="text-xs font-mono font-bold text-[#111111]">{project.title}</span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#888888] px-2 py-0.5 rounded-full bg-[#111111]/5">
            0{currentIndex + 1} of 0{PROJECTS.length}
          </span>
        </div>

        {/* Quick Chapter Jump on Desktop */}
        <div className="hidden lg:flex items-center gap-1 bg-[#FFFFFF] border border-[#d1d1cf] rounded-full px-3 py-1 shadow-xs">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="px-2.5 py-1 text-[11px] font-mono rounded-full hover:bg-[#111111]/5 transition-colors text-[#555555] hover:text-[#111111]"
            >
              {ch.label.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Close Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            id="close-fullscreen-cs-btn"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#F7F7F5] hover:bg-[#2A2A2A] text-xs font-mono font-bold transition-all shadow-xs"
            onMouseEnter={() => setCursor({ type: 'button', text: 'CLOSE' })}
            onMouseLeave={resetCursor}
          >
            <span>ESC / CLOSE</span>
            <X size={14} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-24">
        
        {/* 01 / HERO & EXECUTIVE SUMMARY */}
        <section id="cs-overview" className="space-y-10">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border"
                style={{
                  backgroundColor: `${project.accentColor}12`,
                  borderColor: `${project.accentColor}35`,
                  color: project.accentColor,
                }}
              >
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#777777]">{project.year} Release</span>
              <span className="text-xs font-mono text-[#777777]">·</span>
              <span className="text-xs font-mono text-[#777777]">{project.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#111111] leading-[0.98]">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#444444] leading-snug max-w-3xl">
              {project.tagline}
            </p>

            {project.persianTitle && (
              <div className="font-persian text-lg sm:text-xl text-[#777777] pt-1">
                {project.persianTitle}
              </div>
            )}
          </div>

          {/* Project Spec Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#d1d1cf] shadow-xs">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider flex items-center gap-1.5">
                <User size={13} /> CLIENT
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#111111]">
                {project.client}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={13} /> ROLE & SCOPE
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#111111]">
                {project.role}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider flex items-center gap-1.5">
                <Clock size={13} /> TIMELINE
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#111111]">
                {project.timeline}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider flex items-center gap-1.5">
                <Compass size={13} /> PLATFORM
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#111111]">
                iOS 18 + Web App
              </div>
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="prose prose-lg max-w-none text-[#555555] leading-relaxed text-base sm:text-lg">
            <p>{project.overview}</p>
          </div>
        </section>

        {/* 02 / THE CHALLENGE VS SYSTEMIC SOLUTION */}
        <section id="cs-challenge" className="space-y-8 pt-8 border-t border-[#d1d1cf]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#777777] uppercase">
            <span className="font-bold text-[#111111]">02</span>
            <span>/</span>
            <span>STRATEGIC CONTEXT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#d1d1cf] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0F0EC]">
                <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">
                  THE CHALLENGE & FRICTION
                </span>
                <span className="text-xs font-mono text-[#888888]">PRE-INTERVENTION</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#111111]">
                Cognitive Overload & System Breakdown
              </h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#d1d1cf] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0F0EC]">
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                  THE SYSTEMIC SOLUTION
                </span>
                <span className="text-xs font-mono text-[#888888]">POST-INTERVENTION</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#111111]">
                Architectural Clarity & Kinetic Flow
              </h3>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* 03 / INTERACTIVE SIMULATION STAGE */}
        <section id="cs-simulation" className="space-y-8 pt-8 border-t border-[#d1d1cf]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#777777] uppercase">
            <span className="font-bold text-[#111111]">03</span>
            <span>/</span>
            <span>LIVE INTERACTIVE SIMULATION</span>
          </div>

          <div className="rounded-[36px] bg-[#111111] text-[#F7F7F5] p-8 sm:p-12 md:p-16 border border-[#222222] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/90">
                <Sparkles size={13} className="text-emerald-400" />
                <span>DYNAMIC HARDWARE EMULATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Inspect Every State On Device
              </h2>

              <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed">
                Experience tactile micro-interactions, active dynamic island notifications, and customized typographic scales directly on this simulated iPhone 16 Pro chassis.
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest block">
                  INCLUDED PROTOTYPE SCREENS
                </span>
                <div className="space-y-2">
                  {project.appScreens.map((sc, i) => (
                    <div
                      key={sc.id}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="font-bold text-white">{sc.title}</span>
                      </div>
                      <span className="text-white/50">{sc.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full max-w-[340px] shrink-0">
              {project.id === 'ovara' ? (
                <OvaraPhoneScene
                  activeScreenIndex={modalScreenIndex}
                  onScreenChange={setModalScreenIndex}
                  isInteractive={true}
                />
              ) : (
                <IphoneMockup project={project} />
              )}
            </div>
          </div>
        </section>

        {/* 04 / DESIGN SYSTEM TOKENS & TYPOGRAPHY */}
        <section id="cs-tokens" className="space-y-8 pt-8 border-t border-[#d1d1cf]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#777777] uppercase">
            <span className="font-bold text-[#111111]">04</span>
            <span>/</span>
            <span>DESIGN SYSTEM TOKENS</span>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#d1d1cf] shadow-xs space-y-10">
            {/* Color Tokens */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-[#111111] flex items-center gap-2">
                  <Palette size={20} className="text-[#FF5C39]" />
                  <span>Semantic Color Palette</span>
                </h3>
                <span className="text-xs font-mono text-[#888888]">WCAG 2.1 AA Compliant</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.colorPalette.map((col) => (
                  <div
                    key={col.name}
                    className="p-4 rounded-2xl border border-[#d1d1cf] bg-[#F7F7F5] flex flex-col justify-between h-36"
                  >
                    <div
                      className="w-full h-14 rounded-xl border border-black/10 shadow-xs"
                      style={{ backgroundColor: col.hex }}
                    />
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between text-xs font-mono font-bold">
                        <span>{col.name}</span>
                        <span className="text-[#777777]">{col.hex}</span>
                      </div>
                      <span className="text-[10px] text-[#888888] block truncate">{col.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Tokens */}
            <div className="space-y-4 pt-6 border-t border-[#F0F0EC]">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-[#111111] flex items-center gap-2">
                  <Type size={20} className="text-[#6366F1]" />
                  <span>Typographic Architecture</span>
                </h3>
                <span className="text-xs font-mono text-[#888888]">Bilingual Metric Harmony</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.typography.map((t) => (
                  <div
                    key={t.font}
                    className="p-6 rounded-2xl bg-[#F7F7F5] border border-[#d1d1cf] space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#888888]">
                      <span>{t.usage}</span>
                      <span className="font-bold text-[#111111]">{t.font}</span>
                    </div>
                    <p className="text-lg font-persian font-medium text-[#222222] italic pt-1">
                      "{t.sample}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 05 / QUANTIFIED BUSINESS IMPACT */}
        <section id="cs-impact" className="space-y-8 pt-8 border-t border-[#d1d1cf]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#777777] uppercase">
            <span className="font-bold text-[#111111]">05</span>
            <span>/</span>
            <span>MEASURABLE OUTCOMES</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#d1d1cf] shadow-xs text-left"
              >
                <div
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2"
                  style={{ color: project.accentColor }}
                >
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#555555]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Shipped Deliverables */}
          <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#d1d1cf] shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>COMMISSIONED ARTIFACTS & DELIVERABLES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs font-mono text-[#444444] p-2.5 rounded-xl bg-[#F7F7F5] border border-[#E8E8E4]"
                >
                  <CheckCircle size={13} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 / NEXT PROJECT SEAMLESS NAVIGATOR */}
        <section className="pt-12 border-t border-[#d1d1cf] space-y-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#777777] uppercase tracking-widest">
              NEXT CASE STUDY
            </span>
            <span className="text-xs font-mono text-[#888888]">0{PROJECTS.indexOf(nextProject) + 1} OF 05</span>
          </div>

          <div
            onClick={() => onSelectProject?.(nextProject)}
            className="group p-8 sm:p-12 rounded-3xl bg-[#111111] text-[#F7F7F5] border border-[#222222] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer hover:bg-[#1A1A1A] transition-all"
            onMouseEnter={() => setCursor({ type: 'button', text: 'EXPLORE' })}
            onMouseLeave={resetCursor}
          >
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                {nextProject.category}
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight group-hover:text-[#FF5C39] transition-colors">
                {nextProject.title} — {nextProject.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] font-mono">
                {nextProject.client} · {nextProject.year}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <ArrowUpRight size={24} />
            </div>
          </div>

          <div className="flex items-center justify-between pt-6">
            <button
              onClick={() => onSelectProject?.(prevProject)}
              className="flex items-center gap-2 text-xs font-mono font-bold text-[#555555] hover:text-[#111111] transition-colors"
            >
              <ChevronLeft size={14} />
              <span>PREVIOUS: {prevProject.title}</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#111111] text-[#F7F7F5] text-xs font-mono font-bold hover:bg-[#2A2A2A] transition-colors"
            >
              RETURN TO MAIN FEED
            </button>
          </div>
        </section>

      </main>
    </div>
  );
};

