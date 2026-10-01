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
      "@id": "https://www.atlastechnologiesindia.com/other-products/groove-cutter#product",
      name: "Atlas Heavy-Duty Groove Cutter — GC Series",
      description: "Atlas Technologies is a trusted groove cutter manufacturer in India. Our high-precision groove cutter is an essential concrete joint cutting machine for roads and industrial floors, engineered for durability with adjustable cutting depths and diamond blade compatibility.",
      image: {
        "@type": "ImageObject",
        url: "https://www.atlastechnologiesindia.com/assets/images/groove-cutter-machine.jpg",
      },
      brand: { "@type": "Brand", name: "Atlas" },
      sku: "ATLAS-GC-100",
      mpn: "GC-SERIES",
      category: "Construction Machinery > Cutting Equipment",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Cutting Depth", value: "Standard blade cut 100mm (Up to 200mm on request)" },
        { "@type": "PropertyValue", name: "Material Compatibility", value: "Concrete, Asphalt, and Natural Stone" },
        { "@type": "PropertyValue", name: "Special Feature", value: "Curved groove cutting (Min radius 1.5m)" },
        { "@type": "PropertyValue", name: "Power Options", value: "Electric Motor or Diesel Engine" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.atlastechnologiesindia.com/other-products/groove-cutter",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Atlas Technologies India" },
      },
      manufacturer: { "@id": "https://www.atlastechnologiesindia.com/#org" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/other-products/groove-cutter#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Other Products", item: "https://www.atlastechnologiesindia.com/other-products" },
        { "@type": "ListItem", position: 3, name: "Atlas Heavy-Duty Groove Cutter — GC Series", item: "https://www.atlastechnologiesindia.com/other-products/groove-cutter" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/other-products/groove-cutter#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What maximum depth can this machine cut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard blades cut up to 100 mm. Deeper blades up to 200 mm are available on request. Confirm the exact depth capability with Atlas before ordering for your specific application.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the same blade for asphalt and concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas groove cutters are compatible with diamond blades suited for both asphalt and concrete. However, for best results and blade longevity, confirm the appropriate blade grade with the Atlas team based on your specific surface material.",
      },
    },
    {
      "@type": "Question",
      name: "Does the machine support curved cutting for parking lots or roundabouts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the machine supports curved grooves with a minimum radius of 1.5 metres, thanks to its flexible guide system. This makes it ideal for parking lots, roundabouts, and other curved surface applications.",
      },
    },
  ],
};

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Atlas Groove Cutting
        <br className="hidden md:block" /> Machines
      </span>
    ),
    para: "Perfect Grooving for Roads, Airports & Industrial Floors",
    img: "/images/plants/groove-cutter/groove-diesel-2.png",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "Electric Model",
      minCapacity: null,
      maxCapacity: null,
      tags: "Best for: Urban projects | Features: Quieter operation",
      bestFor: "Remote Locations Without Electricity",
      url: "/electric-model",
    },
    {
      name: "Diesel Model",
      minCapacity: null,
      maxCapacity: null,
      tags: "Best for: Remote locations | Features: Independent operation",
      bestFor: "Urban Construction Sites",
      url: "/diesel-model",
      img: "/images/plants/groove-cutter/groove-diesel-1.png",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Reliable Groove Cutting for Every Construction Need",
    para: (
      <span>
        Atlas groove cutters are compact, mobile machines designed to deliver
        accurate, repeatable cuts in concrete and asphalt. It’s used for
        expansion joints, road repairs, runway maintenance, and industrial floor
        finishing. <br /> <br /> The Groove Cutting Machines are engineered for
        controlled, straight grooves in concrete and asphalt surfaces.
      </span>
    ),
    img: "/images/plants/groove-cutter/groove-diesel-2.png",
    bg: true,
  };
  const faqData = [
    {
      title: "1. What maximum depth can this machine cut?",
      content: (
        <span>
          Standard blades cut up to 100 mm; deeper blades (up to 200 mm) are
          listed as available on request in distributor listings. Confirm the
          exact depth capability for the model before ordering.
        </span>
      ),
    },
    {
      title: "2. Can I use the same blade for asphalt and concrete?",
      content: (
        <span>
          Many groove cutters are sold with blades suitable for both materials;
          trade listings indicate suitability for both asphalt and concrete, but
          confirm the blade grade with the supplier for your application.
        </span>
      ),
    },
    {
      title: "3. Are electric and diesel power options available?",
      content: (
        <span>
          Yes! The machine supports curved grooves with a minimum radius of 1.5
          meters, thanks to its flexible guide system. This feature is ideal for
          applications like roundabouts and parking lots.
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Accurate Cutting",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Up to 100 mm cutting depth</li>
          <li>Straight line cutting indicator for precision</li>
        </ul>
      ),
    },
    {
      title: "Built for Safety",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Sturdy guard for blade protection</li>
          <li>Controlled depth adjustment handle</li>
        </ul>
      ),
    },
    {
      title: "Easy to Operate",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Portable, mobile design</li>
          <li>Simple controls, no special skills needed</li>
        </ul>
      ),
    },
    {
      title: "Low Maintenance",
      content: (
        <ul className="pl-4 space-y-1 list-disc">
          <li>Durable frame and components</li>
          <li>Easy access for servicing and blade change</li>
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
        <title>Groove Cutting Machines Manufacturer | Diesel & Electric | Atlas Technologies</title>
        <meta name="description" content="100mm cutting depth, straight line indicator, diesel or electric — Atlas groove cutting machine for expansion joints, road repairs and runway maintenance. Enquire now." />
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
        note={
          "* Cutting depth: Up to 100 mm (standard), deeper blades on request"
        }
        hideCapacityFilter={false}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        img={"/images/plants/groove-cutter/groove-diesel-1.png"}
        title={"Why Choose Atlas Groove Cutting Machines?"}
      />

      <ContactForm
        formcontent={formcontent}
        page={"Atlas Groove Cutting Machines (Product Listing Page)"}
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
