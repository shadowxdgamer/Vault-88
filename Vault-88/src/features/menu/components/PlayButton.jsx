import { useSound } from '../../../shared/hooks/useSound';

export function PlayButton({ onClick }) {
  const { playClick, playHover } = useSound();

  const handleClick = () => {
    playClick();
    onClick();
  };

  const handleMouseEnter = () => {
    playHover();
  };

  return (
    <div className="play-button-container">
      <button 
        onClick={handleClick} 
        onMouseEnter={handleMouseEnter}
        className="play-button play-btn"
      >
        <div className="play-button-content">
          <span className="play-button-title">PLAY</span>
          <span className="play-button-subtitle">INITIATE SEQUENCE</span>
        </div>
        <div className="play-button-icon-container">
          <span className="material-icons-round" style={{ fontSize: '1.875rem', marginLeft: '0.25rem' }}>play_arrow</span>
        </div>
      </button>
    </div>
  );
}
