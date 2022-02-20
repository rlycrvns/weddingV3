import React from "react";
import "focus-visible";
import Layout from "@components/Layout";
import "normalize.css";
import "@styles/globals.scss";

export default function CustomApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} key={router.route} />);
}
