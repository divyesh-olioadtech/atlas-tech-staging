"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const Productfaq = ({
  title,
  para,
  components,
  img = "/images/comman/faq.png",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="rm mx-auto px-[5%] max-w-screen-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="h2t">{title}</h2>
        <p className="text-[16px] leading-[1.5] mt-1 text-[#606370]">{para}</p>
      </motion.div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#F4F7FA] md:w-[60%] rounded-xl overflow-hidden relative h-[230px] md:h-[400px] lg:h-[500px] group"
        >
          <Image
            src={img}
            alt="Asphalt Plant"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Right: Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-y-auto pr-3 md:w-[40%] h-[420px] lg:h-[500px]"
        >
          {components.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => toggleIndex(index)}
              className="cursor-pointer py-4 border-b-[1px] border-[#D8D8D8] transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <motion.div
                  animate={{
                    color: activeIndex === index ? "#0052B4" : "#1A1D2D",
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-[16px] py-2 font-bold"
                >
                  {index + 1}. {item.title}
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 text-sm text-gray-600">
                      {item.desc}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Productfaq;
