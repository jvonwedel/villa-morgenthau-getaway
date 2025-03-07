import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
const amenities = ['Geräumige Wohnbereiche', 'Voll ausgestattete Küche', 'Komfortable Schlafzimmer', 'Moderne Badezimmer', 'Privater Garten', 'Außensitzbereich', 'Kamin', 'Highspeed WLAN', 'Smart TV', 'Waschmaschine & Trockner'];
const YourStay = () => {
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video relative overflow-hidden rounded-sm shadow-lg bg-villa-dark flex items-center justify-center text-white">
              <span>Villa Morgenthau Interior</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle subtitle="ALLES FÜR DEN PERFEKTEN AUFENTHALT">
              Entdecke die Villa Morgenthau
            </SectionTitle>
            <p className="text-gray-700 mb-6">In der Villa Morgenthau erwartet dich historischer Charme in Kombination mit modernem Interior. Die Einrichtung wurde mit Liebe zum Detail durchdacht, so dass du die schönste Zeit des Jahres auch wirklich genießen kannst.</p>
            
            <div className="mb-8">
              <h4 className="font-medium mb-3">Top-Ausstattung:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {amenities.map((amenity, index) => <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-villa-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {amenity}
                  </li>)}
              </ul>
            </div>
            
            <Link to="/your-stay" className="btn-secondary">
              Ausstattung & Services
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default YourStay;