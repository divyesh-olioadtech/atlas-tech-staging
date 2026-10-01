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
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant#product",
  name: "Mini Concrete Batching Plant - RM Series",
  image: "https://www.atlastechnologiesindia.com/assets/images/mini-concrete-batching-plant.jpg",
  description: "Atlas Technologies manufactures the industry-leading Mini Concrete batching Plant. This Small Concrete Batch Plant is a Compat concrete Batching Plant solution designed for rural road projects and small construction sites, featuring a reversible drum mixer on a highly portable single chassis.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-RM-SERIES",
  mpn: "RM-10-15-20",
  category: "Construction Machinery > Concrete Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Mixer Technology", value: "Reversible Drum Mixer" },
    { "@type": "PropertyValue", name: "Production Capacity", value: "8 m3/hr to 13 m3/hr" },
    { "@type": "PropertyValue", name: "Chassis Design", value: "Single Chassis with Towing Arrangement" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the reversible drum improve mixing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reversible drums mix in one direction and discharge in the reverse; the mixing flights and drum geometry promote material turnover and reduce internal build-up, helping produce consistent batches for mini plant volumes.",
      },
    },
    {
      "@type": "Question",
      name: "What projects suit Mini Concrete Batching Plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small to medium civil works, like rural roads, pavements, building foundations, small precast yards, and any application that benefits from on-site, low-volume ready-mix production in remote or constrained sites.",
      },
    },
    {
      "@type": "Question",
      name: "How is water addition controlled in the Mini Concrete Batching Plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Water tanks are mounted on a load cell so water is weighed for each batch. A pump with level sensing automatically refills the tank as needed.",
      },
    },
    {
      "@type": "Question",
      name: "What is the advantage of the single-lever lubrication system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The single-lever lubrication system simplifies maintenance by lubricating all moving parts (up to 14 points) with a single pull, ensuring smooth operation and reducing wear.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant#collection",
      name: "Mini Concrete Batching Plant — RM Series",
      description: "Atlas Technologies manufactures the industry-leading Mini Concrete Batching Plant. Designed for rural road projects and small construction sites, featuring a reversible drum mixer on a highly portable single chassis.",
      url: "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/concrete-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant#itemlist",
        name: "Mini Concrete Batching Plant — RM Series — Range",
        numberOfItems: 3,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "RM-10 — Mini Concrete Batching Plant (8 m³/hr)", description: "8 m³/hr reversible drum mini concrete plant on single towable chassis for rural roads.", url: "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant" },
          { "@type": "ListItem", position: 2, name: "RM-15 — Mini Concrete Batching Plant (10 m³/hr)", description: "10 m³/hr compact batching plant with load-cell water weighing for consistent small-site batching.", url: "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant" },
          { "@type": "ListItem", position: 3, name: "RM-20 — Mini Concrete Batching Plant (13 m³/hr)", description: "13 m³/hr mini plant with 14-point single-lever lubrication system for low-maintenance remote operations.", url: "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Concrete Plants", item: "https://www.atlastechnologiesindia.com/concrete-plants" },
        { "@type": "ListItem", position: 3, name: "Mini Concrete Batching Plant — RM Series", item: "https://www.atlastechnologiesindia.com/concrete-plants/mini-concrete-batching-plant" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Mini Concrete Batching
        <br className="hidden md:block" /> Plants [8-13 m³/hr]
      </span>
    ),
    para: "Compact & Mobile Solutions for Remote Concrete Production",
    img: "/images/acmp/Mini Concrete plant.png",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "READY MIX-RM-800 — Electric",
      minCapacity: 8,
      maxCapacity: 9,
      tags: "Practical output: 8–9 m³/hr | Best For: Small RMC / Rural Projects",
      bestFor: "Small / Rural Projects",
      url: "/rm-800-electric",
      img: "/images/concrete-plants/newpagefive.webp",
    },
    {
      name: "READY MIX-RM-1050 — Electric",
      minCapacity: 12,
      maxCapacity: 13,
      tags: "Practical output: 12–13 m³/hr | Best For: Medium / Foundation Work",
      bestFor: "Medium / Foundation Work",
      url: "/rm-1050-electric",
      img: "/images/concrete-plants/newpageseven.webp",
    },
    {
      name: "READY MIX-RM-800 — Diesel",
      minCapacity: 8,
      maxCapacity: 9,
      tags: "Practical output: 8–9 m³/hr | Best For: Remote / Off-grid Projects",
      bestFor: "Small / Remote Projects",
      url: "/rm-800-diesel",
      img: "/images/concrete-plants/newpagesix.webp",
    },
    {
      name: "READY MIX-RM-1050 — Diesel",
      minCapacity: 12,
      maxCapacity: 13,
      tags: "Practical output: 12–13 m³/hr | Best For: Medium / Remote Projects",
      bestFor: "Medium / Remote Projects",
      url: "/rm-1050-diesel",
      img: "/images/concrete-plants/newpageeight.webp",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Big Performance in Small Footprints",
    para: (
      <span>
        Atlas Mini Concrete Batching Plants are built for small-scale projects
        that need reliable, cost-effective ready-mix on site. The mini range
        (RM-800 and RM-1050) uses a reversible drum mixer, compact chassis, and
        simple towing arrangement so crews can set up quickly at remote or
        congested sites. <br /> <br /> Available in diesel-engine and electric
        motor drive options to suit sites with limited grid power.
      </span>
    ),
    img: "/images/concrete-plants/newpageeight.webp",
    bg: true,
  };
  const faqData = [
    {
      title: "1. How does the reversible drum improve mixing?",
      content: (
        <span>
          Reversible drums mix in one direction and discharge in the reverse;
          the mixing flights and drum geometry promote material turnover and
          reduce internal build-up, helping produce consistent batches for mini
          plant volumes. (Cycle times vary with mix design and batch size.)
        </span>
      ),
    },
    {
      title: "2. What projects suit Mini Concrete Batching Plants?",
      content: (
        <span>
          Small to medium civil works, like rural roads, pavements, building
          foundations, small precast yards, and any application that benefits
          from on-site, low-volume ready-mix production. Suitable for remote or
          constrained sites.
        </span>
      ),
    },
    {
      title:
        "3. How is water addition controlled in the Mini Concrete Batching Plants?",
      content: (
        <span>
          Water tanks (RM-800: ~200 L, RM-1050: ~250 L) are mounted on a load
          cell so water is weighed for each batch. A pump with level sensing can
          automatically refill the tank when needed.
        </span>
      ),
    },
    {
      title: "4. What is the advantage of the single-lever lubrication system?",
      content: (
        <span>
          The single-lever lubrication system simplifies maintenance by
          lubricating all moving parts (11 points for RM-800, 14 points for
          RM-1050) with a single pull, ensuring smooth operation and reducing
          wear and tear.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Extreme Mobility",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>
            Lightweight, single-frame plants can be shifted by pickup, tractor,
            or small truck
          </li>
          <li>
            Require no elaborate civil foundation (just level compacted ground)
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Batching",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>
            Individual load cells for aggregate bins and a load-cell-mounted
            water tank for accurate weighing
          </li>
          <li>
            Auto water refill (pump with level sensing) keeps the water tank
            topped up during operation
          </li>
        </ul>
      ),
    },
    {
      title: "Maintenance Made Simple",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>
            Central grease bank (multi-point) for straightforward lubrication
          </li>
          <li>Replaceable drum and paddles for extended service life</li>
          <li>V-belt-driven drum (no gearbox to service)</li>
        </ul>
      ),
    },
    {
      title: "Smart Control",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>
            Standard basic digital batching panel; optional microprocessor
            upgrades for recipe storage
          </li>
          <li>
            Electronic weighing of aggregates, cement, and water for improved
            batch accuracy (±1–2% typical)
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
        <title>Mini Concrete Batching Plants Manufacturer | 8–13 m³/hr | Atlas Technologies</title>
        <meta name="description" content="Concrete on site, same day, no civil work — Atlas mini concrete batching plant runs 8–13 m³/hr on diesel or electric, tows behind a pickup. For remote and rural projects. Get price." />
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
        title={"Why Do Contractors Choose Atlas Mini Plants?"}
        img="/images/concrete-plants/newpageseven.webp"
      />

      <ContactForm
        formcontent={formcontent}
        page={
          "Mini Concrete Batching Plants [8-13 m³/hr] (Product Listing Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
