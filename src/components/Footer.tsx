import React from 'react';
import { useCursor } from '../context/CursorContext';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#d1d1cf] select-none">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
        
        {/* Brand & Statement */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#111111] rounded-full"></div>
            <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tighter">
              ERFAN
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#d1d1cf] text-[#555555]">
              2026 EDITION
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-[9px] font-bold tracking-[0.2em] opacity-40 uppercase">
              Available for projects
            </div>
            <div className="text-xs font-mono font-medium text-[#111111]">
              erfan@studio.creative
            </div>
          </div>

          <p className="text-xs font-persian text-[#888888]">
            طراحی شده با عشق به جزئیات و تایپوگرافی در تهران.
          </p>
        </div>

        {/* Middle Navigation Jump List */}
        <div className="grid grid-cols-2 gap-8 text-xs font-mono text-[#666666]">
          <div className="space-y-2">
            <span className="text-[9px] font-bold tracking-[0.2em] opacity-40 uppercase block">DISCOVER</span>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#selected-work" className="hover:text-[#111111] transition-colors">01 / SELECTED WORK</a></li>
              <li><a href="#about" className="hover:text-[#111111] transition-colors">02 / ABOUT ERFAN</a></li>
              <li><a href="#capabilities" className="hover:text-[#111111] transition-colors">03 / CAPABILITIES</a></li>
              <li><a href="#process" className="hover:text-[#111111] transition-colors">04 / CRAFT PROCESS</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-[9px] font-bold tracking-[0.2em] opacity-40 uppercase block">SELECTED WORKS</span>
            <div className="flex flex-col gap-1.5 text-[10px] font-bold tracking-wider">
              <a href="#project-scene-ovara" className="text-[#111111] hover:text-[#FF6B6B] transition-colors">OVARA</a>
              <a href="#project-scene-arven" className="text-[#666666] hover:text-[#111111] transition-colors">ARVEN</a>
              <a href="#project-scene-nivra" className="text-[#666666] hover:text-[#111111] transition-colors">NIVRA</a>
              <a href="#project-scene-veyra" className="text-[#666666] hover:text-[#111111] transition-colors">VEYRA</a>
              <a href="#project-scene-zarvand" className="text-[#666666] hover:text-[#111111] transition-colors">ZARVAND</a>
            </div>
          </div>
        </div>

        {/* Right Back to Top Button */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="group px-5 py-3 rounded-full bg-[#FFFFFF] border border-[#d1d1cf] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 shadow-xs flex items-center gap-2"
            onMouseEnter={() => setCursor({ type: 'button', text: 'TOP ↑' })}
            onMouseLeave={resetCursor}
            aria-label="Scroll back to top"
          >
            <span className="text-xs font-mono font-bold tracking-wider">BACK TO TOP</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <div className="text-[10px] font-bold tracking-[0.15em] opacity-40 uppercase">
            © 2026 ERFAN. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
};
