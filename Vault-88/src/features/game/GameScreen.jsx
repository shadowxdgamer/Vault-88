import { useState, useMemo } from 'react';
import { GameBoard } from './components/GameBoard';
import { PauseMenu } from './components/PauseMenu';
import { WinModal } from './components/WinModal';
import { useGameLogic } from './hooks/useGameLogic';
import { MODE_CONFIG } from '../../shared/utils/constants';
import { calculateScore, getScoreBreakdown, formatTime } from './utils/scoreCalculator';
import { saveHighScore, getHighScore } from './utils/highScoreManager';

export function GameScreen({ onExit, difficulty }) {
  const digitCount = MODE_CONFIG[difficulty].digits;
  const baseScore = MODE_CONFIG[difficulty].baseScore;
  const { currentGuess, hints, isWon, wrongAttempts, elapsedTime, changeDigit, checkCode, resetGame } = useGameLogic(digitCount);
  const [message, setMessage] = useState('');
  const [showWinModal, setShowWinModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const [highScore, setHighScore] = useState(() => getHighScore(difficulty));

  // Calculate current score in real-time
  const currentScore = useMemo(() => {
    return calculateScore(baseScore, wrongAttempts, elapsedTime);
  }, [baseScore, wrongAttempts, elapsedTime]);

  const handleDigitChange = (index) => {
    changeDigit(index);
    setMessage('');
  };

  const handleUnlock = () => {
    const won = checkCode();
    
    if (won) {
      const score = calculateScore(baseScore, wrongAttempts, elapsedTime);
      setFinalScore(score);
      
      // Check and save high score
      const isNew = saveHighScore(difficulty, score);
      setIsNewHighScore(isNew);
      if (isNew) {
        setHighScore(score);
      }
      
      setMessage('UNLOCKED!');
      setShowWinModal(true);
    } else {
      setMessage('ACCESS DENIED. TRY AGAIN.');
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
