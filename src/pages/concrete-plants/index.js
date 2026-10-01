import Category_Banner from "../../../components/category/category_banner";
import Category_intro from "../../../components/category/category_intro";
import Expolre_category from "../../../components/category/expolore_category";
import FAQSection1 from "../../../components/category/faq1";
import FAQSection2 from "../../../components/category/faq2";

import ContactForm from "../../../components/category/form";
import Blog from "../../../components/homepage/blog";
import Certified from "../../../components/homepage/certified";
import Clients from "../../../components/homepage/clients";
import Head from "next/head";
import WorldMapComponent from "../../../components/homepage/mapview";
const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants#collection",
      name: "Concrete Batching Plants & Mixing Machinery",
      description: "Atlas Technologies is a leading RMC plant manufacturer offering a versatile range of concrete mixing solutions. From high-capacity stationary setups to the ready mix concrete plant for mobile projects, our machinery ensures precision, durability, and mix homogeneity.",
      url: "https://www.atlastechnologiesindia.com/concrete-plants",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/#website" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/concrete-plants#itemlist",
        name: "Atlas Concrete Plant Range",
        numberOfItems: 6,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Stationary Concrete Batching Plants", description: "High-volume twin-shaft mixer plants ranging from 30 to 200 m³/hr for dams, bridges, and mega-projects.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant" },
          { "@type": "ListItem", position: 2, name: "Mobile Concrete Batching Plants", description: "Compact and portable plants designed for rapid site shifting and remote construction needs.", url: "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer" },
          { "@type": "ListItem", position: 3, name: "Mini Concrete Batching Plants", description: "Reliable 10-25 m³/hr capacity plants for rural roads and small-scale building foundations.", url: "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant" },
          { "@type": "ListItem", position: 4, name: "Planetary Mixer Concrete Plants", description: "Specialized mixing for precast, SCC, and high-performance architectural concrete.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer" },
          { "@type": "ListItem", position: 5, name: "Reversible Mixer Concrete Plants", description: "Cost-effective and easy-to-operate plants for general construction and urban infrastructure.", url: "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant" },
          { "@type": "ListItem", position: 6, name: "Pan Mixer Concrete Plants", description: "Sturdy and efficient mixing solutions for standard concrete paving and small RMC operations.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Concrete Plants", item: "https://www.atlastechnologiesindia.com/concrete-plants" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Atlas concrete plants more efficient?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas concrete plants utilize precision engineering including digital load-cell weighing and PLC/PC-controlled mix consistency. Our twin-shaft mixers ensure high-torque, thorough mixing in the shortest possible time, reducing cycle times and energy consumption.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose between stationary and mobile concrete batching plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose a stationary plant for high-capacity production (up to 200 m³/hr) at a fixed project site like an airport or dam. Opt for a mobile concrete batching plant if your project requires frequent site shifts or is located in a remote area where rapid setup is critical.",
      },
    },
    {
      "@type": "Question",
      name: "What maintenance is required for Atlas concrete machinery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular maintenance includes cleaning the mixing unit daily, checking hydraulic oil levels, and inspecting wear parts like Ni-hard liners and paddle tips. Atlas provides 24/7 support and rapid spare part delivery to ensure minimal downtime.",
      },
    },
  ],
};

export default function Category() {
  const category_banner_data = {
    title: "Concrete Plants & Machines",
    para: "35+ Years Expertise | RMC & Precast Ready | Support Network",
    img: "/images/acmp/concrete-plants-banner.JPG",
    pdfPath: "/static/brochure/Concrete-Plants.pdf",
    scrollTarget: "products-section",
  };
  const category_intro_data = {
    subtitle: "Overview",
    title: "Building the Foundations of Modern Infrastructure",
    para: (
      <span>
        From skyscrapers to smart cities, Atlas concrete solutions power
        progress across six continents. Our plants and machinery deliver{" "}
        <span className="font-bold">
          precision batching, energy efficiency, and unmatched reliability.
        </span>{" "}
        For over three and a half decades, our concrete plants and machinery
        have been the backbone of construction projects worldwide, from towering
        skyscrapers to rural roads.
      </span>
    ),
    img: "/images/acmp/concrete-plants-factory.png",
  };

  const faqData2 = [
    {
      title: "1. What makes Atlas concrete plants more efficient?",
      content: (
        <>
          Precise digital weighing with PLC/PC-based automation, robust mixer
          choices, and thoughtfully routed material flow help achieve consistent
          batches with low downtime.
        </>
      ),
    },
    {
      title:
        "2. How do I choose between stationary and mobile concrete batching plants?",
      content: (
        <>
          Stationary plants are best for large-scale, long-term projects like
          highways or dams, offering higher capacity and precision. Mobile
          plants, on the other hand, are perfect for projects requiring frequent
          site shifts, such as road repairs or remote construction sites.
        </>
      ),
    },
    {
      title: "3. What maintenance is required for Atlas concrete machinery?",
      content: (
        <>
          Regular greasing of bearings (every 50 operating hours), and
          inspection of wear-resistant components are recommended. Our{" "}
          <span className="font-bold">24/7 global support network</span> ensures
          minimal downtime with quick resolution of technical issues.
        </>
      ),
    },
    {
      title: "4. Does Atlas provide training for operating concrete plants?",
      content: (
        <>
          Yes, plants are commissioned on-site with operator training. Ongoing
          technical assistance is available to help keep your plant running
          smoothly.
        </>
      ),
    },
  ];

  const categories = ["Plants", "Machines"];

  const data = {
    Plants: [
      {
        title: "Stationary Concrete Batching Plants",
        description: (
          <span>
            The gold standard for high-capacity production, our stationary
            plants ensure{" "}
            <span className="font-bold">
              precise batching and mixing for large-scale projects
            </span>{" "}
            like airports, dams, and highways.
          </span>
        ),
        image: "/images/ascb/ascb.JPG",
        link: "/concrete-plants/stationary-concrete-batching-plant",
      },
      {
        title: "Mobile Concrete Batching Plants",
        description: (
          <span>
            Compact, portable, and quick to set up, our mobile plants are{" "}
            <span className="font-bold">ideal for remote locations</span> and
            projects requiring frequent site shifts.
          </span>
        ),
        image: "/images/acmp/Mobile-Concrete-batching-plant.png",
        link: "/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer", // or pick main one
      },
      {
        title: "Mini Concrete Batching Plants",
        description: (
          <span>
            Perfect for small-scale projects (requiring a capacity of 10 to 25
            m³/hr), these plants are a reliable and affordable choice for rural
            roads and building foundations.
          </span>
        ),
        image: "/images/acmp/Mini Concrete plant.png",
        link: "/concrete-plants/mini-concrete-batching-plant",
      },
      {
        title: "Reversible Mixer Concrete Plants",
        description: (
          <span>
            Designed for simplicity and cost-effectiveness, these plants are
            perfect for projects where{" "}
            <span className="font-bold">mobility and ease of operation</span>{" "}
            are key.
          </span>
        ),
        image:
          "/images/acmp/PORTABLE CONCRETE BATCH MIX PLANT WITH REVERSIBLE MIXER.png",
        link: "/concrete-plants/reversible-mixer-concrete-plant",
      },
      {
        title: "Planetary Mixer Concrete Plants",
        description: (
          <span>
            Engineered for demanding applications, these plants deliver superior
            mixing quality for{" "}
            <span className="font-bold">specialty concrete</span> like SCC,
            fiber-reinforced mixes, and architectural finishes.
          </span>
        ),
        image: "/images/ascb/pan.JPG",
        link: "/concrete-plants/stationary-concrete-batching-plant-planetary-mixer",
      },
      {
        title: "Pan Mixer Concrete Plants",
        description: (
          <span>
            A cost-effective solution for standard concrete mixes, these plants
            are ideal for everyday construction needs like{" "}
            <span className="font-bold">
              pavements and small RMC operations.
            </span>
          </span>
        ),
        image: "/images/acmp/pan-mixer.jpg",
        link: "/concrete-plants/stationary-concrete-batching-plant-pan-mixer",
      },
    ],
    Machines: [
      {
        title: "Concrete Mixers (10/7)",
        description:
          "Compact and versatile, these mixers are perfect for small-scale projects like rural roads, pavements, and building foundations.",
        image: "/images/machine/mixer/concrete-mixer-04.png",
        link: "/concrete-mixer",
      },
      {
        title: "Concrete Pumps",
        description:
          "With pipeline lengths ranging from 100 to 1200 meters, our pumps ensure seamless concrete delivery for high-rise buildings, bridges, and industrial structures.",
        image: "/images/machine/concert-pump/concrete-pump.jpg",
        link: "/concrete-pump",
      },
      {
        title: "Kerb Cutting Machines",
        description:
          "Precise and durable, these machines are designed for cutting clean grooves in concrete kerbs and dividers, ensuring smooth road maintenance.",
        image: "/images/plants/kerb-laying/kerb.jpeg",
        link: "/kerb-cutting-machine",
      },
      {
        title: "Wet Mix Plant",
        description:
          "Engineered to produce 100-300 TPH of stabilized base layers, these plants mix with ±0.5% moisture accuracy. Built to withstand heavy-duty use, it’s the go-to choice for infrastructure projects",
        image: "/images/plants/wetmix/WET MIX MACADAM PLANT.png",
        link: "/wet-mix-plant",
      },
    ],
  };

  const faqData1 = [
    {
      title: "1. Precision Engineering",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Digital load-cell weighing </span>
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">PLC/PC-controlled</span> mix consistency
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">RMC & precast optimized</span> recipes
          </li>
        </ul>
      ),
    },
    {
      title: "2. Rugged Reliability",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Robust hydraulics </span>
            (operates from –20°C to 50°C)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold"> Dust-free </span> aggregate loading
            systems
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Wear-resistant components </span> for
            long operational life
          </li>
        </ul>
      ),
    },
    {
      title: "3. Efficient & Cleaner Operation +",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Dust control provisions </span> at
            cement handling points
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Zero wastewater discharge</span>{" "}
            technology
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Energy-efficient</span> drives and
            optimized material flow
          </li>
        </ul>
      ),
    },
    {
      title: "4. Smart Mobility & Support",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Containerized plants </span> for global
            shipping
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>
            <span className="font-bold"> Plug-and-play</span> modules
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold"> Factory-wired for </span> commissioning
            within 1–3 days
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Concrete Batching Plants & Machines Manufacturer India | Atlas Technologies</title>

        <meta name="description" content="Digital load-cell weighing, PLC-controlled batching, RMC & precast ready — Atlas concrete plant manufacturers in India. 6 types from mini to stationary. Compare and get price." />

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
        minititle={"Why Atlas Leads the Concrete Industry"}
        title={"Cutting-Edge Tech with Unmatched After-Sales Services"}
        img={"/images/acmp/pan-mixer.jpg"}
      />
      {/* <Certified
        title={
          <span>
            From Rural Roads to Mega Infrastructure, Atlas Plants Deliver
            <br className="hidden md:block" /> Consistent Performance Every Step
            of the Way
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

      <ContactForm page={"Concrete Plants & Machines Product Page"} />
      <FAQSection2 faqData={faqData2} bg={"#E7F1E9"} />
    </>
  );
}
