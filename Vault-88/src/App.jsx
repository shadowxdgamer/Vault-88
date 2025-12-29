import { useState, useEffect } from 'react';
import { ThemeProvider } from './shared/hooks/useTheme';
import { useSound } from './shared/hooks/useSound';
import { MainMenu } from './features/menu/MainMenu';
import { GameScreen } from './features/game/GameScreen';
import { DifficultySelector } from './features/difficulty/DifficultySelector';
import { SettingsScreen } from './features/settings/SettingsScreen';
import { StatsScreen } from './features/stats/StatsScreen';
import { Placeholder } from './shared/components/Placeholder';
import { GAME_MODES } from './shared/utils/constants';
import './App.css';

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState('menu');
  const [selectedDifficulty, setSelectedDifficulty] = useState(GAME_MODES.EASY);
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
      case 'difficulty':
        return (
          <DifficultySelector 
            onSelect={(difficulty) => {
              setSelectedDifficulty(difficulty);
              setCurrentScreen('play');
            }}
            onBack={() => setCurrentScreen('menu')}
          />
        );
      case 'play':
        return (
          <GameScreen 
            difficulty={selectedDifficulty}
            onExit={() => setCurrentScreen('menu')} 
          />
        );
      case 'leaderboard':
        return <StatsScreen onBack={() => setCurrentScreen('menu')} />;
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
