import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchPatents } from '../services/api';

function PatentsPage() {
  return <CategoryPageLayout title="Patents" fetchFunction={fetchPatents} />;
}

export default PatentsPage;
