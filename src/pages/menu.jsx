// MenuPage.jsx with AnimatePresence for smooth tab/category animation
import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import menuData from '../data/menuData';
import MenuHero from '../components/menu/MenuHero';
import MenuTabs from '../components/menu/MenuTabs';
import MenuCategories from '../components/menu/MenuCategories';
import MenuCategoryTabs from '../components/menu/MenuCategoryTabs';
import MenuDownload from '../components/menu/MenuDownload';
import { LazyMotion, domAnimation, AnimatePresence, motion } from 'framer-motion';

const MenuPage = () => {
  const router = useRouter();
  const heroBottomRef = useRef(null);
  const menuItemsRef = useRef(null);
  const [activeTab, setActiveTab] = useState('lunch');
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentMenuData, setCurrentMenuData] = useState(menuData);

  // Updated effect to handle URL parameters properly
  useEffect(() => {
    if (!router.isReady) return;
    
    // Get tab and category from URL
    const { tab, category } = router.query;
    
    // Update tab state if it's valid
    if (tab && ['lunch', 'dinner', 'sushi'].includes(tab.toLowerCase())) {
      setActiveTab(tab.toLowerCase());
    }
    
    // Update category state if present
    if (category) {
      setActiveCategory(category);
    }
  }, [router.isReady, router.query]);

  // Update URL when tab or category changes
  useEffect(() => {
    if (!router.isReady) return;
    
    // Build query object
    const query = { tab: activeTab };
    if (activeCategory) {
      query.category = activeCategory;
    }
    
    // Update URL without full page reload
    router.replace(
      {
        pathname: router.pathname,
        query
      }, 
      undefined, 
      { shallow: true }
    );
  }, [activeTab, activeCategory, router.isReady]);

  const getCategories = useMemo(() => {
    const currentTabItems = currentMenuData[activeTab] || [];
    const uniqueCategories = [...new Set(currentTabItems.map(item => item.category))];
    return uniqueCategories.filter(Boolean);
  }, [currentMenuData, activeTab]);

  const categorizedItems = useMemo(() => {
    const categorized = {};
    let items = currentMenuData[activeTab] || [];
    if (activeCategory) {
      items = items.filter(item => item.category === activeCategory);
    }
    items.forEach(item => {
      const category = item.category || 'General';
      if (!categorized[category]) {
        categorized[category] = [];
      }
      categorized[category].push(item);
    });
    return categorized;
  }, [currentMenuData, activeTab, activeCategory]);

  const scrollToHeroBottom = () => {
    const headerHeight = 80;
    if (heroBottomRef.current) {
      const y = heroBottomRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Custom handlers to update both state and URL
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setActiveCategory(null);
    scrollToHeroBottom();
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    scrollToHeroBottom();
  };

  return (
    <div className="pt-20 bg-background text-foreground">
      <MenuHero />
      <div ref={heroBottomRef}></div>
      {/* Sticky filter tabs */}
      <div
        className="sticky top-[48px] md:top-[60px] z-30 bg-background/80 backdrop-blur border-b border-border space-y-1 px-2 pt-2 pb-1"
      >
        <MenuTabs
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        <MenuCategoryTabs
          categories={getCategories}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
          activeTab={activeTab}
          itemsContainerRef={menuItemsRef}
        />
      </div>
      {/* Menu content */}
      <div ref={menuItemsRef} className="px-4 sm:px-6 lg:px-8">
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeCategory ?? 'all'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <MenuCategories categories={categorizedItems} activeTab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  );
};

export default MenuPage;