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
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer#product",
  name: "Stationary Concrete Batching Plant with Planetary Mixer",
  image: "https://www.atlastechnologiesindia.com/assets/images/stationary-planetary-concrete-plant.jpg",
  description: "Atlas Technologies manufactures the premier Planetary Mixer Concrete Plant. This Stationary Concrete Batching Plant is engineered for high performance concrete production with a capacity range of 30 m³/h to 60 m³/h. It is the preferred Precast Concrete Batching Plant for high-strength structural elements.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-S-PLANETARY-30-60",
  mpn: "S-PLC-SERIES",
  category: "Construction Machinery > Concrete Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Production Capacity", value: "30 m³/h to 60 m³/h" },
    { "@type": "PropertyValue", name: "Mixing Action", value: "Counter-Current Planetary stars and scrapers" },
    { "@type": "PropertyValue", name: "Ideal Use Case", value: "Precast concrete and zero-slump mixes" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes planetary mixers better for specialty concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Planetary mixers feature overlapping blades and high torque, ensuring superior homogeneity and consistency, even for challenging mixes like SCC, fiber-reinforced, or colored concrete.",
      },
    },
    {
      "@type": "Question",
      name: "Can the plant handle fiber-reinforced concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the unique blade movement ensures fibers are dispersed without balling.",
      },
    },
    {
      "@type": "Question",
      name: "How does the planetary mixer handle high-strength concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The high-torque mechanism and overlapping blades ensure thorough mixing, making it perfect for high-strength mixes without segregation.",
      },
    },
    {
      "@type": "Question",
      name: "What safety features are included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safety features include an emergency stop system, electrical/mechanical interlocks on mixer covers, overload motor protection, and guards on moving parts.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer#collection",
      name: "Stationary Concrete Batching Plant with Planetary Mixer",
      description: "Atlas Technologies manufactures the premier Planetary Mixer Concrete Plant. Engineered for high performance concrete production with a capacity range of 30 m³/hr to 60 m³/hr — the preferred Precast Concrete Batching Plant for high-strength structural elements.",
      url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/concrete-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer#itemlist",
        name: "Stationary Concrete Batching Plant with Planetary Mixer — Range",
        numberOfItems: 3,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "PLC-30 — Planetary Mixer Concrete Plant (30 m³/hr)", description: "30 m³/hr planetary mixer plant for specialty precast and SCC applications.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer" },
          { "@type": "ListItem", position: 2, name: "PLC-45 — Planetary Mixer Concrete Plant (45 m³/hr)", description: "45 m³/hr high-torque planetary plant for fiber-reinforced and colored concrete production.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer" },
          { "@type": "ListItem", position: 3, name: "PLC-60 — Planetary Mixer Concrete Plant (60 m³/hr)", description: "60 m³/hr top-capacity planetary mixer concrete plant for large precast facilities and structural projects.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Concrete Plants", item: "https://www.atlastechnologiesindia.com/concrete-plants" },
        { "@type": "ListItem", position: 3, name: "Stationary Concrete Batching Plant with Planetary Mixer", item: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-planetary-mixer" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Planetary Mixers Concrete Batching
        <br className="hidden md:block" />
        Plants [30-60 m³/hr]
      </span>
    ),
    para: "Stationary Plants for Precast, SCC & High-Performance Concrete",
    img: "/images/ascb/pan.JPG",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "ATMIX PLUS 30 (Planetary)",
      minCapacity: 30,
      maxCapacity: 30,
      tags: "Best For: Small precast/SCC batches",
      bestFor: "Precast Yards",
      url: "/atmix-plus-30",
    },
    {
      name: "ATMIX PLUS 45 (Planetary)",
      minCapacity: 45,
      maxCapacity: 45,
      tags: "Best For: Medium-scale precast production",
      bestFor: "Small-Scale Projects",
      url: "/atmix-plus-45",
    },
    {
      name: "ATMIX PLUS 60 (Planetary)",
      minCapacity: 60,
      maxCapacity: 60,
      tags: "Best For: Large precast/specialty RMC",
      bestFor: "Medium-Scale Projects",
      url: "/atmix-plus-60",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Superior Mixing Performance for Specialty Concrete",
    para: (
      <span>
        Atlas Industries’ ASCB series stationary concrete batching plants, when
        equipped with a planetary mixer option, are designed for concrete
        applications where precision, surface finish, and mix homogeneity are
        critical, including precast elements, self-compacting concrete (SCC),
        fiber-reinforced mixes, ultra-high-strength grades, and architectural
        concrete. <br /> <br /> The planetary mixer option delivers overlapping,
        multi-directional mixing action and consistent quality batch after
        batch. The mixing mechanism also enables high torque for stiff and
        specialty mixes.
      </span>
    ),
    img: "/images/comman/product_dump.png",
    bg: true,
  };
  const faqData = [
    {
      title: "1. What makes planetary mixers better for specialty concrete?",
      content: (
        <span>
          Planetary mixers feature overlapping blades and high torque, ensuring
          superior homogeneity and consistency, even for challenging mixes like
          SCC, fiber-reinforced, or colored concrete.
        </span>
      ),
    },
    {
      title: "2. Can the plant handle fiber-reinforced concrete?",
      content: (
        <span>
          Yes, the unique blade movement ensures fibers are dispersed without
          balling.
        </span>
      ),
    },
    {
      title: "3. How does the planetary mixer handle high-strength concrete?",
      content: (
        <span>
          The high-torque mechanism and overlapping blades ensure thorough
          mixing, making it perfect for high-strength mixes without segregation.
        </span>
      ),
    },
    {
      title: "4. What safety features are included?",
      content: (
        <span>
          <ul className="">
            <li>
              <span className="font-bold">Emergency stop</span> system
            </li>
            <li>Electrical/mechanical interlocks on mixer covers</li>
            <li>Overload motor protection</li>
            <li>Guards on moving parts</li>
          </ul>
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Unmatched Mixing Quality",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Planetary action
            with overlapping blades for full material circulation
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Superior
            uniformity for SCC, high-strength, and colored concrete
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Batching & Control",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Aggregate,
            cement, water, and admixtures weighed via load cells
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> PLC-based
            automation with recipe storage and production logging
          </li>
        </ul>
      ),
    },
    {
      title: "Rugged Construction",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Heavy-duty steel
            frame designed for continuous operation
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Replaceable
            wear-resistant liners and Ni-hard mixing blades
          </li>
        </ul>
      ),
    },
    {
      title: "Environmental Care",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Bag filter dust
            collection at cement silo vents
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Covered transfer
            points to reduce airborne dust
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
        <title>Planetary Concrete Mixer Batching Plants | 30–60 m³/hr | Atlas Technologies</title>
        <meta name="description" content="Standard mixers leave corners. Atlas planetary concrete mixer uses overlapping blades and high torque — built for SCC, fibre-reinforced and precast. 3 models, 30–60 m³/hr." />
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
        title={"Why Contractors Choose Atlas Planetary Mixer Plants"}
      />

      <ContactForm
        formcontent={formcontent}
        page={
          "Planetary Mixers Concrete Batching Plants [30-60 m³/hr] (Product Listing Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
