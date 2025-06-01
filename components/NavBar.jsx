"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PrimaryButton from "./Buttons/Primary-Button";

// Navigation links data
const navLinks = [
  { label: "Features", href: "#" },
  { label: "Developers", href: "#" },
  { label: "Company", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Changelog", href: "#" },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  // Hide/show nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`w-full text-[#FFFFFF99] border-b border-white/15 bg-black/95 fixed top-0 left-0 z-50 p-1 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 justify-between md:justify-around">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-black/80 border border-white/15 rounded-full px-6 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium hover:text-purple-300">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Join Waitlist Button */}
            <PrimaryButton text="Join waitlist" />

            {/* Barger Menu Button */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={toggleMobile}
              aria-label="Toggle menu">
              <Image
                src="/icons/burger-menu.svg"
                alt="Menu"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <>
        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/95 z-50 md:hidden transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ backdropFilter: "blur(4px)" }}>
          {/* Mobile Header */}
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
            <button onClick={closeMobile} aria-label="Close menu">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-2 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-2 py-2 text-white font-medium rounded hover:bg-purple-900/30"
                onClick={closeMobile}>
                {link.label}
              </a>
            ))}

            {/* Mobile Join Waitlist Button */}
            <div className="mt-4">
              <PrimaryButton text="Join waitlist" />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default NavBar;
