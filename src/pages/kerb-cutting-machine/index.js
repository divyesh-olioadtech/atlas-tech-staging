import Category_Banner from "../../../components/category/category_banner";
import Category_intro from "../../../components/category/category_intro";
import FAQSection1 from "../../../components/category/faq1";
import FAQSection2 from "../../../components/category/faq2";
import ContactForm from "../../../components/category/form";
import Blog from "../../../components/homepage/blog";
import Certified from "../../../components/homepage/certified";
import Clients from "../../../components/homepage/clients";
import WorldMapComponent from "../../../components/homepage/mapview";
import ProductFilterComponent from "../../../components/products/filter";
import Head from "next/head";
const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.atlastechnologiesindia.com/kerb-cutting-machine#product",
      name: "Atlas Kerb Cutting Machines — Precision Road Series",
      description: "Atlas Technologies offers a professional kerb cutting machine lineup for highway infrastructure. Our kerb cutting solutions feature a high-precision cutting system available in 24-inch and 32-inch blade sizes.",
      image: {
        "@type": "ImageObject",
        url: "https://www.atlastechnologiesindia.com/assets/images/kerb-cutting-lineup.jpg",
      },
      brand: { "@type": "Brand", name: "Atlas" },
      sku: "ATLAS-KCM-SERIES",
      mpn: "KCM-SERIES",
      category: "Construction Machinery > Road Cutting Equipment",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Blade Sizes Available", value: "24 inch, 32 inch" },
        { "@type": "PropertyValue", name: "Power Sources", value: "Electric Motor (7.4 HP), Air-cooled Diesel Engine" },
        { "@type": "PropertyValue", name: "Height Adjustment", value: "Up to 500 mm" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.atlastechnologiesindia.com/kerb-cutting-machine",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Atlas Technologies India" },
      },
      manufacturer: { "@id": "https://www.atlastechnologiesindia.com/#org" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/kerb-cutting-machine#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Kerb Cutting Machine", item: "https://www.atlastechnologiesindia.com/kerb-cutting-machine" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/kerb-cutting-machine#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the available blade sizes for Atlas Kerb Cutting Machines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas Kerb Cutting Machines are available in two primary blade sizes: a 24-inch Diamond Wheel for standard projects and a 32-inch Diamond Wheel for heavy-duty cutting requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What power source options does Atlas offer for kerb cutting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas provides versatile power options including 7.4 HP Electric Motors with Starters for urban sites and high-performance Air-cooled Diesel Engines (like the Model 1520 RS) for remote highway projects.",
      },
    },
    {
      "@type": "Question",
      name: "Can the Kerb Cutting Machines handle uneven surfaces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the blade cutting system can be adjusted up to 500 mm in height to accommodate uneven road surfaces, ensuring consistent depth and performance.",
      },
    },
    {
      "@type": "Question",
      name: "What types of projects are suitable for these machines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These machines are specifically designed for precision cutting of concrete kerbs, road dividers, and urban infrastructure where high-quality finishes are required.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Atlas Kerb Cutting
        <br className="hidden md:block" /> Machines
      </span>
    ),
    para: "Precision Cutting for Concrete Kerbs & Road Dividers",
    img: "/images/plants/kerb-laying/kerb-2.png",
    scrollTarget: "product-list",
  };
  const products = [
    {

      img: "/images/plants/kerb-laying/kerb-1.png",
      name: "Kerb Cutting Machine with 7.4 HP",
      minCapacity: 24,
      maxCapacity: 24,
      tags: "Blade Size: 24 Diamond Wheel | Power Source: Electric Motor with Starter",
      bestFor: "Remote Locations Without Electricity",
      url: "/kerb-cutting-machine-with-7-4hp",
    },
    {
      img: "/images/plants/kerb-laying/kerb-2.png",
      name: "Kerb Cutting Machine Model 1520 RS",
      minCapacity: 24,
      maxCapacity: 24,
      tags: "Blade Size: 24 Diamond Wheel | Power Source: Air-cooled Diesel Engine",
      bestFor: "Urban Construction Sites",
      url: "/kerb-cutting-machine-1520-rs",
    },
    {
      img: "/images/plants/kerb-laying/mix-machine-five.webp",
      name: "Kerb Cutting Machine (Heavy-Duty)",
      minCapacity: 32,
      maxCapacity: 32,
      tags: "Blade Size: 32 Diamond Wheel | Power Source: Diesel/Electric Options",
      bestFor: "Urban Construction Sites",
      url: "/kerb-cutting-machine-heavy-duty",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Efficient & Durable Performance for Kerb Applications",
    para: (
      <span>
        Atlas Technologies’ Kerb Cutters are engineered for contractors who
        demand clean, precise cuts in demanding conditions. Our machines
        effortlessly handle everything from{" "}
        <span className="font-bold">municipal curb repairs</span> to deep
        highway <span className="font-bold">divider grooving.</span>
        <br /> <br />
        Designed for the toughest job sites, these cutters combine
        <span className="font-bold">
          {" "}
          industrial-grade power with intuitive operation.
        </span>{" "}
        Whether you&#39;re modifying existing kerbs or creating expansion joints
        in concrete pavements, Atlas’s road construction machines deliver
        reliable precision with enhanced efficiency – for on-time project
        completions.
      </span>
    ),
    img: "/images/plants/kerb-laying/kerb-2.png",
    bg: true,
  };
  const faqData = [
    {
      title:
        "1. What types of projects are suitable for Atlas Kerb Cutting Machines?",
      content: (
        <span>
          These machines are ideal for road construction, highway projects,
          urban infrastructure development, and any application requiring
          precise cutting of concrete kerbs and dividers.
        </span>
      ),
    },
    {
      title:
        "2. How long does it take to adjust the blade height in Atlas’s Kerb Cutting Machines?",
      content: (
        <span>
          The total adjustable height of up to 500 mm can be achieved using the
          3 hand-wheels, ensuring quick and precise adjustments.
        </span>
      ),
    },
    {
      title: "3. Can the Kerb Cutting Machines handle uneven surfaces?",
      content: (
        <span>
          Yes, the blade{" "}
          <span className="font-bold">
            can be adjusted up to 500 mm to accommodate uneven surfaces,
          </span>{" "}
          ensuring consistent performance.
        </span>
      ),
    },
    {
      title: "4. Are these Kerb Cutting Machines easy to maneuver?",
      content: (
        <span>
          Yes, the machine is equipped with{" "}
          <span className="font-bold">4 wheels for easy mobility</span> during
          cutting operations.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "High-Precision Cutting Capacity",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">12&quot; (300mm) max depth </span>
            (32&quot; blade model)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Up/down adjustment </span>
            via 3 hand wheels (±1mm precision)
          </li>
        </ul>
      ),
    },
    {
      title: "Rugged Construction",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Heavy-duty steel frame </span>
            withstands 500kg lateral force
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Diesel model operates </span>
            in -5°C to 50°C conditions
          </li>
        </ul>
      ),
    },
    {
      title: "Operator Safety",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Blade guard with auto-lock </span>
            during adjustment
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Emergency stop button </span>
            within reach
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
            <span className="font-bold">Tool-free blade changes </span>
            (15-minute process)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Standard engine parts </span>
            available nationwide
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
        <title>Kerb Cutting Machines Manufacturer India | Atlas Technologies</title>
        <meta name="description" content="Atlas kerb cutting machine handles highway dividers, curb repairs and expansion joints comes up 3 models. Get Technical specs and quote price." />
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
        unit="Blade Size"
        productLinks={productLinks}
        products={products}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"Why Do Contractors Choose Atlas Concrete Pumps?"}
        img={ "/images/plants/kerb-laying/mix-machine-two.webp"}
      />

      <ContactForm
        page={"Atlas Kerb Cutting Machines (Product Listing Page)"}
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
