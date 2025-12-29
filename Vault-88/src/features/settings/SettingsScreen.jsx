import { useState, useEffect } from 'react';
import { useSound } from '../../shared/hooks/useSound';
import { useLocalStorage } from '../../shared/hooks/useLocalStorage';
import './Settings.css';

export function SettingsScreen({ onBack }) {
  const { setBgMusicVolume: updateBgMusicVolume, setSfxVolume: updateSfxVolume, playClick, playHover } = useSound();
  
  // Load saved volumes or use defaults
  const [bgmVolume, setBgmVolume] = useLocalStorage('bgm-volume', 30);
  const [sfxVolume, setSfxVolume] = useLocalStorage('sfx-volume', 50);

  // Apply volumes on mount and when changed
  useEffect(() => {
    updateBgMusicVolume(bgmVolume / 100);
    updateSfxVolume(sfxVolume / 100);
  }, [bgmVolume, sfxVolume]);

  const handleBgmChange = (e) => {
    const value = parseInt(e.target.value);
    setBgmVolume(value);
  };

  const handleSfxChange = (e) => {
    const value = parseInt(e.target.value);
    setSfxVolume(value);
    // Play click sound to preview new volume
    playClick();
  };

  const handleBack = () => {
    playClick();
    onBack();
  };

  return (
    <div className="settings-screen">
      {/* Background */}
      <div className="settings-background">
        <img
          alt="Background"
          className="settings-background-image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTosZ9_7WuEyufglHnWkO-HeAbAK7Fag8VY0f64Wz8POUE9GRNCdgxOjt4uT0AdgVWVQ6164JCCKkl5X-Ctka3Oe2-iDyXx54EJcVBewgq5mpHMB-Ky40Ghs53HDHsngmfJ5B0iILfNAmRr76f6W6MlrB8m5exZ5GFipuzghSdj0yrGuqsrSYTI4PgsJPKKhJia8ynMwGdry86FBUFEzLu6JqujNpfDfWD1FZ37LcFxDxcR7Z-rJqxvPxRnKmGiDJEYTCTS650QY"
        />
        <div className="settings-background-overlay"></div>
      </div>

      {/* Main Container */}
      <div className="settings-container">
        {/* Header */}
        <header className="settings-header">
          <button 
            className="back-button" 
            onClick={handleBack}
            onMouseEnter={playHover}
            aria-label="Back to menu"
          >
            <span className="material-icons-round">arrow_back</span>
          </button>
          <h1 className="settings-title">Settings</h1>
          <div style={{ width: '2.5rem' }}></div> {/* Spacer for centering */}
        </header>

        {/* Main Content */}
        <main className="settings-main custom-scrollbar">
          <div className="settings-section">
            <h2 className="settings-section-title">Audio</h2>
            
            {/* Background Music Volume */}
            <div className="volume-control glass-panel">
              <div className="volume-label-row">
                <div className="volume-label">
                  <span className="material-icons-round volume-label-icon">music_note</span>
                  <span>Background Music</span>
                </div>
                <span className="volume-value">{bgmVolume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={bgmVolume}
                onChange={handleBgmChange}
                className="volume-slider"
                style={{ '--slider-progress': `${bgmVolume}%` }}
              />
            </div>

            {/* Sound Effects Volume */}
            <div className="volume-control glass-panel">
              <div className="volume-label-row">
                <div className="volume-label">
                  <span className="material-icons-round volume-label-icon">volume_up</span>
                  <span>Sound Effects</span>
                </div>
                <span className="volume-value">{sfxVolume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sfxVolume}
                onChange={handleSfxChange}
                className="volume-slider"
                style={{ '--slider-progress': `${sfxVolume}%` }}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="settings-footer">
          Changes are saved automatically
        </footer>

        {/* Bottom Accent Line */}
        <div className="bottom-accent"></div>
      </div>
    </div>
  );
}
