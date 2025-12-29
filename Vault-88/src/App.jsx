import { useState } from 'react';
import { ThemeProvider } from './shared/hooks/useTheme';
import { MainMenu } from './features/menu/MainMenu';
import { GameScreen } from './features/game/GameScreen';
import { Placeholder } from './shared/components/Placeholder';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'menu':
        return <MainMenu onNavigate={setCurrentScreen} />;
      case 'play':
        return <GameScreen onExit={() => setCurrentScreen('menu')} />;
      case 'leaderboard':
        return <Placeholder title="Leaderboard" onBack={() => setCurrentScreen('menu')} />;
      case 'settings':
        return <Placeholder title="Settings" onBack={() => setCurrentScreen('menu')} />;
      default:
        return <MainMenu onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <ThemeProvider>
      {renderScreen()}
    </ThemeProvider>
  );
}

export default App;
