import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const components = [
  {
    title: "Vibrating Screen",
    desc: "This is the description for Vibrating Screen.",
    image: "/images/comman/i1.png",
  },
  {
    title: "Hot Aggregate Elevator",
    desc: "This is the description for Hot Aggregate Elevator.",
    image: "/images/comman/i2.png",
  },
  {
    title: "Mineral Filler Hopper",
    desc: "This is the description for Mineral Filler Hopper.",
    image: "/images/comman/i3.png",
  },
  {
    title: "Hot Bins",
    desc: "This is the description for Hot Bins.",
    image: "/images/comman/i4.png",
  },
];

const Productfaq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const toggleIndex = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const currentImage =
    activeIndex === -1
      ? "/images/comman/faq.png"
      : components[activeIndex].image;

  return (
    <div className="rm mx-auto px-[5%] max-w-screen-2xl">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">
          Components of Asphalt Mixing Plant
        </h2>
        <p className="text-[16px] leading-[1.5] mt-1 text-[#606370]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Image Section */}
        <div className="relative bg-[#E7EAF1] md:w-[60%] rounded-xl overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={currentImage}
              src={currentImage}
              alt="Component View"
              initial={{
                opacity: 0,
                scale: 0.95,
                x: direction === 1 ? 150 : -150,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1], // More natural ease
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                x: direction === 1 ? -150 : 150,
                filter: "blur(4px)",
                transition: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl"
            />
          </AnimatePresence>
        </div>

        {/* FAQ Section */}
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
                  transition={{ duration: 0.3 }}
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

export default Productfaq;
