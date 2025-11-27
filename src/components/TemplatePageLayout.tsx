import { useState } from 'react';
import PageHeader from './PageHeader';
import SearchSection from './SearchSection';
import FilterPanel, { FilterOptions } from './FilterPanel';
import CardGrid from './CardGrid';
import './TemplatePageLayout.css';

export interface TemplateItem {
  id: string;
  image?: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: Array<{ label: string; color?: string }>;
  badge?: { label: string; color?: string };
}

interface TemplatePageLayoutProps {
  title: string;
  subtitle?: string;
  items: TemplateItem[];
  filters?: FilterOptions;
  children?: React.ReactNode;
}

function TemplatePageLayout({
  title,
  subtitle,
  items,
  filters = {},
  children,
}: TemplatePageLayoutProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({});

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

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(searchValue.toLowerCase());

    if (!matchesSearch) return false;

    const activeFilters = Object.keys(selectedFilters).filter(
      (key) => selectedFilters[key].length > 0
    );

    if (activeFilters.length === 0) return true;

    return activeFilters.some((category) => {
      const itemFilters = item[category as keyof typeof item];
      if (Array.isArray(itemFilters)) {
        return itemFilters.some((f) =>
          selectedFilters[category].includes(
            typeof f === 'string' ? f : (f as any).label
          )
        );
      }
      return false;
    });
  });

  return (
    <div className="template-page-layout">
      <PageHeader title={title} subtitle={subtitle} />
      <SearchSection
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onFilterClick={() => setIsFilterOpen(!isFilterOpen)}
      />

      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />

      <div className="template-page-main">
        <div className="template-page-content">
          <CardGrid>
            {children || (
              <>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <div key={item.id}>{item.title}</div>
                  ))
                ) : (
                  <div className="empty-state">No items found</div>
                )}
              </>
            )}
          </CardGrid>
        </div>
      </div>
    </div>
  );
}

export default TemplatePageLayout;
