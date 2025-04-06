// src/components/contact/ContactQuickLinks.jsx
import { Phone, Utensils, Calendar, ChevronDown } from 'lucide-react';

const ContactQuickLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Call */}
      <div className="bg-card shadow-lg rounded-xl p-6 border border-border/20 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
        <div className="flex items-start">
          <div className="h-12 w-12 rounded-full bg-primaryDark/60 flex items-center justify-center mr-4 text-gold group-hover:scale-110 transition-transform duration-300">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">התקשר אלינו</h3>
            <p className="text-muted mb-3">נשמח לענות על כל שאלה</p>
            <a 
              href="tel:09-7614242" 
              className="text-gold hover:text-goldDark font-medium transition-colors inline-flex items-center"
            >
              09-7614242
              <ChevronDown className="h-4 w-4 mr-1 rotate-90" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Reserve */}
      <div className="bg-card shadow-lg rounded-xl p-6 border border-border/20 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
        <div className="flex items-start">
          <div className="h-12 w-12 rounded-full bg-primaryDark/60 flex items-center justify-center mr-4 text-gold group-hover:scale-110 transition-transform duration-300">
            <Utensils className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">הזמן שולחן</h3>
            <p className="text-muted mb-3">הבטח את מקומך במסעדה</p>
            <a 
              href="https://ontopo.com/he/il/page/24219808" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-goldDark font-medium transition-colors inline-flex items-center"
            >
              הזמן עכשיו
              <ChevronDown className="h-4 w-4 mr-1 rotate-90" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Events */}
      <div className="bg-card shadow-lg rounded-xl p-6 border border-border/20 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
        <div className="flex items-start">
          <div className="h-12 w-12 rounded-full bg-primaryDark/60 flex items-center justify-center mr-4 text-gold group-hover:scale-110 transition-transform duration-300">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">אירועים פרטיים</h3>
            <p className="text-muted mb-3">חגיגות, כנסים, ואירועים עסקיים</p>
            <a 
              href="/events" 
              className="text-gold hover:text-goldDark font-medium transition-colors inline-flex items-center"
            >
              פרטים נוספים
              <ChevronDown className="h-4 w-4 mr-1 rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactQuickLinks;