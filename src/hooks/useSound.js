import { useEffect, useState } from "react";

const useSound = (url, options) => {
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const audio = new Audio(url);
    audio.volume = options.volume || 1.0; 
    setSound(audio);

    // Cleanup audio on component unmount
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [url, options.volume]); // Dependencies for reinitializing audio

  // Return play function to be triggered by user interaction
  const play = () => {
    if (sound) {
      sound.play();
      setTimeout(() => {
        sound.pause();
        sound.currentTime = 0; // Reset audio playback
      }, options.timeout || 1000); // Default timeout if not provided
    }
  };

  return play; // Return play function to trigger sound play
};

export default useSound;