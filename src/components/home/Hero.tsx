
import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks/use-mobile';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OptimizedImage } from '../ui/optimized-image';

const Hero = () => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [supportsWebP, setSupportsWebP] = useState(false);
  
  // Video paths for desktop and mobile (more efficient than GIFs)
  const desktopVideoPath = '/lovable-uploads/newemilydesktop.mp4';
  const mobileVideoPath = '/lovable-uploads/emilymobile.mp4';
  
  // Low-quality placeholder images (tiny thumbnails for blur-up effect)
  const desktopPlaceholder = supportsWebP 
    ? '/lovable-uploads/newemilydesktop-placeholder.webp'
    : '/lovable-uploads/newemilydesktop-placeholder.jpg';
  const mobilePlaceholder = supportsWebP 
    ? '/lovable-uploads/emilymobile-placeholder.webp'
    : '/lovable-uploads/emilymobile-placeholder.jpg';
    
  // Check WebP support
  useEffect(() => {
    const checkWebP = async () => {
      const webpSupport = document.createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0;
      setSupportsWebP(webpSupport);
    };
    checkWebP();
  }, []);

  // Handle scroll to next section
  const handleScrollDown = () => {
    // Get the height of the viewport
    const viewportHeight = window.innerHeight;
    
    // Scroll down by the height of the viewport (to the next section)
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    });
  };
  
  // Preload video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      // Set up event listeners
      const handleLoadedData = () => {
        // Add a small delay for smoother transition
        setTimeout(() => setIsLoaded(true), 100);
      };
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      
      // Preload the video
      videoRef.current.load();
      
      return () => {
        // Clean up event listeners
        videoRef.current?.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [isMobile]);
  
  // Determine which assets to preload based on device
  const preloadVideo = isMobile ? mobileVideoPath : desktopVideoPath;
  const preloadImage = isMobile ? mobilePlaceholder : desktopPlaceholder;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Preload critical assets */}
      <Helmet>
        <link rel="preload" href={preloadVideo} as="video" type="video/mp4" />
        <link rel="preload" href={preloadImage} as="image" />
      </Helmet>
      {/* Video Background with optimized loading */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full">
          {/* Blur-up placeholder image (shown while video loads) */}
          <OptimizedImage 
            src={isMobile ? mobilePlaceholder : desktopPlaceholder} 
            alt="Villa Morgenthau" 
            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
            width={isMobile ? 640 : 1920}
            height={isMobile ? 1280 : 1080}
            priority={true}
          />
          
          {/* Optimized video (replaces GIF) */}
          <video 
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            poster={isMobile ? mobilePlaceholder : desktopPlaceholder}
            preload="auto"
          >
            <source 
              src={isMobile ? mobileVideoPath : desktopVideoPath} 
              type="video/mp4" 
            />
          </video>
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
            <a 
              href="https://www.airbnb.de/rooms/1305881991709578029" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary bg-white text-villa-dark hover:bg-villa-accent"
            >
              BUCHEN
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-0 right-0 mx-auto flex flex-col items-center animate-bounce w-max z-10 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleScrollDown}
        role="button"
        aria-label="Scroll down"
      >
        <span className="text-white text-sm mb-2">Nach unten scrollen</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
