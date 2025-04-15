// src/components/shared/Map.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { customMapStyle } from '@/data/mapStyle';

const center = { lat: 32.16117, lng: 34.80625 };

const Map = () => {
  const mapRef = useRef(null);
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
        //const { Marker } = await google.maps.importLibrary('marker');

        const map = new Map(mapRef.current, {
          center,
          zoom: 16,
          disableDefaultUI: true,
          styles: customMapStyle,
          gestureHandling: 'greedy',
        });

        // new Marker({
        //   position: center,
        //   map,
        //   title: 'לולה מרטין',
        //   icon: {
        //     //url: '/images/icons/marker-gold.svg',
        //     scaledSize: new google.maps.Size(40, 40),
        //   },
        // });
      })
      .catch((error) => {
        console.error('Google Maps failed to load:', error);
        setMapError(true);
      });
  }, []);

  if (mapError) {
    return (
      <div className="w-full h-[400px] bg-muted text-white flex items-center justify-center">
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