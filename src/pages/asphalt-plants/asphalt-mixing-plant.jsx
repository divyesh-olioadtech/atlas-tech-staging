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

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant#product",
  name: "Asphalt Mixing Plant - High Performance Series",
  image: "https://www.atlastechnologiesindia.com/assets/images/asphalt-mixing-plant.jpg",
  description: "Atlas Technologies is among the top Asphalt mixing Plant Manufacturers, offering advanced solutions for global infrastructure. Our Asphalt Mixing Plant range is engineered for durability and precision, making us a preferred Asphalt Manufacturer in India for high-quality road construction equipment.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-AMP-SERIES",
  mpn: "AMP-SERIES",
  category: "Construction Machinery > Asphalt Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Equipment Type", value: "Asphalt Mixing Plant" },
    { "@type": "PropertyValue", name: "Production Capacity", value: "40 TPH to 200 TPH" },
    { "@type": "PropertyValue", name: "Application", value: "Highway and Urban Road Construction" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Atlas one of the leading Asphalt Mixing Plant Manufacturers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As established Asphalt Mixing Plant Manufacturers, Atlas focuses on fuel efficiency, mix consistency, and low maintenance costs. Our plants are designed using 3D modeling and high-grade steel to ensure longevity in demanding site conditions.",
      },
    },
    {
      "@type": "Question",
      name: "How does an Asphalt Mixing Plant differ from a standard drum plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Asphalt Mixing Plant, particularly the batching type, allows for precise weighing of each ingredient (aggregates, bitumen, and filler) before mixing. This ensures a higher level of mix accuracy compared to continuous drum plants.",
      },
    },
    {
      "@type": "Question",
      name: "What are the core components of an Atlas asphalt plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard Atlas Asphalt Mixing Plant includes cold feed bins, a drying drum, a vibrating screen, a weighing section, a twin-shaft pugmill mixer, and a sophisticated PLC control system for total automation.",
      },
    },
    {
      "@type": "Question",
      name: "Can the plant be customized for international projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our engineering team can customize the plant to meet specific international standards, including electrical configurations for different countries and the addition of RAP (Recycled Asphalt Pavement) systems.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant#collection",
      name: "Asphalt Mixing Plant — High Performance Series",
      description: "Atlas Technologies is among the top Asphalt Mixing Plant Manufacturers, offering advanced solutions for global infrastructure. Engineered for durability and precision, meeting NHAI-grade standards for highway construction.",
      url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant#itemlist",
        name: "Asphalt Mixing Plant — High Performance Series — Range",
        numberOfItems: 4,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "AMP-40 — Asphalt Mixing Plant (40 TPH)", description: "40 TPH compact asphalt mixing plant for small infrastructure projects with PLC-based automation.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant" },
          { "@type": "ListItem", position: 2, name: "AMP-100 — Asphalt Mixing Plant (100 TPH)", description: "100 TPH high-performance batching plant for highway construction requiring precise mix control.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant" },
          { "@type": "ListItem", position: 3, name: "AMP-160 — Asphalt Mixing Plant (160 TPH)", description: "160 TPH asphalt mixing plant with twin-shaft pugmill mixer and advanced SCADA monitoring.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant" },
          { "@type": "ListItem", position: 4, name: "AMP-200 — Asphalt Mixing Plant (200 TPH)", description: "200 TPH top-capacity asphalt mixing plant for national highway and expressway projects.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Plants", item: "https://www.atlastechnologiesindia.com/asphalt-plants" },
        { "@type": "ListItem", position: 3, name: "Asphalt Mixing Plant", item: "https://www.atlastechnologiesindia.com/asphalt-plants/asphalt-mixing-plant" },
      ],
    },
  ],
};

export default function Category() {
  const category_banner_data = {
    title: "Asphalt Mixing Plants",
    para: "Precision Asphalt Mixing Plants for Perfect Roads – From Artics to Sahara",
    img: "/images/comman/bg3.jpeg",
  };
  const category_intro_data = {
    subtitle: "Overview",
    title: "Where Engineering Meets Pavement Perfection",
    para: (
      <span>
        For over three decades, Atlas Technologies has been a trusted name in
        asphalt plant manufacturing and supply. With over{" "}
        <strong>2000+ installations across 35+ countries,</strong> our plants
        have paved highways, airports, and industrial roads worldwide. From
        high-volume stationary batch plants to rapid-deployment mobile units,
        our designs support up to <strong>30% RAP integration</strong> and
        deliver consistent performance in tough environments.
      </span>
    ),
    img: "/images/comman/intro.png",
  };

  const faqData2 = [
    {
      title:
        "1. What are the key factors to consider when choosing an asphalt mixing plant?",
      content: (
        <>
          When selecting an asphalt mixing plant, prioritize <b>capacity</b>,{" "}
          <b>mobility</b>, and <b>sustainability features</b>. Ensure the plant
          matches your project size (e.g., <b>20 TPH</b> for small projects or{" "}
          <b>320 TPH</b> for highways), offers flexibility (stationary or
          mobile), and integrates eco-friendly technologies like{" "}
          <b>low NOx burners</b> and <b>RAP systems</b> to reduce emissions and
          costs.
        </>
      ),
    },
    {
      title:
        "2. How can I reduce operational costs with an asphalt mixing plant?",
      content: (
        <>
          To reduce costs, choose a plant with <b>energy-efficient burners</b>{" "}
          and <b>RAP integration (up to 30%)</b> to minimize fuel consumption
          and raw material expenses. Additionally, opt for{" "}
          <b>modular designs</b> that save on installation and transportation
          costs, ensuring <b>long-term savings</b>.
        </>
      ),
    },
    {
      title:
        "3. What maintenance tips can help extend the life of my asphalt mixing plant?",
      content: (
        <>
          Regularly inspect and clean critical components like the{" "}
          <b>burner nozzles</b>, <b>screen sieves</b>, and{" "}
          <b>elevator chains</b>. Use <b>wear-resistant materials</b> for parts
          exposed to high abrasion, and follow a{" "}
          <b>preventive maintenance schedule</b> to avoid unexpected breakdowns
          and ensure consistent performance.
        </>
      ),
    },
    {
      title:
        "4. How does Atlas Technologies support clients after purchasing an asphalt mixing plant?",
      content: (
        <>
          Atlas Technologies provides <strong>24/7 emergency support</strong>{" "}
          and quick access to spare parts, ensuring minimal downtime. Our team
          also offers training for operators and seamless software upgrades
          through our <strong>PLC-based systems</strong> control panels, helping
          clients maximize plant efficiency and productivity. That’s why we are
          among the top choice for asphalt plant manufacturing and distribution
          in India and across the world.
        </>
      ),
    },
  ];

  const categories = ["Plants"];

  const data = {
    Plants: [
      {
        title: "Stationary Asphalt Batch Plants (ABP)",
        description: (
          <span>
            <ul className="pl-5 space-y-2 list-disc list-inside">
              <li>Capacities: 60–320 TPH</li>
              <li>
                Features: Twin-shaft mixers (1,000-5,000kg batches), high
                weighing accuracy
              </li>
              <li>"The gold standard for high-volume highway construction"</li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "/products/stationary-abp",
      },
      {
        title: "Mobile Asphalt Batch Plants (MABP)",
        description: (
          <span>
            <ul className="pl-5 space-y-2 list-disc list-inside">
              <li>Capacities: 80–160 TPH</li>
              <li>Features: Quick-relocation design, 72-hour setup</li>
              <li>"From jungle bases to mountain roads – mix anywhere"</li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Double Drum Asphalt Plant",
        description: (
          <span>
            <ul className="pl-5 space-y-2 list-disc list-inside">
              <li>Capacities: 40–150 TPH</li>
              <li>Features: Parallel-flow drums, optimized fuel efficiency</li>
              <li>
                "Where continuous production meets eco-conscious operations"
              </li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Counter Flow Asphalt Plant",
        description: (
          <span>
            <ul className="pl-5 space-y-2 list-disc list-inside">
              <li>Capacities: 40–150 TPH</li>
              <li>
                Features: Reverse airflow technology, up to 30% RAP
                compatibility
              </li>
              <li>"Urban-ready: Low emissions without compromising output"</li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Asphalt Drum Mix Plant",
        description: (
          <span>
            <ul className="pl-5 space-y-2 list-disc list-inside">
              <li>Capacities: 20–200 TPH</li>
              <li>Features: Single-drum simplicity, PLC-based automation</li>
              <li>"The workhorse for rural highways and industrial zones"</li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Mobile Asphalt Drum Mix Plant",
        description: (
          <span>
            <ul className="pl-5 space-y-2 list-disc list-inside">
              <li>Capacities: 20–150 TPH</li>
              <li>Features: Trailer-mounted, ≤48hr deployment</li>
              <li>
                "Emergency repairs or remote projects – ready when you are"
              </li>
            </ul>
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
    ],
    Machines: [
      {
        title: "Bitumen Decanter",
        description:
          "Eliminate dangerous manual transfers with military-grade precision, processing 4-25T batches at optimal temperatures. The silent workhorse behind every efficient asphalt operation",
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Bitumen Sprayer",
        description:
          "From highways to airport runways, our sprayers lay flawless tack coats with ±2°C temperature control and 3-6m adjustable spray bars. Because superior adhesion begins with perfect application",
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Mini Bitumen Sprayer",
        description:
          "When urban repairs or rural roads demand agility, our 2.5T mini sprayer delivers full-size performance in a compact frame. Zero overspray. Zero compromises",
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Wet Mix Plant",
        description:
          "Engineered to produce 100-300 TPH of stabilized base layers, these plants mix with ±0.5% moisture accuracy. Built to withstand heavy-duty use, it’s the go-to choice for infrastructure projects",
        image: "/images/comman/dump.png",
        link: "#",
      },
    ],
  };

  const faqData1 = [
    {
      title: "Latest Construction Technology",
      content: (
        <span>
          Equipped with <strong>high-efficiency burners</strong>,{" "}
          <strong>PLC-based controls</strong>, and optional{" "}
          <strong>RAP systems</strong> supporting up to{" "}
          <strong>30% integration.</strong>
        </span>
      ),
    },
    {
      title: "Flexibility in Plant Mobility",
      content: (
        <span>
          Choose from <strong>mobile</strong> or{" "}
          <strong>stationary configurations.</strong> Add-ons like{" "}
          <strong>liquid additive dosing</strong> and{" "}
          <strong>RAP modules</strong> are tailored to specific mix needs.
        </span>
      ),
    },
    {
      title: "Global Support and Reliability",
      content: (
        <span>
          With installations in <strong>35+ countries</strong> and{" "}
          <strong>round-the-clock support</strong>, we ensure{" "}
          <strong>reliable uptime</strong> and fast-response service globally.
        </span>
      ),
    },
    {
      title: "Sustainability and Efficiency",
      content: (
        <span>
          <strong>Advanced bag filters</strong> and{" "}
          <strong>energy-efficient components</strong> reduce emissions and
          power usage, helping meet <strong>environmental standards.</strong>
        </span>
      ),
    },
    {
      title: "Proven Track Record",
      content: (
        <span>
          With over <strong>35 years of experience</strong> and more than{" "}
          <strong>2000+ plants running in India alone,</strong> Atlas
          Technologies is trusted by contractors worldwide.
        </span>
      ),
    },
  ];

  const formcontent = {
    title: "Ready to Build? Let’s Talk!",
    description:
      "At Atlas Technologies, we’re more than equipment suppliers—we’re your partners in infrastructure success. Whether you’re planning a highway project or upgrading your asphalt production, our team of experts is here to help.",
  };
  return (
    <>
      <Head>
        <title>
          Asphalt Mixing Plant Manufacturers in India - Atlas Technologies
        </title>
        <meta
          name="description"
          content="Atlas Technologies manufactures and exports asphalt mixing plants designed to meet the high demands of modern road construction and global distribution networks."
        />
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
      <Category_intro data={category_intro_data} />
      <Expolre_category data={data} categories={categories} />
      <FAQSection1
        faqData={faqData1}
        title={"What Sets Atlas Asphalt Mixing Plants Apart"}
      />

      <ContactForm
        formcontent={formcontent}
        page={"Asphalt Mixing Plant Product Page"}
      />
      <FAQSection2 faqData={faqData2} bg={"#E7F1E9"} />
    </>
  );
}
