import { useSound } from '../../../shared/hooks/useSound';
import './NumberKeyboard.css';

export function NumberKeyboard({ eliminatedDigits, onToggleDigit, isVisible }) {
  const { playClick } = useSound();

  const handleToggle = (digit) => {
    playClick();
    onToggleDigit(digit);
  };

  if (!isVisible) return null;

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="number-keyboard">
      <div className="keyboard-grid">
        {numbers.map((num) => {
          const isEliminated = eliminatedDigits.has(num);
          return (
            <button
              key={num}
              onClick={() => handleToggle(num)}
              className={`keyboard-number ${isEliminated ? 'eliminated' : ''}`}
            >
              <span className="keyboard-number-value">{num}</span>
              {isEliminated && <div className="elimination-line" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
