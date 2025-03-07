
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/lovable-uploads/1be7d73f-dbf7-4981-92f5-80a82a6372d6.png',
    '/lovable-uploads/4d8fd946-7525-49ed-860d-3d8a0f1997bc.png',
    '/lovable-uploads/1a8ab0d3-13f1-42a9-939c-62d7c5a9458e.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Image carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Villa Morgenthau ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative h-full flex flex-col justify-center items-center text-center text-white z-30">
        <div className="animate-fade-in max-w-3xl mx-auto">
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
      <div className="absolute bottom-8 left-0 right-0 mx-auto flex flex-col items-center animate-bounce w-max z-30">
        <span className="text-white text-sm mb-2">Nach unten scrollen</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
