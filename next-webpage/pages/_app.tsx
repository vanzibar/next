import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Evan Price Personal Site</title>
        <meta
          name="description"
          content="The personal site of Evan Price. Showcasing professional and personal software development projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
