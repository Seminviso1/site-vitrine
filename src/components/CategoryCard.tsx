import './CategoryCard.css';

interface CategoryCardProps {
  title: string;
  image: string;
}

function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="category-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <div className="card-overlay" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
