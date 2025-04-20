// src/pages/menu.jsx - No loader version
import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import menuData from '../data/menuData';
import MenuHero from '../components/menu/MenuHero';
import MenuTabs from '../components/menu/MenuTabs';
import MenuCategories from '../components/menu/MenuCategories';
import MenuCategoryTabs from '../components/menu/MenuCategoryTabs';

const MenuPage = () => {
  const router = useRouter();
  const heroBottomRef = useRef(null);
  const [activeTab, setActiveTab] = useState('dinner');
  const [activeCategory, setActiveCategory] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Handle initial URL parameters only once
  useEffect(() => {
    if (!router.isReady || isInitialized) return;
    
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
    
    setIsInitialized(true);
  }, [router.isReady, router.query, isInitialized]);

  // Update URL when tab or category changes - without triggering loads
  useEffect(() => {
    if (!router.isReady || !isInitialized) return;
    
    // Build query object
    const query = { tab: activeTab };
    if (activeCategory) {
      query.category = activeCategory;
    }
    
    // Update URL without page reload or loading state
    const url = {
      pathname: router.pathname,
      query
    };
    
    // Use replaceState directly to avoid triggering Next.js loader
    if (typeof window !== 'undefined') {
      const newUrl = `${router.pathname}?${new URLSearchParams(query).toString()}`;
      window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
    }
  }, [activeTab, activeCategory, router.isReady, isInitialized, router.pathname]);

  // Get categories for the current tab
  const getCategories = useMemo(() => {
    try {
      const currentTabItems = menuData[activeTab] || [];
      const uniqueCategories = [...new Set(currentTabItems.map(item => item.category))];
      return uniqueCategories.filter(Boolean);
    } catch (err) {
      console.error('Error getting categories:', err);
      return [];
    }
  }, [activeTab]);

  // Filter and categorize menu items
  const categorizedItems = useMemo(() => {
    try {
      const categorized = {};
      let items = menuData[activeTab] || [];
      
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
  }, [activeTab, activeCategory]);

  // Scroll to content after changing tabs/categories
  const scrollToHeroBottom = () => {
    if (heroBottomRef.current) {
      const headerHeight = 80;
      const y = heroBottomRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Tab change handler - don't reload
  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    setActiveTab(newTab);
    setActiveCategory(null);
    scrollToHeroBottom();
  };

  // Category change handler - don't reload
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    scrollToHeroBottom();
  };

  return (
    <div className="bg-background text-foreground">
      <Head>
        <title>תפריט - לולה מרטין</title>
        <meta name="description" content="תפריט המסעדה של לולה מרטין, מגוון מנות מהמטבח הים תיכוני, דגים ופירות ים" />
      </Head>
      
      {/* Hero Section */}
      <MenuHero />
      <div ref={heroBottomRef}></div>

      {/* Sticky filter tabs */}
      <div className="sticky top-[60px] z-30 bg-background/80 backdrop-blur border-b border-border py-3">
        <div className="container mx-auto px-4">
          {/* Main menu tabs */}
          <MenuTabs
            activeTab={activeTab}
            setActiveTab={handleTabChange}
          />
          
          {/* Small spacing */}
          <div className="h-3"></div>
          
          {/* Category filter tabs */}
          <MenuCategoryTabs
            categories={getCategories}
            activeCategory={activeCategory}
            setActiveCategory={handleCategoryChange}
            activeTab={activeTab}
          />
        </div>
      </div>

      {/* Menu content */}
      <div className="container mx-auto px-4 py-8">
        <MenuCategories 
          categories={categorizedItems} 
          activeTab={activeTab} 
        />
      </div>
    </div>
  );
};

export default MenuPage;