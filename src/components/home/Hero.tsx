
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const playerRef = useRef<YT.Player | null>(null);

  useEffect(() => {
    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      
      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    function initPlayer() {
      playerRef.current = new YT.Player('youtube-player', {
        videoId: 'tiq_gCtZEEk',
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          modestbranding: 1,
          mute: 1,
          playsinline: 1,
          playlist: 'tiq_gCtZEEk', // Required for looping
        },
        events: {
          onReady: (event) => {
            event.target.setPlaybackRate(0.25); // Set playback speed to 0.25x
            event.target.playVideo();
          }
        }
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full">
          <div id="youtube-player" className="w-full h-full"></div>
        </div>
      </div>
      
      {/* Dark overlay to improve text legibility */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4 max-w-2xl mx-auto">
            Villa Morgenthau
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Dein Hideaway zwischen den Meeren</p>
          <div className="space-x-4">
            <Link to="/gallery" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-villa-dark">ENTDECKEN</Link>
            <Link to="/booking" className="btn-primary bg-white text-villa-dark hover:bg-villa-accent">BUCHEN</Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto flex flex-col items-center animate-bounce w-max z-10">
        <span className="text-white text-sm mb-2">Nach unten scrollen</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
