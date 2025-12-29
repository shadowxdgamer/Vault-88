/**
 * High Score Management with LocalStorage
 */

const HIGH_SCORE_KEY_PREFIX = 'vault88-highscore-';

export function saveHighScore(difficulty, score) {
  const key = `${HIGH_SCORE_KEY_PREFIX}${difficulty}`;
  const currentHighScore = getHighScore(difficulty);
  
  if (score > currentHighScore) {
    localStorage.setItem(key, score.toString());
    return true; // New high score!
  }
  
  return false;
}

export function getHighScore(difficulty) {
  const key = `${HIGH_SCORE_KEY_PREFIX}${difficulty}`;
  const stored = localStorage.getItem(key);
  return stored ? parseInt(stored, 10) : 0;
}

export function getAllHighScores() {
  return {
    EASY: getHighScore('EASY'),
    MEDIUM: getHighScore('MEDIUM'),
    HARD: getHighScore('HARD'),
  };
}

export function clearHighScores() {
  localStorage.removeItem(`${HIGH_SCORE_KEY_PREFIX}EASY`);
  localStorage.removeItem(`${HIGH_SCORE_KEY_PREFIX}MEDIUM`);
  localStorage.removeItem(`${HIGH_SCORE_KEY_PREFIX}HARD`);
}
