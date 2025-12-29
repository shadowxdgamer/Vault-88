import { useSound } from '../../../shared/hooks/useSound';

export function DigitBox({ value, onClick }) {
  const { playClick } = useSound();

  const handleClick = () => {
    playClick();
    onClick();
  };

  return (
    <div onClick={handleClick} className="digit-box wood-shadow">
      <div className="digit-box-overlay"></div>
      <span className="digit-value">{value}</span>
    </div>
  );
}
