import Image from "next/image";

export default function CaseStudyInternalHero({ study }) {
  return (
    <div className="relative">
      {/* Hero image — same style as CaseStudyHero */}
      <div className="relative w-full h-[85vh] min-h-[500px] overflow-hidden">
        <Image
          src={study.heroImage}
          alt={study.quote}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-end px-[5%] pb-20 md:pb-24 max-w-screen-2xl mx-auto left-0 right-0">
          <h1 className="text-white font-bold text-[22px] sm:text-[32px] md:text-[42px] lg:text-[52px] leading-[1.2] max-w-3xl">
            &ldquo;{study.heroQuote}&rdquo;
          </h1>
          <p className="mt-3 text-white/70 text-[14px] md:text-[16px] font-medium">
            {study.heroQuoteSubtitle}
          </p>
        </div>
      </div>

      {/* Meta bar — Context Breakdown */}
      <div className="px-[5%] max-w-screen-2xl mx-auto relative -mt-14">
        <div className="bg-[#E7F1E9] rounded-[16px] border border-[#C1C9B4]/20 overflow-hidden grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#C1C9B4]/40">
          {[
            { label: "Location", value: study.location },
            { label: study.projectType ? "Project Type" : "Stack / System", value: study.projectType || study.stackSystem },
            { label: "Equipment", value: study.equipment },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center gap-2 px-6 py-6 md:px-[30px] md:py-[30px]"
            >
              <span className="text-[#5B5D70] font-medium uppercase text-[11px] sm:text-[12px] md:text-[14px] leading-4 tracking-[1.2px]">
                {item.label}
              </span>
              <span className="plus text-[#181B26] font-semibold text-[15px] sm:text-[16px] md:text-[18px] leading-[28px]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
