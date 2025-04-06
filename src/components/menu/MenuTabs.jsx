// MenuTabs.jsx styled using tailwind.config.js palette
import clsx from 'clsx';

const TAB_LIST = [
  { id: 'lunch', label: 'צהריים' },
  { id: 'dinner', label: 'ערב' },
  { id: 'sushi', label: 'סושי' },
];

const getTabClass = (isActive) =>
  clsx(
    'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-200',
    isActive
      ? 'bg-accent text-background border-accent'
      : 'bg-card text-muted border-border hover:text-accent hover:border-accent'
  );

const MenuTabs = ({ activeTab, setActiveTab }) => {
  return (
    <nav
      className="flex gap-2 overflow-x-auto justify-center hide-scrollbar px-2 py-1"
      aria-label="Main Menu Tabs"
    >
      {TAB_LIST.map((tab) => (
        <button
          key={tab.id}
          className={getTabClass(activeTab === tab.id)}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default MenuTabs;