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
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant#product",
  name: "Counterflow Asphalt Plant - High Efficiency Series",
  image: "https://www.atlastechnologiesindia.com/assets/images/counterflow-asphalt-plant.jpg",
  description: "Atlas Technologies offers a premium counterflow asphalt plant designed for maximum fuel efficiency and low emissions. This continuous asphalt mixing plant utilizes separate drying and mixing zones, ensuring a high-quality hot mix while significantly reducing fuel consumption.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-CF-SERIES",
  mpn: "CF-PLANT",
  category: "Construction Machinery > Asphalt Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Process Type", value: "Counterflow Continuous Mixing" },
    { "@type": "PropertyValue", name: "Capacity Range", value: "40 TPH to 150 TPH" },
    { "@type": "PropertyValue", name: "Fuel Efficiency", value: "Up to 15% higher than parallel flow" },
    { "@type": "PropertyValue", name: "RAP Compatibility", value: "Up to 30-40%" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the primary advantage of a counterflow asphalt plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary advantage is thermal efficiency. In a counterflow design, the aggregate moves against the direction of the hot gases, allowing for maximum heat transfer. This makes it a more fuel-efficient continuous asphalt mixing plant compared to traditional parallel flow models.",
      },
    },
    {
      "@type": "Question",
      name: "How does counterflow technology reduce environmental emissions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Since the mixing of liquid bitumen with hot aggregates occurs behind the burner flame, the bitumen is not exposed to direct fire. This prevents oxidation and the formation of blue smoke, ensuring lower hydrocarbon emissions.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Atlas counterflow plant suitable for using RAP (Recycled Asphalt)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, counterflow plants are ideal for RAP. The separate mixing zone allows recycled materials to be heated by the hot virgin aggregates rather than a direct flame, preventing binder degradation and allowing for higher RAP percentages in the mix.",
      },
    },
    {
      "@type": "Question",
      name: "What capacities are available for the Atlas counterflow series?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas offers counterflow continuous asphalt mixing plants in various capacities ranging from 40 TPH to 150 TPH, customizable to meet the specific throughput requirements of large-scale highway and airport projects.",
      },
    },
    {
      "@type": "Question",
      name: "What type of control system is used in the counterflow plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our plants feature a fully automated PLC-based control system with a user-friendly SCADA interface. This allows for real-time monitoring of temperature, material flow, and burner modulation to maintain consistent mix quality.",
      },
    },
    {
      "@type": "Question",
      name: "Does the counterflow plant support multiple fuel options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the burners are designed to be versatile and can be configured for Diesel, LDO, or Natural Gas, allowing contractors to choose the most cost-effective fuel source available at their project location.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant#collection",
      name: "Counterflow Asphalt Plant — High Efficiency Series",
      description: "Atlas Technologies offers a premium counterflow asphalt plant designed for maximum fuel efficiency and low emissions. This continuous asphalt mixing plant uses separate drying and mixing zones ensuring high-quality hot mix while significantly reducing fuel consumption.",
      url: "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant#itemlist",
        name: "Counterflow Asphalt Plant — High Efficiency Series — Range",
        numberOfItems: 3,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "CF-40 — Counterflow Asphalt Plant (40 TPH)", description: "40 TPH counterflow continuous plant for mid-scale highway patching and rural road construction.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant" },
          { "@type": "ListItem", position: 2, name: "CF-90 — Counterflow Asphalt Plant (90 TPH)", description: "90 TPH counterflow plant with SCADA control and up to 30% RAP integration capability.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant" },
          { "@type": "ListItem", position: 3, name: "CF-150 — Counterflow Asphalt Plant (150 TPH)", description: "150 TPH high-efficiency counterflow plant for large highway and airport runway projects.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Plants", item: "https://www.atlastechnologiesindia.com/asphalt-plants" },
        { "@type": "ListItem", position: 3, name: "Counter Flow Asphalt Plant", item: "https://www.atlastechnologiesindia.com/asphalt-plants/counter-flow-asphalt-plant" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Counter Flow Asphalt <br className="hidden md:block" /> Plants [40-150
        TPH]
      </span>
    ),
    para: "Hot-Mix Asphalt: Cleaner, Smarter, More Sustainable",
    img: "/images/plants/counter-flow/counterflowatlasnewbanner.webp",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "CF-45",
      minCapacity: 40,
      maxCapacity: 60,
      tags: "Perfect for city road repairs",
      mixerSize: null, // Mixer size not provided
      url: "/cf-45-40-60-tph",
      img: "/images/plants/counter-flow/cf-1.jpg",
    },
    {
      name: "CF-50",
      minCapacity: 60,
      maxCapacity: 90,
      tags: "Ideal for mid-sized projects",
      mixerSize: null,
      url: "/cf-50-60-90-tph",
      img: "/images/plants/counter-flow/cf-2.jpg",
    },
    {
      name: "CF-60",
      minCapacity: 90,
      maxCapacity: 120,
      tags: "Highway recycling specialist",
      mixerSize: null,
      url: "/cf-60-90-120-tph",
      img: "/images/plants/counter-flow/counter-flow-asphalt-plant-01-new.jpeg",
    },
    {
      name: "CF-65",
      minCapacity: 120,
      maxCapacity: 150,
      tags: "Large-scale green infrastructure",
      mixerSize: null,
      url: "/cf-65-120-150-tph",
      img: "/images/plants/counter-flow/cf-4.jpg",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Reverse Airflow Technology for Maximum Efficiency",
    para: (
      <span>
        Atlas Counterflow Asphalt Plants use a{" "}
        <strong>continuous counterflow drum</strong> where exhaust gases and
        aggregates move in opposite directions. This enhances{" "}
        <strong>thermal efficiency,</strong> ensures{" "}
        <span>superior mix quality,</span> and supports{" "}
        <strong>up to 30% RAP use.</strong>
        Combined with <strong>low-emission baghouse filters,</strong> these
        plants are built for <strong>urban infrastructure</strong> and
        <strong>eco-conscious road building.</strong>
      </span>
    ),
    img: "/images/plants/counter-flow/cf-1.jpg",
    bg: true,
  };
  const faqData = [
    {
      title: "1. How does counterflow technology reduce energy costs?",
      content: (
        <span>
          In the counterflow design, aggregates move opposite to hot gases,
          ensuring better heat transfer and reducing fuel use. This not only
          saves operational costs but also improves asphalt quality over
          single-drum plants.
        </span>
      ),
    },
    {
      title:
        "2. What makes Counterflow Asphalt Plants ideal for high-quality asphalt production?",
      content: (
        <span>
          Counterflow Asphalt Plants produce consistent, cleaner asphalt with
          low emissions, making them ideal for highway, urban, and
          environmentally sensitive projects.
        </span>
      ),
    },
    {
      title:
        "3. Are Counterflow Plants suitable for extreme weather conditions?",
      content: (
        <span>
          Absolutely! The Counterflow Asphalt Plants are engineered for
          operation in -10°C to 55°C conditions, with thermally insulated drums,
          dust-sealed controls, and weather-resistant housing.
        </span>
      ),
    },
    {
      title:
        "4. What customization options are available for Atlas Counter Flow Plants?",
      content: (
        <span>
          Atlas offers a range of customization options, including liquid
          additive systems, RAP integration, and multi-fuel burners to
          accommodate diverse fuel sources. We also provide flexible
          configurations for capacities ranging from 40 TPH to 150 TPH, ensuring
          your plant meets specific project requirements.
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Cleaner Emissions",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Counterflow combustion reduces unburnt particles and NOx
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Optional baghouse filters keep emissions below 30 mg/Nm³
          </li>
        </ul>
      ),
    },
    {
      title: "Smart RAP Integration",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Counterflow design protects RAP from thermal shock
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Efficient blending with up to 30% RAP, depending on material
            condition
          </li>
        </ul>
      ),
    },
    {
      title: "Optimal Fuel Use",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span> Waste
            heat recovery preheats virgin aggregates to 150°C
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Multi-fuel capability (diesel/LNG/biomass)
          </li>
        </ul>
      ),
    },
    {
      title: "Smart Maintenance",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Flights attached with E350 high-grade steel (long-lasting and easy
            to replace)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Optional SCADA-based automation for monitoring and reporting
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
      name: "Stationary Asphalt Batch Plants (ABP)",
      url: "/asphalt-plants/stationary-asphalt-batching-plant",
    },
    {
      name: "Double Drum Asphalt Plant",
      url: "/asphalt-plants/double-drum-asphalt-plant",
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
        <title>Counter Flow Asphalt Plants Manufacturer in India | 40 to 150 TPH | Atlas Technologies</title>

        <meta name="description" content="Atlas counter flow asphalt plant — 15–20% lower fuel per tonne, RAP-ready, CPCB-compliant. India's most fuel efficient asphalt plant. Request specs and factory price." />

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
        productLinks={productLinks}
        products={products}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"Why Choose Counter Flow Asphalt Plants?"}
        img={"/images/plants/counter-flow/cf-6.jpg"}
      />

      <ContactForm
        formcontent={formcontent}
        page={"Counter Flow Asphalt Plants [40-150 TPH] (Product Listing Page)"}
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
