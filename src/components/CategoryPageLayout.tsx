import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import api from '../lib/api'
import './CategoryPageLayout.css';

interface Item {
  id: string;
  title: string;
  name: string;
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
  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get<Item[]>(endpoint);
      console.log("Dados da API UESC:", response.data);
      if (Array.isArray(response.data)) {
        setItems(response.data);
      } else {
        // Caso a API mude para um objeto no futuro
        console.warn("A API não retornou um array direto. Verifique a estrutura.");
        setItems([]);
      }
      
    } catch (err: any) {
      const mensagemErro = err.response?.data?.message || err.message || 'Erro ao carregar dados';
      setError(mensagemErro);
      console.error("Erro na requisição:", err);
    } finally {
      setLoading(false);
    }
  };

  if (endpoint) {
    fetchItems();
  }
}, [endpoint]);

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
                title={item.title}
                name={item.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPageLayout;
