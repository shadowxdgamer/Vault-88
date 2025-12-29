// Cyber-Rustic Wood Theme (Default)
// Extracted from crack_the_code_1

export const woodTheme = {
  id: 'wood',
  name: 'Cyber-Rustic',
  description: 'Warm wooden tones with cyberpunk accents',
  locked: false,
  price: 0,
  
  colors: {
    primary: '#8B5E3C',
    primaryDark: '#6D4C32',
    accent: '#38bdf8',
    accentCyan: '#38bdf8',
    
    background: '#1a1f2e',
    backgroundLight: '#f3f4f6',
    backgroundDark: '#1a1f2e',
    
    panel: '#23293a',
    panelLight: '#ffffff',
    panelDark: '#23293a',
    
    wood: {
      light: '#e3d5ca',
      DEFAULT: '#c4a484',
      dark: '#c4a484',
      text: '#6f4e37',
    },
    
    digit: {
      bg: '#e3d5ca',
      text: '#6f4e37',
    },
    
    hint: {
      bg: '#4db6eb',
      text: '#0f172a',
    },
    
    text: {
      main: '#f8fafc',
      secondary: '#cbd5e1',
    },
  },
  
  fonts: {
    display: '"Chakra Petch", sans-serif',
    body: '"Inter", sans-serif',
  },
  
  shadows: {
    wood: '0 4px 0 0 #bcaaa4, 0 8px 10px rgba(0,0,0,0.1)',
    woodActive: '0 2px 0 0 #bcaaa4, 0 4px 6px rgba(0,0,0,0.1)',
    neumorphic: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
    neumorphicDark: '4px 4px 10px rgba(0,0,0,0.5), -4px -4px 10px rgba(255,255,255,0.05)',
    innerDark: 'inset 2px 2px 5px rgba(0,0,0,0.3)',
    glow: '0 0 20px rgba(56, 189, 248, 0.25)',
  },
  
  borderRadius: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
};
