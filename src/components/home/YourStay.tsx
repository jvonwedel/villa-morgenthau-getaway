
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';

const amenities = [
  'Geräumige Wohnbereiche',
  'Voll ausgestattete Küche',
  'Luxuriöse Schlafzimmer',
  'Moderne Badezimmer',
  'Privater Garten',
  'Außenessbereich',
  'Kamin',
  'Highspeed-WLAN',
  'Smart-TV',
  'Waschmaschine & Trockner'
];

const YourStay = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle subtitle="ANNEHMLICHKEITEN & SERVICES" centered>
          Ihr perfekter Aufenthalt
        </SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="aspect-video relative overflow-hidden rounded-sm shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Villa Morgenthau Innenbereich" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl mb-6">Moderner Komfort in historischem Ambiente</h3>
            <p className="text-gray-700 mb-6">
              Villa Morgenthau verbindet historischen Charme mit allen modernen Annehmlichkeiten, die Sie für einen komfortablen und luxuriösen Aufenthalt benötigen. Jedes Detail wurde sorgfältig durchdacht, um sicherzustellen, dass Ihr Erlebnis außergewöhnlich ist.
            </p>
            
            <div className="mb-8">
              <h4 className="font-medium mb-3">Top-Annehmlichkeiten:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-villa-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
            
            <Link to="/your-stay" className="btn-secondary">
              Annehmlichkeiten entdecken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourStay;
