
import { useState } from 'react';
import { X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { galleryImages } from '../../lib/galleryImages';
import { Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';

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
          Villa Morgenthau Fotogalerie
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
                  alt={image.description || image.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    imagesLoading[image.id] !== false ? 'invisible' : 'visible'
                  }`}
                  onLoad={() => handleImageLoad(image.id)}
                  onError={() => handleImageError(image.id, image.imageUrl)}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-medium text-white">{image.title}</h3>
                  {image.description && (
                    <p className="text-gray-200 text-sm mt-1">{image.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Large Image for Interior */}
        {activeCategory === 'Interior' && displayImages.length > 0 && (
          <div className="mt-10">
            <div 
              className="aspect-[16/9] relative overflow-hidden cursor-pointer"
              onClick={() => openLightbox(displayImages[0])}
            >
              {imagesLoading[displayImages[0].id] !== false && (
                <Skeleton className="absolute inset-0 w-full h-full" />
              )}
              <img 
                src={imageErrors[displayImages[0].id] ? '/placeholder.svg' : displayImages[0].imageUrl} 
                alt={displayImages[0].title}
                className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
                  imagesLoading[displayImages[0].id] !== false ? 'invisible' : 'visible'
                }`}
                onLoad={() => handleImageLoad(displayImages[0].id)}
                onError={() => handleImageError(displayImages[0].id, displayImages[0].imageUrl)}
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
        )}
        
        {/* Booking Button */}
        <div className="text-center mt-12">
          <a 
            href="https://www.airbnb.de/rooms/1305881991709578029"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-villa-dark text-white hover:bg-villa-accent"
          >
            Jetzt buchen
          </a>
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
                alt={lightboxImage.title}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
                onError={() => handleImageError(lightboxImage.id, lightboxImage.imageUrl)}
              />
              <div className="text-white text-center mt-4">
                <h2 className="text-xl font-semibold">{lightboxImage.title}</h2>
                {lightboxImage.description && (
                  <p className="text-gray-300 mt-2">{lightboxImage.description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
