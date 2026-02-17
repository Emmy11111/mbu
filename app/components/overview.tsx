import { FiArrowUpRight } from 'react-icons/fi';
import { BsHouseDoor } from 'react-icons/bs';
import { BsHouses } from "react-icons/bs";
import Link from 'next/link';

export default function Overview() {
  return (
    <section className="min-h-[50vh] flex items-center mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 w-full items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Take a big step into the future of living
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed">
            MB&U Company Ltd is a full-service real estate and property management company based in Rwanda, providing professional services in property letting, sales brokerage, valuation, and regulatory compliance.
            We operate through a digital platform combined with on-ground expertise to deliver transparent, efficient, and legally compliant property solutions for property owners, investors, and tenants.
          </p>

          <Link href={'/about'}>
            <button className="mt-8 flex items-center gap-2 text-base sm:text-lg font-semibold hover:gap-3 transition-all duration-300 cursor-pointer text-gray-600 hover:text-black">
              Learn More
              <FiArrowUpRight className="text-xl" />
            </button>
          </Link>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-4">
          {/* Happy Customer */}
          <div className="space-y-2 bg-[#061a370a] rounded-lg flex flex-col justify-center p-[30px]">
            <div className="text-xl sm:text-xl lg:text-3xl">
              3500+
            </div>
            <div className="text-gray-500 text-sm sm:text-base font-[500]">
              Happy Customer
            </div>
          </div>

          {/* Years Experience */}

          <div className="space-y-2 bg-[#0D0D0D] rounded-lg flex flex-col justify-center p-[30px]">
            <div className="text-xl text-white sm:text-xl lg:text-3xl">
              10+
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-[500]">
              Years Experience
            </div>
          </div>

          {/* Property Ready */}
          <div className="flex-row flex col-span-2 justify-between space-x-2 w-full relative bg-[#061a370a] p-[30px] rounded-lg">
            <div className='space-y-2 justify-center flex flex-col'>
              <div className="text-xl sm:text-xl lg:text-3xl">
                10,000+
              </div>
              <div className="text-gray-500 text-sm sm:text-base font-[500]">
                Property Ready
              </div>
            </div>

            {/* House Icons */}
            <div className="opacity-10">
              <BsHouses className="text-6xl sm:text-9xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}