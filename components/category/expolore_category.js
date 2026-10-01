"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { TextAnimate } from "../animated/Text_Animate";

const AsphaltPlantGrid = ({
  data,
  categories,
  active = "Plants",
  subtitle,
  title,
}) => {
  const [activeCategory, setActiveCategory] = useState(active);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);

  return (
    <div
      id="products-section"
      className="py-10 sm:py-12 md:py-16 lg:py-20"
      style={{ backgroundImage: `url(/images/comman/bg2.png)` }}
    >
      <div className="px-[5%] max-w-screen-2xl mx-auto">
        {/* Subtitle and Title */}
        {(subtitle || title) && (
          <div className="mb-8 text-center">
            {subtitle && <p className="pitag">{subtitle}</p>}
            {title && (
              <TextAnimate
                animation="fadeIn"
                by="word"
                delay={0.1}
                duration={0.4}
                className="h2t"
                once={true}
              >
                {String(title || "")}
              </TextAnimate>
            )}
          </div>
        )}

        {/* Category Tabs */}
        <div className="grid grid-cols-2 gap-10 mb-6 sm:flex gap-x-0 gap-y-4 sm:gap-8">
          {categories.map((category, index) => (
            <div
              key={category}
              className="flex items-center justify-start gap-5 sm:justify-center"
            >
              <button
                onClick={() => {
                  setActiveCategory(category);
                  setActiveCardIndex(null);
                }}
                className={`relative text-[13px] cursor-pointer sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold inline-flex items-center pb-2 text-[#606370] hover:text-green-600 focus:outline-none ${
                  activeCategory === category ? "text-black" : "text-[#606370]"
                }`}
              >
                <img
                  src={`/images/comman/tab${index + 1}.png`}
                  alt={category}
                  className="pr-3"
                />
                {category}

                <span
                  className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#8FD254] transition-transform duration-300 ease-in-out ${
                    activeCategory === category ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                ></span>
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data[activeCategory].map((product, index) => (
            <Link key={`${index}-${activeCategory}`} href={product.link}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onTouchStart={() => setActiveCardIndex(index)}
                onTouchEnd={() => setActiveCardIndex(null)}
                onMouseEnter={() => setActiveCardIndex(index)}
                onMouseLeave={() => setActiveCardIndex(null)}
                className={`relative h-[320px] md:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 cursor-pointer ${
                  activeCardIndex === index ? "active-card" : ""
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-transform duration-300 ${
                    activeCardIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(61, 66, 82, 0.57) 0%, rgba(148, 152, 166, 0) 28.96%)",
                  }}
                ></div>

                <div
                  className={`absolute inset-0 bg-[#1A1D2D] transition-opacity duration-300 ${
                    activeCardIndex === index ? "opacity-90" : "opacity-0"
                  }`}
                ></div>

                <div className="absolute inset-0 flex flex-col items-start justify-between gap-5 p-6 py-8">
                  <div className="animate-fade-in">
                    <h3
                      className={`text-[18px] md:text-[19px] lg:text-[20px] font-semibold opacity-90 transition-colors duration-300 ${
                        activeCardIndex === index
                          ? product.titleHoverColor || "text-white"
                          : product.titleColor || "text-white"
                      }`}
                    >
                      {product.title}
                    </h3>
                    <div
                      className={`text-[#FFFFFF] text-[16px] mt-2 transition-opacity duration-300 ${
                        activeCardIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {product.description}
                    </div>
                  </div>

                  <div
                    className={`mt-4 transition-transform duration-500 delay-300 ${
                      activeCardIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0"
                    }`}
                  >
                    <button className="bg-[#8FD254] px-3 py-2 rounded-lg flex items-center justify-center transform transition-transform duration-200">
                      <span
                        className={`transform transition-transform duration-200 ${
                          activeCardIndex === index ? "-rotate-45" : ""
                        }`}
                      >
                        ➔
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AsphaltPlantGrid;
