import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchSoftware } from '../lib/api';

function SoftwarePage() {
  return <CategoryPageLayout title="Software" fetchFunction={fetchSoftware} />;
}

export default SoftwarePage;
