import "@/styles/globals.css";
import "@/styles/embla.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import { initTracker, recordPage } from "../../lib/tracker";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initTracker();
    recordPage(window.location.pathname);

    const handleRouteChange = (url) => {
      const path = url.split("?")[0];
      recordPage(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, []);
  const pathname = router.pathname;
  const asPath = router.asPath;

  const hasBgImage =
    pathname === "/" ||
    pathname === "/cat1" ||
    pathname === "/products" ||
    pathname === "/concrete-plants" ||
    pathname === "/asphalt-plants" ||
    pathname === "/road-construction-machinery" ||
    (pathname.startsWith("/products") && pathname.split("/").length === 3);

  const siteUrl = "https://www.atlastechnologiesindia.com";
  const cleanPath = asPath.split("?")[0].split("#")[0];
  const canonicalUrl = `${siteUrl}${cleanPath === "/" ? "" : cleanPath}`;

  // Skip canonical for ALL blog pages (they handle their own)
  const isBlogPage = pathname.startsWith("/blog");

  return (
    <>
      {!isBlogPage && (
        <Head>
          <link rel="canonical" href={canonicalUrl} />
        </Head>
      )}

      <Header hasBgImage={hasBgImage} />
      <Component {...pageProps} />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
