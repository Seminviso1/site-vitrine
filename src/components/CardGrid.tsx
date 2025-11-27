import './CardGrid.css';

interface CardGridProps {
  children: React.ReactNode;
}

function CardGrid({ children }: CardGridProps) {
  return <div className="card-grid">{children}</div>;
}

export default CardGrid;
