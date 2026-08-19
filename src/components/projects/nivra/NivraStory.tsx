import React from 'react';
import { ProjectData } from '../../../types';
import { Compass, ArrowUpRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { useCursor } from '../../../context/CursorContext';
import { useLanguage } from '../../../context/LanguageContext';

interface NivraStoryProps {
  project: ProjectData;
  activeChapterIndex: number;
  onSelectChapter: (idx: number) => void;
  onOpenCaseStudy: () => void;
  isPersianMode?: boolean;
}

const ICONS = [Compass, Calendar, MapPin, Sparkles];

export const NivraStory: React.FC<NivraStoryProps> = ({
  project,
  activeChapterIndex,
  onSelectChapter,
  onOpenCaseStudy,
}) => {
  const { setCursor, resetCursor } = useCursor();
  const { t, isRTL, formatNumber } = useLanguage();
  const pTrans = t.projects.nivra;

  const chapters = pTrans.storySteps;

  return (
    <div className="flex flex-col justify-between h-full space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 glass-subtle border border-white/10 text-[#F5F5F7] text-xs font-mono font-bold tracking-wider uppercase rounded-full">
            {isRTL ? 'پلتفرم سفر و ژئواسپیشیال' : 'GEOSPATIAL TRAVEL'}
          </span>
          <span className="text-xs font-mono text-[#A1A1AA]">{formatNumber(pTrans.year)}</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-display font-extrabold text-[#F5F5F7] mt-4 tracking-tight">
          {pTrans.title}
        </h3>
        <p className="text-base md:text-lg font-medium text-[#A1A1AA] mt-1">
          {pTrans.tagline}
        </p>

        <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mt-4 max-w-xl">
          {pTrans.overview}
        </p>
      </div>

      {/* 4 Interactive Story Chapters — Dark Liquid Glass */}
      <div className="space-y-3 pt-2">
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#A1A1AA] uppercase block">
          {isRTL ? 'فصل‌های تجربه کاربری سیستم' : 'EXPERIENCE CHAPTERS'}
        </span>

        <div className="space-y-2.5">
          {chapters.map((ch, idx) => {
            const isActive = activeChapterIndex === idx;
            const Icon = ICONS[idx] || Compass;
            return (
              <div
                key={ch.number}
                onClick={() => onSelectChapter(idx)}
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'glass-medium border-white/25 shadow-xl'
                    : 'glass-subtle border-white/8 hover:border-white/15'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-white text-[#070709] shadow-sm font-bold'
                        : 'bg-white/10 border border-white/10 text-[#A1A1AA]'
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#A1A1AA]">
                          {formatNumber(ch.number)}
                        </span>
                        <h4 className="font-display text-base sm:text-lg font-bold text-[#F5F5F7]">
                          {ch.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold">
                        {isActive ? (isRTL ? 'در حال نمایش' : 'ACTIVE VIEW') : ''}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1 leading-relaxed">
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
          className="group px-7 py-3.5 rounded-full bg-white text-[#070709] text-xs font-mono font-bold tracking-wider hover:bg-[#E4E4E7] transition-all flex items-center gap-2 shadow-md active:scale-95 cursor-pointer"
          onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.view })}
          onMouseLeave={resetCursor}
        >
          <span>{isRTL ? `مشاهده کیس‌استادی کامل ${pTrans.title}` : `EXPLORE FULL ${project.title} CASE STUDY`}</span>
          <ArrowUpRight
            size={15}
            className={`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isRTL ? 'rotate-[-90deg]' : ''}`}
          />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
          <span>{formatNumber(pTrans.year)}</span>
          <span>·</span>
          <span>{pTrans.client}</span>
        </div>
      </div>
    </div>
  );
};
