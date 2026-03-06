import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { ApiItem } from '../lib/api';
import './CategoryPageLayout.css';

interface CategoryPageLayoutProps {
  title: string;
  fetchFunction: () => Promise<ApiItem[]>;
}

function CategoryPageLayout({ title, fetchFunction }: CategoryPageLayoutProps) {
  const [items, setItems] = useState<ApiItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchFunction();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="category-page">
      <div className="category-page-header">
        <h1 className="category-page-title">{title}</h1>
      </div>

      <div className="category-page-content">
        {loading ? (
          <div className="loading-state">Loading items...</div>
        ) : error ? (
          <div className="error-state">Error: {error}</div>
        ) : items.length === 0 ? (
          <div className="empty-state">No items available</div>
        ) : (
          <div className="items-grid">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPageLayout;
