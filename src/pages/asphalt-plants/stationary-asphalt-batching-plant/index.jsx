import Category_Banner from "../../../../components/category/category_banner";
import Category_intro from "../../../../components/category/category_intro";
import FAQSection1 from "../../../../components/category/faq1";
import FAQSection2 from "../../../../components/category/faq2";
import ContactForm from "../../../../components/category/form";
import Head from "next/head";
import ProductFilterComponent from "../../../../components/products/filter";
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant#product",
  name: "Stationary Asphalt Batching Plant - ABP Series",
  image: "https://www.atlastechnologiesindia.com/assets/images/stationary-asphalt-batching-plant.jpg",
  description: "As a leading manufacturer, Atlas offers the ABP series stationary asphalt batching plant for long-term projects. This high-capacity asphalt tower plant is a reliable hot mix asphalt plant designed for precision, fuel efficiency, and NHAI-spec mix consistency.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-ABP-STATIONARY",
  mpn: "ABP-SERIES",
  category: "Construction Machinery > Asphalt Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Installation Type", value: "Fixed / Stationary Tower" },
    { "@type": "PropertyValue", name: "Batch Capacity", value: "80 TPH to 320 TPH" },
    { "@type": "PropertyValue", name: "Screening", value: "Multi-deck Vibrating Screen" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the benefits of choosing an Atlas stationary asphalt batching plant for long-term projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Atlas stationary asphalt batching plant (ABP series) is engineered for permanent sites requiring high-volume output. It offers superior insulation, a vertical asphalt tower plant design for gravity-fed efficiency, and advanced pollution control units that meet strict long-term environmental norms.",
      },
    },
    {
      "@type": "Question",
      name: "How does this hot mix asphalt plant ensure mix quality and consistency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas stationary plants feature a 4-point weighing system and a high-efficiency twin-shaft batch mixer. This ensures that every batch of hot mix asphalt meets precise gradation and bitumen-content requirements for heavy-traffic highway construction.",
      },
    },
    {
      "@type": "Question",
      name: "Can the ABP series stationary plant be integrated with RAP systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our stationary tower plants are designed to be RAP-ready, allowing for the addition of cold or hot recycling systems to reduce material costs while maintaining the integrity of the asphalt mix.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant#collection",
      name: "Stationary Asphalt Batching Plant — ABP Series",
      description: "Atlas offers the ABP series stationary asphalt batching plant for long-term projects. This high-capacity asphalt tower plant is designed for precision, fuel efficiency, and NHAI-spec mix consistency.",
      url: "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant#itemlist",
        name: "Stationary Asphalt Batching Plant — ABP Series — Range",
        numberOfItems: 4,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ABP-80 — Stationary Asphalt Batching Plant (80 TPH)", description: "Fixed tower plant 80 TPH for permanent highway construction sites requiring high-volume, high-precision output.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant" },
          { "@type": "ListItem", position: 2, name: "ABP-160 — Stationary Asphalt Batching Plant (160 TPH)", description: "160 TPH stationary batching tower with multi-deck vibrating screen and RAP integration for large infrastructure.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant" },
          { "@type": "ListItem", position: 3, name: "ABP-260 — Stationary Asphalt Batching Plant (260 TPH)", description: "260 TPH high-capacity fixed plant for airport runways and expressway construction.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant" },
          { "@type": "ListItem", position: 4, name: "ABP-320 — Stationary Asphalt Batching Plant (320 TPH)", description: "320 TPH flagship stationary asphalt batching plant for the most demanding permanent production sites.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Plants", item: "https://www.atlastechnologiesindia.com/asphalt-plants" },
        { "@type": "ListItem", position: 3, name: "Stationary Asphalt Batching Plant", item: "https://www.atlastechnologiesindia.com/asphalt-plants/stationary-asphalt-batching-plant" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Stationary Asphalt Batch <br className="hidden md:block" /> Plants
        [80-320 TPH]
      </span>
    ),
    para: "Precision Mixing for National Highways & Megaprojects",
    img: "/images/sabp/stationary-asphalt-batching-plant.jpg",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "ABP 80",
      minCapacity: 60,
      maxCapacity: 80,
      tags: "Ideal for small to medium production scale",
      mixerSize: 1000,
      img: "/images/sabp/abp_80_4.JPG",
      url: "/1000kg-twin-shaft-mixer-60-80-tph",
    },
    {
      name: "ABP 100",
      minCapacity: 80,
      maxCapacity: 100,
      tags: "Ideal for mid-range production",
      mixerSize: 1250,
      img: "/images/sabp/abp_80_1.JPG",
      url: "/1250kg-twin-shaft-mixer-80-100-tph",
    },
    {
      name: "ABP 120",
      minCapacity: 120,
      maxCapacity: 120,
      tags: "Perfect for balanced capacity and efficiency",
      mixerSize: 1500,
      url: "/1500kg-twin-shaft-mixer-120-tph",
      img: "/images/sabp/twinshaftmixercomponent-1500.webp",
    },
    {
      name: "ABP 140",
      minCapacity: 140,
      maxCapacity: 140,
      tags: "High capacity with robust mixing performance",
      mixerSize: 1750,
      url: "/1750kg-twin-shaft-mixer-140-tph",
      img: "/images/sabp/abp140.jpg",
    },
    {
      name: "ABP 160",
      minCapacity: 160,
      maxCapacity: 160,
      tags: "High capacity with excellent performance",
      mixerSize: 2000,
      url: "/2000kg-twin-shaft-mixer-160-tph",
      img: "/images/sabp/abponesixty-newfive.jpeg",
    },
    {
      name: "ABP 180",
      minCapacity: 180,
      maxCapacity: 180,
      tags: "High volume for demanding production",
      mixerSize: 2250,
      url: "/2250kg-twin-shaft-mixer-180-tph",
      img: "/images/sabp/abp180.JPG",
    },
    {
      name: "ABP 200",
      minCapacity: 200,
      maxCapacity: 200,
      tags: "Maximum capacity for high-volume production",
      mixerSize: 2500,
      url: "/2500kg-twin-shaft-mixer-200-tph",
      img: "/images/sabp/sabp-200-1.jpg",
    },
    {
      name: "ABP 260",
      minCapacity: 240,
      maxCapacity: 260,
      tags: "High performance for large-scale production",
      mixerSize: 3000,
      url: "/3000kg-twin-shaft-mixer-240-260-tph",
      img: "/images/sabp/asphalt-stationary-3000-new-four.webp",
    },
    {
      name: "ABP 320",
      minCapacity: 240,
      maxCapacity: 260,
      tags: "Ideal for large-scale production with excellent capacity",
      mixerSize: 5000,
      url: "/5000kg-twin-shaft-mixer-240-260-tph",
      img: "/images/sabp/abp-320-1.jpg",
    },
    // {
    //   name: "ABP 400",
    //   minCapacity: 240,
    //   maxCapacity: 260,
    //   tags: "Top-tier capacity for extremely high-volume production",
    //   mixerSize: 10000,
    //   url: "/10000kg-twin-shaft-mixer-240-260-tph",
    //   img: "/images/sabp/abp360.JPG",
    // },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Where Precision Meets Performance",
    para: (
      <span>
        Our Stationary Asphalt Batch Plants combine rugged engineering with
        precision controls to deliver consistent, high-quality output even under
        the toughest climatic and load conditions. Designed with{" "}
        <strong>
          advanced PLC-based automation, energy-efficient multi-fuel burners,
        </strong>{" "}
        and <strong>optional RAP systems,</strong> these plants are built for
        next-generation infrastructure.
      </span>
    ),
    img: "/images/sabp/abp_overview.JPG",
    bg: true,
  };
  const faqData = [
    {
      title:
        "1. What are the key advantages of choosing a Stationary Asphalt Batch Plant over other types?",
      content: (
        <span>
          Stationary ABPs offer a consistent asphalt mix quality and high hourly
          output, making them ideal for highways, airports, and city roads.
          Their modular layout allows future upgrades like RAP systems or
          advanced dust collection units.
        </span>
      ),
    },
    {
      title: "2. What steps can I take to ensure minimal downtime with my ABP?",
      content: (
        <span>
          Follow a preventive maintenance schedule to ensure minimal downtime
          with the asphalt batch mixing plants. Check components like{" "}
          <span className="font-bold">
            burner nozzles, mixer arms, vibrating screens, and hot elevator
            chains
          </span>{" "}
          regularly. Atlas also offers maintenance manuals,{" "}
          <span className="font-bold">24/7 support</span>, and fast spare part
          availability.
        </span>
      ),
    },
    {
      title:
        "3. How can I optimize operational costs with a Stationary Asphalt Batch Plant?",
      content: (
        <span>
          To reduce operational costs, use{" "}
          <span className="font-bold">RAP material (up to 30%)</span> with the
          right setup to lower material costs.{" "}
          <span className="font-bold">
            Energy-efficient burners and insulated components
          </span>{" "}
          also help reduce fuel and power consumption.
        </span>
      ),
    },
    {
      title: "4. How does Atlas ensure environmental compliance with its ABPs?",
      content: (
        <span>
          Atlas Technologies’ ABPs are engineered to meet stringent
          environmental standards. All plants feature{" "}
          <span className="font-bold">reverse-air baghouse filters</span> to
          control dust emissions. Optional{" "}
          <span className="font-bold">low-emission burners</span> and{" "}
          <span className="font-bold">RAP integration</span> further support
          eco-friendly, regulation-compliant operations.
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "1. Unrivaled Mix Precision",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            High-accuracy mixing with consistent batch quality
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Twin-shaft mixers with 45–60 second cycles
          </li>
        </ul>
      ),
    },
    {
      title: "2. Lowest Cost-Per-Ton",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Energy-efficient, multi-fuel burners
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Optional RAP system supports up to 30% reuse
          </li>
        </ul>
      ),
    },
    {
      title: "3. Built for Extreme Conditions",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span> -30°C
            to 55°C operational range (Arctic to desert proven)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Heavy-duty build with industrial-grade enclosures
          </li>
        </ul>
      ),
    },
    {
      title: "4. Global Support Network",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span> 24/7
            technical assistance available
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Installed across 35+ countries worldwide
          </li>
        </ul>
      ),
    },
    {
      title: "5. Sustainability Features",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Baghouse filtration reduces dust emissions
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Optional low-emission burners available
          </li>
        </ul>
      ),
    },
  ];

  const productLinks = [
    {
      name: "Mobile Asphalt Batch Plants (MABP)",
      url: "/asphalt-plants/mobile-asphalt-batching-plant",
    },
    {
      name: "Double Drum Asphalt Plant",
      url: "/asphalt-plants/double-drum-asphalt-plant",
    },
    {
      name: "Counter Flow Asphalt Plant",
      url: "/asphalt-plants/counter-flow-asphalt-plant",
    },
    {
      name: "Asphalt Drum Mix Plant",
      url: "/asphalt-plants/asphalt-drum-mix-plant",
    },
    {
      name: "Mobile Asphalt Drum Mix Plant",
      url: "/asphalt-plants/mobile-asphalt-drum-mix-plant",
    },
  ];
  const formcontent = {
    title: "Ready to Build? Let’s Talk!",
    description:
      "Fill out the form to share your project needs and discuss the best option for it.",
  };
  return (
    <>
      <Head>
        <title>Stationary Asphalt Batch Plants Manufacturer in India | 80 to 320 TPH | Atlas Technologies</title>

        <meta name="description" content="Atlas stationary batching plant — 60 to 260 TPH, RAP-ready, CPCB-compliant, PLC/SCADA automated. India's complete stationary asphalt mixing plant range. Get specs and factory price." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
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
      <ProductFilterComponent productLinks={productLinks} products={products} />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"What Makes Atlas ABPs the Best Choice?"}
        img={"/images/sabp/sabp.JPG"}
      />

      <ContactForm
        formcontent={formcontent}
        page={
          "Stationary Asphalt Batch Plants [60-320 TPH] (Product listing page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
