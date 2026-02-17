import { FiArrowUpRight } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const properties = [
  {
    id: 1,
    type: "House",
    name: "Gisozi Residence",
    location: "Kigali, Gisozi",
    price: "500,000 RWF",
    image: "https://capitalandstone.com/wp-content/uploads/2021/11/New-Project.jpg",
  },
  {
    id: 2,
    type: "Apartment",
    name: "Kacyiru Apartment",
    location: "Kigali, Kacyiru",
    price: "1,500,000 RWF",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSXZkLNkX82rpxghfYPlWQfAHWAtt3d31HlAPbp2ZuWe0p0LP2u",
  },
  {
    id: 3,
    type: "Villa",
    name: "Kimironko Villa",
    location: "Kigali, Kimironko",
    price: "300,000 RWF",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=80",
  },
];

// ─── PropertyCard Component ───────────────────────────────────────────────────
function PropertyCard({ type, name, location, price, image }:any) {
  return (
    <div className="flex flex-col group">
      {/* Image */}
      <div className="overflow-hidden mb-4 aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Type Badge */}
      <span className="inline-block self-start text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1 mb-3">
        {type}
      </span>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>

      {/* Location */}
      <div className="flex items-center gap-1 text-gray-600 text-sm mb-5">
        <MdLocationOn className="text-base shrink-0" />
        <span>{location}</span>
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xl font-[900] text-gray-900">{price}</span>
        <a
          href="#"
          className="text-sm font-medium bg-[#0D0D0D] text-white px-4 py-2 rounded-full hover:bg-black transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
        >
          See Details
        </a>
      </div>
    </div>
  );
}

// ─── Page Section ─────────────────────────────────────────────────────────────
export default function PopularProperty() {
  return (
    <section className="min-h-screen bg-white flex items-center" id="properties">
      <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-16 sm:py-20">

        {/* Header */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Popular Property
          </h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm sm:text-base font-medium text-gray-900 hover:gap-2 transition-all duration-200"
          >
            See More
            <FiArrowUpRight className="text-lg" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}