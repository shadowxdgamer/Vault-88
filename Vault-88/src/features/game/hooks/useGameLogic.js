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
  const [revealedDigits, setRevealedDigits] = useState([]);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [attemptHistory, setAttemptHistory] = useState([]);
  const [digitFeedback, setDigitFeedback] = useState(() => Array(digitCount).fill(null));

  // Generate color feedback for an attempt
  const generateFeedback = (guess, secret) => {
    const feedback = Array(guess.length).fill(null);
    const secretCopy = [...secret];
    const guessCopy = [...guess];

    // First pass: Mark correct positions (green)
    for (let i = 0; i < guess.length; i++) {
      if (guessCopy[i] === secretCopy[i]) {
        feedback[i] = 'correct';
        secretCopy[i] = null;
        guessCopy[i] = null;
      }
    }

    // Second pass: Mark wrong positions (yellow) and wrong digits (red)
    for (let i = 0; i < guess.length; i++) {
      if (feedback[i] === null) {
        const indexInSecret = secretCopy.indexOf(guessCopy[i]);
        if (indexInSecret !== -1) {
          feedback[i] = 'wrong-position';
          secretCopy[indexInSecret] = null;
        } else {
          feedback[i] = 'wrong';
        }
      }
    }

    return feedback;
  };

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
    setRevealedDigits([]);
    setHintsUsed(0);
    setAttemptHistory([]);
    setDigitFeedback(Array(digitCount).fill(null));
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
    
    // Generate feedback for this attempt
    const feedback = generateFeedback(currentGuess, secretCode);
    
    // Add to history
    setAttemptHistory([...attemptHistory, {
      digits: [...currentGuess],
      feedback: feedback
    }]);
    
    // Apply feedback to current digit boxes
    setDigitFeedback(feedback);
    
    // Clear feedback after 5 seconds
    setTimeout(() => {
      setDigitFeedback(Array(digitCount).fill(null));
    }, 5000);
    
    if (currentGuess.join('') === secretCode.join('')) {
      setIsWon(true);
      return true;
    }
    setWrongAttempts(wrongAttempts + 1);
    return false;
  };

  const revealHint = () => {
    if (hintsUsed >= 2) return false; // Max 2 hints per game
    
    // Find unrevealed digit positions
    const unrevealedPositions = [];
    for (let i = 0; i < digitCount; i++) {
      if (!revealedDigits.includes(i)) {
        unrevealedPositions.push(i);
      }
    }
    
    if (unrevealedPositions.length === 0) return false;
    
    // Pick random unrevealed position
    const randomIndex = Math.floor(Math.random() * unrevealedPositions.length);
    const positionToReveal = unrevealedPositions[randomIndex];
    
    setRevealedDigits([...revealedDigits, positionToReveal]);
    setHintsUsed(hintsUsed + 1);
    
    return true;
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
    setRevealedDigits([]);
    setHintsUsed(0);
    setAttemptHistory([]);
    setDigitFeedback(Array(digitCount).fill(null));
  };

  return {
    secretCode,
    currentGuess,
    hints,
    isWon,
    attempts,
    wrongAttempts,
    elapsedTime,
    revealedDigits,
    hintsUsed,
    attemptHistory,
    digitFeedback,
    changeDigit,
    checkCode,
    resetGame,
    revealHint,
  };
}
