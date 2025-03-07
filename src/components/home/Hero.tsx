
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define the media types for the hero section
type HeroMedia = {
  type: 'image';
  src: string;
  alt: string;
};

// Media array with the three images
const heroMedia: HeroMedia[] = [
  {
    type: 'image',
    src: '/lovable-uploads/0e14ea53-1504-4102-a4f8-3b83bc3da20c.png',
    alt: 'Misty field at sunrise with trees in the background'
  },
  {
    type: 'image',
    src: '/lovable-uploads/08435397-4540-4c3c-9609-327fe6d3465b.png',
    alt: 'Villa Morgenthau house with garden'
  },
  {
    type: 'image',
    src: '/lovable-uploads/62695490-bf30-44c0-8597-9f167833fab9.png',
    alt: 'Villa Morgenthau aerial view'
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(heroMedia.map(() => false));

  // Preload images to ensure they're ready before display
  useEffect(() => {
    heroMedia.forEach((media, index) => {
      const img = new Image();
      img.src = media.src;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
  }, []);

  // Auto-rotate through images every 3 seconds
  useEffect(() => {
    // Only set up auto-rotation if we have more than one media item
    if (heroMedia.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroMedia.length);
    }, 3000); // 3 second interval
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Hero Media (Images) */}
      <div className="absolute inset-0 w-full h-full">
        {heroMedia.map((media, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={media.src}
              alt={media.alt}
              className="w-full h-full object-cover"
              onError={(e) => console.error(`Failed to load image: ${media.src}`, e)}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-20" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative h-full flex flex-col justify-center items-center text-center text-white z-30">
        <div className="animate-fade-in max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium mb-4">
            Villa Morgenthau
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Dein Hideaway inmitten der Natur & zwischen den Meeren</p>
          <div className="space-x-4">
            <Link to="/gallery" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-villa-dark">ENTDECKEN</Link>
            <Link to="/booking" className="btn-primary bg-white text-villa-dark hover:bg-villa-accent">BUCHEN</Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - centered */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto flex flex-col items-center animate-bounce w-max z-30">
        <span className="text-white text-sm mb-2">Nach unten scrollen</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* Media navigation dots */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2 z-30">
        {heroMedia.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
