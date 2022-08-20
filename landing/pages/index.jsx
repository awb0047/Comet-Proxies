import loadable from "@loadable/component";
import { NextSeo } from "next-seo";

import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Head = loadable(() => import("next/head"));
const Shell = loadable(() => import("@/components/Shell"));
const Nav = loadable(() => import("@/components/Nav"));
const Hero = loadable(() => import("@/components/Hero"));
const Features = loadable(() => import("@/components/Features"));
const Pricing = loadable(() => import("@/components/Pricing"));
const Faq = loadable(() => import("@/components/Faq"));
const Contact = loadable(() => import("@/components/Contact"));
const Footer = loadable(() => import("@/components/Footer"));

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     // disable: "phone",
  //     duration: 700,
  //     delay: 500,
  //     easing: "ease-out-cubic",
  //   });
  //   AOS.refresh();
  // });
  return (
    <div className="scroll-smooth bg-background text-white">
      <Shell>
        <div>
          <Head>
            {/* Use https://metatags.io for this */}
            <link rel="icon" href="./favicon.ico" />
            <meta
              name="keywords"
              content="Comet Proxies - Reliable performance for botters big and small."
            />
            <title>
              Comet Proxies | Reliable performance for botters big and small.
            </title>
            <meta name="theme-color" content="#478BC9" />
            <meta
              name="title"
              content="Comet Proxies — Reliable performance for botters big and small."
            />
            <meta
              name="description"
              content="Comet is on a mission to deliver high-quality proxies for when speed and consistency matter most."
            />

            <meta property="og:type" content="website" />
            <meta
              property="og:site_name"
              content="Comet Proxies | Reliable performance for botters big and small."
            />
            <meta property="og:url" content="https://www.cometproxies.com/" />
            <meta
              property="og:title"
              content="Comet Proxies — Reliable performance for botters big and small."
            />
            <meta
              property="og:description"
              content="Comet is on a mission to deliver high-quality proxies for when speed and consistency matter most."
            />
            {/* Use something like https://og-image.wzulfikar.com/ for this */}
            <meta
              property="og:image"
              content="https://cdn.discordapp.com/attachments/784637379830218752/1002420684330389625/unknown.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content="https://www.cometproxies.com/"
            />
            <meta
              property="twitter:title"
              content="Comet Proxies | Reliable performance for botters big and small."
            />
            <meta
              property="twitter:description"
              content="Comet is on a mission to deliver high-quality proxies for when speed and consistency matter most."
            />
            {/* Use something like https://og-image.wzulfikar.com/ for this */}
            <meta
              property="twitter:image"
              content="https://cdn.discordapp.com/attachments/784637379830218752/1002420684330389625/unknown.png"
            />
          </Head>
          <NextSeo
            title="Comet Proxies - Home"
            description="Comet is on a mission to deliver high-quality proxies for when speed and consistency matter most."
          />
          <div className="mb-16 w-full scroll-smooth">
            <Nav />
            <Hero />
            <Features />
            <Pricing />
            <Faq />
            <Contact />
          </div>
          <Footer />
        </div>
      </Shell>
    </div>
  );
}

export default App;
