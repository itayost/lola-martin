// src/components/menu/MenuItems.jsx
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';

const MenuItems = ({ items, activeTab }) => {
  const categorizeItems = (menuItems) => {
    const categorized = {};
    
    menuItems.forEach(item => {
      if (item.category) {
        if (!categorized[item.category]) {
          categorized[item.category] = [];
        }
        categorized[item.category].push(item);
      } else {
        if (!categorized['General']) {
          categorized['General'] = [];
        }
        categorized['General'].push(item);
      }
    });
    
    return categorized;
  };

  const categorizedItems = categorizeItems(items);
  const categories = Object.keys(categorizedItems);

  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center py-16 bg-card/50 rounded-lg shadow-sm"
      >
        <p className="text-muted text-lg">
          לא נמצאו מנות תואמות. נסה חיפוש אחר
        </p>
      </motion.div>
    );
  }

  return (
    <div 
      key={activeTab}
      className="space-y-12 mb-12"
    >
      {categories.map(category => (
        <div key={category} className="space-y-6">
          <h2 className="text-2xl font-bold text-text border-b border-border pb-2 mb-6">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {categorizedItems[category].map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuItem item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;