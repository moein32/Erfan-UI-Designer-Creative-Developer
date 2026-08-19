import React, { useState, useEffect, useRef } from 'react';
import { ProjectData } from '../../../types';
import { ArvenPhoneScene } from './ArvenPhoneScene';
import { ArvenStory } from './ArvenStory';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AmbientLight } from '../../ui/VisualEnvironment';

gsap.registerPlugin(ScrollTrigger);

interface ArvenExperienceProps {
  project: ProjectData;
  index: number;
  total: number;
  onOpenCaseStudy: (project: ProjectData) => void;
  isPersianMode?: boolean;
}

export const ArvenExperience: React.FC<ArvenExperienceProps> = ({
  project,
  index,
  total,
  onOpenCaseStudy,
  isPersianMode = false,
}) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const storyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const phone = phoneContainerRef.current;
    const story = storyContainerRef.current;

    if (!container || !phone || !story) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        phone,
        {
          y: 80,
          scale: 0.92,
          opacity: 0.4,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            end: 'top 20%',
            scrub: 0.8,
          },
        }
      );

      gsap.fromTo(
        story,
        {
          y: 60,
          opacity: 0.3,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            end: 'top 30%',
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id={`project-${project.id}`}
      className="relative min-h-screen py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Subtle Violet Atmosphere for Arven */}
      <AmbientLight position="top-right" tint="violet" size="xl" intensity="soft" />

      {/* Flagship Scene Section Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[#F5F5F7]">
            PROJECT {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
          <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <span className="px-3 py-1 rounded-full glass-subtle border border-white/10 text-[11px] font-mono text-[#A1A1AA]">
            AUTONOMOUS AGENT SYSTEM
          </span>
        </div>
      </div>

      {/* Main Grid: Device on one side, Editorial Story on the other */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Interactive Phone Mockup (Sticky on Desktop) */}
        <div
          ref={phoneContainerRef}
          className="lg:col-span-6 flex justify-center lg:sticky lg:top-24"
        >
          <ArvenPhoneScene
            activeChapterIndex={activeChapterIndex}
            onChapterChange={(idx) => setActiveChapterIndex(idx)}
            isInteractive={true}
          />
        </div>

        {/* Editorial Story, Narrative & System Chapters */}
        <div ref={storyContainerRef} className="lg:col-span-6">
          <ArvenStory
            project={project}
            activeChapterIndex={activeChapterIndex}
            onSelectChapter={(idx) => setActiveChapterIndex(idx)}
            onOpenCaseStudy={() => onOpenCaseStudy(project)}
            isPersianMode={isPersianMode}
          />
        </div>
      </div>
    </div>
  );
};
