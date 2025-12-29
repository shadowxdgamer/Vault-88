import { MenuButton } from './components/MenuButton';
import { PlayButton } from './components/PlayButton';
import './Menu.css';

export function MainMenu({ onNavigate }) {
  const handleNavigation = (screen) => {
    if (screen === 'support') {
      window.open('https://buymeacoffee.com/shadowxdgamer', '_blank');
    } else if (screen === 'source') {
      window.open('https://github.com/shadowxdgamer/Vault-88', '_blank');
    } else {
      onNavigate(screen);
    }
  };

  return (
    <div className="menu-screen">
      {/* Background */}
      <div className="menu-background">
        <img
          alt="Moody twilight mountain landscape background"
          className="menu-background-image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTosZ9_7WuEyufglHnWkO-HeAbAK7Fag8VY0f64Wz8POUE9GRNCdgxOjt4uT0AdgVWVQ6164JCCKkl5X-Ctka3Oe2-iDyXx54EJcVBewgq5mpHMB-Ky40Ghs53HDHsngmfJ5B0iILfNAmRr76f6W6MlrB8m5exZ5GFipuzghSdj0yrGuqsrSYTI4PgsJPKKhJia8ynMwGdry86FBUFEzLu6JqujNpfDfWD1FZ37LcFxDxcR7Z-rJqxvPxRnKmGiDJEYTCTS650QY"
        />
        <div className="menu-background-overlay"></div>
        <div className="menu-background-grid"></div>
      </div>

      {/* Main Container */}
      <div className="menu-container">
        {/* Header */}
        <header className="menu-header">
          <div className="menu-title-container">
            <div className="menu-title-glow"></div>
            <h1 className="menu-title">
              Vault <span className="menu-title-accent">88</span>
            </h1>
          </div>
          <div className="menu-subtitle-container">
            <div className="menu-subtitle-line"></div>
            <p className="menu-subtitle">Logic Puzzle</p>
            <div className="menu-subtitle-line"></div>
          </div>
        </header>

        {/* Main Menu */}
        <main className="menu-main">
          <PlayButton onClick={() => onNavigate('difficulty')} />

          <div className="menu-buttons">
            <MenuButton
              icon="leaderboard"
              label="Leaderboard"
              onClick={() => handleNavigation('leaderboard')}
            />
            <MenuButton
              icon="favorite"
              label="Buy Me a Coffee"
              onClick={() => handleNavigation('support')}
            />
            <MenuButton
              icon="code"
              label="Source Code"
              onClick={() => handleNavigation('source')}
            />
            <MenuButton
              icon="settings"
              label="Settings"
              onClick={() => handleNavigation('settings')}
            />
          </div>
        </main>

        {/* Footer */}
        <div className="menu-footer">
          <div className="menu-footer-content">
            <span>SECURE CONNECTION ESTABLISHED</span>
            <span>V 1.0.0</span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="bottom-accent"></div>
      </div>
    </div>
  );
}
