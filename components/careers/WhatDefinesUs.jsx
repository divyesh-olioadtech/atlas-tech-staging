const values = [
  {
    icon: "/images/careers/defines-icon/light-bulb 1.svg",
    title: "Innovation First",
    description:
      "We continuously improve our products, processes, and ideas to stay ahead in infrastructure engineering.",
  },
  {
    icon: "/images/careers/defines-icon/warranty 1.svg",
    title: "Built on Integrity",
    description:
      "We believe trust is earned through transparency, accountability, and doing the right thing.",
  },
  {
    icon: "/images/careers/defines-icon/responsibility 1.svg",
    title: "Ownership Mindset",
    description:
      "Every team member is empowered to take responsibility and create measurable impact.",
  },
  {
    icon: "/images/careers/defines-icon/statistics 1.svg",
    title: "Learn & Grow",
    description:
      "We invest in skill development, hands-on learning, and long-term career progression.",
  },
  {
    icon: "/images/careers/defines-icon/goal 1.svg",
    title: "Team-Driven Success",
    description:
      "We grow together, as one team, through collaboration, mutual respect, and shared purpose.",
  },
  {
    icon: "/images/careers/defines-icon/international 1.svg",
    title: "Global Ambition",
    description:
      "From India to international markets, we build careers with global exposure and opportunities.",
  },
];

export default function WhatDefinesUs() {
  return (
    <section
      className="py-14 sm:py-16 md:py-20"
      style={{
        background: "linear-gradient(131.32deg, #1A1D2D 26.61%, #252B4D 97.02%)",
      }}
    >
      <div className="px-[5%] max-w-screen-2xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="h2t text-white!">What Defines Us</h2>
          <p className="text-white/60 text-[16px] md:text-[18px] mt-3 max-w-xl mx-auto leading-relaxed">
            At Atlas Technologies, we've built a culture that celebrates innovation, values integrity, and champions teamwork.
          </p>
        </div>

        {/* Grid */}
        <div className="grid max-w-6xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3">
          {values.map((item, i) => {
            return (
              <div
                key={i}
                className="rounded-[14px] p-6 md:p-7 flex flex-col gap-4"
                style={{ backgroundColor: "#9498A666" }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#8FD254CC" }}
                >
                  <img src={item.icon} alt={item.title} className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-white font-bold text-[16px] md:text-[18px] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
