import { FiArrowDown } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function SearchBar() {
    return (
        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[92%] max-w-6xl">
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
    )
}