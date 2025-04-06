// src/components/contact/ContactForm.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle,
  Loader,
  User,
  Mail,
  MessageSquare
} from 'lucide-react';
import Button from '../ui/Button';
import restaurantInfo from '../../data/restaurantInfo';

const ContactForm = ({ isLoaded }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('pending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-card border border-border/20 rounded-xl p-6 shadow-md self-start"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center border-r-4 border-accent pr-4">
        <MessageSquare className="h-6 w-6 ml-3 text-accent" />
        שלח הודעה
      </h2>
      
      {formStatus === 'success' ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-accent mb-1"
            >
              שם מלא
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <User className="h-5 w-5 text-muted" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="ישראל ישראלי"
                className="w-full pr-10 py-2 text-base bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-accent mb-1"
            >
              דוא"ל
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Mail className="h-5 w-5 text-muted" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full pr-10 py-2 text-base bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-accent mb-1"
            >
              נושא
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full py-2 text-base bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-transparent"
            >
              <option value="">בחר נושא...</option>
              <option value="general">שאלה כללית</option>
              <option value="reservation">הזמנת שולחן</option>
              <option value="event">אירוע פרטי</option>
              <option value="feedback">משוב</option>
              <option value="other">אחר</option>
            </select>
          </div>
          
          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-accent mb-1"
            >
              הודעה
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              placeholder="כתוב את הודעתך כאן..."
              className="w-full px-4 py-2 text-base bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-transparent"
            ></textarea>
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit"
              disabled={formStatus === 'pending'}
              className="w-full"
            >
              {formStatus === 'pending' ? (
                <>
                  <Loader className="h-5 w-5 ml-2 animate-spin" />
                  שולח...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 ml-2" />
                  שלח הודעה
                </>
              )}
            </Button>
          </div>
        </form>
      )}
      
      <FormQuickLinks />
    </motion.div>
  );
};

const SuccessMessage = () => (
  <div className="text-center p-6 bg-primaryDark/20 rounded-lg">
    <CheckCircle className="h-14 w-14 mx-auto text-accent mb-4" />
    <h3 className="text-xl font-semibold mb-2">הודעתך נשלחה בהצלחה</h3>
    <p className="text-muted mb-4">
      תודה שפנית אלינו. נחזור אליך בהקדם האפשרי.
    </p>
  </div>
);

const FormQuickLinks = () => (
  <div className="mt-6 pt-6 border-t border-border flex flex-col md:flex-row justify-center">
    <div className="md:ml-4 mb-3 md:mb-0">
      <Button 
        href={restaurantInfo.reservations.url} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-center w-full"
      >
        הזמן שולחן
      </Button>
    </div>
    <div>
      <Button 
        href="/events" 
        variant="outline"
        className="text-center w-full"
      >
        אירועים פרטיים
      </Button>
    </div>
  </div>
);

export default ContactForm;