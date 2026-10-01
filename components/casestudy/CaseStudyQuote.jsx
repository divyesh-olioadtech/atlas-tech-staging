export default function CaseStudyQuote({ quote }) {
  return (
    <section className="relative overflow-hidden bg-[#E7F1E9] py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-darken"
        style={{
          backgroundImage: "url('/images/comman/product-section-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative px-[5%] max-w-screen-2xl mx-auto flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
        {/* Quote mark */}
        <span
          aria-hidden="true"
          className="plus font-extrabold leading-none text-[#4A9706] opacity-40 select-none text-[32px] sm:text-[40px] md:text-[48px]"
        >
          99
        </span>

        {/* Quote text */}
        <blockquote className="plus font-semibold text-center text-[#1A1D2D] max-w-[px] text-[20px] leading-[1.5] sm:text-[22px] sm:leading-[1.5] md:text-[24px] md:leading-[1.55] lg:text-[24px] lg:leading-[40px]">
          {`“${quote.text}”`}
        </blockquote>

        {/* Author */}
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-[#111111] font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[150%] tracking-[-0.03em]">
            {quote.author}
          </p>
          <p className="text-[#636B7E] font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-[21px] tracking-[-0.03em]">
            {quote.company}
          </p>
        </div>
      </div>
    </section>
  );
}
