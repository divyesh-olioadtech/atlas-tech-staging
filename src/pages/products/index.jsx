import Category_Banner from "../../../components/category/category_banner";
import Intro from "../../../components/homepage/intro";
import ExploreRange from "../../../components/homepage/ExploreRange";
import OtherProducts from "../../../components/common/OtherProducts";
import Testimonials from "../../../components/common/Testimonials";
import ProductSlider2 from "../../../components/others/productSlider";
import ContactForm from "../../../components/category/form";
import FAQSection2 from "../../../components/category/faq2";
import Head from "next/head";

const popularProducts = [
  {
    img: "/images/product/Atlas/Group 20.png",
    title: "ABP 120 Stationary Asphalt Batch Plant",
    desc: "120 TPH Production | 1600 kg Twin-Shaft Mixer | RAP & SMA Ready",
    url: "/asphalt-plants/stationary-asphalt-batching-plant/1500kg-twin-shaft-mixer-120-tph",
  },
  {
    img: "/images/product/Atlas/Group 20-1.png",
    title: "MABP 120 Mobile Asphalt Batch Plant",
    desc: "120 TPH Production | 1500 kg Twin-Shaft Mixer | Containerized & RAP Ready",
    url: "/asphalt-plants/mobile-asphalt-batching-plant/1500-kg-twin-shaft-mixer-120-tph",
  },
  {
    img: "/images/product/Atlas/Group 20-2.png",
    title: "DM 60 Asphalt Drum Mix Plant",
    desc: "90–120 TPH | High-Capacity Performance | Eco-Friendly Efficiency",
    url: "/asphalt-plants/asphalt-drum-mix-plant/dm60-90-120-tph",
  },
  {
    img: "/images/product/Atlas/Group 20-3.png",
    title: "ATMIX PRO 90 T Stationary Concrete Batching Plant",
    desc: "Mixer: 2000 Liter | Twin-Shaft | Control PLC + Manual",
    url: "/concrete-plants/stationary-concrete-batching-plant/atmix-pro-90",
  },
  {
    img: "/images/product/Atlas/Group 20-4.png",
    title: "MOBMIX PRO 30 Mobile Concrete Batching Plant",
    desc: "30 m³/hr | Rapid Deployment | Site-Ready Configuration",
    url: "/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer/mobmix-pro-30",
  },
  {
    img: "/images/product/Atlas/Group 20-5.png",
    title: "XL-400 Kerb Laying Machine",
    desc: "Slip-Form Precision | Interchangeable Moulds | Continuous Output",
    url: "/other-products/kerb-laying-machine/XL-400",
  },
];

const faqData = [
  {
    title: "1. What types of plants does Atlas Technologies manufacture?",
    content: (
      <p>
        Atlas Technologies manufactures a full range of road construction plants including
        stationary and mobile asphalt batch plants, drum mix plants, counter-flow plants,
        concrete batching plants, and bitumen handling equipment.
      </p>
    ),
  },
  {
    title: "2. Which countries does Atlas Technologies export to?",
    content: (
      <p>
        Our equipment is exported to 40+ countries across Africa, the Middle East, South
        Asia, and Southeast Asia, with dedicated after-sales support in each region.
      </p>
    ),
  },
  {
    title: "3. Do you offer customisation for specific project requirements?",
    content: (
      <p>
        Yes. We offer engineering customisation for capacity, fuel type, RAP integration,
        dust control systems, and automation levels based on project needs.
      </p>
    ),
  },
  {
    title: "4. What after-sales support is available?",
    content: (
      <p>
        Atlas provides comprehensive after-sales support including installation supervision,
        operator training, spare parts supply, and remote technical assistance.
      </p>
    ),
  },
  {
    title: "5. How do I get a quote for a plant?",
    content: (
      <p>
        Fill out the enquiry form on this page or contact our sales team directly. Our
        engineers will respond within 24 hours with a customised solution.
      </p>
    ),
  },
];

export default function ProductsPage() {
  const category_banner_data = {
    title: "Our Products",
    para: "Complete Road Construction Solutions – Trusted Across 40+ Countries",
    img: "/images/product/product-hero-banner.png",
  };

  return (
    <>
      <Head>
        <title>Atlas Technologies – Our Products</title>
        <meta
          name="description"
          content="Explore Atlas Technologies' full range of road construction products — asphalt plants, concrete batching plants, bitumen machines, and more. Trusted across 40+ countries."
        />
      </Head>

      <Category_Banner data={category_banner_data} />
      <Intro />
      <ExploreRange />
      <OtherProducts />
      <Testimonials />
      <ProductSlider2
        sectionTitle="Popular Products"
        sectionDesc={null}
        cards={popularProducts}
      />
      <ContactForm page="Products Page" />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
