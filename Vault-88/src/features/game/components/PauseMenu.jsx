import { useSound } from '../../../shared/hooks/useSound';
import '../Pause.css';

export function PauseMenu({ onResume, onRestart, onExit }) {
  const { playClick, playHover } = useSound();

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
        <h2 className="pause-title">Paused</h2>
        <div className="pause-buttons">
          <button 
            className="pause-button pause-button-resume"
            onClick={handleResume}
            onMouseEnter={playHover}
          >
            <span className="material-icons-round">play_arrow</span>
            Resume
          </button>
          <button 
            className="pause-button pause-button-restart"
            onClick={handleRestart}
            onMouseEnter={playHover}
          >
            <span className="material-icons-round">refresh</span>
            Restart
          </button>
          <button 
            className="pause-button pause-button-exit"
            onClick={handleExit}
            onMouseEnter={playHover}
          >
            <span className="material-icons-round">home</span>
            Exit to Menu
          </button>
        </div>
      </div>
    </div>
  );
}
