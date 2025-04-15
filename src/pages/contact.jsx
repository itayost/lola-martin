// src/pages/contact.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageMeta from '../components/meta/PageMeta';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactFAQ from '../components/contact/ContactFAQ';
import Map from '../components/shared/Map';
import { restaurantInfo } from '../data/restaurantInfo';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <>
      <PageMeta pageName="contact" />
      
      <main className="bg-background text-text">
        {/* Hero Section */}
        <ContactHero />
        {/* Main Content */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            {/* Contact Info and Map Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactInfo isLoaded={isLoaded} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-full"
              >
                <Map
                  center={{ lat: 32.16117, lng: 34.80625 }}
                  markerTitle={restaurantInfo.name}
                  markerIcon="/images/logos/logo-marker.png"
                />
              </motion.div>
            </div>
            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <ContactFAQ />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}