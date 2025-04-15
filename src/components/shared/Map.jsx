import { useEffect, useRef, useState } from 'react';
import { customMapStyle } from '../../data/mapStyle';

const Map = ({ center, zoom = 15, markerTitle, markerIcon }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Initialize map only once
    if (!map && !error) {
      const initMap = () => {
        try {
          const mapInstance = new window.google.maps.Map(mapRef.current, {
            center,
            zoom,
            styles: customMapStyle,
            disableDefaultUI: true,
            zoomControl: true,
            gestureHandling: 'greedy',
          });

          // Create marker
          const markerInstance = new window.google.maps.Marker({
            position: center,
            map: mapInstance,
            title: markerTitle,
            icon: markerIcon ? {
              url: markerIcon,
              scaledSize: new window.google.maps.Size(40, 40),
            } : null,
          });

          setMap(mapInstance);
          setMarker(markerInstance);
        } catch (err) {
          console.error('Error initializing map:', err);
          setError(true);
        }
      };

      // Load Google Maps API if not already loaded
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        script.onerror = () => setError(true);
        document.head.appendChild(script);
      } else {
        initMap();
      }
    }

    // Cleanup function
    return () => {
      if (marker) {
        marker.setMap(null);
      }
      if (map) {
        // Clear all event listeners
        window.google.maps.event.clearInstanceListeners(map);
      }
    };
  }, [center, zoom, markerTitle, markerIcon, map, marker, error]);

  if (error) {
    return (
      <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Unable to load map</p>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      className="w-full h-96 rounded-lg overflow-hidden shadow-lg"
      aria-label="Interactive map"
    />
  );
};

export default Map; 