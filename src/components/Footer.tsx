import React from 'react';
import { useCursor } from '../context/CursorContext';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const { t, isRTL, formatNumber } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5E7EB] select-none">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        {/* Brand & Statement */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#0A0A0A] rounded-full"></div>
            <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-tighter">
              {isRTL ? 'عرفان' : 'ERFAN'}
            </span>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-[#E5E7EB] text-[#71717A] liquid-glass">
              {isRTL ? 'ویرایش ۱۴۰۴' : '2026 EDITION'}
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#A1A1AA] uppercase">
              {t.hero.availability}
            </div>
            <div className="text-xs font-mono font-medium text-[#0A0A0A] dir-ltr text-start">
              erfan.moein.design@gmail.com
            </div>
          </div>

          <p className="text-xs text-[#71717A] max-w-sm">
            {t.footer.tagline}
          </p>
        </div>

        {/* Middle Navigation Jump List */}
        <div className="grid grid-cols-2 gap-8 text-xs font-mono text-[#71717A]">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.15em] text-[#A1A1AA] uppercase block">
              {isRTL ? 'بخش‌های اصلی' : 'DISCOVER'}
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#selected-work" className="hover:text-[#0A0A0A] transition-colors">{formatNumber('01')} / {t.nav.work}</a></li>
              <li><a href="#about" className="hover:text-[#0A0A0A] transition-colors">{formatNumber('02')} / {t.nav.about}</a></li>
              <li><a href="#capabilities" className="hover:text-[#0A0A0A] transition-colors">{formatNumber('03')} / {t.nav.capabilities}</a></li>
              <li><a href="#process" className="hover:text-[#0A0A0A] transition-colors">{formatNumber('04')} / {t.nav.process}</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.15em] text-[#A1A1AA] uppercase block">
              {isRTL ? 'پروژه‌ها' : 'PROJECTS'}
            </span>
            <div className="flex flex-col gap-1.5 text-[10px] font-bold tracking-wider">
              <a href="#project-scene-ovara" className="text-[#71717A] hover:text-[#0A0A0A] transition-colors">OVARA</a>
              <a href="#project-scene-arven" className="text-[#71717A] hover:text-[#0A0A0A] transition-colors">ARVEN</a>
              <a href="#project-scene-nivra" className="text-[#71717A] hover:text-[#0A0A0A] transition-colors">NIVRA</a>
              <a href="#project-scene-varya" className="text-[#71717A] hover:text-[#0A0A0A] transition-colors">VARYA</a>
              <a href="#project-scene-zarvand" className="text-[#71717A] hover:text-[#0A0A0A] transition-colors">ZARVAND</a>
            </div>
          </div>
        </div>

        {/* Right Back to Top Button */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="group px-5 py-3 rounded-full liquid-glass-pill hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 shadow-xs flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.top })}
            onMouseLeave={resetCursor}
            aria-label="Scroll back to top"
          >
            <span className="text-xs font-mono font-bold tracking-wider">{t.cursor.top}</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <div className="text-[10px] font-mono font-bold tracking-[0.1em] text-[#A1A1AA] uppercase">
            {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};
