import Category_Banner from "../../../components/category/category_banner";
import Category_intro from "../../../components/category/category_intro";
import Expolre_category from "../../../components/category/expolore_category";
import FAQSection1 from "../../../components/category/faq1";
import FAQSection2 from "../../../components/category/faq2";

import ContactForm from "../../../components/category/form";
import Blog from "../../../components/homepage/blog";
import Certified from "../../../components/homepage/certified";
import Clients from "../../../components/homepage/clients";
import Head from "next/head";
import WorldMapComponent from "../../../components/homepage/mapview";
const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.atlastechnologiesindia.com/other-products#collection",
      name: "Specialized Road Construction & Maintenance Machinery",
      description: "A comprehensive range of auxiliary road construction machinery including hydraulic brooms, kerb laying machines, vacuum dewatering systems, and groove cutters by Atlas Technologies.",
      url: "https://www.atlastechnologiesindia.com/other-products",
      publisher: { "@id": "https://www.atlastechnologiesindia.com/#org" },
      isPartOf: { "@id": "https://www.atlastechnologiesindia.com/#website" },
      mainEntity: {
        "@type": "ItemList",
        "@id": "https://www.atlastechnologiesindia.com/other-products#itemlist",
        name: "Specialized Road Construction & Maintenance Machinery — Range",
        numberOfItems: 4,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hydraulic Brooms / Road Sweepers", description: "Tractor-mounted hydraulic broom units for efficient road cleaning and dust suppression.", url: "https://www.atlastechnologiesindia.com/other-products/hydraulic-broomer" },
          { "@type": "ListItem", position: 2, name: "Kerb / Curb Laying Machines", description: "Automatic slipform kerb pavers for high-speed casting of concrete curbs on highways and urban roads.", url: "https://www.atlastechnologiesindia.com/other-products/kerb-laying-machine" },
          { "@type": "ListItem", position: 3, name: "Vacuum Dewatering Systems", description: "Specialized equipment for high-strength Tremix flooring and concrete pavement dewatering.", url: "https://www.atlastechnologiesindia.com/other-products/vacuum-dewatering-systems" },
          { "@type": "ListItem", position: 4, name: "Groove / Curb Cutting Tools", description: "High-precision tools for expansion joint cutting and curb finishing in concrete infrastructure.", url: "https://www.atlastechnologiesindia.com/other-products/groove-cutter" },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.atlastechnologiesindia.com/other-products#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.atlastechnologiesindia.com/" },
        { "@type": "ListItem", position: 2, name: "Other Products", item: "https://www.atlastechnologiesindia.com/other-products" },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.atlastechnologiesindia.com/other-products#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How durable are Atlas road construction machines for heavy-duty highway use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlas road machines like our hydraulic brooms and kerb pavers are built with high-grade steel and heavy-duty hydraulic components, specifically engineered for long service life on demanding national highway projects.",
      },
    },
    {
      "@type": "Question",
      name: "Are these machines suitable for remote or off-grid construction sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our auxiliary equipment is designed for high operational practicality. Most units are either tractor-mounted or feature independent power units, making them ideal for remote sites where external power is limited.",
      },
    },
    {
      "@type": "Question",
      name: "Do Atlas road sweepers come with dust suppression systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many of our hydraulic broom models include optional water-spray systems and dust hoppers to minimize airborne particulate matter, ensuring compliance with urban environmental regulations.",
      },
    },
  ],
};

export default function Category() {
  const category_banner_data = {
    title: "Road Construction Machinery",
    para: "Precision Tools for Modern Infrastructure Development",
    img: "/images/plants/kerb-laying/kerb-5.png",
    pdfPath: "/static/brochure/Concrete-Plants.pdf",
    scrollTarget: "products-section",
  };
  const category_intro_data = {
    subtitle: "Overview",
    title: "Engineered for Efficiency & Durability",
    para: (
      <span>
        Atlas road construction machinery is built for heavy use on paving,
        cleaning and maintenance tasks. Our range, from hydraulic brooms and
        curb/kerb-laying machines to vacuum-dewatering and groove-cutting
        equipment, is designed for long service life, easy maintenance and
        dependable on-site performance. See product pages and catalogs for
        model-level specs and export options.
      </span>
    ),
    img: "/images/ascb/ascb.JPG",
  };

  const faqData2 = [
    {
      title: "1. How durable are Atlas road machines?",
      content: (
        <>
          Atlas machines use robust frames and wear parts designed for
          construction environments; routine maintenance (recommended in product
          manuals) keeps operating life high. See product brochures for
          wear-part lists and maintenance intervals.
        </>
      ),
    },
    {
      title: "2. Are these machines suitable for remote projects?",
      content: (
        <>
          Yes, many units are diesel-driven and designed to operate off-grid.
          For long deployments, discuss spare-parts provisioning and local
          service options with Atlas.
        </>
      ),
    },
    {
      title:
        "3. Can Atlas machines be configured for dust suppression and reduced emissions?",
      content: (
        <>
          Yes, sweepers can be fitted with water-spray and dust-hopper options
          to reduce airborne dust. For emissions controls, check the specific
          engine/burner options on each model.
        </>
      ),
    },
    {
      title: "4. Do you provide training and commissioning?",
      content: (
        <>
          Atlas provides product documentation and typically supports
          commissioning and operator familiarization; contact your regional
          Atlas representative for details and scheduling.
        </>
      ),
    },
  ];

  const categories = ["Machinery"];

  const data = {
    Machinery: [
      {
        title: "Hydraulic Brooms / Road Sweepers",
        description: (
          <span>
            Tractor- or vehicle-mounted{" "}
            <span className="font-bold">hydraulic broom units</span> designed
            for sweeping and light debris clearance. Several models include{" "}
            <span className="font-bold">dust hoppers</span> and optional{" "}
            <span className="font-bold">water-spray systems</span> to minimize
            airborne dust while sweeping.
          </span>
        ),
        image: "/images/plants/Hydraulic Broom/hydraulic-broom-01.png",
        link: "/other-products/hydraulic-broomer",
      },
      // {
      //   title: "Groove / Curb Cutting & Related Tools",
      //   description: (
      //     <span>
      //       Handheld and machine-operated{" "}
      //       <span className="font-bold">curb-cutters, slotters,</span> and{" "}
      //       <span className="font-bold">groove cutting units</span> used for
      //       joints, skid-resistance grooves, and surface preparation. Available
      //       in <span className="font-bold">electric and diesel</span> drive
      //       variants depending on model.
      //     </span>
      //   ),
      //   image: "/images/plants/groove-cutter/groove-diesel-2.png",
      //   link: "/other-products/groove-cutter",
      // },
      {
        title: "Vacuum Dewatering Systems",
        description: (
          <span>
            Modular <span className="font-bold">vacuum-dewatering lines</span>{" "}
            including vacuum pumps, screed vibrators, power trowels/floater, and
            groove cutters. Designed to{" "}
            <span className="font-bold">remove excess water</span> from freshly
            laid concrete, accelerating strength gain and improving pavement
            durability.
          </span>
        ),
        image: "/images/plants/vds/vds-02.png",
        link: "/other-products/vacuum-dewatering-systems",
      },
      {
        title: "Kerb / Curb Laying Machines",
        description: (
          <span>
            High-precision{" "}
            <span className="font-bold">slip-form kerb pavers</span> and
            kerb-laying machines that produce continuous, uniform kerbs.
            Available in{" "}
            <span className="font-bold">
              track-mounted and automatic variants
            </span>{" "}
            with interchangeable moulds for different kerb profiles.
          </span>
        ),
        image: "/images/plants/kerb-laying/KERB LAYING MACHINE.png",
        link: "/other-products/kerb-laying-machine",
      },
    ],
  };

  const faqData1 = [
    {
      title: "1. Rugged Performance & Serviceability",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Heavy-duty <span className="font-bold">frames and wear parts</span>{" "}
            designed for long life in demanding construction environments.
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Easy access</span> to wear components
            and straightforward{" "}
            <span className="font-bold">spare parts replacement</span> for
            minimal downtime.
          </li>
        </ul>
      ),
    },
    {
      title: "2. Operational Practicality",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Diesel-powered units</span> are ideal
            for remote or off-grid sites where power is unavailable.
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Optional{" "}
            <span className="font-bold">
              water-spray and dust suppression systems
            </span>{" "}
            for sweepers, and{" "}
            <span className="font-bold">modular vacuum dewatering lines</span>{" "}
            to suit varied project scales.
          </li>
        </ul>
      ),
    },
    {
      title: "3. Fit-for-Purpose Options",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Custom moulds</span> for kerb designs,
            multiple broom widths, and varied hopper capacities.
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Modular dewatering packages</span>{" "}
            engineered to match specific field requirements precisely.
          </li>
        </ul>
      ),
    },
    {
      title: "4. After-Sales",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span> Access
            detailed{" "}
            <span className="font-bold">product brochures and catalogs</span>{" "}
            for in-depth technical information.
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Fast response</span> for spare parts
            inquiries, with{" "}
            <span className="font-bold">regional and global support</span>{" "}
            availability.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          Atlas Technologies – Road Construction Machinery & Equipment
        </title>

        <meta
          name="description"
          content="Explore high-quality road construction machinery from Atlas Technologies, including brooms, curb cutters, dewatering units and compact equipment for efficient site work."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(collectionSchema),
          }}
        />
      </Head>

      <Category_Banner data={category_banner_data} />
      <Category_intro data={category_intro_data} />
      <Expolre_category
        data={data}
        categories={categories}
        active="Machinery"
      />
      <FAQSection1
        faqData={faqData1}
        minititle={"Why Choose Our Road Construction Machinery"}
        title={"Engineering Excellence That Paves the Way Forward"}
        img={"/images/plants/kerb-laying/kreb-4.jpeg"}
      />
      {/* <Certified
        title={
          <span>
            From Rural Roads to Mega Infrastructure, Atlas Plants Deliver
            <br className="hidden md:block" /> Consistent Performance Every Step
            of the Way
          </span>
        }
        buttonText="Explore More"
        images={Array(30).fill("/images/comman/atlas.png")}
      /> */}
      <WorldMapComponent />
      <Blog />
      {/* <Clients
        title="Trusted by Global Builders"
        images={Array(30).fill("/images/comman/atlas.png")}
        marqueeSpeed={60}
        gradientColor={[200, 200, 200]}
      /> */}

      <ContactForm page={"Concrete Plants & Machines Product Page"} />
      <FAQSection2 faqData={faqData2} bg={"#E7F1E9"} />
    </>
  );
}
