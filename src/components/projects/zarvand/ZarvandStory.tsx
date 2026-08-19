import React from 'react';
import { ProjectData } from '../../../types';
import { Sparkles, ArrowUpRight, Wallet, BarChart3, ShieldCheck, CreditCard } from 'lucide-react';
import { useCursor } from '../../../context/CursorContext';

interface ZarvandStoryProps {
  project: ProjectData;
  activeChapterIndex: number;
  onSelectChapter: (idx: number) => void;
  onOpenCaseStudy: () => void;
  isPersianMode?: boolean;
}

const CHAPTERS = [
  {
    number: '01',
    id: 'liquidity',
    title: 'LIQUIDITY',
    subtitle: 'Core Treasury & Instant Settlement',
    persianTitle: 'داشبورد جامع و تسویه آنی',
    description:
      'Real-time sovereign wealth balances, automated yield compounding, and instantaneous multi-rail transfers.',
    icon: CreditCard,
  },
  {
    number: '02',
    id: 'portfolio',
    title: 'PORTFOLIO',
    subtitle: 'Multi-Asset Sovereign Custody',
    persianTitle: 'سبد دارایی‌های دیجیتال و ارزی',
    description:
      'Institutional asset balancing across crypto liquidity pools, fiat reserves, and real-time yield valuation.',
    icon: Wallet,
  },
  {
    number: '03',
    id: 'analytics',
    title: 'ANALYTICS',
    subtitle: 'Expense Telemetry & Budget Bounds',
    persianTitle: 'تحلیل بودجه و مصرف ماهانه',
    description:
      'High-precision radial telemetry and predictive categorical constraints with zero friction.',
    icon: BarChart3,
  },
  {
    number: '04',
    id: 'intelligence',
    title: 'INTELLIGENCE',
    subtitle: 'AI Advisory & Titanium Hardware Security',
    persianTitle: 'مشاور هوشمند و امنیت کارت فیزیکی',
    description:
      'Context-aware conversational wealth optimization coupled with instant cryptographic card locking.',
    icon: ShieldCheck,
  },
];

export const ZarvandStory: React.FC<ZarvandStoryProps> = ({
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-mono font-bold text-[#2563EB] shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
          <span>FINTECH & DIGITAL ASSETS</span>
        </div>

        <div className="space-y-2">
          <h2
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#111827] cursor-pointer hover:opacity-85 transition-opacity"
            onClick={onOpenCaseStudy}
            onMouseEnter={() => setCursor({ type: 'project', text: 'VIEW ↗' })}
            onMouseLeave={resetCursor}
          >
            ZARVAND
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-[#374151] tracking-tight">
            {isPersianMode ? 'زروند — پلتفرم مدیریت مالی و دارایی‌های دیجیتال' : project.tagline}
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl">
          {project.overview}
        </p>
      </div>

      {/* 4 Interactive Story Chapters */}
      <div className="space-y-3 pt-2">
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#888884] uppercase block">
          FINTECH SYSTEM CHAPTERS
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
                    ? 'bg-white border-[#2563EB]/40 shadow-[0_10px_30px_rgba(37,99,235,0.08)] ring-1 ring-[#2563EB]/20'
                    : 'bg-white/40 border-black/5 hover:bg-white/80 hover:border-black/10'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? 'text-[#2563EB]' : 'text-[#999994]'
                      }`}
                    >
                      {chapter.number}
                    </span>
                    <div>
                      <h4 className="text-base font-extrabold text-[#111827] tracking-tight">
                        {chapter.title}
                      </h4>
                      <p className="text-xs text-[#64748B]">
                        {isPersianMode ? chapter.persianTitle : chapter.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#EFF6FF] text-[#2563EB]'
                        : 'bg-black/5 text-[#888884]'
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                {isActive && (
                  <p className="mt-3 pt-3 border-t border-black/5 text-xs sm:text-sm text-[#475569] leading-relaxed animate-fadeIn">
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
          className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#111827] text-white font-bold text-sm tracking-wide shadow-lg shadow-black/10 hover:bg-[#2563EB] hover:shadow-[#2563EB]/25 transition-all duration-300 group"
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
