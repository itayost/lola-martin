// src/components/contact/LocationMap.jsx
import { useState, useEffect } from 'react';

const LocationMap = () => {
  const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0A192F"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#0A192F"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#E6F1FF"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#1A486E"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0D2B4A"
        }
      ]
    }
  ];

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.5856247977687!2d34.8438!3d32.1660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDEwJzIxLjYiTiAzNMKwNTAnMzguMSJF!5e0!3m2!1sen!2sil!4v1712421516118!5m2!1sen!2sil&style=${encodeURIComponent(JSON.stringify(mapStyle))}`;

  return (
    <>
      <div className="rounded-xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
        <iframe 
          src={mapUrl}
          width="100%" 
          height="400" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="מפת מיקום המסעדה"
          aria-label="מפת גוגל המציגה את מיקום המסעדה"
        ></iframe>
      </div>
    </>
  );
};

export default LocationMap;