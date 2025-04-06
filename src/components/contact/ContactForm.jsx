import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle,
  Loader,
  User,
  Mail,
  MessageSquare,
  Phone
} from 'lucide-react';
import Button from '../ui/Button';
import restaurantInfo from '../../data/restaurantInfo';
import { validateContactForm } from '../../utils/ContactPageUtils';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for the field being edited
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const { isValid, errors } = validateContactForm(formData);
    
    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    // Start submission process
    setFormStatus('pending');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you'd send the form data to a backend
      console.log('Form submitted:', formData);
      
      setFormStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFormErrors({});
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };

  // Render input with error handling
  const renderInput = (name, label, type = 'text', icon = null, placeholder = '') => {
    const Icon = icon;
    return (
      <div className="mb-4">
        <label 
          htmlFor={name} 
          className="block text-sm font-medium text-accent mb-1"
        >
          {label}
        </label>
        <div className="relative">
          {Icon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Icon className="h-5 w-5 text-muted" />
            </div>
          )}
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className={`
              w-full 
              ${Icon ? 'pr-10' : 'px-3'} 
              py-2 
              text-base 
              bg-background 
              border 
              rounded-lg 
              focus:ring-2 
              focus:ring-accent/30 
              focus:border-transparent
              ${formErrors[name] 
                ? 'border-red-500 text-red-600 focus:ring-red-300' 
                : 'border-border'}
            `}
          />
          {formErrors[name] && (
            <p className="text-red-500 text-xs mt-1">{formErrors[name]}</p>
          )}
        </div>
      </div>
    );
  };

  // Success message component
  const SuccessMessage = () => (
    <div className="text-center p-8 bg-primaryDark/20 rounded-xl">
      <CheckCircle className="h-16 w-16 mx-auto text-accent mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">הודעתך נשלחה בהצלחה</h3>
      <p className="text-muted mb-4">
        תודה שפנית אלינו. נחזור אליך בהקדם האפשרי.
      </p>
    </div>
  );

  // Quick links component
  const QuickLinks = () => (
    <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row justify-center gap-4">
      <Button 
        href={restaurantInfo.reservations.url} 
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        הזמן שולחן
      </Button>
      <Button 
        href="/events" 
        variant="outline"
        className="w-full sm:w-auto"
      >
        אירועים פרטיים
      </Button>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-card border border-border/20 rounded-xl p-6 sm:p-8 shadow-md"
    >
      <div className="flex items-center mb-6 border-r-4 border-accent pr-4">
        <MessageSquare className="h-6 w-6 ml-3 text-accent" />
        <h2 className="text-xl sm:text-2xl font-bold text-white">שלח הודעה</h2>
      </div>
      
      {formStatus === 'success' ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {renderInput('name', 'שם מלא', 'text', User, 'ישראל ישראלי')}
          {renderInput('email', 'דוא"ל', 'email', Mail, 'your@email.com')}
          {renderInput('phone', 'טלפון (אופציונלי)', 'tel', Phone, '050-1234567')}
          
          <div className="mb-4">
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
              className={`
                w-full 
                py-2 
                text-base 
                bg-background 
                border 
                rounded-lg 
                focus:ring-2 
                focus:ring-accent/30 
                focus:border-transparent
                ${formErrors.subject 
                  ? 'border-red-500 text-red-600' 
                  : 'border-border'}
              `}
            >
              <option value="">בחר נושא...</option>
              <option value="general">שאלה כללית</option>
              <option value="reservation">הזמנת שולחן</option>
              <option value="event">אירוע פרטי</option>
              <option value="feedback">משוב</option>
              <option value="other">אחר</option>
            </select>
            {formErrors.subject && (
              <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
            )}
          </div>
          
          <div className="mb-4">
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
              placeholder="כתוב את הודעתך כאן..."
              className={`
                w-full 
                px-3 
                py-2 
                text-base 
                bg-background 
                border 
                rounded-lg 
                focus:ring-2 
                focus:ring-accent/30 
                focus:border-transparent
                ${formErrors.message 
                  ? 'border-red-500 text-red-600' 
                  : 'border-border'}
              `}
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
            )}
          </div>
          
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
        </form>
      )}
      
      <QuickLinks />
    </motion.div>
  );
};

export default ContactForm;