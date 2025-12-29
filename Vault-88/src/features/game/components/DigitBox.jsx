import { useSound } from '../../../shared/hooks/useSound';

export function DigitBox({ value, onClick, isRevealed, revealedValue }) {
  const { playClick } = useSound();

  const handleClick = () => {
    playClick();
    onClick();
  };

  return (
    <div onClick={handleClick} className={`digit-box wood-shadow ${isRevealed ? 'revealed' : ''}`}>
      <div className="digit-box-overlay"></div>
      <span className="digit-value">{value}</span>
      {isRevealed && (
        <div className="digit-hint-reveal">
          <span className="material-icons-round hint-icon">lightbulb</span>
          <span className="hint-value">{revealedValue}</span>
        </div>
      )}
    </div>
  );
}
