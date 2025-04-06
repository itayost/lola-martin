// src/pages/contact.jsx
import { useState, useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <ContactHero />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <ContactInfo isLoaded={isLoaded} />
          
          {/* Right Column - Contact Form */}
          <ContactForm isLoaded={isLoaded} />
        </div>
      </div>
    </main>
  );
}