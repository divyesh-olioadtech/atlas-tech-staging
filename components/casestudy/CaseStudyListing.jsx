"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allCaseStudies } from "../../data/case-studies/index";

const filters = [
  "All Projects",
  ...["Asphalt Production", "Concrete Solutions", "Mobile Deployments", "Export Projects"],
];

function CaseStudyCard({ item }) {
  return (
    <Link href={`/case-studies/${item.slug}`} className="group block bg-[#E7EAF1] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-[#E7EAF1] overflow-hidden">
        <Image
          src={item.listingImage}
          alt={item.tag}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col gap-2">
        <p className="text-[#606370] text-[13px] md:text-[14px] font-medium">{item.tag}</p>
        <h3 className="text-[#1A1D2D] font-bold text-[17px] md:text-[20px] leading-snug">
          {item.equipment}
        </h3>
        {item.listingDescription && (
          <p className="text-[#606370] text-[14px] md:text-[15px] leading-relaxed line-clamp-3">
            {item.listingDescription}
          </p>
        )}
        <div className="flex justify-end mt-2">
          <div className="w-9 h-9 rounded-[10px] bg-[#8FD254] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7aba45] transition-colors duration-200">
            <ArrowRight className="w-4 h-4 text-[#1A1D2D]" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudyListing() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filtered =
    activeFilter === "All Projects"
      ? allCaseStudies
      : allCaseStudies.filter((c) => c.category === activeFilter);

  return (
    <section className="mx-auto rm pad max-w-7xl">
      <div className="px-[5%] max-w-screen-2xl mx-auto">
        {/* Header */}
        <h2 className="h2t">
          Worldwide Success Stories
        </h2>
        <p className="text-[#606370] text-[15px] md:text-[18px] mt-1 mb-6 md:mb-10">
          Explore how Atlas solutions have helped contractors accelerate output, reduce installation time, and deliver reliable results across diverse project environments.
        </p>

        {/* Filters */}
        <div className="flex items-center justify-between gap-3 mb-8 overflow-x-auto no-scrollbar">
          <span className="text-[#1A1D2D] font-semibold text-[13px] md:text-[14px] shrink-0">Filter By:</span>
          <div className="flex gap-2 shrink-0">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-[6px] md:px-6 md:py-[10px] rounded-[12px] text-[12px] md:text-[15px] font-medium border transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === f
                    ? "bg-[#1A1D2D] text-white border-[#1A1D2D]"
                    : "bg-[#E7EAF1] text-[#606370] border-[#E7EAF1] hover:border-[#1A1D2D] hover:text-[#1A1D2D]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {filtered.map((item, i) => (
            <CaseStudyCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
