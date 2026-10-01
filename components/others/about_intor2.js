import Image from "next/image";

export default function About_intro2({ data }) {
  return (
    // <div className="w-full  bg-[#1A1D2D]  sm:py-0 ">
    //   <div className="flex  md:gap-16  flex-col-reverse 2xl:px-[5%] bg-[#1A1D2D] max-w-screen-2xl mx-auto sm:flex-row">
    //     {/* Text Section with Gradient Background */}

    //     {/* Image Section */}
    //     <div className="sm:w-[50%] relative">
    //       <Image
    //         src={"/images/comman/intro3.png"}
    //         alt="Intro Image"
    //         width={500}
    //         height={300}
    //         className="object-cover w-full h-full "
    //       />
    //     </div>

    //     <div className="sm:w-[60%] flex flex-col py-5 sm:py-10 pl-[5%] md:pl-[0%] 2xl:pl-[0%] pr-[5%] lg:pr-[10%] items-start gap-3 justify-center ">
    //       <p className="text-[14px] font-bold tracking-widest text-white">
    //         Our Vision
    //       </p>
    //       <h2 className="leading-[1.3] font-bold text-[24px] sm:text-[28px] md:text-[35px] lg:text-[42px] text-white">
    //         Empowering Infrastructure, Enabling Progress
    //       </h2>
    //       <p className="leading-[1.5] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px]  text-white">
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
    //         incidunt mollitia tenetur, natus explicabo sed quae temporibus
    //         fugiat quasi voluptas voluptates odit sunt delectus excepturi nihil
    //         tempore labore. Enim, quisquam. Lorem ipsum dolor sit amet,
    //         consectetur adipisicing elit.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full bg-[#1A1D2D] sm:py-0">
      <div className="w-full mx-auto custom-1800 ">
        <div className="flex md:gap-16 flex-col-reverse  sm:flex-row bg-[#1A1D2D]">
          {/* Text Section */}

          {/* Image Section */}
          <div className="sm:w-[50%] relative">
            <Image
              src={"/images/comman/about-us--1.png"}
              alt="Intro Image"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="sm:w-[60%] flex flex-col py-5 sm:py-10  pl-[7%] px-[5%]   items-start gap-3 justify-center remove-pl-1700">
            <p className="text-[14px]   font-bold tracking-widest text-white">
              OUR VISION
            </p>
            <h2 className="leading-[1.3] font-bold text-[24px] sm:text-[28px] md:text-[35px] lg:text-[42px] text-white">
              Leading India&apos;s Construction Equipment Excellence
            </h2>
            <p className="leading-[1.5] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] text-white">
              We envision Atlas as India&apos;s foremost supplier of quality
              road and civil construction machinery to the world. From our
              Mehsana roots to global markets, we&apos;re committed to
              continuous innovation and improvement, evolving with technology
              while maintaining the reliability that defines our legacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
