import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Space Grotesk font for modern tech look */}
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Meta tags for SEO and sharing */}
        <meta name="description" content="Kyto - AI Implementation 10x Faster, 10x Cheaper" />
        <meta property="og:title" content="Kyto" />
        <meta property="og:description" content="AI Implementation - 10x Faster, 10x Cheaper" />
        <meta property="og:type" content="website" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}