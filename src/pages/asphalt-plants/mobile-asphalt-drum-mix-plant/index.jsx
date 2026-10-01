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
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant#product",
  name: "Mobile Asphalt Drum Mix Plant - MDM Series",
  image: "https://www.atlastechnologiesindia.com/assets/images/mobile-asphalt-drum-mix-plant.jpg",
  description: "As a leading drum mix plant manufacturer, Atlas Technologies provides highly portable solutions for rapid road construction. Our mobile drum mix plant is engineered with high-grade drum mix plant components, ensuring reliable continuous production, fuel efficiency, and quick setup at remote sites.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-MDM-MOBILE",
  mpn: "MDM-SERIES",
  category: "Construction Machinery > Asphalt Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Mobility", value: "Fully Portable / Wheel-mounted Chassis" },
    { "@type": "PropertyValue", name: "Capacity Range", value: "40 TPH to 150 TPH" },
    { "@type": "PropertyValue", name: "Mixing Process", value: "Parallel Flow Continuous Mixing" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the key drum mix plant components in the Atlas mobile series?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary drum mix plant components include the cold aggregate feeder bins, a high-efficiency drying and mixing drum, a fuel-efficient burner, a bitumen tank, a mineral filler unit, and a fully automated PLC-based control cabin, all mounted on a sturdy mobile chassis.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can the mobile asphalt drum mix plant be set up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our mobile plants are designed for rapid deployment. Because the components are pre-wired and mounted on a wheel-based chassis, a typical site setup and commissioning can be completed within 2 to 4 days on a prepared level surface.",
      },
    },
    {
      "@type": "Question",
      name: "What is the capacity range of Atlas mobile drum mix plants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas Technologies manufactures mobile drum mix plants in capacities ranging from 40 TPH to 150 TPH, making them ideal for everything from rural road patch-work to large-scale highway corridor construction.",
      },
    },
    {
      "@type": "Question",
      name: "Does this mobile plant meet environmental emission standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every plant can be equipped with either a primary dust collector and a secondary venturi-type wet scrubber or a high-efficiency baghouse filter system to ensure particulate emissions are well within permissible local and international limits.",
      },
    },
    {
      "@type": "Question",
      name: "What type of fuel can be used in the mobile drum mix plant burner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The high-efficiency burners are designed for versatility and can be configured to run on Diesel, LDO, or Natural Gas, providing flexibility for contractors working in different geographical regions.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant#collection",
      name: "Mobile Asphalt Drum Mix Plant — MDM Series",
      description: "As a leading drum mix plant manufacturer, Atlas Technologies provides highly portable solutions for rapid road construction. Engineered with high-grade components for reliable continuous production and fuel efficiency at remote sites.",
      url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/asphalt-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant#itemlist",
        name: "Mobile Asphalt Drum Mix Plant — MDM Series — Range",
        numberOfItems: 4,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "MDM-40 — Mobile Asphalt Drum Mix Plant (40 TPH)", description: "40 TPH fully portable wheel-mounted drum mix plant for rural road and patch-work projects.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant" },
          { "@type": "ListItem", position: 2, name: "MDM-90 — Mobile Asphalt Drum Mix Plant (90 TPH)", description: "90 TPH mobile drum mix plant with parallel flow continuous mixing and on-board generator option.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant" },
          { "@type": "ListItem", position: 3, name: "MDM-120 — Mobile Asphalt Drum Mix Plant (120 TPH)", description: "120 TPH heavy-duty mobile drum mix plant with multi-fuel burner for remote highway sites.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant" },
          { "@type": "ListItem", position: 4, name: "MDM-150 — Mobile Asphalt Drum Mix Plant (150 TPH)", description: "150 TPH high-capacity mobile drum mix plant for large-scale continuous asphalt production.", url: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Plants", item: "https://www.atlastechnologiesindia.com/asphalt-plants" },
        { "@type": "ListItem", position: 3, name: "Mobile Asphalt Drum Mix Plant", item: "https://www.atlastechnologiesindia.com/asphalt-plants/mobile-asphalt-drum-mix-plant" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Mobile Asphalt Drum Mix <br className="hidden md:block" /> Plants
        [20-150 TPH]
      </span>
    ),
    para: "Rapid-Deployment Mixing for Remote Projects & Emergency Repairs",
    img: "/images/admp/newbannerpageadmp.jpg",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "MDM-25",
      minCapacity: 20,
      maxCapacity: 30,
      tags: "Perfect for small-scale projects",
      mixerSize: null,
      url: "/mdm25-20-30tph",
      img: "/images/admp/mdm25-4.jpg",
    },
    {
      name: "MDM-35",
      minCapacity: 30,
      maxCapacity: 40,
      tags: "Designed for medium-sized operations",
      mixerSize: null,
      url: "/mdm35-30-40tph",
      img: "/images/mdm/mdm-35-04.webp",
    },
    {
      name: "MDM-45",
      minCapacity: 40,
      maxCapacity: 60,
      tags: "Ideal for medium to large-scale projects",
      mixerSize: null,
      url: "mdm-45",
      img: "/images/mdm/mdm-45-04.webp",
    },
    {
      name: "MDM-50",
      minCapacity: 60,
      maxCapacity: 90,
      tags: "A robust solution for large-scale infrastructure projects",
      mixerSize: null,
      url: "mdm-50",
      img: "/images/admp/mdm-50-1.jpg",
    },
    {
      name: "MDM-60",
      minCapacity: 90,
      maxCapacity: 120,
      tags: "Engineered for high-output performance",
      mixerSize: null,
      url: "mdm-60",
      img: "/images/admp/mdm-60-1.jpg",
    },
    {
      name: "MDM-65",
      minCapacity: 120,
      maxCapacity: 150,
      tags: "The ultimate choice for megaprojects",
      mixerSize: null,
      url: "mdm-65",
      img: "/images/admp/mdm-65-1.jpg",
    },
  ];
  const category_intro_data = {
    subtitle: "Overview",
    title: "Ready to Mix 24/7: Asphalt Production On-The-Go",
    para: (
      <span>
        Atlas Mobile Drum Mix Plants deliver{" "}
        <strong>full production quality</strong> without permanent foundations.
        Built for mobility and fast commissioning, these plants come in
        <strong>chassis-mounted modules with axles,</strong> kingpin connectors,
        pneumatic braking, and safety lighting for{" "}
        <strong>hassle-free transport.</strong> The{" "}
        <strong>rugged design,</strong> minimal foundation requirements, and
        reliable components ensure smooth operation even in remote or
        challenging job sites.
      </span>
    ),
    img: "/images/admp/mdm-45-5.jpg",
    bg: true,
  };
  const faqData = [
    {
      title:
        "1. How does Atlas ensure minimal downtime with its Mobile Drum Mix Plants? ",
      content: (
        <span>
          Atlas Mobile Drum Mix Plants are designed for reliability, with
          features like{" "}
          <span className="font-bold">
            durable components and easy maintenance.
          </span>{" "}
          Our <span className="font-bold">24/7 emergency support</span> and
          quick access to spare parts ensure your plant stays operational even
          in emergencies.
        </span>
      ),
    },
    {
      title:
        "2. What customization options are available for Atlas Mobile Drum Mix Plants?",
      content: (
        <span>
          Atlas offers a range of customization options, including integration
          of space for generators into the chassis,{" "}
          <span className="font-bold">
            pollution control units, and multi-fuel burners.
          </span>{" "}
          We also provide flexible configurations for capacities ranging from 20
          TPH to 150 TPH, ensuring your plant meets specific project
          requirements
        </span>
      ),
    },
    {
      title: "3. How do you prevent theft at remote job sites?",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">GPS trackers</span> with geofencing
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Drum lock systems</span>
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Steel security cages</span> for control
            panels
          </li>
        </ul>
      ),
    },
    {
      title:
        "4. How does Atlas ensure consistent asphalt quality with its Mobile Drum Mix Plants?",
      content: (
        <span>
          Our mobile drum mix plants feature{" "}
          <span className="font-bold">specially designed drum flights</span>
          that ensure homogeneous mixing of aggregates and bitumen.
          Additionally,{" "}
          <span className="font-bold">
            insulated bitumen tanks and hot oil jacketed pipelines
          </span>{" "}
          maintain consistent temperatures, ensuring high-quality asphalt
          production.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Rapid Deployment",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Pre-wired junction boxes</span> cut
            electrical setup time significantly
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Modular chassis design</span> allows
            installation in just a few days
          </li>
        </ul>
      ),
    },
    {
      title: "Road-Legal Design",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Pneumatic braking system</span> and
            road-safety lighting
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">King pin connectors</span> for fast
            trailer hookup & relocation
          </li>
        </ul>
      ),
    },
    {
      title: "Low-Cost Operation",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">
              Flights designed for maximum heat transfer
            </span>{" "}
            reduce fuel consumption
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Insulated bitumen tanks</span> minimize
            heat loss and save energy
          </li>
        </ul>
      ),
    },
    {
      title: "All-Terrain Ready",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Reinforced chassis</span> withstands
            corrugated roads
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">
              A wide range of ambient temperatures
            </span>{" "}
            operational range
          </li>
        </ul>
      ),
    },
    {
      title: "Future-Ready Upgrades",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">RAP integration</span> for (up to 15%),
            optional
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Choice of dust-control systems</span>,
            including wet collectors
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
      name: "Asphalt Drum Mix Plant",
      url: "/asphalt-plants/asphalt-drum-mix-plant",
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
        <title>Mobile Asphalt Drum Mix Plant 20–150 TPH — Manufacturer & Supplier | Atlas Technologies</title>

        <meta name="description" content="Chassis-mounted, road-legal, Portable foundation — Atlas portable asphalt drum mix plant manufacturer with 6 models from 20 to 150 TPH. Rapid deployment. Get specs and price." />

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
        title={"What Makes Atlas Mobile Drum Mix Plants the Best Choice?"}
        img={"/images/admp/mdm-60-1.jpg"}
      />

      <ContactForm
        formcontent={formcontent}
        page={
          "Mobile Asphalt Drum Mix Plants [20-150 TPH] (Product Listing Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
