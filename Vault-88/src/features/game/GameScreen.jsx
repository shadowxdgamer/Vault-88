import { useState, useMemo, useEffect } from 'react';
import { GameBoard } from './components/GameBoard';
import { PauseMenu } from './components/PauseMenu';
import { WinModal } from './components/WinModal';
import { useGameLogic } from './hooks/useGameLogic';
import { useLanguage } from '../../shared/hooks/useLanguage';
import { MODE_CONFIG } from '../../shared/utils/constants';
import { calculateScore, getScoreBreakdown, formatTime } from './utils/scoreCalculator';
import { saveHighScore, getHighScore } from './utils/highScoreManager';
import { recordWin, recordGamePlayed } from './utils/progressionManager';

export function GameScreen({ onExit, difficulty }) {
  const { t } = useLanguage();
  const digitCount = MODE_CONFIG[difficulty].digits;
  const baseScore = MODE_CONFIG[difficulty].baseScore;
  const { currentGuess, hints, isWon, wrongAttempts, elapsedTime, revealedDigits, hintsUsed, secretCode, attemptHistory, digitFeedback, changeDigit, checkCode, resetGame, revealHint } = useGameLogic(digitCount);
  const [message, setMessage] = useState('');
  const [showWinModal, setShowWinModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const [highScore, setHighScore] = useState(() => getHighScore(difficulty));

  // Calculate current score in real-time
  const currentScore = useMemo(() => {
    return calculateScore(baseScore, wrongAttempts, elapsedTime, hintsUsed);
  }, [baseScore, wrongAttempts, elapsedTime, hintsUsed]);

  // Record game played on mount
  useEffect(() => {
    recordGamePlayed(difficulty);
  }, [difficulty]);

  const handleDigitChange = (index) => {
    changeDigit(index);
    setMessage('');
  };

  const handleUnlock = () => {
    const won = checkCode();
    
    if (won) {
      const score = calculateScore(baseScore, wrongAttempts, elapsedTime, hintsUsed);
      setFinalScore(score);
      
      // Check and save high score
      const isNew = saveHighScore(difficulty, score);
      setIsNewHighScore(isNew);
      if (isNew) {
        setHighScore(score);
      }
      
      // Record win in progression system
      const isPerfect = wrongAttempts === 0;
      recordWin(difficulty, isPerfect, hintsUsed);
      
      setMessage(t('game.unlocked'));
      setShowWinModal(true);
    } else {
      setMessage(t('game.accessDenied'));
    }
    
    return won;
  };

  const handlePlayAgain = () => {
    setShowWinModal(false);
    setMessage('');
    resetGame();
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleRestart = () => {
    setIsPaused(false);
    setMessage('');
    resetGame();
  };

  const handleRequestHint = () => {
    const success = revealHint();
    if (!success) {
      setMessage('No more hints available!');
    }
  };

  return (
    <>
      <GameBoard
        currentGuess={currentGuess}
        hints={hints}
        onDigitChange={handleDigitChange}
        onUnlock={handleUnlock}
        message={message}
        isWon={isWon}
        onBack={onExit}
        onPause={handlePause}
        score={currentScore}
        time={elapsedTime}
        revealedDigits={revealedDigits}
        hintsUsed={hintsUsed}
        onRequestHint={handleRequestHint}
        secretCode={secretCode}
        digitFeedback={digitFeedback}
      />

      {/* Pause Menu */}
      {isPaused && (
        <PauseMenu
          onResume={handleResume}
          onRestart={handleRestart}
          onExit={onExit}
        />
      )}

      {/* Win Modal */}
      {showWinModal && (
        <WinModal
          score={finalScore}
          time={elapsedTime}
          wrongAttempts={wrongAttempts}
          hintsUsed={hintsUsed}
          baseScore={baseScore}
          isNewHighScore={isNewHighScore}
          highScore={highScore}
          onPlayAgain={handlePlayAgain}
          onExit={onExit}
        />
      )}
    </>
  );
}
