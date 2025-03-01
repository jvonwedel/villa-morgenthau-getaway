
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchGalleryImages } from '../../lib/contentful';

// Fallback placeholder images
const placeholderImages = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Fetch gallery images from Contentful
  const { data: contentfulImages, isLoading, error } = useQuery({
    queryKey: ['homeGalleryImages'],
    queryFn: fetchGalleryImages,
  });

  // Get images to display (contentful if available, otherwise placeholders)
  const displayImages = contentfulImages && contentfulImages.length > 0
    ? contentfulImages.slice(0, 6).map(image => 
        image.image?.fields?.file?.url 
          ? `https:${image.image.fields.file.url}` 
          : '/placeholder.svg'
      )
    : placeholderImages;
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="OUR SPACES" centered>
          Explore Villa Morgenthau
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayImages.slice(0, 6).map((image, index) => (
            <Link 
              key={index}
              to="/gallery"
              className="aspect-[4/3] relative overflow-hidden group block"
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
              <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <span className="bg-white/90 px-4 py-2 rounded-sm text-sm font-medium">View Gallery</span>
              </div>
            </Link>
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
