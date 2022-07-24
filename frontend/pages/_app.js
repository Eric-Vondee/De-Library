import Layout from "../components/layout/Layout";
import { Web3Provider } from "../contexts/Web3Context";
import { default as NextHead } from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <NextHead>
        <base href="/" />
        <meta charSet="utf-8" />
        <title>De-Library - A decentralized library</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </NextHead>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  );
}

export default MyApp;
