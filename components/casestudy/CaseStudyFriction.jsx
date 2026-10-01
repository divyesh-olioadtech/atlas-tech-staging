export default function CaseStudyFriction({ friction }) {
  return (
    <section className="py-10 bg-white sm:py-12 md:py-16">
      <div className="px-[5%] max-w-screen-2xl mx-auto">
        <h2 className="h2t mb-1">
          {friction.title}
        </h2>
        <p className="text-[#606370] text-[15px] md:text-[18px] mb-8">
          {friction.description}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {friction.points.map((point, i) => (
            <div
              key={i}
              className="bg-[#E7EAF1] rounded-[12px] p-5 md:p-6 flex flex-col gap-3"
            >
              {/* Green dot */}
              <span className="w-[10px] h-[10px] rounded-full bg-[#8FD254] block mt-1" />

              <h3 className="text-[#1A1D2D] font-bold text-[18px] mt-5 md:text-[18px] leading-snug">
                {point.title}
              </h3>
              <p className="text-[#606370] text-[15px] md:text-[16px] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
