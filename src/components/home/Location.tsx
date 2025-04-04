import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
const Location = () => {
  return <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-sm shadow-lg overflow-hidden">
                <img src="/lovable-uploads/13f904f9-f40c-4e0f-a509-815c2d2221ce.png" alt="Standort der Villa Morgenthau" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-5 rounded-sm shadow-lg hidden md:flex items-center">
                <MapPin className="text-villa-accent mr-2 h-5 w-5" />
                <p className="font-medium text-sm">Zwischen den Meeren</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle subtitle="BESTE LAGE">
              Zwischen den Meeren in der Natur
            </SectionTitle>
            <p className="text-gray-700 mb-6">Eingebettet in unberührte Natur bietet die Villa Morgenthau die perfekte Balance zwischen Abgeschiedenheit und zahlreichen Unternehmungsmöglichkeiten. Umgeben von üppigen Wäldern und unberührten Moor- und Naturschutzflächen, jedoch nur eine kurze Fahrt von Sehenswürdigkeiten und Einkaufsmöglichkeiten entfernt.</p>
            <p className="text-gray-700 mb-8">Die nahe gelegene Stadt Husum bietet charmante Geschäfte und Restaurants, während die Umgebung (Kanu-)Wanderwege, das Wattenmeer, die Schlei und weitere tolle Ziele zum Erkunden bietet. Unsere Lage ist die ideale Basis sowohl für Entspannung als auch für Abenteuer.</p>
            <Link to="/location" className="btn-secondary">ENTDECKE DIE LAGE</Link>
          </div>
        </div>
      </div>
    </section>;
};
export default Location;
