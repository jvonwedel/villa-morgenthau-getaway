
import { Image } from 'lucide-react';

const GalleryHeader = () => {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/placeholder.svg" 
          alt="Villa Morgenthau Gallery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-white/90 px-4 py-2 rounded-sm mb-6">
            <Image className="h-5 w-5 text-villa-accent mr-2" />
            <span className="text-sm font-medium">Photo Collection</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Explore Villa Morgenthau through our collection of photos showcasing the property and its surroundings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeader;
