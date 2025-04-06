import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '../../hooks/useScrollAnimation';
import Button from '../ui/Button';
import restaurantInfo from '../../data/restaurantInfo';

const Location = () => {
  const [ref, controls] = useScrollAnimation();
  const info = restaurantInfo;

  return (
    <section className="py-20 bg-card text-text">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Google Maps Embed */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="h-96 rounded-xl overflow-hidden shadow-elegant"
          >
            <iframe
              src={info.contact.mapEmbedLink}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </motion.div>
          
          {/* Location Info */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-6 text-gold"
            >
              המיקום שלנו
            </motion.h2>
            
            {/* Address */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">כתובת</h3>
              <p className="text-muted">{info.contact.address.full}</p>
            </motion.div>
            
            {/* Opening Hours */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">שעות פתיחה</h3>
              <p className="text-lightMuted mb-1">{info.hours.display.weekdays}</p>
              <p className="text-lightMuted mb-1">{info.hours.display.friday}</p>
              <p className="text-lightMuted">{info.hours.display.saturday}</p>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">יצירת קשר</h3>
              <p className="text-lightMuted mb-1">טלפון: {info.contact.phone}</p>
              {info.contact.fax && <p className="text-lightMuted mb-1">פקס: {info.contact.fax}</p>}
              <p className="text-lightMuted">דוא"ל: {info.contact.email}</p>
            </motion.div>
            
            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button 
                href={info.reservations.url} 
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                הזמנת שולחן
              </Button>
              <Button href="/contact" variant="outline">צור קשר </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;