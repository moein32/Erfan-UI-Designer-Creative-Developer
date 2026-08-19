import React, { useState, useEffect, useRef } from 'react';
import { ProjectData } from '../../../types';
import { NivraPhoneScene } from './NivraPhoneScene';
import { NivraStory } from './NivraStory';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NivraExperienceProps {
  project: ProjectData;
  index: number;
  total: number;
  onOpenCaseStudy: (project: ProjectData) => void;
  isPersianMode?: boolean;
}

export const NivraExperience: React.FC<NivraExperienceProps> = ({
  project,
  index,
  total,
  onOpenCaseStudy,
  isPersianMode = false,
}) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const phoneWrapperRef = useRef<HTMLDivElement>(null);
  const storyWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pinContainer = pinContainerRef.current;
    const phone = phoneWrapperRef.current;
    const story = storyWrapperRef.current;

    if (!section || !pinContainer || !phone || !story) return;

    // Check if on desktop screen width (>= 1024px)
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        // Desktop: Immersive pinned scroll timeline across 320% space
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=320%',
            pin: pinContainer,
            scrub: 0.8,
            onUpdate: (self) => {
              const progress = self.progress;
              // Map 0 -> 1 progress into 4 discrete chapter states
              if (progress < 0.25) {
                setActiveChapterIndex(0); // 01 DISCOVER
              } else if (progress < 0.5) {
                setActiveChapterIndex(1); // 02 PLAN
              } else if (progress < 0.75) {
                setActiveChapterIndex(2); // 03 EXPLORE
              } else {
                setActiveChapterIndex(3); // 04 TRAVEL
              }
            },
          },
        });

        // 1. Entrance animation: opacity 0 -> 1, scale 0.78 -> 1, y 160 -> 0, rotation 6deg -> 0
        mainTl
          .fromTo(
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
              duration: 0.25,
              ease: 'power2.out',
            },
            0
          )
          .fromTo(
            story,
            {
              opacity: 0.2,
              y: 60,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.25,
              ease: 'power2.out',
            },
            0
          );

        // 2. Mid scroll subtle elevation
        mainTl.to(
          phone,
          {
            y: -20,
            duration: 0.5,
            ease: 'none',
          },
          0.25
        );

        // 3. Smooth exit transition at final 15%: scale down, translate up, fade out
        mainTl
          .to(
            phone,
            {
              scale: 0.9,
              y: -80,
              opacity: 0.5,
              duration: 0.25,
              ease: 'power2.in',
            },
            0.75
          )
          .to(
            story,
            {
              y: -50,
              opacity: 0.4,
              duration: 0.25,
              ease: 'power2.in',
            },
            0.75
          );
      } else {
        // Mobile & Tablet: Standard non-pinned responsive entrance
        gsap.fromTo(
          phone,
          {
            opacity: 0.3,
            scale: 0.88,
            y: 80,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 0.8,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id={`project-${project.id}`}
      className="relative w-full border-t border-[#E8E8E4] bg-transparent"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinContainerRef}
        className="w-full min-h-screen flex flex-col justify-center py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto"
      >
        {/* Subtle Environmental Sunset/Sky Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#168DF5]/10 via-[#18C5BD]/8 to-[#FF9D62]/5 blur-3xl pointer-events-none -z-10" />

        {/* Section Header Meta Tracker */}
        <div className="flex items-center justify-between border-b border-[#E8E8E4] pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#111116]">
              PROJECT {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#168DF5]" />
            <span className="text-xs font-mono text-[#888884] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#E0E0DC] text-[11px] font-mono text-[#168DF5] font-bold">
              SCROLL-LINKED STORYTELLING
            </span>
          </div>
        </div>

        {/* Main Grid: Phone Centerpiece & Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Phone Chassis with Active Real UI */}
          <div
            ref={phoneWrapperRef}
            className="lg:col-span-6 flex justify-center order-2 lg:order-1"
          >
            <NivraPhoneScene
              activeChapterIndex={activeChapterIndex}
              onChapterChange={(idx) => setActiveChapterIndex(idx)}
              isInteractive={true}
              isPersianMode={isPersianMode}
            />
          </div>

          {/* Right Column: Editorial Narrative & 4 Story Chapters */}
          <div
            ref={storyWrapperRef}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <NivraStory
              project={project}
              activeChapterIndex={activeChapterIndex}
              onSelectChapter={(idx) => setActiveChapterIndex(idx)}
              onOpenCaseStudy={() => onOpenCaseStudy(project)}
              isPersianMode={isPersianMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
