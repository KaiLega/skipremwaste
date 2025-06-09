import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
