
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen">
      {/* Hero Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative h-full flex flex-col justify-center items-center text-center text-white">
        <div className="animate-fade-in max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium mb-4">
            Villa Morgenthau
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience timeless luxury in our historic vacation home, where elegance meets comfort.
          </p>
          <div className="space-x-4">
            <Link to="/gallery" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-villa-dark">
              Explore
            </Link>
            <Link to="/booking" className="btn-primary bg-white text-villa-dark hover:bg-villa-accent">
              Book Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
