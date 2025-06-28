import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Nunito:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <style>{`
          html, body {
            font-family: 'Inter', 'Nunito', sans-serif;
            font-size: 17px;
            letter-spacing: 0.01em;
            background: var(--bg-primary);
            color: var(--text-primary);
            min-height: 100vh;
            scroll-behavior: smooth;
          }
        `}</style>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
