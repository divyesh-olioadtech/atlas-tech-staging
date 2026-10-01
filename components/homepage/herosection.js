"use client";

import Image from "next/image";
import Link from "next/link";
import { TextAnimate } from "../animated/Text_Animate";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "./ConsultationModal";

const BACKGROUND_IMAGES = [
  "/images/newhomepage-one.webp",
  "/images/newhomepage-two.webp",
  "/images/newhomepage-three.webp",
];

const BANNER_CONTENT = [
  {
    title: "Reliability Built for Generations",
    subtitle: "35+ Years of Excellence | 2500+ Installations | 50+ Countries",
  },
  {
    title: "Engineering Roads & Structures That Last",
    subtitle:
      "Asphalt Plants | Concrete Batching Equipment | Civil Construction Machinery",
  },
  {
    title: "End-to-End Solutions Built for Real-World Conditions",
    subtitle: "Complete Solution From Design to Delivery to Support.",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-[480px] md:h-screen overflow-hidden">
        {/* Background Image Slider */}
        
        {BACKGROUND_IMAGES.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              quality={75}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-black/60"></div>

        {/* Content - 70/30 Split */}
        <div className="relative z-10 flex h-full max-w-screen-2xl mx-auto px-[5%] justify-start items-end pb-16 gap-8">
          {/* Left 70% - Title & Buttons */}
          <div className="md:w-[80%] flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <motion.h1
                key={`title-${currentIndex}`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[32px] sm:text-[42px] md:text-[55px] lg:text-[64px] font-bold text-white leading-[1.1]"
              >
                {BANNER_CONTENT[currentIndex].title}
              </motion.h1>

              <motion.div
                key={`subtitle-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                className="text-gray-200 textpara"
              >
                {BANNER_CONTENT[currentIndex].subtitle}
              </motion.div>
            </div>

            <motion.div key={`buttons-${currentIndex}`} className="flex gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="buttonsb font-semibold text-[#121C17] bg-[#8FD254] hover:bg-[#ffffff] border-[#8FD254] cursor-pointer"
              >
                Book Free Consultation
              </button>
              <Link
                href="/products"
                className="buttonsb font-semibold text-white bg-transparent hover:bg-white hover:text-[#121C17] border-white cursor-pointer"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>

          {/* Right 30% - Tracker Strip */}
          <div className="hidden md:flex md:w-[20%] justify-end">
            <div className="flex items-end justify-center w-24 gap-1 lg:w-32">
              {BACKGROUND_IMAGES.map((_, index) => (
                <div
                  key={index}
                  className="relative h-[4px] w-16 lg:w-20 bg-white/30 rounded-full overflow-hidden cursor-pointer group hover:bg-white/50 transition-all duration-200"
                  onClick={() => setCurrentIndex(index)}
                >
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: currentIndex === index ? 1 : 0,
                    }}
                    transition={{
                      duration: currentIndex === index ? 3 : 0.3,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
