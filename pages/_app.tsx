import "@/styles/globals.css";
import { MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import type { AppProps } from "next/app";
import '@mantine/core/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<"light" | "dark">({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: "light" | "dark") => {
    const newScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(newScheme);
  };

  return (
    <MantineProvider 
      defaultColorScheme="light"
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
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
