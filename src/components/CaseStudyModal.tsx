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
import { ArvenPhoneScene } from './projects/arven/ArvenPhoneScene';
import { NivraPhoneScene } from './projects/nivra/NivraPhoneScene';
import { VaryaPhoneScene } from './projects/varya/VaryaPhoneScene';
import { ZarvandPhoneScene } from './projects/zarvand/ZarvandPhoneScene';
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
      className="fixed inset-0 z-[9000] bg-[#FFFFFF] overflow-y-auto text-[#0A0A0A] animate-in fade-in duration-300 select-text"
    >
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E5E7EB] px-6 md:px-12 py-4 flex items-center justify-between transition-all">
        {/* Breadcrumb Info */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#71717A] hover:text-[#0A0A0A] transition-colors cursor-pointer"
            onMouseEnter={() => setCursor({ type: 'button' })}
            onMouseLeave={resetCursor}
          >
            <ChevronLeft size={14} />
            <span>PORTFOLIO</span>
          </button>
          <span className="text-[#E5E7EB]">/</span>
          <span className="text-xs font-mono font-bold text-[#0A0A0A]">{project.title}</span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#71717A] px-2 py-0.5 rounded-full bg-[#0A0A0A]/5">
            0{currentIndex + 1} of 0{PROJECTS.length}
          </span>
        </div>

        {/* Quick Chapter Jump on Desktop */}
        <div className="hidden lg:flex items-center gap-1 bg-[#FAFAFA] border border-[#E5E7EB] rounded-full px-3 py-1 shadow-xs">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="px-2.5 py-1 text-[11px] font-mono rounded-full hover:bg-[#0A0A0A]/5 transition-colors text-[#71717A] hover:text-[#0A0A0A] cursor-pointer"
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
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] text-[#FFFFFF] hover:bg-[#27272A] text-xs font-mono font-bold transition-all shadow-xs cursor-pointer"
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
              <span className="text-xs font-mono text-[#71717A]">{project.year} Release</span>
              <span className="text-xs font-mono text-[#E5E7EB]">·</span>
              <span className="text-xs font-mono text-[#71717A]">{project.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#0A0A0A] leading-[0.98]">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#3F3F46] leading-snug max-w-3xl">
              {project.tagline}
            </p>

            {project.persianTitle && (
              <div className="font-persian text-lg sm:text-xl text-[#71717A] pt-1">
                {project.persianTitle}
              </div>
            )}
          </div>

          {/* Project Spec Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[#FAFAFA] border border-[#E5E7EB] shadow-xs">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider flex items-center gap-1.5">
                <User size={13} /> CLIENT
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#0A0A0A]">
                {project.client}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={13} /> ROLE & SCOPE
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#0A0A0A]">
                {project.role}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider flex items-center gap-1.5">
                <Clock size={13} /> TIMELINE
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#0A0A0A]">
                {project.timeline}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider flex items-center gap-1.5">
                <Compass size={13} /> PLATFORM
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#0A0A0A]">
                iOS 18 + Web App
              </div>
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="prose prose-lg max-w-none text-[#52525B] leading-relaxed text-base sm:text-lg">
            <p>{project.overview}</p>
          </div>
        </section>

        {/* 02 / THE CHALLENGE VS SYSTEMIC SOLUTION */}
        <section id="cs-challenge" className="space-y-8 pt-8 border-t border-[#E5E7EB]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#71717A] uppercase">
            <span className="font-bold text-[#0A0A0A]">02</span>
            <span>/</span>
            <span>STRATEGIC CONTEXT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-[#E5E7EB] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">
                  THE CHALLENGE & FRICTION
                </span>
                <span className="text-xs font-mono text-[#71717A]">PRE-INTERVENTION</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0A0A0A]">
                Cognitive Overload & System Breakdown
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-[#E5E7EB] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                  THE SYSTEMIC SOLUTION
                </span>
                <span className="text-xs font-mono text-[#71717A]">POST-INTERVENTION</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0A0A0A]">
                Architectural Clarity & Kinetic Flow
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* 03 / INTERACTIVE SIMULATION STAGE */}
        <section id="cs-simulation" className="space-y-8 pt-8 border-t border-[#E5E7EB]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#71717A] uppercase">
            <span className="font-bold text-[#0A0A0A]">03</span>
            <span>/</span>
            <span>LIVE INTERACTIVE SIMULATION</span>
          </div>

          <div className="rounded-[36px] bg-[#0A0A0A] text-[#FFFFFF] p-8 sm:p-12 md:p-16 border border-[#27272A] shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/90">
                <Sparkles size={13} className="text-emerald-400" />
                <span>DYNAMIC HARDWARE EMULATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Inspect Every State On Device
              </h2>

              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
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
              ) : project.id === 'arven' ? (
                <ArvenPhoneScene
                  activeChapterIndex={modalScreenIndex}
                  onChapterChange={setModalScreenIndex}
                  isInteractive={true}
                />
              ) : project.id === 'nivra' ? (
                <NivraPhoneScene
                  activeChapterIndex={modalScreenIndex}
                  onChapterChange={setModalScreenIndex}
                  isInteractive={true}
                />
              ) : project.id === 'varya' || project.id === 'veyra' ? (
                <VaryaPhoneScene
                  activeChapterIndex={modalScreenIndex}
                  onChapterChange={setModalScreenIndex}
                  isInteractive={true}
                />
              ) : project.id === 'zarvand' ? (
                <ZarvandPhoneScene
                  activeChapterIndex={modalScreenIndex}
                  onChapterChange={setModalScreenIndex}
                  isInteractive={true}
                />
              ) : (
                <IphoneMockup project={project} />
              )}
            </div>
          </div>
        </section>

        {/* 04 / DESIGN SYSTEM TOKENS & TYPOGRAPHY */}
        <section id="cs-tokens" className="space-y-8 pt-8 border-t border-[#E5E7EB]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#71717A] uppercase">
            <span className="font-bold text-[#0A0A0A]">04</span>
            <span>/</span>
            <span>DESIGN SYSTEM TOKENS</span>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-[#E5E7EB] shadow-xs space-y-10">
            {/* Color Tokens */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-[#0A0A0A] flex items-center gap-2">
                  <Palette size={20} className="text-[#0A0A0A]" />
                  <span>Semantic Color Palette</span>
                </h3>
                <span className="text-xs font-mono text-[#71717A]">WCAG 2.1 AA Compliant</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.colorPalette.map((col) => (
                  <div
                    key={col.name}
                    className="p-4 rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] flex flex-col justify-between h-36"
                  >
                    <div
                      className="w-full h-14 rounded-xl border border-black/10 shadow-xs"
                      style={{ backgroundColor: col.hex }}
                    />
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between text-xs font-mono font-bold">
                        <span>{col.name}</span>
                        <span className="text-[#71717A]">{col.hex}</span>
                      </div>
                      <span className="text-[10px] text-[#71717A] block truncate">{col.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Tokens */}
            <div className="space-y-4 pt-6 border-t border-[#E5E7EB]">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-[#0A0A0A] flex items-center gap-2">
                  <Type size={20} className="text-[#0A0A0A]" />
                  <span>Typographic Architecture</span>
                </h3>
                <span className="text-xs font-mono text-[#71717A]">Bilingual Metric Harmony</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.typography.map((t) => (
                  <div
                    key={t.font}
                    className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                      <span>{t.usage}</span>
                      <span className="font-bold text-[#0A0A0A]">{t.font}</span>
                    </div>
                    <p className="text-lg font-persian font-medium text-[#0A0A0A] italic pt-1">
                      "{t.sample}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 05 / QUANTIFIED BUSINESS IMPACT */}
        <section id="cs-impact" className="space-y-8 pt-8 border-t border-[#E5E7EB]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#71717A] uppercase">
            <span className="font-bold text-[#0A0A0A]">05</span>
            <span>/</span>
            <span>MEASURABLE OUTCOMES</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 sm:p-8 rounded-3xl bg-[#FAFAFA] border border-[#E5E7EB] shadow-xs text-left"
              >
                <div
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2"
                  style={{ color: project.accentColor }}
                >
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#52525B]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Shipped Deliverables */}
          <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-[#E5E7EB] shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] uppercase tracking-wider">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>COMMISSIONED ARTIFACTS & DELIVERABLES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs font-mono text-[#3F3F46] p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB]"
                >
                  <CheckCircle size={13} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 / NEXT PROJECT SEAMLESS NAVIGATOR */}
        <section className="pt-12 border-t border-[#E5E7EB] space-y-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">
              NEXT CASE STUDY
            </span>
            <span className="text-xs font-mono text-[#71717A]">0{PROJECTS.indexOf(nextProject) + 1} OF 05</span>
          </div>

          <div
            onClick={() => onSelectProject?.(nextProject)}
            className="group p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] text-[#FFFFFF] border border-[#27272A] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer hover:bg-[#18181B] transition-all"
            onMouseEnter={() => setCursor({ type: 'button', text: 'EXPLORE' })}
            onMouseLeave={resetCursor}
          >
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                {nextProject.category}
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight group-hover:text-[#A1A1AA] transition-colors">
                {nextProject.title} — {nextProject.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] font-mono">
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
              className="flex items-center gap-2 text-xs font-mono font-bold text-[#71717A] hover:text-[#0A0A0A] transition-colors cursor-pointer"
            >
              <ChevronLeft size={14} />
              <span>PREVIOUS: {prevProject.title}</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#0A0A0A] text-[#FFFFFF] text-xs font-mono font-bold hover:bg-[#27272A] transition-colors cursor-pointer"
            >
              RETURN TO MAIN FEED
            </button>
          </div>
        </section>

      </main>
    </div>
  );
};

