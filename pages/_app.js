import Head from "next/head";
import { LoadingProvider, SnackbarProvider } from "../context";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider>
      <LoadingProvider>
        <>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <title>Sunky App</title>
          </Head>
          <Component {...pageProps} />
        </>
      </LoadingProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
