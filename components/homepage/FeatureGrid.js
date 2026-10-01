"use client";

import React from "react";
import Image from "next/image";
import { TextAnimate } from "../animated/Text_Animate";
import { motion } from "motion/react";

const FeatureGrid = ({
  features = [
    {
      title: "Reliability with Value",
      para: "Machines designed for long-term productivity at competitive prices",
      image: "/images/comman/Reliability_with_value.png",
    },
    {
      title: "After-Sales Support",
      para: "24/7 emergency support and quick response for maintenance and spares",
      image: "/images/comman/after_sales_support.png",
    },
    {
      title: "Sustainability",
      para: "Advanced features like low NOx burners and energy-efficient designs",
      image: "/images/comman/sustainability.png",
    },
  ],
  title = "Here's Why Top Construction Companies Trust Us",
}) => {
  return (
    <div className="text-center flex flex-col gap-8 rm px-[5%] max-w-screen-2xl mx-auto">
      <div>
        <TextAnimate
          animation="fadeIn"
          by="word"
          delay={0}
          duration={0.3}
          className="pitag"
          once={true}
        >
          WHY CHOOSE US
        </TextAnimate>

        <TextAnimate
          animation="fadeIn"
          by="word"
          delay={0.1}
          duration={0.4}
          className="max-w-2xl mx-auto mt-1 h2t"
          once={true}
        >
          {title}
        </TextAnimate>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="rounded-[10px] overflow-hidden relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={1000}
                  height={1000}
                  className="object-contain w-full h-full rounded-[10px]"
                />
              </motion.div>
            </div>

            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.3 + index * 0.1}
              duration={0.4}
              className="text-[18px]  md:text-[19px] lg:text-[20px] font-semibold mt-4 md:mt-8"
              once={true}
            >
              {feature.title}
            </TextAnimate>

            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.4 + index * 0.1}
              duration={0.4}
              className="text-[16px] md:text-[17px] text-[#606370] leading-[150%] lg:text-[18px] font-normal mt-2"
              once={true}
            >
              {feature.para}
            </TextAnimate>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
