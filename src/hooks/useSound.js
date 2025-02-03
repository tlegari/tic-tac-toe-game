import { useEffect, useState } from "react";

const useSound = (url, options = { volume: 1.0, timeout: 1000 }) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.volume = options.volume;
    audio.load();
    setSound(audio);

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [url, options.volume]);

  const play = () => {
    if (sound) {
      sound.play().catch(error => {
        console.error("Audio play failed. User interaction required.", error);
      });

      setTimeout(() => {
        sound.pause();
        sound.currentTime = 0;
      }, options.timeout);
    }
  };

  const stop = () => {
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  };

  return { play, stop };
};

export default useSound;
