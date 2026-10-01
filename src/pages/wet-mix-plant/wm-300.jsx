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
    "wm-300"
  );

  const product = {
    title: "WM-300 Wet Mix Macadam Plant",
    subtitle:
      "300 TPH | 50 Ton Hopper | Best for: Industrial Corridors & Mega Infrastructure",
    description: [
      "The Atlas WM-300 Wet Mix Macadam Plant is the highest-capacity model in the series, engineered to handle large-scale, continuous production for industrial roads, economic corridors, and logistics hubs. With a rated capacity of 300 TPH and upto 50 storage hopper, it ensures uninterrupted output of dense, uniform wet mix macadam for the most demanding infrastructure projects.",
      "Designed for heavy-duty performance, WM-300 combines intelligent automation, robust material handling, and a reinforced twin-shaft pug mill mixer to deliver unmatched productivity and consistency. It’s the go-to solution for contractors executing long-stretch, high-traffic base works that demand accuracy and endurance.",
    ],
    features: ["Ultra-High Output", "Precise Mixing", "24/7 Reliability"],
    images: [
      "/images/wmm/wm-300-1.jpg",
      "/images/wmm/wm-300-2.jpg",
      "/images/wmm/wm-300-3.jpg",
      "/images/wmm/wm-300-4.jpeg",
      "/images/wmm/wm-300-5.jpeg",
      "/images/wmm/wm-300-6.jpeg",
    ],
  };

  const faqData = [
    {
      title: "1. What projects is WM-300 best suited for?",
      content: (
        <>
          <p>
            It’s ideal for industrial zones, port access roads, express
            corridors, and any large-scale infrastructure requiring continuous
            high-density mix production.
          </p>
        </>
      ),
    },
    {
      title: "2. Can WM-300 be used for CTAB mixes?",
      content: (
        <>
          <p>
            Yes. The plant supports an optional cement silo and screw conveyor
            system for dust-free Cement Treated Aggregate Base (CTAB) mixing.
          </p>
        </>
      ),
    },
    {
      title: "3. How does WM-300 maintain mix precision at maximum output?",
      content: (
        <>
          <p>
            Load-cell aggregate feeders and flowmeter-based water control
            operate in synchronization with the pug mill for consistent
            gradation and moisture balance.
          </p>
        </>
      ),
    },
    {
      title: "4. What ensures its durability for long-term industrial use?",
      content: (
        <>
          <p>
            The WM-300 features a reinforced steel frame, corrosion-resistant
            bins, heavy-duty bearings, and replaceable wear liners to withstand
            continuous operation in harsh conditions.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "300 TPH Continuous Output",
      desc: (
        <span>
          Delivers high-volume production suited for industrial highways, smart
          city corridors, and heavy-duty bases requiring uninterrupted
          throughput.
        </span>
      ),
      image: "/images/wmm/wm-300-1.jpeg",
    },
    {
      title: "Twin-Shaft Pug Mill Mixer",
      desc: (
        <span>
          High-torque shafts and reinforced paddles ensure uniform moisture and
          aggregate blending at maximum capacity without compromising quality.
        </span>
      ),
      image: "/images/wmm/wm-300-2.jpeg",
    },
    {
      title: "50 Ton Storage Hopper",
      desc: (
        <span>
          Large discharge hopper allows continuous truck loading for mega
          projects, reducing wait time and maintaining paving continuity.
        </span>
      ),
      image: "/images/wmm/wm-300-3.jpeg",
    },
    {
      title: "Advanced Water and Aggregate Control",
      desc: (
        <span>
          Load-cell-based feeders and flowmeter-regulated water dosing provide
          perfect proportioning and repeatable mix accuracy for high-strength
          layers.
        </span>
      ),
      image: "/images/wmm/wm-300-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Industrial Zones & Logistics",
      desc: (
        <span>
          300 TPH output meets the requirements of large-volume projects such as
          industrial estates, container yards, and freight corridors.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "High-Strength Mixing System",
      desc: (
        <span>
          Twin-shaft pug mill achieves dense, homogeneous mixes meeting
          stringent airfield compaction specifications.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Optimized Material Flow",
      desc: (
        <span>
          High-tensile belt conveyors and variable-speed feeders maintain steady
          aggregate movement under maximum load conditions.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Round-the-Clock Operation",
      desc: (
        <span>
          Robust structural frame, corrosion-resistant components, and
          replaceable liners enable reliable 24/7 performance with minimal
          downtime.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Ready for CTAB Integration",
      desc: (
        <span>
          An optional cement silo and screw conveyor system allows dust-free
          addition of cement for Cement Treated Aggregate Base (CTAB)
          production.
        </span>
      ),
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            • Four-bin feeder system with load-cell monitoring for precise
            aggregate dosing.
          </li>
          <li>
            • Variable-speed motors ensure stable feeding and optimized
            proportioning across materials.
          </li>
        </ul>
      ),
    },
    {
      title: "Belt Conveyor System",
      desc: (
        <ul>
          <li>
            • High-tensile conveyors with adjustable tension and dust-sealed
            bearings for reliable transfer.
          </li>
          <li>
            • Designed for continuous high-volume operations in industrial
            environments.
          </li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Pug Mill Mixer",
      desc: (
        <ul>
          <li>
            • Heavy-duty mixer with replaceable wear liners and high-torque arms
            for uniform mixing.
          </li>
          <li>
            • Ensures dense, homogeneous output that meets industrial base
            compaction standards.
          </li>
        </ul>
      ),
    },
    {
      title: "Water Dosing & Flowmeter System",
      desc: (
        <ul>
          <li>
            • Fully automated flowmeter synchronization with aggregate feed and
            mixer speed.
          </li>
          <li>
            • Maintains precise moisture control for maximum mix strength and
            durability.
          </li>
        </ul>
      ),
    },
    {
      title: "Storage Hopper (50 Tons)",
      desc: (
        <ul>
          <li>
            • Large-volume hopper for continuous truck loading and smooth mix
            discharge.
          </li>
          <li>
            • Anti-stick lining and hydraulic gate design for efficient material
            flow.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>WM-300 | 300 TPH Wet Mix Macadam Plant | Atlas Technologies India</title>
        <meta name="description" content="WM-300 — 300 TPH, Atlas's highest-capacity wet mix macadam plant. Twin-shaft pug mill, surge hopper, VFD dosing. For mega highway and expressway projects. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/oNtnAqVAhaU"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/wet-mix-plant/wm-300"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/wmm/wm-300-1.jpg"
        videoUrl="https://www.youtube.com/embed/oNtnAqVAhaU"
        title={"WM-300: Maximum Capacity for Mega Infrastructure Projects"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Peak Productivity and Heavy-Load Stability"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose WM-300"
        subtitle="Built for mission-critical infrastructure, WM-300 offers the highest capacity and durability in Atlas’s WMM range, offering scale, stability, and superior mix quality."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The WM-300 is precision-engineered for maximum capacity, longevity, and low maintenance — tailored for the largest infrastructure projects."
        }
        components={components}
        img = "/images/wmm/wm-300-2.jpg"
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
