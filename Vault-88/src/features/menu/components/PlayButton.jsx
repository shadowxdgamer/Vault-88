import { useSound } from '../../../shared/hooks/useSound';
import { useLanguage } from '../../../shared/hooks/useLanguage';

export function PlayButton({ onClick }) {
  const { playClick, playHover } = useSound();
  const { t } = useLanguage();

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
          <span className="play-button-title">{t('mainMenu.play').toUpperCase()}</span>
          <span className="play-button-subtitle">{t('mainMenu.playSubtitle').toUpperCase()}</span>
        </div>
        <div className="play-button-icon-container">
          <span className="material-icons-round" style={{ fontSize: '1.875rem' }}>play_arrow</span>
        </div>
      </button>
    </div>
  );
}
