import { Howl } from 'howler';
import { useRef, useEffect } from 'react';

// Sound effect paths
const SOUNDS = {
  click: '/sfx/click.wav',
  unlock: '/sfx/unlock.wav',
  wrong: '/sfx/wrong.wav',
  correct: '/sfx/correct.wav',
  bgMusic: '/bg-music/track 1.wav',
};

// Create Howl instances
const soundInstances = {
  click: null,
  unlock: null,
  wrong: null,
  correct: null,
  bgMusic: null,
};

// Initialize sound instances
const initSounds = () => {
  if (!soundInstances.click) {
    soundInstances.click = new Howl({
      src: [SOUNDS.click],
      volume: 0.5,
      preload: true,
    });

    soundInstances.unlock = new Howl({
      src: [SOUNDS.unlock],
      volume: 0.6,
      preload: true,
    });

    soundInstances.wrong = new Howl({
      src: [SOUNDS.wrong],
      volume: 0.7,
      preload: true,
    });

    soundInstances.correct = new Howl({
      src: [SOUNDS.correct],
      volume: 0.7,
      preload: true,
    });

    soundInstances.bgMusic = new Howl({
      src: [SOUNDS.bgMusic],
      volume: 0.3,
      loop: true,
      preload: true,
    });
  }
};

/**
 * Custom hook for managing sound effects and background music
 */
export const useSound = () => {
  const bgMusicRef = useRef(null);

  useEffect(() => {
    // Initialize sounds on mount
    initSounds();

    return () => {
      // Cleanup: stop all sounds on unmount
      Object.values(soundInstances).forEach(sound => {
        if (sound) {
          sound.stop();
        }
      });
    };
  }, []);

  const playSound = (soundName) => {
    initSounds();
    const sound = soundInstances[soundName];
    if (sound) {
      sound.play();
    }
  };

  const playBgMusic = () => {
    initSounds();
    if (soundInstances.bgMusic && !soundInstances.bgMusic.playing()) {
      bgMusicRef.current = soundInstances.bgMusic.play();
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
    ['click', 'unlock', 'wrong', 'correct'].forEach(soundName => {
      if (soundInstances[soundName]) {
        soundInstances[soundName].volume(volume);
      }
    });
  };

  return {
    playClick: () => playSound('click'),
    playUnlock: () => playSound('unlock'),
    playWrong: () => playSound('wrong'),
    playCorrect: () => playSound('correct'),
    playBgMusic,
    pauseBgMusic,
    stopBgMusic,
    setBgMusicVolume,
    setSfxVolume,
  };
};
