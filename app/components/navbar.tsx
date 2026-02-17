"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Logo2 from "../../public/small-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { url: "/", label: "Home" },
    { url: "/#properties", label: "Properties" },
    { url: "/#services", label: "Services" },
    { url: "/about", label: "About Us" },
    { url: "/contact", label: "Contact Us" },
  ];

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header>
      <nav className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-[-5px]">
          <Link href="/">
            <Image src={Logo2} alt="logo" className="w-[140px] h-auto" priority />
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

        {/* Mobile Hamburger / Close Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 relative z-[60]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            // Close (X) icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header with Logo */}
        <div className="flex items-center justify-between px-5 h-[70px] border-b border-gray-100">
          <Link href="/" onClick={closeMenu}>
            <Image src={Logo2} alt="logo" className="w-[140px] h-auto" priority />
          </Link>
        </div>

        {/* Sidebar Links */}
        <div className="px-5 py-6 flex flex-col gap-1">
          {links.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                key={link.url}
                href={link.url}
                onClick={closeMenu}
                className={`block text-base py-3 px-3 rounded-lg transition ${
                  isActive
                    ? "text-black font-semibold bg-gray-100"
                    : "text-gray-700 hover:text-black hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Sidebar Auth Buttons */}
        <div className="px-5 pt-2 border-t border-gray-100 flex flex-col gap-3">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block text-center text-base font-medium text-gray-700 hover:text-black py-2.5 rounded-lg hover:bg-gray-50 transition"
          >
            Log In
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block text-center text-base font-medium bg-[#0D0D0D] text-white py-2.5 rounded-full hover:bg-black transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}