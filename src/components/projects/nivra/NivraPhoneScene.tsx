import React from 'react';
import { NivraScreen } from './NivraScreen';
import { Home, Compass, Calendar, Sparkles, Battery } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../../context/LanguageContext';

interface NivraPhoneSceneProps {
  activeChapterIndex: number;
  onChapterChange?: (index: number) => void;
  isInteractive?: boolean;
}

const CHAPTER_SCREENS: ('discover' | 'plan' | 'explore' | 'travel')[] = [
  'discover',
  'plan',
  'explore',
  'travel',
];

export const NivraPhoneScene: React.FC<NivraPhoneSceneProps> = ({
  activeChapterIndex,
  onChapterChange,
  isInteractive = true,
}) => {
  const { isRTL, formatNumber } = useLanguage();
  const currentScreenId = CHAPTER_SCREENS[activeChapterIndex] || 'discover';

  const tabs = isRTL
    ? [
        { idx: 0, label: 'کشف مقاصد', icon: Home },
        { idx: 1, label: 'برنامه سفر', icon: Calendar },
        { idx: 2, label: 'کاوش جزئیات', icon: Compass },
        { idx: 3, label: 'رزرو نهایی', icon: Sparkles },
      ]
    : [
        { idx: 0, label: 'Discover', icon: Home },
        { idx: 1, label: 'Itinerary', icon: Calendar },
        { idx: 2, label: 'Explore', icon: Compass },
        { idx: 3, label: 'Booking', icon: Sparkles },
      ];

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Device Label */}
      <div className="w-[320px] sm:w-[340px] flex items-center justify-between px-2 mb-3 text-xs font-mono text-[#71818A]">
        <span className="font-bold text-[#10212B]">
          {isRTL ? `۰${formatNumber(activeChapterIndex + 1)} / ۰۴` : `0${activeChapterIndex + 1} / 04`}
        </span>
        <span className="uppercase tracking-widest text-[10px] text-[#168DF5] font-bold">
          {activeChapterIndex === 0 && (isRTL ? '۰۱ / کشف الهام‌بخش' : '01 / DISCOVER')}
          {activeChapterIndex === 1 && (isRTL ? '۰۲ / برنامه‌ریزی هوشمند' : '02 / PLAN')}
          {activeChapterIndex === 2 && (isRTL ? '۰۳ / کاوش تجربیات' : '03 / EXPLORE')}
          {activeChapterIndex === 3 && (isRTL ? '۰۴ / سفر و اقامت' : '04 / TRAVEL')}
        </span>
      </div>

      {/* iPhone 16 Pro Titanium Chassis */}
      <div className="relative w-[320px] sm:w-[340px] h-[660px] sm:h-[700px] rounded-[52px] p-3 bg-gradient-to-tr from-[#9AB2BD] via-[#E2EDF2] to-[#A2B6C0] shadow-[0_30px_70px_rgba(22,141,245,0.16),0_12px_25px_rgba(24,197,189,0.1)] border border-white/70">
        {/* Hardware side buttons */}
        <div className="absolute -left-1 top-24 w-1 h-7 rounded-l-xs bg-[#7D939E]" />
        <div className="absolute -left-1 top-36 w-1 h-12 rounded-l-xs bg-[#7D939E]" />
        <div className="absolute -left-1 top-52 w-1 h-12 rounded-l-xs bg-[#7D939E]" />
        <div className="absolute -right-1 top-40 w-1 h-16 rounded-r-xs bg-[#7D939E]" />

        {/* Screen Inner Bezel */}
        <div className="relative w-full h-full rounded-[44px] bg-[#F7FAFB] overflow-hidden flex flex-col border-[5px] border-[#0A161D] shadow-inner">
          {/* Status Bar & Dynamic Island */}
          <div className="relative z-50 h-11 px-6 pt-2 flex items-center justify-between text-[11px] font-bold font-mono text-[#10212B]">
            <span>{isRTL ? '۹:۴۱' : '9:41'}</span>
            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-24 h-6 rounded-full bg-[#050B0E] flex items-center justify-end px-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#18C5BD] animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 text-[#10212B]">
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
                <NivraScreen screenId={currentScreenId} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom App Navigation Dock */}
          <div
            className="absolute bottom-0 inset-x-0 h-16 bg-[#FFFFFF]/90 backdrop-blur-md border-t border-[#E4EDF1]/80 flex items-center justify-around px-3 z-40"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeChapterIndex === tab.idx;
              return (
                <button
                  key={tab.idx}
                  onClick={() => isInteractive && onChapterChange?.(tab.idx)}
                  className={`flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                    isActive ? 'text-[#168DF5]' : 'text-[#82939B] hover:text-[#168DF5]'
                  }`}
                >
                  <div
                    className={`w-7 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#E7F4FF]' : ''
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    className={`text-[8.5px] font-bold ${
                      isRTL ? 'font-persian' : 'font-sans'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Home Bar Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-[#10212B] z-50 pointer-events-none" />
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
                ? 'w-8 h-2 bg-[#168DF5]'
                : 'w-2 h-2 bg-[#D1D1CF] hover:bg-[#888884]'
            }`}
            aria-label={`Jump to screen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

