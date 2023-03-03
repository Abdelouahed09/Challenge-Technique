import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "../components/layouts/main";
import { store } from "../store";
import { Provider } from "react-redux";

function CHALLENGE({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Unsplash V-2.0</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="" />
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </>
  );
}

export default CHALLENGE;
