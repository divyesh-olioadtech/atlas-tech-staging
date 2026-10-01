import React, { useState } from "react";
import CountUp from "../test/countup";
import { TextAnimate } from "../animated/Text_Animate";
import ConsultationModal from "./ConsultationModal";

const WorldMapComponent = ({
  title = "Trusted Worldwide for Quality and Reliability",
  para = "Connecting the world with advanced civil and road construction machinery",
  stats = [
    { value: 2500, label: "Installations Globally" },
    { value: 1100, label: "Plants Running in India" },
    { value: 35, label: "Years of Global Presence" },
    { value: 50, label: "Countries (Exported To)" },
  ],
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="rm mx-auto max-w-screen-2xl px-[5%] pb-16">
        <div className="bg-[#1A1D2D] p-5 md:p-8 pb-20 rounded-[12px] flex flex-col gap-2 text-white">
          <div className="z-10 flex flex-col items-center justify-between gap-2">
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0}
              duration={0.4}
              className="font-bold text-[24px] text-center leading-[1.3] sm:text-[28px] md:text-[35px] lg:text-[42px]"
            >
              {title}
            </TextAnimate>

            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.2}
              duration={0.4}
              className="text-[14px] sm:text-[15px] text-center md:text-[16px] lg:text-[18px]"
            >
              {para}
            </TextAnimate>
          </div>

          {/* World Map as Background Image */}
          <div className="flex justify-center">
            <div
              className="h-[180px] sm:h-[200px] md:h-[300px] lg:h-[430px] w-[100%] lg:w-[65%] lg:-m-10 bg-cover bg-center rounded-lg animate-[fadeIn_0.6s_ease-in-out_0.3s_both]"
              style={{ backgroundImage: "url('/images/comman/map2.png')" }}
            ></div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-3 pb-10 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  animation: `fadeIn 0.5s ease-in-out ${0.5 + index * 0.1}s both`,
                }}
              >
                <p className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#4063D7]">
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </p>
                <p className="text-[14px] sm:text-[16px] font-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Overlapping CTA card — floats 50% above / 50% below the dark container edge */}
        <div className="relative z-10 -mt-16 mx-4 sm:mx-8 bg-white rounded-[12px] shadow-2xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Left: icon + text */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8FD254]/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8FD254]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-[18px] sm:text-[20px] text-[#1A1D2D] leading-tight">
                Looking for Support in Your Region?
              </h3>
              <p className="text-[15px] sm:text-[16px] text-gray-500 leading-relaxed max-w-2xl">
                Serving clients across India and 50+ countries, we ensure that expert support is always within reach. Our network is designed to deliver localised assistance backed by global experience. Check availability in your region and connect with our team today.
              </p>
            </div>
          </div>

          {/* Right: CTA button */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-[8px] bg-[#8FD254] px-6 py-3 text-[14px] sm:text-[15px] font-bold text-[#121C17] transition-colors hover:bg-[#7bbf45] cursor-pointer whitespace-nowrap"
          >
            Check Availability Near You
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WorldMapComponent;
