import EmblaCarousel from "embla-carousel";
import About_intro2 from "../../components/others/about_intor2";
import About_intro from "../../components/others/about_intro";
import AboutSection from "../../components/others/about_typo";
import Team from "../../components/others/team";
import VideoPlayer from "../../components/others/video_player";
import Youtube_Slider from "../../components/homepage/youtube_slider";
import WorldMapComponent from "../../components/homepage/mapview";
import FeatureGrid from "../../components/homepage/FeatureGrid";
import Certified from "../../components/homepage/certified";
import Blog from "../../components/homepage/blog";
import Clients from "../../components/homepage/clients";
import Head from "next/head";
import About_info from "../../components/others/Person_info";
import Image from "next/image";
import GridSection from "../../components/others/GridSection";

export default function About_us() {
  return (
    <div>
      <Head>
        <title>About Atlas Technologies | Road Construction Machinery</title>
        <meta
          name="description"
          content="Learn about Atlas Technologies, a trusted manufacturer of road construction machinery delivering reliable, innovative, and efficient equipment for global infrastructure projects."
        />
      </Head>
      <AboutSection />
      <About_intro />
      <About_intro2 />
      <About_info />
      <Team />

      <Youtube_Slider title="It's Engineering for Engineers Who Are Building a New World" />
      <WorldMapComponent
        title="A Global Footprint Built on Engineering Trust"
        para="Our solutions support contractors, governments, and infrastructure developers in some of the world's most demanding environments."
        stats={[
          { value: 2500, label: "Global Installations" },
          { value: 1100, label: "Plants Active in India" },
          { value: 35, label: "Years of Technical Expertise" },
          { value: 50, label: "Export Destinations" },
        ]}
      />
      <FeatureGrid
        title="What Sets Atlas Apart for Infrastructure Leaders"
        features={[
          {
            title: "Reliability with Value",
            para: "Engineered for long-term performance with cost-efficient operation.",
            image: "/images/comman/Reliability_with_value.png",
          },
          {
            title: "After-Sales Support",
            para: "Round-the-clock assistance with rapid maintenance and spare-part response.",
            image: "/images/comman/after_sales_support.png",
          },
          {
            title: "Sustainability",
            para: "Advanced systems, including low-NOx burners and energy-smart designs.",
            image: "/images/comman/sustainability.png",
          },
        ]}
      />

      <section className="relative flex items-end justify-start w-full min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/comman/atlas_factory.jpg"
            alt="Construction Equipment Facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[5%] pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-medium tracking-wider uppercase sm:mb-4 text-white/90 sm:text-sm">
              OUR LEADERSHIP
            </p>
            <h2 className="text-white! h2t">
              Building Machines to Empower Roads and Public Infrastructure
              Worldwide
            </h2>
          </div>
        </div>
      </section>

      <GridSection />
      <Blog />
    </div>
  );
}
