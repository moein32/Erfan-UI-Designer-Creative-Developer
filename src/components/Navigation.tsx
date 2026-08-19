import React, { useState, useEffect } from 'react';
import { useCursor } from '../context/CursorContext';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Sparkles, Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenContactModal?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenContactModal }) => {
  const { setCursor, resetCursor } = useCursor();
  const { language, setLanguage, t, isRTL, formatNumber } = useLanguage();
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
        const tehranTime = now.toLocaleTimeString(isRTL ? 'fa-IR' : 'en-US', {
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
  }, [isRTL]);

  // Smart scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: t.nav.work, href: '#selected-work' },
    { label: t.nav.about, href: '#philosophy' },
    { label: t.nav.process, href: '#approach' },
    { label: t.nav.capabilities, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${isScrolled ? 'py-3' : 'py-5 md:py-7'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-logo"
          className="group flex items-center gap-3 focus:outline-none"
          onMouseEnter={() => setCursor({ type: 'button' })}
          onMouseLeave={resetCursor}
        >
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
            {isRTL ? 'عرفان' : 'ERFAN'}
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-[#71717A] uppercase border-s border-white/10 ps-3">
            {isRTL ? 'طراحی محصول و تجربه کاربری' : 'PRODUCT & INTERFACE DESIGN'}
          </span>
        </a>

        {/* Desktop Navigation Island — Dark Liquid Glass */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center gap-1.5 glass-subtle px-3.5 py-1.5 rounded-full transition-all duration-300 hover:border-white/20 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1 text-[12px] font-medium tracking-[0.03em] text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors rounded-full"
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              {link.label}
            </a>
          ))}

          {/* Dark Liquid Glass Language Switcher Pill */}
          <div
            id="lang-switcher-pill"
            className="ms-1.5 p-0.5 rounded-full bg-white/6 border border-white/10 flex items-center gap-0.5"
            role="group"
            aria-label={t.nav.switchLang}
          >
            <button
              type="button"
              id="lang-btn-fa"
              onClick={() => setLanguage('fa')}
              className={`px-2.5 py-0.5 text-[11px] font-persian font-bold rounded-full transition-all duration-200 cursor-pointer ${
                language === 'fa'
                  ? 'bg-white text-[#070709] shadow-xs'
                  : 'text-[#71717A] hover:text-[#F5F5F7]'
              }`}
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              فا
            </button>
            <button
              type="button"
              id="lang-btn-en"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full transition-all duration-200 cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-[#070709] shadow-xs'
                  : 'text-[#71717A] hover:text-[#F5F5F7]'
              }`}
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Right Status Pill & CTA */}
        <div className="flex items-center gap-3">
          {/* Availability & Time badge */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-subtle text-[11px] font-mono text-[#A1A1AA] border border-white/8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{isRTL ? 'آماده همکاری' : 'AVAILABLE'}</span>
            <span className="text-white/20">·</span>
            <span className="text-[#F5F5F7] font-medium">{localTime || '14:20'} {isRTL ? 'تهران' : 'THR'}</span>
          </div>

          {/* Quick CTA */}
          <button
            type="button"
            id="nav-cta-btn"
            onClick={onOpenContactModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-wider font-bold rounded-full bg-[#F5F5F7] text-[#070709] hover:bg-white transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
            onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.send })}
            onMouseLeave={resetCursor}
          >
            <span>{t.nav.startProject}</span>
            <ArrowUpRight size={13} className={isRTL ? 'rotate-[-90deg]' : ''} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-full glass-subtle text-[#F5F5F7] focus:outline-none cursor-pointer border border-white/10"
            aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu — Dark Liquid Glass Strong */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-6 p-6 rounded-3xl glass-strong border border-white/12 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t.nav.status}</span>
            </div>

            {/* Mobile Language Switcher */}
            <div className="p-0.5 rounded-full bg-white/8 border border-white/10 flex items-center gap-0.5">
              <button
                onClick={() => setLanguage('fa')}
                className={`px-3 py-1 text-xs font-persian font-bold rounded-full ${
                  language === 'fa' ? 'bg-white text-[#070709] shadow-xs' : 'text-[#A1A1AA]'
                }`}
              >
                فارسی
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-mono font-bold rounded-full ${
                  language === 'en' ? 'bg-white text-[#070709] shadow-xs' : 'text-[#A1A1AA]'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-display font-medium text-[#F5F5F7] hover:text-white py-1.5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={16} className={`text-[#71717A] ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContactModal?.();
            }}
            className="mt-2 w-full py-3.5 text-center text-xs font-mono tracking-wider font-bold rounded-2xl bg-white text-[#070709] flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
          >
            <span>{t.nav.startProject}</span>
            <Sparkles size={14} />
          </button>
        </div>
      )}
    </header>
  );
};
