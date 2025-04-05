
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import LocationContent from '../components/location/LocationContent';
import LocationMap from '../components/location/LocationMap';
import LocationErholung from '../components/location/LocationErholung';
import LocationAktiv from '../components/location/LocationAktiv';
import LocationFamilien from '../components/location/LocationFamilien';
import LocationHeader from '../components/location/LocationHeader';

const Location = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if there is a hash in the URL
    if (location.hash) {
      // Get the element by ID (without the # character)
      const element = document.getElementById(location.hash.substring(1));
      
      // If the element exists, scroll to it
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          // Get the navbar height to offset the scroll position
          const navbar = document.querySelector('header');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          
          // Calculate the element's position relative to the viewport
          const elementPosition = element.getBoundingClientRect().top;
          
          // Calculate the position to scroll to (element position + current scroll - navbar height)
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          // Scroll to the element with the offset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Layout>
      <LocationHeader />
      <LocationContent />
      <LocationMap />
      <LocationErholung />
      <LocationAktiv />
      <LocationFamilien />
      
      {/* Booking Button Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <a 
            href="https://www.airbnb.de/rooms/1305881991709578029"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Jetzt buchen
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Location;
