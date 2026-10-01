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
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer#product",
  name: "Stationary Concrete Batching Plant with Pan Mixer",
  image: "https://www.atlastechnologiesindia.com/assets/images/stationary-pan-mixer-concrete-plant.jpg",
  description: "Atlas Technologies manufactures the premier Pan Mixer Concrete Plant. This Stationary Concrete Batching Plant is engineered for cost-effective concrete batching and standard RMC production. Utilizing a heavy-duty Concrete Pan Mixer, it is the ideal choice for M20-M40 grade concrete and precast block production.",
  brand: { "@type": "Brand", name: "Atlas" },
  sku: "ATLAS-S-PAN",
  mpn: "S-PAN-SERIES",
  category: "Construction Machinery > Concrete Plants",
  offers: {
    "@type": "Offer",
    url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "Atlas Technologies India" },
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Mixer Type", value: "Stationary Concrete Pan Mixer" },
    { "@type": "PropertyValue", name: "Concrete Grade", value: "M20 to M40" },
    { "@type": "PropertyValue", name: "Power Requirement", value: "30-50 kW (varies by model)" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of concrete are suitable for pan mixers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pan mixers are ideal for standard mixes (M20–M40) with normal workability (75–100mm slump). They are commonly used in precast block production and standard RMC projects.",
      },
    },
    {
      "@type": "Question",
      name: "How does a pan mixer compare to a twin shaft mixer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pan mixers offer a more economical solution with a gentler mixing action. They are best suited for projects that do not require high-strength or specialty fiber-reinforced concrete.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upgrade to automated controls later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Atlas pan mixer plants are designed with modularity in mind, allowing for future upgrades to fully automated PLC-based control systems as project needs grow.",
      },
    },
    {
      "@type": "Question",
      name: "What power supply is required for the pan mixer plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard models typically require between 30–50 kW depending on the production capacity. Specific electrical requirements vary by model; consult the technical spec sheet for details.",
      },
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer#collection",
      name: "Stationary Concrete Batching Plant with Pan Mixer",
      description: "Atlas Technologies manufactures the premier Pan Mixer Concrete Plant. Engineered for cost-effective concrete batching and standard RMC production, ideal for M20–M40 grade concrete.",
      url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/concrete-plants#collection" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer#itemlist",
        name: "Stationary Concrete Batching Plant with Pan Mixer — Range",
        numberOfItems: 3,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "PAN-20 — Pan Mixer Concrete Plant (20 m³/hr)", description: "20 m³/hr stationary pan mixer plant for standard RMC and precast block production.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer" },
          { "@type": "ListItem", position: 2, name: "PAN-30 — Pan Mixer Concrete Plant (30 m³/hr)", description: "30 m³/hr pan mixer plant for M20–M40 grade concrete with modular PLC upgrade path.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer" },
          { "@type": "ListItem", position: 3, name: "PAN-45 — Pan Mixer Concrete Plant (45 m³/hr)", description: "45 m³/hr high-output stationary pan mixer plant for urban paving and precast production.", url: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Concrete Plants", item: "https://www.atlastechnologiesindia.com/concrete-plants" },
        { "@type": "ListItem", position: 3, name: "Stationary Concrete Batching Plant with Pan Mixer", item: "https://www.atlastechnologiesindia.com/concrete-plants/stationary-concrete-batching-plant-pan-mixer" },
      ],
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Pan Mixers Stationary
        <br className="hidden md:block" />
        Concrete Batching <br className="hidden md:block" /> Plants [25-30
        m³/hr]
      </span>
    ),
    para: "Economical & Efficient Mixing for Medium-Scale Projects",
    img: "/images/concrete-plants/atmixthirtyresized.webp",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "ATMIX CLASSIC 30 (Pan Mixer)",
      minCapacity: 30,
      maxCapacity: 30,
      tags: "Best For: Precast, block production, standard commercial concrete",
      bestFor: "Precast Yards",
      img: "/images/concrete-plants/atmixthirty.webp",
      url: "/atmix-classic-30",
    },
    {
      name: "ATMIX CLASSIC 45 (Pan Mixer)",
      minCapacity: 45,
      maxCapacity: 45,
      tags: "Best For: Precast, block production, standard commercial concrete, Medium-scale RMC plants",
      bestFor: "Small-Scale Projects",
      img: "/images/concrete-plants/atmixclisting45.webp",
      url: "/atmix-classic-45",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Reliable Concrete Production with Pan Mixer Technology",
    para: (
      <span>
        Atlas Technologies’ Stationary Concrete Batching Plants, with{" "}
        <span className="font-bold"> pan mixers,</span> deliver cost-effective
        and consistent mixing for standard concrete applications. They are ideal
        for projects like rural road construction, small-scale RMC plants, and
        building foundations.
        <br /> <br /> Engineered for reliable performance, these stationary
        plants combine robust technology with a compact design, offering
        flexibility for budget-conscious contractors and medium-scale
        construction projects.
      </span>
    ),
    img: "/images/concrete-plants/atmixcomponent45-02-new.jpeg",
    bg: true,
  };
  const faqData = [
    {
      title: "1. What types of concrete are suitable for pan mixers?",
      content: (
        <span>
          Pan mixers are ideal for standard mixes (M20-M40) with normal
          workability (75-100mm slump). Commonly used in precast block
          production and standard RMC.
        </span>
      ),
    },
    {
      title: "2. How does a pan mixer compare to a twin shaft mixer?",
      content: (
        <span>
          Pan mixers are more economical with gentler mixing action, best for
          projects not requiring high-strength or specialty concrete.
        </span>
      ),
    },
    {
      title: "3. Can I upgrade to automated controls later?",
      content: (
        <span>
          Yes, Atlas plants are designed to allow future upgrades to fully
          automated PLC control systems.
        </span>
      ),
    },
    {
      title: "4. What power supply is required?",
      content: (
        <span>
          Standard models require <span className="font-bold">30-50 kW</span>{" "}
          depending on capacity. It varies model to model.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Cost-Effective Operation",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>
            <span className="font-bold">
              {" "}
              Lower power consumption vs. planetary/twin shaft mixers
            </span>
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Simple maintenance</span> with
            easy-access components
          </li>
        </ul>
      ),
    },
    {
      title: "Smart Production Control",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Gentle mixing action</span> ideal for
            standard concrete mixes
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Wear-resistant pans</span> with
            replaceable blades & liners
          </li>
        </ul>
      ),
    },
    {
      title: "User-Friendly Design",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Semi-automatic controls</span> for easy
            operation
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Compact footprint</span> for
            space-constrained sites
          </li>
        </ul>
      ),
    },
    {
      title: "Customizable Configuration",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Optional cement silos (<span className="font-bold">30–100T</span>)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span> Basic
            admixture dosing (<span className="font-bold">2–4 additives</span>)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Diesel power pack</span> for remote
            locations
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
        <title>Pan Mixer Concrete Batching Plants | 30–45 m³/hr | Atlas Technologies</title>
        <meta name="description" content="Don't pay for torque you don't need. Atlas pan mixer batching plant run mixes at lower power than twin-shaft or planetary. 2 models, 30–45 m³/hr. Get factory price." />
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
          "Note: For capacities beyond 45 m³/hr, pan mixer configurations can be offered on request."
        }
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"Why Choose Atlas Technologies’ Pan Mixer Plants?"}
        img = "/images/concrete-plants/atmixthirty.webp"
      />

      <ContactForm
        formcontent={formcontent}
        page={
          "Pan Mixers Stationary Concrete Batching Plants [25-30 m³/hr] (Product Listing Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
