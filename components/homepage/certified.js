import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const trustedLogos = [
  "/images/comman/global-org/Frame 1.png",
  "/images/comman/global-org/Frame 4.png",
  "/images/comman/global-org/Frame 5.png",
  "/images/comman/global-org/Frame 6.png",
  "/images/comman/global-org/Frame 13.png",
  "/images/comman/global-org/Frame 14.png",
  "/images/comman/global-org/Frame 15.png",
  "/images/comman/global-org/Frame 16.png",
  "/images/comman/global-org/Frame 17.png",
  "/images/comman/global-org/Frame 18.png",
];

const Certified = ({ title, subtitle, images = trustedLogos }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", watchDrag: true },
    [AutoScroll({ speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const onMouseEnter = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.plugins()?.autoScroll?.stop();
  }, [emblaApi]);

  const onMouseLeave = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.plugins()?.autoScroll?.play();
  }, [emblaApi]);

  return (
    <div className="rm mx-auto max-w-screen-2xl px-[5%]">
      <div className="px-[3%] bg-[#E7F1E9] py-6 rounded-[12px] flex flex-col gap-8">
        <div className="flex-col items-start justify-start gap-3 md:flex-row md:justify-between md:items-center">
          <h2 className="text-[#1A1D2D] text-center p-1 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold">
            {title}
          </h2>
          {subtitle && (
            <p className="text-center text-[14px] sm:text-[15px] text-gray-500 mt-1 mb-0">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="flex">
            {images.map((src, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-4 shrink-0 w-[140px] h-[90px] sm:w-[160px] sm:h-[100px] md:w-[200px] md:h-[130px] lg:w-[240px] lg:h-[150px]"
              >
                <img
                  src={src}
                  alt={`Logo ${index + 1}`}
                  className="object-contain w-full h-full"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certified;
