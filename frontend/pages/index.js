import Head from "next/head";

import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>De Library</title>
        <meta name="description" content="A web3 online library platfrom." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Body />

      <Footer />
    </div>
  );
}
