import Image from "next/image";
import { ImagePlus, Check } from "lucide-react";
import { engineeringIcons } from "./engineeringIcons";

export default function CaseStudyEngineering({ engineering }) {
  const { title, description, image, points } = engineering;

  return (
    <section className="bg-[#E7F1E9] py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="px-[5%] max-w-screen-2xl mx-auto flex flex-col gap-8 md:gap-10">
        {/* Header */}
        <div className="flex flex-col gap-[10px]">
          <h2 className="h2t">{title}</h2>
          <p className="text-[#606370] text-[16px] md:text-[18px] leading-[150%] tracking-[-0.03em]">
            {description}
          </p>
        </div>

        {/* Content — image + points */}
        <div className="flex flex-col items-start gap-10 md:flex-row md:gap-[60px]">
          {/* Left — image with green arrow ornaments */}
          <div className="w-full md:w-[38%] relative z-10 group">
            {/* Green ornament — top right */}
            <div className="absolute z-20 hidden md:block w-16 h-16 md:w-20 md:h-20 top-16 -right-8 md:-right-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/comman/atlas_v1.png"
                alt=""
                width={80}
                height={80}
                aria-hidden="true"
                className="w-full h-full"
              />
            </div>

            {/* Green ornament — bottom left */}
            <div className="absolute z-20 hidden md:block w-28 h-28 md:w-32 md:h-32 -bottom-6 -left-12 md:-left-16 rotate-[-2deg] transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/comman/atlas_v1.png"
                alt=""
                width={138}
                height={124}
                aria-hidden="true"
                className="w-full h-full"
              />
            </div>

            <div className="relative w-full aspect-[438/511] overflow-hidden rounded-[12px]">
              <Image
                src={image}
                alt={title}
                width={438}
                height={511}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 38vw"
              />
            </div>
          </div>

          {/* Right — points */}
          <div className="w-full md:w-[62%] flex flex-col gap-[25px]">
            {points.map((point, i) => {
              const PointIcon = engineeringIcons[point.icon];
              return (
              <div
                key={i}
                className="flex flex-col gap-[15px] pb-[25px] border-b border-[#8FD254]"
              >
                {PointIcon ? (
                  <PointIcon className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
                ) : (
                  <ImagePlus className="w-5 h-5 md:w-[25px] md:h-[25px] text-[#8FD254]" strokeWidth={2} />
                )}
                <h3 className="text-[#1A1D2D] font-bold text-[16px] sm:text-[17px] md:text-[18px] leading-[1.3] md:leading-[23px] tracking-[-0.03em]">
                  {point.title}
                </h3>
                {point.description && (
                  <p className="text-[#606370] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[150%] tracking-[-0.03em]">
                    {point.description}
                  </p>
                )}
                {point.items && (
                  <ul className="flex flex-col gap-2">
                    {point.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[#606370] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[150%] tracking-[-0.03em]"
                      >
                        <Check className="w-4 h-4 mt-[3px] text-[#8FD254] shrink-0" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
