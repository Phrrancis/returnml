import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import ShopifyDemoSection from "./components/ShopifyDemoSection";
import ApiSample from "./components/ApiSample";
import Differentiators from "./components/Differentiators";
import Outcome from "./components/Outcome";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-white dark:bg-zinc-950 font-sans">
      <Nav />
      <main id="main" className="flex flex-col items-center">
        <Hero />
        <Problem />
        <HowItWorks />
        <ShopifyDemoSection />
        <ApiSample />
        <Differentiators />
        <Outcome />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
