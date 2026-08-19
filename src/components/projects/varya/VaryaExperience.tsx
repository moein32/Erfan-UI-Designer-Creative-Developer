import React, { useEffect, useRef, useState } from 'react';
import { ProjectData } from '../../../types';
import { VaryaPhoneScene } from './VaryaPhoneScene';
import { VaryaStory } from './VaryaStory';
import { useCursor } from '../../../context/CursorContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VaryaExperienceProps {
  project: ProjectData;
  index: number;
  total: number;
  onOpenCaseStudy: (project: ProjectData) => void;
  isPersianMode?: boolean;
}

export const VaryaExperience: React.FC<VaryaExperienceProps> = ({
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

    // Check media query for mobile/tablet vs desktop
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isDesktop || prefersReducedMotion) {
      // On mobile or reduced-motion, keep natural flow
      return;
    }

    const ctx = gsap.context(() => {
      // Main Master Timeline for Pinned 350vh Experience
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
            // Map scroll progress to 4 chapters (0, 1, 2, 3)
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

      // 1. Entrance Phase
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

      // 2. Mid-Scroll Active Scrubbing (Chapters 0 -> 1 -> 2 -> 3)
      masterTl.to(phone, {
        y: -15,
        scale: 1.02,
        duration: 1.8,
        ease: 'none',
      });

      // 3. Exit Phase — Seamless transition into next project
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
      className="relative w-full min-h-screen border-b border-black/5"
    >
      {/* Pinned Experience Viewport */}
      <div
        ref={pinSectionRef}
        className="w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-12 relative overflow-hidden"
      >
        {/* Subtle Ambient Bioluminescent Gradient Backing */}
        <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
          <div className="absolute -top-[15%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-[#BCAEFF]/20 via-[#83DFF1]/15 to-transparent blur-3xl" />
          <div className="absolute -bottom-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-[#8DE5C8]/15 via-[#6F62E8]/10 to-transparent blur-3xl" />
        </div>

        {/* 2-Column Split: Editorial Story Left, Dominant Phone Right */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column: Editorial Narrative & Interactive Chapters (6 cols) */}
          <div
            ref={storyWrapperRef}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
          >
            <VaryaStory
              project={project}
              activeChapterIndex={activeChapterIndex}
              onSelectChapter={(idx) => setActiveChapterIndex(idx)}
              onOpenCaseStudy={() => onOpenCaseStudy(project)}
              isPersianMode={isPersianMode}
            />
          </div>

          {/* Right Column: Dominant iPhone Scene (6 cols) */}
          <div
            ref={phoneWrapperRef}
            className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end"
            onMouseEnter={() => setCursor({ type: 'project', text: 'EXPLORE' })}
            onMouseLeave={resetCursor}
          >
            <VaryaPhoneScene
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
