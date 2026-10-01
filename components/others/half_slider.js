"use client";
import Image from "next/image";
import { useState } from "react";

export default function Half_slider({
  images = [],
  content,
  imageOnLeft = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const imageSection = (
    <div className="relative w-full md:w-[50%]">
      <Image
        src={images[currentIndex]}
        alt="slider-img"
        width={500}
        height={500}
        className="w-full h-auto rounded-md"
      />
      <button
        onClick={handlePrev}
        className="absolute p-2 transform -translate-y-1/2 bg-white rounded shadow top-1/2 left-2"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute p-2 transform -translate-y-1/2 bg-white rounded shadow top-1/2 right-2"
      >
        ▶
      </button>
    </div>
  );

  const contentSection = (
    <div className="w-full md:w-[50%] flex items-center justify-center ">
      {content}
    </div>
  );

  return (
    <div className="flex flex-col gap-1 md:gap-8 md:flex-row">
      {imageOnLeft ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {imageSection}
        </>
      )}
    </div>
  );
}
