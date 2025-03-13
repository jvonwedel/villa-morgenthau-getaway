
import { useState } from 'react';
import { X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { fetchGalleryImages, fetchGalleryImagesByTag, GalleryImage } from '../../lib/galleryImages';

type GalleryCategory = 'Interior' | 'Exterior' | 'Surroundings' | 'Amenities';

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Interior');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  
  // Get images to display
  const allImages = fetchGalleryImages();
  
  // Filter images by tag
  const displayImages = fetchGalleryImagesByTag(activeCategory);
  
  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
  };
  
  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  // Translate category names
  const getCategoryName = (category: GalleryCategory): string => {
    switch(category) {
      case 'Interior': return 'Innenbereich';
      case 'Exterior': return 'Außenbereich';
      case 'Surroundings': return 'Umgebung';
      case 'Amenities': return 'Annehmlichkeiten';
      default: return category;
    }
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="ENTDECKEN SIE UNSERE RÄUME" centered>
          Villa Morgenthau Fotogalerie
        </SectionTitle>
        
        {/* Gallery Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {(['Interior', 'Exterior', 'Surroundings', 'Amenities'] as GalleryCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-sm transition-colors ${
                activeCategory === category 
                  ? 'bg-villa-dark text-white' 
                  : 'bg-villa-muted text-gray-700 hover:bg-gray-200'
              }`}
            >
              {getCategoryName(category)}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayImages.map((image, index) => (
            <div 
              key={index} 
              className="cursor-pointer group overflow-hidden"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                {image.imageUrl === '/placeholder.svg' ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-700 font-medium">Bild kommt bald</span>
                  </div>
                ) : (
                  <img 
                    src={image.imageUrl} 
                    alt={image.description || image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.error("Image failed to load:", image.imageUrl);
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                )}
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
              {displayImages[0].imageUrl === '/placeholder.svg' ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <span className="text-gray-700 font-medium">Bild kommt bald</span>
                </div>
              ) : (
                <img 
                  src={displayImages[0].imageUrl} 
                  alt={displayImages[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    console.error("Image failed to load:", displayImages[0].imageUrl);
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              )}
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
        )}
        
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
              {lightboxImage.imageUrl === '/placeholder.svg' ? (
                <div className="aspect-[16/9] bg-gray-800 flex items-center justify-center">
                  <span className="text-white font-medium">Bild kommt bald</span>
                </div>
              ) : (
                <img 
                  src={lightboxImage.imageUrl} 
                  alt={lightboxImage.title}
                  className="max-w-full max-h-[80vh] object-contain mx-auto"
                  onError={(e) => {
                    console.error("Image failed to load in lightbox:", lightboxImage.imageUrl);
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              )}
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
