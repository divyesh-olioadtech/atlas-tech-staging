"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";


const ProductComponentBreakdown = ({
  title,
  para,
  components,
}) => {

  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="rm mx-auto px-[5%] max-w-screen-2xl">


      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >

        <h2 className="h2t">
          {title}
        </h2>

        <p className="text-[16px] leading-[1.5] mt-1 text-[#606370]">
          {para}
        </p>

      </motion.div>



      <div className="flex flex-col gap-8 md:flex-row">


        {/* Image */}

        <div className="bg-[#F4F7FA] md:w-[60%] rounded-xl overflow-hidden relative h-[230px] md:h-[400px] lg:h-[500px]">

          <Image
            src={components[activeIndex]?.image}
            alt={components[activeIndex]?.title || "Component"}
            fill
            className="object-cover"
          />

        </div>



        {/* Components */}

        <div className="overflow-y-auto pr-3 md:w-[40%] h-[420px] lg:h-[500px]">


          {components.map((item,index)=>(


            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer py-4 border-b border-[#D8D8D8]"
            >


              <div
                className={`text-[16px] py-2 font-bold ${
                  activeIndex === index
                    ? "text-[#0052B4]"
                    : "text-[#1A1D2D]"
                }`}
              >

                {index === 0 ? item.title : `${index}. ${item.title}`}

              </div>



              <AnimatePresence>

                {activeIndex === index && (

                  <motion.div
                    initial={{height:0, opacity:0}}
                    animate={{height:"auto", opacity:1}}
                    exit={{height:0, opacity:0}}
                    className="overflow-hidden"
                  >

                    <div className="mt-2 text-sm text-gray-600">
                      {item.desc}
                    </div>

                  </motion.div>

                )}

              </AnimatePresence>


            </div>


          ))}


        </div>


      </div>


    </div>
  );
};


export default ProductComponentBreakdown;