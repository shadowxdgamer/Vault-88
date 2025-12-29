/**
 * Progression & Statistics Management with LocalStorage
 */

const STATS_KEY = 'vault88-stats';

const DEFAULT_STATS = {
  totalGamesPlayed: 0,
  totalWins: 0,
  currentStreak: 0,
  bestStreak: 0,
  perfectWins: 0, // Wins with 0 wrong attempts
  totalHintsUsed: 0,
  lastPlayedDate: null,
  difficultyStats: {
    EASY: { played: 0, wins: 0 },
    MEDIUM: { played: 0, wins: 0 },
    HARD: { played: 0, wins: 0 },
  },
};

export function getStats() {
  try {
    const stored = localStorage.getItem(STATS_KEY);
    if (!stored) return { ...DEFAULT_STATS };
    
    const stats = JSON.parse(stored);
    // Deep merge to ensure nested objects like difficultyStats are properly merged
    return {
      ...DEFAULT_STATS,
      ...stats,
      difficultyStats: {
        ...DEFAULT_STATS.difficultyStats,
        ...stats.difficultyStats,
      },
    };
  } catch (error) {
    console.error('Error loading stats:', error);
    return { ...DEFAULT_STATS };
  }
}

export function recordGamePlayed(difficulty) {
  const stats = getStats();
  const upperDifficulty = difficulty.toUpperCase();
  
  // Validate difficulty exists
  if (!stats.difficultyStats[upperDifficulty]) {
    console.error(`Invalid difficulty: ${difficulty}`);
    return stats;
  }
  
  stats.totalGamesPlayed++;
  stats.difficultyStats[upperDifficulty].played++;
  stats.lastPlayedDate = new Date().toISOString();
  
  saveStats(stats);
  return stats;
}

export function recordWin(difficulty, isPerfect, hintsUsed) {
  const stats = getStats();
  const upperDifficulty = difficulty.toUpperCase();
  
  // Validate difficulty exists
  if (!stats.difficultyStats[upperDifficulty]) {
    console.error(`Invalid difficulty: ${difficulty}`);
    return stats;
  }
  
  stats.totalWins++;
  stats.difficultyStats[upperDifficulty].wins++;
  stats.currentStreak++;
  stats.totalHintsUsed += hintsUsed;
  
  if (isPerfect) {
    stats.perfectWins++;
  }
  
  if (stats.currentStreak > stats.bestStreak) {
    stats.bestStreak = stats.currentStreak;
  }
  
  stats.lastPlayedDate = new Date().toISOString();
  
  saveStats(stats);
  return stats;
}

export function recordLoss() {
  const stats = getStats();
  
  stats.currentStreak = 0;
  stats.lastPlayedDate = new Date().toISOString();
  
  saveStats(stats);
  return stats;
}

export function getWinRate() {
  const stats = getStats();
  if (stats.totalGamesPlayed === 0) return 0;
  return Math.round((stats.totalWins / stats.totalGamesPlayed) * 100);
}

export function getDifficultyWinRate(difficulty) {
  const stats = getStats();
  const upperDifficulty = difficulty.toUpperCase();
  const diffStats = stats.difficultyStats[upperDifficulty];
  if (!diffStats || diffStats.played === 0) return 0;
  return Math.round((diffStats.wins / diffStats.played) * 100);
}

export function getAchievements() {
  const stats = getStats();
  const achievements = [];
  
  // Streak achievements
  if (stats.bestStreak >= 3) {
    achievements.push({ id: 'streak3', name: 'Hot Streak', description: '3 wins in a row', icon: 'local_fire_department' });
  }
  if (stats.bestStreak >= 5) {
    achievements.push({ id: 'streak5', name: 'On Fire', description: '5 wins in a row', icon: 'whatshot' });
  }
  if (stats.bestStreak >= 10) {
    achievements.push({ id: 'streak10', name: 'Unstoppable', description: '10 wins in a row', icon: 'bolt' });
  }
  
  // Win count achievements
  if (stats.totalWins >= 10) {
    achievements.push({ id: 'wins10', name: 'Novice Hacker', description: '10 total wins', icon: 'workspace_premium' });
  }
  if (stats.totalWins >= 50) {
    achievements.push({ id: 'wins50', name: 'Expert Hacker', description: '50 total wins', icon: 'military_tech' });
  }
  if (stats.totalWins >= 100) {
    achievements.push({ id: 'wins100', name: 'Master Hacker', description: '100 total wins', icon: 'emoji_events' });
  }
  
  // Perfect wins
  if (stats.perfectWins >= 5) {
    achievements.push({ id: 'perfect5', name: 'Perfectionist', description: '5 perfect wins', icon: 'star' });
  }
  
  // No hints
  if (stats.totalWins >= 10 && stats.totalHintsUsed === 0) {
    achievements.push({ id: 'nohints', name: 'Pure Skill', description: '10 wins without hints', icon: 'psychology' });
  }
  
  return achievements;
}

export function resetStats() {
  localStorage.removeItem(STATS_KEY);
  return DEFAULT_STATS;
}

function saveStats(stats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Error saving stats:', error);
  }
}
