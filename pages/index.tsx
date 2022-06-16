import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kittisaurus personality test: Which cat are you?</title>
        <meta name="description" content="Kittisaurus personality test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-5xl">Hello World</h1>
      </main>
    </>
  );
};

export default Home;
