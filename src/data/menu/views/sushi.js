// Import all sushi categories
import {
  nigiri,
  sashimi,
  maki,
  specialRolls,
  veganSushi,
  temaki,
  insideOutRolls,
} from '../categories/sushi';

export const sushi = [
  ...nigiri,
  ...sashimi,
  ...maki,
  ...veganSushi,
  ...specialRolls,
  ...temaki,
  ...insideOutRolls,
];
