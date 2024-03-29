import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <div hidden>
        <span id="new-window-0">Opens in a new window</span>
        <span id="new-window-1">Opens an external site</span>
        <span id="new-window-2">Opens an external site in a new window</span>
      </div>
    </>
  );
}

export const getLayout = (page) => <Layout>{page}</Layout>;
