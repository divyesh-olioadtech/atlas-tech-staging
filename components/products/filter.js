"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { motion } from "motion/react";

export default function ProductFilterComponent({
  products,
  kgoff = true,
  productLinks,
  unit = "TPH",
  hideCapacityFilter = true,
  note = null,
  title = "Products",
  subtitle = "Discover and filter the products you need.",
}) {
  const capacityValues = [
    ...new Set(
      products.flatMap((p) => [p.minCapacity, p.maxCapacity])
    ),
  ].sort((a, b) => a - b);

  const minCapacity = capacityValues[0];
  const maxCapacity = capacityValues[capacityValues.length - 1];

  const capacityMarks = Object.fromEntries(
    capacityValues.map((v) => [v, `${v}`])
  );

  const mixerProducts = kgoff
    ? products.filter((p) => p.mixerSize != null)
    : [];

  const mixerValues = kgoff && mixerProducts.length
    ? [...new Set(mixerProducts.map((p) => p.mixerSize))].sort((a, b) => a - b)
    : [0];

  const minMixerSize = mixerValues[0];
  const maxMixerSize = mixerValues[mixerValues.length - 1];

  const mixerMarks = Object.fromEntries(
    mixerValues.map((v) => [v, `${v}`])
  );

  const router = useRouter();

  const [capacityRange, setCapacityRange] = useState([
    minCapacity,
    maxCapacity,
  ]);
  const [mixerRange, setMixerRange] = useState([minMixerSize, maxMixerSize]);
  const [showFilters, setShowFilters] = useState(false);

  const handleResetFilters = () => {
    setCapacityRange([minCapacity, maxCapacity]);
    setMixerRange([minMixerSize, maxMixerSize]);
  };

  const handleProductClick = (url) => {
    router.push(`${router.pathname}${url}`);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.maxCapacity >= capacityRange[0] &&
      product.minCapacity <= capacityRange[1] &&
      (!kgoff ||
        (product.mixerSize >= mixerRange[0] &&
          product.mixerSize <= mixerRange[1]))
  );

  return (
    <div className="px-[5%] rm max-w-screen-2xl mx-auto" id="product-list">
      <div className="mb-6">
        <h2 className="h2t">{title}</h2>
        <p className="text-[16px]">{subtitle}</p>
      </div>
      <div className="p-4 flex flex-col md:flex-row gap-8 border-[1px] border-[#DADADA] rounded-[12px]">
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } md:block rounded w-full md:w-1/5 h-auto`}
        >
          {hideCapacityFilter && (
            <>
              <div className="flex justify-between items-center pb-5 border-b-[1px] border-[#DEDEDE]">
                <p className="text-[18px] font-bold">Filters</p>
                <button
                  onClick={handleResetFilters}
                  className="text-black bg-[#DEDEDE] hover:bg-[#cac7c7] text-[14px] px-[15px] py-[6px] rounded"
                >
                  Reset
                </button>
              </div>

              <div className="my-5">
                <label className="block text-[16px] font-semibold text-[#1A1D2D] mb-2">
                  Product Capacity ({unit})
                </label>
                <div className="flex justify-between text-sm mb-1 font-medium text-[#1A1D2D]">
                  <span>{capacityRange[0]} {unit}</span>
                  <span>{capacityRange[1]} {unit}</span>
                </div>
                <Slider
                  range
                  min={minCapacity}
                  max={maxCapacity}
                  marks={capacityMarks}
                  step={null}
                  defaultValue={capacityRange}
                  value={capacityRange}
                  onChange={setCapacityRange}
                  trackStyle={[{ backgroundColor: "#0052B4" }]}
                  handleStyle={[
                    { backgroundColor: "#0052B4", borderColor: "#0052B4" },
                    { backgroundColor: "#0052B4", borderColor: "#0052B4" },
                  ]}
                  dotStyle={{ borderColor: "#0052B4" }}
                  activeDotStyle={{ borderColor: "#0052B4" }}
                />
              </div>
            </>
          )}

          {kgoff && (
            <div className="my-5">
              <label className="block text-[16px] font-semibold text-[#1A1D2D] mb-2">
                Mixer Size (KG)
              </label>
              <div className="flex justify-between mb-1 text-[14px] font-medium text-[#1A1D2D]">
                <span>{mixerRange[0]} KG</span>
                <span>{mixerRange[1]} KG</span>
              </div>
              <Slider
                range
                min={minMixerSize}
                max={maxMixerSize}
                marks={mixerMarks}
                step={null}
                defaultValue={mixerRange}
                value={mixerRange}
                onChange={setMixerRange}
                trackStyle={[{ backgroundColor: "#0052B4" }]}
                handleStyle={[
                  { backgroundColor: "#0052B4", borderColor: "#0052B4" },
                  { backgroundColor: "#0052B4", borderColor: "#0052B4" },
                ]}
                dotStyle={{ borderColor: "#0052B4" }}
                activeDotStyle={{ borderColor: "#0052B4" }}
              />
            </div>
          )}

          <div className="my-5">
            <label className="block text-[16px] font-semibold text-[#1A1D2D]">
              Similar Products
            </label>
            <div className="flex flex-col gap-2 mt-2">
              {productLinks.map((link) => (
                <Link
                  href={`/${link.url}`}
                  key={link.url}
                  className="text-[16px] font-medium text-[#606370] hover:text-[#0052B4]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden text-black border-1 border-[#DEDEDE] mb-4 hover:bg-[#cac7c7] text-[14px] px-[12px] py-[6px] rounded"
            >
              <img src="/images/comman/filter.png" alt="" className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {filteredProducts.map((product, index) => {
              const row = Math.floor(index / 3); // Calculate row number
              const col = index % 3; // Calculate column position
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: row * 0.2 + col * 0.08, // Row-wise stacking
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  onClick={() => handleProductClick(product.url)}
                  className="flex flex-col items-start w-full gap-1 cursor-pointer group"
                >
                  <div className="overflow-hidden rounded-[10px] w-full">
                    <Image
                      src={`${
                        product.img ? product.img : "/images/comman/product.png"
                      }`}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="w-full h-[230px] md:h-[250px] lg:h-[250px] object-cover rounded-[10px] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-[#1A1D2D] text-[18px] font-bold">
                    {product.name}
                  </h3>
                  <p className="text-[#636B7E] font-medium text-[16px]">
                    {product.minCapacity != null &&
                      product.maxCapacity != null && (
                        <>
                          {product.minCapacity === product.maxCapacity
                            ? `${product.minCapacity} ${unit}`
                            : `${product.minCapacity}-${product.maxCapacity} ${unit}`}
                          {" | "}
                        </>
                      )}
                    {product.tags}
                    {kgoff && product.mixerSize
                      ? ` | ${product.mixerSize} KG`
                      : ""}
                  </p>
                  <button
                    onClick={() => handleProductClick(product.url)}
                    className="text-[#8FD254] mt-1 text-[18px] cursor-pointer"
                  >
                    Know More
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <i>{note && note}</i>
    </div>
  );
}
