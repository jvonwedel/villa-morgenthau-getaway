
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img 
          src="/placeholder.svg" 
          alt="Villa Morgenthau Buchung" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-2xl mx-auto text-center text-white">
          <span className="text-sm uppercase tracking-widest text-villa-accent mb-2 inline-block">
            RESERVIEREN SIE IHRE DATEN
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Buchen Sie Ihren Aufenthalt in der Villa Morgenthau
          </h2>
          <p className="text-lg mb-8">
            Erleben Sie den perfekten Urlaub in unserer historischen Villa. Prüfen Sie die Verfügbarkeit und reservieren Sie jetzt Ihre Daten für einen unvergesslichen Aufenthalt.
          </p>
          <Link to="/booking" className="btn-primary bg-white text-villa-dark hover:bg-villa-accent">
            Verfügbarkeit prüfen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Booking;
