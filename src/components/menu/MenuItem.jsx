// src/components/menu/MenuItem.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, Camera, Leaf, Wheat, Check } from 'lucide-react';

const MenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Format price display with enhanced styling
  const formatPrice = (price) => {
    if (typeof price === 'object') {
      return (
        <div className="flex flex-col text-left space-y-1">
          {price.glass && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-base flex items-center gap-1.5"
            >
              <span className="text-muted text-sm">כוס</span> 
              <span className="font-medium">₪{price.glass}</span>
            </motion.span>
          )}
          {price.bottle && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1 } }}
              className="text-base flex items-center gap-1.5"
            >
              <span className="text-muted text-sm">בקבוק</span> 
              <span className="font-medium">₪{price.bottle}</span>
            </motion.span>
          )}
        </div>
      );
    }
    return (
      <span className="text-lg font-medium text-gold bg-gold/5 px-3 py-1 rounded-full">
        ₪{price}
      </span>
    );
  };

  // Dietary badge color mapping with enhanced styling
  const getDietaryBadgeClasses = (diet) => {
    const colorMap = {
      'Vegan': 'bg-green-500/10 text-green-600 border border-green-500/30',
      'Vegetarian': 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30',
      'Gluten Free': 'bg-amber-500/10 text-amber-600 border border-amber-500/30',
      'Kosher': 'bg-blue-500/10 text-blue-600 border border-blue-500/30',
      'Dairy': 'bg-purple-500/10 text-purple-600 border border-purple-500/30',
      'Spicy': 'bg-red-500/10 text-red-600 border border-red-500/30',
      'Organic': 'bg-lime-500/10 text-lime-600 border border-lime-500/30',
    };
    return colorMap[diet] || 'bg-muted/10 text-muted border border-muted/30';
  };

  // Get appropriate icon for dietary type
  const getDietaryIcon = (diet) => {
    switch(diet) {
      case 'Vegan':
        return <Leaf className="w-3 h-3 mr-1" />;
      case 'Vegetarian':
        return <Leaf className="w-3 h-3 mr-1" />;
      case 'Gluten Free':
        return <Wheat className="w-3 h-3 mr-1" />;
      case 'Kosher':
        return <Check className="w-3 h-3 mr-1" />;
      case 'Organic':
        return <Leaf className="w-3 h-3 mr-1" />;
      default:
        return null;
    }
  };

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  // Content expansion animation variants
  const expandVariants = {
    collapsed: { height: 0, opacity: 0, overflow: "hidden" },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        height: { duration: 0.3 },
        opacity: { duration: 0.2, delay: 0.1 }
      }
    }
  };

  // Determine if we should show the image on the left
  const hasImage = item.image || item.imageComingSoon;

  return (
    <div className="relative pt-2 pr-2 h-full">
      {/* Main card container with fixed height */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        exit="exit"
        className={`
          bg-background border border-border rounded-lg p-4 
          hover:shadow-elegant transition-all duration-300 
          group relative h-full flex flex-col
          ${isExpanded ? 'shadow-elegant' : ''}
        `}
      >
        <div className="flex flex-row items-start flex-1">
          {/* Content section with fixed heights */}
          <div className={`flex-1 ${hasImage ? 'ml-4' : ''} flex flex-col h-full`}>
            {/* Main content area */}
            <div className="flex flex-col flex-1">
              {/* Name and dietary badges in the same row - fixed height */}
              <div className="flex items-center flex-wrap mb-1 min-h-10">
                <motion.h3 
                  className="text-lg font-semibold text-text group-hover:text-accent transition-colors mr-2 flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                >
                  {item.name}
                  
                  {/* Dietary badges inline with name */}
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex gap-1 mr-1 items-center">
                      {item.dietary.map((diet, index) => (
                        <motion.div
                          key={diet}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            transition: { delay: 0.1 + (index * 0.05) } 
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.2 }
                          }}
                          className={`
                            inline-flex items-center justify-center text-xs px-1.5 py-0.5
                            rounded-full
                            ${getDietaryBadgeClasses(diet)}
                          `}
                          title={`${diet} dish`}
                        >
                          {getDietaryIcon(diet)}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.h3>
              </div>
              
              {/* Description with fixed height */}
              <div className="mb-2 min-h-16 flex-1">
                {item.description ? (
                  item.description.length > 80 && !isExpanded ? (
                    <>
                      <p className="text-muted text-sm line-clamp-2">
                        {item.description.slice(0, 80)}...
                      </p>
                      <button 
                        onClick={() => setIsExpanded(true)}
                        className="text-accent text-xs flex items-center group mt-1 focus:outline-none"
                      >
                        <span className="mr-1 group-hover:underline">קרא עוד</span>
                        <ChevronDown size={12} className="transition-transform group-hover:translate-y-0.5" />
                      </button>
                    </>
                  ) : (
                    <AnimatePresence mode="wait">
                      {isExpanded ? (
                        <motion.div
                          key="expanded"
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          variants={expandVariants}
                        >
                          <p className="text-muted text-sm">{item.description}</p>
                          <button 
                            onClick={() => setIsExpanded(false)}
                            className="text-accent text-xs flex items-center group mt-1 focus:outline-none"
                          >
                            <span className="mr-1 group-hover:underline">הצג פחות</span>
                            <ChevronDown size={12} className="rotate-180 transition-transform group-hover:-translate-y-0.5" />
                          </button>
                        </motion.div>
                      ) : (
                        <motion.p 
                          key="normal"
                          className="text-muted text-sm"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  )
                ) : (
                  // Empty placeholder for when no description is provided
                  <div className="min-h-8"></div>
                )}
              </div>
              
              {/* Price with Chef's recommendation - fixed height */}
              <div className="flex items-center mt-auto min-h-10">
                <div>{formatPrice(item.price)}</div>
                
                {/* Chef's recommendation badge - now near the price */}
                {item.special && (
                  <motion.div 
                    className="mr-2 bg-accent text-background rounded-full flex items-center shadow-sm"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                  >
                    <div className="flex items-center gap-1 px-2 py-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span className="text-xs font-medium">מומלץ השף</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Image section - fixed dimensions */}
          <div className="w-24 h-24 flex-shrink-0">
            {item.image ? (
              <motion.div 
                className="h-full w-full relative overflow-hidden rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : hasImage ? (
              <div className="h-full w-full bg-border/40 rounded-md flex items-center justify-center text-muted">
                <div className="text-center">
                  <Camera className="mx-auto h-6 w-6 mb-1 opacity-50" />
                  <span className="text-xs">תמונה בקרוב</span>
                </div>
              </div>
            ) : (
              // Empty placeholder when no image is shown at all
              <div className="h-full w-full opacity-0"></div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuItem;