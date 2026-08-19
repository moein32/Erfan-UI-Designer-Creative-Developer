import React from 'react';

interface AmbientLightProps {
  position?: 'top-center' | 'top-right' | 'top-left' | 'center' | 'bottom-center';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  intensity?: 'subtle' | 'medium' | 'soft';
  className?: string;
}

export const AmbientLight: React.FC<AmbientLightProps> = ({
  position = 'top-center',
  size = 'lg',
  intensity = 'subtle',
  className = '',
}) => {
  const positionClasses = {
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'top-right': 'top-0 right-0 translate-x-1/4',
    'top-left': 'top-0 left-0 -translate-x-1/4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
  };

  const sizeClasses = {
    sm: 'w-[320px] h-[320px]',
    md: 'w-[520px] h-[520px]',
    lg: 'w-[750px] h-[650px]',
    xl: 'w-[1000px] h-[800px]',
  };

  const intensityClasses = {
    subtle: 'opacity-40',
    medium: 'opacity-60',
    soft: 'opacity-25',
  };

  return (
    <div
      aria-hidden="true"
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${intensityClasses[intensity]} rounded-full blur-[100px] pointer-events-none -z-10 bg-gradient-to-b from-[#F4F4F6] via-[#E4E4E7]/40 to-transparent ${className}`}
    />
  );
};

interface GridFieldProps {
  opacity?: number;
  maskRadius?: string;
  size?: string;
  className?: string;
}

export const GridField: React.FC<GridFieldProps> = ({
  opacity = 0.45,
  maskRadius = 'ellipse 60% 50% at 50% 40%',
  size = '4rem 4rem',
  className = '',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none -z-10 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] ${className}`}
      style={{
        backgroundSize: size,
        maskImage: `radial-gradient(${maskRadius}, #000 65%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(${maskRadius}, #000 65%, transparent 100%)`,
        opacity,
      }}
    />
  );
};

interface TypographicWatermarkProps {
  text: string;
  position?: 'top-right' | 'top-left' | 'center' | 'bottom-right' | 'bottom-left';
  opacity?: string;
  size?: string;
  className?: string;
}

export const TypographicWatermark: React.FC<TypographicWatermarkProps> = ({
  text,
  position = 'top-right',
  opacity = 'opacity-[0.03]',
  size = 'text-[12vw] lg:text-[14vw]',
  className = '',
}) => {
  const posClasses = {
    'top-right': 'top-6 -right-12 text-end',
    'top-left': 'top-6 -left-12 text-start',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center',
    'bottom-right': 'bottom-6 -right-12 text-end',
    'bottom-left': 'bottom-6 -left-12 text-start',
  };

  return (
    <div
      aria-hidden="true"
      className={`absolute ${posClasses[position]} ${size} ${opacity} font-black uppercase font-mono tracking-tighter leading-none select-none pointer-events-none -z-10 overflow-hidden text-[#0A0A0A] ${className}`}
    >
      {text}
    </div>
  );
};

interface ChapterAtmosphereProps {
  children: React.ReactNode;
  lightPosition?: 'top-center' | 'top-right' | 'top-left' | 'center' | 'bottom-center';
  watermark?: string;
  watermarkPos?: 'top-right' | 'top-left' | 'center' | 'bottom-right' | 'bottom-left';
  showGrid?: boolean;
  gridOpacity?: number;
  className?: string;
}

export const ChapterAtmosphere: React.FC<ChapterAtmosphereProps> = ({
  children,
  lightPosition = 'top-center',
  watermark,
  watermarkPos = 'top-right',
  showGrid = true,
  gridOpacity = 0.4,
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Soft Ambient Light Field */}
      <AmbientLight position={lightPosition} size="lg" intensity="medium" />

      {/* Subtle Precision Grid */}
      {showGrid && <GridField opacity={gridOpacity} />}

      {/* Subtle Background Typographic Watermark */}
      {watermark && <TypographicWatermark text={watermark} position={watermarkPos} />}

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
