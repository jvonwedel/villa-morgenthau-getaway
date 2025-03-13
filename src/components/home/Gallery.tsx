
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { galleryImages } from '@/lib/galleryImages';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Get the first 6 images from the galleryImages collection
  const displayImages = galleryImages.slice(0, 6);
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="GALERIE" centered>
          Entdecke die Villa Morgenthau
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayImages.map((image, index) => (
            <Link 
              key={image.id}
              to="/gallery"
              className="aspect-[4/3] relative overflow-hidden group block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-full h-full">
                <img 
                  src={image.imageUrl} 
                  alt={image.description || image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.error("Image failed to load:", image.imageUrl);
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
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
