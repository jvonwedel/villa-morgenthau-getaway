
import Layout from '../components/layout/Layout';
import CalmHeader from '../components/seekingCalm/CalmHeader';
import CalmContent from '../components/seekingCalm/CalmContent';
import CalmActivities from '../components/seekingCalm/CalmActivities';

const SeekingCalm = () => {
  return (
    <Layout>
      <CalmHeader />
      <CalmContent />
      <CalmActivities />
    </Layout>
  );
};

export default SeekingCalm;
