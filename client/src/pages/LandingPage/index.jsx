<<<<<<< Updated upstream
import React from "react";
import { Main } from "../../components";

export function LandingPage( props ) {
    return (
        <Main/>
=======
import { Nav, Shell, Hero, Footer, Contact, Faq, Pricing, Features } from "../../components/LandingWrapper";
import { NextSeo } from "next-seo";
import Head from "next/head";
import '../../utils/styles/new-landing.css'

export function LandingPage( props ) {
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
>>>>>>> Stashed changes
    )
}