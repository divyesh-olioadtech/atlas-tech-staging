import Category_Banner from "../../../components/category/category_banner";
import Category_intro from "../../../components/category/category_intro";
import FAQSection1 from "../../../components/category/faq1";
import FAQSection2 from "../../../components/category/faq2";
import ContactForm from "../../../components/category/form";
// import Blog from "../../../components/homepage/blog";
// import Certified from "../../../components/homepage/certified";
// import Clients from "../../../components/homepage/clients";
// import WorldMapComponent from "../../../components/homepage/mapview";
import ProductFilterComponent from "../../../components/products/filter";
import Head from "next/head";
const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.atlastechnologiesindia.com/wet-mix-plant#product",
      name: "Wet Mix Macadam (WMM) Plant — High Capacity Series",
      description: "Atlas Technologies is recognized among the leading wet mix plant manufacturers in India. Our high-performance WMM plant is designed for producing a uniform mix of aggregates and water, essential for stable road bases.",
      image: {
        "@type": "ImageObject",
        url: "https://www.atlastechnologiesindia.com/assets/images/wet-mix-macadam-plant.jpg",
      },
      brand: { "@type": "Brand", name: "Atlas" },
      sku: "ATLAS-WMM-SERIES",
      mpn: "WMM-PLANT",
      category: "Construction Machinery > Road Base Equipment",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Mixer Type", value: "Twin Shaft Pugmill Mixer" },
        { "@type": "PropertyValue", name: "Production Capacity", value: "100 TPH to 300 TPH" },
        { "@type": "PropertyValue", name: "Storage Silo", value: "Standard or Customizable Surge Hopper" },
        { "@type": "PropertyValue", name: "Screen", value: "Single Deck Vibrating Screen for oversize removal" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.atlastechnologiesindia.com/wet-mix-plant",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Atlas Technologies India" },
      },
      manufacturer: { "@id": "https://www.atlastechnologiesindia.com/#org" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/wet-mix-plant#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Machines", item: "https://www.atlastechnologiesindia.com/asphalt-machines" },
        { "@type": "ListItem", position: 3, name: "Wet Mix Plant", item: "https://www.atlastechnologiesindia.com/wet-mix-plant" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/wet-mix-plant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can the Wet Mix Plant handle recycled aggregates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The wet mix plant is designed to process recycled aggregates, supporting sustainable construction practices while maintaining consistent mix quality.",
      },
    },
    {
      "@type": "Question",
      name: "What is the role of the single deck vibrating screen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The single deck vibrating screen removes oversized material before it enters the mixing unit, ensuring uniform grading and preventing blockages within the system.",
      },
    },
    {
      "@type": "Question",
      name: "What safety features are included in the Wet Mix Plant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safety features include emergency stop controls, protective guard covers, and an ergonomically positioned operator cabin that provides clear visibility during operation.",
      },
    },
    {
      "@type": "Question",
      name: "What customization options are available for bin sizes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas offers flexible cold feeder configurations with customizable bin sizes, allowing contractors to adapt the plant to specific material handling requirements.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Wet Mix Macadam Plants
        <br className="hidden md:block" />
        [100-300 TPH]
      </span>
    ),
    para: "Precision & Durability in Every Layer of Road Construction",
    img: "/images/wmm/wm-300-2.jpg",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "WM-100",
      minCapacity: 100,
      maxCapacity: 100,
      tags: "Hopper: Surge hopper (small capacity for quick load-out)",
      bestFor: "Rural Roads",
      img: "/images/wmm/wm-100-four.jpg",
      url: "/wm-100",
    },
    {
      name: "WM-160",
      minCapacity: 160,
      maxCapacity: 160,
      tags: "10 Tons",
      bestFor: "Highways",
      img: "/images/wmm/wmm-200-three.jpeg",
      url: "/wm-160",
    },
    {
      name: "WM-200",
      minCapacity: 200,
      maxCapacity: 200,
      tags: "25 Tons",
      bestFor: "Expressways",
      img: "/images/wmm/wmm-200-two.jpeg",
      url: "/wm-200",
    },
    {
      name: "WM-250",
      minCapacity: 250,
      maxCapacity: 250,
      tags: "30 Tons",
      bestFor: "Airports",
      img: "/images/wmm/wm-250-1.jpg",
      url: "/wm-250",
    },
    {
      name: "WM-300",
      minCapacity: 300,
      maxCapacity: 300,
      tags: "35 Tons",
      bestFor: "Industrial zones",
      img:"/images/wmm/wm-300-0.jpg",
      url: "/wm-300",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Engineered for Robust Road Base Construction",
    para: (
      <span>
        Atlas Wet Mix Macadam (WMM) Plants deliver homogeneous, high-density
        mixes for base/sub-base layers, including Cement Treated Aggregate Base
        (CTAB). Built for tough project conditions, these plants feature
        heavy-duty twin-shaft pug mills, corrosion-resistant aggregate bins, and
        synchronized cement/water addition systems. Whether you’re working on
        highways, rural roads, or large-scale infrastructure, Atlas WMM Plants
        provide unmatched reliability and efficiency.
      </span>
    ),
    img: "/images/plants/wetmix/wm-160-5.png",
    bg: true,
  };
  const faqData = [
    {
      title: "1. Can the Wet Mix Plant handle recycled aggregates?",
      content: (
        <span>
          Yes, the plant is designed to process recycled aggregates, ensuring
          sustainability and cost savings without compromising mix quality.
        </span>
      ),
    },
    {
      title: "2. What is the role of the single-deck vibrating screen?",
      content: (
        <span>
          The <span className="font-bold">single-deck vibrating screen</span>{" "}
          removes oversized materials before they reach the mixing unit,
          ensuring consistent grading and preventing clogging in the system.
        </span>
      ),
    },
    {
      title: "3. What safety features are included in the Wet Mix Plant?",
      content: (
        <span>
          The plant includes features like emergency stop controls, guard
          covers, and a strategically placed operator cabin for full visibility,
          ensuring safe and comfortable operation.
        </span>
      ),
    },
    {
      title: "4. What customization options are available for bin sizes?",
      content: (
        <span>
          Atlas offers flexible configurations, including customizable bin sizes
          for the cold feeder system, allowing contractors to tailor the plant
          to their specific material handling needs.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Unmatched Mixing Technology",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Durable pug mill
            with wear-resistant, replaceable parts
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Designed for
            heavy-duty, torque-rich mixing performance
          </li>
        </ul>
      ),
    },
    {
      title: "Smart Material Control",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Load-cell
            aggregate weighing for precise material dosing
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Metered water
            system synchronized with aggregate flow
          </li>
        </ul>
      ),
    },
    {
      title: "Built for 24/7 Operations",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span>{" "}
            Corrosion-resistant bins and variable-speed feeders
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Designed for
            continuous, durable, and reliable operation
          </li>
        </ul>
      ),
    },
    {
      title: "Cement Integration Ready",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Optional cement
            silo + conveyor for CTAB mixes
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> A dedicated
            system for dust-free cement transfer
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
        <title>Wet Mix Macadam Plants 100–300 TPH | Manufacturer India | Atlas Technologies</title>
        <meta name="description" content="Twin-shaft pug mill, cement integration ready, handles recycled aggregates — Atlas wet mix macadam plant comes up with 5 models, 100 to 300 TPH. Get specs and price." />

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
      </Head>
      <Category_Banner data={category_banner_data} />
      <ProductFilterComponent
        kgoff={false}
        unit="TPH"
        productLinks={productLinks}
        products={products}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        img={"/images/plants/wetmix/wm-160-2.png"}
        title={"Why Contractors Choose Atlas WMM Plants"}
      />

      {/* <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      /> */}
      <ContactForm formcontent={formcontent} />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
