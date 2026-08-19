import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { CAPABILITIES } from '../data/projectsData';
import { useCursor } from '../context/CursorContext';
import { ArrowUpRight, Check, Sparkles, Plus, Minus } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const [activeCapId, setActiveCapId] = useState<string>(CAPABILITIES[0].id);

  return (
    <section
      id="capabilities"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#111111]/10"
    >
      <SectionHeading
        number="03"
        tag="CORE EXPERTISE"
        title="CAPABILITIES & DISCIPLINES."
        persianTitle="تخصص‌ها و حوزه‌های فعالیت"
        description="A specialized set of design and technical proficiencies developed over years of shipping high-impact products."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List of Capabilities with Interactive Hover / Click */}
        <div className="lg:col-span-7 divide-y divide-[#111111]/10 border-y border-[#111111]/10">
          {CAPABILITIES.map((cap) => {
            const isActive = activeCapId === cap.id;
            return (
              <div
                key={cap.id}
                onClick={() => setActiveCapId(cap.id)}
                className={`group py-6 md:py-8 cursor-pointer transition-all duration-300 ${
                  isActive ? 'bg-[#111111]/[0.02]' : 'hover:bg-[#111111]/[0.01]'
                }`}
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-xs font-mono font-bold text-[#888888] group-hover:text-[#111111] transition-colors">
                      {cap.number}
                    </span>
                    <h3
                      className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-colors ${
                        isActive ? 'text-[#111111]' : 'text-[#555555] group-hover:text-[#111111]'
                      }`}
                    >
                      {cap.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-mono text-[#888888] tracking-wider uppercase">
                      {cap.subtitle}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                        isActive
                          ? 'bg-[#111111] text-[#F7F7F5] border-[#111111]'
                          : 'border-[#D0D0CB] text-[#777777] group-hover:border-[#111111]'
                      }`}
                    >
                      {isActive ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </div>
                </div>

                {/* Mobile Expanded View */}
                {isActive && (
                  <div className="lg:hidden mt-4 pt-4 border-t border-[#E5E5E0] space-y-4 animate-in fade-in duration-200">
                    <p className="text-sm text-[#555555] leading-relaxed">{cap.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#FFFFFF] border border-[#E0E0DC] text-[#333333]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Sticky Detail Box (Desktop) */}
        <div className="hidden lg:block lg:col-span-5 sticky top-28">
          {(() => {
            const current = CAPABILITIES.find((c) => c.id === activeCapId) || CAPABILITIES[0];
            return (
              <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#111111]/10 shadow-lg space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-[#F0F0EC]">
                  <span className="text-xs font-mono font-bold text-[#111111] bg-[#111111]/5 px-3 py-1 rounded-md">
                    {current.number} / SPECIFICATION
                  </span>
                  <span className="text-xs font-mono text-[#888888]">{current.subtitle}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-2xl font-bold text-[#111111]">
                    {current.title}
                  </h4>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Highlight Quote */}
                <div className="p-4 rounded-xl bg-[#F7F7F5] border border-[#E5E5E0] text-xs font-mono text-[#444444] flex items-center gap-2.5">
                  <Sparkles size={16} className="text-[#FF5C39] shrink-0" />
                  <span>{current.highlight}</span>
                </div>

                {/* Skill Chips */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#888888] tracking-widest uppercase block">
                    AREAS OF MASTERY
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#F7F7F5] border border-[#E0E0DC] text-[#222222] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-[#F0F0EC]">
                  <span className="text-xs font-mono text-[#888888] tracking-widest uppercase block">
                    KEY DELIVERABLES
                  </span>
                  <div className="space-y-2">
                    {current.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-mono text-[#555555]">
                        <Check size={13} className="text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
