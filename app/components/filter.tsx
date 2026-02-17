import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SearchBar() {
    return (
        <>
            {/* ─── DESKTOP (lg+): original layout, untouched ─────────────────────── */}
            <div className="hidden lg:block mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 absolute bottom-[10px] left-1/2 -translate-x-1/2">
                <div className="backdrop-blur-xl bg-black/20 rounded-full px-6 py-4 flex items-center text-white shadow-lg">
                    {/* Category */}
                    <div className="flex-1">
                        <p className="text-xs text-white/80 mb-1">Category</p>
                        <div className="flex items-center justify-between cursor-pointer">
                            <span className="font-medium">Select Category</span>
                            <MdKeyboardArrowDown className="text-xl" />
                        </div>
                    </div>
                    <div className="h-10 w-px bg-white/30 mx-6" />
                    {/* Location */}
                    <div className="flex-1">
                        <p className="text-xs text-white/80 mb-1">Location</p>
                        <div className="flex items-center justify-between cursor-pointer">
                            <span className="font-medium">All Cities</span>
                            <MdKeyboardArrowDown className="text-xl" />
                        </div>
                    </div>
                    <div className="h-10 w-px bg-white/30 mx-6" />
                    {/* Property Type */}
                    <div className="flex-1">
                        <p className="text-xs text-white/80 mb-1">Property Type</p>
                        <div className="flex items-center justify-between cursor-pointer">
                            <span className="font-medium">Select Type</span>
                            <MdKeyboardArrowDown className="text-xl" />
                        </div>
                    </div>
                    <div className="h-10 w-px bg-white/30 mx-6" />
                    {/* Price */}
                    <div className="flex-1">
                        <p className="text-xs text-white/80 mb-1">Price</p>
                        <div className="flex items-center justify-between cursor-pointer">
                            <span className="font-medium">Max Price</span>
                            <MdKeyboardArrowDown className="text-xl" />
                        </div>
                    </div>
                    {/* Search Button */}
                    <div className="ml-4">
                        <button className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-200 transition">
                            <IoSearchOutline className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ─── MOBILE (below lg): stacked card layout ────────────────────────── */}
            <div className="lg:hidden absolute bottom-[-110px] left-0 right-0 px-4">
                <div className="backdrop-blur-xl bg-black/30 rounded-2xl shadow-xl text-white overflow-hidden">

                    {/* Row 1: Category + Location side-by-side */}
                    <div className="flex">
                        <div className="flex-1 px-4 py-3 cursor-pointer">
                            <p className="text-[10px] text-white/70 mb-0.5 uppercase tracking-wide">Category</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium truncate">Select Category</span>
                                <MdKeyboardArrowDown className="text-lg ml-1 flex-shrink-0" />
                            </div>
                        </div>

                        <div className="w-px bg-white/20 my-3" />

                        <div className="flex-1 px-4 py-3 cursor-pointer">
                            <p className="text-[10px] text-white/70 mb-0.5 uppercase tracking-wide">Location</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium truncate">All Cities</span>
                                <MdKeyboardArrowDown className="text-lg ml-1 flex-shrink-0" />
                            </div>
                        </div>
                    </div>

                    {/* Horizontal divider */}
                    <div className="h-px bg-white/20 mx-4" />

                    {/* Row 2: Property Type + Price side-by-side */}
                    <div className="flex">
                        <div className="flex-1 px-4 py-3 cursor-pointer">
                            <p className="text-[10px] text-white/70 mb-0.5 uppercase tracking-wide">Property Type</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium truncate">Select Type</span>
                                <MdKeyboardArrowDown className="text-lg ml-1 flex-shrink-0" />
                            </div>
                        </div>

                        <div className="w-px bg-white/20 my-3" />

                        <div className="flex-1 px-4 py-3 cursor-pointer">
                            <p className="text-[10px] text-white/70 mb-0.5 uppercase tracking-wide">Price</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium truncate">Max Price</span>
                                <MdKeyboardArrowDown className="text-lg ml-1 flex-shrink-0" />
                            </div>
                        </div>
                    </div>

                    {/* Horizontal divider */}
                    <div className="h-px bg-white/20" />

                    {/* Search Button — full width */}
                    <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-white text-black font-semibold text-sm cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition">
                        <IoSearchOutline className="text-lg" />
                        Search Properties
                    </button>

                </div>
            </div>
        </>
    );
}