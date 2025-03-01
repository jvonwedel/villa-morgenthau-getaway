
import SectionTitle from '../ui/SectionTitle';

const LocationContent = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle subtitle="EXPLORE THE AREA">
              An Ideal Base for Exploration
            </SectionTitle>
            
            <p className="text-gray-700 mb-6">
              Villa Morgenthau is situated in one of the most picturesque regions, offering a perfect blend of natural beauty and cultural richness. The villa's location provides easy access to numerous attractions while maintaining the serenity and privacy our guests value.
            </p>
            
            <p className="text-gray-700 mb-6">
              Within a short drive, you'll find charming villages with local markets, restaurants serving authentic cuisine, and cultural sites that tell the story of this historic region. Nature enthusiasts will appreciate the proximity to hiking trails, lakes, and protected natural areas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-villa-muted p-4 rounded-sm">
                <h3 className="font-medium mb-2">Nearby Attractions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Historic Village (15 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Local Wineries (20 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Mountain Hiking Trails (10 min)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-villa-muted p-4 rounded-sm">
                <h3 className="font-medium mb-2">Distances</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Airport (45 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Nearest Town (10 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-villa-accent mr-2">•</span>
                    <span>Beach (30 min)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Villa Morgenthau Surroundings" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContent;
