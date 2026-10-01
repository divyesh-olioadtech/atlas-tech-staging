import Category_Banner from "../../../../components/category/category_banner";
import Category_intro from "../../../../components/category/category_intro";
import FAQSection1 from "../../../../components/category/faq1";
import FAQSection2 from "../../../../components/category/faq2";
import ContactForm from "../../../../components/category/form";
// import Blog from "../../../components/homepage/blog";
// import Certified from "../../../components/homepage/certified";
// import Clients from "../../../components/homepage/clients";
// import WorldMapComponent from "../../../components/homepage/mapview";
import ProductFilterComponent from "../../../../components/products/filter";
import Head from "next/head";
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant#product",
  name: "Stationary Concrete Batching Plant - High Performance RMC Series",
  image: "https://www.atlastechnologiesindia.com/assets/images/stationary-concrete-batching-plant.jpg",
  description: "Atlas Technologies is a premier Stationary Batching Plant manufacturer, providing high-precision solutions for the global construction industry. As a leading inline Concrete Batching Plant Distributor, we offer the Stationary rmc Plant series designed for high-volume production, extreme durability, and consistent concrete quality.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-S-BATCH-PRO",
  mpn: "S-SERIES",
  category: "Construction Machinery > Concrete Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Plant Configuration", value: "Stationary Batching Plant with Inline Bins" },
    { "@type": "PropertyValue", name: "Production Capacity", value: "30 m3/h to 200 m3/h" },
    { "@type": "PropertyValue", name: "Mixer Options", value: "Twin Shaft Mixer / Planetary Mixer" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between inline and mobile concrete plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inline plants are designed for permanent installation and offer higher capacities, making them ideal for RMC and precast applications. Mobile plants, on the other hand, are compact and portable, suited for smaller projects.",
      },
    },
    {
      "@type": "Question",
      name: "How is aggregate feeding and weighing handled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Four-bin feeders with pneumatic gates feed materials into a load-cell-based weighing conveyor that accurately discharges onto the mixer.",
      },
    },
    {
      "@type": "Question",
      name: "How is dust controlled during batching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas plants are equipped with pulse-jet filters and enclosed conveyors to ensure emissions remain way below the prescribed limits by the pollution control board, thereby meeting stringent environmental standards.",
      },
    },
    {
      "@type": "Question",
      name: "Can this be upgraded for cement storage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, cement storage can be scaled with silos (30–150T), an 18T built-in mobile silo, or 30-bag hopper variants.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant#collection",
      name: "Stationary Concrete Batching Plant — RMC Series",
      description: "Atlas Technologies is a premier Stationary Batching Plant manufacturer, providing high-precision solutions for the global construction industry. Designed for high-volume production, extreme durability, and consistent concrete quality.",
      url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/concrete-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant#itemlist",
        name: "Stationary Concrete Batching Plant — RMC Series — Range",
        numberOfItems: 4,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SCP-30 — Stationary Concrete Batching Plant (30 m³/hr)", description: "30 m³/hr inline stationary plant for small RMC operations.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant" },
          { "@type": "ListItem", position: 2, name: "SCP-60 — Stationary Concrete Batching Plant (60 m³/hr)", description: "60 m³/hr twin-shaft plant for mid-scale highway and building projects.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant" },
          { "@type": "ListItem", position: 3, name: "SCP-120 — Stationary Concrete Batching Plant (120 m³/hr)", description: "120 m³/hr high-capacity plant for large RMC facilities and infrastructure.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant" },
          { "@type": "ListItem", position: 4, name: "SCP-200 — Stationary Concrete Batching Plant (200 m³/hr)", description: "200 m³/hr mega-capacity plant for dams, airports, and expressway projects.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Concrete Plants", item: "https://www.atlastechnologiesindia.com/concrete-plants" },
        { "@type": "ListItem", position: 3, name: "Stationary Concrete Batching Plant — RMC Series", item: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Twin Shaft Mixer Concrete Batching
        <br className="hidden md:block" />
        Plants [30-200 m³/hr]
      </span>
    ),
    para: "High-Volume Stationary Plants for Infrastructure & RMC Applications",
    img: "/images/concrete-plants/atmix-pro-160-three.jpeg",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "ASCB 30/ATMIX PRO-30 | 30 m³/hr",
      minCapacity: 30,
      maxCapacity: 30,
      tags: "Best for: Medium projects / RMC",
      bestFor: "Medium projects / RMC",
      img: "/images/concrete-plants/atmix-pro-30-4.JPG",
      url: "/atmix-pro-30",
    },
    {
      name: "ASCB 45/ATMIX PRO-45 | 45 m³/hr",
      minCapacity: 45,
      maxCapacity: 45,
      tags: "Best for: Medium-scale infrastructure Projects",
      bestFor: "Medium-scale infrastructure projects",
      img: "/images/concrete-plants/atmix-pro-45.jpg",
      url: "/atmix-pro-45",
    },
    {
      name: "ASCB 60/ATMIX PRO-60 | 60 m³/hr",
      minCapacity: 60,
      maxCapacity: 60,
      tags: "Best for: RMC plants/bridges",
      bestFor: "RMC plants / bridges",
      img: "/images/concrete-plants/atmix-pro-1000-one.jpg",
      url: "/atmix-pro-60",
    },
    {
      name: "ASCB 75/ATMIX PRO-75 | 75 m³/hr",
      minCapacity: 75,
      maxCapacity: 75,
      tags: "Best for: Large civil projects",
      bestFor: "Large civil projects",
      img: "/images/concrete-plants/atmix-pro-1000-five.jpg",
      url: "/atmix-pro-75",
    },
    {
      name: "ASCB 90/ ATMIX PRO-90 | 90 m³/hr",
      minCapacity: 90,
      maxCapacity: 90,
      tags: "Best for: Industrial infrastructure",
      bestFor: "Industrial infrastructure",
      img: "/images/concrete-plants/atmix-pro-90-one.jpg",
      url: "/atmix-pro-90",
    },
    {
      name: "ASCB 120/ATMIX PRO-120 | 120 m³/hr",
      minCapacity: 120,
      maxCapacity: 120,
      tags: "Best for: Mega projects",
      bestFor: "Mega projects",
      img: "/images/concrete-plants/atmix-pro-120-t-1.png",
      url: "/atmix-pro-120",
    },
    {
      name: "ASCB 160/ATMIX PRO-160 | 160 m³/hr",
      minCapacity: 160,
      maxCapacity: 160,
      tags: "Best for: Dams/airports",
      bestFor: "Dams / airports",
      img: "/images/concrete-plants/atmix-pro-160t-1.JPG",
      url: "/atmix-pro-160",

    },
    {
      name: "ASCB 180/ATMIX PRO-180 | 180 m³/hr",
      minCapacity: 180,
      maxCapacity: 180,
      tags: "Best for: Expressways, metro corridors, large bridges",
      bestFor: "Expressways, metro corridors, large bridges",
      img: "/images/concrete-plants/atmix-pro-160-three.jpeg",
      url: "/atmix-pro-180",


    },
    {
      name: "ASCB 200/ATMIX PRO-200 | 200 m³/hr",
      minCapacity: 200,
      maxCapacity: 200,
      tags: "Best for: High-output ready-mix",
      bestFor: "High-output ready-mix",
      url: "/atmix-pro-200",
      img: "/images/concrete-plants/atmixpro-200-component.webp"
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Engineered for Heavy-Duty, Consistent Concrete Production",
    para: (
      <span>
        Atlas Technologies’ Stationary Concrete Batching Plants are equipped
        with twin-shaft paddle mixers, ensuring thorough mixing at high levels
        for superior concrete quality. With strong and reliable construction,
        advanced control systems, and customizable configurations, these plants
        are ideal for highways, dams, bridges, and other infrastructure
        projects.
      </span>
    ),
    img: "/images/acmp/stationary-concrete-batching-plant.png",
    bg: true,
  };
  const faqData = [
    {
      title: "1. What’s the difference between inline and mobile plants?",
      content: (
        <span>
          Inline plants are designed for permanent installation and offer higher
          capacities, making them ideal for RMC and precast applications. Mobile
          plants, on the other hand, are compact and portable, suited for
          smaller projects.
        </span>
      ),
    },
    {
      title: "2. How is aggregate feeding and weighing handled?",
      content: (
        <span>
          Four-bin feeders with pneumatic gates feed materials into a
          load-cell-based weighing conveyor that accurately discharges onto the
          mixer.
        </span>
      ),
    },
    {
      title: "3. How is dust controlled during batching?",
      content: (
        <span>
          Atlas plants are equipped with pulse-jet filters and enclosed
          conveyors to ensure emissions remain way below the prescribed limits
          by the pollution control board, thereby meeting stringent
          environmental standards.
        </span>
      ),
    },
    {
      title: "4. Can this be upgraded for cement storage?",
      content: (
        <span>
          Yes, cement storage can be scaled with silos (30–150T), an 18T
          built-in mobile silo, or 30-bag hopper variants.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Precision & Mix Quality",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Twin-shaft mixer
            for thorough mixing (with replaceable parts)
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> SCADA/PLC
            control option for recipe, batching, reporting, and data storage
          </li>
        </ul>
      ),
    },
    {
      title: "Efficient Feeding & Weighing",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Twin Shaft Mixer
            (45-sec cycles) with replaceable liners/arms
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Weighing
            conveyors on load cells provide accurate material dosing
          </li>
        </ul>
      ),
    },
    {
      title: "Dust & Environmental Control",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Designed to meet
            CPCB norms and equivalent international standards
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Enclosed
            Conveyors with Pulse-Jet Bag Filters to reduce dust
          </li>
        </ul>
      ),
    },
    {
      title: "Scalable Configuration",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Cement silos
            from 50–150 tons standard; horizontal silos available for low-height
            sites
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Admixture dosing
            systems for multiple additives
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
        <title>Stationary Concrete Batching Plant Manufacturer | 30–200 m³/hr | Atlas Technologies</title>
        <meta name="description" content="Twin-shaft mixer, SCADA/PLC control, RMC and infrastructure ready — Atlas stationary concrete batching plant. 9 models from 30 to 200 m³/hr. Compare range and get factory price." />
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
        note={
          "Note: Capacity is based on standard batch cycles; actual capacity may vary depending on mix design and cycle times."
        }
      />

      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        img={"/images/acmp/stationary-concrete-batching-plant-benifits.JPG"}
        title={"Why Do Our Twin Shaft Mixer Plants Lead the Industry?"}
      />
      <ContactForm
        formcontent={formcontent}
        page={
          "Twin Shaft Mixer Concrete Batching Plants [30-200 m³/hr] (Product Listing Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
