import CategoryPageLayout from '../components/CategoryPageLayout';

function PatentsPage() {
  return <CategoryPageLayout title="Patents" endpoint="/api/patents" />;
}

export default PatentsPage;
