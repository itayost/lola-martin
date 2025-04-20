// src/components/menu/MenuItem.jsx - Simplified version
import { FaLeaf, FaBreadSlice, FaCarrot, FaUtensils } from 'react-icons/fa';
import { getHebrewDietary, getHebrewSpecialTag, formatPrice } from '../../utils/hebrewTranslations';

// Icon mapping for dietary indicators
const iconMap = {
  vegan: {
    Icon: FaLeaf,
    color: 'text-green-600',
    description: 'טבעוני'
  },
  'gluten-free': {
    Icon: FaBreadSlice,
    color: 'text-amber-700',
    description: 'ללא גלוטן'
  },
  'vegetarian': {
    Icon: FaCarrot,
    color: 'text-orange-500',
    description: 'צמחוני'
  },
  default: {
    Icon: FaUtensils,
    color: 'text-lightMuted',
    description: 'פריט מזון'
  }
};

const MenuItem = ({ item }) => {
  const { 
    name, 
    price, 
    description, 
    image, 
    special,
    recommended,
    dietary = []
  } = item;

  // Get appropriate icon for a dietary tag
  const getDietaryInfo = (tag) => {
    // First translate the dietary tag
    const hebrewTag = getHebrewDietary(tag);
    
    // Normalize tag for lookup
    const normalizedTag = tag.toLowerCase().replace(/\s+/g, '-');
    
    // Try exact match
    if (iconMap[normalizedTag]) {
      return {
        ...iconMap[normalizedTag],
        description: hebrewTag
      };
    }
    
    // Try partial match
    const partialMatch = Object.keys(iconMap).find(key => 
      normalizedTag.includes(key) || key.includes(normalizedTag)
    );
    
    // Return match or default
    return partialMatch ? {
      ...iconMap[partialMatch],
      description: hebrewTag
    } : {
      ...iconMap.default,
      description: hebrewTag
    };
  };

  // Format the price display
  const renderPrice = () => {
    if (typeof price === 'object') {
      return (
        <div className="text-accent text-left">
          {price.bottle && <div>בקבוק: ₪{price.bottle}</div>}
          {price.glass && <div>כוס: ₪{price.glass}</div>}
        </div>
      );
    } else {
      return (
        <div className="text-accent">
          {item.originalPrice ? (
            <div>
              <span className="line-through text-lightMuted mr-2">₪{item.originalPrice}</span>
              ₪{price}
            </div>
          ) : (
            <div>₪{price}</div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="grid grid-cols-[1fr_128px] bg-card rounded-2xl overflow-hidden border border-border shadow-subtle hover:shadow-elegant transition-shadow dir-rtl h-32 relative">
      {/* Text Content */}
      <div className="p-4 relative h-full">
        {/* Name and dietary icons */}
        <div className="flex items-center overflow-hidden">
          <h3 className="text-base font-semibold text-text inline-flex items-center truncate max-w-full">
            <span className="truncate">{name}</span>
            {dietary.length > 0 && (
              <span className="flex items-center mr-2 shrink-0">
                {dietary.map((tag) => {
                  const { Icon, color, description } = getDietaryInfo(tag);
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center mr-1 shrink-0"
                      title={description}
                    >
                      <Icon className={`w-4 h-4 ${color}`} />
                    </span>
                  );
                })}
              </span>
            )}
          </h3>
        </div>
        
        {/* Description */}
        <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 text-center">
          {description && (
            <p className="text-sm text-muted line-clamp-2">
              {description}
            </p>
          )}
        </div>
        
        {/* Price */}
        <div className="absolute bottom-4 right-4 text-base font-medium text-text">
          {renderPrice()}
        </div>
      </div>
      
      {/* Image */}
      <div className="w-32 h-32 relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-primaryDark flex items-center justify-center">
            <span className="text-muted">אין תמונה</span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {/* Special badge */}
          {special && (
            <div className="bg-gold/20 text-goldDark text-xs px-2 py-0.5 rounded-full">
              {getHebrewSpecialTag('Special')}
            </div>
          )}
          
          {/* Recommended badge */}
          {recommended && (
            <div className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full">
              {getHebrewSpecialTag('Recommended')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;