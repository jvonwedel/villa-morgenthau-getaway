
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import SectionTitle from '../ui/SectionTitle';
import { fetchGalleryImagesByTag } from '../../lib/galleryImages';

const LocationGallery = () => {
  // Get 4 images from the 'Garten & Umgebung' category
  const locationImages = fetchGalleryImagesByTag('Garten & Umgebung').slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="GALERIE" centered>
          Impressionen der Umgebung
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {locationImages.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden rounded-sm shadow-md group">
              <img 
                src={image.imageUrl} 
                alt={image.description || image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  console.log("Image failed to load:", image.imageUrl);
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-block">
            <Button 
              className="bg-transparent border border-villa-dark text-villa-dark hover:bg-villa-dark hover:text-white px-6 py-3 rounded-sm transition-all duration-300 text-center text-sm uppercase tracking-wider"
            >
              Zeig mir mehr
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationGallery;
