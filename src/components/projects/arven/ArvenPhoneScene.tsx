import React from 'react';
import { ArvenScreen } from './ArvenScreen';
import { Home, CheckSquare, Calendar, Brain, Wifi, Battery } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ArvenPhoneSceneProps {
  activeChapterIndex: number;
  onChapterChange?: (index: number) => void;
  isInteractive?: boolean;
  isPersianMode?: boolean;
}

const CHAPTER_SCREENS: ('think' | 'organize' | 'plan' | 'create')[] = [
  'think',
  'organize',
  'plan',
  'create',
];

export const ArvenPhoneScene: React.FC<ArvenPhoneSceneProps> = ({
  activeChapterIndex,
  onChapterChange,
  isInteractive = true,
  isPersianMode = false,
}) => {
  const currentScreenId = CHAPTER_SCREENS[activeChapterIndex] || 'think';

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Device Label above chassis */}
      <div className="w-[320px] sm:w-[340px] flex items-center justify-between px-2 mb-3 text-xs font-mono text-[#888884]">
        <span className="font-bold text-[#111116]">
          0{activeChapterIndex + 1} / 04
        </span>
        <span className="uppercase tracking-widest text-[10px] text-[#5146E5] font-bold">
          {activeChapterIndex === 0 && '01 / THINK'}
          {activeChapterIndex === 1 && '02 / ORGANIZE'}
          {activeChapterIndex === 2 && '03 / PLAN'}
          {activeChapterIndex === 3 && '04 / CREATE'}
        </span>
      </div>

      {/* iPhone 16 Pro Chassis */}
      <div className="relative w-[320px] sm:w-[340px] h-[660px] sm:h-[700px] rounded-[52px] p-3 bg-gradient-to-tr from-[#9498A6] via-[#D0D2DA] to-[#8C8F9D] shadow-[0_30px_70px_rgba(31,35,61,0.18),0_12px_25px_rgba(31,35,61,0.1)] border border-white/60">
        {/* Hardware side buttons */}
        <div className="absolute -left-1 top-24 w-1 h-7 rounded-l-xs bg-[#7D818E]" />
        <div className="absolute -left-1 top-36 w-1 h-12 rounded-l-xs bg-[#7D818E]" />
        <div className="absolute -left-1 top-52 w-1 h-12 rounded-l-xs bg-[#7D818E]" />
        <div className="absolute -right-1 top-40 w-1 h-16 rounded-r-xs bg-[#7D818E]" />

        {/* Screen Inner Bezel */}
        <div className="relative w-full h-full rounded-[44px] bg-[#F9FAFF] overflow-hidden flex flex-col border-[5px] border-[#0B0C11] shadow-inner">
          {/* Status Bar & Dynamic Island */}
          <div className="relative z-50 h-11 px-6 pt-2 flex items-center justify-between text-[11px] font-bold font-mono text-[#161824]">
            <span>9:41</span>
            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-24 h-6 rounded-full bg-[#050507] flex items-center justify-end px-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#5146E5] animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 text-[#161824]">
              <span className="text-[10px]">5G</span>
              <Battery size={14} className="fill-current" />
            </div>
          </div>

          {/* Screen Scrollable Body with Smooth AnimatePresence */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 pt-1 pb-20 scrollbar-none relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreenId}
                initial={{ opacity: 0, y: 15, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <ArvenScreen screenId={currentScreenId} isPersianMode={isPersianMode} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom App Navigation Dock */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-[#FAFAFD]/90 backdrop-blur-md border-t border-[#E1E3EB]/80 flex items-center justify-around px-3 z-40">
            {[
              { idx: 0, label: 'خانه', icon: Home },
              { idx: 1, label: 'وظایف', icon: CheckSquare },
              { idx: 2, label: 'تقویم', icon: Calendar },
              { idx: 3, label: 'دانش', icon: Brain },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeChapterIndex === tab.idx;
              return (
                <button
                  key={tab.idx}
                  onClick={() => isInteractive && onChapterChange?.(tab.idx)}
                  className={`flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                    isActive ? 'text-[#5146E5]' : 'text-[#969AAA] hover:text-[#5146E5]'
                  }`}
                >
                  <div
                    className={`w-7 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#5146E5]/10' : ''
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="text-[8.5px] font-bold font-persian">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Home Bar Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-[#171821] z-50 pointer-events-none" />
        </div>
      </div>

      {/* Screen Quick Select Dots */}
      <div className="flex items-center gap-2 mt-4">
        {[0, 1, 2, 3].map((idx) => (
          <button
            key={idx}
            onClick={() => onChapterChange?.(idx)}
            className={`transition-all rounded-full ${
              activeChapterIndex === idx
                ? 'w-8 h-2 bg-[#5146E5]'
                : 'w-2 h-2 bg-[#D1D1CF] hover:bg-[#888884]'
            }`}
            aria-label={`Jump to screen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
