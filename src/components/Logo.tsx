import { colors } from '../styles/colors';

interface LogoProps {
  size?: 'default' | 'small';
}

export function Logo({ size = 'default' }: LogoProps) {
  const textSize = size === 'small' ? 'text-base' : 'text-xl';
  const fontWeight = 600;
  
  return (
    <div className="flex items-center">
      {/* "sleeper" in white */}
      <span 
        className={textSize}
        style={{ 
          fontWeight,
          color: colors.textPrimary,
          letterSpacing: '-0.01em',
        }}
      >
        sleeper
      </span>
      
      {/* "cells" with brand gradient */}
      <span 
        className={textSize}
        style={{ 
          fontWeight,
          background: `linear-gradient(90deg, ${colors.brandGradientFrom}, ${colors.brandGradientVia}, ${colors.brandGradientTo})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.01em',
        }}
      >
        cells
      </span>
      
      {/* ".ai" in soft white */}
      <span 
        className={textSize}
        style={{ 
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.7)',
          letterSpacing: '-0.01em',
        }}
      >
        .ai
      </span>
    </div>
  );
}
