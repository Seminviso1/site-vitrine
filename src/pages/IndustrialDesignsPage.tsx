<<<<<<< HEAD
import { useState } from 'react';
import TemplatePageLayout from '../components/TemplatePageLayout';
import TemplateCard from '../components/TemplateCard';
import { mockIndustrialDesigns } from '../lib/mockData';

const filters = {
  'Category': ['UX/UI', 'IoT', 'Aerospace', 'Wearable', 'Consumer'],
  'Material': ['Composite', 'Electronics', 'Polymer', 'Metal'],
  'Complexity': ['Muito Alto', 'Alto', 'Médio'],
};

function IndustrialDesignsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (!updated[category]) {
        updated[category] = [];
      }
      if (checked) {
        updated[category] = [...updated[category], value];
      } else {
        updated[category] = updated[category].filter((v) => v !== value);
      }
      return updated;
    });
  };

  const filteredItems = mockIndustrialDesigns.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(searchValue.toLowerCase());

    if (!matchesSearch) return false;

    const activeFilters = Object.keys(selectedFilters).filter(
      (key) => selectedFilters[key].length > 0
    );
    if (activeFilters.length === 0) return true;

    return item.badge && selectedFilters['Complexity']?.includes(item.badge.label);
  });

  return (
    <TemplatePageLayout
      title="Desenhos industriais"
      subtitle="Explore inovações de design industrial e protótipos"
      filters={filters}
      items={filteredItems}
    >
        {filteredItems.map((item) => (
          <TemplateCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            tags={item.tags}
            badge={item.badge}
            onViewMore={() => console.log('View more:', item.title)}
          />
        ))}
    </TemplatePageLayout>
  );
=======
import CategoryPageLayout from '../components/CategoryPageLayout';
import { fetchIndustrialDesigns } from '../services/api';

function IndustrialDesignsPage() {
  return <CategoryPageLayout title="Industrial Designs" fetchFunction={fetchIndustrialDesigns} />;
>>>>>>> 47a48b321c7d2253a54f24aafeedc6b566704045
}

export default IndustrialDesignsPage;
