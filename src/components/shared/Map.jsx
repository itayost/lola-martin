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

        const infoWindow = new google.maps.InfoWindow({
          content: `<div class="p-2 font-semibold">לולה מרטין<br>שדרות אבא אבן 10, הרצליה</div>`,
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
      <div className="w-full h-[400px] bg-muted text-white flex items-center justify-center rounded-xl">
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
