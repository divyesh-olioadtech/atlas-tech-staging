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
    "kerb-cutting-1520-rs",
  );

  const product = {
    title: "Kerb Cutting Machine (Diesel Model 1520 RS)",
    subtitle:
      'Blade Size: 24" Diamond Wheel | Best for: Remote and Off-Grid Project Sites',
    description: [
      "The Atlas Kerb Cutting Machine Model 1520 RS is a diesel-powered road and kerb cutter engineered for performance in off-grid and heavy-duty construction sites. Equipped with an air-cooled diesel engine, it delivers reliable cutting power without dependence on external electricity. Great for ideal for road dividers, concrete kerbs, and highway edge maintenance.",
      'Designed for mobility, strength, and precise cutting, this model combines a 24" diamond blade with a durable steel chassis and fine-adjustment controls. Its powerful engine and stable frame make it suitable for extended outdoor use and rugged site conditions.',
    ],
    features: ["Powerful Cutting", "Rugged Mobility", "Independent Operation"],
    images: [
      // "/images/plants/kerb-laying/kerb-1.png",
      "/images/plants/kerb-laying/kerb-2.png",
      // "/images/plants/kerb-laying/kreb-3.jpeg",
      // "/images/plants/kerb-laying/kreb-4.jpeg",
      "/images/plants/groove-cutter/groove-diesel-2.webp",
      // "/images/plants/kerb-laying/kreb-2.jpeg",
      // "/images/plants/kerb-laying/kreb-2.jpeg",
      // "/images/plants/kerb-laying/kreb-2.jpeg",
    ],
  };

  const faqData = [
    {
      title: "1. What makes the 1520 RS suitable for remote locations?",
      content: (
        <>
          <p>
            It’s powered by a diesel engine, removing dependency on external
            electricity—ideal for highway and off-grid projects.
          </p>
        </>
      ),
    },
    {
      title: "2. What is the cutting capacity?",
      content: (
        <>
          <p>
            Achieves up to 500 mm depth adjustment using the triple hand-wheel
            control system.
          </p>
        </>
      ),
    },
    {
      title: "3. What is the blade specification?",
      content: (
        <>
          <p>
            Comes with a 24-inch diamond wheel, optimized for concrete kerb and
            divider cutting.
          </p>
        </>
      ),
    },
    {
      title: "4. Does it include dust suppression?",
      content: (
        <>
          <p>
            Yes. The water spray provision keeps the blade cool and reduces
            airborne dust during cutting.
          </p>
        </>
      ),
    },
    {
      title: "5. How often does it need maintenance?",
      content: (
        <>
          <p>
            Routine engine and blade checks are recommended every 50 operating
            hours, with full servicing as per Atlas guidelines.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Air-Cooled Diesel Engine",
      desc: (
        <span>
          Delivers high torque for deep, uninterrupted cuts for areas without
          electricity access.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-diesel-1.jpeg",
    },
    {
      title: '24" Diamond Blade',
      desc: (
        <span>
          Industrial-grade cutting wheel ensures smooth, clean cuts through
          concrete kerbs and dividers.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-diesel-2.jpeg",
    },
    {
      title: "Triple Hand-Wheel Adjustment",
      desc: (
        <span>
          Allows vertical blade adjustment up to 500 mm for accurate, consistent
          cutting depth on uneven terrain.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-diesel-3.jpeg",
    },
    {
      title: "Heavy-Duty Steel Frame",
      desc: (
        <span>
          Rigid chassis design provides excellent stability during operation and
          reduces vibration under load.
        </span>
      ),
      image: "/images/kerb-cutting/kerb-diesel-4.jpeg",
    },
  ];
  const featuresGridData = [
    {
      title: "Perfect for Remote Sites & Highways",
      desc: (
        <span>
          Diesel power makes it ideal for large outdoor infrastructure projects
          and rural job sites.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "High Torque and Consistent Output",
      desc: (
        <span>
          The engine maintains stable RPM even under continuous cutting pressure
          for efficient performance.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Precision Blade Control",
      desc: (
        <span>
          Three-hand-wheel adjustment offers controlled, step-free vertical
          motion for uniform groove depth.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Operator Safety & Comfort",
      desc: (
        <span>
          Equipped with a protective blade guard, an anti-vibration design, and
          an emergency stop for secure use.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Low Maintenance & Easy Service Access",
      desc: (
        <span>
          Standard diesel components and accessible service points simplify
          on-site maintenance and repairs.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
  ];

  const components = [
    {
      title: "Diesel Engine Unit",
      desc: (
        <ul>
          <li>
            • Air-cooled engine delivers consistent torque with minimal fuel
            consumption.
          </li>
          <li>
            • Independent starting system ensures quick ignition even in remote
            sites.
          </li>
        </ul>
      ),
    },
    {
      title: "Cutting Blade Assembly",
      desc: (
        <ul>
          <li>
            • 24&quot; diamond cutting wheel for precise kerb and concrete work.
          </li>
          <li>
            • Integrated water-spray system minimizes dust and improves blade
            life.
          </li>
        </ul>
      ),
    },
    {
      title: "Height Adjustment System",
      desc: (
        <ul>
          <li>
            • Three hand-wheels for fine vertical control up to 500 mm depth.
          </li>
          <li>• Locking mechanism maintains set depth during operation.</li>
        </ul>
      ),
    },
    {
      title: "Chassis & Mobility System",
      desc: (
        <ul>
          <li>• Heavy-duty steel frame resists vibration and flexing.</li>
          <li>
            • Four-wheel setup allows smooth movement across uneven surfaces.
          </li>
        </ul>
      ),
    },
    {
      title: "Operator Controls",
      desc: (
        <ul>
          <li>
            • Centralized panel with on/off switch, throttle control, and
            emergency stop.
          </li>
          <li>
            • Ergonomic handles for better control and visibility during
            cutting.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Kerb Cutter 1520 RS Diesel | 24" Blade | Atlas Technologies</title>
        <meta name="description" content="Atlas 1520 RS diesel kerb cutter — 24&quot; diamond blade, air-cooled engine, grid-independent. For remote highway and rural road border cutting. Get price from Atlas." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/kerb-cutting-machine/kerb-cutting-machine-1520-rs"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/kerb-laying/kerb-2.png"
        videoUrl="https://www.youtube.com/embed/AKfGJenmmeU"
        title={
          "Kerb Cutter Model 1520 RS: High-Power Cutting for Remote Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Power, Endurance, and Accuracy"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose Model 1520 RS"
        subtitle="Built for tough conditions and long operational cycles, the 1520 RS offers reliable performance where electric models are impractical."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The 1520 RS is engineered for rugged reliability and long-term operation in field environments."
        }
        components={components}
        img ="/images/plants/kerb-laying/kerb-2.png"
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
