import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { useCursor } from '../context/CursorContext';
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

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiryModal }) => {
  const { setCursor, resetCursor } = useCursor();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Mobile App / UI/UX',
    budget: '$10k - $25k',
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
      colors: ['#FF5C39', '#6366F1', '#10B981', '#111111'],
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
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#111111]/10"
    >
      <SectionHeading
        number="05"
        tag="GET IN TOUCH"
        title="LET’S CREATE SOMETHING MEMORABLE."
        persianTitle="همکاری و خلق پروژه‌های متمایز"
        description="Whether you are building a new product from scratch, revamping an existing design system, or seeking creative development partnership."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Email & Direct CTA */}
        <div className="lg:col-span-6 space-y-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] text-[#F7F7F5] space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#FF5C39]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>CURRENTLY ACCEPTING NEW CLIENTS</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Have a visionary idea?
              </h3>
              <p className="text-sm text-[#AAAAAA] leading-relaxed">
                Send a direct email or copy the address to your clipboard. Expect a detailed response within 24 hours.
              </p>
            </div>

            {/* Copyable Email Box */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Mail size={18} className="text-[#FF5C39] shrink-0" />
                <span className="font-mono text-xs sm:text-sm font-semibold truncate">
                  {emailAddress}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                id="copy-email-btn"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white text-black text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-white/90 active:scale-95 transition-all shadow-sm"
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels Ribbon */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#777777] block">DIRECT NETWORKS</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/05 text-xs font-mono flex items-center justify-between transition-colors text-white/90"
                    onMouseEnter={() => setCursor({ type: 'button', text: 'OPEN ↗' })}
                    onMouseLeave={resetCursor}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="text-white/50" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quick Brief Form */}
        <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#111111]/10 shadow-sm">
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#111111]">
                Inquiry Received!
              </h3>
              <p className="text-sm text-[#666666] max-w-md mx-auto">
                Thank you for reaching out, <span className="font-semibold">{formData.name}</span>. I have received your project details and will review your specifications promptly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#111111] text-[#F7F7F5] text-xs font-mono font-bold"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              <div>
                <span className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider block mb-1">
                  START A CONVERSATION
                </span>
                <p className="text-xs text-[#777777]">Fill out the brief below for project inquiries.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name-input" className="text-xs font-mono text-[#555555]">YOUR NAME *</label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E5E5E0] text-sm focus:outline-none focus:border-[#111111] font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email-input" className="text-xs font-mono text-[#555555]">EMAIL ADDRESS *</label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E5E5E0] text-sm focus:outline-none focus:border-[#111111] font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="service-select" className="text-xs font-mono text-[#555555]">DISCIPLINE</label>
                  <select
                    id="service-select"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E5E5E0] text-sm focus:outline-none focus:border-[#111111] font-sans"
                  >
                    <option>Mobile App / UI/UX</option>
                    <option>Design System (Tokens)</option>
                    <option>Creative Development (Next.js)</option>
                    <option>Full Product Redesign</option>
                    <option>Bilingual / RTL Persian UI</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="budget-select" className="text-xs font-mono text-[#555555]">BUDGET RANGE</label>
                  <select
                    id="budget-select"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E5E5E0] text-sm focus:outline-none focus:border-[#111111] font-sans"
                  >
                    <option>$5k - $10k</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message-input" className="text-xs font-mono text-[#555555]">PROJECT OVERVIEW &amp; TIMELINE</label>
                <textarea
                  id="message-input"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product goals, core audience, and target launch window..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border border-[#E5E5E0] text-sm focus:outline-none focus:border-[#111111] font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                id="submit-brief-btn"
                className="w-full py-4 rounded-xl bg-[#111111] text-[#F7F7F5] text-xs font-mono font-bold tracking-wider hover:bg-[#2A2A2A] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
                onMouseEnter={() => setCursor({ type: 'button', text: 'SEND' })}
                onMouseLeave={resetCursor}
              >
                <span>TRANSMIT PROJECT BRIEF</span>
                <Send size={13} />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
