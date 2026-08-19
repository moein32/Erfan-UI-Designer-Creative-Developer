import React from 'react';
import { PhilosophyExperience } from './PhilosophyExperience';
import { InteractiveApproach } from './InteractiveApproach';
import { SkillsUniverse } from './SkillsUniverse';
import { ContactFinale } from './ContactFinale';
import { VisualImageEnvironment } from '../ui/VisualImageEnvironment';

interface ExperienceSectionProps {
  onOpenInquiryModal: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenInquiryModal }) => {
  return (
    <div id="experience-layer" className="relative overflow-hidden">
      {/* Blurred Atmospheric Background Layer after Projects */}
      <VisualImageEnvironment
        imageSrc="/assets/images/erfan.png"
        blurAmount="65px"
        opacity={0.16}
        overlayOpacity={0.84}
        scale={1.12}
        position="center"
        enableParallax={true}
      />

      {/* 02 / DESIGN PHILOSOPHY & ETHOS */}
      <PhilosophyExperience />

      {/* 03 / INTERACTIVE CRAFT METHODOLOGY (PINNED DESKTOP EXPERIENCE) */}
      <InteractiveApproach />

      {/* 04 / TECHNICAL TOOLKIT & SKILLS UNIVERSE */}
      <SkillsUniverse />

      {/* 05 / CINEMATIC FINALE & INQUIRY */}
      <ContactFinale onOpenInquiryModal={onOpenInquiryModal} />
    </div>
  );
};

