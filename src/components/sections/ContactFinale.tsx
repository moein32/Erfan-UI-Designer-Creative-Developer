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
import { AmbientLight, GridField, TypographicWatermark } from '../ui/VisualEnvironment';
import { VisualImageEnvironment } from '../ui/VisualImageEnvironment';
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
      colors: ['#F5F5F7', '#10B981', '#71717A', '#818CF8'],
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
      className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-hidden"
    >
      {/* Right-Focal Atmospheric Background Layer */}
      <VisualImageEnvironment
        imageSrc="/assets/images/portfolio-atmosphere.webp"
        position={isRTL ? "left" : "right"}
        blurAmount="50px"
        opacity={0.2}
        overlayOpacity={0.8}
        scale={1.12}
        enableParallax={true}
      />

      {/* Environmental Architectural Depth */}
      <AmbientLight position="bottom-center" color="violet" size="xl" intensity="soft" />
      <AmbientLight position="top-right" color="indigo" size="lg" intensity="subtle" />
      <GridField opacity={0.2} maskRadius="ellipse 80% 60% at 50% 70%" />
      <TypographicWatermark text="VISION" position="bottom-right" opacity="opacity-[0.02]" />

      {/* Chapter Tag */}
      <div className="flex items-center gap-3 mb-10 md:mb-14 relative z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-[#F5F5F7] shadow-[0_0_8px_rgba(245,245,247,0.6)]" />
        <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#A1A1AA] uppercase">
          {formatNumber(contactData.number)} / {contactData.tag}
        </span>
      </div>

      {/* Cinematic Display Headline */}
      <div className="mb-14 md:mb-20 relative z-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-[#F5F5F7] leading-[1.02] md:leading-[0.95] uppercase">
          <span className="block">{contactData.headline1}</span>
          <span className="block text-[#71717A] font-light">{contactData.headline2}</span>
          <span className="block">{contactData.headline3}</span>
        </h2>
      </div>

      {/* Subtext and Action Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end relative z-10">
        <div className="lg:col-span-6 space-y-6">
          <p className="text-base sm:text-xl text-[#A1A1AA] leading-relaxed max-w-lg font-normal">
            {contactData.subtext}
          </p>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-wider text-[#F5F5F7] uppercase">
              {contactData.status}
            </span>
          </div>
        </div>

        {/* Primary Interactive Contact Actions — Single Dominant Liquid Glass Console */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 sm:p-8 rounded-[32px] glass-strong border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
            {/* Top Specular Shimmer */}
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/10 via-white/3 to-transparent pointer-events-none" />

            {/* Email Bar with Quick Copy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 bg-[#0D0D11]/90 rounded-2xl border border-white/10 relative z-10">
              <div className="flex items-center gap-3 px-3 py-1 text-sm font-mono font-bold text-[#F5F5F7] select-all truncate">
                <Mail size={16} className="text-[#71717A] shrink-0" />
                <span className="truncate">{emailAddress}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3 rounded-xl bg-white text-black hover:bg-[#E4E4E7] transition-all text-xs font-mono font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copied ? contactData.copied : contactData.copyEmail}</span>
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 relative z-10">
              <button
                onClick={onOpenInquiryModal}
                className="flex-1 py-4 px-6 rounded-2xl bg-white text-black text-xs font-mono font-bold tracking-wider hover:bg-[#E4E4E7] transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95 cursor-pointer"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                <MessageSquare size={14} />
                <span>{contactData.startInquiry}</span>
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="py-4 px-6 rounded-2xl glass-subtle border border-white/10 text-[#F5F5F7] text-xs font-mono font-bold tracking-wider hover:bg-white/10 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                <span>{contactData.directEmail}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Social Channels Strip */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-[#71717A] relative z-10">
              <span>{contactData.timezone}</span>

              <div className="flex items-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F5F5F7] transition-colors flex items-center gap-1.5"
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
