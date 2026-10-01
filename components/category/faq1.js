"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { TextAnimate } from "../animated/Text_Animate";

const FAQSection1 = ({ faqData, title, minititle, img }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center max-w-screen-2xl mx-auto gap-12 px-[5%] rm">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:w-[40%] rounded-xl flex group"
      >
        <div className="overflow-hidden rounded-[12px]">
          <Image
            src={`${img ? img : "/images/bitumen-decanter/acm-9-1.png"}`}
            width={500}
            height={500}
            className="rounded-[12px] md:h-[380px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </motion.div>

      <div className="lg:w-[60%] flex h-full flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 pitag">{minititle ? minititle : "BENEFITS"}</p>
          <h2 className="h2t" once={true}>
            {title}
          </h2>
        </motion.div>

        <div>
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b py-5 cursor-pointer transition-all duration-300 border-b-[#606370]"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between">
                <motion.h3
                  animate={{
                    color: activeIndex === index ? "#1A1D2D" : "#606370",
                    fontSize: activeIndex === index ? "17px" : "16px",
                    fontWeight: activeIndex === index ? "bold" : "600",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[20px]"
                >
                  +
                </motion.span>
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
                    <span className="block mt-2 text-gray-600">
                      {item.content}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection1;
