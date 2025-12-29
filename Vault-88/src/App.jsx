import { useState, useEffect } from 'react';
import { ThemeProvider } from './shared/hooks/useTheme';
import { useSound } from './shared/hooks/useSound';
import { MainMenu } from './features/menu/MainMenu';
import { GameScreen } from './features/game/GameScreen';
import { SettingsScreen } from './features/settings/SettingsScreen';
import { Placeholder } from './shared/components/Placeholder';
import './App.css';

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState('menu');
  const { playBgMusic } = useSound();

  // Start background music on mount
  useEffect(() => {
    // Small delay to ensure page is ready
    const timer = setTimeout(() => {
      playBgMusic();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'menu':
        return <MainMenu onNavigate={setCurrentScreen} />;
      case 'play':
        return <GameScreen onExit={() => setCurrentScreen('menu')} />;
      case 'leaderboard':
        return <Placeholder title="Leaderboard" onBack={() => setCurrentScreen('menu')} />;
      case 'settings':
        return <SettingsScreen onBack={() => setCurrentScreen('menu')} />;
      default:
        return <MainMenu onNavigate={setCurrentScreen} />;
    }
  };

  return renderScreen();
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
