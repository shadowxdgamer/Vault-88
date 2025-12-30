import { useState } from 'react';
import { useSound } from '../../../shared/hooks/useSound';
import { useLanguage } from '../../../shared/hooks/useLanguage';
import { DigitBox } from './DigitBox';
import { HintRow } from './HintRow';
import { NumberKeyboard } from './NumberKeyboard';
import { formatTime } from '../utils/scoreCalculator';
import '../Game.css';
import '../Pause.css';

export function GameBoard({ currentGuess, hints, onDigitChange, onUnlock, message, isWon, onBack, onPause, score, time, revealedDigits, hintsUsed, onRequestHint, secretCode, digitFeedback, eliminatedDigits, onToggleDigit }) {
  const { playUnlock, playWrong, playClick } = useSound();
  const { t } = useLanguage();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

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

  const handleRequestHint = () => {
    playClick();
    onRequestHint();
  };

  const handleToggleKeyboard = () => {
    playClick();
    setKeyboardVisible(!keyboardVisible);
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
          <div className="game-header-center">
            <h1 className="game-title">{t('game.title')}</h1>
            <div className="game-stats">
              <div className="stat-item">
                <span className="material-icons-round stat-icon">timer</span>
                <span className="stat-value">{formatTime(time)}</span>
              </div>
              <div className="stat-item">
                <span className="material-icons-round stat-icon">stars</span>
                <span className="stat-value">{score}</span>
              </div>
            </div>
          </div>
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
                isRevealed={revealedDigits.includes(idx)}
                revealedValue={secretCode?.[idx]}
                feedback={digitFeedback?.[idx]}
              />
            ))}
          </div>

          {/* Hints Container */}
          <div className="hints-panel glass-panel">
            <div className="hints-scroll-area custom-scrollbar">
              {hints.map((hint, idx) => (
                <HintRow key={idx} digits={hint.digits} text={hint.text} type={hint.type} />
              ))}
            </div>
          </div>

          {/* Number Keyboard */}
          <NumberKeyboard
            eliminatedDigits={eliminatedDigits}
            onToggleDigit={onToggleDigit}
            isVisible={keyboardVisible}
          />

          {/* Button Row */}
          <div className="button-row">
            {/* Keyboard Toggle Button */}
            <button 
              onClick={handleToggleKeyboard}
              className="keyboard-toggle-button"
              aria-label="Toggle number keyboard"
            >
              <span className="material-icons-round">{keyboardVisible ? 'keyboard_hide' : 'dialpad'}</span>
            </button>

            {/* Hint Request Button */}
            <button 
              onClick={handleRequestHint} 
              className="hint-request-button"
              disabled={hintsUsed >= 2}
            >
              <span className="material-icons-round">lightbulb</span>
              <span>{t('game.requestHint')} ({hintsUsed}/2)</span>
              <span className="hint-cost">-25 {t('difficulty.points')}</span>
            </button>
          </div>

          {/* Unlock Button */}
          <button onClick={handleUnlock} className="unlock-button">
            <div className="unlock-button-shine"></div>
            {t('game.unlock')}
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
