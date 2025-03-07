
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Solid background instead of images */}
      <div className="absolute inset-0 bg-villa-dark z-10" />
      
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
      
      {/* Scroll indicator - centered */}
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
