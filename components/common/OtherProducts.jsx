"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-opacity duration-300"
          style={{ opacity: hovered ? 0 : 1 }}
          sizes={colSpan2 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
        />

        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 55%)",
            opacity: hovered ? 0 : 1,
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
          <h3 className="text-white font-semibold text-[18px] md:text-[20px] leading-snug drop-shadow">
            {item.title}
          </h3>

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

const otherProductsData = {
  title: "Other Products",
  viewAllLink: "/other-products",
  featuredFirst: true,
  featured: {
    title: "Kerb / Curb Laying Machines",
    description:
      "Slip-form precision kerb pavers with interchangeable moulds — available in track-mounted and automatic variants for continuous, uniform kerb production.",
    image: "/images/product/kcm.png",
    link: "/other-products/kerb-laying-machine",
  },
  cards: [
    {
      title: "Hydraulic Brooms / Road Sweepers",
      description:
        "Tractor-mounted sweeping units with optional dust hopper and water-spray systems to minimise airborne dust.",
      image: "/images/plants/Hydraulic Broom/hydraulic-broom-01.png",
      link: "/other-products/hydraulic-broomer",
    },
    {
      title: "Groove / Curb Cutting Tools",
      description:
        "Diesel and electric drive variants for joints, skid-resistance grooves, and surface preparation work.",
      image: "/images/product/grove-cuttin.png",
      link: "/other-products/groove-cutter",
    },
    {
      title: "Vacuum Dewatering Systems",
      description:
        "Modular vacuum-dewatering lines that remove excess water from freshly laid concrete to accelerate strength gain.",
      image: "/images/product/vdw.png",
      link: "/other-products/vacuum-dewatering-systems",
    },
    {
      title: "Mechanical Broom",
      description:
        "Heavy-duty mechanical sweepers for road and site cleaning — built for long service life in demanding environments.",
      image: "/images/plants/mechanical-broom/mechanical-broom-01.png",
      link: "/other-products/hydraulic-broomer",
    },
  ],
};

export default function OtherProducts() {
  const { title, viewAllLink, featuredFirst, featured, cards } = otherProductsData;

  const items = featuredFirst
    ? [{ isFeatured: true, data: featured }, ...cards.map((c) => ({ isFeatured: false, data: c }))]
    : [...cards.map((c) => ({ isFeatured: false, data: c })), { isFeatured: true, data: featured }];

  return (
    <section className="py-10 bg-white sm:py-12 md:py-16 lg:py-20">
      <div className="px-[5%] max-w-screen-2xl mx-auto">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
                  <h2 className="font-bold text-[#1A1D2D] text-[22px] sm:text-[26px] md:text-[32px]">
              {title}
            </h2>
            <Link
              href={viewAllLink}
              className="text-[14px] md:text-[16px] font-semibold text-[#12121C] rounded-[12px] hover:bg-[#8FD254] cursor-pointer border border-[#8FD254] px-[20px] py-[14px] transition-colors duration-200 whitespace-nowrap"
            >
              View All
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {items.map((item, i) => (
              <Card key={i} item={item.data} colSpan2={item.isFeatured} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
