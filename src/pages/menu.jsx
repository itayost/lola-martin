// src/pages/menu.jsx - Meal tabs (עסקיות / ערב / סושי) over a single scrolling menu
import MenuShell from '@/components/menu/MenuShell';
import MenuContent from '@/components/menu/MenuContent';
import { useMenuTabs } from '@/components/menu/useMenuTabs';

const MenuPage = () => {
  const { activeTab, selectTab, sections } = useMenuTabs();
  // The business-lunch tab is a single offer panel, so it has no category chips.
  const visibleSections = activeTab === 'business' ? [] : sections;

  return (
    <MenuShell activeTab={activeTab} onSelectTab={selectTab} sections={visibleSections}>
      <MenuContent activeTab={activeTab} sections={visibleSections} onSelectTab={selectTab} />
    </MenuShell>
  );
};

export default MenuPage;
