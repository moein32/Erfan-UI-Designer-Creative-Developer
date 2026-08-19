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
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5E7EB]"
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
        <div className="lg:col-span-7 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
          {CAPABILITIES.map((cap) => {
            const isActive = activeCapId === cap.id;
            return (
              <div
                key={cap.id}
                onClick={() => setActiveCapId(cap.id)}
                className={`group py-6 md:py-8 cursor-pointer transition-all duration-300 ${
                  isActive ? 'bg-[#0A0A0A]/[0.02]' : 'hover:bg-[#0A0A0A]/[0.01]'
                }`}
                onMouseEnter={() => setCursor({ type: 'button' })}
                onMouseLeave={resetCursor}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-xs font-mono font-bold text-[#A1A1AA] group-hover:text-[#0A0A0A] transition-colors">
                      {cap.number}
                    </span>
                    <h3
                      className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-colors ${
                        isActive ? 'text-[#0A0A0A]' : 'text-[#71717A] group-hover:text-[#0A0A0A]'
                      }`}
                    >
                      {cap.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-mono text-[#71717A] tracking-wider uppercase">
                      {cap.subtitle}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                        isActive
                          ? 'bg-[#0A0A0A] text-[#FFFFFF] border-[#0A0A0A]'
                          : 'border-[#E5E7EB] text-[#71717A] group-hover:border-[#0A0A0A]'
                      }`}
                    >
                      {isActive ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </div>
                </div>

                {/* Mobile Expanded View */}
                {isActive && (
                  <div className="lg:hidden mt-4 pt-4 border-t border-[#E5E7EB] space-y-4 animate-in fade-in duration-200">
                    <p className="text-sm text-[#52525B] leading-relaxed">{cap.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#FAFAFA] border border-[#E5E7EB] text-[#0A0A0A]"
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
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5E7EB] shadow-sm space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between pb-4 border-b border-[#F4F4F5]">
                  <span className="text-xs font-mono font-bold text-[#0A0A0A] bg-[#0A0A0A]/5 px-3 py-1 rounded-md">
                    {current.number} / SPECIFICATION
                  </span>
                  <span className="text-xs font-mono text-[#71717A]">{current.subtitle}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-2xl font-bold text-[#0A0A0A]">
                    {current.title}
                  </h4>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Highlight Quote */}
                <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#E5E7EB] text-xs font-mono text-[#3F3F46] flex items-center gap-2.5">
                  <Sparkles size={16} className="text-[#0A0A0A] shrink-0" />
                  <span>{current.highlight}</span>
                </div>

                {/* Skill Chips */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#71717A] tracking-widest uppercase block">
                    AREAS OF MASTERY
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#FAFAFA] border border-[#E5E7EB] text-[#0A0A0A] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-[#F4F4F5]">
                  <span className="text-xs font-mono text-[#71717A] tracking-widest uppercase block">
                    KEY DELIVERABLES
                  </span>
                  <div className="space-y-2">
                    {current.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-mono text-[#52525B]">
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
