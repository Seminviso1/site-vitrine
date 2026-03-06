import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchSoftware } from '../services/api';

function SoftwarePage() {
  return <CategoryPageLayout title="Software" fetchFunction={fetchSoftware} />;
}

export default SoftwarePage;
