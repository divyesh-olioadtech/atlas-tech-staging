import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#E7F1E9]">
      <div className="px-[5%] max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-20">

          {/* Founder image */}
          <div className="w-full md:w-[35%] flex-shrink-0">
            <div className="relative w-full h-[480px] md:h-[560px] rounded-[16px] overflow-hidden">
              <Image
                src="/images/careers/founder.png"
                alt="Laljibhai Patel – Founder"
                fill
                className="object-cover object-top"
               
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-[65%]">
            <h2 className="mb-6 h2t">A Message From Our Founder</h2>

            <p className="text-[#606370] text-[16px] md:text-[18px] leading-relaxed mb-4">
              We began with a simple vision: to build reliable road construction machinery that India could depend on. What started as Ashirvad Equipment grew through our commitment to quality until we became a trusted name nationwide. When we reorganized and formed Atlas Industries, we achieved ISO certification and expanded from local workshops to exporting internationally.
            </p>
            <p className="text-[#606370] text-[16px] md:text-[18px] leading-relaxed mb-8">
              As technology advanced, my children helped establish Atlas Technologies, bringing cutting-edge asphalt and wet mix plants to market while honoring our foundation. Today, with my grandchildren joining the business, I&apos;m proud that what began as one family&apos;s commitment has evolved into the Atlas group, exporting to countries worldwide, yet still rooted in the same Mehsana soil where we started over forty years ago.
            </p>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-[#1A1D2D] font-bold text-[17px] md:text-[20px]">Laljibhai Patel</p>
                <p className="text-[#606370] text-[15px] md:text-[16px] mt-1">Founder</p>
              </div>
              <Image
                src="/images/comman/atlas_v1.png"
                alt="Atlas Logo"
                width={48}
                height={48}
                className="opacity-80"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
