import { Howl } from 'howler';
import { useRef, useEffect, useState } from 'react';

// Sound effect paths
const SOUNDS = {
  click: '/sfx/click.wav',
  hover: '/sfx/hover.wav',
  unlock: '/sfx/unlock.wav',
  wrong: '/sfx/wrong.wav',
  bgMusic: '/bg-music/track1.mp3',
};

// Create Howl instances
const soundInstances = {
  click: null,
  hover: null,
  unlock: null,
  wrong: null,
  bgMusic: null,
};

let initialized = false;

// Initialize sound instances
const initSounds = () => {
  if (initialized) return;
  
  initialized = true;
  
  soundInstances.click = new Howl({
    src: [SOUNDS.click],
    volume: 0.5,
    preload: true,
    html5: false,
    pool: 5,
  });

  soundInstances.hover = new Howl({
    src: [SOUNDS.hover],
    volume: 0.3,
    preload: true,
    html5: false,
    pool: 10,
  });

  soundInstances.unlock = new Howl({
    src: [SOUNDS.unlock],
    volume: 0.6,
    preload: true,
    html5: false,
    pool: 3,
  });

  soundInstances.wrong = new Howl({
    src: [SOUNDS.wrong],
    volume: 0.7,
    preload: true,
    html5: false,
    pool: 3,
  });

  soundInstances.bgMusic = new Howl({
    src: [SOUNDS.bgMusic],
    volume: 0.3,
    loop: true,
    preload: true,
    html5: true,
  });
};

/**
 * Custom hook for managing sound effects and background music
 */
export const useSound = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initialize sounds on mount
    if (!initialized) {
      initSounds();
      setIsReady(true);
    }

    return () => {
      // Don't cleanup global sounds
    };
  }, []);

  const playSound = (soundName) => {
    try {
      const sound = soundInstances[soundName];
      if (sound && sound.state() === 'loaded') {
        sound.stop();
        sound.play();
      }
    } catch (error) {
      console.error(`Error playing sound ${soundName}:`, error);
    }
  };

  const playBgMusic = () => {
    try {
      if (soundInstances.bgMusic && !soundInstances.bgMusic.playing()) {
        soundInstances.bgMusic.play();
      }
    } catch (error) {
      console.error('Error playing background music:', error);
    }
  };

  const ensureBgMusicPlaying = () => {
    try {
      if (soundInstances.bgMusic && soundInstances.bgMusic.state() === 'loaded' && !soundInstances.bgMusic.playing()) {
        soundInstances.bgMusic.play();
      }
    } catch (error) {
      console.error('Error ensuring background music:', error);
    }
  };

  const pauseBgMusic = () => {
    if (soundInstances.bgMusic) {
      soundInstances.bgMusic.pause();
    }
  };

  const stopBgMusic = () => {
    if (soundInstances.bgMusic) {
      soundInstances.bgMusic.stop();
    }
  };

  const setBgMusicVolume = (volume) => {
    if (soundInstances.bgMusic) {
      soundInstances.bgMusic.volume(volume);
    }
  };

  const setSfxVolume = (volume) => {
    ['click', 'hover', 'unlock', 'wrong'].forEach(soundName => {
      if (soundInstances[soundName]) {
        soundInstances[soundName].volume(volume);
      }
    });
  };

  return {
    playClick: () => playSound('click'),
    playHover: () => playSound('hover'),
    playUnlock: () => playSound('unlock'),
    playWrong: () => playSound('wrong'),
    playBgMusic,
    ensureBgMusicPlaying,
    pauseBgMusic,
    stopBgMusic,
    setBgMusicVolume,
    setSfxVolume,
    isReady,
  };
};
