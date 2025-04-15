'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { customMapStyle } from '@/data/mapStyle';

// Container dimensions
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Lola Martin location (Herzliya Pituach)
const center = {
  lat: 32.1656,
  lng: 34.8122,
};

const Map = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-elegant">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        loadingElement={
          <div className="w-full h-[400px] flex items-center justify-center bg-muted text-white">
            טוען מפה...
          </div>
        }
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={{
            styles: customMapStyle,
            disableDefaultUI: true,
            zoomControl: true,
            gestureHandling: 'greedy',
          }}
        >
          <Marker
            position={center}
            title="לולה מרטין"
            icon={{
              //url: '/images/icons/marker-gold.svg', // Optional custom marker
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;