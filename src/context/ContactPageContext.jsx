// src/context/ContactPageContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const ContactPageContext = createContext();

export const ContactPageProvider = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 500px scroll
      if (window.scrollY > 500) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ContactPageContext.Provider value={{ hasScrolled }}>
      {children}
    </ContactPageContext.Provider>
  );
};

export const useContactPage = () => {
  const context = useContext(ContactPageContext);
  
  if (!context) {
    throw new Error('useContactPage must be used within a ContactPageProvider');
  }
  
  return context;
};