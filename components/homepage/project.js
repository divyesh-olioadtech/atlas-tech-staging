"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const projects = [
  {
    title: "20-30 tph asphalt plant in Maldives",
    description:
      "Read about Atlas technologies manufactured and installed 20-30 tph asphalt drum mixer in Maldives.",
    image: "/images/comman/Case_studies.png",
    pdfPath: "/static/case-study/20-30 tph asphalt plant in Maldives.pdf",
  },
  {
    title: "Mobile concrete plant helping construction company",
    description:
      "Read and download case study about mobile concrete plant helping construction company in the Philippines",
    image: "/images/comman/Case_studies.png",
    pdfPath:
      "/static/case-study/Mobile concrete plant helping construction company.pdf",
  },
  {
    title: "Asphalt batch plant",
    description:
      "160 tph asphalt batch plant supplied with natural gas burner to a customer in Gandhinagar, India",
    image: "/images/comman/Case_studies.png",
    pdfPath:
      "/static/case-study/160-tph-asphalt-batch-plant-natural-gas-burner-gandhinagar-india.pdf",
  },
  {
    title: "Wet mix macadam plant",
    description:
      "Wet mix macadam plant supplied to road contractor in UAE. Complete plant supplied with 25 tons wet mix storage silo and 15,000 liters water tank.",
    image: "/images/comman/Case_studies.png",
    pdfPath: "/static/case-study/Wet mix macadam plant.pdf",
  },
];

const CaseStudySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Handle PDF opening in new tab
  const handleReadCaseStudy = () => {
    const currentProject = projects[currentIndex];
    if (currentProject.pdfPath) {
      window.open(currentProject.pdfPath, "_blank");
    }
  };

  return (
    <div className="w-full mx-auto max-w-screen-2xl rm px-[5%]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full py-8 p-5 md:p-8 lg:p-12 h-[500px] flex flex-col justify-between rounded-[10px] overflow-hidden bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${projects[currentIndex].image})`,
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(270.53deg, rgba(0, 0, 0, 0.5) 21.23%, rgba(26, 29, 45, 0.8) 59.71%)",
          }}
        ></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative z-10 mb-4 text-white"
        >
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <h2 className="text-[#ffffff] text-[14px] font-bold tracking-widest">
              OUR CASE STUDIES
            </h2>
            <div className="flex hidden gap-2 md:flex">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-[2px] mt-3 sm:mt-0 transition-all duration-300 ${
                    currentIndex === index ? "bg-[#ffffff]" : "bg-[#FFFFFF80]"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 flex flex-col justify-between w-full gap-2 text-white md:items-end md:flex-row md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-3"
          >
            <h3 className="text-[32px] text-[#ffffff] font-bold leading-[1.3]">
              {projects[currentIndex].title}
            </h3>

            <p className="leading-[1.5] max-w-3xl text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] text-[#ffffff]">
              {projects[currentIndex].description}
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReadCaseStudy}
                className="buttonsb hover:bg-[#ffffff] hover:text-[#1A1D2D] hover:border-[#1A1D2D]"
              >
                Read Case Study
              </button>
              <button
                onClick={handlePrev}
                className="group buttonsb md:hidden bg-transparent hover:bg-white hover:border-[#1A1D2D]"
              >
                <img
                  src="/images/comman/left-arrow-white.png"
                  alt="prev"
                  className="h-[21px] block group-hover:hidden"
                />
                <img
                  src="/images/comman/left-arrow.png"
                  alt="prev-hover"
                  className="h-[21px] hidden group-hover:block"
                />
              </button>

              <button
                onClick={handleNext}
                className="group buttonsb md:hidden bg-transparent hover:bg-white hover:border-[#1A1D2D]"
              >
                <img
                  src="/images/comman/right-arrow-white.png"
                  alt="next"
                  className="h-[21px] block group-hover:hidden"
                />
                <img
                  src="/images/comman/right-arrow.png"
                  alt="next-hover"
                  className="h-[21px] hidden group-hover:block"
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <button
              onClick={handlePrev}
              className="hidden bg-transparent border border-white group buttonsb md:inline-block hover:bg-white "
            >
              <img
                src="/images/comman/left-arrow-white.png"
                alt="prev"
                className="h-[21px] block group-hover:hidden"
              />
              <img
                src="/images/comman/left-arrow.png"
                alt="prev"
                className="h-[21px] hidden group-hover:block"
              />
            </button>

            <button
              onClick={handleNext}
              className="hidden bg-transparent border border-white group buttonsb md:inline-block hover:bg-white "
            >
              <img
                src="/images/comman/right-arrow-white.png"
                alt="next"
                className="h-[21px] block group-hover:hidden"
              />
              <img
                src="/images/comman/right-arrow.png"
                alt="next"
                className="h-[21px] hidden group-hover:block"
              />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudySlider;
