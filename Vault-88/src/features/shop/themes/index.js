// Theme Registry
import { woodTheme } from './wood';
import { cyberpunkTheme } from './cyberpunk';
import { arcaneTheme } from './arcane';
import { glassTheme } from './glass';

export const themes = {
  wood: woodTheme,
  cyberpunk: cyberpunkTheme,
  arcane: arcaneTheme,
  glass: glassTheme,
};

export const defaultTheme = 'wood';

export const getTheme = (themeId) => {
  return themes[themeId] || themes[defaultTheme];
};

export const getUnlockedThemes = (unlockedIds = ['wood']) => {
  return Object.values(themes).filter(theme => 
    unlockedIds.includes(theme.id) || !theme.locked
  );
};

export const getLockedThemes = (unlockedIds = ['wood']) => {
  return Object.values(themes).filter(theme => 
    theme.locked && !unlockedIds.includes(theme.id)
  );
};
