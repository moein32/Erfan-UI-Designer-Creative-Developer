import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VisualImageEnvironmentProps {
  imageSrc?: string;
  imageAlt?: string;
  blurAmount?: string; // e.g. '50px' or '70px'
  opacity?: number; // 0.05 - 0.25
  overlayOpacity?: number; // 0.6 - 0.85
  scale?: number; // 1.05 - 1.2
  position?: 'center' | 'top' | 'bottom' | 'custom';
  className?: string;
  enableParallax?: boolean;
  blendMode?: 'luminosity' | 'overlay' | 'soft-light' | 'normal';
}

export const VisualImageEnvironment: React.FC<VisualImageEnvironmentProps> = ({
  imageSrc = '/assets/images/erfan.png',
  imageAlt = 'Atmospheric visual texture',
  blurAmount = '60px',
  opacity = 0.14,
  overlayOpacity = 0.82,
  scale = 1.12,
  position = 'center',
  className = '',
  enableParallax = true,
  blendMode = 'luminosity',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !enableParallax || !containerRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -8, scale: scale },
        {
          yPercent: 8,
          scale: scale * 1.05,
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
    custom: 'object-[50%_25%]',
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
          filter: `blur(${blurAmount}) grayscale(100%) contrast(1.15) brightness(0.85)`,
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
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#030304] via-[#030304]/80 to-transparent" />

      {/* Bottom Transition Soft Gradient: Seamless Fade to Next Section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030304] via-[#030304]/80 to-transparent" />

      {/* Radial Atmospheric Spotlight for Dimensional Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.03),transparent_70%)]" />
    </div>
  );
};
