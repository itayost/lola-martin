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