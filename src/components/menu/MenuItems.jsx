import MenuItem from './MenuItem';

const categoryMap = {
  'סשימי': 'sashimi',
  'ניגירי': 'nigiri',
  'רולים קלאסיים': 'classic-rolls',
  'רולים מיוחדים': 'signature-rolls',
  'מנות פתיחה': 'appetizers',
  'מנות עיקריות': 'main-dishes',
  'קינוחים': 'desserts',
  'שתייה': 'drinks',
  'תוספות': 'sides',
  // ➕ Add or update as needed
};

const MenuItems = ({ items }) => {
  if (!items || items.length === 0) return null;

  const categorizedItems = items.reduce((acc, item) => {
    const category = item.category || 'ללא קטגוריה';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  const categories = Object.keys(categorizedItems);

  return (
    <div className="grid grid-cols-1 gap-8">
      {categories.map((category) => (
        <div key={category}>
          <h2
            id={categoryMap[category] || category}
            className="text-xl font-bold mb-4 text-primary-600"
          >
            {category}
          </h2>
          <div className="grid gap-6">
            {categorizedItems[category].map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;