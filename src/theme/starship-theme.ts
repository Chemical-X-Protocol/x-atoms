import type { ThemeDefinition } from 'vuetify';

export const starshipDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#050811',
    surface: '#0b1329',
    'surface-bright': '#111c3a',
    'surface-light': '#1e293b',
    'surface-variant': '#0f172a',
    'on-surface-variant': '#94a3b8',
    primary: '#62c9ff',
    'primary-darken-1': '#38bdf8',
    secondary: '#38bdf8',
    'secondary-darken-1': '#0284c7',
    error: '#ef4444',
    info: '#62c9ff',
    success: '#10b981',
    warning: '#f59e0b',
  },
};

export const starshipLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    'surface-bright': '#ffffff',
    'surface-light': '#f1f5f9',
    'surface-variant': '#e2e8f0',
    'on-surface-variant': '#475569',
    primary: '#0284c7',
    'primary-darken-1': '#0369a1',
    secondary: '#0ea5e9',
    'secondary-darken-1': '#0284c7',
    error: '#dc2626',
    info: '#0284c7',
    success: '#059669',
    warning: '#d97706',
  },
};

export default starshipDarkTheme;
