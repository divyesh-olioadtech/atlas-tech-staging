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
        <br className="hidden md:block" /> | Planetary Mixer [30-60 m³/hr]
      </span>
    ),
    para: "Premium Portable Mixing for Specialty & Precast Concrete Applications",
    img: "/images/comman/bg3.jpeg",
    scrollTarget: "product-list",
  };
  const products = [
    {
      name: "MOBMIX PLUS 30",
      minCapacity: 30,
      maxCapacity: 30,
      tags: "Best For: Small precast / SCC jobs",
      bestFor: "Small-Scale Projects",
      url: "/mobmix-plus-30",
    },
    {
      name: "MOBMIX PLUS 45",
      minCapacity: 45,
      maxCapacity: 45,
      tags: "Best For: Medium precast yards",
      bestFor: "High-Quality Mixes",
      url: "/mobmix-plus-45",
    },
    {
      name: "MOBMIX PLUS 60",
      minCapacity: 60,
      maxCapacity: 60,
      tags: "Best For: Large precast / RMC",
      bestFor: "Medium-Scale Projects",
      url: "/mobmix-plus-60",
    },
  ];

  const category_intro_data = {
    subtitle: "Overview",
    title: "High-Quality Concrete with True Mobility",
    para: (
      <span>
        Atlas Mobile Concrete Batching Plants with planetary mixers deliver
        exceptional concrete quality for specialty applications like
        self-compacting concrete (SCC), fiber-reinforced mixes, and
        architectural finishes. Designed for projects requiring frequent site
        shifts, these plants are ideal for precast yards, RMC plants, and
        infrastructure projects.
        <br /> <br />
        The compact design is mounted on a single chassis, ensuring quick setup,
        easy transportation, and superior mobility – offering unmatched mix
        homogeneity and versatility while minimizing space requirements.
      </span>
    ),
    img: "/images/comman/product_dump.png",
    bg: true,
  };
  const faqData = [
    {
      title: "1. Why choose a planetary mixer in a mobile plant?",
      content: (
        <span>
          Planetary mixers deliver gentle, homogeneous mixes, ideal for flowable
          concretes like SCC or fiber-enhanced formulations in a portable
          format.
        </span>
      ),
    },
    {
      title: "2. What are typical mobile plant capacities?",
      content: (
        <span>
          Atlas mobile batching plants with twin-shaft mixers offer 30, 45, and
          60 m³/hr options. Planetary variants may also be available. Contact us
          for details.
        </span>
      ),
    },
    {
      title: "3. How are aggregates fed and weighed?",
      content: (
        <span>
          Each batch plant has 2×2 bins with pneumatic gates, feed through
          load-cell weigh conveyors, and transit via chevron belt into the
          mixer.
        </span>
      ),
    },
    {
      title: "4. Can the control system be integrated with site systems?",
      content: (
        <span>
          Yes. PLC-based panels support recipe storage and SCADA integration.
          Options for remote diagnostics and MES connectivity are also
          available.
        </span>
      ),
    },
  ];

  const faqData1 = [
    {
      title: "Superior Mixing Technology",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Planetary mixing
            ensures the uniform distribution for superior concrete workability
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Replaceable wear
            liners and mixing blades for long service life
          </li>
        </ul>
      ),
    },
    {
      title: "Genuine Portability",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Single chassis
            construction with integrated components (minimal installation)
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Quick on-site
            setup using foldable legs and retractable supports
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Batching",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> Aggregate,
            cement, water, and admixtures weighed individually using
            high-accuracy load cells
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> SCADA-ready for
            remote diagnostics
          </li>
        </ul>
      ),
    },
    {
      title: "Smart Control & Convenience",
      content: (
        <ul className="pl-4 space-y-1 list-none">
          <li>
            <span className="text-[22px] text-red-400">✓</span> PLC touchscreen
            with recipe memory; SCADA optional for control and monitoring
          </li>
          <li>
            <span className="text-[22px] text-red-400">✓</span> Modularity
            enables rapid site relocation and flexible configuration
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
        title={"Why Contractors Choose Atlas Planetary Mixer Plants"}
      />

      <ContactForm
        formcontent={formcontent}
        page={
          "Mobile Concrete Batching Plants | Planetary Mixer [30-60 m³/hr] (Product Listing Page)"
        }
      />
      <FAQSection2 faqData={faqData} bg={"bg-[#E7F1E9]"} />
    </>
  );
}
