'use client'
import { useEffect, useRef, useState } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

// ─── Sections Data ────────────────────────────────────────────────────────────
const sections = [
  {
    id: "01",
    title: "Acceptance of Terms",
    content: `By accessing or using the MB&U Company Ltd website and services, you confirm that you are at least 18 years of age, have read and understood these Terms and Conditions, and agree to be bound by them. If you do not agree with any part of these terms, you must not use our services.`,
  },
  {
    id: "02",
    title: "Services Provided",
    content: `MB&U Company Ltd provides real estate and property management services including, but not limited to, property letting and rental management, sales brokerage, property valuation, and compliance and documentation assistance. All services are subject to a separate service agreement and applicable commission or fee structure as agreed upon between MB&U and the client.`,
  },
  {
    id: "03",
    title: "Commission & Fees",
    content: `Our services are commission-based or fixed-fee as outlined in your service agreement. Rental management commissions range between 8–12% of monthly rental income. Sales brokerage commissions range between 3–5% of the agreed sales price. Valuation and compliance services are priced on a fixed-fee or project basis. All fees are disclosed in writing prior to service commencement. MB&U reserves the right to update its fee structure with reasonable notice.`,
  },
  {
    id: "04",
    title: "Client Responsibilities",
    content: `As a client of MB&U Company Ltd, you agree to provide accurate, complete, and up-to-date information regarding your property and personal details. You are responsible for ensuring that any property listed through our platform is legally owned or authorized for listing by you. You agree to cooperate fully with MB&U in the execution of agreed services, including providing timely access to properties and relevant documentation.`,
  },
  {
    id: "05",
    title: "Legal Compliance",
    content: `All property transactions facilitated by MB&U Company Ltd are conducted in compliance with the laws and regulations of the Republic of Rwanda. Clients are responsible for ensuring their properties meet all relevant legal, safety, and regulatory requirements. MB&U provides guidance on compliance matters but does not offer legal advice. We recommend clients seek independent legal counsel where necessary.`,
  },
  {
    id: "06",
    title: "Intellectual Property",
    content: `All content on the MB&U website including text, images, logos, graphics, and data is the intellectual property of MB&U Company Ltd unless otherwise stated. You may not reproduce, distribute, or use any content from this site without prior written permission from MB&U. Property listings submitted by clients remain the property of the respective client, though MB&U retains the right to use them for marketing purposes during the active service period.`,
  },
  {
    id: "07",
    title: "Privacy & Data Protection",
    content: `MB&U Company Ltd is committed to protecting your personal data. Information collected through our platform is used solely for the purpose of delivering our services and improving your experience. We do not sell or share personal information with third parties except where required by law or necessary to fulfil your service agreement. For full details, please refer to our Privacy Policy.`,
  },
  {
    id: "08",
    title: "Limitation of Liability",
    content: `MB&U Company Ltd shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services or reliance on information provided on our platform. While we take every measure to ensure the accuracy of property listings and valuations, MB&U does not guarantee specific outcomes or returns on any property transaction. Our liability is limited to the value of fees paid for the specific service in dispute.`,
  },
  {
    id: "09",
    title: "Termination of Services",
    content: `Either party may terminate a service agreement by providing written notice as specified in the individual service contract. MB&U reserves the right to suspend or terminate access to its services immediately if a client is found to be in breach of these Terms and Conditions, engaged in fraudulent activity, or in violation of any applicable law. Upon termination, any outstanding fees remain payable.`,
  },
  {
    id: "10",
    title: "Changes to These Terms",
    content: `MB&U Company Ltd reserves the right to update or modify these Terms and Conditions at any time. Changes will be communicated via our website and, where applicable, by direct notification to active clients. Continued use of our services following any update constitutes acceptance of the revised terms. We encourage you to review this page periodically.`,
  },
  {
    id: "11",
    title: "Governing Law",
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Rwanda. Any disputes arising from these terms or your use of MB&U services shall be subject to the exclusive jurisdiction of the courts of Rwanda. We encourage clients to reach out to us directly to resolve any concerns before pursuing formal legal action.`,
  },
  {
    id: "12",
    title: "Contact Us",
    content: `If you have any questions about these Terms and Conditions, please contact us at info@mbandu.rw or call us at +250 788 000 000. Our team is available Monday to Friday, 8:00 AM – 5:00 PM (CAT), and we aim to respond to all inquiries within 24 hours.`,
  },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState<string | null>("section-01");
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(`section-${s.id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setActiveSection(`section-${sectionId}`);
    isProgrammaticScroll.current = true;
    document.getElementById(`section-${sectionId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => { isProgrammaticScroll.current = false; }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[45vh] min-h-[340px] w-full">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1800&auto=format&fit=crop&q=85"
            alt="Terms and Conditions"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

          <div className="relative h-full flex items-end">
            <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 pb-12 sm:pb-14">
              <span className="text-white/70 text-xs tracking-widest uppercase font-medium block mb-4">
                Legal
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-2xl">
                Terms &amp; Conditions
              </h1>
              <p className="mt-4 text-white/70 text-sm sm:text-base max-w-xl leading-relaxed">
                Last updated: February 2026. Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ──────────────────────────────────────────────────── */}
      <div className="bg-[#0D0D0D]">
        <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-7">
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
            These Terms and Conditions govern your use of MB&amp;U Company Ltd's website and services.
            By engaging with us, you agree to the following terms. MB&amp;U operates under the laws
            of the Republic of Rwanda and is committed to transparent, ethical, and professional conduct.
          </p>
        </div>
      </div>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20 items-start">

          {/* ── Sticky Table of Contents (desktop) ───────────────────── */}
          <aside className="hidden lg:block sticky top-10 self-start">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-5">
              Contents
            </p>
            <nav className="flex flex-col gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#section-${s.id}`}
                  onClick={(e) => handleNavClick(e, s.id)}
                  className={`flex items-start gap-3 py-1.5 text-sm transition-all duration-200 ${
                    activeSection === `section-${s.id}`
                      ? "text-[#0D0D0D] font-semibold"
                      : "text-gray-600 hover:text-[#0D0D0D]"
                  }`}
                >
                  <span className={`text-xs tabular-nums font-[500] shrink-0 mt-0.5 transition-colors duration-200 ${
                    activeSection === `section-${s.id}` ? "text-[#0D0D0D] font-bold" : "text-gray-500"
                  }`}>
                    {s.id}
                  </span>
                  <span className="leading-snug">{s.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* ── Sections ────────────────────────────────────────────────── */}
          <div>
            {sections.map((s, index) => (
              <div
                key={s.id}
                id={`section-${s.id}`}
                className={`border-t border-gray-100 py-10 ${
                  index === sections.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex items-baseline gap-5 mb-5">
                  <span className="text-xs text-gray-500 tabular-nums font-bold shrink-0">
                    {s.id}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0D0D0D]">{s.title}</h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-9">
                  {s.content}
                </p>
              </div>
            ))}

            {/* Bottom note */}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-[#0D0D0D]">MB&amp;U Company Ltd</span> —
                Registered in Rwanda. For questions regarding these terms, contact us at{" "}
                <a href="mailto:info@mbandu.rw" className="font-semibold text-[#0D0D0D] underline underline-offset-2">
                  info@mbandu.rw
                </a>{" "}
                or call{" "}
                <a href="tel:+250788000000" className="font-semibold text-[#0D0D0D] underline underline-offset-2">
                  +250 788 000 000
                </a>.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}