
import { Users } from 'lucide-react';
const FamiliesHeader = () => {
  return <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src="/placeholder.svg" alt="Familienaktivitäten in der Villa Morgenthau" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="absolute bottom-10 left-10 md:left-16 bg-[#8E9196]/80 px-4 py-2 backdrop-blur-sm">
            <span className="text-white/90 text-sm font-light tracking-wide">Familienfreundliche Erfahrung</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">Perfekt für Familien</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Schaffen Sie bleibende Erinnerungen mit Ihren Liebsten in der einladenden Umgebung der Villa Morgenthau.
          </p>
        </div>
      </div>
    </section>;
};
export default FamiliesHeader;
