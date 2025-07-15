
import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks/use-mobile';
import { useRef } from 'react';

const Hero = () => {
  const isMobile = useIsMobile();
  
  // GIF paths for desktop and mobile
  const desktopGifPath = '/lovable-uploads/emilymobile.gif';
  const mobileGifPath = '/lovable-uploads/emilymobile.gif';

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

  return (
    <section className="relative h-screen overflow-hidden">
      {/* GIF Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full">
          <img 
            src={isMobile ? mobileGifPath : desktopGifPath} 
            alt="Villa Morgenthau" 
            className="w-full h-full object-cover"
          />
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
