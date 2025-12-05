interface LogoProps {
  variant?: 'default' | 'footer';
}

export function Logo({ variant = 'default' }: LogoProps) {
  const size = variant === 'footer' ? 'small' : 'default';
  const iconSize = size === 'small' ? 24 : 32;
  const fontSize = size === 'small' ? '1rem' : '1.25rem';
  
  return (
    <div className="flex items-center gap-3">
      {/* Icon: Network of connected cells */}
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        <line x1="8" y1="12" x2="16" y2="8" stroke="url(#lineGradient)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="8" x2="24" y2="12" stroke="url(#lineGradient)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="12" x2="16" y2="20" stroke="url(#lineGradient)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="20" x2="24" y2="12" stroke="url(#lineGradient)" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Nodes */}
        <circle cx="8" cy="12" r="2.5" fill="#6A4BFF" />
        <circle cx="24" cy="12" r="2.5" fill="#3A6FF8" />
        <circle cx="16" cy="20" r="2.5" fill="#3A6FF8" />
        
        {/* Active node (brighter with glow) */}
        <circle cx="16" cy="8" r="3" fill="#2EE7E0">
          <animate 
            attributeName="opacity" 
            values="1;0.6;1" 
            dur="2s" 
            repeatCount="indefinite" 
          />
        </circle>
        <circle cx="16" cy="8" r="3" fill="#2EE7E0" opacity="0.3" />
        
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3A6FF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6A4BFF" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Wordmark */}
      <span 
        className="text-white"
        style={{ 
          fontWeight: 700,
          fontSize: fontSize,
          letterSpacing: '-0.01em',
        }}
      >
        sleepercells
      </span>
      
      {/* .ai pill tag */}
      <div 
        className="px-2.5 py-1 rounded-full text-white"
        style={{ 
          fontSize: '0.75rem',
          fontWeight: 600,
          background: 'linear-gradient(135deg, rgba(58, 111, 248, 0.2), rgba(106, 75, 255, 0.2))',
          border: '1px solid rgba(58, 111, 248, 0.4)',
        }}
      >
        .ai
      </div>
    </div>
  );
}
