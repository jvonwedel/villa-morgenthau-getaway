import { Link } from 'react-router-dom';

const Booking = () => {
  return <section className="relative py-24">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-villa-dark"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-2xl mx-auto text-center text-white">
          <span className="text-sm uppercase tracking-widest text-villa-accent mb-2 inline-block">
            JETZT BUCHEN!
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif mb-6 md:text-2xl">
            Buche jetzt deinen Urlaub in der Villa Morgenthau
          </h2>
          <p className="text-lg mb-8">
            Verbringe eine unvergessliche Zeit in unserer historischen Villa Morgenthau und reserviere deinen Aufenthalt jetzt!
          </p>
          <a 
            href="https://www.airbnb.de/rooms/1305881991709578029" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary bg-white text-villa-dark hover:bg-villa-accent"
          >
            Verfügbarkeit prüfen
          </a>
        </div>
      </div>
    </section>;
};

export default Booking;
