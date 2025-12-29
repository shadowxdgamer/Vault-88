import { useSound } from '../../../shared/hooks/useSound';
import { DigitBox } from './DigitBox';
import { HintRow } from './HintRow';
import '../Game.css';
import '../Pause.css';

export function GameBoard({ currentGuess, hints, onDigitChange, onUnlock, message, isWon, onBack, onPause }) {
  const { playUnlock, playWrong, playClick } = useSound();

  const handleUnlock = () => {
    const result = onUnlock();
    
    // Play unlock sound for correct, wrong sound for incorrect
    if (result) {
      playUnlock();
    } else {
      playWrong();
    }
  };

  const handleBack = () => {
    playClick();
    onBack();
  };

  const handlePause = () => {
    playClick();
    onPause();
  };

  return (
    <div className="game-screen">
      {/* Background Image */}
      <div className="game-background">
        <img
          alt="Background"
          className="game-background-image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTosZ9_7WuEyufglHnWkO-HeAbAK7Fag8VY0f64Wz8POUE9GRNCdgxOjt4uT0AdgVWVQ6164JCCKkl5X-Ctka3Oe2-iDyXx54EJcVBewgq5mpHMB-Ky40Ghs53HDHsngmfJ5B0iILfNAmRr76f6W6MlrB8m5exZ5GFipuzghSdj0yrGuqsrSYTI4PgsJPKKhJia8ynMwGdry86FBUFEzLu6JqujNpfDfWD1FZ37LcFxDxcR7Z-rJqxvPxRnKmGiDJEYTCTS650QY"
        />
        <div className="game-background-overlay"></div>
      </div>

      {/* Main Container */}
      <div className="game-container">
        {/* Header */}
        <header className="game-header">
          <button className="back-button" onClick={handleBack} aria-label="Back to menu">
            <span className="material-icons-round">arrow_back</span>
          </button>
          <h1 className="game-title">Crack the Code</h1>
          <button className="pause-icon-button" onClick={handlePause} aria-label="Pause game">
            <span className="material-icons-round">pause</span>
          </button>
        </header>

        {/* Main Content */}
        <main className="game-main">
          {/* Digit Boxes */}
          <div className="digit-boxes-container">
            {currentGuess.map((digit, idx) => (
              <DigitBox
                key={idx}
                value={digit}
                onClick={() => onDigitChange(idx)}
              />
            ))}
          </div>

          {/* Hints Container */}
          <div className="hints-panel glass-panel">
            <div className="hints-scroll-area custom-scrollbar">
              {hints.map((hint, idx) => (
                <HintRow key={idx} digits={hint.digits} text={hint.text} />
              ))}
            </div>
          </div>

          {/* Unlock Button */}
          <button onClick={handleUnlock} className="unlock-button">
            <div className="unlock-button-shine"></div>
            Unlock
          </button>

          {/* Message */}
          {message && (
            <div className={`game-message ${isWon ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
        </main>

        {/* Bottom Accent Line */}
        <div className="bottom-accent"></div>
      </div>
    </div>
  );
}
