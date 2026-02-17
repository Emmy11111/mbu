'use client'
import { useEffect, useRef, useState } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

// ─── Sections Data ────────────────────────────────────────────────────────────
const sections = [
  {
    id: "01",
    title: "Introduction",
    content: `MB&U Company Ltd ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and share information about you when you use our website, platform, or services. By using our services, you agree to the collection and use of information as described in this policy.`,
  },
  {
    id: "02",
    title: "Information We Collect",
    content: `We collect information you provide directly to us, including your full name, email address, phone number, and property details when you register, list a property, or contact us. We also collect information automatically when you use our platform, such as IP address, browser type, pages visited, and time spent on pages. For clients engaging our property management or brokerage services, we may also collect identification documents, proof of ownership, and financial details as required for service delivery.`,
  },
  {
    id: "03",
    title: "How We Use Your Information",
    content: `We use the information we collect to provide, operate, and improve our services; to communicate with you about your account, listings, and transactions; to verify your identity and ensure legal compliance; to process payments and manage commissions; to send you relevant updates, service notifications, and marketing communications where you have consented; and to meet our legal and regulatory obligations under the laws of the Republic of Rwanda.`,
  },
  {
    id: "04",
    title: "Legal Basis for Processing",
    content: `We process your personal data on the following legal bases: performance of a contract, where processing is necessary to deliver the services you have requested; compliance with a legal obligation, where we are required by Rwandan law to process your data; legitimate interests, where processing is necessary for our business operations and does not override your rights; and your consent, where you have explicitly agreed to a specific use of your data, such as receiving marketing communications.`,
  },
  {
    id: "05",
    title: "Sharing Your Information",
    content: `We do not sell your personal data to third parties. We may share your information with trusted service providers who assist us in operating our platform and delivering services, such as payment processors and IT providers, under strict confidentiality agreements. We may also share your information with potential buyers, tenants, or landlords as necessary to complete a property transaction, and with government or regulatory authorities where required by law.`,
  },
  {
    id: "06",
    title: "Data Retention",
    content: `We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including meeting legal, accounting, or reporting requirements. For active clients, data is retained for the duration of the service agreement and for a period of five (5) years thereafter, in line with Rwandan commercial record-keeping requirements. You may request deletion of your data subject to our legal retention obligations.`,
  },
  {
    id: "07",
    title: "Data Security",
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. Our platform uses industry-standard encryption and access controls. While we take every reasonable precaution, no method of transmission over the internet is 100% secure. We encourage you to use a strong password and to notify us immediately if you suspect any unauthorised access to your account.`,
  },
  {
    id: "08",
    title: "Your Rights",
    content: `You have the right to access the personal data we hold about you; to request correction of inaccurate or incomplete data; to request deletion of your data, subject to our legal retention obligations; to withdraw consent for marketing communications at any time; to request restriction of or object to certain types of processing; and to lodge a complaint with a relevant data protection authority. To exercise any of these rights, please contact us at Stewardshipdivine@gmail.com.`,
  },
  {
    id: "09",
    title: "Cookies & Tracking",
    content: `Our website uses cookies and similar tracking technologies to enhance your experience, analyse site traffic, and personalise content. Essential cookies are required for the platform to function correctly. Analytics cookies help us understand how visitors interact with our site. You may control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our platform.`,
  },
  {
    id: "10",
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites or services. This Privacy Policy does not apply to those external sites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services you access through links on our platform.`,
  },
  {
    id: "11",
    title: "Children's Privacy",
    content: `Our services are not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that we have inadvertently collected data from a person under 18, we will take steps to delete that information promptly. If you believe we may have collected data from a minor, please contact us immediately.`,
  },
  {
    id: "12",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by posting the updated policy on our website and, where appropriate, by direct notification. The date at the top of this page reflects the most recent revision. We encourage you to review this policy periodically.`,
  },
  {
    id: "13",
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact us at Stewardshipdivine@gmail.com or call +250792951993. Our team is available Monday to Friday, 8:00 AM – 5:00 PM (CAT), and we aim to respond to all privacy-related inquiries within 48 hours.`,
  },
];

export default function PrivacyPolicy() {
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
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(`section-${s.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setActiveSection(`section-${sectionId}`);
    isProgrammaticScroll.current = true;
    const target = document.getElementById(`section-${sectionId}`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[45vh] min-h-[340px] w-full">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800&auto=format&fit=crop&q=85"
            alt="Privacy Policy"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

          <div className="relative h-full flex items-end">
            <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 pb-12 sm:pb-14">
              <span className="text-white/70 text-xs tracking-widest uppercase font-medium block mb-4">
                Legal
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-2xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-white/70 text-sm sm:text-base max-w-xl leading-relaxed">
                Last updated: February 2026. Your privacy matters to us — please read how we handle your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ──────────────────────────────────────────────────── */}
      <div className="bg-[#0D0D0D]">
        <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-7">
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
            This Privacy Policy describes how MB&amp;U Company Ltd collects, uses, and protects your
            personal information. We operate under the laws of the Republic of Rwanda and are
            committed to handling your data with transparency, integrity, and care.
          </p>
        </div>
      </div>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20 items-start">

          {/* ── Sticky Table of Contents ──────────────────────────────── */}
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
                  <span
                    className={`text-xs tabular-nums font-bold shrink-0 mt-0.5 transition-colors duration-200 ${
                      activeSection === `section-${s.id}`
                        ? "text-[#0D0D0D]"
                        : "text-gray-400"
                    }`}
                  >
                    {s.id}
                  </span>
                  <span className="leading-snug">{s.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* ── Sections ─────────────────────────────────────────────── */}
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
                Registered in Rwanda. For privacy-related queries, contact us at{" "}
                <a
                  href="mailto:Stewardshipdivine@gmail.com"
                  className="font-semibold text-[#0D0D0D] underline underline-offset-2"
                >
                  Stewardshipdivine@gmail.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+250792951993"
                  className="font-semibold text-[#0D0D0D] underline underline-offset-2"
                >
                  +250792951993
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