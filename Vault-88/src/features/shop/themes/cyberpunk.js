// Cyberpunk Neon Theme
// Extracted from crack_the_code_2

export const cyberpunkTheme = {
  id: 'cyberpunk',
  name: 'Neon Matrix',
  description: 'Dark cyberpunk with neon green accents',
  locked: true,
  price: 100,
  
  colors: {
    primary: '#00ff41',
    primaryDark: '#00cc33',
    accent: '#00f3ff',
    
    background: '#05070a',
    backgroundDark: '#0d1117',
    
    panel: '#0d1117',
    panelGlass: 'rgba(13, 17, 23, 0.7)',
    
    neon: {
      green: '#00ff41',
      greenDim: 'rgba(0, 255, 65, 0.2)',
      blue: '#00f3ff',
    },
    
    metal: {
      light: '#e2e8f0',
      dark: '#475569',
    },
    
    digit: {
      bg: '#475569',
      text: '#00ff41',
      glow: 'rgba(0, 255, 65, 0.3)',
    },
    
    hint: {
      bg: '#1e293b',
      text: '#00ff41',
      border: '#00ff41',
    },
    
    text: {
      main: '#e2e8f0',
      secondary: '#94a3b8',
    },
  },
  
  fonts: {
    display: '"Chakra Petch", sans-serif',
    body: '"Rajdhani", sans-serif',
  },
  
  shadows: {
    neon: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 20px #00ff41',
    neonSm: '0 0 2px #00ff41, 0 0 5px #00ff41',
    metal: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 6px rgba(0,0,0,0.6), 0 2px 0 #1e293b',
    holo: '0 0 15px rgba(0, 243, 255, 0.15), inset 0 0 20px rgba(0, 243, 255, 0.05)',
  },
  
  gradients: {
    metal: 'linear-gradient(135deg, #cbd5e1 0%, #94a3b8 50%, #64748b 51%, #475569 100%)',
    grid: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
  },
  
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
  },
};
