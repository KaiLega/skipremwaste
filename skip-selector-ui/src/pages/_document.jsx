import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const setInitialTheme = `
    (function() {
      try {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (_) {}
    })();
  `;

  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* Meta */}
        <meta name="theme-color" content="#0037C1" />
        <meta name="description" content="Select the perfect skip size for your project – Skip Selector UI." />
        <meta property="og:title" content="Choose Your Skip Size – Skip RemWaste" />
        <meta property="og:description" content="Select the perfect skip size for your project." />
        <meta property="og:image" content="/favicon/android-chrome-512x512.png" />
        <meta property="og:type" content="website" />
        {/* 👇 Script to set theme before hydration */}
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </Head>
      <body className="bg-white text-black dark:bg-[#1C1C1C] dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
