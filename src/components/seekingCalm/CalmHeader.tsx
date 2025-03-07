
import { Leaf } from 'lucide-react';

const CalmHeader = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-villa-dark flex items-center justify-center text-white">
          <span>Entspannung in der Villa Morgenthau</span>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-white/90 px-4 py-2 rounded-sm mb-6">
            <Leaf className="h-5 w-5 text-villa-accent mr-2" />
            <span className="text-sm font-medium">Ruhe & Entspannung</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Finden Sie Ihre innere Ruhe
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Villa Morgenthau bietet die perfekte Umgebung für all jene, die Ruhe, Entspannung und eine Verbindung zur Natur suchen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalmHeader;
