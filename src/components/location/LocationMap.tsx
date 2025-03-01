
import SectionTitle from '../ui/SectionTitle';
import { MapPin } from 'lucide-react';

const attractions = [
  {
    name: "Historic Village",
    description: "Explore the charming streets and local shops",
    distance: "15 min drive",
    coords: { top: "30%", left: "25%" }
  },
  {
    name: "Mountain Trails",
    description: "Perfect for hiking and nature photography",
    distance: "10 min drive",
    coords: { top: "15%", left: "60%" }
  },
  {
    name: "Local Winery",
    description: "Taste the regional wines and local cuisine",
    distance: "20 min drive",
    coords: { top: "70%", left: "35%" }
  },
  {
    name: "Lake Recreation",
    description: "Swimming, fishing, and boating activities",
    distance: "25 min drive",
    coords: { top: "50%", left: "75%" }
  },
];

const LocationMap = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="THINGS TO DO NEARBY" centered>
          Explore The Surroundings
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Discover the best activities and attractions in the surrounding area of Villa Morgenthau. Our location offers the perfect blend of relaxation and adventure.
        </p>
        
        <div className="relative w-full aspect-[16/9] bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-gray-100">
            <img 
              src="/placeholder.svg" 
              alt="Map of Villa Morgenthau Area" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          {/* Location Pins */}
          {attractions.map((attraction, index) => (
            <div 
              key={index}
              className="absolute group cursor-pointer transition-transform hover:scale-105"
              style={{ 
                top: attraction.coords.top, 
                left: attraction.coords.left 
              }}
            >
              <div className="relative">
                <MapPin className="h-8 w-8 text-villa-accent drop-shadow-md" />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <h4 className="font-medium text-sm">{attraction.name}</h4>
                  <p className="text-xs text-gray-600 mt-1">{attraction.description}</p>
                  <p className="text-xs font-medium text-villa-accent mt-1">{attraction.distance}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Villa Location */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative group">
              <div className="h-5 w-5 bg-villa-dark rounded-full border-2 border-white shadow-lg pulse animate-pulse"></div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-villa-dark p-3 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <h4 className="font-medium text-sm text-white">Villa Morgenthau</h4>
                <p className="text-xs text-white/80 mt-1">Your perfect vacation retreat</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2 flex items-center">
                <MapPin className="h-4 w-4 text-villa-accent mr-2" />
                {attraction.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{attraction.description}</p>
              <p className="text-xs font-medium text-villa-accent">{attraction.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
