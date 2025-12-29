// Game difficulty modes
export const GAME_MODES = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
};

// Game mode configurations
export const MODE_CONFIG = {
  [GAME_MODES.EASY]: {
    name: 'Easy',
    digits: 3,
    hintsCount: 4,
    baseScore: 100,
    description: '3 digits - Perfect for beginners',
    icon: 'sentiment_satisfied',
    color: '#4ade80'
  },
  [GAME_MODES.MEDIUM]: {
    name: 'Medium',
    digits: 4,
    hintsCount: 5,
    baseScore: 250,
    description: '4 digits - Standard challenge',
    icon: 'sports_esports',
    color: '#38bdf8'
  },
  [GAME_MODES.HARD]: {
    name: 'Hard',
    digits: 5,
    hintsCount: 5,
    baseScore: 500,
    description: '5 digits - Expert level puzzle',
    icon: 'local_fire_department',
    color: '#f87171'
  },
};

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'vault88-theme',
  UNLOCKED_THEMES: 'vault88-unlocked-themes',
  HIGH_SCORES: 'vault88-high-scores',
  SETTINGS: 'vault88-settings',
  STATS: 'vault88-stats',
};

// Default settings
export const DEFAULT_SETTINGS = {
  sound: true,
  music: true,
  haptics: true,
};
