import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

// Same placeholder the category grid (filter.js) and product page
// (productslider.js) use, so every card looks identical when its image
// is missing.
const PLACEHOLDER_IMG = "/images/comman/product.png";

const ProductSlider2 = ({ sectionTitle, sectionDesc, cards = [] }) => {
  const [slideWidth, setSlideWidth] = useState("100%");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      loop: true, // 🔁 Enables infinite looping
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
  const [showNavigation, setShowNavigation] = useState(false);

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

  // Check if navigation should be shown based on viewport and card count
  // This only provides an initial guess based on screen size and card count
  const checkNavigationVisibility = useCallback(() => {
    if (!cards.length) return false;

    const width = window.innerWidth;
    if (width >= 1280 && cards.length > 4) return true; // > 4 cards on xl screens
    if (width >= 1024 && cards.length > 3) return true; // > 3 cards on lg screens
    if (width >= 768 && cards.length > 2) return true; // > 2 cards on md screens
    if (width < 768 && cards.length > 1) return true; // > 1 card on sm screens

    return false;
  }, [cards.length]);

  useEffect(() => {
    const handleResize = () => {
      updateSlideWidth();
      // We don't call checkNavigationVisibility here anymore
      // as the embla carousel's resize event will handle this
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateSlideWidth]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateNavVisibility = () => {
      const canScroll = emblaApi.canScrollNext() || emblaApi.canScrollPrev();
      setShowNavigation(canScroll);
    };

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateNavVisibility);
    emblaApi.on("resize", updateNavVisibility);

    updateButtons();
    updateNavVisibility();

    return () => {
      if (emblaApi) {
        emblaApi.off("select", updateButtons);
        emblaApi.off("reInit", updateNavVisibility);
        emblaApi.off("resize", updateNavVisibility);
      }
    };
  }, [emblaApi, updateButtons]);

  return (
    <div className="rm">
      <div className="flex px-[5%] mb-2 sm:mb-5 md:mb-8 gap-2 flex-col md:flex-row mx-auto max-w-screen-2xl justify-start md:justify-between items-start md:items-center">
        <div>
          <h2 className="h2t">{sectionTitle}</h2>
          {sectionDesc && (
            <p className="text-[16px] leading-[1.5] mt-1 text-[#606370]">
              {sectionDesc}
            </p>
          )}
        </div>
        {showNavigation && (
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
        )}
      </div>

      <div className="overflow-x-hidden px-[5%] sm:px-[0%]">
        <div className="flex sm:pl-[5%] flex-col gap-8 mx-auto custom-1800 max-w-screen-2xl">
          <div ref={emblaRef}>
            <div className="flex gap-2">
              {cards.map((item, i) => (
                <div
                  key={i}
                  className="shrink-0"
                  style={{ flex: `0 0 ${slideWidth}` }}
                >
                  <div className="w-full mx-auto rounded-xl xl:h-auto">
                    {/* Grey placeholder shows if item.img is missing OR if
                        the referenced file fails to load. The data-fallback
                        flag guards against a loop in the (unlikely) case the
                        placeholder itself ever 404s. */}
                    <img
                      src={item.img || PLACEHOLDER_IMG}
                      alt={item.title}
                      onError={(e) => {
                        const el = e.currentTarget;
                        if (el.dataset.fallback === "1") return;
                        el.dataset.fallback = "1";
                        el.src = PLACEHOLDER_IMG;
                      }}
                      className="object-cover max-w-[360px] h-[230px]  md:h-[250px] lg:h-[250px] w-full mb-3 rounded-[10px]"
                    />
                    <h3 className="text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-bold">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-[#636B7E] font-medium leading-[1.5] mt-2">
                      {item.desc}
                    </p>
                    {item.url && (
                      <Link
                        className="text-[#8FD254] mt-2 text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-semibold"
                        href={item.url}
                      >
                        Know More
                      </Link>
                    )}
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

export default ProductSlider2;