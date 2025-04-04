
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
          element.scrollIntoView({ behavior: 'smooth' });
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
    </Layout>
  );
};

export default Location;
