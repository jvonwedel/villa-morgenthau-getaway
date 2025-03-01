
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
          alt="Villa Morgenthau Booking" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-2xl mx-auto text-center text-white">
          <span className="text-sm uppercase tracking-widest text-villa-accent mb-2 inline-block">
            RESERVE YOUR DATES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Book Your Stay at Villa Morgenthau
          </h2>
          <p className="text-lg mb-8">
            Experience the perfect vacation in our historic villa. Check availability and reserve your dates now for an unforgettable stay.
          </p>
          <Link to="/booking" className="btn-primary bg-white text-villa-dark hover:bg-villa-accent">
            Check Availability
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Booking;
