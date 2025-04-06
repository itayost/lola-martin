import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '../../hooks/useScrollAnimation';
import Button from '../ui/Button';
import restaurantInfo from '../../data/restaurantInfo';

const Location = () => {
  const [ref, controls] = useScrollAnimation();
  const info = restaurantInfo;

  return (
    <section className="py-12 sm:py-20 bg-card text-text">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Google Maps Embed */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="h-64 sm:h-96 rounded-xl overflow-hidden shadow-elegant"
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
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gold"
            >
              המיקום שלנו
            </motion.h2>
            
            {/* Address */}
            <motion.div variants={fadeInUp} className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white">כתובת</h3>
              <p className="text-sm sm:text-base text-muted">{info.contact.address.full}</p>
            </motion.div>
            
            {/* Opening Hours */}
            <motion.div variants={fadeInUp} className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white">שעות פתיחה</h3>
              <p className="text-xs sm:text-base text-lightMuted mb-1">{info.hours.display.weekdays}</p>
              <p className="text-xs sm:text-base text-lightMuted mb-1">{info.hours.display.friday}</p>
              <p className="text-xs sm:text-base text-lightMuted">{info.hours.display.saturday}</p>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white">יצירת קשר</h3>
              <p className="text-xs sm:text-base text-lightMuted mb-1">טלפון: {info.contact.phone}</p>
              {info.contact.fax && <p className="text-xs sm:text-base text-lightMuted mb-1">פקס: {info.contact.fax}</p>}
              <p className="text-xs sm:text-base text-lightMuted">דוא"ל: {info.contact.email}</p>
            </motion.div>
            
            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <Button 
                href={info.reservations.url} 
                variant="primary"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                הזמנת שולחן
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                className="w-full sm:w-auto"
              >
                צור קשר
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;