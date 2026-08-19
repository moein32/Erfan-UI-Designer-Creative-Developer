import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCursor } from '../../context/CursorContext';
import { AmbientLight, GridField, TypographicWatermark } from '../ui/VisualEnvironment';

export const SkillsUniverse: React.FC = () => {
  const { t, isRTL, formatNumber } = useLanguage();
  const { setCursor, resetCursor } = useCursor();
  const skillsData = t.experienceSection.skills;
  const categories = skillsData.categories;
  const [selectedCatId, setSelectedCatId] = useState<string>(categories[0]?.id || 'design');

  const activeCategory = categories.find((c) => c.id === selectedCatId) || categories[0];

  return (
    <section
      id="skills"
      className="py-32 md:py-44 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative overflow-hidden"
    >
      {/* Environmental Architectural Depth */}
      <AmbientLight position="top-right" tint="silver" size="lg" intensity="soft" />
      <AmbientLight position="bottom-center" tint="violet" size="md" intensity="subtle" />
      <GridField opacity={0.25} />
      <TypographicWatermark text="SKILLS" position="top-left" opacity="opacity-[0.02]" />

      {/* Chapter Tagline */}
      <div className="flex items-center gap-3 mb-10 md:mb-14 relative z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-[#F5F5F7] shadow-[0_0_8px_rgba(245,245,247,0.6)]" />
        <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#A1A1AA] uppercase">
          {formatNumber(skillsData.number)} / {skillsData.tag}
        </span>
      </div>

      {/* Section Headline */}
      <div className="mb-14 md:mb-20 max-w-3xl space-y-4 relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F5F7] leading-tight">
          {skillsData.title}
        </h2>
        <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
          {skillsData.description}
        </p>
      </div>

      {/* Interactive Category Selector Tabs — Dark Liquid Glass */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 relative z-10">
        {categories.map((cat) => {
          const isSelected = selectedCatId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCatId(cat.id)}
              className={`p-5 rounded-2xl text-start transition-all duration-300 border cursor-pointer ${
                isSelected
                  ? 'bg-white text-[#070709] border-white shadow-lg -translate-y-0.5'
                  : 'glass-subtle hover:glass-medium text-[#A1A1AA] hover:text-[#F5F5F7] border-white/8 hover:border-white/20'
              }`}
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`font-mono text-xs font-bold ${
                    isSelected ? 'text-[#070709]/70' : 'text-[#71717A]'
                  }`}
                >
                  {formatNumber(cat.count)}
                </span>
                <div
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-emerald-500' : 'bg-transparent border border-white/20'
                  }`}
                />
              </div>

              <h3 className="font-bold text-sm sm:text-base leading-snug tracking-tight">
                {cat.name}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Active Category Display Panel — Focal Dark Liquid Glass Surface */}
      <div className="p-8 sm:p-12 rounded-[32px] glass-medium border border-white/12 shadow-2xl space-y-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-[#A1A1AA] uppercase">
              {isRTL ? 'دسته‌بندی فعال' : 'ACTIVE DOMAIN'}
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-[#F5F5F7] tracking-tight mt-1">
              {activeCategory.name}
            </h4>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md font-normal leading-relaxed">
            {activeCategory.description}
          </p>
        </div>

        {/* Real Skills Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeCategory.items.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl glass-subtle border border-white/8 hover:border-white/25 transition-all duration-300 shadow-md group flex flex-col justify-between space-y-4 cursor-default"
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-[#A1A1AA] text-[10px] font-mono font-semibold uppercase tracking-wider group-hover:bg-white group-hover:text-[#070709] transition-colors">
                  {skill.badge}
                </span>
                <span className="font-mono text-[10px] font-bold text-emerald-400">
                  {skill.level}
                </span>
              </div>

              <div>
                <h5 className="font-bold text-base sm:text-lg text-[#F5F5F7] tracking-tight group-hover:translate-x-1 transition-transform">
                  {skill.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
