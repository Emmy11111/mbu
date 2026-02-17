"use client";

import {
  MdVerified,
  MdVisibility,
  MdWorkspacePremium,
  MdAccountBalance,
  MdPeople,
  MdLightbulb,
} from "react-icons/md";

const values = [
  { id: 1, icon: <MdVerified className="text-lg" />, iconBg: "bg-blue-50", iconColor: "text-blue-400", title: "Integrity" },
  { id: 2, icon: <MdVisibility className="text-lg" />, iconBg: "bg-amber-50", iconColor: "text-amber-400", title: "Transparency" },
  { id: 3, icon: <MdWorkspacePremium className="text-lg" />, iconBg: "bg-purple-50", iconColor: "text-purple-400", title: "Professionalism" },
  { id: 4, icon: <MdAccountBalance className="text-lg" />, iconBg: "bg-rose-50", iconColor: "text-rose-400", title: "Accountability" },
  { id: 5, icon: <MdPeople className="text-lg" />, iconBg: "bg-green-50", iconColor: "text-green-400", title: "Client-Centered" },
  { id: 6, icon: <MdLightbulb className="text-lg" />, iconBg: "bg-orange-50", iconColor: "text-orange-400", title: "Innovation" },
];

export default function CoreValues() {
  return (
    <section className="bg-white w-full py-10 sm:py-14">
      <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0">

        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D0D0D]">
            Our Core Values
          </h2>
          <span className="text-xs text-gray-400 hidden sm:block">
            {values.length} values
          </span>
        </div>

        {/* Horizontal scroll strip */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
          {values.map((v) => (
            <div
              key={v.id}
              className="snap-start shrink-0 flex items-center gap-3 bg-white border border-gray-100 rounded-full px-5 py-3 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 cursor-default select-none"
            >
              {/* Icon bubble */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${v.iconBg} ${v.iconColor}`}>
                {v.icon}
              </div>
              {/* Label */}
              <span className="text-sm font-semibold text-[#0D0D0D] whitespace-nowrap">
                {v.title}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Hide scrollbar globally for this component */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}