"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function WhatWillYouGet({
  title = "What Will You Get?",
  subtitle,
  items = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const activeItem = items[activeIndex] ?? items[0];

  const gridStyle = {
    backgroundImage:
      "linear-gradient(to right, rgba(96,99,112,0.05) 1px, transparent 1px)," +
      "linear-gradient(to bottom, rgba(96,99,112,0.05) 1px, transparent 1px)",
    backgroundSize: "94px 91px",
  };

  return (
    <section className="w-full bg-white px-[5%] py-14 md:py-20 lg:py-24">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8 md:gap-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-3"
        >
          <h2 className="h2t">{title}</h2>
          {subtitle && (
            <p className="max-w-[680px] text-[16px] font-medium leading-[150%] tracking-[-0.03em] text-[#606370]">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-[17px]">
          {/* Image panel */}
          <div className="relative w-full lg:w-[56%] min-h-[300px] md:min-h-[400px] lg:min-h-[442px] flex items-center justify-center overflow-hidden rounded-[10px] bg-[#E7EAF1]">
            <div className="absolute inset-0" style={gridStyle} />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem?.img}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10 flex items-center justify-center"
              >
                <Image
                  src={activeItem?.img || "/images/comman/product.png"}
                  alt={activeItem?.name || title}
                  width={307}
                  height={307}
                  className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[307px] lg:h-[307px] object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Accordion */}
          <div className="w-full lg:w-[44%] flex flex-col">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.name}
                  onClick={() => toggleAccordion(index)}
                  className="cursor-pointer border-b-[1px] border-[#D8D8D8] px-[15px] py-5"
                >
                  <h3
                    className={`text-[16px] font-bold leading-[21px] transition-colors duration-300 ${
                      isActive ? "text-[#0052B4]" : "text-[#1A1D2D]"
                    }`}
                  >
                    {index + 1}. {item.name}
                  </h3>
                  <AnimatePresence initial={false}>
                    {isActive && item.description && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-[5px] text-[16px] font-medium leading-[150%] tracking-[-0.03em] text-[#606370]">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
