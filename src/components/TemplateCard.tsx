import { ChevronRight } from 'lucide-react';
import './TemplateCard.css';

interface Tag {
  label: string;
  color?: 'blue' | 'purple' | 'red' | 'orange' | 'green';
}

interface Badge {
  label: string;
  color?: 'red' | 'orange' | 'yellow' | 'green';
}

interface TemplateCardProps {
  image?: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: Tag[];
  badge?: Badge;
  onViewMore?: () => void;
}

function TemplateCard({
  image,
  title,
  subtitle,
  description,
  tags = [],
  badge,
  onViewMore,
}: TemplateCardProps) {
  return (
    <div className="template-card">
      {image && (
        <div className="template-card-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="template-card-content">
        <div className="template-card-header">
          <div>
            <h3 className="template-card-title">{title}</h3>
            {subtitle && <p className="template-card-subtitle">{subtitle}</p>}
          </div>
          {badge && (
            <span className={`template-card-badge badge-${badge.color || 'orange'}`}>
              {badge.label}
            </span>
          )}
        </div>

        <p className="template-card-description">{description}</p>

        {tags.length > 0 && (
          <div className="template-card-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className={`template-card-tag tag-${tag.color || 'blue'}`}>
                <span className="tag-dot" />
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {onViewMore && (
          <div className="template-card-footer">
            <button className="view-more-button" onClick={onViewMore}>
              See more
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TemplateCard;
