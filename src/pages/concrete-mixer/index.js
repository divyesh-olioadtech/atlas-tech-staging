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
      "@id": "https://www.atlastechnologiesindia.com/concrete-mixer#product",
      name: "Heavy-Duty Concrete Mixer Machine — RM Series",
      description: "Atlas Technologies offers a premium concrete mixer machine designed for durability and performance. This portable concrete mixer is the ultimate site-mix concrete equipment, featuring a heavy-duty drum mixer for consistent batches.",
      image: {
        "@type": "ImageObject",
        url: "https://www.atlastechnologiesindia.com/assets/images/concrete-mixer-machine.jpg",
      },
      brand: { "@type": "Brand", name: "Atlas" },
      sku: "ATLAS-MIXER-PRO",
      mpn: "CONCRETE-MIXER-SERIES",
      category: "Construction Machinery > Concrete Mixers",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Mixer Type", value: "Reversible Drum / Tilting Drum" },
        { "@type": "PropertyValue", name: "Mobility", value: "Portable with heavy-duty wheels" },
        { "@type": "PropertyValue", name: "Engine Options", value: "Electric Motor or Diesel Engine" },
        { "@type": "PropertyValue", name: "Batch Volume", value: "10/7 cft (approx 0.20 m³ per batch)" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.atlastechnologiesindia.com/concrete-mixer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Atlas Technologies India" },
      },
      manufacturer: { "@id": "https://www.atlastechnologiesindia.com/#org" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/concrete-mixer#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Concrete Mixer", item: "https://www.atlastechnologiesindia.com/concrete-mixer" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/concrete-mixer#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the exact capacity of Atlas concrete mixers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The common industry notation 10/7 cft indicates 10 cubic feet drum volume (total) and approximately 7 cubic feet practical mixing volume per batch, equivalent to roughly 0.20 m³.",
      },
    },
    {
      "@type": "Question",
      name: "Diesel vs Electric: Which is better for rural sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diesel variants avoid the need for grid power and are commonly selected for remote sites. Electric models are preferred in urban or indoor sites for lower noise and emissions.",
      },
    },
    {
      "@type": "Question",
      name: "What prevents accidental drum rotation during loading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manual models typically use a locking pin or hand-wheel brake during loading. Hydraulic hopper variants include interlocks that prevent unwanted drum rotation while the hopper is in the raised position.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        10/7 Concrete Mixer –
        <br className="hidden md:block" /> Compact & Reliable
      </span>
    ),
    para: "Manual & Hydraulic Hopper Options | Diesel & Electric Models",
    img: "/images/machine/mixer/concrete-mixer-02.png",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "Without Hopper (Diesel)",
      minCapacity: 950,
      maxCapacity: 950,
      tags: "Approx Weight: 950 Kgs | Best For: Remote sites, simple batching",
      bestFor: "Remote Locations Without Electricity",
      url: "/without-hopper-diesel",
      img: "/images/machine/mixer/concrete-mixer-08.png",
    },
    {
      name: "Without Hopper (Electric)",
      minCapacity: 950,
      maxCapacity: 950,
      tags: "Approx Weight: 950 Kgs | Best For: Urban jobs, indoor mixing",
      bestFor: "Urban Construction Sites",
      url: "/without-hopper-electric",
      img: "/images/machine/mixer/concrete-mixer-01.png",
    },
    {
      name: "With Mechanical Hopper (Diesel / Electric)",
      minCapacity: 1480,
      maxCapacity: 1480,
      tags: "Approx Weight: 1480 Kgs | Best For: Semi Manual assistance",
      bestFor: "Projects Requiring Hydraulic Hopper Loading",
      url: "/mechanical-hopper",
      img: "/images/machine/mixer/concrete-mixer-04.png",
    },
    {
      name: "With Hydraulic Hopper (Diesel / Electric)",
      minCapacity: 1450,
      maxCapacity: 1450,
      tags: "Approx Weight: 1450 Kgs | Best For: Fully automatic loading",
      bestFor: "Urban Projects with Hydraulic Hopper Needs",
      url: "/hydraulic-hopper",
      img: "/images/machine/mixer/concrete-mixer-07.png",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Compact & Durable Mixing for Everyday Construction Needs",
    para: (
      <span>
        The Atlas 10/7 Concrete Mixer (Capacity: 10/7 Cubic Feet) is designed
        for small-scale projects requiring reliable and cost-effective concrete
        mixing. Ideal for projects like rural roads, pavements, building
        foundations, or small precast units, this mixer delivers consistent
        performance with minimal effort.
        <br /> <br />
        Available in four configurations, this mixer offers flexibility to suit
        your project requirements. Its compact design ensures ease of use, while
        the robust construction guarantees durability even in challenging
        conditions.
      </span>
    ),
    img: "/images/machine/mixer/concrete-mixer-04.png",
    bg: true,
  };
  const faqData = [
    {
      title: "1. What's the exact capacity of Atlas’s concrete mixers?",
      content: (
        <span>
          The common industry notation 10/7 cft indicates 10 cubic feet drum
          volume (total) and ~7 cubic feet practical mixing (useful) volume per
          batch. This is the specification used by Atlas and multiple Indian
          manufacturers for this mixer size.
        </span>
      ),
    },
    {
      title: "2. How much concrete does one 10/7 mixer batch produce?",
      content: (
        <span>
          One practical batch (~7 cu.ft.) equals roughly ~0.198–0.20 m³
          (approximate; depends on mix density and aggregate moisture). Good for
          small slabs, footings, patch repairs or mortar for limited brickwork.
        </span>
      ),
    },
    {
      title: "3. Diesel vs Electric: Which is better for rural sites?",
      content: (
        <span>
          Diesel variants avoid the need for grid power and are commonly
          selected for remote sites. Electric models are preferred in
          urban/indoor sites for lower noise and emissions. Exact engine/motor
          sizing varies by model and OEM; Atlas lists diesel and electric
          options across their small mixer range.
        </span>
      ),
    },
    {
      title: "4. What prevents accidental drum rotation during loading?",
      content: (
        <span>
          Manual models typically use a locking pin or hand-wheel brake during
          loading. Hydraulic hopper variants include interlocks or mechanical
          arrangements that prevent unwanted drum rotation while the hopper is
          in the raised position. Confirm exact safety interlocks on the model
          spec sheet.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Rugged Construction",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Heavy-duty steel drum </span>
            with wear-resistant fins
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Galvanized frame </span>
            for corrosion resistance
          </li>
        </ul>
      ),
    },
    {
      title: "Easy Operation",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Simple lever-controlled discharge</span>
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Low-maintenance design</span> (grease
            points accessible)
          </li>
        </ul>
      ),
    },
    {
      title: "Flexible Power Options",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Diesel models </span>
            for job sites without electricity
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Electric models </span>
            for indoor/urban use
          </li>
        </ul>
      ),
    },
    {
      title: "Productivity Boosters",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Hydraulic hopper option </span>
            reduces labour by 50%
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Tilt mechanism </span>
            for complete material discharge
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
        <title>Concrete Mixers Manufacturer in India | Diesel & Electric | Atlas Technologies</title>
        <meta name="description" content="Diesel or electric, manual or hydraulic hopper — Atlas 10/7 concrete mixer machine does 0.2 m³ per batch on any site. 4 configurations. Get specs and factory price." />
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
        unit="KGs"
        productLinks={productLinks}
        products={products}
        note={
          <span>
            <ul className="pl-4 space-y-1 list-disc">
              <li>
                10 cu.ft. = total drum volume; 7 cu.ft. = net batch volume (~0.2
                m³ practical)
              </li>
              <li>
                Diesel engines (typically 5–6 HP) or electric motors (usually
                3-phase, 5 kW) match Atlas catalog specs
              </li>
            </ul>
          </span>
        }
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"Why Choose Atlas 10/7 Mixers?"}
        img={"/images/machine/mixer/concrete-mixer-03.png"}
      />

      <ContactForm
        page={"10/7 Concrete Mixer – Compact & Reliable (Product Listing page)"}
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
