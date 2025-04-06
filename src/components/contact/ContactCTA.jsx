// src/components/contact/ContactCTA.jsx
import { motion } from 'framer-motion';
import { Utensils, Calendar } from 'lucide-react';
import Button from '../ui/Button';

const ContactCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-gradient-to-r from-primaryDark to-primary/90 py-16 px-8 rounded-2xl shadow-xl text-center border border-border/20 backdrop-blur-sm"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        רוצים לבקר אותנו?
      </h2>
      <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
        הזמינו שולחן או ארגנו אירוע פרטי במסעדה שלנו. נשמח לארח אתכם בחוויה קולינרית מיוחדת.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-lg mx-auto">
        <Button
          href="https://ontopo.com/he/il/page/24219808"
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          className="flex-1 py-3 px-6 bg-gold hover:bg-goldDark text-background shadow-md text-lg font-medium"
        >
          <Utensils className="h-5 w-5 ml-2" />
          הזמן שולחן
        </Button>
        
        <Button
          href="/events"
          variant="outline"
          className="flex-1 py-3 px-6 border-gold text-gold hover:bg-gold/10 text-lg font-medium"
        >
          <Calendar className="h-5 w-5 ml-2" />
          אירועים פרטיים
        </Button>
      </div>
    </motion.div>
  );
};

export default ContactCTA;