// components/contact/Map.jsx
import { useEffect, useState } from 'react';
import { customMapStyle } from '../../data/mapStyle';
import { useRestaurantInfo } from '../shared/RestaurantInfo';
import { MapPin } from 'lucide-react';

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const info = useRestaurantInfo();

  const restaurantCoordinates = {
    lat: 32.16117,
    lng: 34.80625
  };

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyDIv0sKN2bGf7i2iyyg9nZl8R7dO_6ecYw";

  useEffect(() => {
    // Function to handle map initialization
    const initializeMap = () => {
      try {
        if (!window.google || !window.google.maps) {
          throw new Error('Google Maps API not loaded');
        }

        const mapElement = document.getElementById('restaurant-map');
        if (!mapElement) {
          throw new Error('Map container element not found');
        }

        // Create the map instance
        const map = new window.google.maps.Map(mapElement, {
          center: restaurantCoordinates,
          zoom: 15,
          styles: customMapStyle,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          gestureHandling: 'cooperative'
        });

        // Create custom marker icon
        const markerIcon = {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: '#DAA06D',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2,
          scale: 10
        };

        // Add marker for restaurant
        const marker = new window.google.maps.Marker({
          position: restaurantCoordinates,
          map: map,
          title: info.name,
          animation: window.google.maps.Animation.DROP,
          icon: markerIcon
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

        // Open info window by default for better UX
        infoWindow.open(map, marker);

        setMapLoaded(true);
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError(true);
      }
    };

    // Load Google Maps API
    if (!window.google || !window.google.maps) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Add global callback function
      window.initMap = initializeMap;
      
      // Handle script errors
      script.onerror = () => {
        console.error('Failed to load Google Maps script');
        setMapError(true);
      };
      
      document.head.appendChild(script);
    } else {
      // Google Maps API already loaded
      initializeMap();
    }

    // Cleanup
    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, [info.name, info.contact.address.full, info.contact.phone]);

  // Display error state
  if (mapError) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 text-center h-[400px] flex flex-col items-center justify-center">
        <div className="text-red-500 mb-4">
          <MapPin className="h-10 w-10 mx-auto" />
        </div>
        <p className="text-muted mb-4">לא ניתן לטעון את המפה</p>
        <a 
          href={info.contact.mapLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-accent hover:text-accentDark border border-accent hover:border-accentDark px-4 py-2 rounded-md transition-colors"
        >
          צפה במפה בגוגל
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-elegant border border-border">
      {/* Map container */}
      <div 
        id="restaurant-map" 
        className="w-full h-[400px]"
        style={{ opacity: mapLoaded ? 1 : 0.5, transition: 'opacity 0.3s ease' }}
      >
        {/* Loading indicator */}
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-text">טוען מפה...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;