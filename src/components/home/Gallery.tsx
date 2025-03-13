
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Gallery images
  const galleryImages = [
    {
      src: '/lovable-uploads/77f5b381-22b3-40ec-ab8d-809a786c7d36.png',
      alt: 'Esstisch mit schönen Hängelampen und Blick in den Garten',
      title: 'Esstisch'
    },
    {
      src: '/lovable-uploads/c4ea1cb4-5b7d-426a-8dbe-7fbc14333d6d.png',
      alt: 'Wintergarten mit Blick auf die Natur',
      title: 'Wintergarten'
    },
    {
      src: '/lovable-uploads/6f373559-6d2a-4374-bdb7-9b2c9ea7e6c7.png',
      alt: 'Gemütlicher Kaminbereich mit Sitzgelegenheit',
      title: 'Kaminbereich'
    },
    {
      src: '/lovable-uploads/d1f7c258-f4ad-438a-9b7a-0ed3d0e66d71.png',
      alt: 'Moderne Küche mit Marmorarbeitsplatte',
      title: 'Küche'
    },
    {
      src: '/lovable-uploads/22698746-7971-4d47-98e0-418cfc76c6ad.png',
      alt: 'Elegantes Badezimmer mit Dusche und Doppelwaschbecken',
      title: 'Badezimmer'
    },
    {
      src: '/lovable-uploads/a8fc63bd-81c0-4687-8fe2-26951d84fb54.png',
      alt: 'Himmelbett in einem hellen Schlafzimmer',
      title: 'Schlafzimmer'
    }
  ];
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="GALERIE" centered>
          Entdecke die Villa Morgenthau
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <Link 
              key={index}
              to="/gallery"
              className="aspect-[4/3] relative overflow-hidden group block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
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
