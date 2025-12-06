/**
 * SleeperCells.ai Brand Color System (V10/V9)
 * 
 * Use these color values consistently across all pages and components.
 */

export const colors = {
  // Base backgrounds
  backgroundMain: '#050816',
  backgroundHeroGradientFrom: '#0A0E2A',
  backgroundHeroGradientTo: '#170E39',
  navBackground: 'rgba(32, 35, 48, 0.9)',
  
  // Slate backgrounds (V9)
  slate950: '#020617',
  slate900: '#0F172A',
  
  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#8D9AB0',
  
  // Brand gradient (PRIMARY - based on rotating words)
  brandGradientFrom: '#22D3EE',  // cyan-400
  brandGradientVia: '#60A5FA',   // blue-400
  brandGradientTo: '#A855F7',    // purple-400
  
  // Secondary gradient (for CTAs and accents)
  secondaryGradientFrom: '#4D66F1',
  secondaryGradientTo: '#7E86F6',
  
  // Accent colors (use sparingly)
  electricBlue: '#3A6FF8',
  cyberPurple: '#6A4BFF',
  neonAqua: '#2EE7E0',
  nanoGreen: '#37FF8B',
} as const;

// Helper to create brand gradient string
export const brandGradient = `linear-gradient(135deg, ${colors.brandGradientFrom}, ${colors.brandGradientVia}, ${colors.brandGradientTo})`;

// Helper to create secondary gradient string
export const secondaryGradient = `linear-gradient(135deg, ${colors.secondaryGradientFrom}, ${colors.secondaryGradientTo})`;

// Card surfaces
export const cardBackground = 'rgba(15, 23, 42, 0.6)';
export const cardBorder = 'rgba(148, 163, 184, 0.25)';
