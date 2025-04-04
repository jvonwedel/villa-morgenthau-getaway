
import Layout from '../components/layout/Layout';
import LocationContent from '../components/location/LocationContent';
import LocationMap from '../components/location/LocationMap';
import LocationErholung from '../components/location/LocationErholung';
import LocationAktiv from '../components/location/LocationAktiv';
import LocationFamilien from '../components/location/LocationFamilien';
import LocationHeader from '../components/location/LocationHeader';

const Location = () => {
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
