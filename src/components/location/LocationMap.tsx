
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
    <section className="section-padding bg-villa-muted py-10">
      <div className="container-custom">
        <SectionTitle subtitle="AKTIVITÄTEN IN DER NÄHE" centered>
          So viel zu entdecken
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
