// components/contact/Map.jsx
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { customMapStyle } from '../../data/mapStyle'; // או איפה ששמרת את הסטייל

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 32.1656,
  lng: 34.8122,
};

const Map = () => (
  <LoadScript googleMapsApiKey="AIzaSyDIv0sKN2bGf7i2iyyg9nZl8R7dO_6ecYw">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={{
        styles: customMapStyle,
        disableDefaultUI: true,
      }}
    />
  </LoadScript>
);

export default Map;