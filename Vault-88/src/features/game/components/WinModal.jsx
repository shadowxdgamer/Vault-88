import { useSound } from '../../../shared/hooks/useSound';
import { useLanguage } from '../../../shared/hooks/useLanguage';
import { formatTime, getScoreBreakdown } from '../utils/scoreCalculator';
import { getStats } from '../utils/progressionManager';
import './WinModal.css';

export function WinModal({ score, time, wrongAttempts, hintsUsed, baseScore, isNewHighScore, highScore, onPlayAgain, onExit }) {
  const { playClick } = useSound();
  const { t } = useLanguage();
  const breakdown = getScoreBreakdown(baseScore, wrongAttempts, time, hintsUsed);
  const stats = getStats();

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
          <h2 className="win-title">{t('win.title')}</h2>
          <p className="win-subtitle">{t('win.subtitle')}</p>
          {isNewHighScore && (
            <div className="new-high-score-badge">
              <span className="material-icons-round">emoji_events</span>
              <span>{t('win.newHighScore')}</span>
            </div>
          )}
        </div>

        {/* Score Display */}
        <div className="score-display">
          <div className="final-score">
            <span className="material-icons-round score-icon">stars</span>
            <span className="score-value">{breakdown.total}</span>
          </div>
          <div className="score-label">{t('win.finalScore')}</div>
          {!isNewHighScore && highScore > 0 && (
            <div className="high-score-info">{t('win.best')}: {highScore}</div>
          )}
        </div>

        {/* Score Breakdown */}
        <div className="score-breakdown">
          <div className="breakdown-row">
            <span className="breakdown-label">{t('win.baseScore')}</span>
            <span className="breakdown-value positive">+{breakdown.base}</span>
          </div>
          {breakdown.attemptPenalty > 0 && (
            <div className="breakdown-row">
              <span className="breakdown-label">{t('win.wrongAttempts')} ({wrongAttempts})</span>
              <span className="breakdown-value negative">-{breakdown.attemptPenalty}</span>
            </div>
          )}
          {breakdown.hintPenalty > 0 && (
            <div className="breakdown-row">
              <span className="breakdown-label">{t('win.hintsUsed')} ({hintsUsed})</span>
              <span className="breakdown-value negative">-{breakdown.hintPenalty}</span>
            </div>
          )}
          {breakdown.timeBonus > 0 && (
            <div className="breakdown-row">
              <span className="breakdown-label">{t('win.timeBonus')} ({formatTime(time)})</span>
              <span className="breakdown-value positive">+{breakdown.timeBonus}</span>
            </div>
          )}
          {breakdown.perfectBonus > 0 && (
            <div className="breakdown-row">
              <span className="breakdown-label">{t('win.perfectBonus')}</span>
              <span className="breakdown-value perfect">+{breakdown.perfectBonus}</span>
            </div>
          )}
        </div>

        {/* Streak Info */}
        {stats.currentStreak > 1 && (
          <div className="streak-info">
            <span className="material-icons-round">local_fire_department</span>
            <span>{stats.currentStreak} {t('win.winStreak')}</span>
          </div>
        )}

        {/* Buttons */}
        <div className="win-modal-buttons">
          <button className="win-button primary" onClick={handlePlayAgain}>
            <span className="material-icons-round">refresh</span>
            <span>{t('win.playAgain')}</span>
          </button>
          <button className="win-button secondary" onClick={handleExit}>
            <span className="material-icons-round">home</span>
            <span>{t('win.mainMenu')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
