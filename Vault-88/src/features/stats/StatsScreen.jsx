import { useState, useEffect } from 'react';
import { useSound } from '../../shared/hooks/useSound';
import { useLanguage } from '../../shared/hooks/useLanguage';
import { getStats, getWinRate, getDifficultyWinRate, getAchievements } from '../game/utils/progressionManager';
import { getAllHighScores } from '../game/utils/highScoreManager';
import './Stats.css';

export function StatsScreen({ onBack }) {
  const { playClick } = useSound();
  const { t } = useLanguage();
  const [stats, setStats] = useState(getStats());
  const [winRate, setWinRate] = useState(getWinRate());
  const [achievements, setAchievements] = useState(getAchievements());
  const [highScores, setHighScores] = useState(getAllHighScores());

  // Refresh stats when component mounts
  useEffect(() => {
    setStats(getStats());
    setWinRate(getWinRate());
    setAchievements(getAchievements());
    setHighScores(getAllHighScores());
  }, []);

  const handleBack = () => {
    playClick();
    onBack();
  };

  return (
    <div className="stats-screen">
      {/* Background */}
      <div className="stats-background">
        <img
          alt="Background"
          className="stats-background-image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTosZ9_7WuEyufglHnWkO-HeAbAK7Fag8VY0f64Wz8POUE9GRNCdgxOjt4uT0AdgVWVQ6164JCCKkl5X-Ctka3Oe2-iDyXx54EJcVBewgq5mpHMB-Ky40Ghs53HDHsngmfJ5B0iILfNAmRr76f6W6MlrB8m5exZ5GFipuzghSdj0yrGuqsrSYTI4PgsJPKKhJia8ynMwGdry86FBUFEzLu6JqujNpfDfWD1FZ37LcFxDxcR7Z-rJqxvPxRnKmGiDJEYTCTS650QY"
        />
        <div className="stats-background-overlay"></div>
      </div>

      {/* Main Container */}
      <div className="stats-container">
        {/* Header */}
        <header className="stats-header">
          <button className="back-button" onClick={handleBack}>
            <span className="material-icons-round">arrow_back</span>
          </button>
          <h1 className="stats-title">{t('stats.title')}</h1>
          <div style={{ width: '40px' }}></div>
        </header>

        {/* Content */}
        <main className="stats-main">
          {/* Overview Cards */}
          <div className="stats-overview">
            <div className="stat-card glass-panel">
              <span className="material-icons-round stat-card-icon">sports_esports</span>
              <div className="stat-card-value">{stats.totalGamesPlayed}</div>
              <div className="stat-card-label">{t('stats.gamesPlayed')}</div>
            </div>
            
            <div className="stat-card glass-panel">
              <span className="material-icons-round stat-card-icon">emoji_events</span>
              <div className="stat-card-value">{stats.totalWins}</div>
              <div className="stat-card-label">{t('stats.totalWins')}</div>
            </div>
            
            <div className="stat-card glass-panel">
              <span className="material-icons-round stat-card-icon">percent</span>
              <div className="stat-card-value">{winRate}%</div>
              <div className="stat-card-label">{t('stats.winRate')}</div>
            </div>
          </div>

          {/* Streak Section */}
          <div className="stats-section glass-panel">
            <h2 className="section-title">
              <span className="material-icons-round">local_fire_department</span>
              <span>{t('stats.streaks')}</span>
            </h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-item-label">{t('stats.currentStreak')}</div>
                <div className="stat-item-value highlight">{stats.currentStreak}</div>
              </div>
              <div className="stat-item">
                <div className="stat-item-label">{t('stats.bestStreak')}</div>
                <div className="stat-item-value">{stats.bestStreak}</div>
              </div>
              <div className="stat-item">
                <div className="stat-item-label">{t('stats.perfectWins')}</div>
                <div className="stat-item-value">{stats.perfectWins}</div>
              </div>
            </div>
          </div>

          {/* High Scores */}
          <div className="stats-section glass-panel">
            <h2 className="section-title">
              <span className="material-icons-round">stars</span>
              <span>{t('stats.highScores')}</span>
            </h2>
            <div className="highscore-list">
              <div className="highscore-item">
                <div className="difficulty-badge easy">{t('difficulty.easy')}</div>
                <div className="highscore-value">{highScores.EASY || 0}</div>
              </div>
              <div className="highscore-item">
                <div className="difficulty-badge medium">{t('difficulty.medium')}</div>
                <div className="highscore-value">{highScores.MEDIUM || 0}</div>
              </div>
              <div className="highscore-item">
                <div className="difficulty-badge hard">{t('difficulty.hard')}</div>
                <div className="highscore-value">{highScores.HARD || 0}</div>
              </div>
            </div>
          </div>

          {/* Difficulty Stats */}
          <div className="stats-section glass-panel">
            <h2 className="section-title">
              <span className="material-icons-round">analytics</span>
              <span>{t('stats.performanceByDifficulty')}</span>
            </h2>
            <div className="difficulty-stats">
              {['EASY', 'MEDIUM', 'HARD'].map((diff) => {
                const diffStats = stats.difficultyStats[diff];
                const diffWinRate = getDifficultyWinRate(diff);
                return (
                  <div key={diff} className="difficulty-stat-row">
                    <div className={`difficulty-badge ${diff.toLowerCase()}`}>
                      {t(`difficulty.${diff.toLowerCase()}`)}
                    </div>
                    <div className="difficulty-stat-details">
                      <div className="difficulty-stat-item">
                        <span>{diffStats.played}</span>
                        <span className="stat-label-small">{t('stats.played')}</span>
                      </div>
                      <div className="difficulty-stat-item">
                        <span>{diffStats.wins}</span>
                        <span className="stat-label-small">{t('stats.wins')}</span>
                      </div>
                      <div className="difficulty-stat-item">
                        <span>{diffWinRate}%</span>
                        <span className="stat-label-small">{t('stats.winRate')}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          {achievements.length > 0 && (
            <div className="stats-section glass-panel">
              <h2 className="section-title">
                <span className="material-icons-round">workspace_premium</span>
                <span>{t('stats.achievements')} ({achievements.length})</span>
              </h2>
              <div className="achievements-grid">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="achievement-card">
                    <span className="material-icons-round achievement-icon">{achievement.icon}</span>
                    <div className="achievement-name">{achievement.name}</div>
                    <div className="achievement-desc">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
