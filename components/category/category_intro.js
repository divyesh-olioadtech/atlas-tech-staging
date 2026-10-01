"use client";

import Image from "next/image";
import { TextAnimate } from "../animated/Text_Animate";

export default function Category_intro({ data }) {
  return (
    <>
      <div
        className={`w-full ${
          data?.bg && "bg-[#E7F1E9]"
        } py-10 sm:py-12 md:py-16 lg:py-20`}
      >
        <div className="flex gap-5 md:gap-16 px-[5%] flex-col max-w-screen-2xl mx-auto sm:flex-row">
          <div className="sm:w-[60%] flex flex-col items-start gap-3 justify-center">
            <TextAnimate
              animation="blurIn"
              by="word"
              delay={0}
              duration={0.3}
              className="pitag"
              once={true}
            >
              {String(data?.subtitle || "")}
            </TextAnimate>

            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.3}
              duration={0.4}
              className="h2t"
              once={true}
            >
              {String(data?.title || "")}
            </TextAnimate>

            <p className="ptag" once={true}>
              {data?.para}
            </p>
          </div>

          <div className="sm:w-[40%] flex justify-center items-center group">
            <div className="overflow-hidden relative w-full rounded-[10px]">
              <Image
                src={data?.img}
                alt="Intro Image"
                width={500}
                height={300}
                className="w-full md:h-[300px] lg:h-[450px] object-cover rounded-[10px] transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
