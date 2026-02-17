"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <--- import this

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // get current path

  const links = [
    { url: "/", label: "Home" },
    { url: "/#properties", label: "Properties" },
    { url: "/#services", label: "Services" },
    { url: "/about", label: "About Us" },
    { url: "/contact", label: "Contact Us" },
  ];

  return (
    <header>
      <nav className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-[-20px]">
          <Link href={'/'}>
            <Image src={Logo} alt="logo" className="w-[170px] h-auto" priority />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link key={link.url} href={link.url}>
                <li
                  className={`text-base cursor-pointer ${
                    isActive ? "text-black font-[500]" : "text-gray-600"
                  } hover:text-black transition`}
                >
                  {link.label}
                </li>
              </Link>
            );
          })}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 hover:text-black px-4 py-2"
          >
            Log In
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium bg-[#0D0D0D] text-white px-4 py-2 rounded-full hover:bg-black transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => {
              const isActive = pathname === link.url;
              return (
                <Link
                  key={link.url}
                  href={link.url}
                  className={`block text-base font-medium ${
                    isActive ? "text-black font-semibold" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t flex flex-col gap-3">
              <Link
                href="#"
                className="text-center text-gray-700 font-medium"
              >
                Log In
              </Link>

              <Link
                href="#"
                className="text-center bg-black text-white py-2 rounded-full font-medium"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
