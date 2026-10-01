export default function CaseStudyVictory({ victory }) {
  const { title = "The Victory", description, outcomes } = victory;
  const snapshot = victory.snapshot || { title: null, metrics: victory.metrics };
  const metrics = snapshot.metrics || [];

  return (
    <section className="py-10 bg-white sm:py-12 md:py-16 lg:py-20">
      <div className="px-[5%] max-w-screen-2xl mx-auto flex flex-col items-center gap-8 md:gap-10">
        {/* Section title */}
        <div className="flex flex-col gap-[10px] text-center max-w-[600px]">
          <h2 className="h2t">{title}</h2>
          {description && (
            <p className="text-[#606370] text-[16px] md:text-[18px] leading-[150%] tracking-[-0.03em]">
              {description}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col gap-8 md:gap-10">
          {/* Project Outcomes card */}
          {outcomes?.items?.length > 0 && (
            <div className="w-full max-w-[949px] mx-auto bg-[#E7EAF1] rounded-[16px] px-5 py-8 md:px-[30px] md:py-[30px] flex flex-col items-center gap-6 md:gap-[30px]">
              {outcomes.title && (
                <h3 className="plus font-bold text-[#1A1D2D] text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.03em] text-center">
                  {outcomes.title}
                </h3>
              )}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 md:gap-y-[30px]">
                {outcomes.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-5">
                    <span className="w-[14px] h-[14px] rounded-full bg-[#8FD254] shrink-0" />
                    <span className="text-[#1A1D2D] font-semibold text-[15px] sm:text-[17px] md:text-[20px] leading-[150%] tracking-[-0.03em]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Snapshot */}
          {metrics.length > 0 && (
            <div className="w-full flex flex-col items-center gap-5 md:gap-6">
              {snapshot.title && (
                <h3 className="plus font-bold text-[#1A1D2D] text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.03em] text-center">
                  {snapshot.title}
                </h3>
              )}

              <div className="w-full overflow-hidden rounded-[16px]">
                {/* Header row */}
                <div className="grid grid-cols-3 bg-[#9498A6] px-5 py-5 md:px-[30px] md:py-[30px] gap-4 md:gap-[72px]">
                  {["Metric", "Before", "After"].map((h) => (
                    <span
                      key={h}
                      className="text-white font-medium text-[14px] sm:text-[18px] md:text-[24px] leading-[150%] tracking-[-0.03em]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Data rows */}
                {metrics.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 items-center bg-[#E7EAF1] px-5 py-5 md:px-[30px] md:py-[30px] gap-4 md:gap-[72px]"
                  >
                    <span className="plus text-[#1A1D2D] font-semibold text-[13px] sm:text-[16px] md:text-[20px] leading-[1.25] tracking-[-0.03em]">
                      {row.metric}
                    </span>
                    <span className="plus text-[#1A1D2D] font-semibold text-[13px] sm:text-[16px] md:text-[20px] leading-[1.25] tracking-[-0.03em]">
                      {row.before}
                    </span>
                    <span className="plus text-[#3E6919] font-semibold text-[13px] sm:text-[16px] md:text-[20px] leading-[1.25] tracking-[-0.03em]">
                      {row.after}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
