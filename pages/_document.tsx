import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:site_name" content="codeandstuffs.blog" />
        <meta
          property="og:image"
          content="https://codeandstuffs.blog/logo.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
