import "@/styles/globals.css";
import { MantineProvider } from '@mantine/core';
import type { AppProps } from "next/app";
import '@mantine/core/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      primaryColor: 'blue',
      fontFamily: 'Inter, Arial, sans-serif',
      headings: { fontFamily: 'Inter, Arial, sans-serif' },
    }}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
