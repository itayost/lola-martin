// src/components/contact/ContactInfo.jsx
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';
import restaurantInfo from '../../data/restaurantInfo';

const ContactInfoItem = ({ icon: Icon, title, children }) => (
  <div className="flex">
    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primaryDark/40 text-accent">
      <Icon className="h-5 w-5" />
    </div>
    <div className="mr-4">
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      {children}
    </div>
  </div>
);

const ContactInfo = ({ isLoaded }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold mb-6 border-r-4 border-accent pr-4">פרטי התקשרות</h2>
      
      <div className="space-y-6">
        {/* Address */}
        <ContactInfoItem icon={MapPin} title="כתובת">
          <p className="text-muted">{restaurantInfo.contact.address.full}</p>
          <a 
            href={restaurantInfo.contact.mapLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 text-sm mt-1 inline-block"
          >
            הוראות הגעה
          </a>
        </ContactInfoItem>
        
        {/* Phone */}
        <ContactInfoItem icon={Phone} title="טלפון">
          <p className="text-muted">{restaurantInfo.contact.phone}</p>
          <a 
            href={`tel:${restaurantInfo.contact.phone}`} 
            className="text-accent hover:text-accent/80 text-sm mt-1 inline-block"
          >
            התקשר עכשיו
          </a>
        </ContactInfoItem>
        
        {/* Email */}
        <ContactInfoItem icon={Mail} title="דוא״ל">
          <p className="text-muted">{restaurantInfo.contact.email}</p>
          <a 
            href={`mailto:${restaurantInfo.contact.email}`} 
            className="text-accent hover:text-accent/80 text-sm mt-1 inline-block"
          >
            שלח אימייל
          </a>
        </ContactInfoItem>
        
        {/* Hours */}
        <ContactInfoItem icon={Clock} title="שעות פתיחה">
          <p className="text-muted">{restaurantInfo.hours.display.weekdays}</p>
          <p className="text-muted">{restaurantInfo.hours.display.friday}</p>
          <p className="text-muted">{restaurantInfo.hours.display.saturday}</p>
        </ContactInfoItem>
      </div>
      
      {/* Map */}
      <div className="rounded-lg overflow-hidden border border-border shadow-md mt-10">
        <iframe 
          src={restaurantInfo.contact.mapEmbedLink || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.5856247977687!2d34.8438!3d32.1660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDEwJzIxLjYiTiAzNMKwNTAnMzguMSJF!5e0!3m2!1sen!2sil!4v1712421516118!5m2!1sen!2sil"}
          width="100%" 
          height="250" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="מפת מיקום המסעדה"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ContactInfo;