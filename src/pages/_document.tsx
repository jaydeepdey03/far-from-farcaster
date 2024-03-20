import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="/next.svg" />
        <meta property="og:image" content="/next.svg" />
        <meta property="fc:frame:button:1" content="Click here" />
        <meta property="fc:frame:post_url" content="google.com" />
        <meta property="fc:frame:input:text" content="Enter your Input" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
