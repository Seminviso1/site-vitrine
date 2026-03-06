<<<<<<< HEAD
import { useState } from 'react';
import TemplatePageLayout from '../components/TemplatePageLayout';
import TemplateCard from '../components/TemplateCard';
import { api } from '../lib/api';

const filters = {
  'Type': ['Quantum', 'AI', 'Blockchain', 'Optical', 'Biotech'],
  'Technology': ['Computing', 'Machine Learning', 'Security', 'Hardware', 'Medical'],
  'Risk Level': ['Muito Alto', 'Alto', 'Médio'],
};

function PatentsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({}); //testar isso aqui dps


  return (
    <TemplatePageLayout
      title="Patentes"
      subtitle="Pesquise e explore nosso portfólio de patentes"
      filters={filters}
      items={filteredItems}
    >
        {filteredItems.map((item) => (
          <TemplateCard
            key={item.id}
            title={item.title}
            name={item.name}
            onViewMore={() => console.log('Veja mais:', item.title)}
          />
        ))}
    </TemplatePageLayout>
  );
=======
import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchPatents } from '../services/api';

function PatentsPage() {
  return <CategoryPageLayout title="Patents" fetchFunction={fetchPatents} />;
>>>>>>> 47a48b321c7d2253a54f24aafeedc6b566704045
}

export default PatentsPage;
