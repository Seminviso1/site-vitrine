import { ChevronRight } from 'lucide-react';
import './TemplateCard.css';

// interface Tag {
//   label: string;
//   color?: 'blue' | 'purple' | 'red' | 'orange' | 'green';
// }

interface TemplateCardProps {
  title: string;
  researcher: string;
  name: string;
  // tags?: Tag[];
  onViewMore?: () => void;
}

function TemplateCard({
  title,
  researcher,
  name,
  onViewMore,
}: TemplateCardProps) {
  return (
    <div className="template-card">

      <div className="template-card-content">
        <div className="template-card-header">
          <div>
            <h3 className="template-card-title">{title}</h3>
            {researcher && <p className="template-card-subtitle">{researcher}</p>}
          </div>
        </div>

        <p className="template-card-description">{name}</p>

        {/* {tags.length > 0 && (
          <div className="template-card-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className={`template-card-tag tag-${tag.color || 'blue'}`}>
                <span className="tag-dot" />
                {tag.label}
              </span>
            ))}
          </div>
        )} */}

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
