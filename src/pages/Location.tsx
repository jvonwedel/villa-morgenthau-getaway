
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="/placeholder.svg" 
            alt="Villa Morgenthau Location" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              Location
            </h1>
            <p className="text-lg text-white max-w-xl">
              Discover the perfect balance of seclusion and accessibility at Villa Morgenthau.
            </p>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle subtitle="WHERE TO FIND US" centered>
            Our Location
          </SectionTitle>
          <div className="bg-villa-muted h-96 rounded-sm shadow-lg mb-12">
            {/* Map would go here - placeholder for now */}
            <div className="w-full h-full flex items-center justify-center">
              <MapPin className="w-10 h-10 text-villa-accent mr-3" />
              <span className="text-xl font-medium">Map Placeholder</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl mb-4">Finding Your Way</h3>
              <p className="text-gray-700 mb-6">
                Villa Morgenthau is conveniently located just outside the charming village of [Village Name], approximately [X] kilometers from [Nearest City]. The villa is nestled in a peaceful natural setting, offering stunning views and tranquility while remaining accessible.
              </p>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Address:</h4>
                <p className="text-gray-700">
                  Villa Morgenthau<br />
                  Morgenthau Street 123<br />
                  10115 Berlin<br />
                  Germany
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">GPS Coordinates:</h4>
                <p className="text-gray-700">
                  Latitude: XX.XXXXX<br />
                  Longitude: XX.XXXXX
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-4">Transportation Options</h3>
              <div className="mb-6">
                <h4 className="font-medium mb-2">By Car:</h4>
                <p className="text-gray-700">
                  From [Nearest Major City], take the [Highway Name/Number] for approximately [X] kilometers. Exit at [Exit Name/Number] and follow the signs to [Village Name]. Detailed driving directions will be provided after booking.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">By Train:</h4>
                <p className="text-gray-700">
                  The nearest train station is in [Nearest Station], approximately [X] kilometers from the villa. Taxi services and car rentals are available at the station.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">By Air:</h4>
                <p className="text-gray-700">
                  The nearest airport is [Nearest Airport], approximately [X] kilometers from Villa Morgenthau. Car rental services are available at the airport, or we can arrange a private transfer upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Surroundings Section */}
      <section className="section-padding bg-villa-muted">
        <div className="container-custom">
          <SectionTitle subtitle="SURROUNDINGS" centered>
            Explore the Area
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Village', 'Nature', 'Culture', 'Dining'].map((category, index) => (
              <div key={index} className="feature-card">
                <img 
                  src="/placeholder.svg" 
                  alt={`${category} near Villa Morgenthau`} 
                  className="w-full h-48 object-cover mb-4 rounded-sm"
                />
                <h3 className="font-serif text-xl mb-3">{category}</h3>
                <p className="text-gray-700">
                  {category === 'Village' && 'The charming village of [Village Name] is just a short walk away, offering local shops, cafes, and a glimpse into authentic local life.'}
                  {category === 'Nature' && 'Explore breathtaking natural landscapes, including forests, lakes, and mountains, all within easy reach of Villa Morgenthau.'}
                  {category === 'Culture' && 'Discover the rich cultural heritage of the region through museums, historic sites, and local festivals throughout the year.'}
                  {category === 'Dining' && 'Savor local cuisine at nearby restaurants and wineries, offering everything from traditional dishes to gourmet experiences.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Location;
