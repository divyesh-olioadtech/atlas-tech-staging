import React, { useState } from "react";
import { motion } from "framer-motion";

const components = [
  {
    title: "Vibrating Screen",
    desc: "This is the description for Vibrating Screen.",
    image: "/images/comman/faq.png",
    position: { x: -380, y: -280 },
  },
  {
    title: "Hot Aggregate Elevator",
    desc: "This is the description for Hot Aggregate Elevator.",
    image: "/images/comman/faq.png",
    position: { x: 180, y: -260 },
  },
  {
    title: "Mineral Filler Hopper",
    desc: "This is the description for Mineral Filler Hopper.",
    image: "/images/comman/faq.png",
    position: { x: 180, y: 250 },
  },
  {
    title: "Hot Bins",
    desc: "This is the description for Hot Bins.",
    image: "/images/comman/faq.png",
    position: { x: -300, y: 250 },
  },
];

const Zoom2 = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  const defaultImage = "/images/comman/faq.png";
  const isActive = activeIndex !== -1;
  const { x, y } = isActive ? components[activeIndex].position : { x: 0, y: 0 };

  return (
    <div className="rm mx-auto px-[5%] max-w-screen-2xl">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">
          Components of Asphalt Mixing Plant
        </h2>
        <p className="text-[16px] leading-[1.5] mt-1 text-[#606370]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Image Section */}
        <div className="relative bg-[#E7EAF1] md:w-[60%] h-[400px] lg:h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden">
            {/* Image with Slide + Zoom + Fade Animation */}
            <motion.img
              key={activeIndex}
              src={defaultImage}
              alt="Component"
              initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                scale: isActive ? 2.2 : 1,
                x,
                y,
                transition: {
                  duration: 1.2,
                  ease: [0.33, 1, 0.68, 1],
                },
              }}
              exit={{ opacity: 0, scale: 1, x: 0, y: 0 }}
              className={`absolute top-0 left-0 object-cover w-full h-full rounded-xl transition-all ${
                isActive ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
            />

            {/* Marker */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#FF4C29",
                  borderRadius: "50%",
                  border: "2px solid white",
                  boxShadow: "0 0 8px rgba(0,0,0,0.4)",
                }}
              />
            )}
          </div>
        </div>

        {/* Text Section */}
        <div className="overflow-y-auto pr-3 md:w-[40%] h-[420px] lg:h-[500px]">
          {components.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleIndex(index)}
              className="cursor-pointer py-4 border-b border-[#D8D8D8] transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`text-[16px] py-2 font-bold ${
                    activeIndex === index ? "text-[#0052B4]" : "text-[#1A1D2D]"
                  }`}
                >
                  {index + 1}. {item.title}
                </div>
              </div>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 text-sm text-gray-600"
                >
                  {item.desc}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Zoom2;
