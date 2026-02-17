'use client'
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Overview from "./components/overview";
import PopularProperty from "./components/properties";
import WhoWeServe from "./components/whoweserve";
import Services from "./components/Services";
import Footer from "./components/footer";
import CoreValues from "./components/ourvalues";
import WhyChooseUs from "./components/whychooseus";
import SearchBar from "./components/filter";
import { useEffect, useState } from "react";

export default function Home() {

  const [width, setWidth] = useState<any>()

  useEffect(()=>{
   if(typeof window!='undefined'){
    setWidth(window.innerWidth)
   }
  },[])

  return (
    <>
    {
      width>0 && (
    <>
    {
      width<750?
 <div className="w-screen h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-2">Mobile Version Coming Soon!</h1>
        <p className="text-gray-700">
          Our website is not yet optimized for mobile devices. Please visit us
          on a desktop for the full experience.
        </p>
      </div>
      :
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
    }
    </>
      )
    }
    </>
  );
}
