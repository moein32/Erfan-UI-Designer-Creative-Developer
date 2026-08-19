import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CursorProvider } from './context/CursorContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SectionHeading } from './components/SectionHeading';
import { ProjectScene } from './components/ProjectScene';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { PROJECTS } from './data/projectsData';
import { ProjectData } from './types';
import { AmbientLight, GridField } from './components/ui/VisualEnvironment';

gsap.registerPlugin(ScrollTrigger);

function PortfolioMain() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectData | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  // Initialize Lenis Smooth Scrolling and link with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const handleExploreWork = () => {
    const el = document.getElementById('selected-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#030304] text-[#F5F5F7] bg-noise transition-colors duration-300 ${isRTL ? 'font-persian' : ''}`}>
      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Floating Smart Navigation with Dark Liquid Glass & Language Switcher */}
      <Navigation
        onOpenContactModal={() => setIsInquiryModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onExploreWork={handleExploreWork}
        onOpenContact={() => setIsInquiryModalOpen(true)}
      />

      {/* 01 / SELECTED WORK SCENES */}
      <section id="selected-work" className="relative pt-16 md:pt-24 pb-8 overflow-hidden">
        <AmbientLight position="top-center" color="violet" size="xl" intensity="soft" />
        <GridField opacity={0.18} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHeading
            number="01"
            tag={t.sectionHeadings.work.tag}
            title={t.sectionHeadings.work.title}
            description={t.sectionHeadings.work.description}
          />
        </div>

        {/* 5 Deep Project Scenes */}
        <div className="space-y-4">
          {PROJECTS.map((project, idx) => (
            <ProjectScene
              key={project.id}
              project={project}
              index={idx}
              total={PROJECTS.length}
              onOpenCaseStudy={(p) => setSelectedCaseStudy(p)}
              isPersianMode={isRTL}
            />
          ))}
        </div>
      </section>

      {/* POST-PROJECT VISUAL EXPERIENCE LAYER */}
      <ExperienceSection onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />

      {/* FOOTER */}
      <Footer />

      {/* Full Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProject={(p) => setSelectedCaseStudy(p)}
      />

      {/* Quick Project Inquiry Modal */}
      <QuickInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CursorProvider>
        <PortfolioMain />
      </CursorProvider>
    </LanguageProvider>
  );
}
