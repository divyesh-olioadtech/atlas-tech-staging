"use client";

import Image from "next/image";
import { motion } from "motion/react";

const CheckCircle = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m4.03-11.47a.75.75 0 0 0-1.06-1.06l-4.47 4.47l-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0z"
      fill="#8FD254"
    />
  </svg>
);

const points = [
  "Pre-delivery testing on every unit",
  "Spare parts dispatched globally",
  "On-site commissioning support",
];

export default function BuiltForScale() {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16 px-[5%] max-w-screen-2xl mx-auto rm">
        {/* Image with green arrow ornaments */}
        <div className="md:w-[40%] flex justify-center items-center relative z-10 group">
          {/* Green ornament - bottom left */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute z-20 hidden w-24 h-24 transition-transform duration-300 -bottom-10 -left-12 md:-left-16 md:w-32 md:h-32 md:block group-hover:scale-110"
          >
            <Image
              src="/images/comman/atlas_v1.png"
              alt="Ornament"
              width={150}
              height={150}
              className="w-full h-full"
            />
          </motion.div>

          {/* Green ornament - top right */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute z-20 hidden w-24 h-24 transition-transform duration-300 top-16 -right-12 md:top-20 md:-right-16 md:w-32 md:h-32 md:block group-hover:scale-110"
          >
            <Image
              src="/images/comman/atlas_v1.png"
              alt="Ornament"
              width={150}
              height={150}
              className="w-full h-full"
            />
          </motion.div>

          <div className="relative w-full aspect-[43/41] overflow-hidden rounded-[12px]">
            <Image
              src="/images/plants/counter-flow/home-cf-new-image.webp"
              alt="Atlas asphalt plant pre-commissioned and tested"
              width={600}
              height={575}
              className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:w-[60%] flex flex-col items-start gap-6 justify-center relative z-10">
          <div className="flex flex-col gap-3">
            <p className="pitag uppercase">Built for Your Scale</p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h2t"
            >
              The Machine That Ships on Time and Works on Day One
            </motion.h2>
          </div>

          <p className="ptag font-medium">
            Atlas designs and manufactures asphalt plants, concrete batching
            plants, mobile drum mix plants, and road construction machinery for
            contractors who can’t afford downtime. Every machine leaves our
            Mehsana facility pre-commissioned, tested, and documented.
          </p>

          <div className="flex flex-col gap-[15px] mt-1">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-[10px]"
              >
                <CheckCircle />
                <span className="text-[16px] font-semibold text-[#606370] leading-[150%] tracking-[-0.03em]">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
