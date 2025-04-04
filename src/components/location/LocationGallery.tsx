
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import SectionTitle from '../ui/SectionTitle';

const locationImages = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    alt: 'Malerische Landschaft mit See und Bergen'
  },
  {
    url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    alt: 'Wasserfälle und Brücke in der Nähe der Villa'
  },
  {
    url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    alt: 'Herbstlandschaft in der Umgebung'
  },
  {
    url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    alt: 'Lokale Tierwelt in der Region'
  },
];

const LocationGallery = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="GALERIE" centered>
          Impressionen der Umgebung
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {locationImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-sm shadow-md group">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  console.log("Image failed to load:", image.url);
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button 
              className="bg-transparent border border-villa-dark text-villa-dark hover:bg-villa-dark hover:text-white px-6 py-3 rounded-sm transition-all duration-300 inline-block text-sm uppercase tracking-wider"
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
