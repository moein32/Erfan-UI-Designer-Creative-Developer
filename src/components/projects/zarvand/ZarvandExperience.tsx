import React, { useEffect, useRef, useState } from 'react';
import { ProjectData } from '../../../types';
import { ZarvandPhoneScene } from './ZarvandPhoneScene';
import { ZarvandStory } from './ZarvandStory';
import { useCursor } from '../../../context/CursorContext';
import { AmbientLight } from '../../ui/VisualEnvironment';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ZarvandExperienceProps {
  project: ProjectData;
  index: number;
  total: number;
  onOpenCaseStudy: (project: ProjectData) => void;
  isPersianMode?: boolean;
}

export const ZarvandExperience: React.FC<ZarvandExperienceProps> = ({
  project,
  index,
  total,
  onOpenCaseStudy,
  isPersianMode = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const phoneWrapperRef = useRef<HTMLDivElement>(null);
  const storyWrapperRef = useRef<HTMLDivElement>(null);

  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const container = containerRef.current;
    const pinSection = pinSectionRef.current;
    const phone = phoneWrapperRef.current;
    const story = storyWrapperRef.current;

    if (!container || !pinSection || !phone || !story) return;

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isDesktop || prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=320%',
          pin: pinSection,
          scrub: 0.65,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.28) {
              setActiveChapterIndex(0);
            } else if (progress < 0.52) {
              setActiveChapterIndex(1);
            } else if (progress < 0.76) {
              setActiveChapterIndex(2);
            } else {
              setActiveChapterIndex(3);
            }
          },
        },
      });

      masterTl.fromTo(
        phone,
        {
          opacity: 0,
          scale: 0.78,
          y: 160,
          rotation: 6,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: 0,
          ease: 'power2.out',
          duration: 0.8,
        }
      );

      masterTl.fromTo(
        story,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          duration: 0.8,
        },
        '<0.1'
      );

      masterTl.to(phone, {
        y: -15,
        scale: 1.02,
        duration: 1.8,
        ease: 'none',
      });

      masterTl.to(
        phone,
        {
          scale: 0.88,
          y: -120,
          opacity: 0,
          ease: 'power2.in',
          duration: 0.7,
        },
        '>-0.2'
      );

      masterTl.to(
        story,
        {
          y: -80,
          opacity: 0,
          ease: 'power2.in',
          duration: 0.7,
        },
        '<'
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id={`project-${project.id}`}
      className="relative w-full min-h-screen border-b border-white/10"
    >
      {/* Pinned Experience Viewport */}
      <div
        ref={pinSectionRef}
        className="w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
      >
        {/* Subtle Amber Glow Backing */}
        <AmbientLight position="top-right" tint="amber" size="xl" intensity="soft" />

        {/* 2-Column Split: Editorial Story Left, Dominant Phone Right */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column: Editorial Narrative & Interactive Chapters */}
          <div
            ref={storyWrapperRef}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
          >
            <ZarvandStory
              project={project}
              activeChapterIndex={activeChapterIndex}
              onSelectChapter={(idx) => setActiveChapterIndex(idx)}
              onOpenCaseStudy={() => onOpenCaseStudy(project)}
              isPersianMode={isPersianMode}
            />
          </div>

          {/* Right Column: Dominant iPhone Scene */}
          <div
            ref={phoneWrapperRef}
            className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end"
            onMouseEnter={() => setCursor({ type: 'project', text: 'EXPLORE' })}
            onMouseLeave={resetCursor}
          >
            <ZarvandPhoneScene
              activeChapterIndex={activeChapterIndex}
              onChapterChange={(idx) => setActiveChapterIndex(idx)}
              isInteractive={true}
              isPersianMode={isPersianMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
