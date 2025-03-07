
/// <reference types="vite/client" />

interface Window {
  YT: {
    Player: new (
      elementId: string,
      options: {
        videoId?: string;
        playerVars?: {
          autoplay?: 0 | 1;
          loop?: 0 | 1;
          controls?: 0 | 1;
          showinfo?: 0 | 1;
          rel?: 0 | 1;
          enablejsapi?: 0 | 1;
          modestbranding?: 0 | 1;
          mute?: 0 | 1;
          playsinline?: 0 | 1;
          playlist?: string;
        };
        events?: {
          onReady?: (event: { target: YT.Player }) => void;
          onStateChange?: (event: { data: number }) => void;
        };
      }
    ) => YT.Player;
  };
  onYouTubeIframeAPIReady: () => void;
}

namespace YT {
  interface Player {
    playVideo(): void;
    pauseVideo(): void;
    stopVideo(): void;
    setPlaybackRate(rate: number): void;
    destroy(): void;
  }
}
