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
    "wm-100"
  );

  const product = {
    title: "WM-100 Wet Mix Macadam Plant",
    subtitle: "100 TPH | Storage Hopper | Best for: Rural Roads",
    description: [
      "The Atlas WM-100 Wet Mix Macadam Plant is a compact yet durable solution for base and sub-base layer preparation in rural and medium-scale road projects. With a rated capacity of 100 TPH and a quick-discharge storage hopper of upto 25 tons capacity, it ensures uniform material blending and consistent output for road foundations.",
      "Designed for fast setup and continuous operation, WM-100 delivers precise aggregate blending, optimal water distribution, and uniform density, all within a rugged, low-maintenance structure ideal for remote or rural job sites.",
    ],
    features: ["Compact Capacity", "High-Quality Mixing", "Easy Mobility"],
    images: [
      "/images/wmm/wm-100-one.jpg",
      "/images/wmm/wm-100-two.jpg",
      "/images/wmm/wm-100-three.jpg",
      "/images/wmm/wm-100-four.jpg",
      
      "/images/wmm/wm-100-seven.jpg",

    ],
  };

  const faqData = [
    {
      title: "1. What type of projects is WM-100 suited for?",
      content: (
        <>
          <p>
            It’s best suited for rural and district roads, offering reliable
            performance and easy mobility for smaller-scale projects.
          </p>
        </>
      ),
    },
    {
      title: "2. Can the plant handle cement-treated mixes?",
      content: (
        <>
          <p>
            Yes. WM-100 can be upgraded with an optional cement silo and
            conveyor for CTAB (Cement Treated Aggregate Base) production.
          </p>
        </>
      ),
    },
    {
      title: "3. How is water quantity controlled in mixing?",
      content: (
        <>
          <p>
            A synchronized VFD controlled system maintains the exact
            water-to-aggregate ratio for consistent mix quality.
          </p>
        </>
      ),
    },
    {
      title: "4. What makes WM-100 easy to maintain?",
      content: (
        <>
          <p>
            It features wear-resistant liners, replaceable mixing blades, and
            simple mechanical components that reduce servicing time and costs.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "100 TPH Continuous Output",
      desc: (
        <span>
          Provides reliable production for rural and secondary roads,
          maintaining uniform mix quality with efficient aggregate flow and
          water control.
        </span>
      ),
      image: "/images/wmm/wm-100-1.jpeg",
    },
    {
      title: "Heavy-Duty Pug Mill Mixer",
      desc: (
        <span>
          Twin-shaft design ensures high-torque, homogeneous mixing of
          aggregates and water, producing dense, durable wet mix macadam.
        </span>
      ),
      image: "/images/wmm/wm-100-2.jpeg",
    },
    {
      title: "Surge Hopper with Quick Load-Out",
      desc: (
        <span>
          Small-capacity hopper enables fast discharge cycles, keeping truck
          loading continuous and efficient during peak operation.
        </span>
      ),
      image: "/images/wmm/wm-100-3.jpeg",
    },
    {
      title: "Smart Water Dosing System",
      desc: (
        <span>
          VFD - controlled water pump that captures variable frequency- addition
          synchronized with pug mill operation ensures consistent moisture
          content across every batch.
        </span>
      ),
      image: "/images/wmm/wm-100-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Rural & District Roads",
      desc: (
        <span>
          Compact design, surge hopper, and easy mobility make WM-100 ideal for
          small contractors and local PWD projects.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Consistent, High-Density Mixing",
      desc: (
        <span>
          The twin-shaft pug mill ensures uniform blending and compaction-ready
          mixes that meet base-layer quality standards.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Low Maintenance & High Durability",
      desc: (
        <span>
          Wear-resistant liner plates and easily replaceable paddles extend
          component life and reduce downtime.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
    {
      title: "Precise Water & Aggregate Control",
      desc: (
        <span>
          VFD controlled water control systems ensure accurate, repeatable mix
          proportions.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Atlas Support & Proven Reliability",
      desc: (
        <span>
          Backed by Atlas’s global experience, WM-100 includes onsite support,
          spare parts supply, and customization options for material feeders or
          hopper size.
        </span>
      ),
      icon: "/images/comman/logo/globe.png",
    },
  ];

  const products = [
    {
      img: "/images/wmm/wm-100-1.jpeg",
      title: "Wet Mix Plant WM-100",
      desc: "100 TPH",
      url: "/wet-mix-plant/wm-100",
    },
    {
      img: "/images/wmm/wmm-200-three.jpeg",
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
            • Load-cell-equipped bins ensure accurate aggregate proportioning.
          </li>
          <li>• Variable-speed feeders maintain consistent material flow.</li>
        </ul>
      ),
    },
    {
      title: "Conveyor System",
      desc: (
        <ul>
          <li>
            • Heavy-duty belt conveyors with adjustable speed for smooth
            aggregate transfer.
          </li>
          <li>• Designed for minimal spillage and easy maintenance.</li>
        </ul>
      ),
    },
    {
      title: "Pug Mill Mixing Unit",
      desc: (
        <ul>
          <li>
            • Twin-shaft mixer with replaceable wear liners and high-torque
            drive.
          </li>
          <li>
            • Produces dense, homogeneous mixes suitable for base and sub-base
            layers.
          </li>
        </ul>
      ),
    },
    {
      title: "Water Dosing & Flow Control System",
      desc: (
        <ul>
          <li>
            • Metered water addition synchronized with the material feed rate.
          </li>
          <li>
            • The flowmeter ensures an accurate moisture percentage in the final
            mix.
          </li>
        </ul>
      ),
    },
    {
      title: "Surge Hopper",
      desc: (
        <ul>
          <li>
            • Compact hopper designed for quick discharge and continuous truck
            loading.
          </li>
          <li>• Reduces waiting time and improves production efficiency.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>WM-100 | 100 TPH Wet Mix Macadam Plant | Atlas Technologies India</title>
        <meta name="description" content="WM-100 — 100 TPH wet mix macadam plant, twin-shaft pug mill mixer, precise water dosing, load-cell aggregate feeders. For road sub-base construction. Get specs." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
        videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/wet-mix-plant/wm-100"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/wmm/wm-100-one.jpg"
        videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
        title={"WM-100: Compact, Reliable & Built for Rural Road Projects"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Accuracy and Long Service Life"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose WM-100"
        subtitle="WM-100 is designed for contractors who require reliable, continuous output and precision mix control in rural or small-scale infrastructure projects."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The Wet Mix Macadam Plant combines robust construction with well-engineered components to deliver uniform, reliable mix output for smaller projects."
        }
        components={components}
        img = "/images/wmm/wm-100-four.jpg"
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
