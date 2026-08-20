import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VisualImageEnvironmentProps {
  imageSrc?: string;
  imageAlt?: string;
  blurAmount?: string; // 25px - 55px
  opacity?: number; // 0.18 - 0.28
  scale?: number; // 1.05 - 1.12
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'shifted' | 'custom';
  className?: string;
  enableParallax?: boolean;
  blendMode?: 'normal' | 'soft-light' | 'luminosity' | 'overlay';
  fadeTop?: boolean;
  fadeBottom?: boolean;
}

export const VisualImageEnvironment: React.FC<VisualImageEnvironmentProps> = ({
  imageSrc = '/assets/images/portfolio-atmosphere.webp',
  imageAlt = 'Atmospheric architectural visual environment',
  blurAmount = '35px',
  opacity = 0.24,
  scale = 1.08,
  position = 'center',
  className = '',
  enableParallax = true,
  blendMode = 'normal',
  fadeTop = true,
  fadeBottom = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !enableParallax || !containerRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -5, scale: scale },
        {
          yPercent: 5,
          scale: scale * 1.03,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [enableParallax, scale]);

  const posClass = {
    center: 'object-center',
    top: 'object-top',
    bottom: 'object-bottom',
    left: 'object-left',
    right: 'object-right',
    shifted: 'object-[65%_35%]',
    custom: 'object-[50%_30%]',
  }[position];

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 select-none ${className}`}
    >
      {/* Heavy Blurred Atmospheric Image Asset with Subtle Tonal Life */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover ${posClass} will-change-transform`}
        style={{
          filter: `blur(${blurAmount}) grayscale(18%) contrast(1.06) brightness(0.96)`,
          opacity,
          transform: `scale(${scale})`,
          mixBlendMode: blendMode,
        }}
      />

      {/* Atmospheric Soft Gradient Overlay (Preserves Legibility without Crushing Atmosphere) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_35%,rgba(7,7,10,0.35)_0%,rgba(5,5,8,0.72)_60%,#030304_100%)] pointer-events-none" />

      {/* Top Transition Soft Gradient: Seamless Fade from Previous Section */}
      {fadeTop && (
        <div className="absolute inset-x-0 top-0 h-36 sm:h-52 bg-gradient-to-b from-[#030304] via-[#030304]/60 to-transparent pointer-events-none" />
      )}

      {/* Bottom Transition Soft Gradient: Seamless Fade to Next Section */}
      {fadeBottom && (
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-52 bg-gradient-to-t from-[#030304] via-[#030304]/60 to-transparent pointer-events-none" />
      )}

      {/* Subtle Specular Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(255,255,255,0.025),transparent_70%)] pointer-events-none" />
    </div>
  );
};
