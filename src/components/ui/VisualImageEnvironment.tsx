import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VisualImageEnvironmentProps {
  imageSrc?: string;
  imageAlt?: string;
  blurAmount?: string; // e.g. '50px' or '70px'
  opacity?: number; // 0.10 - 0.25
  overlayOpacity?: number; // 0.75 - 0.88
  scale?: number; // 1.08 - 1.18
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'shifted' | 'custom';
  className?: string;
  enableParallax?: boolean;
  blendMode?: 'luminosity' | 'overlay' | 'soft-light' | 'normal';
  fadeTop?: boolean;
  fadeBottom?: boolean;
}

export const VisualImageEnvironment: React.FC<VisualImageEnvironmentProps> = ({
  imageSrc = '/assets/images/portfolio-atmosphere.webp',
  imageAlt = 'Editorial atmospheric visual environment',
  blurAmount = '60px',
  opacity = 0.18,
  overlayOpacity = 0.82,
  scale = 1.12,
  position = 'center',
  className = '',
  enableParallax = true,
  blendMode = 'luminosity',
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
        { yPercent: -6, scale: scale },
        {
          yPercent: 6,
          scale: scale * 1.04,
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
    shifted: 'object-[60%_40%]',
    custom: 'object-[50%_30%]',
  }[position];

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-20 select-none ${className}`}
    >
      {/* Heavy Blurred Atmospheric Image Asset */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover ${posClass} will-change-transform`}
        style={{
          filter: `blur(${blurAmount}) grayscale(100%) contrast(1.12) brightness(0.9)`,
          opacity,
          transform: `scale(${scale})`,
          mixBlendMode: blendMode,
        }}
      />

      {/* Primary Dark Vignette Layer */}
      <div
        className="absolute inset-0 bg-[#030304]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Top Transition Soft Gradient: Seamless Fade from Previous Section */}
      {fadeTop && (
        <div className="absolute inset-x-0 top-0 h-48 sm:h-64 bg-gradient-to-b from-[#030304] via-[#030304]/80 to-transparent" />
      )}

      {/* Bottom Transition Soft Gradient: Seamless Fade to Next Section */}
      {fadeBottom && (
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 bg-gradient-to-t from-[#030304] via-[#030304]/80 to-transparent" />
      )}

      {/* Radial Atmospheric Spotlight for Dimensional Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.035),transparent_70%)]" />
    </div>
  );
};
