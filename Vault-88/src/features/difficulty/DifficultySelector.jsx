import { useSound } from '../../shared/hooks/useSound';
import { GAME_MODES, MODE_CONFIG } from '../../shared/utils/constants';
import './Difficulty.css';

export function DifficultySelector({ onSelect, onBack }) {
  const { playClick, playHover } = useSound();

  const handleSelect = (mode) => {
    playClick();
    onSelect(mode);
  };

  const handleBack = () => {
    playClick();
    onBack();
  };

  return (
    <div className="difficulty-screen">
      {/* Background */}
      <div className="difficulty-background">
        <img
          alt="Background"
          className="difficulty-background-image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTosZ9_7WuEyufglHnWkO-HeAbAK7Fag8VY0f64Wz8POUE9GRNCdgxOjt4uT0AdgVWVQ6164JCCKkl5X-Ctka3Oe2-iDyXx54EJcVBewgq5mpHMB-Ky40Ghs53HDHsngmfJ5B0iILfNAmRr76f6W6MlrB8m5exZ5GFipuzghSdj0yrGuqsrSYTI4PgsJPKKhJia8ynMwGdry86FBUFEzLu6JqujNpfDfWD1FZ37LcFxDxcR7Z-rJqxvPxRnKmGiDJEYTCTS650QY"
        />
        <div className="difficulty-background-overlay"></div>
      </div>

      {/* Main Container */}
      <div className="difficulty-container">
        {/* Header */}
        <header className="difficulty-header">
          <button 
            className="back-button" 
            onClick={handleBack}
            onMouseEnter={playHover}
            aria-label="Back to menu"
          >
            <span className="material-icons-round">arrow_back</span>
          </button>
          <h1 className="difficulty-title">Select Difficulty</h1>
          <div style={{ width: '2.5rem' }}></div>
        </header>

        {/* Main Content */}
        <main className="difficulty-main">
          {/* Easy */}
          <div 
            className={`difficulty-card glass-panel easy`}
            onClick={() => handleSelect(GAME_MODES.EASY)}
            onMouseEnter={playHover}
          >
            <div className="difficulty-card-header">
              <div className="difficulty-card-icon">
                <span className="material-icons-round">{MODE_CONFIG[GAME_MODES.EASY].icon}</span>
              </div>
              <h2 className="difficulty-card-title">{MODE_CONFIG[GAME_MODES.EASY].name}</h2>
            </div>
            <p className="difficulty-card-description">
              {MODE_CONFIG[GAME_MODES.EASY].description}
            </p>
            <div className="difficulty-card-stats">
              <div className="difficulty-card-stat">
                <span className="material-icons-round difficulty-card-stat-icon">grid_3x3</span>
                <span>{MODE_CONFIG[GAME_MODES.EASY].digits} Digits</span>
              </div>
              <div className="difficulty-card-stat">
                <span className="material-icons-round difficulty-card-stat-icon">star</span>
                <span>{MODE_CONFIG[GAME_MODES.EASY].baseScore} pts</span>
              </div>
            </div>
          </div>

          {/* Medium */}
          <div 
            className={`difficulty-card glass-panel medium`}
            onClick={() => handleSelect(GAME_MODES.MEDIUM)}
            onMouseEnter={playHover}
          >
            <div className="difficulty-card-header">
              <div className="difficulty-card-icon">
                <span className="material-icons-round">{MODE_CONFIG[GAME_MODES.MEDIUM].icon}</span>
              </div>
              <h2 className="difficulty-card-title">{MODE_CONFIG[GAME_MODES.MEDIUM].name}</h2>
            </div>
            <p className="difficulty-card-description">
              {MODE_CONFIG[GAME_MODES.MEDIUM].description}
            </p>
            <div className="difficulty-card-stats">
              <div className="difficulty-card-stat">
                <span className="material-icons-round difficulty-card-stat-icon">grid_4x4</span>
                <span>{MODE_CONFIG[GAME_MODES.MEDIUM].digits} Digits</span>
              </div>
              <div className="difficulty-card-stat">
                <span className="material-icons-round difficulty-card-stat-icon">star</span>
                <span>{MODE_CONFIG[GAME_MODES.MEDIUM].baseScore} pts</span>
              </div>
            </div>
          </div>

          {/* Hard */}
          <div 
            className={`difficulty-card glass-panel hard`}
            onClick={() => handleSelect(GAME_MODES.HARD)}
            onMouseEnter={playHover}
          >
            <div className="difficulty-card-header">
              <div className="difficulty-card-icon">
                <span className="material-icons-round">{MODE_CONFIG[GAME_MODES.HARD].icon}</span>
              </div>
              <h2 className="difficulty-card-title">{MODE_CONFIG[GAME_MODES.HARD].name}</h2>
            </div>
            <p className="difficulty-card-description">
              {MODE_CONFIG[GAME_MODES.HARD].description}
            </p>
            <div className="difficulty-card-stats">
              <div className="difficulty-card-stat">
                <span className="material-icons-round difficulty-card-stat-icon">apps</span>
                <span>{MODE_CONFIG[GAME_MODES.HARD].digits} Digits</span>
              </div>
              <div className="difficulty-card-stat">
                <span className="material-icons-round difficulty-card-stat-icon">star</span>
                <span>{MODE_CONFIG[GAME_MODES.HARD].baseScore} pts</span>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Accent Line */}
        <div className="bottom-accent"></div>
      </div>
    </div>
  );
}
