import React, { useEffect } from "react";
import "focus-visible";
import Layout from "@components/Layout";
// import TagManager from "react-gtm-module";
import "normalize.css";
import "@styles/globals.scss";

export default function CustomApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} key={router.route} />);
}
