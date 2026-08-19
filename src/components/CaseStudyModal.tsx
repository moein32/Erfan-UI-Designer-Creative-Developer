import React, { useEffect } from 'react';
import { ProjectData } from '../types';
import { useCursor } from '../context/CursorContext';
import { X, ArrowUpRight, CheckCircle, Layers, Palette, Type, Sparkles, ExternalLink } from 'lucide-react';
import { IphoneMockup } from './IphoneMockup';

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-[9000] bg-[#111111]/80 backdrop-blur-xl flex justify-center overflow-y-auto p-4 sm:p-6 md:p-10 animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Container */}
      <div
        id="case-study-modal-container"
        className="relative w-full max-w-5xl bg-[#F7F7F5] rounded-3xl md:rounded-[36px] border border-[#111111]/15 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-300 text-[#111111]"
      >
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-40 bg-[#F7F7F5]/90 backdrop-blur-md px-6 md:px-10 py-5 border-b border-[#E5E5E0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-[#777777] uppercase">
              CASE STUDY
            </span>
            <span className="text-[#CCCCCC]">/</span>
            <span className="text-xs font-mono font-bold text-[#111111]">{project.title}</span>
            {project.persianTitle && (
              <span className="hidden sm:inline-block text-xs font-persian text-[#888888]">
                ({project.persianTitle.split('—')[0]})
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            id="close-modal-btn"
            className="p-2.5 rounded-full bg-[#111111]/5 hover:bg-[#111111] hover:text-white transition-all duration-200"
            aria-label="Close Case Study"
            onMouseEnter={() => setCursor({ type: 'button', text: 'CLOSE' })}
            onMouseLeave={resetCursor}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-12 space-y-16">
          
          {/* Header & Hero Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border"
              style={{
                backgroundColor: `${project.accentColor}15`,
                borderColor: `${project.accentColor}40`,
                color: project.accentColor,
              }}
            >
              <Sparkles size={12} />
              <span>{project.badge}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
              {project.title} — {project.tagline}
            </h1>

            {project.persianTitle && (
              <div className="text-lg md:text-xl font-persian text-[#666666] leading-relaxed">
                {project.persianTitle}
              </div>
            )}

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E5E5E0] text-xs font-mono">
              <div>
                <span className="text-[#888888] block mb-1">CLIENT</span>
                <span className="text-[#111111] font-semibold">{project.client}</span>
              </div>
              <div>
                <span className="text-[#888888] block mb-1">ROLE</span>
                <span className="text-[#111111] font-semibold">{project.role}</span>
              </div>
              <div>
                <span className="text-[#888888] block mb-1">TIMELINE</span>
                <span className="text-[#111111] font-semibold">{project.timeline}</span>
              </div>
              <div>
                <span className="text-[#888888] block mb-1">YEAR</span>
                <span className="text-[#111111] font-semibold">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Device Showcase & Interactive Mockup */}
          <div className="relative rounded-3xl p-8 md:p-12 bg-[#121214] text-white flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden shadow-xl">
            <div className="space-y-4 max-w-md">
              <span className="text-xs font-mono tracking-widest uppercase text-[#AAAAAA]">
                INTERACTIVE SIMULATION
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Experience {project.title} on Device
              </h3>
              <p className="text-sm text-[#AAAAAA] leading-relaxed">
                Interact directly with the simulated iOS 18 device interface. Toggle tabs, inspect the dynamic island alerts, and explore the design tokens.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/10 text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full max-w-[280px] sm:max-w-[310px]">
              <IphoneMockup project={project} />
            </div>
          </div>

          {/* Quantified Business Impact & Metrics */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#777777] uppercase">
              <Layers size={14} />
              <span>MEASURABLE OUTCOMES</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] shadow-sm text-left"
                >
                  <div
                    className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-1"
                    style={{ color: project.accentColor }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-[#666666]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Narrative: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] space-y-4">
              <span className="text-xs font-mono tracking-widest text-rose-600 font-semibold uppercase">
                THE CHALLENGE
              </span>
              <h3 className="font-display text-xl font-bold">Overcoming Interface Friction</h3>
              <p className="text-sm text-[#555555] leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] space-y-4">
              <span className="text-xs font-mono tracking-widest text-emerald-600 font-semibold uppercase">
                THE SOLUTION
              </span>
              <h3 className="font-display text-xl font-bold">Systemic Architectural Innovation</h3>
              <p className="text-sm text-[#555555] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Design System & Token Tokens Showcase */}
          <div className="space-y-8 p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#777777] uppercase flex items-center gap-2">
                  <Palette size={14} />
                  <span>DESIGN SYSTEM TOKENS</span>
                </span>
                <h3 className="font-display text-2xl font-bold mt-1">Color Palette & Semantic Roles</h3>
              </div>
            </div>

            {/* Color Swatches */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.colorPalette.map((color) => (
                <div
                  key={color.name}
                  className="p-4 rounded-xl border border-[#ECECE8] flex flex-col justify-between h-32"
                >
                  <div
                    className="w-full h-12 rounded-lg border border-black/10 shadow-sm"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono font-semibold">
                      <span>{color.name}</span>
                      <span className="text-[#888888]">{color.hex}</span>
                    </div>
                    <span className="text-[10px] text-[#777777] block truncate">{color.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Typography Specimen */}
            <div className="pt-6 border-t border-[#ECECE8] space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#777777] uppercase flex items-center gap-2">
                <Type size={14} />
                <span>TYPOGRAPHIC CADENCE</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.typography.map((type) => (
                  <div key={type.font} className="p-5 rounded-xl bg-[#F7F7F5] border border-[#E5E5E0]">
                    <span className="text-xs font-mono text-[#888888] block mb-1">{type.usage}</span>
                    <h4 className="font-bold text-sm text-[#111111] mb-2">{type.font}</h4>
                    <p className="text-base text-[#444444] font-persian italic">"{type.sample}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E0] space-y-4">
            <h3 className="font-display text-lg font-bold">Shipped Deliverables & Artifacts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs font-mono text-[#444444]">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA in modal */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E5E5E0]">
            <span className="text-xs font-mono text-[#777777]">
              Case Study documented by Erfan · 2026
            </span>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-[#111111] text-[#F7F7F5] text-xs font-mono font-bold tracking-wider hover:bg-[#2B2B2B] transition-colors"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
