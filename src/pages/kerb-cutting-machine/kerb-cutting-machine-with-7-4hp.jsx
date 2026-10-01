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
    "kerb-cutting",
    "kerb-cutting-7-4hp",
  );

  const product = {
    title: "Kerb Cutting Machine (5 &10 HP Electric Motor)",
    subtitle:
      "Blade Size: 24-32” Diamond Wheel | Best for: Small-Scale Projects with Power Access",
    description: [
      "The Atlas Kerb Cutting Machine (Electric Model) is a compact, high-precision concrete cutter designed for small-scale kerb and divider cutting projects. Powered by a 5 HP & 10HP electric motor, it delivers smooth, accurate cuts with minimal noise and zero emissions, making it perfect for urban worksites and areas with a stable power supply.",
      "Built for precision and ease of operation, this model features three hand-wheel blade controls, allowing fine depth adjustments up to 500 mm -700mm. Its rugged steel frame, integrated water-spray provision, and diamond blade ensure a clean, dust-free cut every time.",
    ],
    features: ["Accurate Cutting", "Low Noise Operation", "Compact Power"],
    images: [
      
      // "/images/plants/kerb-laying/kreb-2.jpeg",
      // "/images/plants/kerb-laying/kreb-3.jpeg",
      // "/images/plants/kerb-laying/kreb-4.jpeg",
      "/images/plants/kerb-laying/kerb-1.png",
      "/images/plants/kerb-laying/kerb-2.png",
      "/images/plants/groove-cutter/groove-diesel-1.webp",
    ],
  };
  const faqData = [
    {
      title: "1. What is the cutting capacity of the Electric Kerb Cutter?",
      content: (
        <>
          <p>
            It can achieve cutting depths up to 700 mm using the adjustable
            hand-wheel system.
          </p>
        </>
      ),
    },
    {
      title: "2. What is the blade size?",
      content: (
        <>
          <p>
            A 24-inch - 32-inch diamond wheel designed for concrete surfaces.
          </p>
        </>
      ),
    },
    {
      title: "3. Can it operate continuously for long durations?",
      content: (
        <>
          <p>
            Yes. The electric motor delivers stable performance for extended
            shifts with minimal maintenance.
          </p>
        </>
      ),
    },
    {
      title: "4. Does it have a dust control feature?",
      content: (
        <>
          <p>
            Yes. A water spray/cooling system reduces dust and maintains blade
            temperature during cutting.
          </p>
        </>
      ),
    },
    {
      title: "5. Is it suitable for uneven surfaces?",
      content: (
        <>
          <p>
            Yes. The adjustable blade height accommodates variations up to 700
            mm, ensuring consistent performance.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "5 & 10 HP Electric Motor",
      desc: (
        <span>
          Delivers consistent torque for smooth cutting through concrete kerbs
          and dividers in low-noise environments.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-electric-1.jpeg",
    },
    {
      title: "24 _32-inch Diamond Cutting Wheel",
      desc: (
        <span>
          Provides clean, high-speed cutting for concrete with minimal vibration
          and blade wear
        </span>
      ),
      image: "/images/kerb-cutting/kerb-electric-2.jpeg",
    },
    {
      title: "Triple Hand-Wheel Adjustment",
      desc: (
        <span>
          Allows vertical blade adjustment up to 500 mm <br /> - 700mm for
          controlled and uniform cutting on varied surfaces.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-electric-3.jpeg",
    },
    {
      title: "Water Spray/Cooling System",
      desc: (
        <span>
          Minimizes dust and heat buildup during operation, improving blade life
          and operator comfort.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-electric-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Urban & Indoor Projects",
      desc: (
        <span>
          Quiet operation and no exhaust emissions make it suitable for
          residential or city-based infrastructure sites.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Precision Blade Control",
      desc: (
        <span>
          Three-wheel adjustment enables exact cutting depth and alignment for
          consistent results.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Operator Safety and Comfort",
      desc: (
        <span>
          Protective blade guard and emergency stop system ensure secure,
          worry-free handling.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Low Maintenance & Readily Serviceable",
      desc: (
        <span>
          Standard electric motor components and easy-access service points
          simplify routine upkeep.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Durable Frame Construction",
      desc: (
        <span>
          Heavy-duty steel chassis maintains stability during continuous
          cutting, preventing vibration and misalignment.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
  ];

  const components = [
    {
      title: "Electric Motor Unit",
      desc: (
        <ul>
          <li>• 5&10HP motor provides stable torque and reliable operation.</li>
          <li>
            • Compatible with standard power supply and easy-start system.
          </li>
        </ul>
      ),
    },
    {
      title: "Diamond Cutting Blade Assembly",
      desc: (
        <ul>
          <li>
            • 24 - 36&quot; industrial-grade diamond blade for precise, smooth
            cutting.
          </li>
          <li>• Blade guard with water-spray provision for dust control.</li>
        </ul>
      ),
    },
    {
      title: "Height Adjustment Mechanism",
      desc: (
        <ul>
          <li>
            • Three hand-wheels for accurate vertical adjustment up to 500 mm -
            700mm.
          </li>
          <li>• Smooth crank operation for even depth control.</li>
        </ul>
      ),
    },
    {
      title: "Steel Chassis Frame",
      desc: (
        <ul>
          <li>
            • Compact, welded structure ensures balance and vibration
            resistance.
          </li>
          <li>• Mounted on four wheels for easy movement and positioning.</li>
        </ul>
      ),
    },
    {
      title: "Operator Controls",
      desc: (
        <ul>
          <li>
            • Central control panel with start/stop and emergency shut-off
            switch.
          </li>
          <li>
            • Ergonomic handle design for better maneuverability and comfort.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Kerb Cutter 7.4HP Electric | 24" Blade | Atlas Technologies</title>
        <meta name="description" content="Atlas 7.4HP electric kerb cutter — 24&quot; diamond blade, ±1mm depth control, quieter operation. For urban, indoor and municipal road kerb cutting. Get specs and price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/kerb-cutting-machine/kerb-cutting-machine-with-7-4hp"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/groove-cutter/groove-diesel-1.webp"
        videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
        title={"Kerb Cutter (Electric Model): Clean, Precise, and Efficient"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for Precision, Reliability, and Operator Safety"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Electric Kerb Cutter"
        subtitle="The Electric Kerb Cutting Machine is designed for precision and simplicity, ideal for projects requiring smooth, emission-free operation."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The Electric Kerb Cutter combines robust design with simple maintenance and operator-friendly controls."
        }
        components={components}
        img="/images/plants/kerb-laying/kerb-2.png"
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
