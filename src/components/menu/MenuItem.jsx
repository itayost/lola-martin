// MenuItem.jsx – Two-Column Layout with Custom Palette
import { FaLeaf, FaBreadSlice, FaCarrot, FaUtensils } from 'react-icons/fa';
import Image from '../ui/Image';

const iconMap = {
  vegan: {
    Icon: FaLeaf,
    color: 'text-green-600',
    description: 'Vegan'
  },
  'gluten-free': {
    Icon: FaBreadSlice,
    color: 'text-amber-700',
    description: 'Gluten-Free'
  },
  'vegetarian': {
    Icon: FaCarrot,
    color: 'text-orange-500',
    description: 'Vegetarian'
  },
  default: {
    Icon: FaUtensils,
    color: 'text-lightMuted',
    description: 'Food Item'
  }
};

const MenuItem = ({ item }) => {
  const { 
    name, 
    price, 
    description, 
    image, 
    recommended,
    dietary = []
  } = item;

  // Function to get the appropriate icon and color for a dietary tag
  const getDietaryInfo = (tag) => {
    const normalizedTag = tag.toLowerCase().replace(/\s+/g, '-');
    
    if (iconMap[normalizedTag]) {
      return iconMap[normalizedTag];
    }
    
    const partialMatch = Object.keys(iconMap).find(key => 
      normalizedTag.includes(key) || key.includes(normalizedTag)
    );
    
    return partialMatch ? iconMap[partialMatch] : iconMap.default;
  };

  return (
    <div className="grid grid-cols-[1fr_128px] bg-card rounded-2xl overflow-hidden border border-border shadow-subtle hover:shadow-elegant transition-shadow dir-rtl h-32 relative">
      {/* First Column: Text Content */}
      <div className="p-4 flex flex-col h-full">
        {/* First Row: Name and Icons */}
        <div className="flex justify-between items-center">
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
        </div>
        
        {/* Second Row: Description - with flex-grow to take available space */}
        <div className="flex-grow overflow-hidden my-1">
          {description && (
            <p className="text-sm text-muted line-clamp-2 text-center">
              {description}
            </p>
          )}
        </div>
        
        {/* Price at the bottom - fixed position */}
        <div className="text-base font-medium text-text text-right mt-auto">
          ₪{price}
        </div>
      </div>
      
      {/* Second Column: Image - ensure full coverage */}
      <div className="w-32 h-32 relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            width={128}
            height={128}
            layout="responsive"
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full bg-primaryDark flex items-center justify-center">
            <span className="text-muted">No Image</span>
          </div>
        )}
        {recommended && (
          <div className="absolute top-2 right-2 bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full">
            מומלץ
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;