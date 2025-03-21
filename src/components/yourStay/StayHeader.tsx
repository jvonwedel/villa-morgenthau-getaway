
import { Home } from 'lucide-react';

const StayHeader = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-villa-dark">
        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-3xl font-light">
          Villa Morgenthau
        </div>
      </div>
      
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="absolute bottom-10 left-10 md:left-16 bg-[#8E9196]/80 px-4 py-2 backdrop-blur-sm">
            <span className="text-white/90 text-sm font-light tracking-wide">Ihr Zuhause fernab von Zuhause</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Ihr Aufenthalt in der Villa Morgenthau
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Erleben Sie außergewöhnlichen Komfort und Luxus während Ihres Aufenthalts in unserer durchdacht ausgestatteten Villa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StayHeader;
