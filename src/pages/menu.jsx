// MenuPage.jsx with enhanced error handling
import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import menuData from '../data/menuData';
import MenuHero from '../components/menu/MenuHero';
import MenuTabs from '../components/menu/MenuTabs';
import MenuCategories from '../components/menu/MenuCategories';
import MenuCategoryTabs from '../components/menu/MenuCategoryTabs';
import { LazyMotion, domAnimation, AnimatePresence, motion } from 'framer-motion';

const MenuPage = () => {
  const router = useRouter();
  const heroBottomRef = useRef(null);
  const menuItemsRef = useRef(null);
  const [activeTab, setActiveTab] = useState('lunch');
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentMenuData, setCurrentMenuData] = useState(menuData);
  const [error, setError] = useState(null);

  // Debug logging for menu data
  useEffect(() => {
    console.log('Full Menu Data:', menuData);
    console.log('Current Menu Tab:', activeTab);
    
    try {
      const tabItems = menuData[activeTab];
      console.log(`Items for ${activeTab} tab:`, tabItems);
      
      if (!tabItems) {
        console.error(`No items found for tab: ${activeTab}`);
        setError(`No menu items found for ${activeTab} tab`);
      }
    } catch (err) {
      console.error('Error processing menu data:', err);
      setError('Error processing menu data');
    }
  }, [activeTab]);

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
    try {
      const currentTabItems = currentMenuData[activeTab] || [];
      const uniqueCategories = [...new Set(currentTabItems.map(item => item.category))];
      return uniqueCategories.filter(Boolean);
    } catch (err) {
      console.error('Error getting categories:', err);
      return [];
    }
  }, [currentMenuData, activeTab]);

  const categorizedItems = useMemo(() => {
    try {
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
    } catch (err) {
      console.error('Error categorizing items:', err);
      return {};
    }
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

  // Render error state if there's an issue
  if (error) {
    return (
      <div className="pt-20 bg-background text-foreground text-center py-16">
        <Head>
          <title>שגיאה בתפריט - לולה מרטין</title>
        </Head>
        <h1 className="text-3xl font-bold text-accent mb-4">אופס! משהו השתבש</h1>
        <p className="text-muted">{error}</p>
        <p className="text-muted mt-4">אנא נסה לרענן את הדף או לחזור מאוחר יותר</p>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-background text-foreground">
      <Head>
        <title>תפריט - לולה מרטין</title>
      </Head>
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
              <MenuCategories 
                categories={categorizedItems} 
                activeTab={activeTab} 
              />
            </motion.div>
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  );
};

export default MenuPage;