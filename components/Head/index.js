import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      {/* General Meta Tags */}
      <title>Riley and Jessica 2022</title>
      <meta name="description" content="Riley and Jessica | August 28, 2022" />
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=10.0, viewport-fit=cover"
      />
      <meta name="google-site-verification" content="XLmMxQtXXWh4IpZ70upuUh08YoJflnfYC26D-EVL800" />
      <meta name="theme-color" content="#fff" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="mask-icon" href="/favicon.svg" color="#fff"></link>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://rileyandjessica.com/" />
      <meta property="og:type" content="website" />
      {<meta property="og:title" content="Riley and Jessica 2022" />}
      {<meta property="og:description" content="Riley and Jessica | August 28, 2022" />}
      {<meta name="og:image" content="" />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="rileyandjessica.com" />
      <meta property="twitter:url" content="https://rileyandjessica.com/" />
      {<meta name="twitter:title" content="Riley and Jessica 2022" />}
      {<meta name="twitter:description" content="Riley and Jessica | August 28, 2022" />}
      {<meta name="twitter:image" content="" />}
    </Head>
  );
};

export default CustomHead;
