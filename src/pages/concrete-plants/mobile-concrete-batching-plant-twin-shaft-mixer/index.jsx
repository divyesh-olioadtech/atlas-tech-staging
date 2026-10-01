import Category_Banner from "../../../../components/category/category_banner";
import Category_intro from "../../../../components/category/category_intro";
import FAQSection1 from "../../../../components/category/faq1";
import FAQSection2 from "../../../../components/category/faq2";
import ContactForm from "../../../../components/category/form";
import Blog from "../../../../components/homepage/blog";
import Certified from "../../../../components/homepage/certified";
import Clients from "../../../../components/homepage/clients";
import WorldMapComponent from "../../../../components/homepage/mapview";
import ProductFilterComponent from "../../../../components/products/filter";
import Head from "next/head";
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer#product",
  name: "Mobile Concrete Batch Plant with Twin Shaft Mixer",
  image: "https://www.atlastechnologiesindia.com/assets/images/mobile-concrete-plant-twin-shaft.jpg",
  description: "Atlas Technologies is a leading Mobile Batching Plant Manufacturer in India. Our Mobile concrete Batch Plant series features a twin shaft mixer for high-performance blending on a portable chassis. This mobile concrete plant is designed for rapid deployment and superior mix consistency on remote construction sites.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-M-BATCH-TWIN",
  mpn: "M-SERIES-TSM",
  category: "Construction Machinery > Concrete Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Mixer Type", value: "Twin Shaft Mixer" },
    { "@type": "PropertyValue", name: "Mobility", value: "Fully Mobile (Towing Arrangement)" },
    { "@type": "PropertyValue", name: "Installation Time", value: "2-3 Days" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does a mobile twin-shaft batching plant compare to a stationary one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas mobile plants deliver the same mix quality as stationary plants, thanks to heavy-duty twin shaft mixers, but with the added benefit of transportability and faster site setup (2–3 days). They are best for projects with shifting locations.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of concrete can be produced with the twin shaft mixer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The mixer is designed for versatile applications: Standard ready-mix concrete (M20–M60), High-strength structural mixes, Roller-compacted concrete (RCC), and Pavement quality concrete (PQC).",
      },
    },
    {
      "@type": "Question",
      name: "Do you have smaller mobile batching options apart from twin-shaft plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In addition to our twin-shaft mixers (30–60 m³/hr), Atlas also offers the RM Series — compact mobile batching plants with reversible drum mixers (approximately 10–20 m³/hr) designed for rural roads and smaller projects.",
      },
    },
    {
      "@type": "Question",
      name: "What are the advantages of horizontal cement silos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Horizontal cement silos take up less height compared to traditional vertical silos, making them ideal for height-restricted sites and easier transport without heavy cranes.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer#collection",
      name: "Mobile Concrete Batch Plant with Twin Shaft Mixer",
      description: "Atlas Technologies is a leading Mobile Batching Plant Manufacturer in India. Our Mobile Batch Plant series features a twin shaft mixer on a portable chassis, designed for rapid deployment and superior mix consistency on remote sites.",
      url: "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/concrete-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer#itemlist",
        name: "Mobile Concrete Batch Plant with Twin Shaft Mixer — Range",
        numberOfItems: 3,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "MCP-30 — Mobile Concrete Batching Plant (30 m³/hr)", description: "30 m³/hr twin-shaft mobile plant for small highway projects and remote sites.", url: "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer" },
          { "@type": "ListItem", position: 2, name: "MCP-45 — Mobile Concrete Batching Plant (45 m³/hr)", description: "45 m³/hr portable twin-shaft plant with 2–3 day installation time.", url: "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer" },
          { "@type": "ListItem", position: 3, name: "MCP-60 — Mobile Concrete Batching Plant (60 m³/hr)", description: "60 m³/hr high-output mobile plant for large infrastructure projects requiring site mobility.", url: "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Concrete Plants", item: "https://www.atlastechnologiesindia.com/concrete-plants" },
        { "@type": "ListItem", position: 3, name: "Mobile Concrete Batch Plant with Twin Shaft Mixer", item: "https://www.atlastechnologiesindia.com/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Mobile Concrete Batching <br className="hidden md:block" /> Plants -
        Twin Shaft Mixer <br className="hidden md:block" /> [30-60 m³/hr]
      </span>
    ),
    para: "Maximum Mobility Meets Stationary Plant Performance",
    img: "/images/acmp/newbannerpage.jpg",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "AMCB 30",
      minCapacity: 30,
      maxCapacity: 30,
      tags: "Best For: Small to medium projects",
      bestFor: "Small-Scale Projects",
      url: "/mobmix-pro-30",
      img: "/images/concrete-plants/mobmix-pro-30-1.jpeg",
    },
    {
      name: "AMCB 45",
      minCapacity: 45,
      maxCapacity: 45,
      tags: "Best For: Bridges, infra sites",
      bestFor: "High-Quality Mixes",
      url: "/mobmix-pro-45",
      img:"/images/concrete-plants/mobmix-pro45-newone.webp",
    },
    {
      name: "AMCB 60",
      minCapacity: 60,
      maxCapacity: 60,
      tags: "Best For: Large-scale works",
      bestFor: "Medium-Scale Projects",
      url: "/mobmix-pro-60",
      img: "/images/concrete-plants/mobmix-pro-60-1.JPG",
    },

    {
      name: "AMCB 75",
      minCapacity: 75,
      maxCapacity: 75,
      tags: "Best For: High-volume infrastructure projects",
      bestFor: "Large-Scale Projects",
      url: "/mobmix-pro-75",
      img: "/images/concrete-plants/mobmix-75-two.webp",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "On-Site Concrete Production Where You Need It",
    para: (
      <span>
        Our Mobile Concrete Batching Plants with twin shaft mixers deliver{" "}
        <span className="font-bold">
          full production quality with unmatched mobility.
        </span>{" "}
        Designed for projects requiring frequent site shifts, these plants are
        ideal for airports, bridges, dams, roads, and buildings.
        <br /> <br />
        Engineered for reliable performance, this compact design is mounted on a
        single chassis, ensuring quick setup, easy transportation, and superior
        mobility.
      </span>
    ),
    img: "/images/concrete-plants/mobmix-pro-overview.jpg",
    bg: true,
  };
  const faqData = [
    {
      title:
        "1. How does a mobile twin-shaft batching plant compare to a stationary one?",
      content: (
        <span>
          Atlas mobile plants deliver the same mix quality as stationary plants,
          thanks to heavy-duty twin shaft mixers, but with the added benefit of
          transportability and faster site setup. They are best for projects
          with shifting locations or multiple job sites.
        </span>
      ),
    },
    {
      title:
        "2. What kind of concrete can be produced with the twin shaft mixer?",
      content: (
        <span>
          The mixer is designed for versatile applications:
          <ul className="pl-5 mt-2 space-y-1 list-disc">
            <li>Standard ready-mix concrete (M20–M60)</li>
            <li>High-strength structural mixes</li>
            <li>Roller-compacted concrete (RCC)</li>
            <li>Pavement quality concrete (PQC)</li>
            <li>Mixes with recycled aggregates</li>
          </ul>
        </span>
      ),
    },
    {
      title:
        "3. Do you have smaller mobile batching options apart from twin-shaft plants?",
      content: (
        <span>
          Yes. In addition to our mobile plants with twin-shaft mixers (30–60
          m³/hr), Atlas also offers the RM Series. It’s compact mobile batching
          plants with reversible drum mixers. These models (≈10–20 m³/hr) are
          designed for small projects, rural roads, and contractors who need a
          cost-effective, single-chassis solution.
        </span>
      ),
    },
    {
      title: "4. What are the advantages of horizontal cement silos?",
      content: (
        <span>
          Horizontal cement silos take up less height compared to traditional
          silos, making them ideal for height-restricted sites.
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Unmatched Mobility",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Built in modular
            sections (mixer unit, aggregate bins, silos) for faster relocation
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Quick
            installation with pre-wired and pre-tested modules
          </li>
        </ul>
      ),
    },
    {
      title: "Industrial-Grade Mixing",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Twin shaft
            technology (30–45 second cycles)
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Suitable for
            high-strength and low-slump concretes
          </li>
        </ul>
      ),
    },
    {
      title: "Smart Operation",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> PLC control
            (fully automated) with recipe storage
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> SCADA (optional)
            for remote monitoring
          </li>
        </ul>
      ),
    },
    {
      title: "Flexible Cement Storage",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Compatible with
            vertical silos (50–200T) for standard sites
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Option to pair
            with horizontal silos (≈20–40T) for height-restricted sites
          </li>
        </ul>
      ),
    },
  ];

  const productLinks = [
    {
      name: "Mobile Asphalt Batch Plants (MABP)",
      url: "mobile-asphalt-batch-plants",
    },
    {
      name: "Double Drum Asphalt Plant",
      url: "double-drum-asphalt-plant",
    },
    {
      name: "Counter Flow Asphalt Plant",
      url: "counter-flow-asphalt-plant",
    },
    {
      name: "Asphalt Drum Mix Plant",
      url: "asphalt-drum-mix-plant",
    },
    {
      name: "Mobile Asphalt Drum Mix Plant",
      url: "mobile-asphalt-drum-mix-plant",
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
        <title>Mobile Concrete Batching Plants Manufacturer | 30–60 m³/hr | Atlas Technologies</title>
        <meta name="description" content="Single chassis, pre-wired modules, quick site relocation — Atlas mobile concrete batch plant manufacturer. 3 models from 30 to 60 m³/hr Suitable for airports, bridges and road projects." />
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
      <ProductFilterComponent
        kgoff={false}
        unit="m³/hr"
        productLinks={productLinks}
        products={products}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"Why Choose Atlas Mobile Twin Shaft Plants?"}
        img={"/images/concrete-plants/mobmix-pro-faq.JPG"}
      />

      <ContactForm
        formcontent={formcontent}
        page={
          "Mobile Concrete Batching Plants - Twin Shaft Mixer [30-200 m³/hr] (Product Lisiting Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
