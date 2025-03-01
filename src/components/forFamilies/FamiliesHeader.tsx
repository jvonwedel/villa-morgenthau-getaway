
import { Users } from 'lucide-react';

const FamiliesHeader = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/placeholder.svg" 
          alt="Family Activities at Villa Morgenthau" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-white/90 px-4 py-2 rounded-sm mb-6">
            <Users className="h-5 w-5 text-villa-accent mr-2" />
            <span className="text-sm font-medium">Family-Friendly Experience</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Perfect For Families
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Create lasting memories with your loved ones in the welcoming environment of Villa Morgenthau.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamiliesHeader;
