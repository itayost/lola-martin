// Import all categories needed for lunch
import { openings, firsts } from '../categories/appetizers';
import { salads } from '../categories/salads';
import { mains, seafood, meatPoultry } from '../categories/mains';
import { desserts } from '../categories/desserts';

// Apply 10% discount for lunch
const applyLunchDiscount = item => ({
  ...item,
  price: typeof item.price === 'number' ? Math.round(item.price * 0.9) : item.price,
  originalPrice: item.price,
});

export const lunch = [
  ...openings,
  ...salads,
  ...firsts,
  ...mains,
  ...seafood,
  ...meatPoultry,
  ...desserts,
].map(applyLunchDiscount);
