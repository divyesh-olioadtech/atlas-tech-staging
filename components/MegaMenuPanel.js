// components/MegaMenuPanel.js
"use client";

import { useState } from "react";
import Link from "next/link";

const MegaMenuPanel = ({ subMenu }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!subMenu || subMenu.length === 0) return null;

  const activeCategory = subMenu[activeIndex];

  return (
    <div
      className="absolute pt-3 -translate-x-1/2 left-1/2 z-70"
      style={{ top: "100%" }}
    >
      {/* Triangle pointer */}
      <div className="flex justify-center -mb-[1px] relative z-10">
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "10px solid #ffffff",
          }}
        />
      </div>

      {/* Panel */}
      <div className="flex overflow-hidden shadow-2xl min-w-[720px] rounded-2xl">
        {/* Left sidebar - categories + overlay image */}
        <div className="bg-white rounded-2xl relative z-10 min-w-[240px] flex flex-col">
          <div className="px-3 py-6">
            {subMenu.map((category, index) => (
              <button
                key={category.label}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex items-center justify-between gap-3 w-full px-5 py-4 text-[14px] font-semibold tracking-wide rounded-lg transition-colors ${
                  activeIndex === index
                    ? "text-[#1A1D2D]"
                    : "text-[#606370] hover:bg-[#43495612]"
                }`}
                style={
                  activeIndex === index
                    ? { background: "#43495626" }
                    : undefined
                }
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`/images/comman/tab${index + 1}.png`}
                    className="h-5"
                    alt={category.label}
                  />
                  <span>{category.label}</span>
                </div>
                {activeIndex === index && (
                  <svg
                    className="w-3.5 h-3.5 text-gray-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Overlay image */}
          <div className="mt-auto flex justify-end">
            <img
              src="/images/comman/menu-overlay.png"
              alt=""
              className="object-contain w-[140px]"
            />
          </div>
        </div>

        {/* Right panel - items */}
        <div className="bg-[#1A1D2D] py-6 px-8 min-w-[480px] rounded-2xl">
          <ul className="space-y-2">
            {activeCategory?.items?.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="block py-2.5 text-[15px] text-white transition-colors hover:text-[#6BAF43]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuPanel;
