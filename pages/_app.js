import "@/styles/globals.css";
import Header from "@/components/sections/Header";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/sections/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </>
  );
}
