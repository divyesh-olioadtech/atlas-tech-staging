import Category_Banner from "../../../components/category/category_banner";
import Category_intro from "../../../components/category/category_intro";
import FAQSection1 from "../../../components/category/faq1";
import FAQSection2 from "../../../components/category/faq2";
import ContactForm from "../../../components/category/form";
import ProductFilterComponent from "../../../components/products/filter";
import Head from "next/head";
const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.atlastechnologiesindia.com/bitumen-decanter#product",
      name: "Bitumen Decanter — High Efficiency Melting Unit",
      description: "Atlas Technologies is a leading manufacturer of the Bitumen Decanter. Our Bitumen Drum Decanter is a high-performance bitumen melting plant designed for efficient heating and melting of bitumen from drums. Essential asphalt plant auxiliary equipment.",
      image: {
        "@type": "ImageObject",
        url: "https://www.atlastechnologiesindia.com/assets/images/bitumen-decanter.jpg",
      },
      brand: { "@type": "Brand", name: "Atlas" },
      sku: "ATLAS-BD-SERIES",
      mpn: "BITUMEN-DECANTER",
      category: "Construction Machinery > Bitumen Equipment",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Heating System", value: "Thermic Fluid Oil Heating" },
        { "@type": "PropertyValue", name: "Drum Capacity", value: "4 to 10 tons per hour" },
        { "@type": "PropertyValue", name: "Design Type", value: "Enclosed Insulated Chamber" },
        { "@type": "PropertyValue", name: "Loading System", value: "Hydraulic Drum Pusher — continuous operation" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.atlastechnologiesindia.com/bitumen-decanter",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Atlas Technologies India" },
      },
      manufacturer: { "@id": "https://www.atlastechnologiesindia.com/#org" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/bitumen-decanter#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Machines", item: "https://www.atlastechnologiesindia.com/asphalt-machines" },
        { "@type": "ListItem", position: 3, name: "Bitumen Decanter", item: "https://www.atlastechnologiesindia.com/bitumen-decanter" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/bitumen-decanter#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does an Atlas Bitumen Drum Decanter work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Bitumen Drum Decanter works by pushing bitumen drums into a highly insulated heating chamber. Using a thermic fluid heating system, the bitumen inside the drums melts and flows into a reservoir tank below, where it is kept in liquid form for use.",
      },
    },
    {
      "@type": "Question",
      name: "What is the melting capacity of the Atlas Bitumen Decanter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas offers various models of the Bitumen Decanter with melting capacities ranging from 4 tons per hour to 10 tons per hour, depending on the number of drums the unit can process simultaneously.",
      },
    },
    {
      "@type": "Question",
      name: "Is this Bitumen Decanting machine compatible with different drum sizes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our decanting units are designed to accommodate standard international bitumen drums. The hydraulic pusher system is adjustable to ensure smooth drum entry and exit regardless of minor variations in drum dimensions.",
      },
    },
    {
      "@type": "Question",
      name: "How does the heating system ensure fuel efficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The chamber is heavily insulated with rockwool to prevent heat loss. The thermic fluid coils are strategically placed to provide maximum heat transfer to the drums, making it a very high-efficiency bitumen melting plant.",
      },
    },
    {
      "@type": "Question",
      name: "Why is a decanter essential as asphalt plant auxiliary equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In regions where bitumen is supplied in drums rather than bulk tankers, a decanter is vital. It allows the asphalt plant to have a steady supply of liquid bitumen, ensuring the mixing process is never interrupted due to material shortages.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Bitumen Decanters <br className="hidden md:block" /> [4-10 T/H]
      </span>
    ),
    para: "Safe, Efficient Bitumen Transfer (Eliminate Manual Handling Risks)",
    img: "/images/bitumen-decanter/acm-4-1.png",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "ACM-4",
      minCapacity: 4,
      maxCapacity: 5,
      tags: "Perfect for small-scale projects",
      mixerSize: "27 Barrels / 4 TPH",
      url: "acm-4",
      img: "/images/bitumen-decanter/acm-4-1.png",
    },
    {
      name: "ACM-7",
      minCapacity: 7,
      maxCapacity: 8,
      tags: "Designed for medium-sized operations",
      mixerSize: "40 Barrels / 6 TPH",
      url: "acm-7",
      img: "/images/bitumen-decanter/acm-7-1.png",
    },
    {
      name: "ACM-9",
      minCapacity: 9,
      maxCapacity: 10,
      tags: "Ideal for medium to large-scale projects",
      mixerSize: "50 Barrels / 8 TPH",
      url: "acm-9",
      img: "/images/bitumen-decanter/acm-9-1.png",
    },
    {
      name: "ACM-11",
      minCapacity: 11,
      maxCapacity: 12,
      tags: "The ultimate choice for megaprojects",
      mixerSize: "60 Barrels / 10 TPH",
      url: "acm-11",
      img: "/images/bitumen-decanter/acm-11-1.png",
    }
    // {
    //   name: "Drum Decanter (Customizable)",
    //   minCapacity: 9,
    //   maxCapacity: 25,
    //   tags: "Ideal for bulk storage",
    //   mixerSize: "27, 40, 60 Barrels / 4, 6, 10 TPH (Customizable)",
    //   url: "drum-decanters",
    //   img: "/images/bitumen-decanter/acm-7-1.png",
    // },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Efficient and Safe Bitumen Decanting Solutions",
    para: (
      <span>
        Atlas Technologies’ Bitumen Decanters are designed for safe, reliable,
        and economical melting of bitumen drums (with indirect heating via
        three-pass
        <span className="font-bold"> thermic oil circulation</span>). This
        method eliminates the risk of overheating or material aging, ensuring
        high-quality liquid bitumen for your projects. Ideal for remote
        locations or sites with logistical challenges, our decanters allow
        contractors to store drums on-site and melt them as needed.
      </span>
    ),
    img: "/images/bitumen-decanter/acm-4-2.png",
    bg: true,
  };
  const faqData = [
    {
      title: "1. What safety features do Atlas Bitumen Decanters offer?",
      content: (
        <span>
          Atlas Bitumen Decanters use{" "}
          <span className="font-bold">
            indirect heating via thermic oil circulation,
          </span>{" "}
          eliminating the risk of direct flame exposure. The{" "}
          <span className="font-bold">fully insulated heating chamber</span>{" "}
          ensures safe operation, and the{" "}
          <span className="font-bold">hydraulic drum loading system</span>
          minimizes manual handling risk.
        </span>
      ),
    },
    {
      title: "2. Are Atlas Bitumen Decanters suitable for remote locations?",
      content: (
        <span>
          Absolutely! Our decanters are ideal for{" "}
          <span className="font-bold">remote or landlocked areas</span>
          where liquid bitumen logistics can be challenging. Contractors can
          <span className="font-bold"> store drums on-site </span> and melt them
          as needed, ensuring a steady supply of bitumen.
        </span>
      ),
    },
    {
      title:
        "3. What customization options are available for Atlas Bitumen Decanters?",
      content: (
        <span>
          Atlas offers flexible configurations, including{" "}
          <span className="font-bold">
            integration with existing asphalt plants or binder plants.
          </span>{" "}
          Each model comes with a suitable storage capacity below the unit, and
          the decanters can be customized to meet specific project requirements.
        </span>
      ),
    },
    {
      title:
        "4. How does Atlas ensure environmental compliance with its Bitumen Decanters?",
      content: (
        <span>
          Atlas Bitumen Decanters are designed to{" "}
          <span className="font-bold">
            minimize material wastage and prevent leaks,
          </span>{" "}
          ensuring compliance with environmental standards. Additionally, their
          <span className="font-bold"> energy-efficient designs</span> reduce
          fuel consumption and operational costs.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Safest Melting Method",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">No direct flame </span> – Prevents
            bitumen degradation
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Diesel/LDO-powered</span> thermic oil
            heater
          </li>
        </ul>
      ),
    },
    {
      title: "Remote Site Ready",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Minimal foundation</span> needed
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Store 6+ months</span> of drummed
            bitumen (on-site)
          </li>
        </ul>
      ),
    },
    {
      title: "Low Maintenance",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Corrosion-resistant</span> heating pipes
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Easy-access</span> hydraulic systems
          </li>
        </ul>
      ),
    },
    {
      title: "Smart Integration",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Connect to existing plants</span>{" "}
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Auto-level control </span> prevents
            overflow
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
        <title>Bitumen Decanters Manufacturer in India | 9 to 25 TPH | Atlas Technologies</title>
        <meta name="description" content="No direct flame, no bitumen aging — Atlas bitumen decanting machines use three-pass thermic oil heating. 5 models from 9 to 25 TPH. Compare range and get factory price." />
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
        productLinks={productLinks}
        products={products}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"What Makes Atlas Bitumen Decanters the Best Choice?"}
      />

      <ContactForm formcontent={formcontent} />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
