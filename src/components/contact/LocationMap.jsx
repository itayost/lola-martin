// src/components/contact/LocationMap.jsx
import { useState, useEffect } from 'react';
import { MapPin, Clock, Car, ExternalLink } from 'lucide-react';
import { useRestaurantInfo } from '../shared/RestaurantInfo';
import { customMapStyle } from '../../data/mapStyle';

const LocationMap = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [mapError, setMapError] = useState(false);
  const info = useRestaurantInfo();

  useEffect(() => {
    // Set map visible after component mounts (for transition effects)
    const timer = setTimeout(() => {
      setIsMapVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Handle embedded map error
  const handleMapError = () => {
    console.error('Embedded map failed to load');
    setMapError(true);
  };

  // Location information cards rendering
  const locationCards = [
    {
      title: "כתובת",
      content: info.contact.address.full,
      icon: MapPin,
      link: {
        url: info.contact.mapLink,
        label: "הוראות הגעה",
        external: true
      }
    },
    {
      title: "שעות פעילות",
      content: (
        <>
          <p className="text-sm text-muted">{info.hours.display.weekdays}</p>
          <p className="text-sm text-muted">{info.hours.display.friday}</p>
          <p className="text-sm text-muted">{info.hours.display.saturday}</p>
        </>
      ),
      icon: Clock
    },
    {
      title: "חניה",
      content: "חניון ציבורי זמין בבניין וחניה ברחוב ללא תשלום",
      icon: Car,
      link: {
        url: info.parking?.mapLink || info.contact.mapLink,
        label: "מיקום החניון",
        external: true
      }
    }
  ];

  return (
    <>
      <div 
        className={`rounded-xl overflow-hidden transition-all duration-500 hover:shadow-elegant ${
          isMapVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {mapError ? (
          // Fallback static map image
          <div className="relative h-[400px] bg-primaryDark/40 flex items-center justify-center">
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg text-center max-w-md">
              <MapPin className="h-10 w-10 mx-auto text-accent mb-4" />
              <h3 className="text-lg font-medium text-text mb-2">מסעדת {info.name}</h3>
              <p className="text-muted mb-4">{info.contact.address.full}</p>
              <a 
                href={info.contact.mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent hover:bg-accentDark text-background px-4 py-2 rounded-lg transition-colors"
              >
                צפה במפה בגוגל
                <ExternalLink className="h-4 w-4 mr-2" />
              </a>
            </div>
          </div>
        ) : (
          // Embedded Google Map with custom styling
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
          {locationCards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <div 
                key={index} 
                className="bg-background/30 backdrop-blur-sm border border-border/40 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-gold mr-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-gold">{card.title}</h3>
                    {typeof card.content === 'string' ? (
                      <p className="text-sm text-muted">{card.content}</p>
                    ) : (
                      card.content
                    )}
                    
                    {card.link && (
                      <a 
                        href={card.link.url}
                        target={card.link.external ? "_blank" : undefined}
                        rel={card.link.external ? "noopener noreferrer" : undefined}
                        className="inline-block mt-2 text-xs text-accent hover:text-accentDark hover:underline"
                      >
                        {card.link.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LocationMap;