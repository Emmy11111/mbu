import { MdPerson, MdFlight, MdTrendingUp, MdApartment, MdBusiness, MdPublic } from "react-icons/md";

// ─── Data ────────────────────────────────────────────────────────────────────
const cards = [
  {
    id: 1,
    icon: <MdPerson className="text-xl text-white" />,
    title: "Individual Landlords",
    description: "Professional management for your rental properties.",
  },
  {
    id: 2,
    icon: <MdFlight className="text-xl text-white" />,
    title: "Diaspora Property Owners",
    description: "Remote property management you can trust.",
  },
  {
    id: 3,
    icon: <MdTrendingUp className="text-xl text-white" />,
    title: "Real Estate Investors",
    description: "Maximize your investment returns.",
  },
  {
    id: 4,
    icon: <MdApartment className="text-xl text-white" />,
    title: "Property Developers",
    description: "Sales and marketing support for new developments.",
  },
  {
    id: 5,
    icon: <MdBusiness className="text-xl text-white" />,
    title: "Corporate Tenants",
    description: "Premium properties for your business needs.",
  },
  {
    id: 6,
    icon: <MdPublic className="text-xl text-white" />,
    title: "Foreign Investors",
    description: "Navigate real estate market with confidence.",
  },
];

// ─── ServiceCard Component ────────────────────────────────────────────────────
function ServiceCard({ icon, title, description, borderRight, borderBottom }:any) {
  return (
    <div
      className={[
        "p-5 lg:p-7 flex flex-col gap-4",
        borderRight ? "border-r border-white/10" : "",
        borderBottom ? "border-b border-white/10" : "",
      ].join(" ")}
    >
      {/* Icon + Title Row */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <h3 className="text-white text-lg font-semibold leading-tight">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-white/40 text-sm leading-relaxed truncate">{description}</p>
    </div>
  );
}

// ─── WhoWeServe Section ───────────────────────────────────────────────────────
export default function WhoWeServe() {
  return (
   <section className=" flex flex-col justify-center">
     <div className="bg-[#111111] w-full">
      <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-8 sm:py-12 border-x-[1px] border-white/10">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Who We Serve
          </h2>
          <p className="text-white/40 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Our services have been designed with attention to every detail, both
            technically and visually.
          </p>
        </div>

        {/* Grid with outer border + internal dividers */}
        <div className="border border-l-[0px] border-r-[0px] border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const col = index % 3;
            const row = Math.floor(index / 3);
            const totalRows = Math.ceil(cards.length / 3);

            return (
              <ServiceCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
                borderRight={col < 2}
                borderBottom={row < totalRows - 1}
              />
            );
          })}
        </div>

      </div>
    </div>
   </section>
  );
}