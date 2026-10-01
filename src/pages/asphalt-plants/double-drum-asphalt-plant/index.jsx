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
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant#product",
  name: "Double Drum Asphalt Mixing Plant - High Quality Series",
  image: "https://www.atlastechnologiesindia.com/assets/images/double-drum-asphalt-plant.jpg",
  description: "Atlas Technologies is a premier manufacturer of the Double drum asphalt Plant. Our Double Drum Asphalt Mixing Plant is engineered for high percentage RAP mixing and continuous asphalt production, utilizing separate drums for drying and mixing to deliver superior hot mix quality.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-DD-SERIES",
  mpn: "DD-ASPHALT-PLANT",
  category: "Construction Machinery > Asphalt Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Drum Configuration", value: "Dual Drum (Separate Drying and Mixing)" },
    { "@type": "PropertyValue", name: "RAP Capability", value: "Efficient recycling up to 30-40%" },
    { "@type": "PropertyValue", name: "Production Capacity", value: "40 TPH to 150 TPH" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the main advantage of a Double Drum Asphalt Plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main advantage is the separation of the drying and mixing processes. In a Double Drum Asphalt Plant, the first drum dries the aggregates while the second drum handles the mixing. This prevents the bitumen from being exposed to the burner flame, ensuring better mix quality and lower emissions.",
      },
    },
    {
      "@type": "Question",
      name: "How does a Double Drum Asphalt Mixing Plant handle recycled materials (RAP)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This plant is ideal for high percentage RAP mixing. The RAP is introduced into the second drum (mixing drum) where it is heated by the already hot virgin aggregates. This prevents the RAP binder from burning, making it a very efficient recycling solution.",
      },
    },
    {
      "@type": "Question",
      name: "What are the capacity ranges available for Atlas double drum plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas manufactures these plants in various capacities, typically ranging from 40 TPH to 150 TPH, suitable for continuous asphalt production in medium to large-scale highway projects.",
      },
    },
    {
      "@type": "Question",
      name: "Does the double drum design reduce fuel consumption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the optimized heat management in a dual-drum system ensures that heat from the drying process is effectively utilized, leading to lower fuel consumption per ton of asphalt produced compared to older single-drum technologies.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Atlas Double Drum Asphalt Mixing Plant available in a mobile version?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer both stationary and mobile configurations. The mobile version is mounted on a heavy-duty chassis with wheels, allowing for easy relocation between different project sites.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant#collection",
      name: "Double Drum Asphalt Mixing Plant — High Quality Series",
      description: "Atlas Technologies is a premier manufacturer of the Double Drum Asphalt Plant. Engineered for high percentage RAP mixing and continuous asphalt production, utilizing separate drums for drying and mixing to deliver superior hot mix quality.",
      url: "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant#itemlist",
        name: "Double Drum Asphalt Mixing Plant — High Quality Series — Range",
        numberOfItems: 4,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "DD-60 — Double Drum Asphalt Plant (60 TPH)", description: "60 TPH dual-drum asphalt plant with separate drying and mixing zones for RAP integration.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant" },
          { "@type": "ListItem", position: 2, name: "DD-90 — Double Drum Asphalt Plant (90 TPH)", description: "90 TPH double drum plant with PLC control and up to 30–40% RAP capability.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant" },
          { "@type": "ListItem", position: 3, name: "DD-120 — Double Drum Asphalt Plant (120 TPH)", description: "120 TPH high-quality double drum plant for continuous highway construction.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant" },
          { "@type": "ListItem", position: 4, name: "DD-150 — Double Drum Asphalt Plant (150 TPH)", description: "150 TPH flagship double drum plant with SCADA interface and mobile/stationary configurations.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Plants", item: "https://www.atlastechnologiesindia.com/asphalt-plants" },
        { "@type": "ListItem", position: 3, name: "Double Drum Asphalt Plant", item: "https://www.atlastechnologiesindia.com/asphalt-plants/double-drum-asphalt-plant" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Double Drum Asphalt <br className="hidden md:block" /> Plants [40-150
        TPH]
      </span>
    ),
    para: "Efficient Asphalt Production: Flexible, Reliable, & Built to Perform",
    img: "/images/admp/ddm.jpeg",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "DDM 45",
      minCapacity: 40,
      maxCapacity: 60,
      tags: "Perfect for mid-size roadworks",
      mixerSize: 500,
      url: "/ddm-45-40-60-tph",
      img: "/images/admp/ddm.jpeg",
    },
    {
      name: "DDM 50",
      minCapacity: 60,
      maxCapacity: 90,
      tags: "Designed for moderate production loads",
      mixerSize: 700,
      url: "/ddm-50-60-90-tph",
      img: "/images/dm/ddm-50-02.webp",
    },
    {
      name: "DDM 60",
      minCapacity: 90,
      maxCapacity: 120,
      tags: "Best for high-output urban roads",
      mixerSize: 1000, // example value
      url: "/ddm-60-90-120-tph",
      img: "/images/dm/ddm-50-03.webp",
    },
    {
      name: "DDM 65",
      minCapacity: 120,
      maxCapacity: 150,
      tags: "Suited for continuous large-scale jobs",
      mixerSize: 1200, // example value
      url: "/ddm-65-120-150-tph",
      img: "/images/dm/ddm-50-04.webp",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Continuous Production Meets Eco-Conscious Engineering",
    para: (
      <span>
        Our <span className="font-bold">Double Drum Asphalt Plants</span>{" "}
        feature advanced dual-drum technology that ensures efficient drying and
        blending of aggregates while maintaining consistent quality. Designed
        for both stationary and mobile setups, these plants integrate up to{" "}
        <span className="font-bold">25% RAP material</span> and feature
        energy-efficient burners, making them an eco-conscious and
        cost-effective choice for modern road construction.
      </span>
    ),
    img: "/images/admp/ddm.jpeg",
    bg: true,
  };
  const faqData = [
    {
      title: "1. How does double drum design reduce emissions?",
      content: (
        <>
          <p>
            The <strong>isolated drying and mixing zones</strong> allow better
            temperature control and complete combustion, reducing visible
            emissions and lowering fuel use.
          </p>
          <p>
            When paired with a <strong>baghouse filter</strong>, the system
            meets stringent air quality norms without needing afterburners.
          </p>
        </>
      ),
    },
    {
      title: "2. Can I switch between virgin/RAP mixes easily?",
      content: (
        <>
          <p>
            Yes. Our <strong>advanced control system</strong> allows you to
            automatically adjust various parameters, including:
          </p>
          <ul className="pl-4 mt-1 list-disc list-inside">
            <li>Burner temperature (±5°C)</li>
            <li>Drum rotation speed</li>
            <li>RAP/virgin material feed ratio (up to 25% RAP)</li>
          </ul>
          <p className="mt-2">Switching between mix types is seamless.</p>
        </>
      ),
    },
    {
      title: "3. What’s the typical installation timeline?",
      content: (
        <>
          <p>
            It’s mostly a couple of weeks and varies depending on the model and
            capacity you choose. For instance:
          </p>
          <ul className="pl-4 mt-1 list-disc list-inside">
            <li>
              <strong>DDM-45 to 60:</strong> 10–12 days
            </li>
            <li>
              <strong>DDM-65:</strong> 14 days approx (includes baghouse
              commissioning)
            </li>
          </ul>
        </>
      ),
    },
    {
      title:
        "4. Can Atlas customize its Double Drum Plants for unique project requirements?",
      content: (
        <>
          <p>Absolutely. We can customize your plant with:</p>
          <ul className="pl-4 mt-1 list-disc list-inside">
            <li>Multi-fuel burner systems (diesel, LDO, FO)</li>
            <li>Liquid additive dosing</li>
            <li>Optional pollution control units (baghouse, venturi)</li>
          </ul>
        </>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Better Thermal Efficiency",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Separate drying and mixing zones</span>{" "}
            improve fuel efficiency
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Dual-drum design</span> reduces unburnt
            particles and heat loss
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Mixing",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Longer retention time</span> ensures
            homogeneous coating
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Accurate temperature monitoring</span>{" "}
            for consistent results
          </li>
        </ul>
      ),
    },
    {
      title: "Eco-Compliance Made Easy",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Optional baghouse filters</span>{" "}
            maintain ≤30 mg/Nm³ emissions
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Supports up to 25% RAP</span> depending
            on material gradation
          </li>
        </ul>
      ),
    },
    {
      title: "Low Maintenance Design",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Replaceable drum liners</span> with
            quick access doors
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Rugged chassis</span> with simplified
            grease points & modular service access
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
        <title>Double Drum Asphalt Plants Manufacturer - Warm Mix at Lower Fuel Cost | Atlas Technologies</title>

        <meta name="description" content="Atlas double drum asphalt plant — independent drum design, warm mix production, lower fuel and reduced emissions. Explore the double drum asphalt mixing plant range and get a quote." />

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
        title={"Why Double Drum? (Advantages Over Single Drum)"}
        img={"/images/admp/ddm2.jpeg"}
      />

      <ContactForm
        formcontent={formcontent}
        page={":Double Drum Asphalt Plants [40-150 TPH] (Product Listing Page)"}
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
