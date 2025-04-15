// src/components/contact/Map.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { customMapStyle } from '@/data/mapStyle';

const center = { lat: 32.161198, lng: 34.808755 };

const Map = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader
      .load()
      .then(async () => {
        const { Map } = await google.maps.importLibrary('maps');

        if (!mapRef.current) return;

        const map = new Map(mapRef.current, {
          center,
          zoom: 16,
          disableDefaultUI: true,
          gestureHandling: 'greedy',
          styles: customMapStyle,
        });

        const marker = new google.maps.Marker({
          position: center,
          map,
          title: 'לולה מרטין',
          icon: {
            url: '/images/logos/lola-marker.png',
            scaledSize: new google.maps.Size(40, 40),
          },
        });

        markerRef.current = marker;

        // Custom info window HTML that matches your Tailwind theme
        const infoWindowContent = `
          <div class="p-4 rounded-lg shadow-md" style="background-color: #112240; color: #E6F1FF; border: 1px solid #233554; font-family: 'Assistant', sans-serif; min-width: 200px; text-align: right; direction: rtl;">
            <h3 style="color: #DAA06D; font-weight: bold; font-size: 16px; margin-bottom: 6px;">לולה מרטין</h3>
            <p style="color: #8892B0; font-size: 14px; margin-bottom: 4px;">שדרות אבא אבן 10</p>
            <p style="color: #8892B0; font-size: 14px; margin-bottom: 8px;">הרצליה פיתוח</p>
            <a href="https://maps.app.goo.gl/zpjgV2Wunb6fZM13A" target="_blank" style="display: inline-block; background-color: #DAA06D; color: #0A192F; padding: 4px 10px; border-radius: 4px; text-decoration: none; font-size: 12px; font-weight: 500;">הוראות הגעה</a>
          </div>
        `;

        const infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent,
          maxWidth: 300,
          ariaLabel: 'מידע על לולה מרטין'
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      })
      .catch((error) => {
        console.error('Google Maps failed to load:', error);
        setMapError(true);
      });

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
    };
  }, []);

  if (mapError) {
    return (
      <div className="w-full h-[400px] bg-card text-muted flex items-center justify-center rounded-xl">
        <p>טעינת המפה נכשלה</p>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      id="map"
      className="w-full h-[400px] rounded-xl overflow-hidden"
      aria-label="מפה של לולה מרטין"
    />
  );
};

export default Map;