import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCursor } from '../../context/CursorContext';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Github,
  Linkedin,
  Send,
  MessageSquare,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactFinaleProps {
  onOpenInquiryModal: () => void;
}

export const ContactFinale: React.FC<ContactFinaleProps> = ({ onOpenInquiryModal }) => {
  const { t, isRTL, formatNumber } = useLanguage();
  const { setCursor, resetCursor } = useCursor();
  const [copied, setCopied] = useState(false);

  const contactData = t.experienceSection.cinematicContact;
  const emailAddress = 'erfan.moein.design@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#0A0A0A', '#10B981', '#71717A', '#FFFFFF'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const socialLinks = [
    { label: 'GITHUB', url: 'https://github.com/erfanmoein', icon: <Github size={14} /> },
    { label: 'LINKEDIN', url: 'https://linkedin.com/in/erfanmoein', icon: <Linkedin size={14} /> },
    { label: 'TELEGRAM', url: 'https://t.me/erfanmoein', icon: <Send size={14} /> },
  ];

  return (
    <section
      id="contact"
      className="py-28 md:py-44 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5E7EB] relative overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-t from-[#F4F4F5] to-transparent rounded-full blur-3xl opacity-70" />
      </div>

      {/* Chapter Tag */}
      <div className="flex items-center gap-3 mb-10 md:mb-14">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A]" />
        <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#71717A] uppercase">
          {formatNumber(contactData.number)} / {contactData.tag}
        </span>
      </div>

      {/* Cinematic Display Headline */}
      <div className="mb-14 md:mb-20">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-[#0A0A0A] leading-[1.02] md:leading-[0.95] uppercase">
          <span className="block">{contactData.headline1}</span>
          <span className="block text-[#71717A] font-light">{contactData.headline2}</span>
          <span className="block">{contactData.headline3}</span>
        </h2>
      </div>

      {/* Subtext and Action Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-6 space-y-6">
          <p className="text-base sm:text-xl text-[#3F3F46] leading-relaxed max-w-lg font-normal">
            {contactData.subtext}
          </p>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-wider text-[#0A0A0A] uppercase">
              {contactData.status}
            </span>
          </div>
        </div>

        {/* Primary Interactive Contact Actions */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 sm:p-8 rounded-[28px] liquid-glass-strong border border-[#E5E7EB] shadow-2xl space-y-6">
            
            {/* Email Bar with Quick Copy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 bg-white rounded-2xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 px-3 py-1 text-sm font-mono font-bold text-[#0A0A0A] select-all truncate">
                <Mail size={16} className="text-[#71717A] shrink-0" />
                <span className="truncate">{emailAddress}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#27272A] transition-all text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? contactData.copied : contactData.copyEmail}</span>
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenInquiryModal}
                className="flex-1 py-4 px-6 rounded-2xl bg-[#0A0A0A] text-white text-xs font-mono font-bold tracking-wider hover:bg-[#27272A] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                <MessageSquare size={14} />
                <span>{contactData.startInquiry}</span>
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="py-4 px-6 rounded-2xl liquid-glass-pill border border-[#E5E7EB] text-[#0A0A0A] text-xs font-mono font-bold tracking-wider hover:bg-white transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                <span>{contactData.directEmail}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Social Channels Strip */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB] text-xs font-mono text-[#71717A]">
              <span>{contactData.timezone}</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5"
                    onMouseEnter={() => setCursor({ type: 'link' })}
                    onMouseLeave={resetCursor}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
