import Category_Banner from "../../../components/category/category_banner";
import Category_intro from "../../../components/category/category_intro";
import Expolre_category from "../../../components/category/expolore_category";
import FAQSection1 from "../../../components/category/faq1";
import FAQSection2 from "../../../components/category/faq2";

import ContactForm from "../../../components/category/form";
import Blog from "../../../components/homepage/blog";
import Certified from "../../../components/homepage/certified";
import Clients from "../../../components/homepage/clients";

import WorldMapComponent from "../../../components/homepage/mapview";

export default function Category() {
  const category_banner_data = {
    title: "Road Construction Machinery",
    para: "Precision Tools for Modern Infrastructure Development",
    img: "/images/comman/bg3.jpeg",
  };
  const category_intro_data = {
    subtitle: "Overview",
    title: "Engineered for Efficiency & Durability",
    para: (
      <span>
        Atlas road construction machinery combines{" "}
        <span className="font-bold">military-grade reliability</span>
        with <span className="font-bold">innovative technology</span> to tackle
        the toughest paving, cleaning, and maintenance challenges. Trusted by
        highway authorities and urban developers across 60+ countries, our
        equipment delivers{" "}
        <span className="font-bold">unmatched productivity</span> in road
        rehabilitation,{" "}
        <span className="font-bold">eco-friendly operation</span> (low emissions
        & noise), and <span className="font-bold">quick ROI</span> through fuel
        efficiency and low maintenance.
      </span>
    ),
    img: "/images/comman/intro.png",
  };

  const faqData2 = [
    {
      title:
        "1. How does Atlas ensure the durability of its road construction machinery?",
      content: (
        <>
          Our machinery is built with{" "}
          <span className="font-bold">military-grade components</span> and
          wear-resistant materials to withstand extreme conditions. Regular
          maintenance, such as greasing bearings every 50 operating hours,
          ensures long service life and minimal downtime.
        </>
      ),
    },
    {
      title:
        "2. Are Atlas road construction machines suitable for remote locations?",
      content: (
        <>
          Yes, our machines, including{" "}
          <span className="font-bold">groove cutters</span> and{" "}
          <span className="font-bold">hydraulic brooms</span>, are available
          with <span className="font-bold">diesel-powered engines</span>, making
          them ideal for remote locations without reliable electricity access.
        </>
      ),
    },
    {
      title:
        "3. How does Atlas support customers after purchasing road construction machinery?",
      content: (
        <>
          We provide comprehensive support, including
          <span className="font-bold"> on-site commissioning</span> operator
          training, and{" "}
          <span className="font-bold"> 24/7 global technical assistance.</span>
          Our local spare parts hubs ensure quick resolution of issues within{" "}
          {"<"}48 hours.
        </>
      ),
    },
    {
      title: "4. Is operator training provided for Road Construction Machines?",
      content: (
        <>
          Free <span className="font-bold">2-day onsite training</span> with:
          <ul className="pl-4 mt-2 list-disc list-inside">
            <li>Machine operation</li>
            <li>Basic troubleshooting</li>
            <li>Safety protocols</li>
          </ul>
        </>
      ),
    },
  ];

  const categories = ["Machines"];

  const data = {
    Machines: [
      {
        title: "road-construction-machinery",
        description: (
          <span>
            Efficient and versatile, our hydraulic brooms ensure thorough
            cleaning of roads, highways, and urban spaces. With{" "}
            <span className="font-bold">
              optional dust collection and water sprinkling systems
            </span>
            , they minimize airborne dust for a cleaner environment.
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Groove Cutting Machines",
        description: (
          <span>
            Precision-engineered for cutting clean grooves in concrete and
            asphalt surfaces, these machines are ideal for roads, runways, and
            industrial floors. Available with{" "}
            <span className="font-bold">
              electric or diesel-powered options
            </span>{" "}
            for flexibility.
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "Vacuum Dewatering Systems",
        description: (
          <span>
            Designed for efficient water{" "}
            <span className="font-bold">removal during road construction</span>,
            our vacuum dewatering systems enhance pavement strength and
            durability, ensuring long-lasting road surfaces.
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
      {
        title: "removal during road construction",
        description: (
          <span>
            Our slip-form kerb laying machines deliver precise, levelled, and{" "}
            <span className="font-bold">
              consistent kerbs for roads, highways, and urban infrastructure.
            </span>{" "}
            Quick-change mould mechanisms let rapid adaptation to different
            designs.{" "}
          </span>
        ),
        image: "/images/comman/dump.png",
        link: "#",
      },
    ],
  };

  const faqData1 = [
    {
      title: "1. Rugged Performance",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">All-terrain capability </span>(slopes up
            to 25%)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>
            <span className="font-bold">Dust-proof electronics </span> for
            desert/monsoon conditions
          </li>
        </ul>
      ),
    },
    {
      title: "2. Smart Operation",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">IoT-enabled diagnostics </span>
            (predictive maintenance)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Ergonomic controls </span> (reduces
            operator fatigue)
          </li>
        </ul>
      ),
    },
    {
      title: "3. Sustainable Design",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">RAP-compatible </span> groove cutters
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold"> Water recycling </span> technology
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold">Hybrid power options </span> in vacuum
            systems
          </li>
        </ul>
      ),
    },
    {
      title: "4.  Global Support ",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            <span className="font-bold"> {"<"}24hr response </span> via 12
            regional hubs
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>
            <span className="font-bold"> 3-year warranty </span> on critical
            components
          </li>
        </ul>
      ),
    },
  ];

  const formcontent = {
    title: "Build Smarter Roads Today!          ",
    description:
      "Whether you’re paving highways or maintaining urban streets, our team is here to help. We deliver road construction machinery and solutions that empower engineering precision and rapid completion. ",
  };
  return (
    <>
      <Category_Banner data={category_banner_data} />
      <Category_intro data={category_intro_data} />
      <Expolre_category active="Machines" data={data} categories={categories} />
      <FAQSection1
        faqData={faqData1}
        minititle={"Why Choose Our Road Construction Machinery"}
        title={"Engineering Excellence That Paves the Way Forward"}
      />
      <Certified
        title={
          <span>
            From Urban Streets to National Highways, We Deliver Consistent
            <br className="hidden md:block" /> Performance Every Step of the Way
          </span>
        }
        buttonText="Explore More"
        images={Array(30).fill("/images/comman/atlas.png")}
      />
      <WorldMapComponent />
      <Blog />
      <Clients
        title="Reliable Partners, Globally!"
        images={Array(30).fill("/images/comman/atlas.png")}
        marqueeSpeed={60}
        gradientColor={[200, 200, 200]}
      />

      <ContactForm
        page={"Road Construction Machinery (Product Listing Page)"}
      />
      <FAQSection2 faqData={faqData2} bg={"#E7F1E9"} />
    </>
  );
}
