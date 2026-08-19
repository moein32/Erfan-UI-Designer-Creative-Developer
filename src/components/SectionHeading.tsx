import React from 'react';

interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string;
  persianTitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'between';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  persianTitle,
  description,
  align = 'left',
  light = false,
}) => {
  return (
    <div className={`mb-12 md:mb-20 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : ''}`}>
      {/* Category tag & Number */}
      <div
        className={`flex items-center gap-3 text-xs font-mono tracking-widest uppercase mb-4 ${
          light ? 'text-[#AAAAAA]' : 'text-[#777777]'
        } ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="font-semibold text-[#111111] dark:text-[#F7F7F5] bg-[#111111]/5 px-2 py-0.5 rounded">
          {number}
        </span>
        <span>/</span>
        <span>{tag}</span>
        {persianTitle && (
          <>
            <span>·</span>
            <span className="font-persian text-[#888888]">{persianTitle}</span>
          </>
        )}
      </div>

      {/* Main Headline */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${align === 'center' ? 'items-center' : ''}`}>
        <h2
          className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] ${
            light ? 'text-[#F7F7F5]' : 'text-[#111111]'
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`max-w-md text-sm md:text-base leading-relaxed ${
              light ? 'text-[#A0A09C]' : 'text-[#666666]'
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
