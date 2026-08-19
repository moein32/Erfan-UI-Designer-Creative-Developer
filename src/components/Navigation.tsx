import React, { useState, useEffect } from 'react';
import { useCursor } from '../context/CursorContext';
import { ArrowUpRight, Sparkles, Globe, Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenContactModal?: () => void;
  isPersianMode?: boolean;
  onTogglePersian?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenContactModal,
  isPersianMode,
  onTogglePersian,
}) => {
  const { setCursor, resetCursor } = useCursor();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Live time (Tehran / GMT+3:30)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const tehranTime = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Tehran',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        setLocalTime(tehranTime);
      } catch {
        const fallback = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setLocalTime(fallback);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Smart scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'WORK', href: '#selected-work', persianLabel: 'پروژه‌ها' },
    { label: 'ABOUT', href: '#about', persianLabel: 'درباره من' },
    { label: 'CAPABILITIES', href: '#capabilities', persianLabel: 'تخصص‌ها' },
    { label: 'PROCESS', href: '#process', persianLabel: 'فرآیند' },
    { label: 'CONTACT', href: '#contact', persianLabel: 'تماس' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${isScrolled ? 'py-3' : 'py-6 md:py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-logo"
          className="group flex items-center gap-3 text-left focus:outline-none"
          onMouseEnter={() => setCursor({ type: 'button' })}
          onMouseLeave={resetCursor}
        >
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#0A0A0A] group-hover:opacity-60 transition-opacity">
            ERFAN
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-[#71717A] uppercase border-l border-[#E5E7EB] pl-3">
            UI & CREATIVE DEV
          </span>
        </a>

        {/* Desktop Navigation Island */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center gap-1 bg-[#FFFFFF]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#0A0A0A]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0A0A0A] hover:text-[#71717A] transition-colors rounded-full"
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              {isPersianMode && link.persianLabel ? link.persianLabel : link.label}
            </a>
          ))}

          {/* Persian language toggle */}
          {onTogglePersian && (
            <button
              onClick={onTogglePersian}
              id="lang-toggle-btn"
              className="ml-1.5 px-2.5 py-0.5 text-[10px] font-persian font-medium text-[#52525B] hover:text-[#0A0A0A] rounded-full border border-[#E5E7EB] hover:bg-[#F4F4F5] transition-all flex items-center gap-1 cursor-pointer"
              title="تغییر زبان به فارسی / Switch Language"
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              <Globe size={11} className="text-[#71717A]" />
              <span>{isPersianMode ? 'EN' : 'فا'}</span>
            </button>
          )}
        </nav>

        {/* Right Status Pill & CTA */}
        <div className="flex items-center gap-3">
          {/* Availability & Time badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-[#E5E7EB] text-[11px] font-mono text-[#52525B]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>AVAILABLE</span>
            <span className="text-[#D4D4D8]">·</span>
            <span className="text-[#0A0A0A] font-medium">{localTime || '14:20'} THR</span>
          </div>

          {/* Quick CTA */}
          <a
            href="#contact"
            id="nav-cta-btn"
            onClick={onOpenContactModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-wider font-semibold rounded-full bg-[#0A0A0A] text-[#FFFFFF] hover:bg-[#27272A] transition-all duration-200 active:scale-95 shadow-sm"
            onMouseEnter={() => setCursor({ type: 'button', text: 'OPEN ↗' })}
            onMouseLeave={resetCursor}
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-full bg-[#FFFFFF] border border-[#E5E7EB] text-[#0A0A0A] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-6 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-[#F4F4F5]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#71717A]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Select Projects</span>
            </div>
            {onTogglePersian && (
              <button
                onClick={() => {
                  onTogglePersian();
                }}
                className="px-2.5 py-1 text-xs font-persian rounded-lg border border-[#E5E7EB] text-[#0A0A0A]"
              >
                {isPersianMode ? 'English' : 'فارسی'}
              </button>
            )}
          </div>

          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display font-medium text-[#0A0A0A] hover:text-[#71717A] py-1 transition-colors flex items-center justify-between"
              >
                <span>{isPersianMode && link.persianLabel ? link.persianLabel : link.label}</span>
                <ArrowUpRight size={16} className="text-[#A1A1AA]" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContactModal?.();
            }}
            className="mt-2 w-full py-3 text-center text-xs font-mono tracking-wider font-semibold rounded-xl bg-[#0A0A0A] text-[#FFFFFF] flex items-center justify-center gap-2"
          >
            <span>START A PROJECT</span>
            <Sparkles size={14} />
          </a>
        </div>
      )}
    </header>
  );
};
