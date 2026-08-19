import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'between';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  description,
  align = 'left',
}) => {
  const { isRTL, formatNumber } = useLanguage();

  return (
    <div className={`mb-12 md:mb-20 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : ''}`}>
      {/* Category tag & Number */}
      <div
        className={`flex items-center gap-3 text-xs font-mono tracking-widest uppercase mb-4 text-[#A1A1AA] ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="font-semibold text-[#F5F5F7] bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-md">
          {formatNumber(number)}
        </span>
        <span className="text-white/20">/</span>
        <span className="font-bold text-[#A1A1AA]">{tag}</span>
      </div>

      {/* Main Headline */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${align === 'center' ? 'items-center' : ''}`}>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#F5F5F7]">
          {title}
        </h2>

        {description && (
          <p className="max-w-md text-sm md:text-base leading-relaxed text-[#A1A1AA]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
