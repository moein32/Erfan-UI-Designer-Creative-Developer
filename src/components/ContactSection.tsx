import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { useCursor } from '../context/CursorContext';
import { useLanguage } from '../context/LanguageContext';
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

interface ContactSectionProps {
  onOpenInquiryModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const { setCursor, resetCursor } = useCursor();
  const { t, isRTL } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Mobile App / UI/UX',
    timeline: '1-2 Months',
    message: '',
  });

  const emailAddress = 'erfan.moein.design@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#0A0A0A', '#10B981', '#71717A', '#FFFFFF'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
    });
  };

  const socialLinks = [
    { label: 'GITHUB', url: 'https://github.com/erfanmoein', icon: <Github size={14} /> },
    { label: 'LINKEDIN', url: 'https://linkedin.com/in/erfanmoein', icon: <Linkedin size={14} /> },
    { label: 'DRIBBBLE', url: 'https://dribbble.com/erfanmoein', icon: <Sparkles size={14} /> },
    { label: 'TELEGRAM', url: 'https://t.me/erfan_moein', icon: <MessageSquare size={14} /> },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5E7EB]"
    >
      <SectionHeading
        number={t.sectionHeadings.contact.number}
        tag={t.sectionHeadings.contact.tag}
        title={t.sectionHeadings.contact.title}
        description={t.sectionHeadings.contact.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Email & Direct CTA */}
        <div className="lg:col-span-6 space-y-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0A] text-[#FFFFFF] space-y-6 shadow-xl relative overflow-hidden border border-[#27272A]">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{t.contact.directTitle}</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                {isRTL ? 'ایده یا محصولی در ذهن دارید؟' : 'Have a visionary idea?'}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {isRTL
                  ? 'یک پیام مستقیم ارسال کنید یا آدرس ایمیل را کپی نمایید. در کمتر از ۲۴ ساعت پاسخ دریافت خواهید کرد.'
                  : 'Send a direct email or copy the address to your clipboard. Expect a thoughtful response within 24 hours.'}
              </p>
            </div>

            {/* Copyable Email Box — Liquid Glass on Dark */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Mail size={18} className="text-white shrink-0" />
                <span className="font-mono text-xs sm:text-sm font-semibold truncate dir-ltr">
                  {emailAddress}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                id="copy-email-btn"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white text-black text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-white/90 active:scale-95 transition-all shadow-sm cursor-pointer"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span>{isRTL ? 'کپی شد!' : 'COPIED!'}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>{isRTL ? 'کپی ایمیل' : 'COPY EMAIL'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels Ribbon */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#71717A] block">
                {isRTL ? 'شبکه‌های اجتماعی و ارتباط مستقیم' : 'DIRECT NETWORKS'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/05 text-xs font-mono flex items-center justify-between transition-colors text-white/90"
                    onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.view })}
                    onMouseLeave={resetCursor}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className={`text-white/50 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quick Brief Form */}
        <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5E7EB] shadow-xs">
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0A0A0A]">
                {t.contact.submittedTitle}
              </h3>
              <p className="text-sm text-[#52525B] max-w-md mx-auto">
                {t.contact.submittedDesc}
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#0A0A0A] text-[#FFFFFF] text-xs font-mono font-bold cursor-pointer"
              >
                {t.contact.closeBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-start">
              <div>
                <span className="text-xs font-mono font-bold text-[#0A0A0A] uppercase tracking-wider block mb-1">
                  {t.contact.formTitle}
                </span>
                <p className="text-xs text-[#71717A]">{t.contact.note}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name-input" className="text-xs font-mono text-[#52525B]">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#0A0A0A]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email-input" className="text-xs font-mono text-[#52525B]">
                    {t.contact.emailInputLabel}
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#0A0A0A] dir-ltr text-start"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="service-select" className="text-xs font-mono text-[#52525B]">
                    {t.contact.serviceLabel}
                  </label>
                  <select
                    id="service-select"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#0A0A0A]"
                  >
                    {t.contact.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="timeline-select" className="text-xs font-mono text-[#52525B]">
                    {t.contact.timelineLabel}
                  </label>
                  <select
                    id="timeline-select"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#0A0A0A]"
                  >
                    {t.contact.timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message-input" className="text-xs font-mono text-[#52525B]">
                  {t.contact.detailsLabel}
                </label>
                <textarea
                  id="message-input"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.detailsPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#0A0A0A] resize-none"
                />
              </div>

              <button
                type="submit"
                id="submit-brief-btn"
                className="w-full py-4 rounded-xl bg-[#0A0A0A] text-[#FFFFFF] text-xs font-mono font-bold tracking-wider hover:bg-[#27272A] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"
                onMouseEnter={() => setCursor({ type: 'button', text: t.cursor.send })}
                onMouseLeave={resetCursor}
              >
                <span>{t.contact.submitBtn}</span>
                <Send size={13} className={isRTL ? 'rotate-180' : ''} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
