import React, { useState, useEffect } from 'react';
import { useCursor } from '../context/CursorContext';
import { useLanguage } from '../context/LanguageContext';
import { X, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const { setCursor, resetCursor } = useCursor();
  const { t, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Mobile UI/UX',
    timeline: 'Within 1 Month',
    message: '',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F5F5F7', '#34D399', '#71717A', '#FFFFFF'],
    });
  };

  return (
    <div
      id="quick-inquiry-modal-backdrop"
      className="fixed inset-0 z-[9500] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="quick-inquiry-modal-card"
        className="relative w-full max-w-lg glass-strong rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-[#F5F5F7]"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#F5F5F7]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isRTL ? 'ثبت درخواست همکاری با عرفان' : 'START A PROJECT WITH ERFAN'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full glass-subtle hover:bg-white hover:text-[#070709] transition-colors cursor-pointer text-[#A1A1AA]"
            aria-label={t.nav.close}
          >
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <Check size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#F5F5F7]">{t.contact.submittedTitle}</h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA]">
              {t.contact.submittedDesc}
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 rounded-full bg-white text-[#070709] text-xs font-mono font-bold hover:bg-[#E4E4E7] cursor-pointer"
            >
              {t.contact.closeBtn}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-start">
            <div className="space-y-1">
              <label htmlFor="modal-name-input" className="text-xs font-mono text-[#A1A1AA]">{t.contact.nameLabel}</label>
              <input
                id="modal-name-input"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.contact.namePlaceholder}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F5F7] placeholder-[#71717A] focus:outline-none focus:border-white/30"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="modal-email-input" className="text-xs font-mono text-[#A1A1AA]">{t.contact.emailInputLabel}</label>
              <input
                id="modal-email-input"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.contact.emailPlaceholder}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F5F7] placeholder-[#71717A] focus:outline-none focus:border-white/30 dir-ltr text-start"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="modal-scope-select" className="text-xs font-mono text-[#A1A1AA]">{t.contact.serviceLabel}</label>
                <select
                  id="modal-scope-select"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#1C1C1F] border border-white/10 text-xs text-[#F5F5F7] focus:outline-none focus:border-white/30"
                >
                  {t.contact.serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#1C1C1F] text-[#F5F5F7]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-timeline-select" className="text-xs font-mono text-[#A1A1AA]">{t.contact.timelineLabel}</label>
                <select
                  id="modal-timeline-select"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#1C1C1F] border border-white/10 text-xs text-[#F5F5F7] focus:outline-none focus:border-white/30"
                >
                  {t.contact.timelineOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#1C1C1F] text-[#F5F5F7]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="modal-msg-input" className="text-xs font-mono text-[#A1A1AA]">{t.contact.detailsLabel}</label>
              <textarea
                id="modal-msg-input"
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.contact.detailsPlaceholder}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F5F7] placeholder-[#71717A] focus:outline-none focus:border-white/30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-white text-[#070709] text-xs font-mono font-bold tracking-wider hover:bg-[#E4E4E7] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md cursor-pointer"
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
  );
};
