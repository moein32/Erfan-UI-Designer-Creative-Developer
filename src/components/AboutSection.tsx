import React, { useRef, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { useCursor } from '../context/CursorContext';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Compass, Layers, CheckCircle2, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const { t, isRTL, formatNumber } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-stagger-item', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isRTL]);

  const corePillars = [
    {
      title: isRTL ? 'طراحی رابط کاربری و زیبایی‌شناسی' : 'UI & Visual Craft',
      desc: isRTL
        ? 'توجه موشکافانه به توازن بصری، ریتم تایپوگرافی و متریال‌های لمسی برای خلق محصولاتی باوقار و اصیل.'
        : 'Obsessive attention to optical balance, typographic rhythm, and tactile micro-textures that command aesthetic respect.',
      icon: <Layers size={18} className="text-[#0A0A0A]" />,
    },
    {
      title: isRTL ? 'معماری ادراکی و تجربه کاربری' : 'UX Cognitive Architecture',
      desc: isRTL
        ? 'مهندسی مسیرهای کاربر بدون اصطکاک و ساختاربندی داده‌ها جهت حذف سربار ذهنی و تسهیل تصمیم‌گیری.'
        : 'Engineering low-friction user journeys and information systems that eliminate cognitive overload.',
      icon: <Compass size={18} className="text-[#0A0A0A]" />,
    },
    {
      title: isRTL ? 'طراحی حرکت و انیمیشن تعاملی' : 'Motion Choreography',
      desc: isRTL
        ? 'خلق ترنزیشن‌های ۶۰ فریم با GSAP و فیزیک جهشی به‌گونه‌ای که هر تغییر حالت معنا و بازخورد مشخصی داشته باشد.'
        : 'Sculpting cinematic transitions with GSAP and spring physics so every state change communicates meaning.',
      icon: <Sparkles size={18} className="text-[#0A0A0A]" />,
    },
    {
      title: isRTL ? 'توسعه فرانت‌اند و کدهای استاندارد' : 'Creative Engineering',
      desc: isRTL
        ? 'پیوند بی‌نقص طرح و کد با تایپ‌اسکریپت، ری‌اکت و تیلویند همراه با رعایت سخت‌گیرانه اصول دسترس‌پذیری.'
        : 'Bridging the design-to-code chasm with production-grade TypeScript, Next.js, and strict semantic accessibility.',
      icon: <Code2 size={18} className="text-[#0A0A0A]" />,
    },
  ];

  const tools = [
    'Figma Master',
    'GSAP / ScrollTrigger',
    'React 19 & Next.js',
    'TypeScript Strict',
    'Tailwind CSS v4',
    'Design Tokens (JSON)',
    'Motion & Lenis',
    'RTL / Persian Typography',
    'UI Systems & WCAG AAA',
    'Framer Pro',
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E5E7EB]"
    >
      <SectionHeading
        number={t.sectionHeadings.about.number}
        tag={t.sectionHeadings.about.tag}
        title={t.sectionHeadings.about.title}
        description={t.sectionHeadings.about.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Narrative Manifesto */}
        <div className="lg:col-span-7 space-y-8">
          <div className="about-stagger-item space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] leading-snug">
              {isRTL
                ? 'بیشتر محصولات دیجیتال از شکاف میان طراحی و پیاده‌سازی رنج می‌برند.'
                : 'Most digital products suffer from a broken handoff between design and engineering.'}
            </h3>
            <p className="text-base md:text-lg text-[#52525B] leading-relaxed">
              {t.about.bioP1}
            </p>
            <p className="text-sm md:text-base text-[#52525B] leading-relaxed">
              {t.about.bioP2}
            </p>
          </div>

          {/* Philosophy Quote Card — Liquid Glass Minimal */}
          <div className="about-stagger-item p-6 sm:p-8 rounded-3xl liquid-glass border border-[#E5E7EB] shadow-xs relative overflow-hidden">
            <span className="text-xs font-mono text-[#71717A] tracking-widest uppercase block mb-3">
              {t.about.philosophyTitle}
            </span>
            <blockquote className="text-lg sm:text-xl font-medium text-[#0A0A0A] leading-relaxed">
              {t.about.philosophyQuote}
            </blockquote>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#E5E7EB] text-xs font-mono text-[#71717A]">
              <span>{isRTL ? 'عرفان معین' : 'ERFAN MOEIN'}</span>
              <span>{isRTL ? 'قزوین / پروژه‌های بین‌المللی' : 'QAZVIN / GLOBAL'}</span>
            </div>
          </div>

          {/* Core Pillars 2x2 Grid */}
          <div className="about-stagger-item grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] space-y-2 hover:border-[#0A0A0A]/30 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl liquid-glass">{pillar.icon}</div>
                  <h4 className="font-display font-bold text-base text-[#0A0A0A]">{pillar.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Credentials & Stack Box */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Profile Summary */}
          <div className="about-stagger-item p-6 sm:p-8 rounded-3xl bg-[#0A0A0A] text-[#FFFFFF] shadow-xl space-y-6 border border-[#27272A]">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold block mb-0.5">
                  ● {isRTL ? 'آماده همکاری فعال' : 'ACTIVE PRACTITIONER'}
                </span>
                <h4 className="font-display text-2xl font-bold">{isRTL ? 'عرفان معین' : 'Erfan Moein'}</h4>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-display font-bold text-lg">
                EM
              </div>
            </div>

            <div className="space-y-3 text-xs font-mono text-white/80">
              <div className="flex justify-between py-1.5 border-b border-white/05">
                <span className="text-white/40">{isRTL ? 'سابقه تخصصی' : 'EXPERIENCE'}</span>
                <span>{t.about.stat1Val} {isRTL ? 'طراحی محصول' : 'in Product Craft'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/05">
                <span className="text-white/40">{isRTL ? 'تخصص کلیدی' : 'SPECIALIZATION'}</span>
                <span>{isRTL ? 'اپلیکیشن موبایل و دیزاین سیستم' : 'Mobile Apps & Design Systems'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/05">
                <span className="text-white/40">{isRTL ? 'بومی‌سازی' : 'LOCALIZATION'}</span>
                <span>{isRTL ? 'تخصص دوجهته فارسی و انگلیسی' : 'Fluent English + Native Persian'}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/05">
                <span className="text-white/40">{isRTL ? 'وضعیت کاری' : 'AVAILABILITY'}</span>
                <span className="text-emerald-400">{t.hero.availability}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-white/50 block mb-3">{t.about.techStackTitle}</span>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/10 text-white/90 border border-white/05"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Studio Guarantee Banner */}
          <div className="about-stagger-item p-6 rounded-3xl bg-[#FFFFFF] border border-[#E5E7EB] flex items-start gap-4 shadow-xs">
            <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-bold text-[#0A0A0A] font-mono block">
                {isRTL ? 'تضمین اصالت و کیفیت خروجی' : 'CRAFT COMMITMENT'}
              </span>
              <p className="text-[#52525B] leading-relaxed">
                {isRTL
                  ? 'تمامی پروژه‌ها از صفحه سفید با توکن‌های اختصاصی، تایپوگرافی متناسب و منحنی‌های انیمیشن منحصربه‌فرد طراحی و توسعه می‌یابند.'
                  : 'Every project is crafted from a blank canvas with bespoke tokens, custom typography, and handcrafted motion curves tailored specifically to product vision.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
