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
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.atlastechnologiesindia.com/other-products/kerb-laying-machine#product",
      name: "Atlas Automatic Kerb Laying Machine — XL Series",
      description: "Atlas Technologies manufactures the premier automatic slipform kerb machine. Our concrete laying machine lineup, including the XL-550 and XL-400, delivers ±3mm alignment accuracy for precision highway curbing and infrastructure projects.",
      image: {
        "@type": "ImageObject",
        url: "https://www.atlastechnologiesindia.com/assets/images/kerb-laying-machine.jpg",
      },
      brand: { "@type": "Brand", name: "Atlas" },
      sku: "ATLAS-XL-SERIES",
      mpn: "XL-550-XL-400",
      category: "Construction Machinery > Road Paving Equipment",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Laying Speed", value: "XL-550: 2.3 m/min | XL-400: 1.8 m/min" },
        { "@type": "PropertyValue", name: "Alignment Accuracy", value: "±3mm via auto-steering" },
        { "@type": "PropertyValue", name: "Kerb Height Capacity", value: "XL-550: up to 450mm | XL-400: up to 300mm" },
        { "@type": "PropertyValue", name: "Minimum Radius", value: "5 meters (XL-550)" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.atlastechnologiesindia.com/other-products/kerb-laying-machine",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Atlas Technologies India" },
      },
      manufacturer: { "@id": "https://www.atlastechnologiesindia.com/#org" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/other-products/kerb-laying-machine#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Other Products", item: "https://www.atlastechnologiesindia.com/other-products" },
        { "@type": "ListItem", position: 3, name: "Atlas Automatic Kerb Laying Machine — XL Series", item: "https://www.atlastechnologiesindia.com/other-products/kerb-laying-machine" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/other-products/kerb-laying-machine#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the maximum kerb height capacity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The XL-550 supports heights up to 450 mm, while the XL-400 supports up to 300 mm. These are ideal for diverse national highway and urban curbing specifications.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can the machine lay kerbs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The XL-550 operates at approximately 2.3 metres per minute and the XL-400 at approximately 1.8 metres per minute, both maintaining ±3mm alignment accuracy via auto-steering.",
      },
    },
    {
      "@type": "Question",
      name: "Can the machine handle curved kerb profiles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the XL-550 is capable of laying kerbs with a minimum radius of 5 metres. Curved profiles require proper calibration and setup adjustments.",
      },
    },
    {
      "@type": "Question",
      name: "How often should the machine be serviced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Routine maintenance checks are recommended every 50 operating hours, with major servicing at intervals specified in the Atlas official maintenance guidelines.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Kerb Laying Machines
        <br className="hidden md:block" />
        [XL-550]
      </span>
    ),
    para: "Slip-Form Paving for Road Dividers & Concrete Edging",
    img: "/images/plants/kerb-laying/KERB LAYING MACHINE.png",
    scrollTarget: "product-list",
  };
  const products = [
    // {
    //   name: "XL-400",
    //   minCapacity: null,
    //   maxCapacity: null,
    //   tags: "Engine: Diesel-Powered | Best For: Small-to-Medium Scale Projects",
    //   bestFor: "Remote Locations Without Electricity",
    //   url: "/XL-400",
    //   img: "/images/plants/kerb-laying/kreb-1.jpeg",
    // },
    {
      name: "XL-550",
      minCapacity: null,
      maxCapacity: null,
      tags: "Engine: 27 kW (36 HP) Water-Cooled Diesel Engine | Best For: Large-Scale and High-Precision Projects",
      bestFor: "Urban Construction Sites",
      url: "/XL-550",
      img: "/images/plants/kerb-laying/kerb-5.png",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Professional Kerb Casting Solutions",
    para: (
      <span>
        Atlas XL Series machines are designed for{" "}
        <span className="font-bold">precise and efficient</span> laying of
        concrete kerbs, dividers, and other structures. Whether you’re working
        on roads, highways, urban infrastructure, or landscaping projects, these
        machines deliver exceptional performance with minimal maintenance.
        <br /> <br />
        Available in two models, these machines are built to handle challenging
        site conditions while ensuring durability, accuracy, and productivity.
      </span>
    ),
    img: "/images/plants/kerb-laying/kerb.jpeg",
    bg: true,
  };
  const faqData = [
    {
      title: "1. What is the maximum kerb height capacity?",
      content: (
        <span>
          <ul className="pl-4 list-disc list-inside">
            <li>
              <span className="font-bold">XL-550:</span> Up to 450 mm.
            </li>
            <li>
              <span className="font-bold">XL-400:</span> Up to 300 mm.
            </li>
          </ul>
          These capacities are based on available specifications and may vary
          depending on specific configurations and site conditions.
        </span>
      ),
    },
    {
      title: "2. How fast can the machine lay kerbs?",
      content: (
        <span>
          <ul className="pl-4 list-disc list-inside">
            <li>
              <span className="font-bold">XL-550:</span> Approximately 2.3
              meters per minute.
            </li>
            <li>
              <span className="font-bold">XL-400:</span> Approximately 1.8
              meters per minute.
            </li>
          </ul>
          Both maintain ±3mm alignment accuracy on curves via auto-steering.
        </span>
      ),
    },
    {
      title: "3. What is the engine power for each model?",
      content: (
        <span>
          <ul className="pl-4 list-disc list-inside">
            <li>
              <span className="font-bold">XL-550:</span> Equipped with a 27 kW
              (36 HP) water-cooled diesel engine.
            </li>
            <li>
              <span className="font-bold">XL-400:</span> Engine specifications
              are not explicitly detailed in available sources.
            </li>
          </ul>
          For precise engine specifications, it&apos;s recommended to consult
          Atlas Industries directly.
        </span>
      ),
    },
    {
      title: "4. Can the machine handle curved kerb profiles?",
      content: (
        <span>
          <ul className="pl-4 list-disc list-inside">
            <li>
              <span className="font-bold">XL-550:</span> Capable of laying kerbs
              with a minimum radius of 5 meters.
            </li>
            <li>
              <span className="font-bold">XL-400:</span> Suitable for larger
              radius curves; specific minimum radius not specified in available
              sources.
            </li>
          </ul>
          Curved kerb laying requires proper calibration and setup adjustments.
        </span>
      ),
    },
    {
      title: "5. How often should the machine be serviced?",
      content: (
        <span>
          <ul className="pl-4 list-disc list-inside">
            <li>
              <span className="font-bold">Routine Maintenance:</span> Regular
              checks every 50 operating hours are recommended.
            </li>
            <li>
              <span className="font-bold">Major Servicing:</span> Comprehensive
              servicing should be done at intervals specified in the user
              manual.
            </li>
          </ul>
          Always refer to the official Atlas Industries maintenance guidelines
          for detailed servicing schedules.
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Smooth & Efficient Operation",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            • Hydrostatic drive allows{" "}
            <span className="font-bold">infinitely variable speed control</span>
            .
          </li>
          <li>
            • Reduces mechanical complexity and{" "}
            <span className="font-bold">maintenance effort</span>.
          </li>
        </ul>
      ),
    },
    {
      title: "Flexible Mould System",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            • Side-mounted <span className="font-bold">modular molds</span> for
            different kerb profiles.
          </li>
          <li>
            • Quick adaptation between profiles{" "}
            <span className="font-bold">
              (without specifying unsupported claims)
            </span>
            .
          </li>
        </ul>
      ),
    },
    {
      title: "Durable Construction",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            • <span className="font-bold">Steel track chassis</span> ensures
            stability on uneven surfaces.
          </li>
          <li>
            • Built to{" "}
            <span className="font-bold">withstand tough site conditions</span>.
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Automation",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            • The <span className="font-bold">XL-550 model</span> comes with
            auto-grade & slope sensors.
          </li>
          <li>
            • Optional{" "}
            <span className="font-bold">laser guidance available</span> for
            enhanced accuracy.
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
        <title>Kerb Laying Machines Manufacturer India | XL-400 & XL-550 | Atlas Technologies</title>
        <meta name="description" content="Slip-form concrete kerb laying machines — up to 450mm kerb height, hydrostatic drive, curved profile capability. Compare XL-400 and XL-550. Get factory price from Atlas." />
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
        hideCapacityFilter={false}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        img={"/images/plants/kerb-laying/KERB LAYING MACHINE.png"}
        title={"Why Is Atlas's Kerb Layers Preferred?"}
      />

      <ContactForm
        page={"Kerb Laying Machines [XL-400 & XL-550] (Product Listing Page)"}
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
