import React, { useRef, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { PROCESS_STEPS } from '../data/projectsData';
import { useCursor } from '../context/CursorContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Process: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from('.process-card-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#d1d1cf]"
    >
      <SectionHeading
        number="04"
        tag="HOW I WORK"
        title="THE 6-PHASE CRAFT PROCESS."
        persianTitle="فرآیند شش‌گانه طراحی تا توسعه"
        description="A disciplined, repeatable methodology that turns strategic ambiguity into market-defining digital software."
      />

      {/* Grid of 6 Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.number}
            className="process-card-item p-8 rounded-3xl bg-[#FFFFFF] border border-[#d1d1cf] flex flex-col justify-between hover:border-[#111111]/40 hover:shadow-sm transition-all duration-300 group shadow-xs"
            onMouseEnter={() => setCursor({ type: 'button' })}
            onMouseLeave={resetCursor}
          >
            <div className="space-y-4">
              {/* Header number & phase badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F0F0EC]">
                <span className="font-display text-3xl font-extrabold text-[#111111]">
                  {step.number}
                </span>
                <div className="flex items-center gap-2">
                  {step.persianPhase && (
                    <span className="text-xs font-persian text-[#888888]">
                      {step.persianPhase}
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-md bg-[#111111]/5 text-[11px] font-mono font-bold text-[#111111] uppercase tracking-wider">
                    {step.phase}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-[#111111] group-hover:text-[#FF5C39] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Activities list */}
              <div className="pt-3 space-y-1.5">
                <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase block mb-1">
                  ACTIVITIES
                </span>
                {step.activities.map((act) => (
                  <div key={act} className="flex items-center gap-2 text-xs font-mono text-[#555555]">
                    <span className="w-1 h-1 rounded-full bg-[#111111]/40" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Output Phase Milestone */}
            <div className="mt-6 pt-4 border-t border-[#F0F0EC] flex items-center justify-between text-xs font-mono">
              <span className="text-[#888888] truncate max-w-[190px]">
                {step.output}
              </span>
              <div className="w-6 h-6 rounded-full bg-[#111111]/5 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                <ArrowRight size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
