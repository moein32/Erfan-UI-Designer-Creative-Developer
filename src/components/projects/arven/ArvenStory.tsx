import React from 'react';
import { ProjectData } from '../../../types';
import { Sparkles, ArrowUpRight, Check, Brain, Calendar, CheckSquare, Layers } from 'lucide-react';
import { useCursor } from '../../../context/CursorContext';

interface ArvenStoryProps {
  project: ProjectData;
  activeChapterIndex: number;
  onSelectChapter: (idx: number) => void;
  onOpenCaseStudy: () => void;
  isPersianMode?: boolean;
}

const CHAPTERS = [
  {
    number: '01',
    id: 'think',
    title: 'THINK',
    subtitle: 'Neural Intelligence & Contextual Feed',
    persianTitle: 'تفکر و پردازش هوشمند',
    description:
      'Arven predicts daily leverage points, auto-synthesizes meetings, and generates context-aware briefs before your day starts.',
    icon: Sparkles,
  },
  {
    number: '02',
    id: 'organize',
    title: 'ORGANIZE',
    subtitle: 'Autonomous Task Decomposition',
    persianTitle: 'سازماندهی و تفکیک وظایف',
    description:
      'Large cognitive hurdles decompose into 45-minute focus sprints with dynamic priority tracking and milestone tracking.',
    icon: CheckSquare,
  },
  {
    number: '03',
    id: 'plan',
    title: 'PLAN',
    subtitle: 'Cognitive Scheduling & Focus Shielding',
    persianTitle: 'برنامه‌ریزی و تمرکز عمیق',
    description:
      'Time-blocking matches your biological focus curve, automatically shielding deep work windows from notification interruptions.',
    icon: Calendar,
  },
  {
    number: '04',
    id: 'create',
    title: 'CREATE',
    subtitle: 'Multimodal Knowledge Synthesis',
    persianTitle: 'سنتز دانش و پردازش خلاق',
    description:
      'A friction-free second brain connecting product notes, design tokens, and recurring insights into structured knowledge maps.',
    icon: Brain,
  },
];

export const ArvenStory: React.FC<ArvenStoryProps> = ({
  project,
  activeChapterIndex,
  onSelectChapter,
  onOpenCaseStudy,
  isPersianMode = false,
}) => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <div className="space-y-10 lg:space-y-12">
      {/* Editorial Title & Core Hook */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E9F1] text-[11px] font-mono font-bold text-[#5146E5] shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5146E5] animate-pulse" />
          <span>AI PRODUCTIVITY EXPERIENCE</span>
        </div>

        <div className="space-y-2">
          <h2
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#111116] cursor-pointer hover:opacity-85 transition-opacity"
            onClick={onOpenCaseStudy}
            onMouseEnter={() => setCursor({ type: 'project', text: 'VIEW ↗' })}
            onMouseLeave={resetCursor}
          >
            ARVEN
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-[#444449] tracking-tight">
            {isPersianMode ? 'دستیار هوشمند کارآمدی و محیط کار شناختی' : project.tagline}
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#666664] leading-relaxed max-w-xl">
          {project.overview}
        </p>
      </div>

      {/* 4 Interactive Story Chapters */}
      <div className="space-y-3 pt-2">
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#888884] uppercase block">
          SYSTEM WORKFLOW CHAPTERS
        </span>

        <div className="space-y-2.5">
          {CHAPTERS.map((ch, idx) => {
            const isActive = activeChapterIndex === idx;
            const Icon = ch.icon;
            return (
              <div
                key={ch.id}
                onClick={() => onSelectChapter(idx)}
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#5146E5] shadow-md shadow-[#5146E5]/10 translate-x-1 sm:translate-x-2'
                    : 'bg-white/60 border-[#E8E8E4] hover:bg-white hover:border-[#D1D1CF]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#5146E5] text-white shadow-xs'
                        : 'bg-[#F0F2F8] text-[#73788C]'
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#888884]">
                          {ch.number}
                        </span>
                        <h3 className="font-display text-base sm:text-lg font-bold text-[#111116]">
                          {ch.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-[#5146E5] font-semibold">
                        {isActive ? 'ACTIVE VIEW' : ''}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#555558] mt-1 leading-relaxed">
                      {ch.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Deep Dive Action */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          onClick={onOpenCaseStudy}
          id={`view-case-study-${project.id}`}
          className="group px-7 py-3.5 rounded-full bg-[#111116] text-[#F7F7F5] text-xs font-mono font-bold tracking-wider hover:bg-[#2A2A2E] transition-all flex items-center gap-2 shadow-md active:scale-95 cursor-pointer"
          onMouseEnter={() => setCursor({ type: 'project', text: 'EXPLORE ↗' })}
          onMouseLeave={resetCursor}
        >
          <span>EXPLORE FULL ARVEN CASE STUDY</span>
          <ArrowUpRight
            size={15}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#777774]">
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.client}</span>
        </div>
      </div>
    </div>
  );
};
