import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchSustainableTechnologies } from '../lib/api';

function SustainableTechnologiesPage() {
  return <CategoryPageLayout title="Sustainable Technologies" fetchFunction={fetchSustainableTechnologies} />;
}

export default SustainableTechnologiesPage;
