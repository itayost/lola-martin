import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect, useMemo } from 'react';
import { Sun, Moon, Fish, Wine, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';

const MenuTabs = ({ 
  activeTab, 
  setActiveTab, 
  onTabChange 
}) => {
  const [ref, inView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  const scrollContainerRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    showScrollButtons: false,
    showLeftScroll: false,
    showRightScroll: false
  });

  // Memoized tabs with enhanced structure
  const tabs = useMemo(() => [
    { 
      id: 'lunch', 
      label: 'צהריים', 
      icon: Sun,
      description: 'מנות צהריים קלילות וטעימות',
      colorClass: 'from-primaryDark to-primary'
    },
    { 
      id: 'dinner', 
      label: 'ערב', 
      icon: Moon,
      description: 'מנות עומק עשירות בטעמים',
      colorClass: 'from-card to-primaryDark'
    },
    { 
      id: 'sushi', 
      label: 'סושי', 
      icon: Fish,
      description: 'סושי טרי מהדגים הטובים ביותר',
      colorClass: 'from-accent/30 to-accent/60'
    },
 []);

  // Improved scroll management
  useEffect(() => {
    const checkScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
      const isScrollable = scrollWidth > clientWidth;
      
      setScrollState({
        showScrollButtons: isScrollable,
        showLeftScroll: scrollLeft > 0,
        showRightScroll: scrollLeft < scrollWidth - clientWidth - 5
      });
    };

    // Initial and delayed checks
    checkScroll();
    const resizeObserver = new ResizeObserver(checkScroll);
    
    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Enhanced scroll functions with more precise scrolling
  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const tabElement = container.querySelector('.menu-tab');
    const tabWidth = tabElement ? tabElement.offsetWidth : 160;
    const gap = 16; // tailwind gap-4
    const scrollAmount = tabWidth + gap;
    
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Tab change handler with optional callback
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="relative mb-16 menu-tabs-container"
    >
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Scroll Left Button */}
        <AnimatePresence>
          {scrollState.showScrollButtons && scrollState.showLeftScroll && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                h-10 w-10 flex items-center justify-center 
                rounded-full bg-card/80 backdrop-blur-sm 
                border border-border/50 shadow-md 
                hover:bg-card/90 focus:ring-2 focus:ring-gold"
              onClick={() => scroll('left')}
              aria-label="גלול שמאלה"
            >
              <ChevronLeft className="h-5 w-5 text-gold" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Scrollable Tabs Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto hide-scrollbar scroll-smooth"
        >
          <div className="flex space-x-4 py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    menu-tab
                    relative
                    flex flex-col items-center justify-center
                    w-44 h-28
                    rounded-xl
                    border border-transparent
                    transition-all duration-300
                    group
                    ${isActive 
                      ? 'bg-gradient-to-br ' + tab.colorClass + ' text-white shadow-elegant' 
                      : 'bg-card/50 backdrop-blur-sm text-muted hover:bg-card/70'}
                  `}
                  aria-selected={isActive}
                  role="tab"
                >
                  {/* Background Overlay for non-active state */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-card/50 backdrop-blur-sm rounded-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  )}
                  
                  {/* Icon and Label Container */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <Icon 
                      className={`
                        h-7 w-7 mb-2 
                        ${isActive 
                          ? 'text-white' 
                          : 'text-gold group-hover:text-accent'}
                      `} 
                    />
                    <span className="font-semibold text-center">
                      {tab.label}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Scroll Right Button */}
        <AnimatePresence>
          {scrollState.showScrollButtons && scrollState.showRightScroll && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                h-10 w-10 flex items-center justify-center 
                rounded-full bg-card/80 backdrop-blur-sm 
                border border-border/50 shadow-md 
                hover:bg-card/90 focus:ring-2 focus:ring-gold"
              onClick={() => scroll('right')}
              aria-label="גלול ימינה"
            >
              <ChevronRight className="h-5 w-5 text-gold" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Gradient Fade Effects */}
        {scrollState.showScrollButtons && (
          <>
            {scrollState.showLeftScroll && (
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            )}
            {scrollState.showRightScroll && (
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            )}
          </>
        )}
      </div>

      {/* Subtle Divider */}
      <div className="mt-8 border-b border-border/50 max-w-5xl mx-auto"></div>
    </motion.div>
  );
};

export default MenuTabs;