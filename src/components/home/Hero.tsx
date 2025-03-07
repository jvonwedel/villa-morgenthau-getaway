
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define the media types for the hero section
type HeroMedia = {
  type: 'image' | 'video';
  src: string;
  // Optional mime type for videos
  mimeType?: string;
};

// Use only the latest uploaded image
const heroMedia: HeroMedia[] = [
  {
    type: 'image',
    src: '/lovable-uploads/45650d9f-838e-42a8-bf93-cdc7eb20cb2d.png'
  }
  // Add your video here once uploaded:
  // { 
  //   type: 'video', 
  //   src: '/path/to/your/video.mp4',
  //   // Optional: specify mime type for better browser compatibility
  //   // mimeType: 'video/mp4'
  // }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Auto-rotate through images and videos
  useEffect(() => {
    // Only set up auto-rotation if we have more than one media item
    if (heroMedia.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroMedia.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Hero Media (Images and Videos) */}
      <div className="absolute inset-0 w-full h-full">
        {heroMedia.map((media, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {media.type === 'image' && (
              <img
                src={media.src}
                alt={`Villa Morgenthau ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
            {media.type === 'video' && (
              <video
                src={media.src}
                type={media.mimeType}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setVideoLoaded(true)}
              />
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative h-full flex flex-col justify-center items-center text-center text-white">
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
      <div className="absolute bottom-8 left-0 right-0 mx-auto flex flex-col items-center animate-bounce w-max">
        <span className="text-white text-sm mb-2">Nach unten scrollen</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* Media navigation dots - only shown if more than one media item */}
      {heroMedia.length > 1 && (
        <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2">
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
      )}
    </section>
  );
};

export default Hero;
