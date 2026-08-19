import React, { useState, useEffect, useRef } from 'react';
import { ProjectData } from '../../../types';
import { NivraPhoneScene } from './NivraPhoneScene';
import { NivraStory } from './NivraStory';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AmbientLight } from '../../ui/VisualEnvironment';

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

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=320%',
            pin: pinContainer,
            scrub: 0.8,
            onUpdate: (self) => {
              const progress = self.progress;
              if (progress < 0.25) {
                setActiveChapterIndex(0);
              } else if (progress < 0.5) {
                setActiveChapterIndex(1);
              } else if (progress < 0.75) {
                setActiveChapterIndex(2);
              } else {
                setActiveChapterIndex(3);
              }
            },
          },
        });

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

        mainTl.to(
          phone,
          {
            y: -20,
            duration: 0.5,
            ease: 'none',
          },
          0.25
        );

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
        gsap.fromTo(
          phone,
          { opacity: 0.3, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              end: 'top 20%',
              scrub: 0.8,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={`project-${project.id}`}
      className="relative w-full bg-transparent overflow-hidden"
    >
      <div
        ref={pinContainerRef}
        className="w-full min-h-screen flex flex-col justify-center py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto relative"
      >
        {/* Subtle Cyan Atmosphere for Nivra */}
        <AmbientLight position="center" tint="cyan" size="xl" intensity="soft" />

        {/* Flagship Scene Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#F5F5F7]">
              PROJECT {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="px-3 py-1 rounded-full glass-subtle border border-white/10 text-[11px] font-mono text-[#A1A1AA]">
              SPATIAL EXPLORATION ENGINE
            </span>
          </div>
        </div>

        {/* Main Grid: Device Mockup on Left, Narrative Chapters on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div
            ref={phoneWrapperRef}
            className="lg:col-span-6 flex justify-center will-change-transform"
          >
            <NivraPhoneScene
              activeChapterIndex={activeChapterIndex}
              onChapterChange={(idx) => setActiveChapterIndex(idx)}
              isInteractive={true}
            />
          </div>

          <div ref={storyWrapperRef} className="lg:col-span-6 will-change-transform">
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
    </section>
  );
};
