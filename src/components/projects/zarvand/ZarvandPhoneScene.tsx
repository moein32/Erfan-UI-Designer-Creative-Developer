import React from 'react';
import { ZarvandScreen } from './ZarvandScreen';
import { Home, Wallet, BarChart3, Bot, Battery } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ZarvandPhoneSceneProps {
  activeChapterIndex: number;
  onChapterChange?: (index: number) => void;
  isInteractive?: boolean;
  isPersianMode?: boolean;
}

const CHAPTER_SCREENS: ('liquidity' | 'portfolio' | 'analytics' | 'advisor')[] = [
  'liquidity',
  'portfolio',
  'analytics',
  'advisor',
];

export const ZarvandPhoneScene: React.FC<ZarvandPhoneSceneProps> = ({
  activeChapterIndex,
  onChapterChange,
  isInteractive = true,
  isPersianMode = false,
}) => {
  const currentScreenId = CHAPTER_SCREENS[activeChapterIndex] || 'liquidity';

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Device Header Tag */}
      <div className="w-[320px] sm:w-[340px] flex items-center justify-between px-2 mb-3 text-xs font-mono text-[#8B94A4]">
        <span className="font-bold text-[#111827]">
          0{activeChapterIndex + 1} / 04
        </span>
        <span className="uppercase tracking-widest text-[10px] text-[#2563EB] font-bold">
          {activeChapterIndex === 0 && '01 / LIQUIDITY'}
          {activeChapterIndex === 1 && '02 / PORTFOLIO'}
          {activeChapterIndex === 2 && '03 / ANALYTICS'}
          {activeChapterIndex === 3 && '04 / ADVISOR & SECURITY'}
        </span>
      </div>

      {/* iPhone Titanium Metallic Frame */}
      <div className="relative w-[320px] sm:w-[340px] h-[660px] sm:h-[700px] rounded-[52px] p-3 bg-gradient-to-tr from-[#D1D5DB] via-[#9CA3AF] to-[#E5E7EB] shadow-[0_35px_80px_rgba(37,99,235,0.16),0_15px_30px_rgba(15,23,42,0.08)] border border-white/80">
        {/* Hardware side buttons */}
        <div className="absolute -left-1 top-24 w-1 h-7 rounded-l-xs bg-[#9CA3AF]" />
        <div className="absolute -left-1 top-36 w-1 h-12 rounded-l-xs bg-[#9CA3AF]" />
        <div className="absolute -left-1 top-52 w-1 h-12 rounded-l-xs bg-[#9CA3AF]" />
        <div className="absolute -right-1 top-40 w-1 h-16 rounded-r-xs bg-[#9CA3AF]" />

        {/* Screen Inner Bezel */}
        <div className="relative w-full h-full rounded-[44px] bg-[#F8FAFD] overflow-hidden flex flex-col border-[5px] border-[#111827] shadow-inner">
          {/* Status Bar & Dynamic Island */}
          <div className="relative z-50 h-11 px-6 pt-2 flex items-center justify-between text-[11px] font-bold font-mono text-[#111827]">
            <span>9:41</span>
            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-24 h-6 rounded-full bg-[#08090B] flex items-center justify-end px-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 text-[#111827]">
              <span className="text-[10px]">5G</span>
              <Battery size={14} className="fill-current" />
            </div>
          </div>

          {/* Screen Scrollable Body with Smooth AnimatePresence */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 pt-1 pb-20 scrollbar-none relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreenId}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <ZarvandScreen screenId={currentScreenId} isPersianMode={isPersianMode} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom App Navigation Dock */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-[#FFFFFF]/92 backdrop-blur-md border-t border-[#E7EAF0] flex items-center justify-around px-3 z-40">
            {[
              { idx: 0, label: 'خانه', icon: Home },
              { idx: 1, label: 'دارایی‌ها', icon: Wallet },
              { idx: 2, label: 'تحلیل', icon: BarChart3 },
              { idx: 3, label: 'دستیار', icon: Bot },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeChapterIndex === tab.idx;
              return (
                <button
                  key={tab.idx}
                  onClick={() => isInteractive && onChapterChange?.(tab.idx)}
                  className={`flex flex-col items-center justify-center w-12 h-11 rounded-2xl transition-all ${
                    isActive
                      ? 'text-[#2563EB] bg-[#EFF6FF]'
                      : 'text-[#9AA2B1] hover:text-[#111827]'
                  }`}
                  aria-label={tab.label}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.4 : 1.8} />
                </button>
              );
            })}
          </div>

          {/* Home indicator bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-[#111827] opacity-80 z-50" />
        </div>
      </div>
    </div>
  );
};
