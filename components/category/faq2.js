"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQSection2 = ({ faqData, bg }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`bg-[${bg}] w-full`}>
      <div
        className={`flex flex-col sm:flex-row justify-center items-start max-w-screen-2xl mx-auto gap-3 sm:gap-12 px-[5%] py-10 sm:py-12 md:py-16 lg:py-20`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:w-[40%] rounded-xl flex"
        >
          <h2 className="py-2 h2t">Frequently asked questions.</h2>
        </motion.div>

        <div className="lg:w-[60%] flex h-full flex-col gap-6">
          <div>
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="py-5 cursor-pointer transition-all duration-300 border-b-[1px] border-[#606370]"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3
                    className={`text-[18px] font-bold transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-[#8FD254]"
                        : "text-[#1A1D2D]"
                    }`}
                  >
                    {item.title}
                  </h3>
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
                      <span className="text-[18px] block mt-3">
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
    </div>
  );
};

export default FAQSection2;
