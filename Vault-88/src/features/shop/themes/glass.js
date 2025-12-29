// Glassmorphism Liquid Theme
// Extracted from crack_the_code_4

export const glassTheme = {
  id: 'glass',
  name: 'Liquid Crystal',
  description: 'Frosted glass with liquid gradients',
  locked: true,
  price: 200,
  
  colors: {
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    accent: '#ec4899',
    
    background: '#0f172a',
    
    glass: {
      border: 'rgba(255, 255, 255, 0.2)',
      surface: 'rgba(255, 255, 255, 0.1)',
    },
    
    liquid: {
      blue: '#3b82f6',
      pink: '#ec4899',
      cyan: '#06b6d4',
      purple: '#8b5cf6',
    },
    
    digit: {
      bg: 'rgba(255, 255, 255, 0.1)',
      text: '#ffffff',
      glow: 'rgba(56, 189, 248, 0.3)',
    },
    
    hint: {
      bg: 'rgba(255, 255, 255, 0.05)',
      text: '#ffffff',
      accent: '#06b6d4',
    },
    
    text: {
      main: '#ffffff',
      secondary: '#cbd5e1',
    },
  },
  
  fonts: {
    display: '"Chakra Petch", sans-serif',
    body: '"Inter", sans-serif',
  },
  
  shadows: {
    glass3d: 'inset 0 1px 0 0 rgba(255,255,255,0.4), inset 0 -4px 0 0 rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.2)',
    glassGlow: '0 0 20px rgba(56, 189, 248, 0.3)',
    liquid: '0 10px 30px -10px rgba(236, 72, 153, 0.5)',
  },
  
  gradients: {
    fractal: `
      radial-gradient(at 0% 0%, rgba(236, 72, 153, 0.6) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(59, 130, 246, 0.6) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.6) 0px, transparent 50%),
      radial-gradient(at 0% 100%, rgba(6, 182, 212, 0.6) 0px, transparent 50%)
    `,
  },
  
  blur: {
    backdrop: 'blur(40px)',
    light: 'blur(20px)',
  },
  
  borderRadius: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.5rem',
  },
};
