import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactCTA from '../components/contact/ContactCTA';
import ContactQuickLinks from '../components/contact/ContactQuickLinks';
import LocationMap from '../components/contact/LocationMap';
import LoaderSpinner from '../components/shared/LoaderSpinner';

// Create a custom hook for detecting device type
const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkDevice();
    
    // Add resize listener
    window.addEventListener('resize', checkDevice);
    
    // Clean up
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return isMobile;
};

// Create a custom hook for animations
const useAnimations = (isMobile) => {
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  
  // Adjust animation settings based on device type and user preferences
  const getVariants = (type, index = 0) => {
    // Return minimal animations for reduced motion preference
    if (prefersReducedMotion.current) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
      };
    }
    
    // Different animation variants
    const variants = {
      fadeUp: {
        hidden: { opacity: 0, y: isMobile ? 15 : 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: isMobile ? 0.4 : 0.6,
            delay: index * 0.1,
            ease: "easeOut"
          } 
        }
      },
      fadeIn: {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1, 
          transition: { 
            duration: isMobile ? 0.3 : 0.5,
            delay: index * 0.1
          } 
        }
      },
      staggerContainer: {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1, 
          transition: { 
            staggerChildren: isMobile ? 0.1 : 0.2,
            delayChildren: 0.1
          } 
        }
      }
    };
    
    return variants[type] || variants.fadeIn;
  };
  
  return { getVariants };
};

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [activeSection, setActiveSection] = useState('info');
  const isMobile = useDeviceDetect();
  const { getVariants } = useAnimations(isMobile);
  
  // Refs for scroll sections
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);
  const mapRef = useRef(null);
  
  // Handle section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Check each section and determine which one is currently in view
      if (mapRef.current && scrollPosition >= mapRef.current.offsetTop) {
        setActiveSection('map');
      } else if (faqRef.current && scrollPosition >= faqRef.current.offsetTop) {
        setActiveSection('faq');
      } else if (formRef.current && scrollPosition >= formRef.current.offsetTop) {
        setActiveSection('form');
      } else {
        setActiveSection('info');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle scroll to map
  const toggleMap = () => {
    setShowMap(true);
    
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };
  
  return (
    <main className="min-h-screen bg-background">
      {/* Loading overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <LoaderSpinner />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hero Section */}
      <ContactHero />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        {/* Quick Links - Only on mobile */}
        {isMobile && (
          <motion.div
            variants={getVariants('fadeUp')}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="mb-12"
          >
            <ContactQuickLinks />
          </motion.div>
        )}
        
        {/* Desktop Layout - Two columns */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column - Contact Info */}
            <motion.div
              ref={infoRef}
              variants={getVariants('fadeUp')}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              id="contact-info"
            >
              <ContactInfo isLoaded={isLoaded} />
              
              <motion.div
                variants={getVariants('fadeUp', 1)}
                className="mt-12"
              >
                <ContactFAQ />
              </motion.div>
              
              <motion.button
                variants={getVariants('fadeUp', 2)}
                className="mt-8 text-accent flex items-center transition-colors hover:text-gold"
                onClick={toggleMap}
              >
                <span>הצג מפה מפורטת</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </motion.div>
            
            {/* Right Column - Contact Form */}
            <motion.div
              ref={formRef}
              variants={getVariants('fadeUp', 1)}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              id="contact-form"
            >
              <ContactForm isLoaded={isLoaded} />
            </motion.div>
          </div>
        )}
        
        {/* Mobile Layout - Stacked */}
        {isMobile && (
          <div className="space-y-10">
            {/* Contact Info */}
            <motion.div
              ref={infoRef}
              variants={getVariants('fadeUp')}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              id="contact-info"
            >
              <ContactInfo isLoaded={isLoaded} />
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              variants={getVariants('fadeUp')}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              id="contact-form"
            >
              <ContactForm isLoaded={isLoaded} />
            </motion.div>
            
            {/* FAQ Section */}
            <motion.div
              ref={faqRef}
              variants={getVariants('fadeUp')}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              id="contact-faq"
              className="bg-card p-6 rounded-xl"
            >
              <ContactFAQ />
            </motion.div>
          </div>
        )}
        
        {/* Map Section (both mobile and desktop) */}
        <AnimatePresence>
          {(showMap || isMobile) && (
            <motion.div
              ref={mapRef}
              id="location-map"
              className="mt-16"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 border-r-4 border-accent pr-4">המיקום שלנו</h2>
              <div className="bg-card rounded-xl overflow-hidden shadow-elegant">
                <LocationMap />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* CTA Section */}
        <motion.div
          variants={getVariants('fadeUp')}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="mt-16"
        >
          <ContactCTA />
        </motion.div>
      </div>
      
      {/* Navigation indicator for desktop */}
      {!isMobile && (
        <div className="fixed top-1/2 transform -translate-y-1/2 left-4 z-40">
          <div className="py-2 px-2 bg-card/50 backdrop-blur-sm border border-border/40 rounded-full shadow-lg">
            <div className="flex flex-col items-center space-y-3">
              {[
                { id: 'contact-info', label: 'פרטי התקשרות' },
                { id: 'contact-form', label: 'טופס יצירת קשר' },
                { id: 'location-map', label: 'מפה' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    if (section.id === 'location-map' && !showMap) {
                      toggleMap();
                    } else {
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative p-1"
                  aria-label={`עבור אל ${section.label}`}
                >
                  <span 
                    className={`block h-3 w-3 rounded-full transition-colors duration-300 
                      ${activeSection === section.id.split('-')[1] ? 'bg-accent' : 'bg-muted/50 group-hover:bg-muted'}`}
                  />
                  
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-card/90 rounded-md border border-border/30 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {section.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}