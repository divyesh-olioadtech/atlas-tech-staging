import FAQSection2 from "../../../components/category/faq2";
import ContactForm from "../../../components/category/form";
import FeatureGrid from "../../../components/others/FeatureGrid";
import FeatureSlider from "../../../components/others/FeatureSlider;";
import Productfaq from "../../../components/others/productFaq";
import ProductSlider2 from "../../../components/others/productSlider";
import Video from "../../../components/others/video";
import ProductOverview from "../../../components/products/productslider";
import ProductSlider from "../../../components/products/productslider";

import Head from "next/head";

import useCategoryProducts from "../../../hooks/useCategoryProducts";
import ProductSchema from "../../../components/schema/ProductSchema";

export default function ABP80() {
  const { getProduct, getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "asphalt-machine",
    "wet-mix-plant",
    "wm-160",
  );

  const product = {
    title: "WM-160 Wet Mix Macadam Plant",
    subtitle: "160 TPH | Upto 50 ton Surge Hopper | Best for: Highways",
    description: [
      "The Atlas WM-160 Wet Mix Macadam Plant is a mid-capacity, high-performance solution designed for continuous production of high-density mix. With a rated capacity of 160 TPH and upto 50-ton surge hopper, it delivers fine-blended, homogeneous base and sub-base layers ideal for highway construction and long-haul projects.",
      "Built to meet the demands of larger road works, WM-160 ensures accurate aggregate feeding, metered water control, and consistent pug mill performance. Its durable construction and simplified maintenance make it the preferred choice for highway contractors worldwide.",
    ],
    features: ["High Output", "Accurate Mixing", "Smooth Operations"],
    // price: "29,50,000",
    images: [
      "/images/wmm/wmm-200-one.jpg",
      "/images/wmm/wmm-200-two.jpeg",
      "/images/wmm/wmm-200-three.jpeg",
      "/images/wmm/wmm-200-four.jpeg",
      "/images/wmm/wmm-200-five.jpeg",
      "/images/wmm/wmm-200-six.jpeg",
    ],
  };

  const faqData = [
    {
      title: "1. What is WM-160 best suited for?",
      content: (
        <>
          <p>
            It’s built for national and state highway construction projects
            requiring high-quality base and sub-base layer preparation.
          </p>
        </>
      ),
    },
    {
      title: "2. Can WM-160 produce cement-treated mixes?",
      content: (
        <>
          <p>
            Yes. An optional cement silo and screw conveyor can be added for
            CTAB (Cement Treated Aggregate Base) applications.
          </p>
        </>
      ),
    },
    {
      title: "3. How is mix accuracy maintained?",
      content: (
        <>
          <p>
            Aggregate feeders are load-cell monitored, and water is metered by
            flow control synchronized with the pug mill speed.
          </p>
        </>
      ),
    },
    {
      title: "4. How does Atlas ensure the durability of WM-160?",
      content: (
        <>
          <p>
            All contact parts use corrosion-resistant steel, with wear liners
            and heavy bearings for long-term continuous operation.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "160 TPH Continuous Output",
      desc: (
        <span>
          Designed for highway-grade production, WM-160 delivers dense, uniform
          mixes at higher throughput without sacrificing blend accuracy.
        </span>
      ),
      image: "/images/wmm/wm-160-1.jpeg",
    },
    {
      title: "Twin-Shaft Pug Mill Mixer",
      desc: (
        <span>
          Heavy-duty, wear-resistant blades and high-torque shafts ensure
          homogeneous mixing and optimal moisture distribution.
        </span>
      ),
      image: "/images/wmm/wm-160-2.jpeg",
    },
    {
      title: "Storage Hopper for Continuous Loading",
      desc: (
        <span>
          Large discharge hopper allows uninterrupted truck loading, maximizing
          on-site paving efficiency.
        </span>
      ),
      image: "/images/wmm/wm-160-3.jpeg",
    },
    {
      title: "Automated Water Dosing System",
      desc: (
        <span>
          VFD controlled water pump addition maintains precise moisture levels
          for perfect compaction and layer strength.
        </span>
      ),
      image: "/images/wmm/wm-160-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Highway Construction",
      desc: (
        <span>
          160 TPH output supports large-scale road base preparation with
          consistent quality and continuous truck loading through its 50 ton
          hopper.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "High-Torque Mixing for Uniform Quality",
      desc: (
        <span>
          Twin-shaft pug mill with replaceable liners guarantees dense, even
          mixes that meet national highway specifications.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Accurate Water and Aggregate Dosing",
      desc: (
        <span>
          Load-cell-controlled feeders and synchronized water dosing maintain
          optimal gradation and moisture content.
        </span>
      ),
      icon: "/images/comman/logo/campus.png",
    },
    {
      title: "Built for Continuous Operation",
      desc: (
        <span>
          Corrosion-resistant bins, durable paddles, and robust frame design
          enable round-the-clock performance with minimal maintenance.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Global Support and Flexibility",
      desc: (
        <span>
          Atlas offers installation, commissioning, and on-site training, along
          with custom configurations for cold feeders, conveyors, or silo
          integration.
        </span>
      ),
      icon: "/images/comman/logo/globe.png",
    },
  ];

  const products = [
    {
      img: "/images/wmm/wm-100-two.jpg",
      title: "Wet Mix Plant WM-100",
      desc: "100 TPH",
      url: "/wet-mix-plant/wm-100",
    },
    {
      img: "/images/wmm/wm-160-1.jpeg",
      title: "Wet Mix Plant WM-160",
      desc: "160 TPH",
      url: "/wet-mix-plant/wm-160",
    },
    {
      img: "/images/wmm/wm-200-1.jpeg",
      title: "Wet Mix Plant WM-200",
      desc: "200 TPH",
      url: "/wet-mix-plant/wm-200",
    },
    {
      img: "/images/wmm/wm-250-1.jpeg",
      title: "Wet Mix Plant WM-250",
      desc: "250 TPH",
      url: "/wet-mix-plant/wm-250",
    },
    {
      img: "/images/wmm/wm-300-1.jpeg",
      title: "Wet Mix Plant WM-300",
      desc: "300 TPH",
      url: "/wet-mix-plant/wm-300",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            • Load-cell-based aggregate bins provide precise proportioning and
            continuous feeding.
          </li>
          <li>
            • Heavy-duty variable-speed drives ensure stable, uninterrupted
            flow.
          </li>
        </ul>
      ),
    },
    {
      title: "Belt Conveyor System",
      desc: (
        <ul>
          <li>
            • Heavy-duty belt conveyors for smooth, controlled material
            transfer.
          </li>
          <li>• Adjustable tensioning and maintenance-friendly design.</li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Pug Mill Mixer",
      desc: (
        <ul>
          <li>
            • High-capacity mixer with replaceable wear liners and paddles.
          </li>
          <li>
            • Produces a consistent wet mix macadam meeting compaction
            standards.
          </li>
        </ul>
      ),
    },
    {
      title: "Water Dosing & Flowmeter System",
      desc: (
        <ul>
          <li>
            • Flowmeter-regulated water addition synchronized with aggregate
            feed.
          </li>
          <li>• Ensures accurate moisture content for durable road layers.</li>
        </ul>
      ),
    },
    {
      title: "Surge Hopper (Upto 50 Tons)",
      desc: (
        <ul>
          <li>
            • Facilitates continuous truck loading and smooth discharge flow.
          </li>
          <li>
            • Equipped with anti-stick lining and an easy-access discharge gate.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>WM-160 | 160 TPH Wet Mix Macadam Plant | 50T Hopper | Atlas</title>
        <meta name="description" content="WM-160 — 160 TPH wet mix macadam plant, twin-shaft pug mill, 50-ton surge hopper, VFD water dosing, load-cell feeders. For highway base and sub-base. Get specs." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/kQOEOm0UyIo"
        videoThumbnail="/images/plants/wetmix/wm-160-5.png"
        pageUrl="/wet-mix-plant/wm-160"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/wetmix/wm-160-5.png"
        videoUrl="https://www.youtube.com/embed/kQOEOm0UyIo"
        title={"WM-160: Reliable, High-Capacity Mixing for Highway Projects"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Productivity and Consistency"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose WM-160"
        subtitle="The WM-160 is ideal for mid- to large-scale contractors who need reliable, 24/7 production capacity and long-term durability for highway base construction."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The WM-160 Wet Mix Macadam Plant is designed for high output and precision control while maintaining ease of service for highway contractors."
        }
        components={components}
        img ="/images/wmm/wmm-200-three.jpeg"
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={otherProducts}
      />
      <ContactForm page={product.title} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
