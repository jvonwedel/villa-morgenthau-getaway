
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';

const galleryImages = [
  'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027',
  'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="OUR SPACES" centered>
          Explore Villa Morgenthau
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.slice(0, 6).map((image, index) => (
            <div 
              key={index}
              className="aspect-[4/3] relative overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img 
                src={image} 
                alt={`Villa Morgenthau Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredIndex === index ? 'bg-opacity-30' : 'bg-opacity-0'
              }`} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/gallery" className="btn-secondary">
            View All Photos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
