import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCursor } from '../../context/CursorContext';
import { Sparkles, Layers, Code2, MoveRight, MoveLeft, Terminal, Check } from 'lucide-react';

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
      className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5E7EB] relative overflow-hidden"
    >
      {/* Chapter Tagline */}
      <div className="flex items-center gap-3 mb-10 md:mb-14">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A]" />
        <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#71717A] uppercase">
          {formatNumber(skillsData.number)} / {skillsData.tag}
        </span>
      </div>

      {/* Section Headline */}
      <div className="mb-14 md:mb-20 max-w-3xl space-y-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0A0A0A] leading-tight">
          {skillsData.title}
        </h2>
        <p className="text-base sm:text-lg text-[#71717A] leading-relaxed">
          {skillsData.description}
        </p>
      </div>

      {/* Interactive Category Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {categories.map((cat) => {
          const isSelected = selectedCatId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCatId(cat.id)}
              className={`p-5 rounded-2xl text-start transition-all duration-300 border cursor-pointer ${
                isSelected
                  ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-md -translate-y-0.5'
                  : 'bg-[#FAFAFA] hover:bg-white text-[#0A0A0A] border-[#E5E7EB] hover:border-[#D4D4D8]'
              }`}
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`font-mono text-xs font-bold ${
                    isSelected ? 'text-white/60' : 'text-[#A1A1AA]'
                  }`}
                >
                  {formatNumber(cat.count)}
                </span>
                <div
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-emerald-400' : 'bg-transparent border border-[#D4D4D8]'
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

      {/* Active Category Display Panel */}
      <div className="p-8 sm:p-12 rounded-[32px] liquid-glass-strong border border-[#E5E7EB] shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E7EB]">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-[#71717A] uppercase">
              {isRTL ? 'دسته‌بندی فعال' : 'ACTIVE DOMAIN'}
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] tracking-tight mt-1">
              {activeCategory.name}
            </h4>
          </div>
          <p className="text-sm text-[#71717A] max-w-md font-normal leading-relaxed">
            {activeCategory.description}
          </p>
        </div>

        {/* Real Skills Items Grid (No fake percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeCategory.items.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0A0A0A] transition-all duration-300 shadow-xs hover:shadow-md group flex flex-col justify-between space-y-4 cursor-default"
              onMouseEnter={() => setCursor({ type: 'button' })}
              onMouseLeave={resetCursor}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-md bg-[#F4F4F5] text-[#71717A] text-[10px] font-mono font-semibold uppercase tracking-wider group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors">
                  {skill.badge}
                </span>
                <span className="font-mono text-[10px] font-bold text-emerald-600">
                  {skill.level}
                </span>
              </div>

              <div>
                <h5 className="font-bold text-base sm:text-lg text-[#0A0A0A] tracking-tight group-hover:translate-x-1 transition-transform">
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
