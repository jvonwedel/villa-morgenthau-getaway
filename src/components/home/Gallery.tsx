
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { galleryImages } from '@/lib/galleryImages';
import { Skeleton } from '../ui/skeleton';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imagesLoading, setImagesLoading] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  
  // Get the first 6 images from the galleryImages collection
  const displayImages = galleryImages.slice(0, 6);
  
  const handleImageLoad = (imageId) => {
    setImagesLoading(prev => ({
      ...prev,
      [imageId]: false
    }));
  };
  
  const handleImageError = (imageId, imageUrl) => {
    console.log(`Image failed to load in home gallery: ${imageUrl}`);
    setImageErrors(prev => ({
      ...prev,
      [imageId]: true
    }));
    setImagesLoading(prev => ({
      ...prev,
      [imageId]: false
    }));
  };

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
                {imagesLoading[image.id] !== false && (
                  <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <img 
                  src={imageErrors[image.id] ? '/placeholder.svg' : image.imageUrl} 
                  alt={image.description || image.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    imagesLoading[image.id] !== false ? 'invisible' : 'visible'
                  }`}
                  onLoad={() => handleImageLoad(image.id)}
                  onError={() => handleImageError(image.id, image.imageUrl)}
                />
              </div>
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredIndex === index ? 'bg-opacity-30' : 'bg-opacity-0'
              }`} />
              <div className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3 transform ${
                hoveredIndex === index ? 'translate-y-0' : 'translate-y-full'
              } transition-transform duration-300`}>
                <h3 className="font-medium text-white text-sm">{image.title}</h3>
                {image.description && (
                  <p className="text-gray-200 text-xs mt-1">{image.description}</p>
                )}
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
