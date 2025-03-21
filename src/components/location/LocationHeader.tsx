
import { MapPin } from 'lucide-react';

const LocationHeader = () => {
  return <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src="/placeholder.svg" alt="Villa Morgenthau Lage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="absolute bottom-10 left-10 md:left-16 bg-[#8E9196]/80 px-4 py-2 backdrop-blur-sm">
            <span className="text-white/90 text-sm font-light tracking-wide">Zwischen den Meeren</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">Einmalige Lage</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Eingebettet in eine unberührte natürliche Umgebung bietet die Villa Morgenthau die perfekte Balance zwischen Abgeschiedenheit und Erreichbarkeit.
          </p>
        </div>
      </div>
    </section>;
};

export default LocationHeader;
