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

export default function Stationary_abp() {
  //<br className="hidden md:block" />
  const category_banner_data = {
    title: (
      <span>
        Mobile Concrete Batching Plants
        <br className="hidden md:block" /> - Pan Mixer [25-30 m³/hr]
      </span>
    ),
    para: "Economical Mixing On-The-Move for Rural & Small Projects",
    img: "/images/comman/bg3.jpeg",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "MOBMIX CLASSIC 25 (Pan)",
      minCapacity: 25,
      maxCapacity: 25,
      tags: "Best For: Rural/small works, precast",
      bestFor: "Small-Scale Projects",
      url: "/mobmix-classic-25",
    },
    {
      name: "MOBMIX CLASSIC 30 (Pan)",
      minCapacity: 30,
      maxCapacity: 30,
      tags: "Best For: Small RMC / Sites with tight spaces",
      bestFor: "High-Quality Mixes",
      url: "/mobmix-classic-30",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "Compact and Towable Concrete Production",
    para: (
      <span>
        Atlas Mobile Concrete Batching Plants with pan mixers deliver
        cost-effective and consistent mixing for standard concrete applications.
        Designed for projects requiring frequent site shifts, these plants are
        ideal for rural road construction, small-scale RMC plants, and building
        foundations.
        <br /> <br />
        Engineered for reliable performance, this compact design is mounted on a
        single chassis, ensuring quick setup, easy transportation, and superior
        mobility – offering unmatched affordability and versatility while
        minimizing space requirements
      </span>
    ),
    img: "/images/comman/product_dump.png",
    bg: true,
  };
  const faqData = [
    {
      title:
        "1. What type of projects are mobile pan mixer plants best suited for?",
      content: (
        <span>
          Mobile pan mixer plants are best suited for{" "}
          <span className="font-bold">
            rural road construction, housing foundations,
          </span>{" "}
          and small RMC jobs where{" "}
          <span className="font-bold">
            cost-efficiency and consistent quality
          </span>{" "}
          are more important than very high capacity output.
        </span>
      ),
    },
    {
      title: "2. Can recycled aggregates be used in pan mixer plants?",
      content: (
        <span>
          Yes. Pan mixers are{" "}
          <span className="font-bold">gentle on aggregates</span> and prevent
          excessive breakdown during mixing. This makes them suitable for{" "}
          <span className="font-bold">
            incorporating recycled coarse aggregates (RCA)
          </span>
          , typically up to about <span className="font-bold">30%</span> of the
          total mix.
        </span>
      ),
    },
    {
      title:
        "3. What kind of maintenance is required for Mobile Concrete Batching Plants?",
      content: (
        <span>
          Maintenance includes{" "}
          <span className="font-bold">regular greasing of bearings</span>,
          checking for wear on{" "}
          <span className="font-bold">liners and blades</span>, and replacing
          them when needed. Many models also include{" "}
          <span className="font-bold">
            dust collection and simple flushing systems
          </span>{" "}
          to keep downtime low.
        </span>
      ),
    },
    {
      title: "4. What cement storage can I pair with this plant?",
      content: (
        <span>
          Options typically include{" "}
          <span className="font-bold">
            bag hoppers or vertical/horizontal silos
          </span>{" "}
          sized to the site; Atlas’ portable pan-mixer plant literature depicts{" "}
          <span className="font-bold">silo pairing as an option.</span>
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Consistent Mixing",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span> Gentle
            pan action for everyday grades (M20–M40)
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Replaceable wear parts for upkeep over time
          </li>
        </ul>
      ),
    },
    {
      title: "Space-Efficient Setup",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Compact footprint saves site space
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Modular/skid-based design allows relocation
          </li>
        </ul>
      ),
    },
    {
      title: "Measured Dosing & Control",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            PLC/automation with recipe storage and weighed dosing
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span>{" "}
            Integrated into the Atlas batching ecosystem for consistency
          </li>
        </ul>
      ),
    },
    {
      title: "Options to Suit the Site",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span> Cement
            silo configurations (vertical/horizontal) available
          </li>
          <li>
            <span className="font-bold text-[22px] text-red-400">✓</span> Water
            dosing & admixture packages tailored per project
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
      <Category_Banner data={category_banner_data} />
      <ProductFilterComponent
        kgoff={false}
        unit="m³/hr"
        productLinks={productLinks}
        products={products}
      />
      <Category_intro data={category_intro_data} />
      <FAQSection1
        faqData={faqData1}
        minititle={"BENEFITS"}
        title={"Why Do Contractors Choose Mobile Pan Mixers?"}
      />

      <ContactForm
        formcontent={formcontent}
        page={
          "Mobile Concrete Batching Plants - Pan Mixer [25-30 m³/hr] (Product Lisiting Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
