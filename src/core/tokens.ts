// Starship Aesthetic Pure TypeScript Tokens
// Framework-agnostic design system primitives

export const starshipColors = {
  bg: '#050811',
  surface: '#0b1329',
  surfaceElevated: '#111c3a',
  surfaceLight: '#1e293b',

  // Signature Cyan
  cyan: '#62c9ff',
  cyanGlow: 'rgba(98, 201, 255, 0.4)',
  cyanBorder: 'rgba(98, 201, 255, 0.25)',
  cyanSubtle: 'rgba(98, 201, 255, 0.08)',

  // Semantics
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#38bdf8',

  // Grayscale & Typography
  textPrimary: '#f8fafc',
  textSecondary: '#94a3b8',
  textMuted: '#64748b',
} as const;

export const glassTokens = {
  blurSm: '8px',
  blurMd: '12px',
  blurLg: '20px',

  bgSubtle: 'rgba(11, 19, 41, 0.5)',
  bgSurface: 'rgba(11, 19, 41, 0.75)',
  bgElevated: 'rgba(17, 28, 58, 0.85)',

  borderSubtle: 'rgba(98, 201, 255, 0.12)',
  borderHover: 'rgba(98, 201, 255, 0.35)',
  borderFocus: 'rgba(98, 201, 255, 0.6)',
} as const;

export const radiiTokens = {
  sm: '6px',
  md: '10px',
  lg: '16px',
  pill: '9999px',
} as const;
