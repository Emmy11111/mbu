'use client'
import { FiArrowDown } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchBar from "./filter";

export default function HeroImage() {

    function scrollNextPage() {
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
}

  return (
    <section className="relative w-full herosectionparent">
      <div className="md:h-[60vh] w-full hero-section-img relative overflow-hidden">
        <div className="w-full flex justify-end">
<div onClick={scrollNextPage} className="cursor-pointer bg-white pl-6 py-5 flex items-center gap-4 text-base text-gray-600 w-fit lg:pr-[calc((100vw-64rem)/2)] xl:pr-[calc((100vw-72rem)/2)] scrolltoseemore">
  <span className="whitespace-nowrap">Scroll down to explore</span>
  <FiArrowDown className="text-lg" />
</div>
        </div>
        <div className="absolute bottom-0 left-0 w-[35vw] py-6 bg-white" />
      </div>
    </section>
  );
}

