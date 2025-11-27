import { X } from 'lucide-react';
import './FilterPanel.css';

export interface FilterOptions {
  [category: string]: string[];
}

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  selectedFilters: FilterOptions;
  onFilterChange: (category: string, value: string, checked: boolean) => void;
}

function FilterPanel({
  isOpen,
  onClose,
  filters,
  selectedFilters,
  onFilterChange,
}: FilterPanelProps) {
  return (
    <>
      {isOpen && <div className="filter-overlay" onClick={onClose} />}
      <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
        <div className="filter-panel-header">
          <h2 className="filter-panel-title">Filters</h2>
          <button className="filter-panel-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="filter-panel-content">
          {Object.entries(filters).map(([category, options]) => (
            <div key={category} className="filter-group">
              <h3 className="filter-group-title">{category}</h3>
              <div className="filter-group-items">
                {options.map((option) => (
                  <label key={option} className="filter-checkbox-label">
                    <input
                      type="checkbox"
                      className="filter-checkbox"
                      checked={selectedFilters[category]?.includes(option) || false}
                      onChange={(e) => onFilterChange(category, option, e.target.checked)}
                    />
                    <span className="checkbox-custom" />
                    <span className="checkbox-label">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FilterPanel;
