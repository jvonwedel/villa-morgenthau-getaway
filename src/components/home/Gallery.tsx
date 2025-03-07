
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Placeholder boxes instead of images
  const imagePlaceholders = Array(6).fill(null);
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="GALLERIE" centered>
          Entdecke die Villa Morgenthau
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imagePlaceholders.map((_, index) => (
            <Link 
              key={index}
              to="/gallery"
              className="aspect-[4/3] relative overflow-hidden group block bg-villa-muted"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-center h-full text-villa-dark">
                <span>Galeriebild {index + 1}</span>
              </div>
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredIndex === index ? 'bg-opacity-30' : 'bg-opacity-0'
              }`} />
              <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <span className="bg-white/90 px-4 py-2 rounded-sm text-sm font-medium">Galerie ansehen</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/gallery" className="btn-secondary">
            Alle Fotos ansehen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
