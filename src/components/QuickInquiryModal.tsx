import React, { useState, useEffect } from 'react';
import { useCursor } from '../context/CursorContext';
import { X, Send, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const { setCursor, resetCursor } = useCursor();
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
    });
  };

  return (
    <div
      id="quick-inquiry-modal-backdrop"
      className="fixed inset-0 z-[9500] bg-[#111111]/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="quick-inquiry-modal-card"
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl border border-[#d1d1cf] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-[#111111]"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#F0F0EC] mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>START A PROJECT WITH ERFAN</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#111111]/5 hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold">Brief Transmitted!</h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              Thanks {formData.name}, I will evaluate your scope and reply via {formData.email} in under 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#111111] text-[#F7F7F5] text-xs font-mono font-bold cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-1">
              <label htmlFor="modal-name-input" className="text-xs font-mono text-[#555555]">YOUR NAME *</label>
              <input
                id="modal-name-input"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Erfan Moein"
                className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] border border-[#d1d1cf] text-sm focus:outline-none focus:border-[#111111]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="modal-email-input" className="text-xs font-mono text-[#555555]">EMAIL ADDRESS *</label>
              <input
                id="modal-email-input"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="erfan@studio.design"
                className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] border border-[#d1d1cf] text-sm focus:outline-none focus:border-[#111111]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="modal-scope-select" className="text-xs font-mono text-[#555555]">SERVICE</label>
                <select
                  id="modal-scope-select"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#F7F7F5] border border-[#d1d1cf] text-xs"
                >
                  <option>Mobile UI/UX</option>
                  <option>Design System</option>
                  <option>Creative Dev</option>
                  <option>Consulting</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-timeline-select" className="text-xs font-mono text-[#555555]">TIMELINE</label>
                <select
                  id="modal-timeline-select"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#F7F7F5] border border-[#d1d1cf] text-xs"
                >
                  <option>Urgent (&lt; 2 wks)</option>
                  <option>Within 1 Month</option>
                  <option>Flexible Q3/Q4</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="modal-details-input" className="text-xs font-mono text-[#555555]">PROJECT DETAILS</label>
              <textarea
                id="modal-details-input"
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe what you're building..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] border border-[#d1d1cf] text-sm focus:outline-none focus:border-[#111111] resize-none"
              />
            </div>

            <button
              type="submit"
              id="modal-submit-btn"
              className="w-full py-3.5 rounded-xl bg-[#111111] text-[#F7F7F5] text-xs font-mono font-bold tracking-wider hover:bg-[#2A2A2A] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
              onMouseEnter={() => setCursor({ type: 'button', text: 'SEND' })}
              onMouseLeave={resetCursor}
            >
              <span>SEND INQUIRY</span>
              <Send size={13} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
