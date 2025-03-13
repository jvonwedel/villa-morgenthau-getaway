
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
  const displayImages = fetchGalleryImagesByTag(activeCategory);
  
  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
  };
  
  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image.title);
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
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="p-4 text-center">
                  <h3 className="font-medium text-gray-700">{image.title}</h3>
                  {image.description && (
                    <p className="text-gray-500 text-sm mt-2">{image.description}</p>
                  )}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </div>
          ))}
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
            <div className="bg-white p-8 rounded-md max-w-lg">
              <h2 className="text-xl font-semibold">{lightboxImage}</h2>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
