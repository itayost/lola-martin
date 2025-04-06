// MenuItem.jsx – Wolt-style layout using Font Awesome dietary icons
import { FaLeaf, FaBreadSlice, FaCarrot } from 'react-icons/fa';
import Image from '../ui/Image';

const iconMap = {
  vegan: FaLeaf,
  'gluten-free': FaBreadSlice,
  vegetarian: FaCarrot,
};

const MenuItem = ({ item }) => {
  const { name, price, description, dietary = [], image, recommended } = item;

  return (
    <div className="rounded-2xl border border-border p-4 md:p-5 bg-card shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Textual content */}
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                {name}
              </h3>
              {recommended && (
                <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-medium">
                  מומלץ
                </span>
              )}
            </div>
            <span className="text-sm md:text-base font-medium text-muted-foreground whitespace-nowrap">
              ₪{price}
            </span>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>

          {dietary.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {dietary.map((tag) => {
                const Icon = iconMap[tag.toLowerCase()];
                return (
                  <div
                    key={tag}
                    className="flex items-center gap-1 text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {tag}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Image if exists */}
        {image && (
          <div className="w-full md:w-32 h-28 rounded-xl overflow-hidden shrink-0">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              width={128}
              height={112}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;