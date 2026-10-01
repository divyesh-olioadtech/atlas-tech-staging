"use client";

import Image from "next/image";
import Link from "next/link";
import { TextAnimate } from "../animated/Text_Animate";
import { motion } from "motion/react";

export default function Intro() {
  return (
    <>
      <div className="flex gap-5 md:gap-16 px-[5%] flex-col max-w-screen-2xl mx-auto sm:flex-row rm">
        <div className="sm:w-[60%] flex flex-col items-start gap-3 justify-center relative z-10">
          <p className="pitag">ENGINEERED FOR MODERN INFRASTRUCTURE</p>

          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.3}
            duration={0.4}
            className="h2t"
            once={true}
          >
            Atlas Products Built for Modern Infrastructure
          </TextAnimate>

          <p className="text-[#606370] text-[15px] md:text-[16px] font-semibold">
            Engineered Solutions For Roads, Infrastructure, And Civil Construction Projects Worldwide
          </p>

          <p className="ptag">
            For over three decades, Atlas Technologies has manufactured road and
            civil construction equipment trusted across 50+ countries. Whether
            you&apos;re paving national highways, producing ready-mix concrete
            for metro construction, or maintaining urban road networks, Atlas
            equipment delivers the reliability contractors depend on when
            deadlines and quality standards cannot be compromised.
          </p>

          <Link href={"/about"}>
            <button className="text-[16px] mt-3 font-semibold text-[#12121C] rounded-[12px] hover:bg-[#8FD254] cursor-pointer border-[1px]  border-[#8FD254] p-[15px]">
              Know More
            </button>
          </Link>
        </div>

        <div className="sm:w-[40%] flex justify-center items-center relative z-10 group">
          {/* Green ornament - bottom left */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute z-20 hidden w-24 h-24 transition-transform duration-300 -bottom-10 -left-16 md:w-32 md:h-32 sm:block group-hover:scale-110"
          >
            <Image
              src="/images/comman/atlas_v1.png"
              alt="Ornament"
              width={150}
              height={150}
              className="w-full h-full"
            />
          </motion.div>

          {/* Green ornament - top right */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute z-20 hidden w-24 h-24 transition-transform duration-300 top-20 -right-16 md:w-32 md:h-32 sm:block group-hover:scale-110"
          >
            <Image
              src="/images/comman/atlas_v1.png"
              alt="Ornament"
              width={150}
              height={150}
              className="w-full h-full"
            />
          </motion.div>

          <div className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/product/overview.png"
              alt="Intro Image"
              width={500}
              height={300}
              className="relative w-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
}
