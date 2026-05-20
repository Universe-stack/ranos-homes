/**
 * Design System & Theme Configuration
 * Color palette, typography, spacing, and styling constants
 * This is the single source of truth for RANOS design
 */

export const theme = {
  colors: {
    // Primary Colors
    primary: '#0f0401',
    'on-primary': '#ffffff',
    'primary-container': '#2c1b14',
    'on-primary-container': '#9b8177',
    'primary-fixed': '#fcdcd0',
    'primary-fixed-dim': '#dec0b5',
    'on-primary-fixed': '#281811',
    'on-primary-fixed-variant': '#57423a',
    'inverse-primary': '#dec0b5',

    // Secondary Colors
    secondary: '#a23f00',
    'on-secondary': '#ffffff',
    'secondary-container': '#fc7127',
    'on-secondary-container': '#5c2000',
    'secondary-fixed': '#ffdbcd',
    'secondary-fixed-dim': '#ffb595',
    'on-secondary-fixed': '#351000',
    'on-secondary-fixed-variant': '#7c2e00',

    // Tertiary Colors
    tertiary: '#060605',
    'on-tertiary': '#ffffff',
    'tertiary-container': '#1f1f1c',
    'on-tertiary-container': '#878783',
    'tertiary-fixed': '#e4e2dd',
    'tertiary-fixed-dim': '#c8c6c2',
    'on-tertiary-fixed': '#1b1c19',
    'on-tertiary-fixed-variant': '#474744',

    // Surface Colors
    surface: '#fcf9f8',
    'on-surface': '#1c1b1b',
    'on-surface-variant': '#4f4441',
    'surface-bright': '#fcf9f8',
    'surface-container-lowest': '#ffffff',
    'surface-container-low': '#f6f3f2',
    'surface-container': '#f0eded',
    'surface-container-high': '#eae7e7',
    'surface-container-highest': '#e5e2e1',
    'surface-dim': '#dcd9d9',
    'surface-tint': '#715950',

    // Background
    background: '#fcf9f8',
    'on-background': '#1c1b1b',
    'inverse-surface': '#313030',
    'inverse-on-surface': '#f3f0ef',

    // Error
    error: '#ba1a1a',
    'on-error': '#ffffff',
    'error-container': '#ffdad6',
    'on-error-container': '#93000a',

    // Outline
    outline: '#817470',
    'outline-variant': '#d3c3be',
  },

  fonts: {
    'display-xl': 'Newsreader',
    'headline-lg': 'Newsreader',
    'headline-md': 'Newsreader',
    'body-lg': 'Manrope',
    'body-md': 'Manrope',
    'section-title': 'Manrope',
    'label-sm': 'Manrope',
  },

  fontSize: {
    'display-xl': {
      size: '84px',
      lineHeight: '92px',
      letterSpacing: '-0.02em',
      fontWeight: '300',
    },
    'headline-lg': {
      size: '48px',
      lineHeight: '56px',
      letterSpacing: '0',
      fontWeight: '400',
    },
    'headline-md': {
      size: '32px',
      lineHeight: '40px',
      letterSpacing: '0',
      fontWeight: '400',
    },
    'section-title': {
      size: '14px',
      lineHeight: '20px',
      letterSpacing: '0.15em',
      fontWeight: '600',
    },
    'body-lg': {
      size: '18px',
      lineHeight: '32px',
      letterSpacing: '0',
      fontWeight: '400',
    },
    'body-md': {
      size: '16px',
      lineHeight: '28px',
      letterSpacing: '0',
      fontWeight: '400',
    },
    'label-sm': {
      size: '12px',
      lineHeight: '16px',
      letterSpacing: '0.05em',
      fontWeight: '500',
    },
  },

  spacing: {
    'section-gap': '8rem',
    'element-gap': '1rem',
    'container-max': '1440px',
    'margin-edge': '4rem',
    gutter: '1.5rem',
  },

  borderRadius: {
    DEFAULT: '0.25rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
} as const;

export type Theme = typeof theme;
