// src/components/ui/NavigationIndicator.jsx
import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { useContactPage } from '../../context/ContactPageContext';
import { scrollToElement } from '../../utils/ContactPageUtils';

const NavigationIndicator = ({ sections }) => {
  const { activeSection } = useContactPage();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleClick = (sectionId) => {
    scrollToElement(sectionId, 100);
  };
  
  return (
    <m.div
      initial={{ opacity: 0, right: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        right: isVisible ? 20 : -20
      }}
      transition={{ duration: 0.5 }}
      className="fixed top-1/2 transform -translate-y-1/2 z-40 px-1"
    >
      <div className="py-2 px-2 bg-card/80 backdrop-blur-sm border border-border/20 rounded-full shadow-lg">
        <div className="flex flex-col items-center space-y-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="group relative p-1"
              aria-label={`עבור אל ${section.label}`}
            >
              <span 
                className={`block h-3 w-3 rounded-full transition-colors duration-300 border group-hover:border-primary
                  ${activeSection === section.id ? 'bg-primary border-primary' : 'bg-background border-gold/50'}`}
              />
              
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-medium bg-background/90 rounded-md border border-border/30 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {section.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default NavigationIndicator;