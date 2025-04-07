// src/pages/contact.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactQuickLinks from '../components/contact/ContactQuickLinks';
import ContactFAQ from '../components/contact/ContactFAQ';
import LocationMap from '../components/contact/LocationMap';
import PageNavigation from '../components/ui/PageNavigation';
import { getPageMetadata } from '../utils/metadataUtils';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Define navigation pages for PageNavigation component
  const navigationPages = [
    { path: '/', label: 'בית' },
    { path: '/menu', label: 'תפריט' },
    { path: '/about', label: 'אודות' },
    { path: '/contact', label: 'צור קשר' },
  ];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Get metadata for this page
  const metadata = getPageMetadata('contact');
  const ogImageUrl = metadata.ogImage;
  
  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="website" />
      </Head>
      
      {/* Hero Section */}
      <ContactHero />

      {/* Quick Links Section */}
      <section className="bg-background py-8 border-b border-border/20">
        <div className="container mx-auto px-4">
          <ContactQuickLinks />
        </div>
      </section>

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
      
      {/* Page Navigation */}
      <section className="bg-card border-t border-border/20 py-4">
        <div className="container mx-auto px-4">
          <PageNavigation 
            pages={navigationPages}
            activePage="/contact"
          />
        </div>
      </section>
    </Layout>
  );
}