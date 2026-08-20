import React from 'react';
import { PhilosophyExperience } from './PhilosophyExperience';
import { InteractiveApproach } from './InteractiveApproach';
import { SkillsUniverse } from './SkillsUniverse';
import { ContactFinale } from './ContactFinale';

interface ExperienceSectionProps {
  onOpenInquiryModal: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenInquiryModal }) => {
  return (
    <div id="experience-layer" className="relative">
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

