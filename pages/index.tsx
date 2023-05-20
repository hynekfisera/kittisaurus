import type { NextPage } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Wrapper from "../components/Wrapper";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Wrapper>
        <h1 className="text-xl lg:text-2xl font-medium text-gray-800 text-center">Kittisaurus personality test</h1>
        <p className="lg:text-lg text-gray-600 text-center -mt-2">Which Kittisaurus cat are you? Let{"’"}s find out!</p>
        <Link href="/test">
          <a className="btn btn-primary">Take the test</a>
        </Link>
      </Wrapper>
    </>
  );
};

export default Home;
