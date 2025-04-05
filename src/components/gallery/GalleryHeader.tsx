
import { Image } from 'lucide-react';

const GalleryHeader = () => {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
          alt="Villa Morgenthau Galerie" 
          className="w-full h-full object-cover"
          onError={(e) => {
            console.log("Header image failed to load");
            (e.target as HTMLImageElement).src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-white/90 px-4 py-2 rounded-sm mb-6">
            <Image className="h-5 w-5 text-villa-accent mr-2" />
            <span className="text-sm font-medium">Fotosammlung</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Galerie
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Entdecken Sie die Villa Morgenthau durch unsere Fotosammlung, die das Anwesen und seine Umgebung zeigt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeader;
