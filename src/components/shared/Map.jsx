// src/components/shared/Map.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Phone, Clock } from 'lucide-react';

const defaultCenter = { lat: 32.161198, lng: 34.808755 };
const defaultTitle = 'לולה מרטין';

const Map = ({ center = defaultCenter, markerTitle = defaultTitle }) => {
  const mapRef = useRef(null);
  const [mapError, setMapError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('טעינת המפה נכשלה');

  useEffect(() => {
    // Add a slight delay before loading the map to reduce resource contention
    const initialDelay = setTimeout(() => {
      initializeMap();
    }, 500);
    
    return () => clearTimeout(initialDelay);
  }, [center, markerTitle]);
  
  // Separate function to initialize the map
  const initializeMap = () => {
    // SECURITY FIX: Remove hardcoded fallback values
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    // Check internet connection first
    if (!navigator.onLine) {
      console.warn('No internet connection detected');
      setErrorMessage('אין חיבור לאינטרנט. אנא התחבר לרשת ונסה שוב.');
      setMapError(true);
      setIsLoading(false);
      return;
    }

    // Validate API key is configured
    if (!apiKey) {
      console.error('Google Maps API key is not configured');
      setErrorMessage('מפת Google לא הוגדרה כראוי. אנא פנה למנהל האתר.');
      setMapError(true);
      setIsLoading(false);
      return;
    }
    
    // Map ID is optional - warn but continue
    if (!mapId) {
      console.warn('Google Maps ID is not configured, map will use default styling');
    }

    const loader = new Loader({
      apiKey: apiKey,
      version: 'quarterly',
      authReferrerPolicy: 'origin',
      mapIds: mapId ? [mapId] : [],
      language: 'he',
      region: 'IL',
      channel: 'lola-martin-website',
      libraries: ['marker', 'maps'],
    });

    async function initMap() {
      try {
        // Import required libraries
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        
        if (!mapRef.current) return;

        // Create map configuration
        const mapConfig = {
          zoom: 16,
          center,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          gestureHandling: 'greedy',
          // Performance optimizations
          tilt: 0,
          clickableIcons: false,
          restriction: {
            latLngBounds: {
              north: center.lat + 0.03,
              south: center.lat - 0.03,
              west: center.lng - 0.03,
              east: center.lng + 0.03,
            },
            strictBounds: false
          },
          // Enhanced caching and performance settings
          preferCanvas: true,
          renderingType: 'VECTOR',
          optimized: true,
          webglProjection: true,
          useStaticMap: true,
        };

        // Only add mapId if it exists
        if (mapId) {
          mapConfig.mapId = mapId;
        }

        // Create map with configuration
        const map = new Map(mapRef.current, mapConfig);

        // Create marker with custom content
        const markerView = new AdvancedMarkerElement({
          map,
          position: center,
          title: markerTitle,
          content: buildContent(markerTitle),
        });

        // Handle marker click
        markerView.addListener("click", () => {
          toggleHighlight(markerView);
        });

        // Close on map click
        map.addListener("click", () => {
          if (markerView.content.classList.contains("highlight")) {
            toggleHighlight(markerView);
          }
        });

        // Handle keyboard events for accessibility
        map.addListener("keydown", (e) => {
          if (e.key === "Escape" && markerView.content.classList.contains("highlight")) {
            toggleHighlight(markerView);
          }
        });
        
        // When map is fully loaded, hide the loading indicator
        map.addListener("tilesloaded", () => {
          setIsLoading(false);
        });
      } catch (error) {
        console.error('Google Maps failed to load:', error);
        setErrorMessage(`שגיאה בטעינת המפה: ${error.message}`);
        setMapError(true);
        setIsLoading(false);
      }
    }

    loader.load().then(initMap).catch(error => {
      console.error('Error loading Google Maps:', error);
      setErrorMessage(`שגיאה בטעינת Google Maps: ${error.message}`);
      setMapError(true);
      setIsLoading(false);
    });
  };

  // Build marker content
  function buildContent(title = 'לולה מרטין') {
    const content = document.createElement("div");
    content.classList.add("restaurant-marker");
    content.setAttribute("aria-label", `${title} - לחץ לפרטים`);
    
    content.innerHTML = `
      <div class="marker-container">
        <div class="marker-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DAA06D" stroke="#0A192F" stroke-width="1"/>
            <circle cx="12" cy="9" r="2.5" fill="#0A192F"/>
          </svg>
        </div>
        <div class="marker-popup">
          <div class="popup-content">
            <h3>${title}</h3>
            <div class="contact-info">
              <div class="info-item">
                <span class="icon">📍</span>
                <span>רחוב סוקולוב 47, הרצליה</span>
              </div>
              <div class="info-item">
                <span class="icon">📞</span>
                <a href="tel:09-9568801">09-9568801</a>
              </div>
              <div class="info-item">
                <span class="icon">🕐</span>
                <span>ראשון-חמישי: 12:00-23:00</span>
              </div>
              <div class="info-item">
                <span class="icon">🕐</span>
                <span>שישי-שבת: 12:00-24:00</span>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/zpjgV2Wunb6fZM13A" 
              target="_blank" 
              rel="noopener noreferrer"
              class="directions-btn"
            >
              הנחיות נסיעה
            </a>
          </div>
        </div>
      </div>
    `;
    
    return content;
  }

  // Toggle marker highlight
  function toggleHighlight(markerView) {
    if (markerView.content.classList.contains("highlight")) {
      markerView.content.classList.remove("highlight");
    } else {
      markerView.content.classList.add("highlight");
    }
  }

  // Error state
  if (mapError) {
    return (
      <div className="w-full h-[400px] bg-card text-muted flex flex-col items-center justify-center rounded-xl p-6">
        <div className="text-error mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-red-500 mb-4">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <p className="text-center mb-4">{errorMessage}</p>
        <div className="mt-4">
          <a 
            href="https://maps.app.goo.gl/zpjgV2Wunb6fZM13A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gold text-background px-4 py-2 rounded-lg hover:bg-goldDark transition-colors"
          >
            פתח במפות Google
          </a>
        </div>
      </div>
    );
  }

  // Loading and map render
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
      {isLoading && (
        <div 
          className="absolute inset-0 z-10 bg-card flex items-center justify-center"
          aria-live="polite"
          role="status"
        >
          <div className="text-center">
            <div className="mb-4">
              <div 
                className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" 
                role="progressbar"
                aria-valuetext="טוען את המפה"
              >
                <span className="sr-only">טוען...</span>
              </div>
            </div>
            <p className="text-muted" id="map-loading-text">טוען את המפה...</p>
          </div>
        </div>
      )}
      
      <div
        ref={mapRef}
        id="map"
        className="w-full h-full"
        aria-label="מפה של לולה מרטין"
      />
    </div>
  );
};

export default Map;