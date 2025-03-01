
import SectionTitle from '../ui/SectionTitle';
import { MapPin } from 'lucide-react';

const attractions = [
  {
    name: "Husum",
    description: "Erkundet die charmanten Straßen, esst ein Krabbenbrötchen am Hafen und bummelt in den kleinen Geschäften",
    distance: "15 Min. Fahrt",
    coords: { top: "30%", left: "25%" }
  },
  {
    name: "Kanuwanderwege",
    description: "Entdeckt Sie die wunderbare und unberührte Flusslandschaft entlang der Treene",
    distance: "10 Min. Fahrt",
    coords: { top: "15%", left: "60%" }
  },
  {
    name: "Lokale Hofläden",
    description: "Probiert lokalen Käse bei Backensholz während eure Kinder happy auf dem Spielplatz toben",
    distance: "20 Min. Fahrt",
    coords: { top: "70%", left: "35%" }
  },
  {
    name: "Schlei",
    description: "Entspannt bei einem Segeltörn auf der Schlei oder entdeckt die historischen Wikingerstätten",
    distance: "25 Min. Fahrt",
    coords: { top: "50%", left: "75%" }
  },
  {
    name: "Friedrichstadt",
    description: "Spaziert durch \"Klein Amsterdam\" und genießt einen Drink entlang der Grachten",
    distance: "20 Min. Fahrt",
    coords: { top: "60%", left: "20%" }
  },
  {
    name: "Wildes Moor Schwabstedt",
    description: "Entdeckt den Moorlehrpfad und lernt faszinierende Details über unsere Flora und Fauna kennen",
    distance: "5 Min. Fahrt",
    coords: { top: "40%", left: "45%" }
  },
];

const LocationMap = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <SectionTitle subtitle="AKTIVITÄTEN IN DER NÄHE" centered>
          Erkunden Sie die Umgebung
        </SectionTitle>
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Entdecken Sie die besten Aktivitäten und Attraktionen in der Umgebung der Villa Morgenthau. Unsere Lage bietet die perfekte Mischung aus Entspannung und Abenteuer.
        </p>
        
        <div className="relative w-full aspect-[16/9] bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-gray-100">
            <img 
              src="/placeholder.svg" 
              alt="Karte der Villa Morgenthau Umgebung" 
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
                <p className="text-xs text-white/80 mt-1">Ihr perfekter Urlaubsrückzugsort</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
