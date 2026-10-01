import Image from "next/image";

const stats = [
  { value: "2500+", label: "Installations" },
  { value: "35+", label: "Years of Expertise" },
  { value: "24/7", label: "Technical Support" },
];

export default function CaseStudyHero() {
  return (
    <div className="relative">
      {/* Hero image */}
      <div className="relative w-full h-[85vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/ascb/main.jpg"
          alt="Case Studies"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Heading content */}
        <div className="absolute inset-0 flex flex-col justify-end px-[5%] pb-20 md:pb-24 max-w-screen-2xl mx-auto left-0 right-0">
          <h1 className="text-[38px] sm:text-[52px] md:text-[60px] lg:text-[72px] font-bold text-white leading-[1.1] max-w-3xl">
            Engineering Infrastructure Progress Across Borders
          </h1>
          <p className="mt-4 text-[15px] sm:text-[17px] md:text-[19px] text-white/80 max-w-2xl">
            More than 3 decades of successful installations across highways, industrial zones, urban infrastructure, and export projects in 50+ countries.
          </p>
        </div>
      </div>

      {/* Stats bar — overlaps bottom of hero */}
      <div className="px-[5%] max-w-screen-2xl mx-auto relative -mt-14">
        <div className="bg-[#E7F1E9] rounded-[16px] grid grid-cols-3 divide-x divide-[#C5DEC9]">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-6 md:py-8">
              <span className="text-[#1A1D2D] font-bold text-[16px] sm:text-[26px] md:text-[32px] leading-none">
                {stat.value}
              </span>
              <span className="text-[#606370] text-[10px] sm:text-[12px] md:text-[13px] tracking-wider uppercase mt-1 whitespace-nowrap sm:whitespace-normal text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
