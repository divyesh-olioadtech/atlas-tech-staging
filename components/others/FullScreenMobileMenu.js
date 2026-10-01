"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { menuData, bottomLinks } from "../menuData";

const FullScreenMobileMenu = ({ onClose }) => {
  const [selectedMainMenu, setSelectedMainMenu] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBack = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else if (selectedMainMenu) {
      setSelectedMainMenu(null);
    } else {
      handleClose();
    }
  };

  const getSelectedSubMenu = () =>
    selectedMainMenu?.subMenu?.find((s) => s.label === selectedCategory);

  return (
    <div className="fixed inset-0 z-[60] bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className={`fixed right-0 top-0 h-full w-full bg-white z-[60] transition-transform duration-300 ease-in-out transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        } p-[5%] py-6 flex flex-col justify-between`}
      >
        {/* Header */}
        <div className="flex items-center justify-end mb-6">
          <button
            onClick={handleClose}
            className="text-xl font-bold text-gray-600"
          >
            <img src="/images/comman/corss.png" alt="close" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto">
          {!selectedMainMenu && (
            <ul className="space-y-4 font-semibold plus">
              {menuData.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    if (item.subMenu && item.subMenu.length > 0) {
                      setSelectedMainMenu(item);
                    } else {
                      handleClose();
                      window.location.href = item.link;
                    }
                  }}
                  className="flex items-center text-[24px] justify-between cursor-pointer text-[#1A1D2D] hover:text-blue-600"
                >
                  {item.name
                    .toLowerCase()
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                  {item.subMenu?.length > 0 && (
                    <span>
                      <img
                        src="/images/comman/forwardb.png"
                        alt="arrow"
                        className="h-3"
                      />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}

          {selectedMainMenu && !selectedCategory && (
            <div>
              <div
                className="flex items-center gap-2 mb-4 text-[16px] text-[#6BAF43] font-semibold cursor-pointer"
                onClick={handleBack}
              >
                <img src="/images/comman/back.png" alt="back" className="h-3" />
                Back
              </div>
              <p className="text-[24px] font-semibold plus text-[#1A1D2D] mb-5">
                {selectedMainMenu.name
                  .toLowerCase()
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </p>
              <ul className="space-y-6">
                {selectedMainMenu.subMenu.map((sub, idx) => (
                  <li
                    key={idx}
                    onClick={() => setSelectedCategory(sub.label)}
                    className="flex items-center gap-3 justify-between text-[14px] tracking-wider font-semibold text-[#1A1D2D] uppercase cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`/images/comman/tab${idx + 1}.png`}
                        alt={sub.label}
                        className="h-5"
                      />
                      {sub.label}
                    </div>
                    <img
                      src="/images/comman/forwardb.png"
                      alt="arrow"
                      className="h-3"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedCategory && (
            <div>
              <div
                className="flex items-center gap-2 mb-4 text-[16px] text-[#6BAF43] font-semibold cursor-pointer"
                onClick={handleBack}
              >
                <img src="/images/comman/back.png" alt="back" className="h-3" />
                Back
              </div>
              <h2 className="text-[24px] font-semibold text-[#1A1D2D] mb-5">
                {selectedMainMenu.name
                  .toLowerCase()
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}{" "}
                {selectedCategory
                  .toLowerCase()
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h2>
              <ul className="space-y-4">
                {getSelectedSubMenu()?.items?.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      onClick={handleClose}
                      className="flex items-center gap-2 justify-between text-[16px] text-[#1A1D2D] font-medium hover:text-blue-600"
                    >
                      {item.name}
                      <img
                        src="/images/comman/forwardb.png"
                        alt="arrow"
                        className="h-3 ml-2"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom Links */}
        {!selectedMainMenu && (
          <div className="mt-6">
            {/* Get A Quote Button for Mobile */}
            <Link
              href="/contact-us"
              onClick={handleClose}
              className="block w-full mb-4 px-5 py-3 text-center text-[16px] font-semibold tracking-wider rounded-[5px] transition-all border border-[#8FD254] bg-[#8FD254] text-[#121C17] hover:bg-transparent hover:text-[#1A1D2D]"
            >
              Get A Quote
            </Link>

            {/* Call & Email Row for Mobile */}
            <div className="flex gap-3 mb-4">
              <Link
                href="tel:+919723810565"
                className="flex items-center gap-2 px-4 py-2 rounded-[5px] border border-gray-300 text-[#1A1D2D] text-[14px] font-medium hover:border-[#6BAF43] hover:text-[#6BAF43] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call
              </Link>
              <Link
                href="mailto:contact@atlastechnologiesindia.com"
                className="flex items-center gap-2 px-4 py-2 rounded-[5px] border border-gray-300 text-[#1A1D2D] text-[14px] font-medium hover:border-[#6BAF43] hover:text-[#6BAF43] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </Link>
            </div>

            <ul className="space-y-2 plus text-[16px] text-[#1A1D2D] font-semibold">
              {bottomLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.link}>
                    <span
                      onClick={handleClose}
                      className="block cursor-pointer hover:text-black"
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullScreenMobileMenu;
