import React from 'react';
import { ProjectData } from '../../../types';
import { ArrowUpRight, Wallet, BarChart3, ShieldCheck, CreditCard } from 'lucide-react';
import { useCursor } from '../../../context/CursorContext';
import { useLanguage } from '../../../context/LanguageContext';

interface ZarvandStoryProps {
  project: ProjectData;
  activeChapterIndex: number;
  onSelectChapter: (idx: number) => void;
  onOpenCaseStudy: () => void;
  isPersianMode?: boolean;
}

const ICONS = [CreditCard, Wallet, BarChart3, ShieldCheck];

export const ZarvandStory: React.FC<ZarvandStoryProps> = ({
  project,
  activeChapterIndex,
  onSelectChapter,
  onOpenCaseStudy,
}) => {
  const { setCursor, resetCursor } = useCursor();
  const { t, isRTL, formatNumber } = useLanguage();
  const pTrans = t.projects.zarvand;

  const chapters = pTrans.storySteps;

  return (
    <div className="flex flex-col justify-between h-full space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-[#0A0A0A]/5 text-[#0A0A0A] border border-[#E5E7EB] text-xs font-mono font-bold tracking-wider uppercase rounded-full liquid-glass">
            {isRTL ? 'فین‌تک سازمانی و خزانه دیجیتال' : 'INSTITUTIONAL FINTECH'}
          </span>
          <span className="text-xs font-mono text-[#71717A]">{formatNumber(pTrans.year)}</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-display font-extrabold text-[#0A0A0A] mt-4 tracking-tight">
          {pTrans.title}
        </h3>
        <p className="text-base md:text-lg font-medium text-[#71717A] mt-1">
          {pTrans.tagline}
        </p>

        <p className="text-[#52525B] text-sm md:text-base leading-relaxed mt-4 max-w-xl">
          {pTrans.overview}
        </p>
      </div>

      {/* 4 Interactive Story Chapters — Liquid Glass */}
      <div className="space-y-3 pt-2">
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#71717A] uppercase block">
          {isRTL ? 'ماژول‌های معماری خزانه و مالی' : 'TREASURY & ARCHITECTURE MODULES'}
        </span>

        <div className="space-y-2.5">
          {chapters.map((ch, idx) => {
            const isActive = activeChapterIndex === idx;
            const Icon = ICONS[idx] || CreditCard;
            return (
              <div
                key={ch.number}
                onClick={() => onSelectChapter(idx)}
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'liquid-glass border-[#0A0A0A] shadow-xs'
                    : 'bg-[#FFFFFF] border-[#E5E7EB] hover:border-[#A1A1AA]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#0A0A0A] text-white shadow-xs'
                        : 'bg-[#FAFAFA] border border-[#E5E7EB] text-[#71717A]'
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#71717A]">
                          {formatNumber(ch.number)}
                        </span>
                        <h4 className="font-display text-base sm:text-lg font-bold text-[#0A0A0A]">
                          {ch.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-[#0A0A0A] font-semibold">
                        {isActive ? (isRTL ? 'در حال نمایش' : 'ACTIVE VIEW') : ''}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#52525B] mt-1 leading-relaxed">
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
          className="group px-7 py-3.5 rounded-full bg-[#0A0A0A] text-[#FFFFFF] text-xs font-mono font-bold tracking-wider hover:bg-[#27272A] transition-all flex items-center gap-2 shadow-xs active:scale-95 cursor-pointer"
          onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.view })}
          onMouseLeave={resetCursor}
        >
          <span>{isRTL ? `مشاهده کیس‌استادی کامل ${pTrans.title}` : `EXPLORE FULL ${project.title} CASE STUDY`}</span>
          <ArrowUpRight
            size={15}
            className={`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isRTL ? 'rotate-[-90deg]' : ''}`}
          />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#71717A]">
          <span>{formatNumber(pTrans.year)}</span>
          <span>·</span>
          <span>{pTrans.client}</span>
        </div>
      </div>
    </div>
  );
};
