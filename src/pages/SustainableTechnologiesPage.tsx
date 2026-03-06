import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchSustainableTechnologies } from '../services/api';

function SustainableTechnologiesPage() {
  return <CategoryPageLayout title="Sustainable Technologies" fetchFunction={fetchSustainableTechnologies} />;
}

export default SustainableTechnologiesPage;
