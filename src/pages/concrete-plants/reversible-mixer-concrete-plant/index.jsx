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
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant#product",
  name: "Reversible Mixer Concrete Plant - [10-25 m³/hr] RM Series",
  image: "https://www.atlastechnologiesindia.com/assets/images/reversible-drum-mixer.jpg",
  description: "Atlas Technologies offers a high-performance Reversible Mixer Concrete Plant. This Reversible Drum Concrete Mixer is a versatile Reversible Concrete Mixer designed for small to medium sites. As a portable concrete mixer with hopper, it functions as a self-loading concrete batching unit for rural and urban infrastructure projects.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-RM-SERIES-PRO",
  mpn: "RM-SERIES",
  category: "Construction Machinery > Concrete Mixers",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Mixing Mechanism", value: "Reversible Drum (Forward Mix, Reverse Discharge)" },
    { "@type": "PropertyValue", name: "Loading System", value: "Hydraulic Hopper / Skip Hoist" },
    { "@type": "PropertyValue", name: "Mobility", value: "Single Chassis with Pneumatic Tires" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does a Reversible Mixer Concrete Plant optimize the mixing cycle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The plant uses a dual-direction drum. Forward rotation ensures thorough mixing of aggregates, cement, and water, while reverse rotation facilitates rapid and complete discharge, significantly reducing cycle times.",
      },
    },
    {
      "@type": "Question",
      name: "What makes the Reversible Drum Concrete Mixer ideal for remote sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Built on a single, heavy-duty chassis, its compact design is easily towable. As a self-loading unit, it eliminates the need for additional material handling equipment on-site.",
      },
    },
    {
      "@type": "Question",
      name: "What are the capacity options for an Atlas Reversible Concrete Mixer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas offers capacities ranging from 10 to 25 cubic meters per hour, engineered for consistent quality in pavements, small buildings, and rural road construction.",
      },
    },
    {
      "@type": "Question",
      name: "Is the portable concrete mixer with hopper automated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it features a centralized control panel with digital weighing systems for water and aggregates, ensuring batches meet strength specifications with minimal operator intervention.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant#collection",
      name: "Reversible Mixer Concrete Plant — RM Series",
      description: "Atlas Technologies offers a high-performance Reversible Mixer Concrete Plant. This versatile Reversible Drum Concrete Mixer functions as a self-loading concrete batching unit for rural and urban infrastructure projects.",
      url: "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/concrete-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant#itemlist",
        name: "Reversible Mixer Concrete Plant — RM Series — Range",
        numberOfItems: 4,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "RM-800 — Reversible Mixer Concrete Plant (10 m³/hr)", description: "10 m³/hr self-loading reversible drum plant for small building and pavement projects.", url: "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant" },
          { "@type": "ListItem", position: 2, name: "RM-1050 — Reversible Mixer Concrete Plant (15 m³/hr)", description: "15 m³/hr reversible drum plant with hydraulic hopper and digital weighing for rural infrastructure.", url: "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant" },
          { "@type": "ListItem", position: 3, name: "RM-1200 — Reversible Mixer Concrete Plant (20 m³/hr)", description: "20 m³/hr high-output reversible mixer plant for mid-scale civil projects.", url: "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant" },
          { "@type": "ListItem", position: 4, name: "RM-1500 — Reversible Mixer Concrete Plant (25 m³/hr)", description: "25 m³/hr heavy-duty reversible concrete plant on pneumatic tires for maximum site mobility.", url: "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Concrete Plants", item: "https://www.atlastechnologiesindia.com/concrete-plants" },
        { "@type": "ListItem", position: 3, name: "Reversible Mixer Concrete Plant — RM Series", item: "https://www.atlastechnologiesindia.com/concrete-plants/reversible-mixer-concrete-plant" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Reversible Mixer Concrete
        <br className="hidden md:block" />
        Plants [10-25 m³/hr]
      </span>
    ),
    para: "Dual-Direction Mixing Tech for Uniform Concrete Quality",
    img:  "/images/concrete-plants/newimage-nine.webp",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "RM 10",
      minCapacity: 10,
      maxCapacity: 10,
      tags: "Mixer Size (approx.): 400 Liters | Best For: Minor/rural jobs, blocks",
      bestFor: "Small / Rural Projects",
      url: "/amcb-rm-10",
      img : "/images/concrete-plants/newimage-fourteen.webp"
    },
    {
      name: "RM 15",
      minCapacity: 15,
      maxCapacity: 15,
      tags: "Mixer Size (approx.): 600 Liters | Best For: Small RMC/precast supply",
      bestFor: "Small RMC / Precast Supply",
      url: "/amcb-rm-15", 
      img : "/images/concrete-plants/newimage-eleven.webp"
    },
    {
      name: "RM 20",
      minCapacity: 20,
      maxCapacity: 20,
      tags: "Mixer Size (approx.): 800 Liters | Best For: Medium site batching",
      bestFor: "Medium-Scale Projects",
      url: "/amcb-rm-20",
      img : "/images/concrete-plants/newimage-six.webp"
    },
    {
      name: "RM 25",
      minCapacity: 25,
      maxCapacity: 25,
      tags: "Mixer Size (approx.): 1,050 Liters | Best For: Larger rural projects",
      bestFor: "Large Rural Projects",
      url: "/amcb-rm-25",
      img : "/images/concrete-plants/newimage-fifteen.webp"
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Efficient Mixing for Small-to-Medium Projects",
    para: (
      <span>
        Atlas Reversible Mixer Concrete Plants deliver{" "}
        <span className="font-bold">
          high homogeneity concrete with lower energy consumption,
        </span>{" "}
        making it perfect for remote or confined construction sites. These
        plants are ideal for applications like rural roads, pavements, building
        foundations, and small precast units.
        <br /> <br />
        The compact and mobile design ensures easy transportation and quick
        setup, making them perfect for projects with space constraints or
        frequent site shifts.
      </span>
    ),
    img: "/images/concrete-plants/newimage-nine.webp",
    bg: true,
  };
  const faqData = [
    {
      title: "1. What types of concrete are suitable for reversible mixers?",
      content: (
        <span>
          Reversible drum mixers are commonly used for standard concrete grades
          and general-purpose mixes at small batch sizes. They work well for
          typical site mixes (for example, normal-grade mixes used in roads,
          pavements and foundations). Choice of aggregate size and mix design
          will determine final suitability.
        </span>
      ),
    },
    {
      title: "2. How does reversible mixing improve concrete quality?",
      content: (
        <span>
          Because the drum uses different blade sets/spiral flights for mixing
          and discharging, the reversing action promotes thorough radial and
          axial turnover of the charge, reducing unmixed pockets and internal
          build-up. This yields more consistent batches compared with
          non-reversing drums. (For very high-performance or specialty mixes,
          twin-shaft or pan mixers are still preferred.)
        </span>
      ),
    },
    {
      title:
        "3. Can reversible mixers handle fly-ash or SCM (supplementary cementitious material) mixes?",
      content: (
        <span>
          Yes. Reversible drums are used with mixes containing fly ash or other
          SCMs. The drum’s mixing and scraping action helps avoid
          lumping/build-up (commonly called balling) that can occur with
          high-ash mixes, but mix design and batching procedure should be
          validated on site.
        </span>
      ),
    },
    {
      title: "4. What safety features are standard?",
      content: (
        <span>
          Typical factory and industry practice for portable batching plants
          includes safety interlocks, emergency stop(s), mechanical drum
          locks/locking arrangements during loading & maintenance, and overload
          protection on drives. Exact safeties and options vary by model and can
          be confirmed on the model spec sheet.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Reversible Drum Action",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>
            Blades and spiral flights mix in forward rotation and discharge in
            reverse
          </li>
          <li>
            Eliminates unmixed pockets by ensuring full turnover of materials
          </li>
          <li>Reduces build-up inside the drum, extending service intervals</li>
        </ul>
      ),
    },
    {
      title: "Mobile & Compact",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Single-chassis design with foldable panels for transport</li>
          <li>
            Towable with simple king-pin arrangement; easy relocation between
            sites
          </li>
          <li>Operates directly on compacted ground, no foundation needed</li>
        </ul>
      ),
    },
    {
      title: "Low Maintenance",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Fewer moving parts compared to twin-shaft mixers</li>
          <li>Accessible lubrication points simplify servicing</li>
          <li>
            Designed for long life with durable, wear-resistant components
          </li>
        </ul>
      ),
    },
    {
      title: "Fuel / Power Flexibility",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Available with electric motor or diesel engine drive</li>
          <li>Suitable for remote sites with limited or no grid power</li>
          <li>
            Offers operational continuity across varied project conditions
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
        <title>Reversible Concrete Mixer Plants Manufacturer | 10–25 m³/hr | Atlas Technologies</title>
        <meta name="description" content="Confined site, remote location, no elaborate setup — Atlas reversible mixer concrete plant runs 10 to 25 m³/hr on diesel or electric. Moves with your project. Get price." />
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
        title={"Why Choose Atlas Reversible Mixers?"}
        img={"/images/concrete-plants/newimage-fourteen.webp"}
      />

      <ContactForm
        formcontent={formcontent}
        page={
          "Reversible Mixer Concrete Plants [10-25 m³/hr] (Product Listing Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
