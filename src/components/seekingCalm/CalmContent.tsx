
import SectionTitle from '../ui/SectionTitle';

const CalmContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="RELAXATION & WELLNESS">
              A Haven for Relaxation
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">
              In today's fast-paced world, finding moments of tranquility is essential for our wellbeing. Villa Morgenthau has been thoughtfully designed as a sanctuary where you can disconnect from the stresses of everyday life and reconnect with yourself and nature.
            </p>
            
            <p className="text-gray-700 mb-6">
              The villa's peaceful setting, surrounded by natural beauty, creates the perfect environment for relaxation. From the gentle sounds of nature to the clean, fresh air, every element contributes to a sense of calm and renewal.
            </p>
            
            <p className="text-gray-700 mb-8">
              Whether you choose to meditate in our garden, enjoy a book by the fireplace, or simply take in the panoramic views, Villa Morgenthau offers countless opportunities to find your inner peace and return home feeling refreshed and rejuvenated.
            </p>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Peaceful Setting at Villa Morgenthau" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalmContent;
