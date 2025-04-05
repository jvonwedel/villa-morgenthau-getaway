
import { useState } from 'react';
import { X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { galleryImages, copyrightNotice } from '../../lib/galleryImages';
import { Skeleton } from '../ui/skeleton';

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('Interior');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [imagesLoading, setImagesLoading] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  
  // Filter images by tag
  const displayImages = galleryImages.filter(image => 
    image.tags.includes(activeCategory)
  );
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  
  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleImageLoad = (imageId) => {
    setImagesLoading(prev => ({
      ...prev,
      [imageId]: false
    }));
  };

  const handleImageError = (imageId, imageUrl) => {
    console.log("Image failed to load:", imageUrl);
    setImageErrors(prev => ({
      ...prev,
      [imageId]: true
    }));
    setImagesLoading(prev => ({
      ...prev,
      [imageId]: false
    }));
  };

  // Updated categories
  const categories = ['Interior', 'Garten & Umgebung', 'Aktivitäten', 'Jahreszeiten'];
  
  return (
    <section className="section-padding bg-white pt-28">
      <div className="container-custom">
        <SectionTitle subtitle="IMPRESSIONEN" centered>
          Die Villa Morgenthau in Bildern
        </SectionTitle>
        
        {/* Gallery Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-sm transition-colors ${
                activeCategory === category 
                  ? 'bg-villa-dark text-white' 
                  : 'bg-villa-muted text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayImages.map((image) => (
            <div 
              key={image.id} 
              className="cursor-pointer group overflow-hidden"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                {imagesLoading[image.id] !== false && (
                  <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <img 
                  src={imageErrors[image.id] ? '/placeholder.svg' : image.imageUrl} 
                  alt="Villa Morgenthau"
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    imagesLoading[image.id] !== false ? 'invisible' : 'visible'
                  }`}
                  onLoad={() => handleImageLoad(image.id)}
                  onError={() => handleImageError(image.id, image.imageUrl)}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Booking Button */}
        <div className="text-center mt-8">
          <a 
            href="https://www.airbnb.de/rooms/1305881991709578029"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-villa-dark text-white hover:bg-villa-accent"
          >
            Jetzt buchen
          </a>
        </div>
        
        {/* Copyright Notice at the bottom, now below the booking button */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>{copyrightNotice}</p>
        </div>
        
        {/* Lightbox */}
        {lightboxImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="max-w-4xl w-full">
              <img 
                src={imageErrors[lightboxImage.id] ? '/placeholder.svg' : lightboxImage.imageUrl} 
                alt="Villa Morgenthau"
                className="max-w-full max-h-[80vh] object-contain mx-auto"
                onError={() => handleImageError(lightboxImage.id, lightboxImage.imageUrl)}
              />
              <div className="text-white text-center mt-4">
                <p className="text-gray-300 text-sm">{copyrightNotice}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
