import React from 'react';
import { Sparkles, Layers, ArrowUpRight, Compass, ShieldCheck, Zap, Palette, Type, CheckCircle2 } from 'lucide-react';
import { ProjectData } from '../../../types';

interface OvaraStoryProps {
  project: ProjectData;
  activeScreenIndex: number;
  onSelectScreen: (index: number) => void;
  onOpenCaseStudy: () => void;
  isPersianMode?: boolean;
}

export const OvaraStory: React.FC<OvaraStoryProps> = ({
  project,
  activeScreenIndex,
  onSelectScreen,
  onOpenCaseStudy,
  isPersianMode = false,
}) => {
  const steps = [
    {
      id: 0,
      number: '01',
      title: 'Shopping Home & Curated Feed',
      persianTitle: 'ویترین هوشمند و شخصی‌سازی‌شده',
      tagline: 'Hyper-personalized luxury commerce feed with bidirectional typographic balance.',
      description:
        'Designed to break away from sterile transactional grids. Ovara introduces editorial drop cards, haptic category carousels, and VIP access badges tailored for Middle Eastern luxury consumers.',
      features: [
        'Variable Persian Vazirmatn typographic hierarchy',
        'Tactile category pills with custom pastel accents',
        'Curated drop banners with subtle metallic sheen',
      ],
    },
    {
      id: 1,
      number: '02',
      title: 'Predictive Discovery & Search',
      persianTitle: 'کاوش و جستجوی ادراکی',
      tagline: 'Natural language search with instant fuzzy matching and interactive wishlist states.',
      description:
        'A distraction-free discovery canvas enabling shoppers to filter through 4,500+ curated luxury items with zero layout shift and sub-16ms filter response times.',
      features: [
        'Instantaneous category & price range filtering',
        'Micro-animated wishlist bookmarking states',
        'Smart query auto-complete with visual thumbnails',
      ],
    },
    {
      id: 2,
      number: '03',
      title: 'Tactile Product Architecture',
      persianTitle: 'معماری و جزئیات سه‌بعدی محصول',
      tagline: '3D titanium materials inspector with interactive colorways & real-time inventory.',
      description:
        'Every millimeter of the product page is calibrated for tangible delight. Includes real-time storage matrix switches, verified seller authenticity seals, and sticky purchase triggers.',
      features: [
        'Interactive Natural Titanium colorway switcher',
        'Authenticity verification seal & customs audit tag',
        'One-touch sticky purchase bottom sheet',
      ],
    },
    {
      id: 3,
      number: '04',
      title: 'Frictionless Express Checkout',
      persianTitle: 'سبد خرید و تسویه حساب سریع',
      tagline: 'One-swipe checkout with Shetab bank gateway synchronization under 2.4s.',
      description:
        'Reduces cart abandonment through seamless quantity steppers, inline VIP coupon application, and transparent price calculations with zero surprise fees.',
      features: [
        'Live quantity counters with instant subtotal updates',
        'Express vs. Standard delivery route toggle',
        'Shetab bank direct verification with card tokenization',
      ],
    },
    {
      id: 4,
      number: '05',
      title: 'Live Order Tracking & VIP Hub',
      persianTitle: 'رهگیری زنده و باشگاه مشتریان VIP',
      tagline: 'Real-time telemetry tracking courier transit with dedicated concierge hotline.',
      description:
        'Post-purchase care transformed into an engaging brand moment. Customers observe real-time courier movement, driver credentials, and accumulate club tier rewards.',
      features: [
        '4-step live progress timeline with timestamp log',
        'Dedicated driver direct-dial and vehicle details',
        'VIP reward tier points and saved delivery addresses',
      ],
    },
  ];

  const currentStep = steps[activeScreenIndex] || steps[0];

  return (
    <div className="flex flex-col justify-between h-full space-y-8">
      {/* Editorial Header */}
      <div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-[#FF5C39]/10 text-[#FF5C39] border border-[#FF5C39]/20 text-xs font-mono font-bold tracking-wider uppercase rounded-full">
            FLAGSHIP CASE STUDY
          </span>
          <span className="text-xs font-mono text-[#888884]">{project.year}</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-display font-extrabold text-[#111116] mt-4 tracking-tight">
          {project.title}
        </h3>
        <p className="text-base md:text-lg font-persian text-[#7667F4] font-bold mt-1">
          {project.persianTitle}
        </p>

        <p className="text-[#555550] text-sm md:text-base leading-relaxed mt-4 max-w-xl">
          {project.overview}
        </p>
      </div>

      {/* Interactive Step Narrative Box */}
      <div className="bg-white/80 backdrop-blur-md border border-[#E5E5E2] rounded-3xl p-6 shadow-sm transition-all duration-300">
        <div className="flex items-center justify-between border-b border-[#F0F0EE] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#FF5C39] bg-[#FF5C39]/10 px-2 py-0.5 rounded-md">
              SCREEN {currentStep.number} / 05
            </span>
            <span className="text-xs font-semibold text-[#888884]">
              {isPersianMode ? currentStep.persianTitle : currentStep.title}
            </span>
          </div>

          {/* Step switcher dots */}
          <div className="flex items-center gap-1.5">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => onSelectScreen(s.id)}
                className={`h-2 rounded-full transition-all ${
                  activeScreenIndex === s.id
                    ? 'w-6 bg-[#111116]'
                    : 'w-2 bg-[#D8D8D5] hover:bg-[#A0A09C]'
                }`}
                title={`Screen ${s.number}`}
              />
            ))}
          </div>
        </div>

        <h4 className="text-lg md:text-xl font-display font-bold text-[#111116]">
          {currentStep.title}
        </h4>
        <p className="text-xs md:text-sm text-[#FF5C39] font-medium mt-1">
          {currentStep.tagline}
        </p>
        <p className="text-xs md:text-sm text-[#666660] leading-relaxed mt-2.5">
          {currentStep.description}
        </p>

        {/* Feature Highlights */}
        <div className="mt-4 space-y-1.5 pt-3 border-t border-[#F0F0EE]">
          {currentStep.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-xs text-[#444440]">
              <CheckCircle2 size={13} className="text-[#31AD82] shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* System Tokens Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Token 1: Palette */}
        <div className="bg-[#F2F2EF] border border-[#E0E0DC] rounded-2xl p-3.5">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#111116]">
            <Palette size={13} className="text-[#FF5C39]" />
            <span>DESIGN TOKENS</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2.5">
            <div className="w-6 h-6 rounded-full bg-[#FF5C39] shadow-2xs border border-white" title="Coral Rouge" />
            <div className="w-6 h-6 rounded-full bg-[#7667F4] shadow-2xs border border-white" title="Electric Violet" />
            <div className="w-6 h-6 rounded-full bg-[#3D8DFF] shadow-2xs border border-white" title="Sky Blue" />
            <div className="w-6 h-6 rounded-full bg-[#31AD82] shadow-2xs border border-white" title="Mint Green" />
            <div className="w-6 h-6 rounded-full bg-[#111116] shadow-2xs border border-white" title="Obsidian Velvet" />
          </div>
        </div>

        {/* Token 2: Typography */}
        <div className="bg-[#F2F2EF] border border-[#E0E0DC] rounded-2xl p-3.5">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#111116]">
            <Type size={13} className="text-[#7667F4]" />
            <span>TYPOGRAPHY</span>
          </div>
          <div className="mt-2 text-xs font-bold text-[#111116] truncate font-persian">
            Vazirmatn Variable & Syne
          </div>
          <div className="text-[10px] text-[#888884] mt-0.5">Bi-directional RTL / LTR Cadence</div>
        </div>
      </div>

      {/* Project Impact Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white border border-[#E5E5E2] rounded-xl p-2.5 text-center shadow-2xs"
          >
            <div className="text-base md:text-lg font-display font-black text-[#111116]">
              {m.value}
            </div>
            <div className="text-[10px] text-[#888884] font-medium truncate mt-0.5">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action CTA */}
      <div className="pt-2 flex items-center gap-3">
        <button
          onClick={onOpenCaseStudy}
          className="flex-1 py-3 px-5 rounded-2xl bg-[#111116] hover:bg-[#25252A] text-white font-display font-bold text-xs md:text-sm flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all cursor-pointer"
        >
          <span>EXPLORE COMPLETE CASE STUDY</span>
          <ArrowUpRight size={16} />
        </button>

        <a
          href="/portfolio/Ovara.html"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-4 rounded-2xl bg-white hover:bg-[#F2F2EF] border border-[#D5D5D0] text-[#111116] font-display font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all"
        >
          <span>STANDALONE PROTOTYPE</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
};
