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
    "wm-250"
  );

  const product = {
    title: "WM-250 Wet Mix Macadam Plant",
    subtitle: "250 TPH | 30-Ton Hopper | Best for: Airports & Runways",
    description: [
      "The Atlas WM-250 Wet Mix Macadam Plant is a heavy-duty, high-throughput solution engineered for large-scale and airport-grade base construction. With a rated capacity of 250 TPH and a 50 ton storage hopper, it delivers dense, uniform wet mix macadam ideal for airfield pavements, container terminals, and industrial highways..",
      "Built to perform under continuous operation, the WM-250 combines intelligent material control, advanced twin-shaft mixing, and robust structural integrity. It’s the preferred choice for contractors executing long runway stretches or heavy-load base layers requiring precision, consistency, and endurance.",
    ],
    features: ["High Capacity Output", "Accurate Mixing", "Rugged Performance"],
    images: [
      "/images/wmm/wm-250-1.jpg",
      "/images/wmm/wm-250-2.jpeg",
      "/images/wmm/wm-250-3.jpeg",
      "/images/wmm/wm-250-4.jpeg",
      "/images/wmm/wm-250-5.jpg",
      "/images/wmm/wm-250-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What type of projects is WM-250 best suited for?",
      content: (
        <>
          <p>
            It’s designed for airports, runways, industrial zones, and large
            infrastructure projects that require high-density, uniform wet mix
            production.
          </p>
        </>
      ),
    },
    {
      title: "2. Can WM-250 produce CTAB mixes?",
      content: (
        <>
          <p>
            Yes. An optional cement silo and screw conveyor system enable
            dust-free integration for Cement Treated Aggregate Base (CTAB)
            applications.
          </p>
        </>
      ),
    },
    {
      title: "3. How does WM-250 ensure mix accuracy?",
      content: (
        <>
          <p>
            Load-cell aggregate feeders and flowmeter-controlled water addition
            work in sync with the pug mill to maintain accurate gradation and
            moisture levels.
          </p>
        </>
      ),
    },
    {
      title: "4. What construction materials are used for durability?",
      content: (
        <>
          <p>
            The plant features corrosion-resistant bins, high-grade steel
            frames, and replaceable wear parts for extended service life under
            continuous operation.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "250 TPH Continuous Output",
      desc: (
        <span>
          Engineered for airport and heavy-traffic projects, WM-250 delivers a
          steady 250 TPH mixing rate, ensuring consistent production for
          extended paving cycles.
        </span>
      ),
      image: "/images/wmm/wm-250-1.jpg",
    },
    {
      title: "Twin-Shaft Pug Mill Mixer",
      desc: (
        <span>
          High-torque shafts and wear-resistant mixing arms provide intensive
          blending and perfect moisture distribution across aggregates.
        </span>
      ),
      image: "/images/wmm/wm-250-2.jpeg",
    },
    {
      title: "30-Ton Surge Hopper",
      desc: (
        <span>
          Large hopper capacity supports continuous truck loading for airport
          and industrial sites, eliminating downtime during load-out operations.
        </span>
      ),
      image: "/images/wmm/wm-250-3.jpeg",
    },
    {
      title: "Precision Water and Aggregate Control",
      desc: (
        <span>
          Load-cell-based aggregate feeding and flowmeter-regulated water supply
          maintain exact proportioning for high-density mix quality.
        </span>
      ),
      image: "/images/wmm/wm-250-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Airports and Industrial Corridors",
      desc: (
        <span>
          250 TPH output ensures uninterrupted supply for runway and taxiway
          bases that demand precise gradation and moisture uniformity.
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
      title: "Reliable Material Flow and Handling",
      desc: (
        <span>
          Variable-speed feeders and high-tensile belt conveyors maintain
          consistent throughput under maximum load conditions.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Built for Continuous Operation",
      desc: (
        <span>
          Corrosion-resistant bins, wear-protected liners, and a rigid frame
          enable the plant to run 24/7 with minimal maintenance requirements.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "CTAB-Ready Configuration",
      desc: (
        <span>
          An optional cement silo and screw conveyor system allows dust-free
          cement addition for Cement Treated Aggregate Base (CTAB) mixes.
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
            • Four-bin feeder with load-cell monitoring for accurate
            proportioning and uninterrupted material flow.
          </li>
          <li>
            • Variable-speed drives ensure smooth operation across all bins.
          </li>
        </ul>
      ),
    },
    {
      title: "Belt Conveyor System",
      desc: (
        <ul>
          <li>
            • High-tensile conveyors with adjustable tensioning provide stable,
            efficient material transfer between units.
          </li>
          <li>• Built for continuous duty under high-output conditions.</li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Pug Mill Mixer",
      desc: (
        <ul>
          <li>
            • Robust, high-capacity mixer with replaceable wear liners and
            precision blades.
          </li>
          <li>
            • Delivers homogeneous mixes optimized for strength and compaction.
          </li>
        </ul>
      ),
    },
    {
      title: "Water Dosing & Flowmeter System",
      desc: (
        <ul>
          <li>
            • Automated water addition synchronized with pug mill speed and
            aggregate flow.
          </li>
          <li>
            • Maintains ideal moisture balance for long-lasting, compactable
            base layers.
          </li>
        </ul>
      ),
    },
    {
      title: "Storage Hopper ( 50 tons)",
      desc: (
        <ul>
          <li>
            • Facilitates smooth discharge and continuous truck loading for
            high-volume projects.
          </li>
          <li>
            • Equipped with anti-stick lining and a hydraulic gate for efficient
            operation.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>WM-250 | 250 TPH Wet Mix Macadam Plant | Atlas Technologies India</title>
        <meta name="description" content="WM-250 — 250 TPH high-capacity wet mix macadam plant, twin-shaft pug mill, surge hopper, load-cell feeders, VFD water control. For large highway projects. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/oNtnAqVAhaU"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/wet-mix-plant/wm-250"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/wmm/wm-250-1.jpg"
        videoUrl="https://www.youtube.com/embed/oNtnAqVAhaU"
        title={"WM-250: Built for Runway-Grade Performance and Precision"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Heavy-Load Infrastructure and Continuous Performance"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose WM-250"
        subtitle="The WM-250 is purpose-built for contractors who require uncompromising throughput and accuracy in airport-grade projects and large-scale infrastructure bases."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The WM-250 is engineered for precision, longevity, and easy maintenance in high-output infrastructure projects."
        }
        components={components}
        img = "/images/wmm/wm-250-1.jpg"
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
