
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section className="section-padding bg-villa-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Villa Morgenthau Location" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-white p-5 rounded-sm shadow-lg hidden md:flex items-center">
                <MapPin className="text-villa-accent mr-2 h-5 w-5" />
                <p className="font-medium text-sm">Perfect Natural Setting</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle subtitle="WHERE WE ARE">
              Ideal Location
            </SectionTitle>
            <p className="text-gray-700 mb-6">
              Nestled in a pristine natural environment, Villa Morgenthau offers the perfect balance of seclusion and accessibility. Surrounded by lush forests and panoramic views, yet just a short drive from local attractions and amenities.
            </p>
            <p className="text-gray-700 mb-8">
              The nearby village provides charming shops and restaurants, while the surrounding area features hiking trails, lakes, and cultural sites to explore. Our location provides the ideal base for both relaxation and adventure.
            </p>
            <Link to="/location" className="btn-secondary">
              Discover Our Location
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
