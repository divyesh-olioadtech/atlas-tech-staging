import Category_Banner from "../../../../components/category/category_banner";
import Category_intro from "../../../../components/category/category_intro";
import FAQSection1 from "../../../../components/category/faq1";
import FAQSection2 from "../../../../components/category/faq2";
import ContactForm from "../../../../components/category/form";
import Blog from "../../../../components/homepage/blog";
import Certified from "../../../../components/homepage/certified";
import Clients from "../../../../components/homepage/clients";
import WorldMapComponent from "../../../../components/homepage/mapview";
import WhatWillYouGet from "../../../../components/products/WhatWillYouGet";
import Head from "next/head";
const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.atlastechnologiesindia.com/other-products/vacuum-dewatering-systems#product",
      name: "Atlas Vacuum Dewatering System (VDS) — Tremix Flooring Process",
      description: "Atlas Technologies is a premier vacuum dewatering machine manufacturer in India. Our vacuum pump system is the core of the Tremix flooring process, utilizing a high-performance vacuum dewatering pump to remove excess water and ensure high compressive strength for industrial floors.",
      image: {
        "@type": "ImageObject",
        url: "https://www.atlastechnologiesindia.com/assets/images/vacuum-dewatering-system.jpg",
      },
      brand: { "@type": "Brand", name: "Atlas" },
      sku: "ATLAS-VDS-PRO",
      mpn: "VDS-SERIES",
      category: "Construction Machinery > Concrete Flooring Equipment",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Included Components", value: "Vacuum Pump, Double Beam Screed, Power Floater, Groove Cutter" },
        { "@type": "PropertyValue", name: "Application", value: "Industrial Flooring, Pavements, and Warehouse Slabs" },
        { "@type": "PropertyValue", name: "Benefits", value: "Increased surface hardness and reduced shrinkage" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.atlastechnologiesindia.com/other-products/vacuum-dewatering-systems",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Atlas Technologies India" },
      },
      manufacturer: { "@id": "https://www.atlastechnologiesindia.com/#org" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/other-products/vacuum-dewatering-systems#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Other Products", item: "https://www.atlastechnologiesindia.com/other-products" },
        { "@type": "ListItem", position: 3, name: "Atlas Vacuum Dewatering System (VDS) — Tremix Flooring Process", item: "https://www.atlastechnologiesindia.com/other-products/vacuum-dewatering-systems" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/other-products/vacuum-dewatering-systems#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the main purpose of a Vacuum Dewatering System?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Vacuum Dewatering System removes excess water from freshly laid concrete using suction mats and a vacuum pump. This increases surface density, compressive strength, and long-term durability of the concrete floor.",
      },
    },
    {
      "@type": "Question",
      name: "What components make up the complete VDS unit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Atlas VDS package includes a vacuum pump, double beam screed vibrator for leveling, a power floater for surface finishing, and a groove cutter for expansion joints — covering the full Tremix flooring process.",
      },
    },
    {
      "@type": "Question",
      name: "What are the advantages of using vacuum dewatering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vacuum dewatering enhances surface hardness, reduces shrinkage cracks, shortens curing time, and produces a wear-resistant finish — making it ideal for high-traffic industrial and infrastructure floors.",
      },
    },
    {
      "@type": "Question",
      name: "Can the system handle large floor areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The modular design of Atlas VDS components allows quick on-site assembly and continuous operation for large-scale flooring projects including warehouses, factories, and airport pavements.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Vacuum Dewatering <br /> System
      </span>
    ),
    para: "Concrete Flooring for Industrial & Infrastructure Projects",
    img: "/images/plants/vds/vaccumnewbanner.webp",
    scrollTarget: "product-list",
  };
  const whatYouGetItems = [
    {
      name: "Double Beam Screed Vibrator",
      img: "/images/plants/vds/vds-01.png",
      description:
        "Double Beam Screed Vibrators are used to give a uniform flooring to the RCC flooring. The heavy weight removes any external air bubbles of the RCC flooring. The difference in superior compaction is seen by the heavy weight it eludes. It is driven by a 1 HP motor. For the safety of motor, an electric starter is provided.",
    },
    {
      name: "Vacuum Pump",
      img: "/images/plants/vds/vds-02.png",
      description:
        "Vacuum Pump is used to suck all the air bubbles that may have trapped during the laying of the concrete. It allows the cement to come up to upper layers and hence gives a superior strength to the floor. The three mats: filter mat, suction mat and top mat, these mates do not allow cement to come up but only sucks the extra water. Top mat size is 4.5 m x 5.5 m. During working, it eludes a vacuum pressure of 450-500 mm/Hg . Maximum pump pressure which can be developed is 650 mm/Hg. It is powered by 5 HP / 7.5 HP motor.",
    },
    {
      name: "Power Floater",
      img: "/images/plants/vds/vds-03.png",
      description:
        "Power Floater cum trowel is powered by 3 HP geared motor / 4.5 HP Petrol engine and is used to give a superior finishing to the RCC flooring. The gear box is heavy duty and sturdy designed for rough Indian conditions. The dish used for finishing is 4mm thick and is very important to maintain a long life. This machine also works as a trowel for best finished floor. Conversation from floater to trowel is very easy.",
    },
    {
      name: "Groove Cutter",
      img: "/images/plants/vds/vds-04.png",
      description:
        "Cuts expansion and contraction joints after concrete curing to prevent cracks. Depth-adjustable precision blade with stable mobility for straight, clean cuts. For expansion joints in roads, warehouse floors, and airport pavements.",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Professional Concrete Dewatering for Durable Surfaces",
    para: (
      <span>
        Atlas Vacuum Dewatering Systems (VDS) are designed to produce dense,
        high-strength concrete floors with improved surface finish and
        durability. By efficiently removing excess water from freshly poured
        concrete, these systems enhance wear resistance and extend the life of
        industrial, commercial, and infrastructure flooring.
        <br /> <br />
        Used in factory floors, warehouses, runways, and parking decks, the
        Atlas VDS offers a complete solution, integrating a vacuum pump, screed
        vibrator, and power floater for a perfectly leveled, dewatered surface.
        Each component is engineered for consistent performance, ease of
        operation, and quick setup on-site.
      </span>
    ),
    img: "/images/plants/vds/vds-02.png",
    bg: true,
  };
  const faqData = [
    {
      title: "1. What is the main purpose of a Vacuum Dewatering System?",
      content: (
        <span>
          It removes excess water from freshly laid concrete, increasing surface
          density, strength, and durability.
        </span>
      ),
    },
    {
      title: "2. What components make up the complete VDS unit?",
      content: (
        <span>
          The system typically includes a vacuum pump, double beam screed
          vibrator, power floater, and groove cutter.
        </span>
      ),
    },
    {
      title: "3. What are the advantages of using vacuum dewatering?",
      content: (
        <span>
          Vacuum Dewatering System enhances surface hardness, reduces shrinkage
          cracks, and shortens curing time.
        </span>
      ),
    },
    {
      title: "4. Can the system handle large floor areas?",
      content: (
        <span>
          Yes. The modular components allow quick setup and continuous operation
          for large industrial or infrastructure flooring projects.
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Superior Surface Strength",
      content: (
        <ul className="pl-4 space-y-1 list-disc list-inside">
          <li>
            Rapid water removal increases surface density and minimizes
            shrinkage cracks.
          </li>
          <li>
            Results in higher abrasion resistance and long-term durability.
          </li>
        </ul>
      ),
    },
    {
      title: "Complete System Package",
      content: (
        <ul className="pl-4 space-y-1 list-disc list-inside">
          <li>
            Integrated solution combining dewatering, leveling, finishing, and
            grooving operations.
          </li>
          <li>
            Ensures efficient workflow and uniform floor quality from start to
            finish.
          </li>
        </ul>
      ),
    },
    {
      title: "Quick Setup & Mobility",
      content: (
        <ul className="pl-4 space-y-1 list-disc list-inside">
          <li>
            Modular units can be easily transported and assembled on-site.
          </li>
          <li>
            Ideal for both small and large-scale concrete flooring projects.
          </li>
        </ul>
      ),
    },
    {
      title: "Operator-Friendly Design",
      content: (
        <ul className="pl-4 space-y-1 list-disc list-inside">
          <li>Simple controls with minimal setup time.</li>
          <li>Requires no advanced skill for operation or maintenance.</li>
        </ul>
      ),
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
        <title>Vacuum Dewatering Systems Manufacturer in India | Atlas Technologies</title>
        <meta name="description" content="Complete 4-component vacuum dewatering system — vacuum pump, screed vibrator, power floater and groove cutter. Denser floors, less shrinkage. Get Consultation with Engineers" />
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
      <WhatWillYouGet
        title="What Will You Get?"
        subtitle="The Atlas Vacuum Dewatering System is supplied as a complete solution. Four precision-built components work in sequence — the output of each stage feeds directly into the next, ensuring a consistent, high-strength finish from fresh pour to final joint."
        items={whatYouGetItems}
      />

      <section className="w-full bg-white px-[5%] py-14 md:py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-8 md:gap-10">
          <h2 className="h2t">Technical Specifications</h2>
          <img
            src="/images/specificationsimage.webp"
            alt="Specifications"
            className="w-full h-auto object-contain rounded-[10px]"
          />
        </div>
      </section>
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"Why Choose Atlas’s Vacuum Dewatering System for Your Project"}
        img={"/images/plants/vds/vds-03.png"}
      />

      <ContactForm
        page={"Kerb Laying Machines [XL-400 & XL-550] (Product Listing Page)"}
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
