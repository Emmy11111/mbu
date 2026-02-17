"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

// ─── Footer Component ─────────────────────────────────────────────────────────
export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer>

      {/* ── CTA Banner ── */}
      <div className="relative bg-[#0D0D0D] overflow-hidden px-6 sm:px-10 lg:px-16 py-16 sm:py-16">

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #444 1px, transparent 1px),
              linear-gradient(to bottom, #444 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Fading squares decoration — top right */}
        <div className="absolute top-0 right-0 w-64 h-full opacity-30 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #333 1px, transparent 1px),
                linear-gradient(to bottom, #333 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px",
              maskImage: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto w-full lg:max-w-5xl xl:max-w-6xl flex items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Embark on Your Dream Home Journey Today. Your Project, Your Vision,
              Our Expertise. Let's Begin!
            </p>
          </div>

          {/* Circle arrow button */}
          <Link
            href="/contact"
            className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform duration-200 group"
          >
            <FiArrowUpRight className="text-2xl sm:text-3xl text-[#0D0D0D] group-hover:rotate-12 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* ── Bottom Footer ── */}
      <div className="bg-white px-6 sm:px-10 lg:px-16 pt-12 pb-8">
        <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl">

          {/* Main footer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <p className="text-gray-600 text-base mb-5">Subscribe to our newsletter</p>
              <form method="post" className="flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full lg:w-1/2 border-b pr-2 border-gray-300 text-base text-gray-700 placeholder-gray-500 bg-transparent outline-none py-1 pb-[7.6px]"
                />
                <button
                type="submit"
                  className="w-9 h-9 bg-[#0D0D0D] flex items-center justify-center shrink-0 hover:bg-gray-800 transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <FaChevronRight className="text-white text-base translate-x-[1px]" />
                </button>
              </form>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-5">Links</h4>
              <ul className="space-y-3">
                {[{label: "For Rent", url: "/#properties"}, {label: "For Buy", url: "/#properties"}, {label: "Services", url: "/#services"}].map((link) => (
                  <li key={link.label}>
                    <Link href={link.url} className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-5">About</h4>
              <ul className="space-y-3">
                {[{label: "About Us", url: "/about"}, {label: "Our Mission", url: "/about/#mission"}, {label: "Our Vision", url: "/about/#vision"}].map((link) => (
                  <li key={link.label}>
                    <Link href={link.url} className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-5">Help</h4>
              <ul className="space-y-3">
                {[{label: "Contact Us", url: "/contact"}, {label: "Terms & Conditions", url: "/terms"}, {label: "Privacy Policy", url: "/privacy-policy"}].map((link) => (
                  <li key={link.label}>
                    <Link href={link.url} className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">

            {/* Legal links */}
            <div className="flex items-center gap-6">
                <p className="text-[15px] sm:text-base text-gray-600 transition-colors truncate">© {new Date().getFullYear()} MB&U Company Ltd – All rights reserved</p>
              {/* <a href="#" className="text-base text-gray-600 hover:text-gray-700 transition-colors">
                Terms &amp; Conditions
              </a>
              <a href="#" className="text-base text-gray-600 hover:text-gray-700 transition-colors">
                Privacy Policy
              </a> */}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a href="https://www.instagram.com/Uwibanze9" target="_blank" aria-label="Facebook" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaFacebookF className="text-base" />
              </a>
              <a href="https://x.com/Mimi2023" aria-label="Twitter" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaTwitter className="text-base" />
              </a>
              <a href="https://www.instagram.com/Uwibanze9" target="_blank" aria-label="Instagram" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaInstagram className="text-base" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}