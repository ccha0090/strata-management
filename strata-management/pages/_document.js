// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        {/* You can add global meta tags, fonts, or links here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}