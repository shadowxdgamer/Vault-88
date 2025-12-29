// Game difficulty modes
export const GAME_MODES = {
  EASY: 'easy',
  NORMAL: 'normal',
  HARD: 'hard',
  ENDLESS: 'endless',
  TIME_ATTACK: 'time_attack',
};

// Game mode configurations
export const MODE_CONFIG = {
  [GAME_MODES.EASY]: {
    name: 'Easy',
    digits: 3,
    timeLimit: null,
    description: 'Perfect for beginners',
  },
  [GAME_MODES.NORMAL]: {
    name: 'Normal',
    digits: 3,
    timeLimit: null,
    description: 'Standard challenge',
  },
  [GAME_MODES.HARD]: {
    name: 'Hard',
    digits: 4,
    timeLimit: null,
    description: 'Expert level',
  },
  [GAME_MODES.ENDLESS]: {
    name: 'Endless',
    digits: 3,
    timeLimit: null,
    description: 'Solve as many as you can',
  },
  [GAME_MODES.TIME_ATTACK]: {
    name: 'Time Attack',
    digits: 3,
    timeLimit: 60,
    description: 'Beat the clock',
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
