// src/pages/contact.jsx
import { useState, useEffect } from 'react';
import PageMeta from '../components/meta/PageMeta';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactFAQ from '../components/contact/ContactFAQ';
import LocationMap from '../components/contact/LocationMap';

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
        <section className="bg-card py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Column - Contact Info */}
              <ContactInfo isLoaded={isLoaded} />
              
              {/* Right Column - Contact Form */}
              <ContactForm isLoaded={isLoaded} />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-gold">המיקום שלנו</h2>
            <LocationMap />
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-primaryDark py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <ContactFAQ />
          </div>
        </section>
      </main>
    </>
  );
}