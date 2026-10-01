"use client";

import React from "react";
import { motion } from "motion/react";

const items = [
  {
    icon: "/images/comman/why-choose-us/reliability.svg",
    title: "Reliability Backed by 35+ Years",
    desc: "Three generations of engineering since 1980s, every asphalt plant and concrete batching plant we build carries that legacy.",
  },
  {
    icon: "/images/comman/why-choose-us/support.svg",
    title: "After-Sales Support That’s Reliable",
    desc: "24/7 emergency line. Spare parts & timely support to 50+ countries.",
  },
  {
    icon: "/images/comman/why-choose-us/iso-certified.svg",
    title: "ISO-Certified Manufacturing",
    desc: "Every asphalt batching plant, drum mix plant, and concrete mixing plant built to international standards your tenders require.",
  },
  {
    icon: "/images/comman/why-choose-us/savings.svg",
    title: "Built for Efficient Savings, Not Just Your Spec",
    desc: "Fuel-efficient designs save 10-15% on operating costs. Low NOx burners and energy-efficient systems. The machine pays for itself faster.",
  },
  {
    icon: "/images/comman/why-choose-us/eco.svg",
    title: "Engineered for a Cleaner Tomorrow",
    desc: "RAP-ready asphalt plants, low NOx burners, and energy-smart systems with performance that meets modern environmental compliance standards.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="w-full"
      style={{
        background:
          "linear-gradient(131.32deg, #1A1D2D 26.61%, #252B4D 97.02%)",
      }}
    >
      <div className="py-14 sm:py-16 md:py-20 lg:py-[70px] px-[5%] mx-auto max-w-screen-2xl flex flex-col items-center gap-8 md:gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center font-['Plus_Jakarta_Sans'] font-bold text-white tracking-[-0.03em] text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] leading-tight"
        >
          Why Choose Us?
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-5 w-full max-w-[1180px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex flex-col items-start gap-[30px] p-[25px] rounded-[12px] bg-[rgba(148,152,166,0.4)]"
            >
              <div className="flex items-center justify-center w-[60px] h-[60px] rounded-[8px] bg-[rgba(143,210,84,0.8)] shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>

              <div className="flex flex-col items-start gap-[17px]">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] leading-[25px] tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="text-[16px] font-medium leading-[150%] tracking-[-0.03em] text-white">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
