import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fin%2Ffidalmathew&psig=AOvVaw0qXv9i-JQzrQjghzxvCT-E&ust=1711037773876000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLD42seeg4UDFQAAAAAdAAAAABAE"
        />
        <meta
          property="og:image"
          content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fin%2Ffidalmathew&psig=AOvVaw0qXv9i-JQzrQjghzxvCT-E&ust=1711037773876000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLD42seeg4UDFQAAAAAdAAAAABAE"
        />
        <meta property="fc:frame:button:1" content="Click here" />
        <meta property="fc:frame:post_url" content="https://www.google.com" />
        <meta property="fc:frame:input:text" content="Enter your Input" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
