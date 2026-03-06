import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchHardwareCircuits } from '../services/api';

function HardwareCircuitsPage() {
  return <CategoryPageLayout title="Hardware & Circuits" fetchFunction={fetchHardwareCircuits} />;
}

export default HardwareCircuitsPage;
