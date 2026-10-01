import Image from "next/image";

export default function About_intro({ data }) {
  return (
    <div className="w-full bg-[#8FD254] sm:py-0">
      <div className="w-full mx-auto custom-1800 ">
        <div className="flex md:gap-16 flex-col  sm:flex-row bg-[#8FD254]">
          {/* Text Section */}
          <div className="sm:w-[60%] flex flex-col py-5 sm:py-10  pl-[7%] px-[5%]   items-start gap-3 justify-center remove-pl-1700">
            <p className="text-[14px]   font-bold tracking-widest text-white">
              Our Mission
            </p>
            <h2 className="leading-[1.3] font-bold text-[24px] sm:text-[28px] md:text-[35px] lg:text-[42px] text-white">
              Engineering a Legacy, Building the Future
            </h2>
            <p className="leading-[1.5] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] text-white">
              Our mission is to deliver road and civil construction machinery of
              the highest quality at competitive rates. Through precision
              engineering, premium materials, and skilled craftsmanship, we
              ensure every Atlas machine performs at its best, empowering
              infrastructure development across India and beyond.
            </p>
          </div>

          {/* Image Section */}
          <div className="sm:w-[50%] relative">
            <Image
              src={"/images/comman/about-us--2.png"}
              alt="Intro Image"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
