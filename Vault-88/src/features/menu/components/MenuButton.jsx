import { useSound } from '../../../shared/hooks/useSound';

export function MenuButton({ icon, label, onClick }) {
  const { playClick, playHover } = useSound();

  const handleClick = () => {
    playClick();
    onClick();
  };

  const handleMouseEnter = () => {
    playHover();
  };

  return (
    <button 
      onClick={handleClick} 
      onMouseEnter={handleMouseEnter}
      className="menu-button glass-panel"
    >
      <div className="menu-button-content">
        <div className="menu-button-icon-container">
          <span className="material-icons-round menu-button-icon">{icon}</span>
        </div>
        <span className="menu-button-label">{label}</span>
      </div>
      <span className="material-icons-round menu-button-arrow">chevron_right</span>
    </button>
  );
}
