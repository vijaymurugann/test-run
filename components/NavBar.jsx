"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PrimaryButton from "./Buttons/Primary-Button";

// Navigation links data
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

// Desktop NavLink (no dropdown)
const NavLink = ({ label, href }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium hover:text-purple-300">
    {label}
  </a>
);

// Desktop Dropdown NavLink
const DropdownNavLink = ({ link, isOpen, onOpen, onClose }) => (
  <div className="relative group" onMouseEnter={onOpen} onMouseLeave={onClose}>
    <button
      className="px-3 py-2 text-sm font-medium hover:text-purple-300 flex items-center gap-1"
      type="button">
      {link.label}
      <svg
        className="w-3 h-3 ml-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {/* Dropdown */}
    <div
      className={`absolute left-0 mt-2 w-36 bg-black border border-white/20 rounded-lg shadow-lg transition-all duration-150 z-20 ${
        isOpen ? "block" : "hidden"
      }`}>
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
);

// Mobile NavLink (no dropdown)
const MobileNavLink = ({ label, href, onClick }) => (
  <a
    href={href}
    className="px-2 py-2 text-white font-medium rounded hover:bg-purple-900/30"
    onClick={onClick}>
    {label}
  </a>
);

// Mobile Dropdown NavLink
const MobileDropdownNavLink = ({ link }) => (
  <div className="mb-2">
    <div className="font-semibold text-white flex items-center gap-2">
      {link.label}
      <svg
        className="w-3 h-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
);

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  // Hide/show nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers for dropdown
  const handleDropdownOpen = (idx) => setOpenDropdown(idx);
  const handleDropdownClose = () => setOpenDropdown(null);

  // Handler for closing mobile menu
  const handleMobileClose = () => setMobileOpen(false);

  return (
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
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2 bg-black/80 border border-white/15 rounded-full px-6 py-1.5">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <DropdownNavLink
                key={link.label}
                link={link}
                isOpen={openDropdown === idx}
                onOpen={() => handleDropdownOpen(idx)}
                onClose={handleDropdownClose}
              />
            ) : (
              <NavLink key={link.label} label={link.label} href={link.href} />
            )
          )}
        </div>
        <div className="flex">
          {/* Join Waitlist Button */}
          <div className="">
            <PrimaryButton text="Join waitlist" />
          </div>
          {/* Burger Menu (Mobile) */}
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`hidden md:hidden fixed top-0 left-0 w-full h-full bg-black/95 z-40 transition-transform duration-300 ${
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
          <button onClick={handleMobileClose} aria-label="Close menu">
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
              <MobileDropdownNavLink key={link.label} link={link} />
            ) : (
              <MobileNavLink
                key={link.label}
                label={link.label}
                href={link.href}
                onClick={handleMobileClose}
              />
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
          onClick={handleMobileClose}
        />
      )}
    </nav>
  );
};

export default NavBar;
