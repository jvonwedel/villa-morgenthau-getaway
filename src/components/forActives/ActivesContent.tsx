
import SectionTitle from '../ui/SectionTitle';

const ActivesContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="ADVENTURE AWAITS">
              Embrace the Great Outdoors
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">
              While Villa Morgenthau offers a peaceful retreat, it's also the perfect base for those seeking adventure and outdoor activities. The surrounding area is a playground for active travelers, with opportunities for hiking, cycling, water sports, and more.
            </p>
            
            <p className="text-gray-700 mb-6">
              Our location provides easy access to numerous trails that wind through forests, alongside rivers, and up to panoramic viewpoints. For water enthusiasts, nearby lakes and rivers offer swimming, kayaking, and fishing opportunities.
            </p>
            
            <p className="text-gray-700 mb-8">
              After a day of exploration and adventure, return to the comfort of Villa Morgenthau to relax and recharge for the next day's activities. Our spacious accommodations and amenities are designed to support your active lifestyle.
            </p>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Adventure activities near Villa Morgenthau" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivesContent;
