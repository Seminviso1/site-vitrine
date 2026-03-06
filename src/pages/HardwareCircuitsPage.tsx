import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchHardwareCircuits } from '../lib/api';

function HardwareCircuitsPage() {
  return <CategoryPageLayout title="Hardware & Circuits" fetchFunction={fetchHardwareCircuits} />;
}

export default HardwareCircuitsPage;
