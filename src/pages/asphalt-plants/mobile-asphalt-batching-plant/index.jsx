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
  name: "Mobile Asphalt Batching Plant (MABP) [80-160 TPH]",
  image: "https://www.atlastechnologiesindia.com/assets/images/mobile-asphalt-batching-plant.jpg",
  description: "Atlas MABP Series offers high-mobility asphalt batching solutions ranging from 80 to 160 TPH. Designed for rapid execution and flawless performance in road building projects. As Portable asphalt batch plant Manufacturer we ensure a great durability and after sales Services.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-MABP-SERIES",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "For what sort of projects are Atlas Mobile Asphalt Batch Plants particularly suited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile Asphalt Batch Plants by Atlas are for projects requiring frequent relocation or limited installation time. These compact, containerized designs allow for easy transport and rapid setup while maintaining high-performance features for consistent quality and efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "How does Atlas ensure precise mix accuracy for its MABPs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas MABPs utilize advanced PLC control systems with high-precision load cells for aggregate, bitumen, and filler weighing, ensuring each batch meets strict engineering specifications.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atlas MABPs effectively use RAP (Recycled Asphalt Pavement)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our mobile plants are designed to support RAP (Recycled Asphalt Pavement) integration, allowing for sustainable road construction without compromising the final mix quality.",
      },
    },
    {
      "@type": "Question",
      name: "Are Atlas MABPs suitable for extreme weather conditions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Atlas MABP series is built with high-grade steel and weather-resistant components, ensuring reliable operation in temperatures ranging from extreme heat to high-altitude cold environments.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant#collection",
      name: "Mobile Asphalt Batching Plant (MABP) — Model Range",
      description: "Atlas Technologies is a leading Portable Asphalt Batch Plant Manufacturer. The MABP Series offers high-mobility solutions from 80 to 160 TPH — skid-mounted and wheel-mounted configurations for rapid road project execution.",
      url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant#itemlist",
        name: "Mobile Asphalt Batching Plant (MABP) — Model Range — Range",
        numberOfItems: 3,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "MABP-80 — Mobile Asphalt Batching Plant (80 TPH)", description: "80 TPH skid-mounted mobile asphalt batch plant for small to mid-scale highway projects requiring frequent site relocation.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant" },
          { "@type": "ListItem", position: 2, name: "MABP-120 — Mobile Asphalt Batching Plant (120 TPH)", description: "120 TPH wheel-mounted mobile asphalt batch plant for mid to large-scale road construction and export projects.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant" },
          { "@type": "ListItem", position: 3, name: "MABP-160 LITE — Mobile Asphalt Batching Plant (160 TPH)", description: "160 TPH rapid-deployment MABP LITE series launched at EXCON 2025 for large infrastructure and export projects.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Plants", item: "https://www.atlastechnologiesindia.com/asphalt-plants" },
        { "@type": "ListItem", position: 3, name: "Mobile Asphalt Batching Plant", item: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-batching-plant" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Mobile Asphalt Batch Plants <br className="hidden md:block" /> (MABP)
        [80-160 TPH]
      </span>
    ),
    para: "Roadbuilding With Flexibility! Mix High-Quality Asphalt Anywhere",
    img: "/images/mabp/twin1500kg-seven.webp",

    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "MABP 80",
      minCapacity: 80,
      maxCapacity: 80,
      tags: "Ideal for small to medium production scale",
      mixerSize: 1000,
      img:"/images/mabp/mabpnewsix.webp",
      url: "/1000-kg-twin-shaft-mixer-80-tph",
    },
    {
      name: "MABP 120",
      minCapacity: 120,
      maxCapacity: 120,
      tags: "Perfect for balanced capacity and efficiency",
      mixerSize: 1500,
      img: "/images/mabp/twin1500kg-seven.webp",
      url: "/1500-kg-twin-shaft-mixer-120-tph",
    },
    {
      name: "MABP 160",
      minCapacity: 160,
      maxCapacity: 160,
      tags: "High capacity with robust mixing performance",
      mixerSize: 2000,
      img: "/images/mabp/MABP 160/mabp-160-06.png",
      url: "/2000-kg-twin-shaft-mixer-160-tph",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "For Rapid Execution & Flawless Performance",
    para: (
      <span>
        Atlas MABPs bring stationary-plant precision to remote job sites. These{" "}
        mobile asphalt batch plants are built with a{" "}
        <span className="font-bold">containerized and modular design</span> for
        fast relocation and minimal setup. Whether you're paving highways, rural
        roads, or urban streets, our MABPs ensure{" "}
        <span className="font-bold">
          quick deployment, fuel-efficient operation, and consistent output
          quality.
        </span>
      </span>
    ),
    img: "/images/mabp/mabp-120-02.webp",
    bg: true,
  };

  const faqData = [
    {
      title:
        "1. For what sort of projects are Mobile Asphalt Batch Plants preferred?",
      content: (
        <span>
          Mobile Asphalt Batch Plants (MABPs) are ideal for projects requiring{" "}
          <span className="font-bold">frequent relocation</span> or{" "}
          <span className="font-bold">limited installation time</span>. Their{" "}
          <span className="font-bold">compact, containerized design</span>{" "}
          reduces transportation and setup costs, while their{" "}
          <span className="font-bold">high-performance features</span> ensure
          consistent quality and efficiency.
        </span>
      ),
    },
    {
      title: "2. How does Atlas ensure minimal downtime with its MABPs?",
      content: (
        <span>
          Atlas MABPs are designed for{" "}
          <span className="font-bold">reliability</span>, with{" "}
          <span className="font-bold">robust components</span> and{" "}
          <span className="font-bold">easy-to-maintain structures</span>.
          Additionally, our{" "}
          <span className="font-bold text-red-400">24/7 emergency support</span>{" "}
          and quick access to <span className="font-bold">spare parts</span>{" "}
          ensure your plant stays operational even in emergencies.
        </span>
      ),
    },
    {
      title: "3. Can Atlas MABPs integrate recycled materials?",
      content: (
        <span>
          Yes, our MABPs can seamlessly integrate up to{" "}
          <span className="font-bold text-red-400">30% RAP material</span>,
          reducing raw material costs and promoting{" "}
          <span className="font-bold">sustainable construction practices</span>.
        </span>
      ),
    },
    {
      title: "4. Are Atlas MABPs suitable for extreme weather conditions?",
      content: (
        <span>
          Absolutely! Our MABPs are built to operate efficiently in{" "}
          <span className="font-bold">diverse environments</span>, from{" "}
          <span className="font-bold">hot and humid climates</span> to{" "}
          <span className="font-bold">cold and arid regions</span>. With
          optional <span className="font-bold">thermal insulation</span>,{" "}
          <span className="font-bold">multi-fuel burners</span>, and{" "}
          <span className="font-bold">
            industrial-grade PLCs in insulated cabins
          </span>
          , they deliver consistent performance in{" "}
          <span className="font-bold">varied environments</span>.
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Rapid Relocation",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Pre-assembled skids</span> reduce setup
            to <span className="font-bold">{"<"}3 days</span>
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Standard container shipping</span> (no
            special permits)
          </li>
        </ul>
      ),
    },
    {
      title: "Military-Grade Durability",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Reinforced chassis</span> for rough
            terrain
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Corrosion-resistant</span> electrical
            systems
          </li>
        </ul>
      ),
    },
    {
      title: "High Precision Mixing",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Twin-shaft paddle mixers</span> ensure
            thorough blending at high levels
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Load-cell based weighing system</span>{" "}
            for tight batch control
          </li>
        </ul>
      ),
    },
    {
      title: "Fuel Efficiency on the Move",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Energy-efficient burners</span>{" "}
            compatible with multiple fuels
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Auto-idle mode</span> reduces fuel use
            during batch pauses
          </li>
        </ul>
      ),
    },
  ];

  const productLinks = [
    {
      name: "Stationary Asphalt Batch Plants (ABP)",
      url: "/asphalt-plants/stationary-asphalt-batching-plant",
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
        <title>Mobile Asphalt Batching Plants Manufacturer in India | 80 to 160 TPH | Atlas Technologies</title>

        <meta name="description" content="Atlas mobile asphalt batching plant — trailer-mounted, RAP-capable, CPCB-compliant. Trusted mobile asphalt batch mix plant manufacturer in India. Get specs and price quote." />

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
        img={"/images/mabp/mabp-120-03.webp"}
        title={"Why Atlas MABPs?"}
      />

      <ContactForm
        formcontent={formcontent}
        page={
          "Mobile Asphalt Batch Plants(MABP) [80-160 TPH] (Product Listing Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
