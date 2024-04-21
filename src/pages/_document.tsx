import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  /* eslint-disable */
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/icon" href="/assets/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" id="google-font" />

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />

        <script async src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
        <script async src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossOrigin="anonymous"></script>
        <script async src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous"></script>
        <script async src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
  /* eslint-enable */
}
