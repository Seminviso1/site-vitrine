import CategoryCard from './CategoryCard';
import './CategoriesGrid.css';

function CategoriesGrid() {
  const categories = [
    {
      title: 'Patentes',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Marcas',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Desenhos industriais',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Software',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Topografia de circuito',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Indicações geográficas',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="categories-section">
      <div className="categories-grid">
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category.title} image={category.image} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesGrid;
