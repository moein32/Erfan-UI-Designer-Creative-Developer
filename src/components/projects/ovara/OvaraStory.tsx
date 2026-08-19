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
          <span className="px-3 py-1 bg-[#0A0A0A]/5 text-[#0A0A0A] border border-[#E5E7EB] text-xs font-mono font-bold tracking-wider uppercase rounded-full liquid-glass">
            {isRTL ? 'پروژه پرچمدار' : 'FLAGSHIP CASE STUDY'}
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

      {/* Interactive Step Narrative Box — Liquid Glass */}
      <div className="liquid-glass border border-[#E5E7EB] rounded-3xl p-6 sm:p-7 shadow-xs transition-all duration-300">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#0A0A0A] bg-[#0A0A0A]/5 px-2.5 py-0.5 rounded-md">
              {isRTL ? `صفحه ${formatNumber(currentStep.number)} از ${formatNumber(5)}` : `SCREEN ${currentStep.number} / 05`}
            </span>
            <span className="text-xs font-semibold text-[#71717A]">
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
                    ? 'w-6 bg-[#0A0A0A]'
                    : 'w-2 bg-[#D4D4D8] hover:bg-[#A1A1AA]'
                }`}
                title={`Screen ${s.number}`}
              />
            ))}
          </div>
        </div>

        <h4 className="text-lg md:text-xl font-display font-bold text-[#0A0A0A]">
          {currentStep.title}
        </h4>
        <p className="text-xs md:text-sm text-[#0A0A0A] font-medium mt-1">
          {currentStep.tagline}
        </p>
        <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mt-2">
          {currentStep.description}
        </p>

        {/* Feature bullets */}
        <div className="mt-4 pt-3 border-t border-[#E5E7EB] space-y-1.5">
          {currentStep.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-xs text-[#52525B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] shrink-0" />
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
