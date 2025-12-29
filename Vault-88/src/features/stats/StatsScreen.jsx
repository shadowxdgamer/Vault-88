import { useState, useEffect } from 'react';
import { useSound } from '../../shared/hooks/useSound';
import { getStats, getWinRate, getDifficultyWinRate, getAchievements } from '../game/utils/progressionManager';
import { getAllHighScores } from '../game/utils/highScoreManager';
import './Stats.css';

export function StatsScreen({ onBack }) {
  const { playClick } = useSound();
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
          <h1 className="stats-title">Statistics</h1>
          <div style={{ width: '40px' }}></div>
        </header>

        {/* Content */}
        <main className="stats-main">
          {/* Overview Cards */}
          <div className="stats-overview">
            <div className="stat-card glass-panel">
              <span className="material-icons-round stat-card-icon">sports_esports</span>
              <div className="stat-card-value">{stats.totalGamesPlayed}</div>
              <div className="stat-card-label">Games Played</div>
            </div>
            
            <div className="stat-card glass-panel">
              <span className="material-icons-round stat-card-icon">emoji_events</span>
              <div className="stat-card-value">{stats.totalWins}</div>
              <div className="stat-card-label">Total Wins</div>
            </div>
            
            <div className="stat-card glass-panel">
              <span className="material-icons-round stat-card-icon">percent</span>
              <div className="stat-card-value">{winRate}%</div>
              <div className="stat-card-label">Win Rate</div>
            </div>
          </div>

          {/* Streak Section */}
          <div className="stats-section glass-panel">
            <h2 className="section-title">
              <span className="material-icons-round">local_fire_department</span>
              <span>Streaks</span>
            </h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-item-label">Current Streak</div>
                <div className="stat-item-value highlight">{stats.currentStreak}</div>
              </div>
              <div className="stat-item">
                <div className="stat-item-label">Best Streak</div>
                <div className="stat-item-value">{stats.bestStreak}</div>
              </div>
              <div className="stat-item">
                <div className="stat-item-label">Perfect Wins</div>
                <div className="stat-item-value">{stats.perfectWins}</div>
              </div>
            </div>
          </div>

          {/* High Scores */}
          <div className="stats-section glass-panel">
            <h2 className="section-title">
              <span className="material-icons-round">stars</span>
              <span>High Scores</span>
            </h2>
            <div className="highscore-list">
              <div className="highscore-item">
                <div className="difficulty-badge easy">Easy</div>
                <div className="highscore-value">{highScores.EASY || 0}</div>
              </div>
              <div className="highscore-item">
                <div className="difficulty-badge medium">Medium</div>
                <div className="highscore-value">{highScores.MEDIUM || 0}</div>
              </div>
              <div className="highscore-item">
                <div className="difficulty-badge hard">Hard</div>
                <div className="highscore-value">{highScores.HARD || 0}</div>
              </div>
            </div>
          </div>

          {/* Difficulty Stats */}
          <div className="stats-section glass-panel">
            <h2 className="section-title">
              <span className="material-icons-round">analytics</span>
              <span>Performance by Difficulty</span>
            </h2>
            <div className="difficulty-stats">
              {['EASY', 'MEDIUM', 'HARD'].map((diff) => {
                const diffStats = stats.difficultyStats[diff];
                const diffWinRate = getDifficultyWinRate(diff);
                return (
                  <div key={diff} className="difficulty-stat-row">
                    <div className={`difficulty-badge ${diff.toLowerCase()}`}>
                      {diff.charAt(0) + diff.slice(1).toLowerCase()}
                    </div>
                    <div className="difficulty-stat-details">
                      <div className="difficulty-stat-item">
                        <span>{diffStats.played}</span>
                        <span className="stat-label-small">Played</span>
                      </div>
                      <div className="difficulty-stat-item">
                        <span>{diffStats.wins}</span>
                        <span className="stat-label-small">Wins</span>
                      </div>
                      <div className="difficulty-stat-item">
                        <span>{diffWinRate}%</span>
                        <span className="stat-label-small">Win Rate</span>
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
                <span>Achievements ({achievements.length})</span>
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
