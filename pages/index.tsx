import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <main className="bg-gradient-to-br from-rose-200 to-orange-200 min-h-screen flex items-center">
        <section className="max-w-screen-md mx-auto px-4 md:px-0 flex flex-col items-center gap-4">
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 text-center">Kittisaurus personality test</h1>
          <p className="lg:text-lg xl:text-xl text-gray-700 text-center">Which Kittisaurus cat are you? Let{"’"}s find out!</p>
          <Link href="/test">
            <a className="btn btn-primary">Take the test</a>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
