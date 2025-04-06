// Updated iconMap with Spicy option
import { FaLeaf, FaBreadSlice, FaCarrot, FaUtensils, FaPepperHot } from 'react-icons/fa';

const iconMap = {
  vegan: {
    Icon: FaLeaf,
    color: 'text-green-600',
    description: 'טבעוני'
  },
  'gluten-free': {
    Icon: FaBreadSlice,
    color: 'text-amber-700',
    description: 'ללא גלוטן'
  },
  'vegetarian': {
    Icon: FaCarrot,
    color: 'text-orange-500',
    description: 'צמחוני'
  },
  'spicy': {
    Icon: FaPepperHot,
    color: 'text-red-600',
    description: 'חריף'
  },
  default: {
    Icon: FaUtensils,
    color: 'text-lightMuted',
    description: 'פריט מזון'
  }
};

export default iconMap;