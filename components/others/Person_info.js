import Image from "next/image";
export default function TestimonialSection() {
  return (
    <div className="rm max-w-screen-2xl  mx-auto px-[5%]">
      <div className="w-full rounded-[12px] bg-[#E7F1E9]  ">
        <div className="flex flex-col md:gap-16 sm:flex-row ">
          {/* Text Section */}
          <div className="sm:w-[60%]  flex flex-col   items-start gap-3 justify-center ">
            <div className="p-10">
              <p className="mb-6  text-[16px] leading-relaxed text-[#606370] sm:text-[16px]">
                We began with a simple vision: to build reliable road
                construction machinery that India could depend on. What started
                as Ashirvad Equipment grew through our commitment to quality
                until we became a trusted name nationwide. When we reorganized
                and formed Atlas Industries, we achieved ISO certification and
                expanded from local workshops to exporting internationally. As
                technology advanced, my children helped establish Atlas
                Technologies, bringing cutting-edge asphalt and wet mix plants
                to market while honoring our foundation. Today, with my
                grandchildren joining the business, I&apos;m proud that what
                began as one family&apos;s commitment has evolved into the Atlas
                group, exporting to countries worldwide, yet still rooted in the
                same Mehsana soil where we started over forty years ago.
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                    Laljibhai Patel
                  </h3>
                  <p className="text-xs text-gray-600 sm:text-sm">Founder</p>
                </div>

                {/* <div className="flex items-center justify-center flex-shrink-0 ">
                  <Image
                    src="/images/comman/linkedin2.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-10 h-10"
                  />
                </div> */}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="sm:w-[50%] relative">
            <Image
              src={"/images/comman/founder.png"}
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
