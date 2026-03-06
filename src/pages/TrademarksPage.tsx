import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchTrademarks } from '../lib/api';

function TrademarksPage() {
  return <CategoryPageLayout title="Trademarks" fetchFunction={fetchTrademarks} />;
}

export default TrademarksPage;
