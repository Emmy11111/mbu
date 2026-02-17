
    import Image from "next/image";
    import SmallHouse from "../public/smallhouse.jpg";
import HeroImage from "./hero-image";
    
    export default function Hero() {
      return (
        <section className="">
          <div className="">
        <div className="md:h-[44vh] flex items-center justify-center">
          <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 ">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Professional Real Estate &<br className="hidden sm:block" />
              <div className="flex flex-row items-center">
                <p>Property Management</p>
                <img src={"https://images.adsttc.com/media/images/5b32/5e2a/f197/cc67/3400/02f7/large_jpg/_Featured_Image.jpg?1530027540"} alt="Small House" className="ml-4 w-[140px] h-[45px] rounded-3xl" />
              </div>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600">
            Transparent, technology-driven property solutions in Rwanda—delivering real estate, management, valuation, and compliance with clarity and trust.
            </p>
          </div>
        </div>

        <HeroImage />
      </div>
        </section>
      );
    }
    