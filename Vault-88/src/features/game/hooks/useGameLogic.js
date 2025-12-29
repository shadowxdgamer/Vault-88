import { useState } from 'react';
import { generateSecretCode, generateHints } from '../utils/codeGenerator';

export function useGameLogic(digitCount = 3) {
  const [secretCode, setSecretCode] = useState(() => generateSecretCode(digitCount));
  const [currentGuess, setCurrentGuess] = useState(() => Array(digitCount).fill(0));
  const [hints, setHints] = useState(() => generateHints(secretCode));
  const [isWon, setIsWon] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const changeDigit = (index) => {
    const newGuess = [...currentGuess];
    newGuess[index] = (newGuess[index] + 1) % 10;
    setCurrentGuess(newGuess);
  };

  const checkCode = () => {
    setAttempts(attempts + 1);
    
    if (currentGuess.join('') === secretCode.join('')) {
      setIsWon(true);
      return true;
    }
    return false;
  };

  const resetGame = () => {
    const newCode = generateSecretCode(digitCount);
    setSecretCode(newCode);
    setCurrentGuess(Array(digitCount).fill(0));
    setHints(generateHints(newCode));
    setIsWon(false);
    setAttempts(0);
  };

  return {
    secretCode,
    currentGuess,
    hints,
    isWon,
    attempts,
    changeDigit,
    checkCode,
    resetGame,
  };
}
