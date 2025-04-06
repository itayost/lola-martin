// MenuCategoryTabs.jsx styled using tailwind.config.js palette
import clsx from 'clsx';

const getTabClass = (isActive) =>
  clsx(
    'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-200',
    isActive
      ? 'bg-accent text-background border-accent'
      : 'bg-card text-muted border-border hover:text-accent hover:border-accent'
  );

const MenuCategoryTabs = ({ categories, activeCategory, setActiveCategory, activeTab, itemsContainerRef }) => {
  const handleClick = (category) => {
    setActiveCategory(category);
    const section = itemsContainerRef?.current?.querySelector(`#${category}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="flex gap-2 overflow-x-auto hide-scrollbar px-2 py-1" aria-label="Menu Category Tabs">
      <button
        className={getTabClass(!activeCategory)}
        onClick={() => setActiveCategory(null)}
      >
        הכל
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={getTabClass(activeCategory === category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default MenuCategoryTabs;