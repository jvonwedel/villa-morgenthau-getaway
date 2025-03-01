import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { fetchGalleryImages, GalleryImage } from '../../lib/contentful';
import { useQuery } from '@tanstack/react-query';

// Fallback placeholder images (will be used until you add content to Contentful)
const placeholderImages = {
  Interior: Array(6).fill('/placeholder.svg'),
  Exterior: Array(4).fill('/placeholder.svg'),
  Surroundings: Array(5).fill('/placeholder.svg'),
  Amenities: Array(3).fill('/placeholder.svg')
};

type GalleryCategory = keyof typeof placeholderImages;

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Interior');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  // Fetch all gallery images from Contentful
  const { data: contentfulImages, isLoading, error } = useQuery({
    queryKey: ['galleryImages'],
    queryFn: fetchGalleryImages,
  });

  // Filter images by tag
  const getImagesForCategory = (category: GalleryCategory): string[] => {
    if (!contentfulImages || contentfulImages.length === 0) {
      return placeholderImages[category]; // Return placeholder images if no contentful data
    }
    
    const filteredImages = contentfulImages
      .filter(image => {
        // Check if image has tags and if any tag includes the category name
        return image.tags && image.tags.some(tag => 
          tag.toLowerCase().includes(category.toLowerCase())
        );
      })
      .map(image => image.image?.fields?.file?.url 
        ? `https:${image.image.fields.file.url}` 
        : '/placeholder.svg');
    
    return filteredImages.length > 0 ? filteredImages : placeholderImages[category];
  };
  
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

  const displayImages = getImagesForCategory(activeCategory);
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="EXPLORE OUR SPACES" centered>
          Villa Morgenthau Photo Gallery
        </SectionTitle>
        
        {/* Gallery Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(placeholderImages).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category as GalleryCategory)}
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

        {isLoading && (
          <div className="text-center py-8">
            <p>Loading gallery images...</p>
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 py-8">
            <p>Error loading images. Using placeholder images instead.</p>
          </div>
        )}
        
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
                  alt={`Villa Morgenthau ${activeCategory} ${index + 1}`}
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
                alt="Villa Morgenthau Featured Interior"
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
              alt="Gallery Lightbox" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
