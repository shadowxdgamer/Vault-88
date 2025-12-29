import { useState, useEffect } from 'react';
import { generateSecretCode, generateHints } from '../utils/codeGenerator';

export function useGameLogic(digitCount = 3) {
  const [secretCode, setSecretCode] = useState(() => generateSecretCode(digitCount));
  const [currentGuess, setCurrentGuess] = useState(() => Array(digitCount).fill(0));
  const [hints, setHints] = useState(() => generateHints(secretCode));
  const [isWon, setIsWon] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  // Update game when digit count changes
  useEffect(() => {
    const newCode = generateSecretCode(digitCount);
    setSecretCode(newCode);
    setCurrentGuess(Array(digitCount).fill(0));
    setHints(generateHints(newCode));
    setIsWon(false);
    setAttempts(0);
    setWrongAttempts(0);
    setStartTime(Date.now());
    setElapsedTime(0);
  }, [digitCount]);

  // Timer effect
  useEffect(() => {
    if (isWon) return;

    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, isWon]);

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
    setWrongAttempts(wrongAttempts + 1);
    return false;
  };

  const resetGame = () => {
    const newCode = generateSecretCode(digitCount);
    setSecretCode(newCode);
    setCurrentGuess(Array(digitCount).fill(0));
    setHints(generateHints(newCode));
    setIsWon(false);
    setAttempts(0);
    setWrongAttempts(0);
    setStartTime(Date.now());
    setElapsedTime(0);
  };

  return {
    secretCode,
    currentGuess,
    hints,
    isWon,
    attempts,
    wrongAttempts,
    elapsedTime,
    changeDigit,
    checkCode,
    resetGame,
  };
}
