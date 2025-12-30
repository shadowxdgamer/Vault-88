import { MenuButton } from './components/MenuButton';
import { PlayButton } from './components/PlayButton';
import { useSound } from '../../shared/hooks/useSound';
import { useLanguage } from '../../shared/hooks/useLanguage';
import './Menu.css';

export function MainMenu({ onNavigate }) {
  const { ensureBgMusicPlaying, playClick } = useSound();
  const { t, language, setLanguage } = useLanguage();

  const handleNavigation = (screen) => {
    // Ensure background music starts on first user interaction
    ensureBgMusicPlaying();
    
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
              {t('mainMenu.title')} <span className="menu-title-accent">{t('mainMenu.titleAccent')}</span>
            </h1>
          </div>
          <div className="menu-subtitle-container">
            <div className="menu-subtitle-line"></div>
            <p className="menu-subtitle">{t('mainMenu.subtitle')}</p>
            <div className="menu-subtitle-line"></div>
          </div>
          {/* Language Toggle */}
          <div className="language-toggle">
            <button 
              className={`language-option ${language === 'en' ? 'active' : ''}`}
              onClick={() => {
                playClick();
                setLanguage('en');
              }}
            >
              EN
            </button>
            <span className="language-separator">/</span>
            <button 
              className={`language-option ${language === 'ar' ? 'active' : ''}`}
              onClick={() => {
                playClick();
                setLanguage('ar');
              }}
            >
              AR
            </button>
          </div>
        </header>

        {/* Main Menu */}
        <main className="menu-main">
          <PlayButton onClick={() => onNavigate('difficulty')} />

          <div className="menu-buttons">
            <MenuButton
              icon="analytics"
              label={t('mainMenu.statistics')}
              onClick={() => handleNavigation('leaderboard')}
            />
            <MenuButton
              icon="map"
              label={t('mainMenu.roadmap')}
              onClick={() => handleNavigation('roadmap')}
            />
            <MenuButton
              icon="favorite"
              label={t('mainMenu.buyMeACoffee')}
              onClick={() => handleNavigation('support')}
            />
            <MenuButton
              icon="code"
              label={t('mainMenu.sourceCode')}
              onClick={() => handleNavigation('source')}
            />
            <MenuButton
              icon="settings"
              label={t('mainMenu.settings')}
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
