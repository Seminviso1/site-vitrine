import { useNavigate } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import './CategoriesGrid.css';

function CategoriesGrid() {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Patents',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/patents',
    },
    {
      title: 'Trademarks',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/trademarks',
    },
    {
      title: 'Industrial Designs',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
      path: '/industrial-designs',
    },
    {
      title: 'Software',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/software',
    },
    {
      title: 'Hardware & Circuits',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/hardware-circuits',
    },
    {
      title: 'Sustainable Technologies',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/sustainable-technologies',
    },
  ];

  return (
    <div className="categories-section">
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.path} onClick={() => navigate(category.path)}>
            <CategoryCard title={category.title} image={category.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesGrid;
