import { useState } from 'react';
import TemplatePageLayout from '../components/TemplatePageLayout';
import TemplateCard from '../components/TemplateCard';
import CardGrid from '../components/CardGrid';
import { mockPatents } from '../lib/mockData';

const filters = {
  'Type': ['Quantum', 'AI', 'Blockchain', 'Optical', 'Biotech'],
  'Technology': ['Computing', 'Machine Learning', 'Security', 'Hardware', 'Medical'],
  'Risk Level': ['Muito Alto', 'Alto', 'Médio'],
};

function PatentsPage() {
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

  const filteredItems = mockPatents.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(searchValue.toLowerCase());

    if (!matchesSearch) return false;

    const activeFilters = Object.keys(selectedFilters).filter(
      (key) => selectedFilters[key].length > 0
    );
    if (activeFilters.length === 0) return true;

    return item.badge && selectedFilters['Risk Level']?.includes(item.badge.label);
  });

  return (
    <TemplatePageLayout
      title="Patents"
      subtitle="Search and explore our patent portfolio"
      filters={filters}
      items={filteredItems}
    >
      <CardGrid>
        {filteredItems.map((item) => (
          <TemplateCard
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            tags={item.tags}
            badge={item.badge}
            onViewMore={() => console.log('View more:', item.title)}
          />
        ))}
      </CardGrid>
    </TemplatePageLayout>
  );
}

export default PatentsPage;
