// src/components/shared/RestaurantInfo.jsx
import { createContext, useContext } from 'react';
import restaurantInfo from '../../data/restaurantInfo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  CreditCard, 
  Calendar,
  Car
} from 'lucide-react';

// Create context
const RestaurantInfoContext = createContext(null);

// Context provider component
export const RestaurantInfoProvider = ({ children }) => {
  return (
    <RestaurantInfoContext.Provider value={restaurantInfo}>
      {children}
    </RestaurantInfoContext.Provider>
  );
};

// Custom hook to use the restaurant info throughout the app
export const useRestaurantInfo = () => {
  const context = useContext(RestaurantInfoContext);
  if (context === null) {
    throw new Error('useRestaurantInfo must be used within a RestaurantInfoProvider');
  }
  return context;
};

// Main component for displaying restaurant information
const RestaurantInfo = ({ type, className = '' }) => {
  const info = useRestaurantInfo();

  // Renders basic contact info block
  const BasicContact = () => (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-reverse space-x-3 text-muted">
        <MapPin className="w-5 h-5 text-accent" />
        <p>{info.contact.address.full}</p>
      </div>
      <div className="flex items-center space-x-reverse space-x-3 text-muted">
        <Phone className="w-5 h-5 text-accent" />
        <a 
          href={`tel:${info.contact.phone}`} 
          className="hover:text-accent transition-colors"
        >
          {info.contact.phone}
        </a>
      </div>
      <div className="flex items-center space-x-reverse space-x-3 text-muted">
        <Mail className="w-5 h-5 text-accent" />
        <a 
          href={`mailto:${info.contact.email}`} 
          className="hover:text-accent transition-colors"
        >
          {info.contact.email}
        </a>
      </div>
    </div>
  );

  // Renders opening hours
  const OpeningHours = () => (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-reverse space-x-3 text-muted">
        <Clock className="w-5 h-5 text-accent" />
        <div>
          <p>{info.hours.display.weekdays}</p>
          <p>{info.hours.display.friday}</p>
          <p>{info.hours.display.saturday}</p>
        </div>
      </div>
    </div>
  );

  // Renders reservation info
  const ReservationInfo = () => (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-reverse space-x-3 text-muted">
        <Calendar className="w-5 h-5 text-accent" />
        <div>
          <p>הזמן שולחן באמצעות {info.reservations.platform}</p>
          <a 
            href={info.reservations.url}
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            הזמן עכשיו
          </a>
        </div>
      </div>
    </div>
  );

  // Renders parking info
  const ParkingInfo = () => (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-reverse space-x-3 text-muted">
        <Car className="w-5 h-5 text-accent" />
        <div>
          <p>{info.parking.info}</p>
          <a 
            href={info.parking.mapLink}
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ראה במפה
          </a>
        </div>
      </div>
    </div>
  );

  // Renders payment methods
  const PaymentMethods = () => (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-reverse space-x-3 text-muted">
        <CreditCard className="w-5 h-5 text-accent" />
        <div>
          <p>אמצעי תשלום: {info.paymentMethods.cards.join(', ')}</p>
          <p>תווי מזון: {info.paymentMethods.coupons.join(', ')}</p>
          <p className="text-sm">{info.paymentMethods.info}</p>
        </div>
      </div>
    </div>
  );

  // Renders social media links
  const SocialLinks = () => (
    <div className={`flex space-x-reverse space-x-4 ${className}`}>
      <a
        href={info.social.facebook.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook page"
        className="text-muted hover:text-accent transition-colors"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a
        href={info.social.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram profile"
        className="text-muted hover:text-accent transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
    </div>
  );

  // Render appropriate component based on type prop
  switch (type) {
    case 'contact':
      return <BasicContact />;
    case 'hours':
      return <OpeningHours />;
    case 'reservation':
      return <ReservationInfo />;
    case 'parking':
      return <ParkingInfo />;
    case 'payment':
      return <PaymentMethods />;
    case 'social':
      return <SocialLinks />;
    default:
      return null;
  }
};

export default RestaurantInfo;