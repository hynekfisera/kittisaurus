import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
