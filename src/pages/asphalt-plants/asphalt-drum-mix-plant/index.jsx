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
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant#product",
  name: "Asphalt Drum Mix Plant - Parallel Flow & Counterflow",
  image: "https://www.atlastechnologiesindia.com/assets/images/asphalt-drum-mix-plant.jpg",
  description: "Atlas Technologies is a premier mobile drum mix plant supplier offering high-performance solutions for continuous asphalt production. Whether you require a stationary setup or a mobile drum mix plant, our units ensure uniform coating, fuel efficiency, and rapid deployment for highway projects.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-DRUM-MIX-SERIES",
  mpn: "ADM-SERIES",
  category: "Construction Machinery > Asphalt Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Mixing Technology", value: "Continuous Drum Mix (Parallel/Counterflow)" },
    { "@type": "PropertyValue", name: "Capacity Range", value: "40 TPH to 200 TPH" },
    { "@type": "PropertyValue", name: "Mobility Options", value: "Stationary, Mobile, and Portable" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between parallel flow and counterflow drum mix plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a parallel flow plant, the aggregates and the burner flame move in the same direction. In a counterflow plant, the aggregates move against the flow of the burner flame. Counterflow technology is generally more fuel-efficient and produces lower emissions because the liquid bitumen is not exposed to the direct flame.",
      },
    },
    {
      "@type": "Question",
      name: "Can the Atlas drum mix plant be customized for different fuel types?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our drum mix plants are equipped with high-efficiency burners that can be configured to run on Diesel, LDO, or Natural Gas, providing flexibility based on regional fuel availability and cost.",
      },
    },
    {
      "@type": "Question",
      name: "How does Atlas ensure the quality of the asphalt mix in a continuous process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality is maintained through synchronized feeding systems where the speed of the cold feed bins and the bitumen pump are electronically linked. This ensures the correct ratio of aggregate to binder is maintained even if production speeds change.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant#collection",
      name: "Asphalt Drum Mix Plant — Parallel Flow & Counterflow Range",
      description: "Atlas Technologies is a premier mobile drum mix plant supplier offering high-performance solutions for continuous asphalt production ensuring uniform coating, fuel efficiency, and rapid deployment for highway projects.",
      url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant#itemlist",
        name: "Asphalt Drum Mix Plant — Parallel Flow & Counterflow Range — Range",
        numberOfItems: 4,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ADM-40 — Asphalt Drum Mix Plant (40 TPH)", description: "40 TPH parallel flow drum mix plant for small rural road and patch-work projects.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant" },
          { "@type": "ListItem", position: 2, name: "ADM-90 — Asphalt Drum Mix Plant (90 TPH)", description: "90 TPH continuous drum mixer with synchronized feed system for mid-scale highway construction.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant" },
          { "@type": "ListItem", position: 3, name: "ADM-120 — Asphalt Drum Mix Plant (120 TPH)", description: "120 TPH drum mix plant with optional counterflow configuration and baghouse filter.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant" },
          { "@type": "ListItem", position: 4, name: "ADM-200 — Asphalt Drum Mix Plant (200 TPH)", description: "200 TPH high-capacity continuous drum mix plant with multi-fuel burner and RAP integration.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Plants", item: "https://www.atlastechnologiesindia.com/asphalt-plants" },
        { "@type": "ListItem", position: 3, name: "Asphalt Drum Mix Plant", item: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-drum-mix-plant" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Asphalt Drum Mix <br className="hidden md:block" /> Plants [20-200 TPH]
      </span>
    ),
    para: "Simplified Efficiency for High-Volume Road Projects",
    img: "/images/admp/mobile-asphalt-drum-mix-plant.JPG",
    pdfPath: "/static/brochure/drum-mix-plant.pdf",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "DM-25",
      minCapacity: 20,
      maxCapacity: 30,
      tags: "Perfect for small-scale projects",
      mixerSize: null,
      url: "/dm25-20-30-tph",
      img: "/images/admp/mdm25-4.jpg",
    },
    {
      name: "DM-35",
      minCapacity: 30,
      maxCapacity: 40,
      tags: "Designed for medium-sized operations",
      mixerSize: null,
      url: "/dm35-30-40-tph",
      img: "/images/admp/dm-35-02-new.webp",
    },
    {
      name: "DM-45",
      minCapacity: 40,
      maxCapacity: 60,
      tags: "Ideal for medium to large-scale projects",
      mixerSize: null,
      url: "/dm45-40-60-tph",
      img: "/images/mdm/mdm-45-05.webp",
    },
    {
      name: "DM-50",
      minCapacity: 60,
      maxCapacity: 90,
      tags: "A robust solution for large-scale infrastructure projects",
      mixerSize: null,
      url: "/dm50-60-90-tph",
      img: "/images/admp/mdm-50-02.png",
    },
    {
      name: "DM-60",
      minCapacity: 90,
      maxCapacity: 120,
      tags: "Engineered for superior mixing and blending",
      mixerSize: null,
      url: "/dm60-90-120-tph",
      img: "/images/admp/mdm-60-2.jpg",
    },
    {
      name: "DM-65",
      minCapacity: 120,
      maxCapacity: 150,
      tags: "The ultimate choice for megaprojects",
      mixerSize: null,
      url: "/dm65-120-150-tph",
      img: "/images/admp/mdm-60-1.jpg",
    },
    {
      name: "DM-200",
      minCapacity: 180,
      maxCapacity: 200,
      tags: "Built for extreme conditions",
      mixerSize: null,
      url: "/dm200-180-200-tph",
      img: "/images/admp/twohundrednew-two.webp",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Drum Mixing Plant: Built for Non-Stop Production",
    para: (
      <span>
        Atlas Asphalt Drum Mix Plants deliver consistent quality through a
        rugged, low-maintenance design. With features such as{" "}
        <strong>
          optional 1260°C heat-resistant ceramic wool drum insulation
        </strong>{" "}
        for improved fuel economy in cold climates,{" "}
        <strong>precision flight design</strong> for maximum heat transfer, and
        half-chain drives for reduced vibration and extended component life,
        these plants are designed for uninterrupted performance in both
        stationary and mobile setups.
      </span>
    ),
    img: "/images/admp/admp.jpeg",
    bg: true,
  };
  const faqData = [
    {
      title:
        "1. What makes Atlas Asphalt Drum Mix Plants stand out from competitors? ",
      content: (
        <span>
          Atlas Drum Mix Plants are designed for durability and low operating
          costs, with features like precision-engineered flights for efficient
          heating, insulated tanks, and multi-fuel burner compatibility. Every
          plant is factory-tested before delivery.
        </span>
      ),
    },
    {
      title: "2. Are Atlas Drum Mix Plants suitable for small-scale projects?",
      content: (
        <span>
          Yes, our <span className="font-bold">DM 25</span> and{" "}
          <span className="font-bold">DM 35</span> models are perfect for small
          to medium-scale projects, offering capacities of{" "}
          <span className="font-bold">20-40 TPH.</span> These plants ensure
          cost-effective and reliable performance without compromising quality.
        </span>
      ),
    },
    {
      title:
        "3. How does Atlas ensure consistent asphalt quality with its Drum Mix Plants?",
      content: (
        <span>
          Our drum mix plants feature an optimized drum flight design that
          ensures thorough coating of aggregates. Insulated bitumen tanks and
          hot oil-jacketed pipelines maintain consistent temperatures for
          superior asphalt quality.
        </span>
      ),
    },
    {
      title:
        "4. How does Atlas ensure minimal downtime with its Drum Mix Plants?",
      content: (
        <span>
          Atlas Drum Mix Plants are designed for reliability, with features like
          <span className="font-bold">half-chain drives</span> for reduced
          vibrations and{" "}
          <span className="font-bold">trouble-free operation.</span>{" "}
          Additionally, our{" "}
          <span className="font-bold">24/7 emergency support</span> and quick
          access to spare parts ensure your plant stays operational even in
          emergencies.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Life-Long Drum Durability",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Half-chain drive </span> reduces
            vibrations by 40% vs. full-chain designs
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Wear-resistant </span> flight tips and
            liners extend service life
          </li>
        </ul>
      ),
    },
    {
      title: "All-Climate Reliability",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Rock-wool insulated tanks </span>{" "}
            prevent bitumen cooling (-20°C rated)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Hot-oil jacketing </span> eliminates
            line clogs in cold weather
          </li>
        </ul>
      ),
    },
    {
      title: "Versatile Burner Compatibility",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Multi-fuel burners </span> switch
            seamlessly between diesel/LDO/FO
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Auto-viscosity control </span> maintains
            perfect spray temperature
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
            <span className="font-bold">Quick-release drum panels </span>{" "}
            (replace flights in 3 hours)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Vibration-alert bearings </span> warn
            before failure
          </li>
        </ul>
      ),
    },
    {
      title: "Factory-Verified Performance",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span> Each
            plant undergoes a full test run before dispatch
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            On-site
            <span className="font-bold"> commissioning support </span> included
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
      name: "Counter Flow Asphalt Plant",
      url: "/asphalt-plants/counter-flow-asphalt-plant",
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
        <title>Asphalt Drum Mix Plants Manufacturer in India | Atlas Technologies</title>

        <meta name="description" content="Continuous production, multi-fuel burner, CPCB-compliant — Atlas asphalt drum mix plant built for Indian highways. Trusted drum mix plant manufacturer in India. Get specs and price." />

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
        title={"Why Choose Atlas for Asphalt Drum Mix Plants?"}
        img={"/images/admp/dm-200-1.JPG"}
      />

      <ContactForm
        formcontent={formcontent}
        page={"Asphalt Drum Mix Plants [20-200 TPH] (Product Listing Page)"}
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
