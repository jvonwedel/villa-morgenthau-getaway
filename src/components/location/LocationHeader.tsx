
import { MapPin } from 'lucide-react';

const LocationHeader = () => {
  return <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/src/images/location_image/locationheader.jpeg" 
          alt="Villa Morgenthau Lage" 
          className="w-full h-full object-cover" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">Zwischen Tiefenentspannung und neuen Entdeckungen</h1>
        </div>
      </div>
    </section>;
};

export default LocationHeader;
