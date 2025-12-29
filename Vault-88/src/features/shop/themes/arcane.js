// Ancient Arcane Theme
// Extracted from crack_the_code_3

export const arcaneTheme = {
  id: 'arcane',
  name: 'Ancient Vault',
  description: 'Mystical stone temple with golden accents',
  locked: true,
  price: 150,
  
  colors: {
    primary: '#d4af37',
    primaryDark: '#8a6d1f',
    accent: '#a855f7',
    
    background: '#1c1917',
    
    stone: {
      DEFAULT: '#78716c',
      light: '#a8a29e',
      dark: '#44403c',
      shadow: '#292524',
    },
    
    parchment: {
      DEFAULT: '#eaddcf',
      dark: '#d4c5b0',
      ink: '#3e2723',
    },
    
    gold: {
      DEFAULT: '#d4af37',
      light: '#f3e5ab',
      dark: '#8a6d1f',
    },
    
    arcane: {
      purple: '#4c1d95',
      glow: '#a855f7',
    },
    
    digit: {
      bg: '#78716c',
      text: '#d4af37',
    },
    
    hint: {
      bg: '#44403c',
      text: '#eaddcf',
      accent: '#a855f7',
    },
    
    text: {
      main: '#eaddcf',
      secondary: '#a8a29e',
      ink: '#3e2723',
    },
  },
  
  fonts: {
    display: '"Cinzel", serif',
    tech: '"Chakra Petch", sans-serif',
    body: '"Inter", sans-serif',
  },
  
  shadows: {
    stone: 'inset 2px 2px 4px rgba(255,255,255,0.2), inset -2px -2px 4px rgba(0,0,0,0.5), 0 10px 15px -3px rgba(0,0,0,0.5)',
    stoneActive: 'inset 4px 4px 8px rgba(0,0,0,0.5), inset -1px -1px 2px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.5)',
    parchment: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15), inset 0 0 40px rgba(62, 39, 35, 0.05)',
    arcaneGlow: '0 0 20px rgba(168, 85, 247, 0.4)',
  },
  
  borderRadius: {
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
  },
};
