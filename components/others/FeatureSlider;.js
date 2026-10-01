import React, { useEffect, useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const FeatureSlider = ({
  sectionTitle = "Smart Design, Seamless Operation",
  sectionDesc = "Lorem Ipsum is simply dummy text of the printing.",
  features = [],
}) => {
  const [slideWidth, setSlideWidth] = useState("100%");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  );

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const updateSlideWidth = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1280) setSlideWidth("25%");
    else if (width >= 1024) setSlideWidth("33.3333%");
    else if (width >= 768) setSlideWidth("50%");
    else setSlideWidth("100%");
  }, []);

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, [updateSlideWidth]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateButtons);
    updateButtons();
  }, [emblaApi, updateButtons]);

  return (
    <div className="rm">
      <div className="flex px-[5%] mb-2 sm:mb-5 md:mb-8 gap-2 flex-col md:flex-row mx-auto max-w-screen-2xl justify-start md:justify-between items-start md:items-center">
        <div>
          <h2 className="h2t">{sectionTitle}</h2>
          <p className="text-[16px] leading-[1.5] mt-1 text-[#606370]">
            {sectionDesc}
          </p>
        </div>
        <div className="flex gap-1 items-center bg-[#E7EAF1] px-2 py-2 rounded-full w-fit">
          <button
            onClick={scrollPrev}
            disabled={!prevEnabled}
            className="w-10 h-10 flex items-center justify-center bg-[#343745] rounded-full shadow-md hover:bg-[#343745] disabled:opacity-40"
          >
            <img src="/images/comman/backword.png" alt="Previous" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!nextEnabled}
            className="w-10 h-10 flex items-center justify-center bg-[#343745] rounded-full shadow-md hover:bg-[#343745] disabled:opacity-40"
          >
            <img src="/images/comman/forward.png" alt="Next" />
          </button>
        </div>
      </div>
      <div className="overflow-x-hidden px-[5%] sm:px-[0%]">
        <div className="flex sm:pl-[3%] flex-col gap-8 mx-auto custom-1800 max-w-screen-2xl">
          <div ref={emblaRef}>
            <div className="flex items-stretch gap-2">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex shrink-0"
                  style={{ flex: `0 0 ${slideWidth}` }}
                >
                  <div className="w-full max-w-[350px] mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 shadow-sm flex flex-col">
                    {/* Green indicator dot */}
                    <div className="w-3 h-3 mb-6 bg-[#8FD254] rounded-full"></div>

                    {/* Title */}
                    <h3 className="text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[16px] text-[#636B7E] font-medium leading-[1.5] flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;
