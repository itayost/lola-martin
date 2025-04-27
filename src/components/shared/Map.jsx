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
    // Add a slight delay before loading the map to reduce resource contention with other elements
    const initialDelay = setTimeout(() => {
      initializeMap();
    }, 500);
    
    return () => clearTimeout(initialDelay);
  }, [center, markerTitle]);
  
  // Separate function to initialize the map
  const initializeMap = () => {
    // Check if Map ID is available
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID || '50087315e0f539f3';
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyDIv0sKN2bGf7i2iyyg9nZl8R7dO_6ecYw';
    
    if (!navigator.onLine) {
      console.warn('No internet connection detected');
      setErrorMessage('אין חיבור לאינטרנט. אנא התחבר לרשת ונסה שוב.');
      setMapError(true);
      setIsLoading(false);
      return;
    }

    if (!apiKey) {
      console.error('Google Maps API key is missing');
      setErrorMessage('חסר מפתח API למפות גוגל');
      setMapError(true);
      setIsLoading(false);
      return;
    }
    
    if (!mapId) {
      console.error('Google Maps Map ID is missing');
      setErrorMessage('חסר Map ID למפות גוגל');
      setMapError(true);
      setIsLoading(false);
      return;
    }

    const loader = new Loader({
      apiKey: apiKey,
      version: 'quarterly', // Use quarterly instead of weekly for better caching
      authReferrerPolicy: 'origin',
      mapIds: [mapId],
      language: 'he', // Set language explicitly for better caching
      region: 'IL', // Set region for better caching
      channel: 'lola-martin-website', // Add a channel for better metrics
      libraries: ['marker', 'maps'], // Explicitly specify libraries for better loading
      // Set cache control header via URL parameter
      url: `https://maps.googleapis.com/maps/api/js?v=quarterly&cachecontrol=public,max-age=86400,stale-while-revalidate=3600`,
    });

    async function initMap() {
      try {
        // Import required libraries
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        
        if (!mapRef.current) return;

        // Create map with the Map ID from environment variables
        const map = new Map(mapRef.current, {
          zoom: 16,
          center,
          disableDefaultUI: false, // Enable UI controls for better accessibility
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          gestureHandling: 'greedy',
          mapId: mapId,
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
          preferCanvas: true, // Use canvas for better performance
          renderingType: 'VECTOR', // Use vector rendering
          optimized: true, // Optimize rendering
          webglProjection: true, // Use webgl when available
          useStaticMap: true, // Use static map when appropriate
        });

        // Create marker with custom content
        const markerView = new AdvancedMarkerElement({
          map,
          position: center,
          title: markerTitle,
          content: buildContent(markerTitle),
        });

        // Use the official Google Maps API events for Advanced Markers
        // This is the recommended way to handle marker clicks
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
    // Remove tabindex and role attributes to comply with Google's recommendation
    content.setAttribute("aria-label", `${title} - שדרות אבא אבן 10, הרצליה פיתוח`);
    
    // Make explicitly clickable to handle all cases
    content.style.cursor = "pointer";
    
    // Add restaurant info with enhanced data
    content.innerHTML = `
      <div class="marker-icon">
        <img src="/images/logos/lola-marker.png" alt="${title}" />
      </div>
      <div class="info-card" aria-label="פרטי המסעדה">
        <div class="card-header">
          <h3>${title}</h3>
        </div>
        <div class="card-body">
          <p class="address">שדרות אבא אבן 10, הרצליה פיתוח</p>
          <div class="details">
            <div class="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="detail-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>09-7614242</span>
            </div>
            <div class="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="detail-icon">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>א'-ה': 12:00-23:00<br>ו'-ש': 12:00-00:00</span>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://maps.app.goo.gl/zpjgV2Wunb6fZM13A" target="_blank" rel="noopener noreferrer" class="directions-btn">
            הוראות הגעה
          </a>
          <a href="tel:09-7614242" class="call-btn">
            התקשר עכשיו
          </a>
        </div>
      </div>
    `;
    
    // Remove direct click and keyboard event listeners
    // They're not needed anymore as we're using the official
    // marker.addListener("click", ...) approach

    // Add styles to document head once
    if (!document.getElementById('map-marker-styles')) {
      const styles = document.createElement('style');
      styles.id = 'map-marker-styles';
      styles.textContent = `
        .restaurant-marker {
          cursor: pointer;
          position: relative;
          z-index: 1; /* Ensure it's above other elements */
          user-select: none; /* Prevent text selection */
          -webkit-tap-highlight-color: transparent; /* Remove tap highlight on mobile */
        }
        .restaurant-marker:hover .marker-icon {
          transform: scale(1.1);
          box-shadow: 0 0 0 3px rgba(218, 160, 109, 0.5);
        }
        .marker-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          transition: transform 0.3s, box-shadow 0.3s;
          pointer-events: auto; /* Ensure clicks register */
        }
        .marker-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .info-card {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%) scale(0.9);
          width: 250px;
          background: #112240;
          color: #E6F1FF;
          border: 1px solid #233554;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s;
          text-align: right;
          direction: rtl;
          overflow: hidden;
        }
        .card-header {
          background: #0D2B4A;
          padding: 12px;
          border-bottom: 1px solid #233554;
        }
        .card-header h3 {
          color: #DAA06D;
          margin: 0;
          font-size: 16px;
          font-weight: bold;
        }
        .card-body {
          padding: 12px;
        }
        .address {
          margin: 0 0 10px;
          font-size: 14px;
          color: #8892B0;
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .detail-item {
          display: flex;
          align-items: center;
          font-size: 13px;
          color: #8892B0;
        }
        .detail-icon {
          width: 14px;
          height: 14px;
          margin-left: 8px;
          color: #DAA06D;
        }
        .card-footer {
          display: flex;
          gap: 8px;
          padding: 0 12px 12px 12px;
        }
        .directions-btn, .call-btn {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          flex: 1;
          text-align: center;
          transition: all 0.2s;
        }
        .directions-btn {
          background: #DAA06D;
          color: #0A192F;
        }
        .call-btn {
          background: transparent;
          border: 1px solid #DAA06D;
          color: #DAA06D;
        }
        .directions-btn:hover {
          background: #B98244;
        }
        .call-btn:hover {
          background: rgba(218, 160, 109, 0.1);
        }
        .highlight .info-card {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) scale(1);
        }
        .highlight .marker-icon {
          transform: scale(1.1);
          box-shadow: 0 0 0 3px rgba(218, 160, 109, 0.5);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .marker-animation {
          animation: bounce 2s ease infinite;
        }
      `;
      document.head.appendChild(styles);
    }
    
    // Add a bounce animation to draw attention 
    setTimeout(() => {
      content.querySelector('.marker-icon').classList.add('marker-animation');
      // Remove animation after a few seconds
      setTimeout(() => {
        if (content.querySelector('.marker-icon')) {
          content.querySelector('.marker-icon').classList.remove('marker-animation');
        }
      }, 3000);
    }, 1000);
    
    return content;
  }

  // Toggle highlight state
  function toggleHighlight(markerView) {
    if (markerView.content.classList.contains("highlight")) {
      markerView.content.classList.remove("highlight");
    } else {
      markerView.content.classList.add("highlight");
    }
  }

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
                <span className="sr-only">
                  טוען...
                </span>
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