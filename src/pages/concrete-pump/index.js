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
      "@id": "https://www.atlastechnologiesindia.com/concrete-pump#product",
      name: "Stationary Concrete Pump — ACP 1400 Series",
      description: "Atlas Technologies is among the leading concrete pump manufacturers in India. Our mini concrete pump series, including the ACP 1405 D and ACP 1407 D, offers a reliable stationary concrete line pump solution for high-rise and infrastructure projects.",
      image: {
        "@type": "ImageObject",
        url: "https://www.atlastechnologiesindia.com/assets/images/concrete-pump.jpg",
      },
      brand: { "@type": "Brand", name: "Atlas" },
      sku: "ATLAS-ACP-1400",
      mpn: "ACP-1405-1407",
      category: "Construction Machinery > Concrete Pumping Equipment",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Vertical Reach", value: "Up to 120 m vertical" },
        { "@type": "PropertyValue", name: "Horizontal Reach", value: "300 m+ (site conditions apply)" },
        { "@type": "PropertyValue", name: "Aggregate Handling", value: "Up to 20–40 mm (model dependent)" },
        { "@type": "PropertyValue", name: "Hydraulic System", value: "Variable displacement for improved efficiency" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.atlastechnologiesindia.com/concrete-pump",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Atlas Technologies India" },
      },
      manufacturer: { "@id": "https://www.atlastechnologiesindia.com/#org" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/concrete-pump#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Concrete Pump", item: "https://www.atlastechnologiesindia.com/concrete-pump" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/concrete-pump#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What pipeline reach can I expect from ACP 1405 D and ACP 1407 D?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach varies with concrete mix, pipe diameter, and number of bends. Typical vertical reach for pumps in this class is in the 100–120 m range; horizontal reach can extend to several hundred metres in ideal conditions. Always request a site-specific pumping calculation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum aggregate size your pumps can handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maximum aggregate size depends on the pump kit, pipeline ID, and mix design. Many line and stationary pumps are specified for up to 20–40 mm aggregates depending on configuration. Confirm on the model spec sheet.",
      },
    },
    {
      "@type": "Question",
      name: "Can the pumps handle specialty mixes such as SCC or fibre mixes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ACP-class pumps are used with standard and specialty mixes including self-compacting and fibre-reinforced concrete. Mix viscosity, slump, and the presence of stiff fibres affect pumpability; always trial the mix before large pours.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Atlas Concrete Pumps
        <br className="hidden md:block" /> [ACP series]
      </span>
    ),
    para: "High-Pressure Pumping for High-Rise & Infrastructure Projects",
    img: "/images/machine/concert-pump/concrete-pump.jpg",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "ACP 1405 D",
      minCapacity: 100,
      maxCapacity: 100,
      tags: "Maximum Pipeline Length: 100 meters | Pressure: 145 bar",
      bestFor: "Remote Locations Without Electricity",
      url: "/acp-1405-d",
      img: "/images/machine/concert-pump/acp-1405-d/concrete-pump-01.png",
    },
    {
      name: "ACP 1407 D",
      minCapacity: 120,
      maxCapacity: 120,
      tags: "Maximum Pipeline Length: 120 Meters | Pressure: 170 bar",
      bestFor: "Urban Construction Sites",
      img: "/images/machine/concert-pump/acp-1407-d/concrete-pump-01.png",
      url: "/acp-1407-d",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Accurate Concrete Placement Where It's Needed",
    para: (
      <span>
        Atlas Concrete Pumps are engineered to deliver consistent and reliable
        concrete placement for large-scale projects. A reliable solution for
        high-rise buildings, bridges, industrial structures, or long-distance
        pipeline projects, these pumps ensure smooth and efficient concrete
        flow.
        <br /> <br />
        Available in two models, these pumps are designed to handle challenging
        site conditions while maintaining high performance and durability.
      </span>
    ),
    img: "/images/machine/concert-pump/acp-1405-d/concrete-pump-02.png",
    bg: true,
  };
  const faqData = [
    {
      title:
        "1. What pipeline reach can I expect from ACP 1405 D and ACP 1407 D?",
      content: (
        <span>
          Reach varies with concrete mix, pipe diameter, and number of bends.
          Typical published guidance for pumps in this class places vertical
          reach in the ~100–120 m range for many stationary 1400-series pumps;
          horizontal reach can extend to several hundred metres in ideal
          conditions. Always request a site-specific pumping calculation.
        </span>
      ),
    },
    {
      title: "2. What’s the maximum aggregate size your pumps can handle?",
      content: (
        <span>
          Maximum aggregate size depends on the pump kit, pipeline ID, and mix
          design. Many line and stationary pumps are specified for up to 20–40
          mm aggregates, depending on configuration, confirm on the model spec
          sheet, and with your mix design.
        </span>
      ),
    },
    {
      title: "3. Can the pumps handle specialty mixes (SCC, fibre mixes)?",
      content: (
        <span>
          Yes, ACP-class pumps are used with standard and specialty mixes
          (self-compacting, fibre-reinforced). Mix viscosity, slump, and the
          presence of stiff fibres affect pumpability; always trial the mix and
          consult the pump supplier before large pours.
        </span>
      ),
    },
    {
      title: "4. What about fuel consumption and efficiency claims?",
      content: (
        <span>
          Fuel use depends on engine size, hydraulic system (open vs closed
          loop), and duty cycle. Atlas materials reference variable displacement
          hydraulic systems and other design choices that improve operating
          efficiency, but published fuel-consumption percentages vary by site
          and configuration. We don’t recommend publishing a single “45 L/hr
          (-15%)” figure without a measured baseline.
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Reliable Pumping & Valve",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>
            <span className="font-bold">S-valve/rock-valve options</span> for
            smoother flow and lower wear in abrasive mixes
          </li>
          <li>
            Large diameter concrete cylinders and robust valve bodies for long
            service life
          </li>
        </ul>
      ),
    },
    {
      title: "Flexible Configuration for Reach",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>
            Multiple pump and pipeline diameters available to trade off pressure
            vs. distance
          </li>
          <li>
            Variable-displacement hydraulic systems for controlled output and
            adaptability to different mix types
          </li>
        </ul>
      ),
    },
    {
      title: "Serviceability & Durability",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Hardened pipeline elbows and wear parts are available</li>
          <li>
            Centralized grease points and accessible maintenance areas on the
            chassis
          </li>
        </ul>
      ),
    },
    {
      title: "Smart Control",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Touchscreen HMI with pressure monitoring</li>
          <li>Remote diagnostics via the Atlas Connect app</li>
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

  return (
    <>
      <Head>
        <title>Concrete Pump Machines Manufacturer | 100–120 m | Atlas Technologies</title>
        <meta name="description" content="Atlas ACP concrete pump machine handles high-rise, bridges and long-distance pumping. 2 models. Get specs and factory price." />
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
        unit="Meters"
        productLinks={productLinks}
        products={products}
        note={
          <ul className="pl-4 space-y-1 list-disc">
            <li>Pipeline Length: up to ~100–120 m</li>
            <li>
              “Pipeline length” is strongly affected by concrete mix (slump,
              aggregate), pipe internal diameter, number of bends/elbows, and
              pump pressure.
            </li>
          </ul>
        }
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        img={"/images/machine/concert-pump/acp-1405-d/concrete-pump-05.png"}
        minititle={"BENEFITS"}
        title={"Why Do Contractors Choose Atlas Concrete Pumps?"}
      />

      <ContactForm
        page={
          "Atlas Concrete Pumps [100-120m Pipeline] (Product Lisiting Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
