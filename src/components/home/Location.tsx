
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Villa Morgenthau Lage" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-white p-5 rounded-sm shadow-lg hidden md:flex items-center">
                <MapPin className="text-villa-accent mr-2 h-5 w-5" />
                <p className="font-medium text-sm">Perfekte natürliche Umgebung</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle subtitle="WO WIR SIND">
              Ideale Lage
            </SectionTitle>
            <p className="text-gray-700 mb-6">
              Eingebettet in eine unberührte natürliche Umgebung bietet Villa Morgenthau die perfekte Balance zwischen Abgeschiedenheit und Erreichbarkeit. Umgeben von üppigen Wäldern und Panoramablicken, jedoch nur eine kurze Fahrt von lokalen Attraktionen und Annehmlichkeiten entfernt.
            </p>
            <p className="text-gray-700 mb-8">
              Das nahe gelegene Dorf bietet charmante Geschäfte und Restaurants, während die Umgebung Wanderwege, Seen und kulturelle Sehenswürdigkeiten zum Erkunden bietet. Unsere Lage bietet die ideale Basis sowohl für Entspannung als auch für Abenteuer.
            </p>
            <Link to="/location" className="btn-secondary">
              Entdecken Sie unsere Lage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
