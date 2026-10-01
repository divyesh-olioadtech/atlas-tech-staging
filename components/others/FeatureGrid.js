"use client";

import React from "react";
import { motion } from "motion/react";

const FeatureGrid = ({ title, subtitle, features }) => {
  return (
    <div className="bg-[#E7F1E9]">
      <div className="py-10 px-[5%] mx-auto sm:py-12 md:py-16 lg:py-20 custom-1800 max-w-screen-2xl md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="h2t">{title}</h2>
          <p className="mt-2 text-[16px] text-[#606370]">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: row * 0.2 + col * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="py-5 border-b-[1px] border-[#8FD254] relative group cursor-pointer transition-all duration-300"
              >
                {/* Animated border on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-[#8FD254]"
                  initial={{ width: "100%" }}
                  whileHover={{ width: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 h-[1px] bg-[#3C611C]"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />

                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 mb-3"
                />
                <h3 className="font-bold text-[16px] sm:text-[17px] md:text-[17px] lg:text-[18px] text-[#1A1C1E] mb-2 group-hover:text-[#3C611C] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[16px] font-medium text-[#606370] leading-[1.5]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
