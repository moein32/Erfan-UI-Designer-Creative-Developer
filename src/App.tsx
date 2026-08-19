import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SectionHeading } from './components/SectionHeading';
import { ProjectScene } from './components/ProjectScene';
import { AboutSection } from './components/AboutSection';
import { Capabilities } from './components/Capabilities';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { PROJECTS } from './data/projectsData';
import { ProjectData } from './types';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectData | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isPersianMode, setIsPersianMode] = useState(false);

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
    <CursorProvider>
      <div className={`min-h-screen bg-[#F7F7F5] text-[#111111] bg-noise ${isPersianMode ? 'persian-sub-active' : ''}`}>
        {/* Custom Interactive Cursor */}
        <CustomCursor />

        {/* Floating Smart Navigation */}
        <Navigation
          onOpenContactModal={() => setIsInquiryModalOpen(true)}
          isPersianMode={isPersianMode}
          onTogglePersian={() => setIsPersianMode(!isPersianMode)}
        />

        {/* Hero Section */}
        <Hero
          onExploreWork={handleExploreWork}
          onOpenContact={() => setIsInquiryModalOpen(true)}
          isPersianMode={isPersianMode}
        />

        {/* 01 / SELECTED WORK SCENES */}
        <section id="selected-work" className="relative pt-16 md:pt-24 pb-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeading
              number="01"
              tag="PORTFOLIO HIGHLIGHTS"
              title="SELECTED WORK (2024–2026)."
              persianTitle="منتخب پروژه‌های طراحی و مهندسی"
              description="Five flagship digital ecosystems spanning luxury commerce, autonomous AI workspaces, geospatial travel, biometric wellness, and institutional fintech."
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
              />
            ))}
          </div>
        </section>

        {/* 02 / ABOUT SECTION */}
        <AboutSection />

        {/* 03 / CAPABILITIES */}
        <Capabilities />

        {/* 04 / PROCESS */}
        <Process />

        {/* 05 / CONTACT SECTION */}
        <ContactSection onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />

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
    </CursorProvider>
  );
}
