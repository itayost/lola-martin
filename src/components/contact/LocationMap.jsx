// src/components/contact/LocationMap.jsx
import { useState, useEffect } from 'react';
import { MapPin, Clock, Car } from 'lucide-react';
import { useRestaurantInfo } from '../shared/RestaurantInfo';
import { customMapStyle } from '../../data/mapStyle';

const LocationMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const info = useRestaurantInfo();

  useEffect(() => {
    // Set isLoaded to true after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Handle iframe error
  const handleMapError = () => {
    console.warn('Map iframe could not be loaded');
    setHasError(true);
  };

  return (
    <>
      <div 
        className={`rounded-xl overflow-hidden shadow-subtle border border-border transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {hasError ? (
          // Fallback UI when iframe fails to load
          <div className="bg-card h-96 flex items-center justify-center p-6 text-center">
            <div className="max-w-md">
              <MapPin className="h-10 w-10 mx-auto text-accent mb-4" />
              <h3 className="text-lg font-medium text-text mb-2">מסעדת {info.name}</h3>
              <p className="text-muted mb-4">{info.contact.address.full}</p>
              <a 
                href={info.contact.mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-accent text-background rounded-lg hover:bg-accentDark transition-colors"
              >
                צפה במפה בגוגל מפות
              </a>
            </div>
          </div>
        ) : (
          // Google Maps iframe
          <iframe 
            src={info.contact.mapEmbedLink} 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="מפת מיקום המסעדה"
            aria-label="מפת גוגל המציגה את מיקום המסעדה"
            onError={handleMapError}
            className="w-full"
          />
        )}
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Address Card */}
          <div className="bg-background/30 backdrop-blur-sm border border-border/40 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-gold mr-3">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gold">כתובת</h3>
                <p className="text-sm text-muted">{info.contact.address.full}</p>
                <a 
                  href={info.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-accent hover:text-accentDark hover:underline"
                >
                  הוראות הגעה
                </a>
              </div>
            </div>
          </div>
          
          {/* Hours Card */}
          <div className="bg-background/30 backdrop-blur-sm border border-border/40 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-gold mr-3">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gold">שעות פעילות</h3>
                <p className="text-sm text-muted">{info.hours.display.weekdays}</p>
                <p className="text-sm text-muted">{info.hours.display.friday}</p>
                <p className="text-sm text-muted">{info.hours.display.saturday}</p>
              </div>
            </div>
          </div>
          
          {/* Parking Card */}
          <div className="bg-background/30 backdrop-blur-sm border border-border/40 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-gold mr-3">
                <Car className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gold">חניה</h3>
                <p className="text-sm text-muted">
                  {info.parking?.info || "חניון ציבורי זמין בבניין וחניה ברחוב ללא תשלום"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationMap;