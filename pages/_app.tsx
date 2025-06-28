import "@/styles/globals.css";
import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import type { AppProps } from "next/app";
import '@mantine/core/styles.css';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'mantine-color-scheme' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'blue',
        fontFamily: 'Inter, Arial, sans-serif',
        headings: { fontFamily: 'Inter, Arial, sans-serif' },
        colors: {
          dark: [
            '#C1C2C5',
            '#A6A7AB',
            '#909296',
            '#5C5F66',
            '#373A40',
            '#2C2E33',
            '#25262B',
            '#1A1B1E',
            '#141517',
            '#101113',
          ],
        },
      }}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="auto"
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
