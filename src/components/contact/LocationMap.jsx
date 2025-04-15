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
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const infoWindowRef = useRef(null);
  const scriptRef = useRef(null);

  // Restaurant coordinates for Herzliya Pituach
  const restaurantCoordinates = {
    lat: 32.16117, 
    lng: 34.80625
  };

  // Load Google Maps API and initialize map
  useEffect(() => {
    // Cleanup function to handle component unmounting
    let isMounted = true;
    
    // Function to initialize the map
    const initializeMap = () => {
      if (!isMounted || !window.google || !window.google.maps) return;
      if (!mapContainerRef.current) return;
      
      try {
        // Create map with styling
        const mapOptions = {
          center: restaurantCoordinates,
          zoom: 15,
          styles: customMapStyle,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          gestureHandling: 'cooperative'
        };
        
        const map = new window.google.maps.Map(mapContainerRef.current, mapOptions);
        mapInstanceRef.current = map;
        
        // Use Advanced Marker API if available (for modern browsers)
        if (window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
          const advancedMarker = new window.google.maps.marker.AdvancedMarkerElement({
            map,
            position: restaurantCoordinates,
            title: info.name
          });
          markerRef.current = advancedMarker;
          
          // Create and open info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: createInfoWindowContent()
          });
          infoWindowRef.current = infoWindow;
          
          // Add click listener to marker
          advancedMarker.addListener('click', () => {
            infoWindow.open(map, advancedMarker);
          });
          
          // Open info window initially
          setTimeout(() => {
            if (isMounted && mapInstanceRef.current) {
              infoWindow.open(map, advancedMarker);
            }
          }, 1000);
        } else {
          // Fallback to standard marker
          const marker = new window.google.maps.Marker({
            position: restaurantCoordinates,
            map: map,
            title: info.name
          });
          markerRef.current = marker;
          
          // Create and open info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: createInfoWindowContent()
          });
          infoWindowRef.current = infoWindow;
          
          // Add click listener to marker
          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
          
          // Open info window initially
          setTimeout(() => {
            if (isMounted && mapInstanceRef.current) {
              infoWindow.open(map, marker);
            }
          }, 1000);
        }
        
        if (isMounted) {
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Error initializing map:', error);
        if (isMounted) {
          setMapError(true);
        }
      }
    };
    
    // Create info window content with RTL support
    const createInfoWindowContent = () => {
      return `
        <div style="direction: rtl; text-align: right; padding: 8px; font-family: 'Assistant', sans-serif;">
          <h3 style="font-weight: bold; margin: 0 0 4px 0; color: #DAA06D;">${info.name}</h3>
          <p style="margin: 0 0 4px 0;">${info.contact.address.full}</p>
          <p style="margin: 0;"><a href="tel:${info.contact.phone}" style="color: #DAA06D; text-decoration: none;">${info.contact.phone}</a></p>
        </div>
      `;
    };
    
    // Load Google Maps API
    const loadGoogleMapsAPI = () => {
      // Skip if already loaded
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }
      
      // Create a unique callback name
      const callbackName = `initMap_${Date.now().toString(36)}`;
      
      // Set global callback
      window[callbackName] = () => {
        if (isMounted) {
          initializeMap();
        }
        // Clean up callback
        delete window[callbackName];
      };
      
      // Create script element
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDIv0sKN2bGf7i2iyyg9nZl8R7dO_6ecYw&callback=${callbackName}&v=weekly&loading=async`;
      script.async = true;
      script.defer = true;
      scriptRef.current = script;
      
      // Handle errors
      script.onerror = () => {
        if (isMounted) {
          console.error('Failed to load Google Maps API');
          setMapError(true);
          delete window[callbackName];
        }
      };
      
      // Add to document
      document.head.appendChild(script);
    };
    
    // Start loading process
    loadGoogleMapsAPI();
    
    // Cleanup function
    return () => {
      isMounted = false;
      
      // Clean up map instance
      if (infoWindowRef.current) {
        infoWindowRef.current.close();
      }
      
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
      
      if (markerRef.current) {
        markerRef.current = null;
      }
      
      // Don't remove script to prevent issues with multiple instances
    };
  }, [info.name, info.contact.address.full, info.contact.phone]);

  // Handle iframe fallback if JS API fails
  const handleIframeError = () => {
    console.warn('Fallback iframe map failed to load');
  };

  // Fallback iframe URL
  const getFallbackMapUrl = () => {
    return info.contact.mapEmbedLink || `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.597066753253!2d34.80624997524138!3d32.16117061520444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d496f9d1f1f37%3A0xd1759d433f99bb81!2sLola%20Martin!5e0!3m2!1sen!2sil!4v1743811289590!5m2!1sen!2sil`;
  };

  return (
    <>
      <div className={`rounded-xl overflow-hidden shadow-subtle border border-border transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-80'}`}>
        {mapError ? (
          // Fallback to iframe when JavaScript API fails
          <iframe 
            src={getFallbackMapUrl()} 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="מפת מיקום המסעדה"
            aria-label="מפת גוגל המציגה את מיקום המסעדה"
            onError={handleIframeError}
            className="w-full"
          />
        ) : (
          // JavaScript API map container
          <div 
            ref={mapContainerRef} 
            className="w-full h-96 relative"
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