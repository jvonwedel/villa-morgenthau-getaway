
import Layout from '../components/layout/Layout';
import StayHeader from '../components/yourStay/StayHeader';
import StayContent from '../components/yourStay/StayContent';
import StayAmenities from '../components/yourStay/StayAmenities';

const YourStay = () => {
  return (
    <Layout>
      <StayHeader />
      <StayContent />
      <StayAmenities />
    </Layout>
  );
};

export default YourStay;
