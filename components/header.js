"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenuPanel from "./MegaMenuPanel";
import { menuData } from "./menuData";
import FullScreenMobileMenu from "./others/FullScreenMobileMenu";
import SearchOverlay from "./SearchOverlay";
import { motion } from "motion/react";
const Header = ({ hasBgImage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find the submenu for the currently hovered menu item
  const currentMenu = menuData.find((menu) => menu.name === hoveredMenu) || {};

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={
          scrolled || !hasBgImage
            ? {
                background: "#fff",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }
            : {
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }
        }
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-800 ${
          !(scrolled || !hasBgImage) ? "bg-[#373737]/24 md:bg-[#373737]/24" : ""
        }`}
      >
        <div className="grid grid-cols-[auto_1fr_auto] max-w-screen-2xl mx-auto px-[5%] h-[80px] items-center relative">
          {/* Logo (left) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-[24px] flex gap-2 font-medium ${
              scrolled || !hasBgImage ? "text-black" : "text-white"
            }`}
          >
            <Link
              href={"/"}
              className="flex flex-row items-center justify-center gap-1"
            >
              <Image
                src={
                  scrolled || !hasBgImage
                    ? "/images/comman/logo/new-header.png"
                    : "/images/comman/logo/new-footer.png"
                }
                alt="Atlas Technologies Logo"
                width={208}
                height={48}
                className="h-14 w-52"
                priority
              />
            </Link>
          </motion.div>

          {/* Main Menu (center) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex text-[14px] font-semibold tracking-wider items-center justify-center"
          >
            {menuData.map((menuItem, index) => (
              <motion.div
                key={menuItem.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="relative flex group"
                onMouseEnter={() => setHoveredMenu(menuItem.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={menuItem.link || "#"}
                  className={`transition-colors ${
                    scrolled || !hasBgImage ? "text-black" : "text-white"
                  } hover:text-green-600 px-3 lg:px-4 py-6`}
                >
                  {menuItem.name}
                </Link>

                {/* MegaMenuPanel */}
                {hoveredMenu === menuItem.name && currentMenu.subMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 w-full top-full"
                  >
                    <MegaMenuPanel subMenu={currentMenu.subMenu} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right side: Call, Email, Get A Quote, Search, Mobile Hamburger */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex items-center justify-end gap-2 lg:gap-3"
          >
            {/* Call Icon */}
            <Link
              href="tel:+919723810565"
              className={`hidden md:flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                scrolled || !hasBgImage
                  ? "text-black hover:text-white hover:bg-[#6BAF43]"
                  : "text-white hover:text-white hover:bg-[#6BAF43]"
              }`}
              aria-label="Call us"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>

            {/* Email Icon */}
            <Link
              href="mailto:contact@atlastechnologiesindia.com"
              className={`hidden md:flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                scrolled || !hasBgImage
                  ? "text-black hover:text-white hover:bg-[#6BAF43]"
                  : "text-white hover:text-white hover:bg-[#6BAF43]"
              }`}
              aria-label="Email us"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>

            {/* Get A Quote Button - Links to Contact Us page */}
            <Link
              href="/contact-us"
              className="hidden md:block px-4 lg:px-5 py-2 text-[13px] font-semibold tracking-wider rounded-[5px] transition-all border border-[#8FD254] bg-[#8FD254] text-[#121C17] hover:bg-transparent hover:text-[#8FD254]"
            >
              Get A Quote
            </Link>

            {/* Search / Close Icon */}
            <button
              onClick={() => setSearchOpen((prev) => !prev)}
              className={`flex items-center justify-center cursor-pointer transition-colors ${
                scrolled || !hasBgImage
                  ? "text-black hover:text-[#6BAF43]"
                  : "text-white hover:text-[#6BAF43]"
              }`}
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              {searchOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" strokeLinecap="round" />
                </svg>
              )}
            </button>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <Image
                src={`/images/comman/${
                  scrolled || !hasBgImage ? "hamburger1.png" : "hamburger.png"
                }`}
                alt="Mobile Menu"
                width={500}
                height={500}
                className="w-6 h-5 cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              />
            </div>
          </motion.div>
        </div>
      </motion.header>
      {mobileMenuOpen && (
        <FullScreenMobileMenu
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;
