import React, { useEffect, useRef, useState } from 'react';
import { ProjectData } from '../types';
import { useCursor } from '../context/CursorContext';
import { IphoneMockup } from './IphoneMockup';
import { OvaraExperience } from './projects/ovara/OvaraExperience';
import { ArvenExperience } from './projects/arven/ArvenExperience';
import { NivraExperience } from './projects/nivra/NivraExperience';
import { VaryaExperience } from './projects/varya/VaryaExperience';
import { ArrowUpRight, Sparkles, Layers, ChevronRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectSceneProps {
  project: ProjectData;
  index: number;
  total: number;
  onOpenCaseStudy: (project: ProjectData) => void;
  isPersianMode?: boolean;
}

export const ProjectScene: React.FC<ProjectSceneProps> = ({
  project,
  index,
  total,
  onOpenCaseStudy,
  isPersianMode = false,
}) => {
  // If this is Ovara, render the flagship OvaraExperience showcase!
  if (project.id === 'ovara') {
    return (
      <OvaraExperience
        project={project}
        index={index}
        total={total}
        onOpenCaseStudy={onOpenCaseStudy}
        isPersianMode={isPersianMode}
      />
    );
  }

  // If this is Arven, render the flagship ArvenExperience showcase!
  if (project.id === 'arven') {
    return (
      <ArvenExperience
        project={project}
        index={index}
        total={total}
        onOpenCaseStudy={onOpenCaseStudy}
        isPersianMode={isPersianMode}
      />
    );
  }

  // If this is Nivra, render the flagship NivraExperience showcase!
  if (project.id === 'nivra') {
    return (
      <NivraExperience
        project={project}
        index={index}
        total={total}
        onOpenCaseStudy={onOpenCaseStudy}
        isPersianMode={isPersianMode}
      />
    );
  }

  // If this is Varya / Veyra, render the flagship VaryaExperience showcase!
  if (project.id === 'varya' || project.id === 'veyra') {
    return (
      <VaryaExperience
        project={project}
        index={index}
        total={total}
        onOpenCaseStudy={onOpenCaseStudy}
        isPersianMode={isPersianMode}
      />
    );
  }

  const { setCursor, resetCursor } = useCursor();
  const sceneRef = useRef<HTMLDivElement>(null);
  const phoneWrapperRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const bgAccentRef = useRef<HTMLDivElement>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // GSAP ScrollTrigger Entrance & Parallax
  useEffect(() => {
    const el = sceneRef.current;
    const phone = phoneWrapperRef.current;
    const text = textContentRef.current;
    const bgAccent = bgAccentRef.current;

    if (!el || !phone || !text) return;

    const ctx = gsap.context(() => {
      // Entrance animation: Y: 160px -> 0, Scale: 0.82 -> 1, Rotation: 7deg -> 0deg, Opacity: 0 -> 1
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 25%',
          scrub: 0.8,
        },
      });

      entranceTl
        .fromTo(
          phone,
          {
            y: 140,
            scale: 0.85,
            rotation: index % 2 === 0 ? 6 : -6,
            opacity: 0.2,
          },
          {
            y: 0,
            scale: 1,
            rotation: 0,
            opacity: 1,
            ease: 'power2.out',
          }
        )
        .fromTo(
          text,
          {
            y: 60,
            opacity: 0.3,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
          },
          0
        );

      // Subtle parallax during main scroll through section
      gsap.to(phone, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      if (bgAccent) {
        gsap.fromTo(
          bgAccent,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1.2,
            opacity: 0.6,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              end: 'bottom 20%',
              scrub: 1.2,
            },
          }
        );
      }
    }, sceneRef);

    return () => ctx.revert();
  }, [index]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={sceneRef}
      id={`project-scene-${project.id}`}
      className="relative min-h-[95vh] md:min-h-screen py-16 md:py-28 flex items-center justify-center border-t border-[#111111]/10 overflow-hidden"
    >
      {/* Ambient background glow matching project accent color */}
      <div
        ref={bgAccentRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[680px] h-[350px] md:h-[500px] rounded-full blur-[110px] pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle, ${project.accentColor}18 0%, ${project.secondaryAccent}10 60%, transparent 80%)`,
        }}
      />

      {/* Giant subtle watermark index number */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 text-[140px] sm:text-[200px] lg:text-[260px] font-bold opacity-[0.03] select-none pointer-events-none font-display leading-none z-0">
        0{index + 1}
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
            isEven ? '' : 'lg:flex-row-reverse'
          }`}
        >
          {/* Left Textual Column */}
          <div
            ref={textContentRef}
            className={`space-y-6 lg:space-y-8 ${
              isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-2'
            }`}
          >
            {/* Meta Tracker */}
            <div className="flex items-center gap-3">
              <div className="bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-[#d1d1cf] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#111111]">
                  Case Study: 0{index + 1}
                </span>
              </div>
              <span className="text-[11px] font-mono tracking-widest text-[#777777] uppercase">
                {project.category}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-4">
                <h3
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#111111] cursor-pointer hover:opacity-85 transition-opacity"
                  onClick={() => onOpenCaseStudy(project)}
                  onMouseEnter={() => setCursor({ type: 'project', text: 'VIEW ↗' })}
                  onMouseLeave={resetCursor}
                >
                  {project.title}
                </h3>
                {project.persianTitle && (
                  <span className="text-base sm:text-lg font-persian text-[#888888]">
                    {project.persianTitle.split('—')[0]}
                  </span>
                )}
              </div>
              <p className="text-lg md:text-xl font-medium text-[#444444] leading-snug">
                {project.tagline}
              </p>
            </div>

            {/* Overview paragraph */}
            <p className="text-sm md:text-base text-[#555555] leading-relaxed max-w-xl">
              {project.overview}
            </p>

            {/* Project Metrics pill cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {project.metrics.slice(0, 3).map((metric) => (
                <div
                  key={metric.label}
                  className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#d1d1cf] shadow-xs"
                >
                  <div
                    className="font-display text-xl sm:text-2xl font-black tracking-tight"
                    style={{ color: project.accentColor }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#777777] truncate">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Screen Selector inside this Scene */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-50 block">
                Interactive Screen Views
              </span>
              <div className="flex flex-wrap gap-2">
                {project.appScreens.map((screen, idx) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                      activeScreenIndex === idx
                        ? 'bg-[#111111] text-[#F7F7F5] font-semibold shadow-xs'
                        : 'bg-[#FFFFFF] border border-[#d1d1cf] text-[#555555] hover:border-[#111111]'
                    }`}
                    onMouseEnter={() => setCursor({ type: 'button' })}
                    onMouseLeave={resetCursor}
                  >
                    {activeScreenIndex === idx && <Check size={11} className="text-emerald-400" />}
                    <span>{screen.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenCaseStudy(project)}
                id={`view-case-study-${project.id}`}
                className="group px-6 py-3.5 rounded-full bg-[#111111] text-[#F7F7F5] text-xs font-mono font-bold tracking-wider hover:bg-[#2A2A2A] transition-all flex items-center gap-2 shadow-md active:scale-95"
                onMouseEnter={() => setCursor({ type: 'project', text: 'VIEW ↗' })}
                onMouseLeave={resetCursor}
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#777777]">
                <span>{project.year}</span>
                <span>·</span>
                <span>{project.client}</span>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup Column */}
          <div
            ref={phoneWrapperRef}
            className={`flex justify-center items-center ${
              isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-1'
            }`}
          >
            <div
              className="relative cursor-pointer group"
              onClick={() => onOpenCaseStudy(project)}
              onMouseEnter={() => setCursor({ type: 'project', text: 'EXPAND ↗' })}
              onMouseLeave={resetCursor}
            >
              {/* Subtle background card base in natural stone tone */}
              <div className="absolute inset-0 -m-6 sm:-m-10 rounded-3xl bg-[#FFFFFF]/70 border border-[#d1d1cf] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] backdrop-blur-xs -z-10 group-hover:border-[#111111]/30 transition-all duration-500" />
              
              <IphoneMockup
                project={project}
                activeScreenIndex={activeScreenIndex}
                onScreenChange={setActiveScreenIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
