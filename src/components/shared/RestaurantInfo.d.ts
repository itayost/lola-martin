// src/components/shared/RestaurantInfo.d.ts

interface Address {
  street: string;
  city: string;
  zipCode: string;
  full: string;
}

interface Contact {
  address: Address;
  phone: string;
  fax: string;
  email: string;
  mapLink: string;
  mapEmbedLink: string;
}

interface Hours {
  sunday: { open: string; close: string };
  monday: { open: string; close: string };
  tuesday: { open: string; close: string };
  wednesday: { open: string; close: string };
  thursday: { open: string; close: string };
  friday: { open: string; close: string };
  saturday: { open: string; close: string };
  display: {
    weekdays: string;
    friday: string;
    saturday: string;
  };
}

interface Reservations {
  platform: string;
  url: string;
}

interface Parking {
  info: string;
  mapLink: string;
}

interface PaymentMethods {
  cards: string[];
  coupons: string[];
  info: string;
}

interface Social {
  facebook: {
    url: string;
    handle: string;
  };
  instagram: {
    url: string;
    handle: string;
  };
}

interface MenuCategory {
  id: string;
  label: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface RestaurantInfoData {
  name: string;
  tagline: string;
  established: string;
  contact: Contact;
  hours: Hours;
  reservations: Reservations;
  parking: Parking;
  paymentMethods: PaymentMethods;
  social: Social;
  menuCategories: MenuCategory[];
  faq: FAQ[];
}

export function useRestaurantInfo(): RestaurantInfoData;

export const RestaurantInfoProvider: React.FC<{ children: React.ReactNode }>;

interface RestaurantInfoProps {
  type: 'contact' | 'hours' | 'reservation' | 'parking' | 'payment' | 'social';
  className?: string;
}

declare const RestaurantInfo: React.FC<RestaurantInfoProps>;

export default RestaurantInfo;