import { useState } from 'react';
import TemplatePageLayout from '../components/TemplatePageLayout';
import TemplateCard from '../components/TemplateCard';
import CardGrid from '../components/CardGrid';
import { mockSoftware } from '../lib/mockData';

const filters = {
  'Type': ['Cloud', 'AI/ML', 'Security', 'Data', 'Integration', 'BI', 'API'],
  'Industry': ['Enterprise', 'Development', 'Analytics', 'DevOps', 'Research'],
  'Status': ['Muito Alto', 'Alto', 'Médio'],
};

function SoftwarePage() {
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

  const filteredItems = mockSoftware.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(searchValue.toLowerCase());

    if (!matchesSearch) return false;

    const activeFilters = Object.keys(selectedFilters).filter(
      (key) => selectedFilters[key].length > 0
    );
    if (activeFilters.length === 0) return true;

    return item.badge && selectedFilters['Status']?.includes(item.badge.label);
  });

  return (
    <TemplatePageLayout
      title="Software"
      subtitle="Explore software solutions and platforms"
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
}

export default SoftwarePage;
