import React from 'react';
import { VaryaScreen } from './VaryaScreen';
import { Home, Activity, Moon, Bot, Battery } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VaryaPhoneSceneProps {
  activeChapterIndex: number;
  onChapterChange?: (index: number) => void;
  isInteractive?: boolean;
  isPersianMode?: boolean;
}

const CHAPTER_SCREENS: ('equilibrium' | 'vitality' | 'circadian' | 'intelligence')[] = [
  'equilibrium',
  'vitality',
  'circadian',
  'intelligence',
];

export const VaryaPhoneScene: React.FC<VaryaPhoneSceneProps> = ({
  activeChapterIndex,
  onChapterChange,
  isInteractive = true,
  isPersianMode = false,
}) => {
  const currentScreenId = CHAPTER_SCREENS[activeChapterIndex] || 'equilibrium';

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Device Header Tag */}
      <div className="w-[320px] sm:w-[340px] flex items-center justify-between px-2 mb-3 text-xs font-mono text-[#8B8DA1]">
        <span className="font-bold text-[#171827]">
          0{activeChapterIndex + 1} / 04
        </span>
        <span className="uppercase tracking-widest text-[10px] text-[#6F62E8] font-bold">
          {activeChapterIndex === 0 && '01 / EQUILIBRIUM'}
          {activeChapterIndex === 1 && '02 / VITALITY'}
          {activeChapterIndex === 2 && '03 / CIRCADIAN'}
          {activeChapterIndex === 3 && '04 / INTELLIGENCE'}
        </span>
      </div>

      {/* iPhone Titanium Midnight Chassis */}
      <div className="relative w-[320px] sm:w-[340px] h-[660px] sm:h-[700px] rounded-[52px] p-3 bg-gradient-to-tr from-[#3B3D45] via-[#16171D] to-[#484A53] shadow-[0_35px_80px_rgba(111,98,232,0.18),0_15px_30px_rgba(85,201,155,0.1)] border border-white/40">
        {/* Hardware side buttons */}
        <div className="absolute -left-1 top-24 w-1 h-7 rounded-l-xs bg-[#33353C]" />
        <div className="absolute -left-1 top-36 w-1 h-12 rounded-l-xs bg-[#33353C]" />
        <div className="absolute -left-1 top-52 w-1 h-12 rounded-l-xs bg-[#33353C]" />
        <div className="absolute -right-1 top-40 w-1 h-16 rounded-r-xs bg-[#3A3B43]" />

        {/* Screen Inner Bezel */}
        <div className="relative w-full h-full rounded-[44px] bg-[#F8F8FC] overflow-hidden flex flex-col border-[5px] border-[#08090C] shadow-inner">
          {/* Status Bar & Dynamic Island */}
          <div className="relative z-50 h-11 px-6 pt-2 flex items-center justify-between text-[11px] font-bold font-mono text-[#171827]">
            <span>9:41</span>
            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-24 h-6 rounded-full bg-[#050507] flex items-center justify-end px-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#55C99B] animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 text-[#171827]">
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
                <VaryaScreen screenId={currentScreenId} isPersianMode={isPersianMode} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom App Navigation Dock */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-[#FFFFFF]/90 backdrop-blur-md border-t border-[#E9E9F1]/80 flex items-center justify-around px-3 z-40">
            {[
              { idx: 0, label: 'خانه', icon: Home },
              { idx: 1, label: 'فعالیت', icon: Activity },
              { idx: 2, label: 'خواب', icon: Moon },
              { idx: 3, label: 'مربی هوشمند', icon: Bot },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeChapterIndex === tab.idx;
              return (
                <button
                  key={tab.idx}
                  onClick={() => isInteractive && onChapterChange?.(tab.idx)}
                  className={`flex flex-col items-center justify-center w-12 h-11 rounded-2xl transition-all ${
                    isActive
                      ? 'text-[#6F62E8] bg-[#EEEAFF]'
                      : 'text-[#8B8DA1] hover:text-[#171827]'
                  }`}
                  aria-label={tab.label}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.4 : 1.8} />
                </button>
              );
            })}
          </div>

          {/* Home indicator bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-[#111217] opacity-80 z-50" />
        </div>
      </div>
    </div>
  );
};
