// Import all categories needed for lunch
import { businessLunch } from '../categories/businessLunch';
import { openings, firsts } from '../categories/appetizers';
import { salads } from '../categories/salads';
import { mains, seafood, meatPoultry } from '../categories/mains';
import { desserts } from '../categories/desserts';

// Evening dishes are served at lunch at their regular price (no lunch discount).
// Business-lunch specials keep their fixed price and show first.
const eveningItems = [
  ...openings,
  ...salads,
  ...firsts,
  ...mains,
  ...seafood,
  ...meatPoultry,
  ...desserts,
];

export const lunch = [...businessLunch, ...eveningItems];
