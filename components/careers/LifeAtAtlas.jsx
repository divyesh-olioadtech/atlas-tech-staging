import Image from "next/image";

export default function LifeAtAtlas() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="px-[5%] max-w-screen-2xl mx-auto">

        {/* Header */}
        <h2 className="h2t mb-3">Life at Atlas Technologies</h2>
        <p className="text-[#606370] text-[15px] md:text-[16px] leading-relaxed max-w-xl mb-8 md:mb-12">
          From plant floors to engineering teams and project sites, life at Atlas is driven by collaboration, learning, and building solutions that shape real-world infrastructure.
        </p>

        {/* Desktop image */}
        <div className="hidden sm:block w-full">
          <Image
            src="/images/careers/life-at-atlas-desktop.png"
            alt="Life at Atlas Technologies"
            width={1400}
            height={800}
            className="w-full h-auto rounded-[16px]"
            sizes="100vw"
          />
        </div>

        {/* Mobile image */}
        <div className="block sm:hidden w-full">
          <Image
            src="/images/careers/life-at-atlas-mobile.png"
            alt="Life at Atlas Technologies"
            width={600}
            height={900}
            className="w-full h-auto rounded-[16px]"
            sizes="100vw"
          />
        </div>

      </div>
    </section>
  );
}
