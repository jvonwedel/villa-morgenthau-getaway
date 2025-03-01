
import Layout from '../components/layout/Layout';
import LocationHeader from '../components/location/LocationHeader';
import LocationContent from '../components/location/LocationContent';
import LocationMap from '../components/location/LocationMap';

const Location = () => {
  return (
    <Layout>
      <LocationHeader />
      <LocationContent />
      <LocationMap />
    </Layout>
  );
};

export default Location;
