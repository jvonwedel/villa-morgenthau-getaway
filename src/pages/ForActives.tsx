
import Layout from '../components/layout/Layout';
import ActivesHeader from '../components/forActives/ActivesHeader';
import ActivesContent from '../components/forActives/ActivesContent';
import ActivesActivities from '../components/forActives/ActivesActivities';

const ForActives = () => {
  return (
    <Layout>
      <ActivesHeader />
      <ActivesContent />
      <ActivesActivities />
    </Layout>
  );
};

export default ForActives;
