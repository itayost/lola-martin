// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="he" dir="rtl">
        <Head>
          {/* Global Open Graph and Meta Tags can go here */}
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <link 
            rel="preload" 
            href="/_next/static/chunks/node_modules_framer-motion_dist_es_index_mjs.js" 
            as="script" 
          />
          
          {/* Preload critical images */}
          <link
            rel="preload"
            href="/images/contact/contact-hero.jpg"
            as="image"
            type="image/jpeg"
          />
          <link
            rel="preload"
            href="/images/logos/lola-marker.png"
            as="image"
            type="image/png"
          />
          
          {/* Facebook Page Verification */}
          <meta property="fb:pages" content="lolamartinil" />
          
          {/* JSON-LD Structured Data for Restaurant */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Restaurant",
                "name": "לולה מרטין",
                "image": "https://lola-martin.vercel.app/images/og/default.jpg",
                "url": "https://lola-martin.vercel.app",
                "telephone": "09-7614242",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "שדרות אבא אבן 10",
                  "addressLocality": "הרצליה פיתוח",
                  "addressRegion": "Israel",
                  "postalCode": ""
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 32.161198,
                  "longitude": 34.808755
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                    "opens": "12:00",
                    "closes": "22:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Friday",
                    "opens": "12:00",
                    "closes": "23:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "12:00",
                    "closes": "22:00"
                  }
                ],
                "servesCuisine": ["Mediterranean", "Seafood"],
                "priceRange": "₪₪₪",
                "menu": "https://lola-martin.vercel.app/menu",
                "acceptsReservations": "True"
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;