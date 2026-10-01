import Image from "next/image";

const CAREERS_EMAIL = "updates@atlastechnologiesindia.com";
const MAIL_SUBJECT = "New Job Application";
const MAIL_BODY = "Hi Atlas Technologies Team,%0A%0APlease find my resume attached for your consideration.%0A%0ARegards,";

export default function CareersHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/careers/hero-image.png"
        alt="Atlas Team"
        fill
        priority
        className="object-cover object-center"
      />


      <div className="absolute inset-0 flex flex-col justify-end px-[5%] pb-16 md:pb-20 max-w-screen-2xl mx-auto left-0 right-0">
        <h1 className="h1t font-bold text-white leading-[1.05] max-w-3xl">
          Join the Atlas Family
        </h1>
        <p className="mt-4 text-[15px] sm:text-[17px] md:text-[19px] text-white/85 max-w-xl leading-relaxed">
          Be part of a team shaping roads, infrastructure, and industrial progress across India and global markets.
        </p>
        <a
          href={`mailto:${CAREERS_EMAIL}?subject=${MAIL_SUBJECT}&body=${MAIL_BODY}`}
          className="mt-6 inline-flex items-center gap-2 bg-[#8FD254] hover:bg-[#7aba45] text-[#1A1D2D] font-semibold text-[15px] md:text-[16px] px-6 py-3 rounded-[12px] transition-colors duration-200 w-fit"
        >
          Send Your Resume
        </a>
      </div>
    </section>
  );
}
