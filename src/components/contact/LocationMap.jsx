// src/components/contact/LocationMap.jsx
import { useState, useEffect } from 'react';

const LocationMap = () => {
  return (
    <>
      <div className="rounded-xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.5856247977687!2d34.8438!3d32.1660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDEwJzIxLjYiTiAzNMKwNTAnMzguMSJF!5e0!3m2!1sen!2sil!4v1712421516118!5m2!1sen!2sil" 
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
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background/30 backdrop-blur-sm border border-border/40 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold mb-2 text-gold">כתובת</h3>
            <p className="text-sm text-muted">רחוב אבא אבן 10, הרצליה פיתוח, 4672521</p>
          </div>
          
          <div className="bg-background/30 backdrop-blur-sm border border-border/40 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold mb-2 text-gold">שעות פעילות</h3>
            <p className="text-sm text-muted">ראשון-חמישי: 12:00-23:00</p>
            <p className="text-sm text-muted">שישי-שבת: 12:00-00:00</p>
          </div>
          
          <div className="bg-background/30 backdrop-blur-sm border border-border/40 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold mb-2 text-gold">חניה</h3>
            <p className="text-sm text-muted">חניון ציבורי זמין בבניין וחניה ברחוב ללא תשלום</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationMap;