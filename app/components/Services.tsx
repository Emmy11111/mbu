"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

// ─── Data ────────────────────────────────────────────────────────────────────
const services = [
  {
    id: 1,
    number: "01",
    title: "Property Letting & Rental Management",
    description: null,
    bullets: [
      "Tenant sourcing and screening",
      "Lease agreement preparation",
      "Rent collection and reporting",
      "Routine inspections & maintenance coordination",
      "Rent arrears management",
    ],
    note: "Commission: 8–12% monthly rental",
  },
  {
    id: 2,
    number: "02",
    title: "Property Sales (Brokerage)",
    description: null,
    bullets: [
      "Property marketing (online + offline)",
      "Buyer sourcing",
      "Negotiation and transaction management",
      "Offer documentation",
      "Closing coordination",
    ],
    note: "Commission: 3–5% of sales price",
  },
  {
    id: 3,
    number: "03",
    title: "Property Valuation Services",
    description: null,
    bullets: [
      "Market value assessment",
      "Investment advisory valuations",
      "Pre-sale valuation",
      "Bank and financing valuation support",
    ],
    note: "Pricing: Fixed fee or project-based",
  },
  {
    id: 4,
    number: "04",
    title: "Compliance & Documentation",
    description: null,
    bullets: [
      "Title verification support",
      "Land registration guidance",
      "Lease drafting assistance",
      "Property tax compliance guidance",
      "Regulatory advisory",
    ],
    note: "Pricing: Service-based fixed fees",
  },
];

// ─── ServiceRow Component ─────────────────────────────────────────────────────
function ServiceRow({
  number,
  title,
  bullets,
  note,
  isOpen,
  onToggle,
}: {
  number: string;
  title: string;
  bullets: string[];
  note: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-gray-200">
      {/* Clickable header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-8 text-left group cursor-pointer"
      >
        <div className="flex items-baseline gap-6 flex-1 pr-8">
          {/* Number */}
          <span className="text-gray-600 text-2xl font-[500] tabular-nums shrink-0">
            {number}
          </span>
          {/* Title */}
          <span className="text-gray-900 text-xl sm:text-2xl font-[500] leading-snug">
            {title}
          </span>
        </div>

        {/* Arrow icon */}
        <FiArrowUpRight
          className={`text-3xl text-[#0D0D0D] shrink-0 mt-1 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Expandable content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mb-8" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-[3.25rem]">
          <ul className="space-y-2 mb-4">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-500 text-sm sm:text-base leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-green-900 font-medium">{note}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Services Page ────────────────────────────────────────────────────────────
export default function Services() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="min-h-screen bg-white flex items-start">
      <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-16 sm:py-20">

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-12 sm:mb-16">
          Services
        </h1>

        {/* Service Rows */}
        <div>
          {services.map((service) => (
            <ServiceRow
              key={service.id}
              number={service.number}
              title={service.title}
              bullets={service.bullets}
              note={service.note}
              isOpen={openId === service.id}
              onToggle={() => toggle(service.id)}
            />
          ))}
          {/* Bottom border */}
          <div className="border-t border-gray-200" />
        </div>

      </div>
    </section>
  );
}