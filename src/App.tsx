import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CategoriesGrid from './components/CategoriesGrid';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SearchBar />
      <CategoriesGrid />
    </div>
  );
}

export default App;
