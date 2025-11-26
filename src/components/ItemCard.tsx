import './ItemCard.css';

interface ItemCardProps {
  image: string;
  title: string;
  description: string;
}

function ItemCard({ image, title, description }: ItemCardProps) {
  return (
    <div className="item-card">
      <div className="item-card-image-wrapper">
        <img src={image} alt={title} className="item-card-image" />
        <div className="item-card-overlay" />
      </div>
      <div className="item-card-content">
        <h3 className="item-card-title">{title}</h3>
        <p className="item-card-description">{description}</p>
      </div>
    </div>
  );
}

export default ItemCard;
