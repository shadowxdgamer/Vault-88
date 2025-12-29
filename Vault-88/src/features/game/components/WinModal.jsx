import { useSound } from '../../../shared/hooks/useSound';
import { formatTime, getScoreBreakdown } from '../utils/scoreCalculator';
import './WinModal.css';

export function WinModal({ score, time, wrongAttempts, hintsUsed, baseScore, isNewHighScore, highScore, onPlayAgain, onExit }) {
  const { playClick } = useSound();
  const breakdown = getScoreBreakdown(baseScore, wrongAttempts, time, hintsUsed);

  const handlePlayAgain = () => {
    playClick();
    onPlayAgain();
  };

  const handleExit = () => {
    playClick();
    onExit();
  };

  return (
    <div className="win-modal-overlay">
      <div className="win-modal glass-panel">
        {/* Header */}
        <div className="win-modal-header">
          <div className="win-icon-container">
            <span className="material-icons-round win-icon">lock_open</span>
          </div>
          <h2 className="win-title">UNLOCKED!</h2>
          <p className="win-subtitle">Security system cracked</p>
          {isNewHighScore && (
            <div className="new-high-score-badge">
              <span className="material-icons-round">emoji_events</span>
              <span>New High Score!</span>
            </div>
          )}
        </div>

        {/* Score Display */}
        <div className="score-display">
          <div className="final-score">
            <span className="material-icons-round score-icon">stars</span>
            <span className="score-value">{breakdown.total}</span>
          </div>
          <div className="score-label">Final Score</div>
          {!isNewHighScore && highScore > 0 && (
            <div className="high-score-info">Best: {highScore}</div>
          )}
        </div>

        {/* Score Breakdown */}
        <div className="score-breakdown">
          <div className="breakdown-row">
            <span className="breakdown-label">Base Score</span>
            <span className="breakdown-value positive">+{breakdown.base}</span>
          </div>
          {breakdown.attemptPenalty > 0 && (
            <div className="breakdown-row">
              <span className="breakdown-label">Wrong Attempts ({wrongAttempts})</span>
              <span className="breakdown-value negative">-{breakdown.attemptPenalty}</span>
            </div>
          )}
          {breakdown.hintPenalty > 0 && (
            <div className="breakdown-row">
              <span className="breakdown-label">Hints Used ({hintsUsed})</span>
              <span className="breakdown-value negative">-{breakdown.hintPenalty}</span>
            </div>
          )}
          {breakdown.timeBonus > 0 && (
            <div className="breakdown-row">
              <span className="breakdown-label">Time Bonus ({formatTime(time)})</span>
              <span className="breakdown-value positive">+{breakdown.timeBonus}</span>
            </div>
          )}
          {breakdown.perfectBonus > 0 && (
            <div className="breakdown-row">
              <span className="breakdown-label">Perfect Bonus</span>
              <span className="breakdown-value perfect">+{breakdown.perfectBonus}</span>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="win-modal-buttons">
          <button className="win-button primary" onClick={handlePlayAgain}>
            <span className="material-icons-round">refresh</span>
            <span>Play Again</span>
          </button>
          <button className="win-button secondary" onClick={handleExit}>
            <span className="material-icons-round">home</span>
            <span>Main Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}
