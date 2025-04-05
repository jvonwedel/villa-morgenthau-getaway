
import { Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const YourStay = () => {
  // First column of amenities
  const amenities1 = [
    'Großzügiger Wohn- & Essbereich',
    'Komfortable Schlafzimmer',
    'Privater Garten',
    'Kamin',
    'Smart TV'
  ];

  // Second column of amenities
  const amenities2 = [
    'Schöne, voll ausgestattete Küche',
    'Moderne Badezimmer',
    'Wintergarten & Terrasse',
    'Highspeed W-LAN',
    'Waschmaschine & Trockner'
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="UNTERKUNFT" centered>
          Herzlich Willkommen!
        </SectionTitle>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-700">
            In der Villa Morgenthau erwartet dich historischer Charme in Kombination mit modernem Interior. 
            Die Einrichtung wurde mit Liebe zum Detail durchdacht, so dass du die schönste Zeit des Jahres so richtig genießen kannst.
          </p>
        </div>
        
        <h3 className="text-2xl font-serif text-center mb-8">Top Ausstattung:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-4xl mx-auto">
          {/* First column */}
          <div>
            {amenities1.map((amenity, index) => (
              <div key={`amenity-1-${index}`} className="flex items-center mb-4">
                <Check className="h-5 w-5 text-villa-accent mr-3 flex-shrink-0" />
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
          
          {/* Second column */}
          <div>
            {amenities2.map((amenity, index) => (
              <div key={`amenity-2-${index}`} className="flex items-center mb-4">
                <Check className="h-5 w-5 text-villa-accent mr-3 flex-shrink-0" />
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourStay;
