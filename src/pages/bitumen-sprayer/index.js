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
      "@id": "https://www.atlastechnologiesindia.com/bitumen-sprayer#product",
      name: "Self-Propelled Bitumen Pressure Distributor — Sprayer Series",
      description: "Atlas Technologies is among the premier bitumen sprayer manufacturers, providing high-precision road maintenance equipment. Features a heavy-duty bitumen sprayer pump and insulated tank for uniform truck-mounted distributor applications.",
      image: {
        "@type": "ImageObject",
        url: "https://www.atlastechnologiesindia.com/assets/images/bitumen-sprayer.jpg",
      },
      brand: { "@type": "Brand", name: "Atlas" },
      sku: "ATLAS-BS-SERIES",
      mpn: "BITUMEN-SPRAYER",
      category: "Construction Machinery > Road Maintenance",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Tank Capacity", value: "4,000 to 12,000 Litres" },
        { "@type": "PropertyValue", name: "Spray Bar Width", value: "2.4 Metres to 4.5 Metres" },
        { "@type": "PropertyValue", name: "Heating System", value: "High-Efficiency Oil Burner" },
        { "@type": "PropertyValue", name: "Bitumen Types", value: "Bitumen emulsions, Cutback bitumen, Paving grade bitumen" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.atlastechnologiesindia.com/bitumen-sprayer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Atlas Technologies India" },
      },
      manufacturer: { "@id": "https://www.atlastechnologiesindia.com/#org" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/bitumen-sprayer#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Asphalt Machines", item: "https://www.atlastechnologiesindia.com/asphalt-machines" },
        { "@type": "ListItem", position: 3, name: "Bitumen Sprayer", item: "https://www.atlastechnologiesindia.com/bitumen-sprayer" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/bitumen-sprayer#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the function of the bitumen sprayer pump in the Atlas distributor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The bitumen sprayer pump is a heavy-duty positive displacement gear pump designed to deliver constant pressure to the spray bar, ensuring a uniform application rate regardless of truck speed variations.",
      },
    },
    {
      "@type": "Question",
      name: "How does Atlas ensure uniform spraying across the entire road width?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our bitumen Sprayer is equipped with a foldable spray bar featuring CNC-machined nozzles and a pressure-regulating valve to maintain a consistent fan spray pattern.",
      },
    },
    {
      "@type": "Question",
      name: "Can this truck mounted bitumen distributor handle different types of bitumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the Atlas sprayer is versatile enough to handle bitumen emulsions, cutback bitumen, and paving grade bitumen with an integrated air-cleaning facility to keep lines clear.",
      },
    },
    {
      "@type": "Question",
      name: "What are the available tank capacities for Atlas bitumen sprayers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a range of capacities starting from 4,000 litres for road maintenance up to 12,000 litres for large-scale highway construction projects.",
      },
    },
    {
      "@type": "Question",
      name: "How is the cleaning process handled to prevent nozzle clogging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The machine features a high-pressure air cleaning system that flushes the spray bar and nozzles with air and diesel after operation to prevent bitumen solidification.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Bitumen Pressure Distributors <br className="hidden md:block" />{" "}
        [Sprayers]
      </span>
    ),
    para: "Precision in Every Bitumen Spray Stroke",
    img: "/images/plants/bitman/bitumen-sprayer-banner.JPG",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "AE-4000 (4T)",
      minCapacity: 4,
      maxCapacity: 4,
      tags: (
        <span>
          <b>Spray Width:</b> 2.4 m – 3.8 m <br />
          <b>Engine:</b> 25 HP (Kirloskar, air-cooled diesel) <br />
          <b>Best For:</b> Small patchwork, narrow roads, private driveways
        </span>
      ),
      url: "ae-4000",
      img : "/images/bitumen-sprayer/newreplaced-17.webp"
    },
    {
      name: "AE-6000 (6T)",
      minCapacity: 6,
      maxCapacity: 6,
      tags: (
        <span>
          <b>Spray Width:</b> 2.4 m – 4.2 m <br />
          <b>Engine:</b> 25 HP (Kirloskar, air-cooled, twin-cylinder diesel){" "}
          <br />
          <b>Best For:</b> Pothole repairs, small road patches
        </span>
      ),
      url: "ae-6000",
      img : "/images/bitumen-sprayer/newreplaced-21.webp"
    },
    {
      name: "AE-8000 (8T)",
      minCapacity: 8,
      maxCapacity: 8,
      tags: (
        <span>
          <b>Spray Width:</b> 2.4 m – 4.2 m <br />
          <b>Engine:</b> 25 HP Kirloskar + air compressor <br />
          <b>Best For:</b> Municipal roads, rural highways
        </span>
      ),
      url: "ae-8000",
      img :"/images/bitumen-sprayer/newreplaced-20.webp"
    },
    {
      name: "WITH HYD. HOPPER ELECTRIC MODEL",
      minCapacity: null,
      maxCapacity: null,
      tags: (
        <span>
          <b>Spray Width:</b> 2.4 m – 4.5 m <br />
          <b>Engine:</b> 25 HP Kirloskar, hydraulic-driven pump with electric
          controls <br />
          <b>Best For:</b> High-precision applications with automated hopper
          control
        </span>
      ),
      url: "hyd-hopper-electric-model",
      img :"/images/bitumen-sprayer/newreplacedsixteen.webp"
    },
    {
      name: "AE-10000 (10T)",
      minCapacity: 10,
      maxCapacity: 10,
      tags: (
        <span>
          <b>Spray Width:</b> 2.4 m – 4.5 m <br />
          <b>Engine:</b> 25 HP Kirloskar, heavy-duty clutch drive <br />
          <b>Best For:</b> State highways, large-scale resurfacing
        </span>
      ),
      url: "ae-10000",
      img :"/images/bitumen-sprayer/newreplaced-14.webp"
    },
    {
      name: "AE-12000 (12T)",
      minCapacity: 12,
      maxCapacity: 12,
      tags: (
        <span>
          <b>Spray Width:</b> 2.4 m – 4.5 m <br />
          <b>Engine:</b> 25 HP Kirloskar, gear-type pump (450 L/min) <br />
          <b>Best For:</b> National highways, long road stretches
        </span>
      ),
      url: "ae-12000",
      img :"/images/bitumen-sprayer/newreplaced-19.webp"
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Uniform Asphalt Spraying for Flawless Road Construction",
    para: (
      <span>
        Atlas Bitumen Pressure Distributors deliver{" "}
        <span className="font-bold">
          uniform and temperature-controlled bitumen spraying
        </span>{" "}
        for superior road adhesion. The thermally insulated storage tank retains
        heat for extended periods, while the foldable spray bar ensures uniform
        coverage for a variety of road widths.
      </span>
    ),
    img: "/images/plants/bitman/bitumen-sprayer-overview.png",
    bg: true,
  };
  const faqData = [
    {
      title: "1. Can I use my existing truck for the sprayer?",
      content: (
        <span>
          Yes, our <span className="font-bold">Bitumen Sprayers</span> can be
          mounted on any new or old truck chassis, offering flexibility and cost
          savings.
        </span>
      ),
    },
    {
      title: "2. How does your sprayer prevent bitumen cooling?",
      content: (
        <span>
          The <strong>thermally insulated storage tank</strong> with glass wool
          coating retains heat, while the <strong>direct heating burner</strong>{" "}
          ensures a consistent temperature during operation.
        </span>
      ),
    },
    {
      title: "3. What’s the cleaning process?",
      content: (
        <span>
          Atlas Bitumen Sprayers feature a pressurized cleaning system that uses
          diesel and compressed air to flush the spray bar, pipelines, and
          nozzles after each use. The auxiliary hand torch burner can be used in
          cold weather to clear any stubborn bitumen residue, ensuring the
          system stays clog-free and ready for the next job.
        </span>
      ),
    },
    {
      title: "4. What type of burner is used in Atlas Bitumen Sprayers?",
      content: (
        <span>
          Atlas Bitumen Sprayers use a high-pressure diesel-fired burner
          designed for direct heating of the bitumen tank. The burner capacity
          is matched to the tank size to ensure rapid heating and temperature
          stability. An auxiliary hand-held torch burner is also supplied for
          cleaning pipelines or heating small sections in cold conditions.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Unmatched Adaptability",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">
              Mounts on both new and existing truck chassis
            </span>
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Foldable spray bars</span> for flexible
            road widths (2.4 m to ~4.5 m)
          </li>
        </ul>
      ),
    },
    {
      title: "Built to Endure Harsh Conditions",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">50 mm glass wool insulation</span> for
            heat retention
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Sturdy build quality</span> for
            heavy-duty use
          </li>
        </ul>
      ),
    },
    {
      title: "Superior Spray Control",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">
              Pressure gauge and regulating valve
            </span>{" "}
            for precise application
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Adjustable spray width</span> for
            varying projects
          </li>
        </ul>
      ),
    },
    {
      title: "Low Maintenance, High Efficiency",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Simple flushing system</span> to prevent
            nozzle clogging
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Proven, reliable gear pump design</span>{" "}
            (≈450 L/min output)
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
        <title>Bitumen Sprayers — 4T to 12T | Manufacturer & Distributor | Atlas Technologies</title>
        <meta name="description" content="Foldable spray bar, thermally insulated tank, mounts on any truck chassis — Atlas bitumen sprayer range from 4T to 12T. 6 models for every road type. Get specs and price." />

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
        unit="T"
        productLinks={productLinks}
        products={products}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"Why Choose Atlas Bitumen Sprayers?"}
        img={"/images/plants/bitman/bitumen-sprayer-faq.png"}
      />

      <ContactForm formcontent={formcontent} />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
