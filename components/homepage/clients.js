import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Clients = ({
  title = "Our Clients",
  images = [],
  marqueeSpeed = 50,
  gradientColor = [150, 150, 150],
}) => {
  return (
    <div className="rm mx-auto max-w-screen-2xl px-[5%]">
      <div className="bg-[#E7F1E9] px-[3%] py-6 rounded-[12px] flex flex-col gap-8">
        <h2 className="text-[#1A1D2D] text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold">
          {title}
        </h2>

        <div className="flex justify-center items-center h-full overflow-hidden backdrop-blur-[7.4px]">
          <Marquee
            className="flex gap-4"
            speed={marqueeSpeed}
            gradient={true}
            gradientWidth={100}
            pauseOnClick={true}
            gradientColor={gradientColor}
            direction="left"
            loop={0}
          >
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Client Logo ${index + 1}`}
                className="w-10 h-10 ml-5"
                width={100}
                height={60}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Clients;
