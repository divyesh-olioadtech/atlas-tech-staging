"use client";

import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const EmblaCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const slides = [
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
    "AhBkEv9qE50",
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay(),
  ]);

  // Handle video popup
  const openVideo = useCallback((videoId) => {
    setSelectedVideo(videoId);
  }, []);

  // Close popup
  const closePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="flex justify-between px-[5%] mb-3">
        <div>
          <p className="pitag text-center sm:text-left">MORE THAN MACHINES</p>
          <h2 className="h2t text-center sm:text-left">
            Stories of Trust, Excellence, and Partnership.
          </h2>
        </div>
        <div className="hidden md:flex flex-row justify-center items-center">
          <button className="text-[16px] hover:bg-[#8FD254] cursor-pointer border-[1px] text-[#12121C] border-[#8FD254] p-[15px] flex items-center gap-2">
            <img src="/images/comman/youtube.png" alt="" className="h-6 w-6" />
            AtlasTechIndia
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="embla w-full mx-auto overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex items-center will-change-transform">
            {slides.map((videoId) => (
              <div
                key={videoId}
                className="embla__slide flex justify-center items-center transition-transform duration-300 ease-in-out 
              shrink-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[60%] p-2 lg:p-4"
                onClick={() => openVideo(videoId)}
              >
                <div
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[400px] xl:h-[480px] 
                rounded-lg flex justify-center items-center text-4xl font-bold text-white bg-cover bg-center cursor-pointer"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
                  }}
                >
                  ▶
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 md:hidden px-[5%]">
            <button className="buttons w-full border border-[#8FD254] text-[#12121C] px-4 py-2 hover:bg-[#8FD254] transition-colors flex items-center justify-center  gap-2 mb-5">
              <img
                src="/images/comman/youtube.png"
                alt=""
                className="h-6 w-6"
              />
              <span className="bttons">AtlasTechIndia</span>
            </button>
          </div>
        </div>

        {/* Video Popup */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80  bg-opacity-20 flex justify-center items-center z-50"
            onClick={closePopup}
          >
            <div className="relative  w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[60%] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[400px] xl:h-[480px]">
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold"
                onClick={closePopup}
              >
                ✕
              </button>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmblaCarousel;
