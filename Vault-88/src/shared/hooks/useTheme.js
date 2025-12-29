import { createContext, useContext, useState, useEffect } from 'react';
import { getTheme, defaultTheme } from '../../features/shop/themes';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    return localStorage.getItem('vault88-theme') || defaultTheme;
  });
  
  const [unlockedThemes, setUnlockedThemes] = useState(() => {
    const stored = localStorage.getItem('vault88-unlocked-themes');
    return stored ? JSON.parse(stored) : ['wood'];
  });

  const theme = getTheme(currentThemeId);

  useEffect(() => {
    localStorage.setItem('vault88-theme', currentThemeId);
  }, [currentThemeId]);

  useEffect(() => {
    localStorage.setItem('vault88-unlocked-themes', JSON.stringify(unlockedThemes));
  }, [unlockedThemes]);

  const changeTheme = (themeId) => {
    if (unlockedThemes.includes(themeId)) {
      setCurrentThemeId(themeId);
    }
  };

  const unlockTheme = (themeId) => {
    if (!unlockedThemes.includes(themeId)) {
      setUnlockedThemes([...unlockedThemes, themeId]);
    }
  };

  const isThemeUnlocked = (themeId) => {
    return unlockedThemes.includes(themeId);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      currentThemeId,
      changeTheme,
      unlockTheme,
      isThemeUnlocked,
      unlockedThemes,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
