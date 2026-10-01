"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { scroller } from "react-scroll";
import { motion } from "motion/react";
import Image from "next/image";
import BrochureButton from "../BrochureButton";

// Shared placeholder shown whenever a product image is missing or fails to load.
// Same file the category grid (filter.js) already uses, so the whole site
// shows one consistent grey "image-plus" card while photos are pending.
const PLACEHOLDER_IMG = "/images/comman/product.png";

// next/image wrapper that falls back to the placeholder if the source file
// 404s. When src changes (e.g. user clicks a different thumbnail) the effect
// resets to the new src so the fallback only sticks if that new one also fails.
function ImageWithFallback({ src, alt, ...rest }) {
  const [current, setCurrent] = useState(src || PLACEHOLDER_IMG);
  useEffect(() => {
    setCurrent(src || PLACEHOLDER_IMG);
  }, [src]);
  return (
    <Image
      src={current}
      alt={alt}
      onError={() => setCurrent(PLACEHOLDER_IMG)}
      {...rest}
    />
  );
}

export default function ProductOverview({
  title,
  subtitle,
  description,
  features,
  price,
  images,
}) {
  const router = useRouter();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const timerRef = useRef(null);

  // Brochure downloads are offered on product pages ONLY for the mechanical
  // broom. Every other product page hides the button. (Category/banner pages
  // are a different component and are unaffected.) Matched on the URL's last
  // segment so no per-page prop is needed.
  const lastSegment = (router.asPath || "")
    .split(/[?#]/)[0]
    .split("/")
    .filter(Boolean)
    .pop();
  const showBrochure = lastSegment === "mechanical-broom";

  const scrollToForm = () => {
    scroller.scrollTo("contact-form", {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  const setImageIndex = (index) => {
    setActiveImageIndex(index);
    resetTimer();
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    startTimer();
  };

  return (
    <div className="grid items-start rm grid-cols-1 gap-8 px-[5%] max-w-screen-2xl mx-auto pt-16 md:pt-8 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => router.back()}
            className="flex cursor-pointer justify-center items-center gap-1 mb-4 text-[16px] text-[#8FD254]"
          >
            <Image
              src="/images/comman/back.png"
              alt="Back"
              width={20}
              height={20}
              quality={75}
              loading="lazy"
            />
            Back
          </motion.button>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-2 h2t"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 font-bold text-[14px] tracking-widest text-[#1A1D2D] uppercase"
          >
            {subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 text-[#606370] leading-[1.5] text-[16px] md:text-[17px] lg:text-[18px]"
          >
            {readMore
              ? `${description[0]} ${description[1]}`
              : `${description[0]}...`}
          </motion.p>

          {description[1] && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => setReadMore(!readMore)}
              className="mb-4 text-[16px] font-semibold cursor-pointer text-[#8FD254]"
            >
              {readMore ? "Show Less" : "Read More"}
            </motion.p>
          )}

          {/* Features + Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6"
          >
            <div className="flex flex-col items-start gap-4 lg:flex-row">

              {/* Price */}
              {price && (
                <div className="w-full lg:w-[25%] flex shrink-0">
                  <div className="font-bold text-white bg-gradient-to-r from-[#8FD254] to-[#6FB03E] shadow-md border-2 border-[#8FD254] rounded-lg py-2 px-3 min-h-[60px] flex flex-col justify-center">
                    <div className="mb-1 text-xs tracking-wider text-center uppercase opacity-90">
                      Starting Price
                    </div>
                    <div className="flex items-center justify-center gap-0.5">
                      <span className="text-[22px]">₹</span>
                      <span className="text-[22px]">
                        {price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className={`${price ? "w-full lg:w-[78%]" : "w-full"} flex flex-wrap gap-2`}>
                {features.map((feat, i) => (
                  <div
                    key={i}
                    className="px-5 py-[6px] text-md font-medium text-[#606370] bg-gray-100 rounded-full shadow-sm whitespace-nowrap"
                  >
                    {feat}
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-2"
        >
          <button
            onClick={scrollToForm}
            className="buttonsb font-semibold text-[#121C17] bg-[#8FD254] border-[#8FD254] hover:bg-[#ffffff] "
          >
            Enquire Now
          </button>

          {/* Brochure download — mechanical broom product page only */}
          {showBrochure && (
            <BrochureButton
              inline
              className="buttonsb font-semibold text-[#121C17] bg-transparent border-[#121C17] hover:bg-[#8FD254] hover:border-[#8FD254] cursor-pointer"
            />
          )}
        </motion.div>
      </div>

      {/* Image Slider */}
      <div>
        {/* Main Image — falls back to placeholder if the current image 404s */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-4 overflow-hidden rounded-xl"
        >
          <ImageWithFallback
            src={images[activeImageIndex]}
            alt="Main"
            width={640}
            height={480}
            quality={75}
            className="w-full md:h-[380px] lg:h-[400px] object-cover rounded-xl transition-all duration-700 ease-in-out"
          />
        </motion.div>

        {/* Thumbnails — each falls back independently to the placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center w-full gap-2"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setImageIndex(idx)}
              className={`flex items-center justify-center flex-1 h-12 md:h-16 overflow-hidden rounded-md border-4 cursor-pointer transition-all duration-300 ${
                activeImageIndex === idx
                  ? "border-[#8FD254]"
                  : "border-transparent"
              }`}
            >
              <ImageWithFallback
                src={img}
                alt={`Thumbnail ${idx}`}
                width={160}
                height={120}
                quality={75}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}