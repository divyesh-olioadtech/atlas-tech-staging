import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowRight } from "lucide-react";

const Expolreproducts = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(null);

  const products = [
    {
      title: "Asphalt Plants & Machines",
      description:
        "Fuel-efficient, RAP-ready asphalt plants engineered for highways, airports, and city roads. From batchmix to drum mix, Atlas delivers consistent quality, mobility, and performance in every environment.",
      image: "/images/sabp/sabp.JPG",
      link: "/asphalt-plants",
      titleColor: "text-white",
      titleHoverColor: "text-white",
    },
    {
      title: "Concrete Plants & Machines",
      description:
        "Accurate batching and robust mixers for projects of any scale. Stationary, mobile, mini, and specialty plants deliver consistent concrete for roads, high-rises, bridges, and industrial structures.",
      image: "/images/acmp/concreteexploreourproducts.webp",
      link: "/concrete-plants",
      titleColor: "text-white",
      titleHoverColor: "text-white",
    },
    {
      title: "Road Construction Machinery",
      description:
        "Durable sweepers, cutters, dewatering systems, and kerb-laying machines built for tough job sites; ensuring reliability, easy maintenance, and consistent performance across urban streets and national highways.",
      image: "/images/plants/kerb-laying/KERB LAYING MACHINE.png",
      link: "/other-products",
      titleColor: "text-[#1A1D2D]",
      titleHoverColor: "text-white",
    },
  ];

  const handleClick = (link) => {
    router.push(link);
  };

  const handleTouchStart = (index) => {
    setActiveIndex(index);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setActiveIndex(null), 300);
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div
      className="py-10 sm:py-12 md:py-16 lg:py-20"
      style={{
        backgroundImage: `url(/images/comman/bg2.png)`,
      }}
    >
      <div className="px-[5%] max-w-screen-2xl mx-auto">
        <div className="mb-8 text-center">
          <p className="pitag">EXPLORE OUR PRODUCTS</p>
          <h2 className="h2t">
            Built to Perform, Designed to Endure
            <span className="text-green-600">.</span>
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col"
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main Card - Shrinks only when this card is hovered */}
              <div
                onClick={() => handleClick(product.link)}
                className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "h-[240px] md:h-[260px] lg:h-[320px]"
                    : "h-[320px] md:h-[350px] lg:h-[380px]"
                }`}
                tabIndex={0}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />

                {/* Dark Overlay - Shows on hover */}
                <div
                  className={`absolute inset-0 bg-[#1A1D2D] transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Title - Color changes based on hover */}
                      <h3
                        className={`text-[18px] md:text-[19px] lg:text-[20px] font-semibold transition-colors duration-300 ${
                          activeIndex === index
                            ? product.titleHoverColor
                            : product.titleColor
                        }`}
                      >
                        {product.title}
                      </h3>

                      {/* Description - Show on hover */}
                      <p
                        className={`leading-[1.5] text-[14px] sm:text-[15px] text-gray-200 mt-3 transition-all duration-300 ${
                          activeIndex === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2"
                        }`}
                      >
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Button - Shows only when this card is hovered */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "mt-3 max-h-[60px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <button
                  onClick={() => handleClick(product.link)}
                  className="w-full bg-[#8FD254] border-b-2 hover:bg-[#7bc044] text-[#1A1D2D] font-semibold py-3 px-4 rounded-[15px] flex items-center justify-between group"
                >
                  <span className="text-[15px] md:text-[16px]">
                    View Products
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expolreproducts;
