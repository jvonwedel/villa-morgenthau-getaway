
import { useState } from 'react';
import { X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { fetchGalleryImages, fetchGalleryImagesByTag, GalleryImage } from '../../lib/galleryImages';

type GalleryCategory = 'Interior' | 'Exterior' | 'Surroundings' | 'Amenities';

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Interior');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  // Get images to display
  const allImages = fetchGalleryImages();
  
  // Filter images by tag
  const displayImages = fetchGalleryImagesByTag(activeCategory)
    .map(image => image.imageUrl);
  
  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
  };
  
  const openLightbox = (image: string) => {
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
                <img 
                  src={image} 
                  alt={`Villa Morgenthau ${getCategoryName(activeCategory)} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Large Image */}
        {activeCategory === 'Interior' && displayImages.length > 0 && (
          <div className="mt-10">
            <div 
              className="aspect-[16/9] relative overflow-hidden cursor-pointer"
              onClick={() => openLightbox(displayImages[0])}
            >
              <img 
                src={displayImages[0]} 
                alt="Villa Morgenthau hervorgehobener Innenbereich"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
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
            <img 
              src={lightboxImage} 
              alt="Galerie Lightbox" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
