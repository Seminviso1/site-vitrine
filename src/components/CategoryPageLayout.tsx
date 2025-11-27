import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { fetchApi } from '../lib/api';
import './CategoryPageLayout.css';

interface Item {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface CategoryPageLayoutProps {
  title: string;
  endpoint: string;
}

function CategoryPageLayout({ title, endpoint }: CategoryPageLayoutProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchItems();
  }, [endpoint]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchApi(endpoint);
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
