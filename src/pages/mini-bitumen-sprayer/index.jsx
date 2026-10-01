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
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the key components of the Mini Bitumen Sprayer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI 3000 mini bitumen sprayer includes a galvanized and insulated bitumen tank, a high pressure diesel oil burner, a gear type bitumen pump with output between two hundred and three hundred liters per minute, a two horsepower single piston air compressor, and a six point five horsepower air cooled diesel engine.",
      },
    },
    {
      "@type": "Question",
      name: "How does the sprayer prevent bitumen cooling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The thermally insulated three ton tank is designed to handle different grades of bitumen while maintaining consistent temperature and viscosity during operation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the sprayer maintain bitumen temperature without reheating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The tank is manufactured using five millimeter thick mild steel, insulated with forty millimeter glass wool and protected by a galvanized outer shell. This construction minimizes heat loss and helps maintain workable bitumen temperature for several hours depending on ambient conditions.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of burner and fuel system does the AI 3000 use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI 3000 uses a high pressure diesel fired oil burner with fuel consumption of approximately seven to eight liters per hour, providing fast and uniform heating of the bitumen tank.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Mini Bitumen Sprayers <br className="hidden md:block" />
        [2T-3T Capacity]
      </span>
    ),
    para: "Efficient Hot Bitumen Spraying for Small Roads & Repairs",
    img: "/images/bitumen-sprayer/ai-3000-1.jpg",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "AI-3000 (3T)",
      minCapacity: 3,
      maxCapacity: 3,
      tags: "Tank: 3 Tons (5 mm MS sheet, insulated) | Best For: Small patchwork & rural road maintenance",
      mixerSize:
        "Spray Width: 2.4m–4.5m (customizable to 6m) | Engine: 25 HP (Kirloskar/Eicher) | Burner: 43,000 cal (main) + 26,000 cal (hand torch)",
      url: "/ai-3000",
      img: "/images/bitumen-sprayer/ai-3000-4.jpg",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Compact Power for Targeted Bitumen Application",
    para: (
      <span>
        Atlas Mini Bitumen Sprayers (Model AI-3000) are designed for small- to
        medium-scale road construction and maintenance projects. With a
        thermally insulated 3-ton (3000 L) galvanized tank, they keep bitumen at
        the right temperature while preventing heat loss. The hand-spray nozzle
        allows precise application, making it ideal for road shoulders, pothole
        patching, and narrow or hilly routes where larger distributors can’t
        operate.
      </span>
    ),
    img: "/images/bitumen-sprayer/ai-3000-2.jpg",
    bg: true,
  };
  const faqData = [
    {
      title: "1. What are the key components of the Mini Bitumen Sprayer?",
      content: (
        <span>
          The sprayer (AI-3000) includes a galvanized, insulated bitumen tank; a
          single high-pressure diesel oil burner; a gear-type bitumen pump
          (200–300 L/min); a 2 HP single-piston air compressor; and a 6.5 HP
          air-cooled diesel engine.
        </span>
      ),
    },
    {
      title: "2. How does your sprayer prevent bitumen cooling?",
      content: (
        <span>
          Yes, the{" "}
          <span className="font-bold">thermally insulated 3-ton tank</span> is
          designed to handle various grades of bitumen, ensuring consistent
          temperature and viscosity for all types
        </span>
      ),
    },
    {
      title:
        "3. How long does the sprayer maintain bitumen temperature without reheating?",
      content: (
        <span>
          The tank is made from 5 mm-thick MS sheet, insulated with 40 mm glass
          wool, and covered with a galvanized outer shell, minimizing heat loss
          during operation. The 40 mm glass wool insulation allows the bitumen
          to remain at workable temperature for many hours, depending on ambient
          conditions.
        </span>
      ),
    },
    {
      title: "4. What kind of burner and fuel system does AI-3000 use?",
      content: (
        <span>
          It features a high-pressure diesel-fired oil burner with fuel
          consumption of 7–8 L/hr, delivering fast, uniform heating for the
          bitumen tank.
        </span>
      ),
    },
  ];
  const faqData1 = [
    {
      title: "Portability & Ease of Use",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>Mounted on a towable chassis; no heavy truck required</li>
          <li>Hand-spray nozzle for precision in tight spaces</li>
        </ul>
      ),
    },
    {
      title: "Built for Humid Climates",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>Galvanized tank for extended life in humid/monsoon climates</li>
          <li>
            40 mm insulation keeps bitumen hot for hours without reheating
          </li>
        </ul>
      ),
    },
    {
      title: "Low Operational Costs",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>Economical diesel engine (max 1 L/hr fuel use)</li>
          <li>Manual clutch reduces pump and compressor wear</li>
        </ul>
      ),
    },
    {
      title: "Minimal Maintenance",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>Single-piston air compressor, simple and low-cost repairs</li>
          <li>
            Drain valve (more like a simple, compact flow control device) for
            quick and complete tank emptying
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
        <title>Mini Bitumen Sprayers - 3 Ton | Manufacturer in India | Atlas Technologies</title>
        <meta name="description" content="Towable, no truck needed — Atlas mini bitumen sprayer has 3-ton insulated tank, hand-spray nozzle for pothole patching and narrow routes. Get specs and price." />

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
        unit="TONS"
        productLinks={productLinks}
        products={products}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"What Sets Atlas Mini Bitumen Sprayer Apart?"}
        img="/images/bitumen-sprayer/ai-3000-3.jpg"
      />

      <ContactForm formcontent={formcontent} />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
