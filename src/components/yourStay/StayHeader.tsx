
import { Home } from 'lucide-react';

const StayHeader = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/placeholder.svg" 
          alt="Ihr Aufenthalt in der Villa Morgenthau" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-white/90 px-4 py-2 rounded-sm mb-6">
            <Home className="h-5 w-5 text-villa-accent mr-2" />
            <span className="text-sm font-medium">Ihr Zuhause fernab von Zuhause</span>
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
