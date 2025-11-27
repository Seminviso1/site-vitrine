import { useState } from 'react';
import { Search, Sliders } from 'lucide-react';
import './SearchSection.css';

interface SearchSectionProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onFilterClick: () => void;
}

function SearchSection({ searchValue, onSearchChange, onFilterClick }: SearchSectionProps) {
  return (
    <div className="search-section">
      <div className="search-container">
        <div className="search-bar-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-bar"
            placeholder="Search by name, technology, category…"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <button className="filter-button" onClick={onFilterClick}>
          <Sliders size={18} />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
}

export default SearchSection;
