import { MenuButton } from './components/MenuButton';
import { PlayButton } from './components/PlayButton';
import './Menu.css';

export function MainMenu({ onNavigate }) {
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
          <PlayButton onClick={() => onNavigate('play')} />

          <div className="menu-buttons">
            <MenuButton
              icon="leaderboard"
              label="Leaderboard"
              onClick={() => onNavigate('leaderboard')}
            />
            <MenuButton
              icon="support_agent"
              label="Support"
              onClick={() => window.open('https://www.buymeacoffee.com', '_blank')}
            />
            <MenuButton
              icon="code"
              label="Source"
              onClick={() => window.open('https://github.com/yourusername/vault-88', '_blank')}
            />
            <MenuButton
              icon="settings"
              label="Settings"
              onClick={() => onNavigate('settings')}
            />
          </div>
        </main>

        {/* Footer */}
        <div className="menu-footer">
          <div className="menu-footer-content">
            <span>SECURE CONNECTION ESTABLISHED</span>
            <span>V 2.0.4</span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="bottom-accent"></div>
      </div>
    </div>
  );
}
