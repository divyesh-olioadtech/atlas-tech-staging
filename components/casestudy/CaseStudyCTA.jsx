"use client";
import Link from "next/link";

const defaultCTA = {
  title: "Ready to Build Your Next Global Infrastructure?",
  description: "Let's discuss how our 15+ years of deployment expertise can streamline your next project.",
  buttons: [
    { label: "Request a Technical Consultation", href: "/contact-us", primary: true },
  ],
};

export default function CaseStudyCTA({ cta = defaultCTA }) {
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20"
      style={{
        backgroundImage: "url('/images/comman/cta-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="relative px-[5%] max-w-screen-2xl mx-auto">
        <h2 className="text-white font-bold text-[26px] sm:text-[34px] md:text-[42px] lg:text-[50px] leading-[1.15] max-w-2xl">
          {cta.title}
        </h2>
        <p className="text-white/60 text-[14px] md:text-[15px] mt-3 mb-8 max-w-xl">
          {cta.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {cta.buttons.map((btn, i) =>
            btn.onClick ? (
              <button
                key={i}
                onClick={btn.onClick}
                className={`inline-block font-semibold text-[14px] md:text-[15px] px-6 py-3 rounded-[12px] transition-colors duration-200 cursor-pointer ${
                  btn.primary
                    ? "bg-[#8FD254] text-[#1A1D2D] hover:bg-[#7aba45]"
                    : "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10"
                }`}
              >
                {btn.label}
              </button>
            ) : (
              <Link
                key={i}
                href={btn.href}
                className={`inline-block font-semibold text-[14px] md:text-[15px] px-6 py-3 rounded-[12px] transition-colors duration-200 ${
                  btn.primary
                    ? "bg-[#8FD254] text-[#1A1D2D] hover:bg-[#7aba45]"
                    : "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10"
                }`}
              >
                {btn.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
