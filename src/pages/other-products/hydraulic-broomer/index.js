import Category_Banner from "../../../../components/category/category_banner";
import Category_intro from "../../../../components/category/category_intro";
import Head from "next/head";
import FAQSection1 from "../../../../components/category/faq1";
import FAQSection2 from "../../../../components/category/faq2";
import ContactForm from "../../../../components/category/form";
import ProductFilterComponent from "../../../../components/products/filter";
const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.atlastechnologiesindia.com/other-products/hydraulic-broomer#product",
      name: "Atlas Hydraulic Broomer Machine — HB Series",
      description: "Atlas Technologies is a leading hydraulic broom manufacturer in India. Our hydraulic broomer is a high-efficiency road sweeper designed for asphalt surface preparation, featuring a robust hydraulic drive.",
      image: {
        "@type": "ImageObject",
        url: "https://www.atlastechnologiesindia.com/assets/images/hydraulic-broomer.jpg",
      },
      brand: { "@type": "Brand", name: "Atlas" },
      sku: "ATLAS-HB-750",
      mpn: "HB-SERIES",
      category: "Construction Machinery > Road Cleaning Equipment",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Drive System", value: "Hydraulic (Tractor-coupled)" },
        { "@type": "PropertyValue", name: "Dust Control", value: "Optional Water Sprinkling System and Collection Bucket" },
        { "@type": "PropertyValue", name: "Application", value: "WMM, GSB, and Bitumen surface cleaning" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.atlastechnologiesindia.com/other-products/hydraulic-broomer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Atlas Technologies India" },
      },
      manufacturer: { "@id": "https://www.atlastechnologiesindia.com/#org" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/other-products/hydraulic-broomer#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Other Products", item: "https://www.atlastechnologiesindia.com/other-products" },
        { "@type": "ListItem", position: 3, name: "Atlas Hydraulic Broomer Machine — HB Series", item: "https://www.atlastechnologiesindia.com/other-products/hydraulic-broomer" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/other-products/hydraulic-broomer#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between mechanical vs. hydraulic road sweeping brooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mechanical brooms are driven by tractor PTO/chain drive and are suitable for heavy sweeping. Hydraulic brooms use the tractor hydraulic system for smoother operation, easier handling, and high efficiency in dust and debris removal.",
      },
    },
    {
      "@type": "Question",
      name: "How does the dust collection work on an Atlas broomer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The hydraulic broom can be equipped with an optional dust collection bucket that gathers swept material directly, significantly reducing secondary cleanup time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the benefit of the water sprinkling system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The optional water sprinkling system suppresses dust during the sweeping process, which improves operator visibility and ensures compliance with environmental conditions in dusty urban sites.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Hydraulic Road Sweeper
        <br className="hidden md:block" /> / Brooming Machines
      </span>
    ),
    para: "Industrial-Grade Cleaning for Highways, Cities, & Airports",
    img: "/images/plants/Hydraulic Broom/hydraulic-broomer-banner-new.jpeg" ,
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "Hydraulic Broom",
      minCapacity: 2.1,
      maxCapacity: 2.1,
      tags: "Cleaning Width: Approx. 2.1 m | Features: Dust collection bucket",
      bestFor: "Remote Locations Without Electricity",
      url: "/hydraulic-broom",
      img: "/images/plants/Hydraulic Broom/hydraulic-broomer-banner-new-component.jpeg",
    },
    {
      name: "Mechanical Broom",
      minCapacity: 2.5,
      maxCapacity: 2.5,
      tags: "Cleaning Width: Approx. 2.5 m | Features: Water sprinkler system (optional)",
      bestFor: "Urban Construction Sites",
      url: "/mechanical-broom",
      img: "/images/plants/mechanical-broom/mechanical-broom-03.png",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Powerful Sweeping Solutions for Every Need",
    para: (
      <span>
        Atlas Road Sweepers combine{" "}
        <span className="font-bold">
          advanced dust control and high-efficiency sweeping
        </span>{" "}
        to keep roads spotless. These hydraulic brooming machines are designed
        for efficiency and thorough cleaning of roads, highways, urban spaces,
        and industrial areas.
        <br /> <br />
        Available in three different variants, the road brooming machines are
        built to handle challenging site conditions while ensuring durability,
        precision, and ease of use.
      </span>
    ),
    img: "/images/plants/Hydraulic Broom/hydraulic-broomer-banner-new.jpeg",
    bg: true,
  };
  const faqData = [
    {
      title:
        "1. What’s the difference between mechanical vs. hydraulic road sweeping brooms?",
      content: (
        <span>
          Mechanical broom: Driven by tractor PTO/chain drive, suitable for
          heavy sweeping and larger road projects. <br />
          <br />
          Hydraulic broom: Driven by the tractor’s hydraulic system for smoother
          operation, easier to handle, and efficient for dust/debris sweeping.
        </span>
      ),
    },
    {
      title: "2. How does the dust collection work?",
      content: (
        <span>
          The hydraulic broom can be equipped with a dust collection bucket that
          gathers swept material, reducing secondary cleanup.
        </span>
      ),
    },
    {
      title: "3. What is the benefit of the water sprinkling system?",
      content: (
        <span>
          The optional water sprinkling system suppresses dust during sweeping,
          improving visibility and working conditions in dusty environments.
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Proven Cleaning Performance",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Hydraulic broom with 2.1 m sweeping width</li>
          <li>Mechanical broom with 2.5 m sweeping width</li>
        </ul>
      ),
    },
    {
      title: "Dust Control Options",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Dust collection bucket attachment (hydraulic broom)</li>
          <li>Optional water sprinkling system (mechanical broom)</li>
        </ul>
      ),
    },
    {
      title: "Low Maintenance",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Simple design for quick brush replacement</li>
          <li>Bearings and components are mounted for easy servicing</li>
        </ul>
      ),
    },
    {
      title: "Operator Friendly",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Tractor-mounted design, easy to tow and operate</li>
          <li>Does not require highly skilled operators</li>
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
        <title>Hydraulic Broomers | Road Sweeper Machine Manufacturer India | Atlas Technologies</title>
        <meta name="description" content="Hydraulic and mechanical road sweeper machines — 2.1 m and 2.5 m sweep width, dust collection, water sprinkler option. For highways, airports and cities. Get Enquiry and Price" />
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
        hideCapacityFilter={true}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"Why Atlas’s Hydraulic Brooming Machines Outperform?"}
        img={"/images/plants/Hydraulic Broom/hydraulic-broomer-banner-new-component.jpeg"}
      />

      <ContactForm
        page={
          "Hydraulic Road Sweeper / Brooming Machines (Product Listing Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
