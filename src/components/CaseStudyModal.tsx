import React, { useEffect, useState, useRef } from 'react';
import { ProjectData } from '../types';
import { useCursor } from '../context/CursorContext';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  ArrowUpRight,
  CheckCircle,
  Palette,
  Type,
  Sparkles,
  ChevronLeft,
  ShieldCheck,
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
  const { t, isRTL, formatNumber } = useLanguage();
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

  const chapters = isRTL
    ? [
        { id: 'overview', label: '۰۱ بررسی اجمالی' },
        { id: 'challenge', label: '۰۲ چالش و حل مسئله' },
        { id: 'simulation', label: '۰۳ شبیه‌ساز دستگاه' },
        { id: 'tokens', label: '۰۴ سیستم طراحی' },
        { id: 'impact', label: '۰۵ نتایج و شاخص‌ها' },
      ]
    : [
        { id: 'overview', label: '01 Overview' },
        { id: 'challenge', label: '02 Challenge & Solution' },
        { id: 'simulation', label: '03 Device Studio' },
        { id: 'tokens', label: '04 Design System' },
        { id: 'impact', label: '05 Measurable Impact' },
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
      className="fixed inset-0 z-[9000] bg-[#030304] overflow-y-auto text-[#F5F5F7] animate-in fade-in duration-300 select-text"
    >
      {/* Sticky Top Navigation Bar with Dark Liquid Glass */}
      <header className="sticky top-0 z-50 glass-strong border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between transition-all">
        {/* Breadcrumb Info */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
            onMouseEnter={() => setCursor({ type: 'button' })}
            onMouseLeave={resetCursor}
          >
            <ChevronLeft size={14} className={isRTL ? 'rotate-180' : ''} />
            <span>{isRTL ? 'بازگشت به نمونه‌کارها' : 'PORTFOLIO'}</span>
          </button>
          <span className="text-white/20">/</span>
          <span className="text-xs font-mono font-bold text-[#F5F5F7]">
            {isRTL && project.persianTitle ? project.persianTitle : project.title}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#A1A1AA] px-2.5 py-0.5 rounded-full glass-subtle border border-white/10">
            {isRTL ? `پروژه ${formatNumber(currentIndex + 1)} از ${formatNumber(PROJECTS.length)}` : `0${currentIndex + 1} of 0${PROJECTS.length}`}
          </span>
        </div>

        {/* Quick Chapter Jump on Desktop */}
        <div className="hidden lg:flex items-center gap-1 glass-subtle border border-white/10 rounded-full px-3 py-1 shadow-sm">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="px-2.5 py-1 text-[11px] font-mono rounded-full hover:bg-white/10 transition-colors text-[#A1A1AA] hover:text-white cursor-pointer"
            >
              {ch.label}
            </button>
          ))}
        </div>

        {/* Close Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            id="close-fullscreen-cs-btn"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-[#E4E4E7] text-xs font-mono font-bold transition-all shadow-md cursor-pointer"
            onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.close })}
            onMouseLeave={resetCursor}
          >
            <span>{t.cursor.close}</span>
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
                className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border glass-subtle text-[#F5F5F7] border-white/10"
              >
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#71717A]">{formatNumber(project.year)} {isRTL ? 'منتشر شده' : 'Release'}</span>
              <span className="text-xs font-mono text-white/20">·</span>
              <span className="text-xs font-mono text-[#A1A1AA]">{project.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#F5F5F7] leading-[0.98]">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#A1A1AA] leading-snug max-w-3xl">
              {project.tagline}
            </p>

            {project.persianTitle && (
              <div className="text-lg sm:text-xl text-[#71717A] pt-1">
                {project.persianTitle}
              </div>
            )}
          </div>

          {/* Project Spec Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[#0D0D11]/90 border border-white/10 shadow-lg">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider flex items-center gap-1.5">
                <User size={13} /> {isRTL ? 'کارفرما' : 'CLIENT'}
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#F5F5F7]">
                {project.client}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={13} /> {isRTL ? 'نقش و محدوده' : 'ROLE & SCOPE'}
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#F5F5F7]">
                {project.role}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider flex items-center gap-1.5">
                <Clock size={13} /> {isRTL ? 'مدت زمان' : 'TIMELINE'}
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#F5F5F7]">
                {project.timeline}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider flex items-center gap-1.5">
                <Compass size={13} /> {isRTL ? 'پلتفرم' : 'PLATFORM'}
              </span>
              <div className="font-mono text-sm sm:text-base font-bold text-[#F5F5F7]">
                iOS 18 + Web App
              </div>
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="prose prose-lg max-w-none text-[#A1A1AA] leading-relaxed text-base sm:text-lg">
            <p>{project.overview}</p>
          </div>
        </section>

        {/* 02 / THE CHALLENGE VS SYSTEMIC SOLUTION */}
        <section id="cs-challenge" className="space-y-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#71717A] uppercase">
            <span className="font-bold text-[#F5F5F7]">{formatNumber('02')}</span>
            <span>/</span>
            <span>{isRTL ? 'زمینه استراتژیک و معماری' : 'STRATEGIC CONTEXT'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#0D0D11]/90 border border-white/10 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-[#F5F5F7] uppercase tracking-wider">
                  {isRTL ? 'چالش و نقاط اصطکاک' : 'THE CHALLENGE & FRICTION'}
                </span>
                <span className="text-xs font-mono text-[#71717A]">{isRTL ? 'قبل از طراحی' : 'PRE-INTERVENTION'}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F5F5F7]">
                {isRTL ? 'بار شناختی و عدم یکپارچگی سیستم' : 'Cognitive Overload & System Breakdown'}
              </h3>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D0D11]/90 border border-white/10 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  {isRTL ? 'راه‌حل سیستمی و یکپارچه' : 'THE SYSTEMIC SOLUTION'}
                </span>
                <span className="text-xs font-mono text-[#71717A]">{isRTL ? 'پس از طراحی' : 'POST-INTERVENTION'}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#F5F5F7]">
                {isRTL ? 'وضوح ساختاری و جریان تعاملی' : 'Architectural Clarity & Kinetic Flow'}
              </h3>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* 03 / INTERACTIVE SIMULATION STAGE */}
        <section id="cs-simulation" className="space-y-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#71717A] uppercase">
            <span className="font-bold text-[#F5F5F7]">{formatNumber('03')}</span>
            <span>/</span>
            <span>{isRTL ? 'شبیه‌ساز تعاملی زنده' : 'LIVE INTERACTIVE SIMULATION'}</span>
          </div>

          <div className="rounded-[36px] bg-[#070709] text-[#F5F5F7] p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#F5F5F7]">
                <Sparkles size={13} className="text-emerald-400" />
                <span>{isRTL ? 'شبیه‌سازی سخت‌افزاری پویا' : 'DYNAMIC HARDWARE EMULATION'}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {isRTL ? 'بررسی تمام وضعیت‌ها روی دستگاه' : 'Inspect Every State On Device'}
              </h2>

              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                {isRTL
                  ? 'میکروتعاملات لمسی، اعلان‌های جزیره پویا (Dynamic Island) و مقیاس‌های تایپوگرافی را مستقیماً روی این بدنه شبیه‌سازی‌شده آیفون ۱۶ پرو تجربه کنید.'
                  : 'Experience tactile micro-interactions, active dynamic island notifications, and customized typographic scales directly on this simulated iPhone 16 Pro chassis.'}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-widest block">
                  {isRTL ? 'صفحات پروتوتایپ موجود' : 'INCLUDED PROTOTYPE SCREENS'}
                </span>
                <div className="space-y-2">
                  {project.appScreens.map((sc) => (
                    <div
                      key={sc.id}
                      className="p-3 rounded-xl bg-white/6 border border-white/10 text-xs font-mono flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="font-bold text-white">{sc.title}</span>
                      </div>
                      <span className="text-[#A1A1AA]">{sc.description}</span>
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
        <section id="cs-tokens" className="space-y-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#71717A] uppercase">
            <span className="font-bold text-[#F5F5F7]">{formatNumber('04')}</span>
            <span>/</span>
            <span>{isRTL ? 'توکن‌های سیستم طراحی' : 'DESIGN SYSTEM TOKENS'}</span>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0D11]/90 border border-white/10 shadow-lg space-y-10">
            {/* Color Tokens */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-[#F5F5F7] flex items-center gap-2">
                  <Palette size={20} className="text-[#F5F5F7]" />
                  <span>{isRTL ? 'پالت رنگ‌های معنایی' : 'Semantic Color Palette'}</span>
                </h3>
                <span className="text-xs font-mono text-[#71717A]">WCAG 2.1 AA Compliant</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.colorPalette.map((col) => (
                  <div
                    key={col.name}
                    className="p-4 rounded-2xl border border-white/10 bg-[#131317] flex flex-col justify-between h-36"
                  >
                    <div
                      className="w-full h-14 rounded-xl border border-white/10 shadow-xs"
                      style={{ backgroundColor: col.hex }}
                    />
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between text-xs font-mono font-bold">
                        <span className="text-[#F5F5F7]">{col.name}</span>
                        <span className="text-[#71717A]">{col.hex}</span>
                      </div>
                      <span className="text-[10px] text-[#A1A1AA] block truncate">{col.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Tokens */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-[#F5F5F7] flex items-center gap-2">
                  <Type size={20} className="text-[#F5F5F7]" />
                  <span>{isRTL ? 'معماری تایپوگرافی' : 'Typographic Architecture'}</span>
                </h3>
                <span className="text-xs font-mono text-[#71717A]">Bilingual Metric Harmony</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.typography.map((typ) => (
                  <div
                    key={typ.font}
                    className="p-6 rounded-2xl bg-[#131317] border border-white/10 space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                      <span>{typ.usage}</span>
                      <span className="font-bold text-[#F5F5F7]">{typ.font}</span>
                    </div>
                    <p className="text-lg font-medium text-[#F5F5F7] italic pt-1">
                      &quot;{typ.sample}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 05 / QUANTIFIED BUSINESS IMPACT */}
        <section id="cs-impact" className="space-y-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#71717A] uppercase">
            <span className="font-bold text-[#F5F5F7]">{formatNumber('05')}</span>
            <span>/</span>
            <span>{isRTL ? 'نتایج و دستاوردهای عددی' : 'MEASURABLE OUTCOMES'}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 sm:p-8 rounded-3xl bg-[#0D0D11]/90 border border-white/10 shadow-lg text-start"
              >
                <div
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2"
                  style={{ color: project.accentColor }}
                >
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#A1A1AA]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Shipped Deliverables */}
          <div className="p-8 rounded-3xl bg-[#0D0D11]/90 border border-white/10 shadow-lg space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F5F5F7] uppercase tracking-wider">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>{isRTL ? 'اقلام و خروجی‌های تحویل داده شده' : 'COMMISSIONED ARTIFACTS & DELIVERABLES'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs font-mono text-[#A1A1AA] p-2.5 rounded-xl bg-[#131317] border border-white/10"
                >
                  <CheckCircle size={13} className="text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 / NEXT PROJECT SEAMLESS NAVIGATOR */}
        <section className="pt-12 border-t border-white/10 space-y-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">
              {isRTL ? 'کیس‌استادی بعدی' : 'NEXT CASE STUDY'}
            </span>
            <span className="text-xs font-mono text-[#71717A]">
              {isRTL ? `${formatNumber(PROJECTS.indexOf(nextProject) + 1)} از ${formatNumber(5)}` : `0${PROJECTS.indexOf(nextProject) + 1} OF 05`}
            </span>
          </div>

          <div
            onClick={() => onSelectProject?.(nextProject)}
            className="group p-8 sm:p-12 rounded-3xl bg-[#0D0D11] text-[#F5F5F7] border border-white/10 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer hover:bg-[#131317] transition-all"
            onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.view })}
            onMouseLeave={resetCursor}
          >
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                {nextProject.category}
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight group-hover:text-white transition-colors">
                {nextProject.title} — {nextProject.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-[#71717A] font-mono">
                {nextProject.client} · {formatNumber(nextProject.year)}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <ArrowUpRight size={24} className={isRTL ? 'rotate-[-90deg]' : ''} />
            </div>
          </div>

          <div className="flex items-center justify-between pt-6">
            <button
              onClick={() => onSelectProject?.(prevProject)}
              className="flex items-center gap-2 text-xs font-mono font-bold text-[#71717A] hover:text-[#F5F5F7] transition-colors cursor-pointer"
            >
              <ChevronLeft size={14} className={isRTL ? 'rotate-180' : ''} />
              <span>{isRTL ? `پروژه قبلی: ${prevProject.title}` : `PREVIOUS: ${prevProject.title}`}</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold hover:bg-[#E4E4E7] transition-colors cursor-pointer"
            >
              {isRTL ? 'بازگشت به صفحه اصلی' : 'RETURN TO MAIN FEED'}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
