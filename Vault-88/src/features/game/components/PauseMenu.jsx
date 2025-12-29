import { useSound } from '../../../shared/hooks/useSound';
import { useLanguage } from '../../../shared/hooks/useLanguage';
import '../Pause.css';

export function PauseMenu({ onResume, onRestart, onExit }) {
  const { playClick, playHover } = useSound();
  const { t } = useLanguage();

  const handleResume = () => {
    playClick();
    onResume();
  };

  const handleRestart = () => {
    playClick();
    onRestart();
  };

  const handleExit = () => {
    playClick();
    onExit();
  };

  return (
    <div className="pause-overlay">
      <div className="pause-menu">
        <h2 className="pause-title">{t('pause.paused')}</h2>
        <div className="pause-buttons">
          <button 
            className="pause-button pause-button-resume"
            onClick={handleResume}
            onMouseEnter={playHover}
          >
            <span className="material-icons-round">play_arrow</span>
            {t('pause.resume')}
          </button>
          <button 
            className="pause-button pause-button-restart"
            onClick={handleRestart}
            onMouseEnter={playHover}
          >
            <span className="material-icons-round">refresh</span>
            {t('pause.restart')}
          </button>
          <button 
            className="pause-button pause-button-exit"
            onClick={handleExit}
            onMouseEnter={playHover}
          >
            <span className="material-icons-round">home</span>
            {t('pause.exit')}
          </button>
        </div>
      </div>
    </div>
  );
}
