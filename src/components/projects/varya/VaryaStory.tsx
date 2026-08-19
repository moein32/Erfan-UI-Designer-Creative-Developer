import React from 'react';
import { ProjectData } from '../../../types';
import { Sparkles, ArrowUpRight, Activity, Moon, Bot, Heart } from 'lucide-react';
import { useCursor } from '../../../context/CursorContext';

interface VaryaStoryProps {
  project: ProjectData;
  activeChapterIndex: number;
  onSelectChapter: (idx: number) => void;
  onOpenCaseStudy: () => void;
  isPersianMode?: boolean;
}

const CHAPTERS = [
  {
    number: '01',
    id: 'equilibrium',
    title: 'EQUILIBRIUM',
    subtitle: 'Daily Bio-Score & Circadian Balance',
    persianTitle: 'تعادل زیستی و امتیاز سلامت',
    description:
      'Harmonizing heart rate variability, hydration, and mindful micro-rituals into a single living biometric score.',
    icon: Heart,
  },
  {
    number: '02',
    id: 'vitality',
    title: 'VITALITY',
    subtitle: 'Kinetic Movement & Caloric Flow',
    persianTitle: 'پایش تحرک و پویایی هفتگی',
    description:
      'Calm, non-punitive activity tracking with multi-tier progress rings and adaptive workout journaling.',
    icon: Activity,
  },
  {
    number: '03',
    id: 'circadian',
    title: 'CIRCADIAN',
    subtitle: 'Deep Sleep Architecture & Recovery',
    persianTitle: 'معماری خواب عمیق و ریکاوری',
    description:
      'Chronobiology-aligned sleep staging, restorative delta wave tracking, and proactive bedtime guidance.',
    icon: Moon,
  },
  {
    number: '04',
    id: 'intelligence',
    title: 'INTELLIGENCE',
    subtitle: 'AI Wellness Companion & Nutrition',
    persianTitle: 'مربی هوشمند و تغذیه آگاهانه',
    description:
      'Context-aware conversational health guidance with proactive recovery stretches and balanced nutrition insights.',
    icon: Bot,
  },
];

export const VaryaStory: React.FC<VaryaStoryProps> = ({
  project,
  activeChapterIndex,
  onSelectChapter,
  onOpenCaseStudy,
  isPersianMode = false,
}) => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <div className="space-y-10 lg:space-y-12">
      {/* Editorial Title & Subtitle */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9E9F1] text-[11px] font-mono font-bold text-[#6F62E8] shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#55C99B] animate-pulse" />
          <span>CIRCADIAN WELLNESS & BIOMETRICS</span>
        </div>

        <div className="space-y-2">
          <h2
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#111116] cursor-pointer hover:opacity-85 transition-opacity"
            onClick={onOpenCaseStudy}
            onMouseEnter={() => setCursor({ type: 'project', text: 'VIEW ↗' })}
            onMouseLeave={resetCursor}
          >
            VARYA
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-[#444449] tracking-tight">
            {isPersianMode ? 'ویرا — سلامت، تندرستی و ریتم زیستی' : project.tagline}
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#666664] leading-relaxed max-w-xl">
          {project.overview}
        </p>
      </div>

      {/* 4 Interactive Story Chapters */}
      <div className="space-y-3 pt-2">
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#888884] uppercase block">
          CIRCADIAN WORKFLOW CHAPTERS
        </span>

        <div className="space-y-2.5">
          {CHAPTERS.map((chapter, idx) => {
            const isActive = activeChapterIndex === idx;
            const Icon = chapter.icon;

            return (
              <div
                key={chapter.id}
                onClick={() => onSelectChapter(idx)}
                onMouseEnter={() => setCursor({ type: 'interactive', text: 'EXPLORE' })}
                onMouseLeave={resetCursor}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#6F62E8]/40 shadow-[0_10px_30px_rgba(111,98,232,0.08)] ring-1 ring-[#6F62E8]/20'
                    : 'bg-white/40 border-black/5 hover:bg-white/80 hover:border-black/10'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? 'text-[#6F62E8]' : 'text-[#999994]'
                      }`}
                    >
                      {chapter.number}
                    </span>
                    <div>
                      <h4 className="text-base font-extrabold text-[#111116] tracking-tight">
                        {chapter.title}
                      </h4>
                      <p className="text-xs text-[#666664]">
                        {isPersianMode ? chapter.persianTitle : chapter.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#EEEAFF] text-[#6F62E8]'
                        : 'bg-black/5 text-[#888884]'
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                {isActive && (
                  <p className="mt-3 pt-3 border-t border-black/5 text-xs sm:text-sm text-[#555552] leading-relaxed animate-fadeIn">
                    {chapter.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Call-to-Action */}
      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          onClick={onOpenCaseStudy}
          onMouseEnter={() => setCursor({ type: 'action', text: 'OPEN' })}
          onMouseLeave={resetCursor}
          className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#111116] text-white font-bold text-sm tracking-wide shadow-lg shadow-black/10 hover:bg-[#6F62E8] hover:shadow-[#6F62E8]/25 transition-all duration-300 group"
        >
          <span>VIEW FULL CASE STUDY</span>
          <ArrowUpRight
            size={18}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </button>

        <span className="text-xs text-[#888884] font-mono">
          {project.timeline} · {project.role}
        </span>
      </div>
    </div>
  );
};
