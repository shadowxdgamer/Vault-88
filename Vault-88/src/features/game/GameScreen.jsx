import { useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { PauseMenu } from './components/PauseMenu';
import { useGameLogic } from './hooks/useGameLogic';
import { MODE_CONFIG } from '../../shared/utils/constants';

export function GameScreen({ onExit, difficulty }) {
  const digitCount = MODE_CONFIG[difficulty].digits;
  const { currentGuess, hints, isWon, changeDigit, checkCode, resetGame } = useGameLogic(digitCount);
  const [message, setMessage] = useState('');
  const [showWinModal, setShowWinModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleDigitChange = (index) => {
    changeDigit(index);
    setMessage('');
  };

  const handleUnlock = () => {
    const won = checkCode();
    
    if (won) {
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 p-12 rounded-3xl text-center max-w-md">
            <h2 className="text-5xl font-bold mb-4">UNLOCKED!</h2>
            <p className="text-lg mb-8">You cracked the security system.</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handlePlayAgain}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all"
              >
                Play Again
              </button>
              {onExit && (
                <button
                  onClick={onExit}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all"
                >
                  Main Menu
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
