"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    label: "Plants",
    icon: (
      <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="32" width="56" height="26" rx="2" />
        <rect x="10" y="20" width="12" height="12" />
        <rect x="42" y="20" width="12" height="12" />
        <line x1="16" y1="20" x2="16" y2="8" />
        <line x1="48" y1="20" x2="48" y2="8" />
        <rect x="26" y="24" width="12" height="8" />
        <line x1="32" y1="24" x2="32" y2="14" />
        <line x1="4" y1="32" x2="60" y2="32" />
        <rect x="28" y="44" width="8" height="14" />
      </svg>
    ),
  },
  {
    label: "Machines",
    icon: (
      <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="28" width="40" height="16" rx="3" />
        <circle cx="14" cy="48" r="6" />
        <circle cx="34" cy="48" r="6" />
        <path d="M44 36 L58 30 L58 44 L44 44Z" />
        <rect x="8" y="22" width="20" height="6" rx="2" />
        <line x1="4" y1="36" x2="4" y2="28" />
      </svg>
    ),
  },
];

const data = {
  Plants: [
    {
      sectionTitle: "Asphalt Plants & Machinery",
      viewAllLink: "/asphalt-plants",
      featuredFirst: true,
      featured: {
        title: "Stationary Asphalt Batch Plants (ABP)",
        description:
          "These batch plants are used for highways, airports, and large projects. They provide consistent mix quality, save fuel, and can be scaled to produce between 60 and 320 tons per hour.",
        link: "/asphalt-plants/stationary-asphalt-batching-plant",
        image: "/images/product/sabp.png",
      },
      cards: [
        {
          title: "Double Drum Asphalt Plant",
          description: "Continuous mixing plants designed for high productivity, improved fuel efficiency, and reliable performance on medium- and large-scale road construction projects.",
          image: "/images/product/ddap.png",
          link: "/asphalt-plants/double-drum-asphalt-plant",
        },
        {
          title: "Counter Flow Asphalt Plant",
          description: "Low-emission plants that use reverse airflow and work with recycled asphalt pavement, making them suitable for sustainable projects.",
          image: "/images/product/cfap.png",
          link: "/asphalt-plants/counter-flow-asphalt-plant",
        },
        {
          title: "Asphalt Drum Mix Plant",
          description: "Continuous drum mix plants that provide reliable asphalt production for highways, industrial roads, and rural projects.",
          image: "/images/product/admp.png",
          link: "/asphalt-plants/asphalt-drum-mix-plant",
        },
        {
          title: "Mobile Asphalt Drum Mix Plant",
          description: "Trailer-mounted systems great for remote roads, emergency repairs, and projects that need quick setup.",
          image: "/images/product/madmp.png",
          link: "/asphalt-plants/mobile-asphalt-drum-mix-plant",
        },
      ],
    },
    {
      sectionTitle: "Concrete Plants & Machines",
      viewAllLink: "/concrete-plants",
      featuredFirst: false,
      featured: {
        title: "Reversible Mixer Concrete Batching Plants",
        description:
          "Affordable, mobile, and simple to use, making them a good fit for medium-sized construction and road projects.",
        link: "/concrete-plants/reversible-mixer-concrete-plant",
        image: "/images/product/rmcbp.png",
      },
      cards: [
        {
          title: "Stationary Concrete Batching Plants",
          description: "High-capacity batching plants used for ready-mix concrete, commercial projects, highways, and other large-scale jobs that need steady output.",
          image: "/images/product/scbp.png",
          link: "/concrete-plants/stationary-concrete-batching-plant",
        },
        {
          title: "Mobile Concrete Batching Plants",
          description: "Portable batching plants that are easy to move from site to site, set up quickly, and provide reliable concrete production for changing project needs.",
          image: "/images/product/mcbp.png",
          link: "/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer",
        },
        {
          title: "Mini Concrete Batching Plant",
          description: "Compact, efficient plants ideal for small contractors, rural roads, building foundations, and local construction projects.",
          image: "/images/product/minicbp.png",
          link: "/concrete-plants/mini-concrete-batching-plant",
        },
        {
          title: "Mobile Concrete Batching Plants – Pan Mixer",
          description: "Pan mixer variants offering superior mixing quality for special concrete mixes and architectural finishes.",
          image: "/images/product/mcbp-pan.png",
          link: "/concrete-plants/stationary-concrete-batching-plant-planetary-mixer",
        },
      ],
    },
  ],
  Machines: [
    {
      sectionTitle: "Road Construction Machinery",
      viewAllLink: "/other-products",
      featuredFirst: true,
      featured: {
        title: "Hydraulic Brooms / Road Sweepers",
        description:
          "Road sweepers used for construction, maintenance, and cleaning jobs where dust control is important.",
        link: "/other-products/hydraulic-broomer",
        image: "/images/plants/Hydraulic Broom/hydraulic-broom-01.png",
      },
      cards: [
        {
          title: "Groove / Curb Cutting & Related Tools",
          description: "Precision-cutting machines that work on asphalt and concrete surfaces for maintenance and repair.",
          image: "/images/product/grove-cuttin.png",
          link: "/other-products/groove-cutter",
        },
        {
          title: "Vacuum Dewatering Systems",
          description: "Modular vacuum-dewatering lines that remove excess water from freshly laid concrete to accelerate strength gain.",
          image: "/images/product/vdw.png",
          link: "/other-products/vacuum-dewatering-systems",
        },
        {
          title: "Kerb / Curb Laying Machines",
          description: "Automated curb extrusion equipment used for highways, medians, drainage channels, and urban road projects.",
          image: "/images/product/kcm.png",
          link: "/other-products/kerb-laying-machine",
        },
      ],
    },
  ],
};

function Card({ item, colSpan2 = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={item.link}
      className={`block ${colSpan2 ? "col-span-1 sm:col-span-2" : "col-span-1"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative w-full overflow-hidden aspect-[4/3] ${colSpan2 ? "sm:aspect-[8/3]" : ""}`}
        style={{
          borderRadius: "12px",
          backgroundColor: hovered ? "#1A2D23" : "#6B7280",
        }}
      >
        {/* Image — fades out on hover */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-opacity duration-300"
          style={{ opacity: hovered ? 0 : 1 }}
          sizes={colSpan2 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
        />

        {/* Top gradient for title readability when image is shown */}
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 55%)",
            opacity: hovered ? 0 : 1,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
          {/* Title — always visible */}
          <h3 className="text-white font-semibold text-[18px] md:text-[20px] leading-snug drop-shadow">
            {item.title}
          </h3>

          {/* Description + arrow — visible only on hover */}
          <div
            className="flex flex-col gap-3 transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(10px)",
            }}
          >
            <p className="text-gray-300 text-[15px] md:text-[16px] leading-relaxed">
              {item.description}
            </p>
            <div
              className="flex items-center justify-center bg-[#8FD254] w-10 h-10"
              style={{ borderRadius: "12px" }}
            >
              <ArrowRight className="w-5 h-5 text-[#1A1D2D]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Section({ section }) {
  const { sectionTitle, viewAllLink, featuredFirst, featured, cards } = section;

  const items = featuredFirst
    ? [{ isFeatured: true, data: featured }, ...cards.map((c) => ({ isFeatured: false, data: c }))]
    : [...cards.map((c) => ({ isFeatured: false, data: c })), { isFeatured: true, data: featured }];

  return (
    <div className="mx-auto rm max-w-7xl last:mb-0">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6 md:mb-10">
        <h3 className="font-bold text-[#1A1D2D] text-[22px] sm:text-[26px] md:text-[32px]">
          {sectionTitle}
        </h3>
        <Link
          href={viewAllLink}
          className="text-[14px] md:text-[16px] font-semibold text-[#12121C] rounded-[12px] hover:bg-[#8FD254] cursor-pointer border border-[#8FD254] px-[20px] py-[14px] transition-colors duration-200 whitespace-nowrap"
        >
          View All
        </Link>
      </div>

      {/* Bento grid — 1 col → 2 col → 3 col */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
        {items.map((item, i) => (
          <Card key={i} item={item.data} colSpan2={item.isFeatured} />
        ))}
      </div>
    </div>
  );
}

export default function ExploreRange() {
  const [activeTab, setActiveTab] = useState("Plants");

  return (
    <div id="products-section" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[#E7F1E9]">
      <div className="px-[5%] max-w-screen-2xl mx-auto">
        <h2 className="mb-6 text-center h2t">Explore Our Range</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8 sm:gap-10">
          {tabs.map((tab) => {
            const active = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className="flex flex-col items-center gap-1 pb-2 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <span className={`transition-colors duration-200 ${active ? "text-[#1A1D2D]" : "text-[#9CA3AF] group-hover:text-[#1A1D2D]"}`}>
                    {tab.icon}
                  </span>
                  <span className={`font-bold text-[20px] sm:text-[22px] md:text-[24px] transition-colors duration-200 ${active ? "text-[#1A1D2D]" : "text-[#9CA3AF] group-hover:text-[#1A1D2D]"}`}>
                    {tab.label}
                  </span>
                </div>
                <div
                  className="h-[3px] rounded-full w-full transition-all duration-200"
                  style={{ backgroundColor: active ? "#8FD254" : "transparent" }}
                />
              </button>
            );
          })}
        </div>

        {/* Sections */}
        {data[activeTab].map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>
    </div>
  );
}
