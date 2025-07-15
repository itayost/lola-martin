// Import all categories needed for dinner
import { openings, firsts } from '../categories/appetizers';
import { salads } from '../categories/salads';
import { mains, seafood, meatPoultry } from '../categories/mains';
import { desserts } from '../categories/desserts';

export const dinner = [
  ...openings,
  ...salads,
  ...firsts,
  ...mains,
  ...seafood,
  ...meatPoultry,
  ...desserts,
];
