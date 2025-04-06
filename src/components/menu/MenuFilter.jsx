// src/components/menu/MenuFilter.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import Button from '../ui/Button';

const MenuFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  showFilters, 
  setShowFilters,
  priceRange,
  setPriceRange,
  categories,
  selectedCategories,
  setSelectedCategories,
  resetFilters
}) => {
  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const showResetButton = searchTerm || 
                         priceRange[0] > 0 || 
                         priceRange[1] < 300 || 
                         selectedCategories.length > 0;

  return (
    <div className="mb-8 bg-background rounded-xl p-5 shadow-elegant">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Search className="h-5 w-5 text-muted" />
          </div>
          <input
            type="text"
            placeholder="חפש מנות..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 py-2 rounded-lg border border-border bg-card text-text placeholder-muted focus:ring-2 focus:ring-accent transition-all duration-300"
          />
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="whitespace-nowrap"
          >
            <Filter className="h-4 w-4 ml-2" />
            סינון מתקדם
          </Button>
          
          {showResetButton && (
            <Button 
              onClick={resetFilters}
              variant="ghost"
              className="text-muted hover:text-accent"
            >
              <X className="h-4 w-4 ml-1" />
              נקה סינון
            </Button>
          )}
        </div>
      </div>
      
      {/* Advanced Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price Range Filter */}
                <div>
                  <h3 className="text-base font-medium mb-3">טווח מחירים</h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm text-muted">
                      <span>₪{priceRange[0]}</span>
                      <span>₪{priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      step="10"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <input
                      type="range"
                      min="0"
                      max="300"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                  </div>
                </div>
                
                {/* Categories Filter */}
                <div>
                  <h3 className="text-base font-medium mb-3">קטגוריות</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`
                          px-3 py-1 rounded-full text-sm transition-colors duration-200
                          ${selectedCategories.includes(category)
                            ? 'bg-accent text-background'
                            : 'bg-background/20 text-muted hover:bg-background/30'}
                        `}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuFilter;