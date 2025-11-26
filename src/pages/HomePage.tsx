import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CategoriesGrid from '../components/CategoriesGrid';

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <SearchBar />
      <CategoriesGrid />
    </div>
  );
}

export default HomePage;
