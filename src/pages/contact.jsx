// src/pages/contact.jsx
import Head from 'next/head';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactFAQ from '../components/contact/ContactFAQ';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>צור קשר - לולה מרטין</title>
        <meta name="description" content="צור קשר עם מסעדת לולה מרטין - כתובת, טלפון, שעות פתיחה, שאלות נפוצות ועוד." />
      </Head>

      <main className="bg-background text-foreground">
        {/* Hero */}
        <ContactHero />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ContactInfo isLoaded={true} />

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-6 border-r-4 border-accent pr-4">שאלות נפוצות</h2>
              <ContactFAQ />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}