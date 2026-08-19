import React from 'react';

interface AmbientLightProps {
  position?: 'top-center' | 'top-right' | 'top-left' | 'center' | 'bottom-center';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  intensity?: 'subtle' | 'medium' | 'soft' | 'pronounced';
  color?: 'silver' | 'coral' | 'violet' | 'cyan' | 'mint' | 'amber';
  tint?: 'silver' | 'coral' | 'violet' | 'cyan' | 'mint' | 'amber';
  className?: string;
}

export const AmbientLight: React.FC<AmbientLightProps> = ({
  position = 'top-center',
  size = 'lg',
  intensity = 'subtle',
  color = 'silver',
  tint,
  className = '',
}) => {
  const activeColor = tint || color;
  const positionClasses = {
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'top-right': 'top-0 right-0 translate-x-1/4',
    'top-left': 'top-0 left-0 -translate-x-1/4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
  };

  const sizeClasses = {
    sm: 'w-[320px] h-[320px]',
    md: 'w-[540px] h-[540px]',
    lg: 'w-[800px] h-[700px]',
    xl: 'w-[1100px] h-[900px]',
  };

  const intensityClasses = {
    soft: 'opacity-25',
    subtle: 'opacity-40',
    medium: 'opacity-65',
    pronounced: 'opacity-85',
  };

  const colorGradients = {
    silver: 'bg-gradient-to-b from-white/12 via-white/4 to-transparent',
    coral: 'bg-gradient-to-b from-rose-500/14 via-orange-500/6 to-transparent',
    violet: 'bg-gradient-to-b from-indigo-500/14 via-violet-500/6 to-transparent',
    cyan: 'bg-gradient-to-b from-cyan-400/14 via-sky-500/6 to-transparent',
    mint: 'bg-gradient-to-b from-emerald-400/14 via-teal-500/6 to-transparent',
    amber: 'bg-gradient-to-b from-amber-400/14 via-orange-500/6 to-transparent',
  };

  return (
    <div
      aria-hidden="true"
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${intensityClasses[intensity]} ${colorGradients[activeColor]} rounded-full blur-[140px] pointer-events-none -z-10 ${className}`}
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
  opacity = 0.25,
  maskRadius = 'ellipse 60% 50% at 50% 40%',
  size = '4rem 4rem',
  className = '',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] ${className}`}
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
  opacity = 'opacity-[0.025]',
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
      className={`absolute ${posClasses[position]} ${size} ${opacity} font-black uppercase font-mono tracking-tighter leading-none select-none pointer-events-none -z-10 overflow-hidden text-white ${className}`}
    >
      {text}
    </div>
  );
};

interface ChapterAtmosphereProps {
  children: React.ReactNode;
  lightPosition?: 'top-center' | 'top-right' | 'top-left' | 'center' | 'bottom-center';
  lightColor?: 'silver' | 'coral' | 'violet' | 'cyan' | 'mint' | 'amber';
  watermark?: string;
  watermarkPos?: 'top-right' | 'top-left' | 'center' | 'bottom-right' | 'bottom-left';
  showGrid?: boolean;
  gridOpacity?: number;
  className?: string;
}

export const ChapterAtmosphere: React.FC<ChapterAtmosphereProps> = ({
  children,
  lightPosition = 'top-center',
  lightColor = 'silver',
  watermark,
  watermarkPos = 'top-right',
  showGrid = true,
  gridOpacity = 0.25,
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Soft Ambient Light Field */}
      <AmbientLight position={lightPosition} color={lightColor} size="lg" intensity="medium" />

      {/* Subtle Precision Grid */}
      {showGrid && <GridField opacity={gridOpacity} />}

      {/* Subtle Background Typographic Watermark */}
      {watermark && <TypographicWatermark text={watermark} position={watermarkPos} />}

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
