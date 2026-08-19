import React, { useRef, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { useCursor } from '../context/CursorContext';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Process: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const { t, isRTL, formatNumber } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from('.process-card-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  const steps = t.process.steps;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5E7EB]"
    >
      <SectionHeading
        number={t.sectionHeadings.process.number}
        tag={t.sectionHeadings.process.tag}
        title={t.sectionHeadings.process.title}
        description={t.sectionHeadings.process.description}
      />

      {/* Grid of 6 Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="process-card-item p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E7EB] flex flex-col justify-between hover:border-[#0A0A0A]/30 hover:shadow-md transition-all duration-300 group shadow-xs"
            onMouseEnter={() => setCursor({ type: 'button' })}
            onMouseLeave={resetCursor}
          >
            <div className="space-y-4">
              {/* Header number & phase badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                <span className="font-display text-3xl font-extrabold text-[#0A0A0A]">
                  {formatNumber(step.number)}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#0A0A0A]/5 text-[11px] font-mono font-bold text-[#0A0A0A] uppercase tracking-wider">
                  {step.phase}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-[#0A0A0A] group-hover:text-[#52525B] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Activities list */}
              <div className="pt-3 space-y-1.5">
                <span className="text-[10px] font-mono text-[#71717A] tracking-widest uppercase block mb-1">
                  {isRTL ? 'فعالیت‌های کلیدی' : 'ACTIVITIES'}
                </span>
                {step.activities.map((act) => (
                  <div key={act} className="flex items-center gap-2 text-xs font-mono text-[#52525B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]/40 shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Output Phase Milestone */}
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono">
              <span className="text-[#71717A] truncate max-w-[200px]">
                {step.output}
              </span>
              <div className="w-7 h-7 rounded-full liquid-glass flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-white transition-all">
                {isRTL ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
