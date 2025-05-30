"use client";
import React, { useState } from "react";
import Image from "next/image";
import PrimaryButton from "./Buttons/Primary-Button";

const navLinks = [
  {
    label: "Features",
    dropdown: [
      { label: "Feature 1", href: "#" },
      { label: "Feature 2", href: "#" },
    ],
  },
  { label: "Developers", href: "#" },
  {
    label: "Company",
    dropdown: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  { label: "Blog", href: "#" },
  { label: "Changelog", href: "#" },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="w-full text-[#FFFFFF99] border-b border-white/20 bg-black/95 fixed top-0 left-0 z-50 p-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={36}
            className="rounded-lg shadow-md"
          />
        </a>
        {/* Desktop Nav  (Hides At Mobile) */}
        <div className="hidden md:flex items-center space-x-2 bg-black/80 border border-white/20 rounded-full px-6 py-1.5">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div key={link.label} className="relative group">
                <button
                  className="px-3 py-2 text-sm font-medium hover:text-purple-300 flex items-center gap-1"
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  {link.label}
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown */}
                <div
                  className={`absolute left-0 mt-2 w-36 bg-black border border-white/20 rounded-lg shadow-lg transition-all duration-150 z-20 ${
                    openDropdown === idx ? "block" : "hidden"
                  }`}
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-purple-900/30 rounded">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium hover:text-purple-300">
                {link.label}
              </a>
            )
          )}
        </div>
        {/* Join Waitlist Button */}
        <PrimaryButton />
        {/* Burger Menu (Hides At Desktop) */}
        <button
          className="md:hidden flex items-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu">
          <Image
            src="/icons/burger-menu.svg"
            alt="Menu"
            width={32}
            height={32}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/95 z-40 transition-transform duration-300 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ backdropFilter: "blur(4px)" }}>
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="rounded-lg shadow-md"
            />
          </a>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-2 px-6 py-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="mb-2">
                <div className="font-semibold text-white flex items-center gap-2">
                  {link.label}
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="ml-4 mt-1 flex flex-col space-y-1">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-2 py-1 text-sm text-white/80 hover:bg-purple-900/30 rounded">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-2 py-2 text-white font-medium rounded hover:bg-purple-900/30">
                {link.label}
              </a>
            )
          )}
          <a
            href="#"
            className="mt-4 px-5 py-2 rounded-xl border border-white/70 bg-gradient-to-r from-purple-700 to-purple-400 text-white font-semibold shadow hover:from-purple-800 hover:to-purple-500 transition text-center">
            Join waitlist
          </a>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
};

export default NavBar;
