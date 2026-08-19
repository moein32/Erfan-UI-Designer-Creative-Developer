import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectData } from '../../../types';
import { useLanguage } from '../../../context/LanguageContext';
import { useCursor } from '../../../context/CursorContext';

interface OvaraStoryProps {
  project: ProjectData;
  activeScreenIndex: number;
  onSelectScreen: (index: number) => void;
  onOpenCaseStudy: () => void;
  isPersianMode?: boolean;
}

export const OvaraStory: React.FC<OvaraStoryProps> = ({
  project,
  activeScreenIndex,
  onSelectScreen,
  onOpenCaseStudy,
}) => {
  const { setCursor, resetCursor } = useCursor();
  const { t, isRTL, formatNumber } = useLanguage();
  const pTrans = t.projects.ovara;

  const steps = pTrans.storySteps;
  const currentStep = steps[activeScreenIndex] || steps[0];

  return (
    <div className="flex flex-col justify-between h-full space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 glass-subtle border border-white/10 text-[#F5F5F7] text-xs font-mono font-bold tracking-wider uppercase rounded-full">
            {isRTL ? 'پروژه پرچمدار' : 'FLAGSHIP CASE STUDY'}
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

      {/* Interactive Step Narrative Box — Dark Liquid Glass Medium */}
      <div className="glass-medium border border-white/12 rounded-3xl p-6 sm:p-7 shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#F5F5F7] bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-md">
              {isRTL ? `صفحه ${formatNumber(currentStep.number)} از ${formatNumber(5)}` : `SCREEN ${currentStep.number} / 05`}
            </span>
            <span className="text-xs font-semibold text-[#A1A1AA]">
              {currentStep.title}
            </span>
          </div>

          {/* Step switcher dots */}
          <div className="flex items-center gap-1.5">
            {steps.map((s, idx) => (
              <button
                key={s.number}
                onClick={() => onSelectScreen(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeScreenIndex === idx
                    ? 'w-6 bg-white'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                title={`Screen ${s.number}`}
              />
            ))}
          </div>
        </div>

        <h4 className="text-lg md:text-xl font-display font-bold text-[#F5F5F7]">
          {currentStep.title}
        </h4>
        <p className="text-xs md:text-sm text-[#F5F5F7]/80 font-medium mt-1">
          {currentStep.tagline}
        </p>
        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mt-2">
          {currentStep.description}
        </p>

        {/* Feature bullets */}
        <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
          {currentStep.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-xs text-[#A1A1AA]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
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
