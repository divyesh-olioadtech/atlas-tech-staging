import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      id: 7,
      name: "Bhavesh Patel",
      designation: "Managing Director",
      image: "/images/comman/Bhavesh_Patel.png",
      linkedin: "https://in.linkedin.com/in/bhavesh-patel-971b67291",
    },
    {
      id: 8,
      name: "Nilesh Patel",
      designation: "Managing Director",
      image: "/images/comman/Nilesh_Patel.png",
      linkedin: "https://in.linkedin.com/in/nilesh-patel-3a5603239",
    },
    {
      id: 9,
      name: "Vedant Patel",
      designation: "General Manager",
      image: "/images/comman/Vedant_Patel.png",
      linkedin: "https://in.linkedin.com/in/vedant-patel-0809a6137",
    },
  ];

  // Function to open LinkedIn in a new tab
  const handleLinkedInClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="rm max-w-screen-2xl mx-auto px-[5%]">
      <div className="text-center">
        <p className="text-[14px] text-[#1A1D2D] font-bold tracking-widest">
          Our Team
        </p>
        <h2 className="leading-[1.3] text-[#1A1D2D] font-bold text-[24px] sm:text-[28px] md:text-[35px] lg:text-[42px]">
          Meet the Minds Behind Atlas
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 md:grid-cols-3 sm:mt-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg"
            />

            <div className="flex items-center justify-between w-full mt-3 ">
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-[18px] sm:text-[18px] md:text-[19px] lg:text-[20px]">
                  {member.name}
                </h3>
                <p className="text-[16px]">{member.designation}</p>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="cursor-pointer"
                  onClick={() => handleLinkedInClick(member.linkedin)}
                >
                  <Image
                    src="/images/comman/linkedin2.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
