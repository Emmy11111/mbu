"use client";

import {
  MdVerified,
  MdDevices,
  MdGavel,
  MdAttachMoney,
  MdManageSearch,
  MdFlight,
} from "react-icons/md";

// ─── Data ────────────────────────────────────────────────────────────────────
const reasons = [
  {
    id: 1,
    icon: <MdVerified className="text-xl" />,
    title: "Verified Listings",
    description: "All properties thoroughly verified for authenticity before being listed on our platform.",
  },
  {
    id: 2,
    icon: <MdDevices className="text-xl" />,
    title: "Technology-Driven",
    description: "Digital platform built for maximum accountability and seamless client experience.",
  },
  {
    id: 3,
    icon: <MdGavel className="text-xl" />,
    title: "Legal Compliance",
    description: "All transactions are legally compliant, documented, and fully secure.",
  },
  {
    id: 4,
    icon: <MdAttachMoney className="text-xl" />,
    title: "Transparent Pricing",
    description: "Clear commission structure with absolutely no hidden fees or surprises.",
  },
  {
    id: 5,
    icon: <MdManageSearch className="text-xl" />,
    title: "Professional Screening",
    description: "Thorough tenant and buyer verification process for every transaction.",
  },
  {
    id: 6,
    icon: <MdFlight className="text-xl" />,
    title: "Diaspora Focused",
    description: "Specialised services for diaspora property owners managing assets remotely.",
  },
];

// ─── ReasonCard ───────────────────────────────────────────────────────────────
function ReasonCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-5">
      {/* Icon box — same role as portrait in testimonials */}
      <div className="w-14 h-14 rounded-lg bg-[#F8F8F8] flex items-center justify-center text-gray-500 shrink-0">
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-gray-500 text-base leading-relaxed mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[#0D0D0D] text-base">{title}</p>
          <span className="text-4xl text-gray-200 font-serif leading-none select-none">"</span>
        </div>
      </div>
    </div>
  );
}

// ─── WhyChooseUs ─────────────────────────────────────────────────────────────
export default function WhyChooseUs() {
  return (
    <section className="bg-white w-full py-16 sm:py-20 sm:pt-8">
      <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0">

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] text-center mb-14 sm:mb-16">
          Why Choose MB&amp;U?
        </h2>

        {/* Row 1 — first 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {reasons.map((r) => (
            <ReasonCard
              key={r.id}
              icon={r.icon}
              title={r.title}
              description={r.description}
            />
          ))}
        </div>

        {/* Dash indicators — decorative, static */}
        <div className="flex items-center justify-center gap-2 mt-14">
          <div className="h-[3px] w-12 rounded-full bg-[#0D0D0D]" />
          <div className="h-[3px] w-5 rounded-full bg-gray-300" />
          <div className="h-[3px] w-5 rounded-full bg-gray-300" />
        </div>

      </div>
    </section>
  );
}