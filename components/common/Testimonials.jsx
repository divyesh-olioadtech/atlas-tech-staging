const testimonials = [
  {
    quote:
      "We needed a 160 TPH plant urgently. Atlas delivered and commissioned it within 45 days without compromising performance.",
    name: "Project Manager",
    role: "Highway Construction Contractor, Gandhinagar",
    initials: "PM",
  },
  {
    quote:
      "Atlas ensured smooth commissioning and operator training on-site. The support made a big difference in early operations.",
    name: "Site Engineer",
    role: "Road Construction & Civil Works Company, UAE",
    initials: "SE",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 bg-[#E7F1E9] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/comman/product-section-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative px-[5%] max-w-screen-2xl mx-auto">
        <h2 className="h2t text-center mb-10 md:mb-14">Trusted by Industry Leaders</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-[16px] p-6 md:p-8 flex flex-col gap-5 shadow-sm"
            >
              {/* Quote */}
              <p className="text-[#606370] text-[15px] md:text-[16px] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <hr className="border-t border-gray-200 mt-2" />

              {/* Person */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-[10px] bg-[#8FD254] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1A1D2D] font-bold text-[16px] md:text-[18px]">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-[#1A1D2D] text-[16px] md:text-[18px]">{t.name}</p>
                  <p className="text-[#606370] text-[15px] md:text-[16px]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
