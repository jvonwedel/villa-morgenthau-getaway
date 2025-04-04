
import Layout from '../components/layout/Layout';
import LocationContent from '../components/location/LocationContent';
import LocationMap from '../components/location/LocationMap';
import LocationGallery from '../components/location/LocationGallery';

const Location = () => {
  return (
    <Layout>
      <LocationContent />
      <LocationMap />
      <LocationGallery />
    </Layout>
  );
};

export default Location;
