'use client'
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Overview from "./components/overview";
import PopularProperty from "./components/properties";
import WhoWeServe from "./components/whoweserve";
import Services from "./components/Services";
import Footer from "./components/footer";
import WhyChooseUs from "./components/whychooseus";
import SearchBar from "./components/filter";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <section className="min-h-screen">
      <NavBar />
      <Hero />
      <Overview />
      <PopularProperty />
      <WhoWeServe />
      <Services />
      <WhyChooseUs />
      <Footer />

      <div>
        <SearchBar />
      </div>
    </section>
  );
}
