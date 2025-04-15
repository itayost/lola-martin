// src/components/contact/LocationMap.jsx
import { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, Car } from 'lucide-react';
import { useRestaurantInfo } from '../shared/RestaurantInfo';
import { customMapStyle } from '../../data/mapStyle';

const LocationMap = () => {
  const mapContainerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const info = useRestaurantInfo();
  
  // Restaurant coordinates for Herzliya Pituach
  const restaurantCoordinates = {
    lat: 32.16117, 
    lng: 34.80625
  };

  // Initialize map after component mounts
  useEffect(() => {
    // Wait a moment before initializing to ensure container is ready
    const timer = setTimeout(() => {
      initializeMap();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Initialize Google Maps
  const initializeMap = () => {
    if (!mapContainerRef.current) return;

    // Load Google Maps API if not already loaded
    if (window.google && window.google.maps) {
      // API already loaded, create map directly
      createMap();
    } else {
      // Create a unique callback name to avoid conflicts
      const callbackName = `initMap_${Date.now().toString(36)}`;
      
      // Set up callback function
      window[callbackName] = () => {
        createMap();
        // Clean up global function
        delete window[callbackName];
      };
      
      // Create and append script element
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDIv0sKN2bGf7i2iyyg9nZl8R7dO_6ecYw&callback=${callbackName}&loading=async`;
      script.async = true;
      script.defer = true;
      
      // Handle script loading error
      script.onerror = () => {
        console.error('Failed to load Google Maps script');
        setMapError(true);
        delete window[callbackName];
      };
      
      document.head.appendChild(script);
    }
  };

  // Create the map with styling
  const createMap = () => {
    try {
      if (!window.google || !window.google.maps) {
        throw new Error('Google Maps API not available');
      }
      
      // Create map with custom styling
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: restaurantCoordinates,
        zoom: 15,
        styles: customMapStyle,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        gestureHandling: 'cooperative'
      });
      
      // Add marker for restaurant location
      const marker = new window.google.maps.Marker({
        position: restaurantCoordinates,
        map: map,
        title: info.name
      });
      
      // Create info window with RTL formatting
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="direction: rtl; text-align: right; padding: 8px; font-family: 'Assistant', sans-serif;">
            <h3 style="font-weight: bold; margin: 0 0 4px 0; color: #DAA06D;">${info.name}</h3>
            <p style="margin: 0 0 4px 0;">${info.contact.address.full}</p>
            <p style="margin: 0;"><a href="tel:${info.contact.phone}" style="color: #DAA06D; text-decoration: none;">${info.contact.phone}</a></p>
          </div>
        `
      });
      
      // Open info window when marker is clicked
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
      
      // Initially open the info window
      infoWindow.open(map, marker);
      
      // Map is loaded
      setIsLoaded(true);
    } catch (error) {
      console.error('Error creating map:', error);
      setMapError(true);
    }
  };

  // Get static map URL (fallback)
  const getStaticMapUrl = () => {
    // Create a styled static map URL
    const style = [
      "style=feature:all|element:geometry|color:0x0A192F",
      "style=feature:water|element:geometry|color:0x0D2B4A",
      "style=feature:road|element:geometry|color:0x1A486E",
      "style=feature:poi|element:geometry|color:0x112240",
      "style=feature:poi.park|element:geometry|color:0x2E5D8C",
      "style=feature:transit|element:geometry|color:0x233554",
      "style=feature:all|element:labels.text.fill|color:0xE6F1FF",
      "style=feature:poi|element:labels.text.fill|color:0xDAA06D"
    ].join("&");
    
    // Create marker
    const marker = `markers=color:0xDAA06D|${restaurantCoordinates.lat},${restaurantCoordinates.lng}`;
    
    return `https://maps.googleapis.com/maps/api/staticmap?center=${restaurantCoordinates.lat},${restaurantCoordinates.lng}&zoom=15&size=600x400&scale=2&maptype=roadmap&${style}&${marker}&key=AIzaSyDIv0sKN2bGf7i2iyyg9nZl8R7dO_6ecYw`;
  };

  return (
    <>
      <div className={`rounded-xl overflow-hidden shadow-subtle border border-border transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-70'}`}>
        {/* Map container - for Google Maps JS API */}
        {!mapError ? (
          <div 
            ref={mapContainerRef} 
            className="w-full h-96"
          >
            {/* Loading indicator */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-text text-sm">טוען מפה...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Fallback to static image if JavaScript API fails
          <div className="relative h-96">
            <img 
              src={getStaticMapUrl()}
              alt="מפת מיקום המסעדה"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-3 text-center backdrop-blur-sm">
              <a 
                href={info.contact.mapLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-accent text-background rounded-lg hover:bg-accentDark transition-colors text-sm"
              >
                נווט עם Google Maps
              </a>
            </div>
          </div>
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