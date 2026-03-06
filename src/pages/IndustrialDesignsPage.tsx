import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchIndustrialDesigns } from '../lib/api';

function IndustrialDesignsPage() {
  return <CategoryPageLayout title="Industrial Designs" fetchFunction={fetchIndustrialDesigns} />;
}

export default IndustrialDesignsPage;
