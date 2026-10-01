import Image from "next/image";

// Card Component
const Card = ({ type, src, alt, bgColor, dotColor, title, description }) => {
  if (type === "image") {
    return (
      <div className="overflow-hidden transition-shadow duration-300 shadow-lg rounded-2xl hover:shadow-xl">
        <div className="relative w-full h-64 sm:h-72 lg:h-80">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${bgColor} rounded-2xl p-6 h-64 sm:h-72 lg:h-80 flex flex-col justify-end relative shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div
        className={`w-3 h-3 ${dotColor} rounded-full absolute top-6 left-6`}
      ></div>
      <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed sm:text-base text-white/90">
        {description}
      </p>
    </div>
  );
};

// Main Section
export default function GridSection() {
  const cards = [
    {
      type: "image",
      src: "/images/comman/team-photo.png",
      alt: "Team Photo",
    },
    {
      type: "image",
      src: "/images/comman/worker-construction.png",
      alt: "Construction Worker",
    },
    {
      type: "text",
      bgColor: "bg-[#4063D7]",
      dotColor: "bg-[#8FD254]",
      title: "DESIGN",
      description:
        "Our CAD team turns your specs into 3D models built for real-world conditions, and not just what looks right on a screen.",
    },
    {
      type: "text",
      bgColor: "bg-[#8FD254]",
      dotColor: "bg-[#4063D7]",
      title: "DELIVERY",
      description:
        "Our delivery team gets your equipment to the site safely and on schedule, handling everything from secure packing to essential documentation.",
    },
    {
      type: "image",
      src: "/images/comman/blue-containers.png",
      alt: "Blue Containers",
    },
    {
      type: "image",
      src: "/images/comman/building-exterior.png",
      alt: "Modern Building",
    },
    {
      type: "image",
      src: "/images/comman/worker-inspection.png",
      alt: "Worker Inspection",
    },
    {
      type: "text",
      bgColor: "bg-[#1A1D2D]",
      dotColor: "bg-[#8FD254]",
      title: "SUPPORT",
      description:
        "We work closely with your engineers and procurement teams, answering questions and helping you choose equipment that genuinely fits project needs.",
    },
    {
      type: "image",
      src: "/images/comman/team-group.png",
      alt: "Team Group Photo",
    },
  ];

  return (
    <section className="w-full rm max-w-screen-2xl  mx-auto px-[5%]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 text-center sm:mb-10">
          <p className="mb-3 text-xs font-medium tracking-wider text-blue-600 uppercase sm:text-sm sm:mb-4">
            ATLAS TECHNOLOGIES
          </p>
          <h2 className="h2t">
            Your One-Stop Destination for
            <br className="hidden sm:block" /> Construction Equipment
          </h2>
        </div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
