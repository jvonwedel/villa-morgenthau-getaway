
import Layout from '../components/layout/Layout';
import FamiliesHeader from '../components/forFamilies/FamiliesHeader';
import FamiliesContent from '../components/forFamilies/FamiliesContent';
import FamiliesActivities from '../components/forFamilies/FamiliesActivities';

const ForFamilies = () => {
  return (
    <Layout>
      <FamiliesHeader />
      <FamiliesContent />
      <FamiliesActivities />
    </Layout>
  );
};

export default ForFamilies;
