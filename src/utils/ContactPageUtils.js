// src/utils/ContactPageUtils.js

/**
 * Animation variants for consistent animations across components
 */
export const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  listItem: (index) => ({
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: index * 0.1,
        duration: 0.4
      }
    }
  })
};

/**
 * Shared transition configs
 */
export const transitions = {
  default: { duration: 0.5 },
  slow: { duration: 0.8 },
  quick: { duration: 0.3 },
  springy: { type: "spring", stiffness: 300, damping: 20 }
};

/**
 * Helper function for scroll to element
 */
export const scrollToElement = (elementId, offset = 0) => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};

/**
 * Format phone number to a consistent format
 */
export const formatPhoneNumber = (phoneNumber) => {
  // Remove non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Format based on Israeli phone number format
  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 5)}-${cleaned.slice(5, 9)}`;
  } else if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  }
  
  return phoneNumber;
};

/**
 * Share contact data across components
 */
export const contactData = {
  phone: "09-7614242",
  email: "info@lolamartin.co.il",
  address: {
    street: "רחוב אבא אבן 10",
    city: "הרצליה פיתוח",
    zipcode: "4672521",
    mapUrl: "https://maps.app.goo.gl/zpjgV2Wunb6fZM13A"
  },
  hours: {
    weekdays: "12:00-23:00",
    weekend: "12:00-00:00"
  },
  social: {
    facebook: "https://facebook.com/lolamartin",
    instagram: "https://instagram.com/lolamartin"
  },
  reservation: {
    url: "https://ontopo.com/he/il/page/24219808"
  }
};

/**
 * Contact form validation
 */
export const validateContactForm = (formData) => {
  const errors = {};
  
  // Name validation
  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'נא להזין שם מלא';
  }
  
  // Email validation
  if (!formData.email || formData.email.trim() === '') {
    errors.email = 'נא להזין כתובת דוא"ל';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'כתובת דוא"ל לא תקינה';
  }
  
  // Phone validation - optional but must be valid if provided
  if (formData.phone && !/^0\d{8,9}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
    errors.phone = 'מספר טלפון לא תקין';
  }
  
  // Message validation
  if (!formData.message || formData.message.trim() === '') {
    errors.message = 'נא להזין הודעה';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};