import React from 'react';
import { ProjectData } from '../../../types';
import { Compass, ArrowUpRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { useCursor } from '../../../context/CursorContext';

interface NivraStoryProps {
  project: ProjectData;
  activeChapterIndex: number;
  onSelectChapter: (idx: number) => void;
  onOpenCaseStudy: () => void;
  isPersianMode?: boolean;
}

const CHAPTERS = [
  {
    number: '01',
    id: 'discover',
    title: 'DISCOVER',
    subtitle: 'Destinations & Experiential Discovery',
    persianTitle: 'کشف مقاصد و تجربه‌ها',
    description:
      'Predictive destination curation tailored to seasonal weather curves, cultural interests, and curated visual stories.',
    icon: Compass,
  },
  {
    number: '02',
    id: 'plan',
    title: 'PLAN',
    subtitle: 'Personalized Daily Itinerary',
    persianTitle: 'برنامه‌ریزی هوشمند سفر',
    description:
      'Dynamic multi-day timelines that automatically sync flights, check-ins, VIP entries, and reservation milestones.',
  icon: Calendar,
  },
  {
    number: '03',
    id: 'explore',
    title: 'EXPLORE',
    subtitle: 'Destination Details & Activities',
    persianTitle: 'کاوش جاذبه‌ها و فعالیت‌ها',
    description:
      'Live micro-climate weather insights, curated stays, neighborhood maps, and culinary expeditions in a single view.',
    icon: MapPin,
  },
  {
    number: '04',
    id: 'travel',
    title: 'TRAVEL',
    subtitle: 'Frictionless Booking & Journey Hub',
    persianTitle: 'رزرو یکپارچه و مدیریت سفر',
    description:
      'One-tap reservation confirmation, transparent pricing breakdowns, SSL encryption, and flexible cancellation assurance.',
    icon: Sparkles,
  },
];

export const NivraStory: React.FC<NivraStoryProps> = ({
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4EDF1] text-[11px] font-mono font-bold text-[#168DF5] shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168DF5] animate-pulse" />
          <span>TRAVEL EXPERIENCE</span>
        </div>

        <div className="space-y-2">
          <h2
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#111116] cursor-pointer hover:opacity-85 transition-opacity"
            onClick={onOpenCaseStudy}
            onMouseEnter={() => setCursor({ type: 'project', text: 'VIEW ↗' })}
            onMouseLeave={resetCursor}
          >
            NIVRA
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-[#444449] tracking-tight">
            {isPersianMode ? 'همراه هوشمند سفر و کاوشگر مقاصد جهان' : project.tagline}
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#666664] leading-relaxed max-w-xl">
          {project.overview}
        </p>
      </div>

      {/* 4 Interactive Story Chapters */}
      <div className="space-y-3 pt-2">
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#888884] uppercase block">
          JOURNEY WORKFLOW CHAPTERS
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
                    ? 'bg-white border-[#168DF5] shadow-md shadow-[#168DF5]/10 translate-x-1 sm:translate-x-2'
                    : 'bg-white/60 border-[#E8E8E4] hover:bg-white hover:border-[#D1D1CF]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#168DF5] text-white shadow-xs'
                        : 'bg-[#F0F5F8] text-[#71818A]'
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
                      <span className="text-[11px] font-mono text-[#168DF5] font-semibold">
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

      {/* Case Study CTA Button */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          onClick={onOpenCaseStudy}
          id={`view-case-study-${project.id}`}
          className="group px-7 py-3.5 rounded-full bg-[#111116] text-[#F7F7F5] text-xs font-mono font-bold tracking-wider hover:bg-[#2A2A2E] transition-all flex items-center gap-2 shadow-md active:scale-95 cursor-pointer"
          onMouseEnter={() => setCursor({ type: 'project', text: 'EXPLORE ↗' })}
          onMouseLeave={resetCursor}
        >
          <span>EXPLORE FULL NIVRA CASE STUDY</span>
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
