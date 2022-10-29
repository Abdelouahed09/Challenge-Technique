import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "../components/layouts/main";

function CHALLENGE({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Challenge Technique</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default CHALLENGE;
