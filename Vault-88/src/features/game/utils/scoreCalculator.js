/**
 * Score calculation utilities for Vault 88
 * 
 * Scoring Formula:
 * Base Score (from difficulty) - (wrong attempts × 10) + time bonus + perfect bonus
 * 
 * Time Bonus:
 * - Under 30s: +50 points
 * - Under 60s: +30 points
 * - Under 90s: +10 points
 * 
 * Perfect Bonus:
 * - First try (0 wrong attempts): +100 points
 */

export function calculateScore(baseScore, wrongAttempts, timeInSeconds) {
  let score = baseScore;

  // Deduct points for wrong attempts
  score -= wrongAttempts * 10;

  // Add time bonus
  if (timeInSeconds < 30) {
    score += 50;
  } else if (timeInSeconds < 60) {
    score += 30;
  } else if (timeInSeconds < 90) {
    score += 10;
  }

  // Add perfect bonus
  if (wrongAttempts === 0) {
    score += 100;
  }

  // Ensure score doesn't go negative
  return Math.max(0, score);
}

export function getScoreBreakdown(baseScore, wrongAttempts, timeInSeconds) {
  const breakdown = {
    base: baseScore,
    attemptPenalty: wrongAttempts * 10,
    timeBonus: 0,
    perfectBonus: 0,
  };

  // Calculate time bonus
  if (timeInSeconds < 30) {
    breakdown.timeBonus = 50;
  } else if (timeInSeconds < 60) {
    breakdown.timeBonus = 30;
  } else if (timeInSeconds < 90) {
    breakdown.timeBonus = 10;
  }

  // Calculate perfect bonus
  if (wrongAttempts === 0) {
    breakdown.perfectBonus = 100;
  }

  // Calculate final score
  breakdown.total = Math.max(0, baseScore - breakdown.attemptPenalty + breakdown.timeBonus + breakdown.perfectBonus);

  return breakdown;
}

export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
