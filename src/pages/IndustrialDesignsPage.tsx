import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchIndustrialDesigns } from '../services/api';

function IndustrialDesignsPage() {
  return <CategoryPageLayout title="Industrial Designs" fetchFunction={fetchIndustrialDesigns} />;
}

export default IndustrialDesignsPage;
