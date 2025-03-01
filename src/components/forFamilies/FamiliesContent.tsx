
import SectionTitle from '../ui/SectionTitle';

const FamiliesContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="FAMILY VACATION">
              A Place for Everyone
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">
              Villa Morgenthau welcomes families of all sizes and ages, offering spacious accommodations and amenities designed with everyone in mind. Our villa provides the perfect setting for quality family time while ensuring each member can find their own space to relax and enjoy.
            </p>
            
            <p className="text-gray-700 mb-6">
              The generous layout of the villa means children have room to play while adults can relax in comfort. Our garden and outdoor spaces provide safe areas for exploration and activities, and our location offers easy access to family-friendly attractions and natural wonders.
            </p>
            
            <p className="text-gray-700 mb-8">
              From board games and books for rainy days to outdoor equipment for sunny adventures, we've thought of everything to make your family stay comfortable, convenient, and memorable.
            </p>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Family Time at Villa Morgenthau" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamiliesContent;
