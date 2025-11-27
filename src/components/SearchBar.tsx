import { Search } from 'lucide-react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Descubra novas tecnologias"
        />
        <Search className="search-icon" size={20} />
      </div>
    </div>
  );
}

export default SearchBar;
