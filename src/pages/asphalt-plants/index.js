import Category_Banner from "../../../components/category/category_banner";
import Category_intro from "../../../components/category/category_intro";
import Expolre_category from "../../../components/category/expolore_category";
import FAQSection1 from "../../../components/category/faq1";
import FAQSection2 from "../../../components/category/faq2";
import Head from "next/head";
import ContactForm from "../../../components/category/form";
import Blog from "../../../components/homepage/blog";
import Certified from "../../../components/homepage/certified";
import Clients from "../../../components/homepage/clients";

import WorldMapComponent from "../../../components/homepage/mapview";
const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#collection",
      name: "Professional Asphalt Production Machinery Range",
      description: "Atlas Technologies is a leading mobile hot mix asphalt plant supplier. Our range includes high-capacity stationary asphalt batch plants (ABP), portable hot mix plants, and continuous drum mix solutions designed for global infrastructure compliance.",
      url: "https://www.atlastechnologiesindia.com/asphalt-plants",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/#website" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#itemlist",
        name: "Atlas Asphalt Plant Categories",
        numberOfItems: 6,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Mobile Asphalt Drum Mix Plant", description: "A highly portable continuous mixing solution designed for rapid transport and quick commissioning at remote road construction sites.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant" },
          { "@type": "ListItem", position: 2, name: "Asphalt Drum Mix Plant", description: "The standard stationary continuous asphalt mixer machine (40–200 TPH) featuring parallel flow technology for consistent high-volume output.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant" },
          { "@type": "ListItem", position: 3, name: "Counter Flow Asphalt Plant", description: "An eco-friendly continuous asphalt mixing plant (40–150 TPH) that uses reverse airflow for better fuel efficiency and lower emissions.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant" },
          { "@type": "ListItem", position: 4, name: "Double Drum Asphalt Plant", description: "Features separate drying and mixing zones to produce superior quality hot mix while allowing for higher RAP (Recycled Asphalt) percentages.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant" },
          { "@type": "ListItem", position: 5, name: "Mobile Asphalt Batch Plants (MABP)", description: "Skid-mounted or wheel-mounted batching towers that provide the precision of stationary plants with the flexibility of mobile units.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant" },
          { "@type": "ListItem", position: 6, name: "Stationary Asphalt Batch Plants (ABP)", description: "The flagship asphalt tower plant series (80–320 TPH) designed for permanent large-scale highway and airport infrastructure projects.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Plants", item: "https://www.atlastechnologiesindia.com/asphalt-plants" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a double drum and a standard asphalt drum mix plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard drum plant performs drying and mixing in one zone. A double drum asphalt plant separates these processes into two zones, which prevents bitumen from being exposed to the direct flame, resulting in lower emissions and higher mix quality.",
      },
    },
    {
      "@type": "Question",
      name: "When should I choose a Stationary Asphalt Batching Plant (ABP) over a drum plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stationary Asphalt Batch Plants are preferred for high-specification NHAI or international projects where every batch must be precisely weighed. They are ideal for permanent sites where mix recipes (gradations) change frequently.",
      },
    },
    {
      "@type": "Question",
      name: "Are Atlas Mobile Asphalt Batch Plants (MABP) easy to relocate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our MABP series is designed with modular, skid-mounted components. As a leading mobile hot mix asphalt plant supplier, we ensure these plants can be dismantled, moved, and reassembled at a new site within 7 to 10 days.",
      },
    },
    {
      "@type": "Question",
      name: "What is the capacity range for a Counter Flow Asphalt Plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Atlas counterflow series ranges from 40 TPH to 150 TPH. These plants are specifically engineered for contractors who require high fuel efficiency and the ability to use recycled asphalt (RAP).",
      },
    },
    {
      "@type": "Question",
      name: "Does the Mobile Asphalt Drum Mix Plant require a heavy foundation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. One of the main benefits of a mobile drum mix plant is that it requires minimal civil work. Most units can be set up on a well-compacted level surface or simple concrete pads, significantly reducing setup time and costs.",
      },
    },
    {
      "@type": "Question",
      name: "Can all Atlas asphalt plants be integrated with pollution control units?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every plant in our range can be equipped with either a venturi-type wet scrubber or a high-efficiency baghouse filter to meet local environmental norms.",
      },
    },
  ],
};

export default function Category() {
  const category_banner_data = {
    title: "Asphalt Plants & Machinery",
    para: "35+ Years Expertise | RAP-Ready Designs | 24/7 Global Support",
    img: "/images/sabp/atlasplantbanner.jpg",
    pdfPath: "/static/brochure/asphalt-plants.pdf",
    scrollTarget: "products-section",
  };
  const category_intro_data = {
    subtitle: "Overview",
    title: "Paving the Road of Progress",
    para: "At Atlas Technologies, we forge the tools that shape the world beneath your feet. For three decades, our asphalt plants and machinery have laid the foundation for progress; from intercontinental highways that unite economies to neighborhood roads that connect communities. Whether you’re constructing highways, urban roads, or airport runways, our products are engineered to deliver maximum efficiency, flexibility, and environmental responsibility.",
    img: "/images/sabp/asphaltplantsatlasnewbanner.webp",
  };

  const faqData2 = [
    {
      title: "1. What makes Atlas asphalt plants more fuel-efficient?",
      content: (
        <>
          Our plants feature <b>patented low-NOx burners</b> and{" "}
          <b>RAP (Recycled Asphalt Pavement)</b> compatibility up to{" "}
          <span style={{ color: "black", fontWeight: "bold" }}>30%</span>,
          reducing fuel costs by <b>15–20%</b> compared to conventional systems.
          Advanced <b>heat recovery technology</b> ensures optimal energy use.
        </>
      ),
    },
    {
      title: "2. How quickly can a mobile asphalt plant be operational?",
      content: (
        <>
          Atlas <b>mobile plants deploy in under 48 hours</b> thanks to:
          <ul className="mt-2 ml-4 list-none">
            <li>
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "22px" }}
              >
                ✓
              </span>{" "}
              Pre-assembled modules
            </li>
            <li>
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "22px" }}
              >
                ✓
              </span>{" "}
              Plug-and-play electrical systems
            </li>
            <li>
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "22px" }}
              >
                ✓
              </span>{" "}
              Automated calibration
            </li>
          </ul>
          <p style={{ fontStyle: "italic", marginTop: "10px" }}>
            Our MABP-160 was mixing asphalt within 36 hours of arrival in
            Nigeria.
          </p>
        </>
      ),
    },
    {
      title: "3. Do you provide training for new operators?",
      content: (
        <>
          Yes! Every purchase includes:
          <ul className="mt-2 ml-4 list-disc">
            <li>
              <b>On-site commissioning</b> by Atlas engineers
            </li>
            <li>
              <b>SCADA</b> system training
            </li>
            <li>
              <b>24/7 remote support</b>
            </li>
          </ul>
          <p style={{ marginTop: "10px" }}>
            We’ve trained <b>1,200+ operators</b> across 50+ countries.
          </p>
        </>
      ),
    },
    {
      title: "4. What’s your warranty and maintenance support?",
      content: (
        <>
          <ul className="mt-2 ml-4 list-none">
            <li>
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "22px" }}
              >
                ✓
              </span>{" "}
              <b>2-year warranty</b> on critical components
            </li>
            <li>
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "22px" }}
              >
                ✓
              </span>{" "}
              <b>&lt;48hr response</b> for technical issues
            </li>
            <li>
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "22px" }}
              >
                ✓
              </span>{" "}
              <b>Local spare parts hubs</b> in 12 countries
            </li>
          </ul>
          <p style={{ fontStyle: "italic", marginTop: "10px" }}>
            98% of warranty claims resolved within 72 hours.
          </p>
        </>
      ),
    },
  ];

  const categories = ["Plants", "Machines"];

  const data = {
    Plants: [
      {
        title: "Stationary Asphalt Batchmix Plants (ABP)",
        titleColor: "text-white",
        titleHoverColor: "text-white",
        description:
          "The backbone of high-volume asphalt production, our stationary ABPs deliver precision mixing for national highways & megaprojects",
        image: "/images/sabp/sabp.JPG",
        link: "/asphalt-plants/stationary-asphalt-batching-plant",
      },
      {
        title: "Mobile Asphalt Batchmix Plants (MABP)",
        titleColor: "text-[#1A1D2D]",
        titleHoverColor: "text-white",
        description:
          "Compact, efficient, and ready to move, our Mobile Asphalt Batch Plants are perfect for on-site projects where mobility and quick setup are essential.",
        image: "/images/mabp/MABMP-1.jpg",
        link: "/asphalt-plants/mobile-asphalt-batching-plant",
      },
      {
        title: "Double Drum Asphalt Plants",
        titleColor: "text-white",
        titleHoverColor: "text-white",
        description:
          "Our counter-flow design ensures optimal heat transfer for fuel savings and consistent mix quality, even with challenging recycled materials.",
        image: "/images/admp/ddm.jpeg",
        link: "/asphalt-plants/double-drum-asphalt-plant",
      },
      {
        title: "Counterflow Asphalt Plants",
        titleColor: "text-[#1A1D2D]",
        titleHoverColor: "text-white",
        description:
          "Reverse airflow technology reduces emissions while boosting RAP usage. Perfect for urban projects where sustainability and performance must coexist",
        image: "/images/plants/counter-flow/cf-4.jpg",
        link: "/asphalt-plants/counter-flow-asphalt-plant",
      },
      {
        title: "Asphalt Drum Mix Plants",
        titleColor: "text-white",
        titleHoverColor: "text-white",
        description:
          "Parallel flow continuous mixing excellence for high-output projects. From 20 to 200 TPH, these plants balance productivity and simplicity for rural highways to industrial zones.",
        image: "/images/admp/admp.jpeg",
        link: "/asphalt-plants/asphalt-drum-mix-plant",
      },
      {
        title: "Mobile Asphalt Drum Mix Plants",
        titleColor: "text-[#1A1D2D]",
        titleHoverColor: "text-white",
        description:
          "Compact, trailer-mounted designs deliver portable asphalt production without compromising mix quality; ideal for patch repairs or island infrastructure.",
        image: "/images/sabp/mdm.JPG",
        link: "/asphalt-plants/mobile-asphalt-drum-mix-plant",
      },
    ],
    Machines: [
      {
        title: "Bitumen Decanter",
        titleColor: "text-white",
        titleHoverColor: "text-white",
        description:
          "Eliminate dangerous manual transfers with military-grade precision, processing 4-25T batches at optimal temperatures. The silent workhorse behind every efficient asphalt operation",
        image: "/images/comman/dump.png",
        link: "/bitumen-decanter",
      },
      {
        title: "Bitumen Sprayer",
        titleColor: "text-white",
        titleHoverColor: "text-white",
        description:
          "From highways to airport runways, our sprayers lay flawless tack coats with ±2°C temperature control and 3-6m adjustable spray bars. Because superior adhesion begins with perfect application",
        image: "/images/plants/bitman/bitumen-sprayer-banner.JPG",
        link: "/bitumen-sprayer",
      },
      {
        title: "Mini Bitumen Sprayer",
        titleColor: "text-white",
        titleHoverColor: "text-white",
        description:
          "When urban repairs or rural roads demand agility, our 2.5T mini sprayer delivers full-size performance in a compact frame. Zero overspray. Zero compromises",
        image: "/images/plants/bitman/MINI BITUMEN SPRAYER.png",
        link: "/mini-bitumen-sprayer",
      },
      {
        title: "Wet Mix Plant",
        titleColor: "text-white",
        titleHoverColor: "text-white",
        description:
          "Engineered to produce 100-300 TPH of stabilized base layers, these plants mix with ±0.5% moisture accuracy. Built to withstand heavy-duty use, it's the go-to choice for infrastructure projects",
        image: "/images/plants/wetmix/WET MIX MACADAM PLANT.png",
        link: "/wet-mix-plant",
      },
    ],
  };

  const faqData1 = [
    {
      title: "1. Cost-Effective Performance",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Fuel-efficient burners</span> with
            multi-fuel capability
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>
            <span className="font-bold">RAP integration</span> (up to 60%
            recycled materials)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">SCADA automation </span> for precise
            material usage
          </li>
        </ul>
      ),
    },
    {
      title: "2. Unmatched Reliability",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Military-grade components</span>
            withstand extreme conditions
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">≤0.5% weighing accuracy</span> ensures
            mix perfection
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">24/7 global support network</span> with
            &lt;48hr response
          </li>
        </ul>
      ),
    },
    {
      title: "3. Flexible & Smart Mobility",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Quick-relocation designs</span> save 70%
            setup time
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Containerized options</span> for easy
            global shipping
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Plug-and-play</span> modules reduce
            downtime
          </li>
        </ul>
      ),
    },
    {
      title: "4. Sustainable Innovation",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Low-NOx burners</span> meet
            environmental standards
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>
            <span className="font-bold"> Noise levels &lt;75 db</span> for urban
            projects
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Closed-loop systems</span> minimise
            waste
          </li>
        </ul>
      ),
    },
  ];

  const formcontent = {
    title: "Ready to Build? Let’s Talk!",
    description:
      "At Atlas Technologies, we forge the tools that shape the world beneath your feet. For three decades, our asphalt plants and machinery have laid the foundation for progress; from intercontinental highways that unite economies to neighborhood roads that connect communities. Whether you’re constructing highways, urban roads, or airport runways, our products are engineered to deliver maximum efficiency, flexibility, and environmental responsibility.",
  };
  return (
    <>
      <Head>
        <title>Asphalt Mixing Plants & Machines Manufacturer in India | Atlas Technologies</title>

        <meta name="description" content="Atlas asphalt mixing plant — batch, drum mix, counter-flow and mobile — from one manufacturer. RAP-ready, CPCB-compliant. Trusted asphalt batch mix plant manufacturer in India. Get a Quote" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(collectionSchema),
          }}
        />
      </Head>

      <Category_Banner data={category_banner_data} />
      <Category_intro data={category_intro_data} />
      <Expolre_category data={data} categories={categories} />
      <FAQSection1
        faqData={faqData1}
        title={"Engineering Excellence That Moves the World"}
        img={"/images/sabp/abp_faq.JPG"}
      />
      {/* <Certified
        title={
          <span>
            From Desert Highways To Arctic Roads, Atlas Plants{" "}
            <br className="hidden md:block" /> Deliver Where Others Falter
          </span>
        }
        buttonText="Explore More"
        images={Array(30).fill("/images/comman/atlas.png")}
      /> */}
      <WorldMapComponent />
      <Blog />
      {/* <Clients
        title="Trusted by Global Builders"
        images={Array(30).fill("/images/comman/atlas.png")}
        marqueeSpeed={60}
        gradientColor={[200, 200, 200]}
      /> */}

      <ContactForm
        formcontent={formcontent}
        page={"Asphalt Plants & Machinery Product Page"}
      />
      <FAQSection2 faqData={faqData2} bg={"#E7F1E9"} />
    </>
  );
}
