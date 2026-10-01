import FAQSection2 from "../../../../components/category/faq2";
import ContactForm from "../../../../components/category/form";
import FeatureGrid from "../../../../components/others/FeatureGrid";
import FeatureSlider from "../../../../components/others/FeatureSlider;";
import Productfaq from "../../../../components/others/productFaq";
import ProductSlider2 from "../../../../components/others/productSlider";
import Video from "../../../../components/others/video";
import ProductOverview from "../../../../components/products/productslider";
import ProductSlider from "../../../../components/products/productslider";

import Head from "next/head";

import useCategoryProducts from "../../../../hooks/useCategoryProducts";
import ProductSchema from "../../../../components/schema/ProductSchema";

export default function ABP80() {
  const { getProduct, getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "other-product",
    "kerb-laying-machine",
    "xl-400",
  );

  const product = {
    title: "XL-400 Kerb Laying Machine",
    subtitle: "Diesel Engine | Best for: Small-to-Medium Scale Projects",
    description: [
      "The Atlas XL-400 Kerb Laying Machine is a compact and efficient slip-form paver engineered for accurate casting of concrete kerbs, dividers, and edge barriers in small-to-medium-scale projects. Powered by a reliable diesel engine, the XL-400 combines robust construction with smooth, hydrostatic drive control to ensure precise kerb shaping with minimal maintenance.",
      "Designed for flexible performance and operator comfort, the XL-400 is ideal for urban roads, residential layouts, and landscaping projects where maneuverability, productivity, and precision are critical.",
    ],
    features: ["Compact Design", "Smooth Operation", "Reliable Performance"],
    // price: "10,50,000",
    images: [
      "/images/plants/kerb-laying/kreb-1.jpeg",
      "/images/plants/kerb-laying/kreb-2.jpeg",
      "/images/plants/kerb-laying/kreb-3.jpeg",
      "/images/plants/kerb-laying/kreb-4.jpeg",
      "/images/plants/kerb-laying/kerb-5.png",
    ],
  };

  const faqData = [
    {
      title: "1. What type of projects is the XL-400 best suited for?",
      content: (
        <>
          <p>
            It’s ideal for small-to-medium-scale road and urban infrastructure
            projects, including residential roads, dividers, and landscape
            kerbs.
          </p>
        </>
      ),
    },
    {
      title: "2. What is the maximum kerb height capacity?",
      content: (
        <>
          <p>
            The XL-400 can cast kerbs up to 400 mm high, depending on mould
            configuration and site conditions.
          </p>
        </>
      ),
    },
    {
      title: "3. How fast can the XL-400 lay kerbs?",
      content: (
        <>
          <p>
            It can lay approximately 2 meters per minute, maintaining ±3 mm
            alignment accuracy on curves with proper calibration.
          </p>
        </>
      ),
    },
    {
      title: "4. Can the XL-400 handle curved kerb profiles?",
      content: (
        <>
          <p>
            Yes. It is suitable for gentle curves and larger radii. For tighter
            radius applications, minor steering adjustments are required.
          </p>
        </>
      ),
    },
    {
      title: "5. What are the maintenance requirements?",
      content: (
        <>
          <p>
            Routine maintenance checks are recommended every 50 operating hours,
            while major servicing should follow the intervals mentioned in the
            user manual.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Diesel-Powered Performance",
      desc: (
        <span>
          The XL-400 runs on a fuel-efficient diesel engine that delivers
          reliable power for consistent kerb casting across varied site
          conditions.
        </span>
      ),
      image: "/images/kerb-laying/xl-400-1.jpeg",
    },
    {
      title: "Hydrostatic Drive System",
      desc: (
        <span>
          The advanced hydrostatic drive provides infinitely variable speed
          control, ensuring smooth movement, precise steering, and
          vibration-free operation during kerb laying.
        </span>
      ),
      image: "/images/kerb-laying/xl-400-2.jpeg",
    },
    {
      title: "Flexible Mould Configuration",
      desc: (
        <span>
          Side-mounted modular moulds allow quick adaptation between different
          kerb profiles without requiring complex mechanical changes.
        </span>
      ),
      image: "/images/kerb-laying/xl-400-3.jpeg",
    },
    {
      title: "Stable Steel Track Chassis",
      desc: (
        <span>
          Rugged steel track undercarriage enhances traction and stability on
          uneven terrain, ensuring straight, accurate kerb alignment.
        </span>
      ),
      image: "/images/kerb-laying/xl-400-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Adaptable to Site Needs",
      desc: (
        <span>
          Quick mould interchangeability supports a variety of kerb shapes and
          profiles, from road dividers to pathway edges.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Smooth & Precise Operation",
      desc: (
        <span>
          Hydrostatic propulsion and modular moulds ensure consistent,
          high-quality kerb formation with minimal surface defects.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Operator-Friendly Controls",
      desc: (
        <span>
          Simplified hydraulic and steering controls enhance maneuverability and
          minimize operator fatigue during long working hours.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Low Maintenance Requirements",
      desc: (
        <span>
          The machine’s simplified mechanical design and robust components
          minimize wear and servicing frequency.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Built for Durability",
      desc: (
        <span>
          Heavy-gauge steel body and corrosion-resistant components make the
          XL-400 dependable in harsh outdoor environments.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Slope & Grade Sensor",
      desc: (
        <span>
          Continuously adjusts mould elevation using real-time slope and grade
          feedback, ensuring precise kerb alignment on gradients and uneven base
          layers.
        </span>
      ),
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Engine Unit",
      desc: (
        <ul>
          <li>
            • Fuel-efficient diesel engine ensures stable torque delivery and
            low fuel consumption.
          </li>
          <li>
            • Protected housing for extended engine life and easy service
            access.
          </li>
        </ul>
      ),
    },
    {
      title: "Hydrostatic Drive Mechanism",
      desc: (
        <ul>
          <li>
            • Enables infinitely variable speed control for smooth forward
            motion and accurate alignment.
          </li>
          <li>• Reduces mechanical wear and operator input effort.</li>
        </ul>
      ),
    },
    {
      title: "Kerb Mould Assembly",
      desc: (
        <ul>
          <li>
            • Side-mounted modular moulds adaptable for various kerb shapes.
          </li>
          <li>• Quick-lock system allows easy changeovers between profiles.</li>
        </ul>
      ),
    },
    {
      title: "Steel Track Chassis",
      desc: (
        <ul>
          <li>
            • Provides stability and traction on different ground surfaces.
          </li>
          <li>• Durable construction resists deformation during heavy use.</li>
        </ul>
      ),
    },
    {
      title: "Operator Control Panel",
      desc: (
        <ul>
          <li>
            • Ergonomically positioned controls for steering, drive speed, and
            mould vibration.
          </li>
          <li>• Clear visibility for precision during kerb placement.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>XL-400 Kerb Layer | Up to 300mm Height | Atlas Technologies</title>
        <meta name="description" content="XL-400 — slip-form kerb layer, up to 300mm kerb height, hydrostatic drive, flexible mould system. For small to medium road and urban infrastructure. Get price." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/6HxBboWiPCQ"
        videoThumbnail="/images/plants/kerb-laying/kreb-1.jpeg"
        pageUrl="/other-products/kerb-laying-machine/XL-400"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/kerb-laying/kreb-1.jpeg"
        videoUrl="https://www.youtube.com/embed/6HxBboWiPCQ"
        title={"XL-400: Compact and Reliable Kerb Casting for Every Project"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Efficiency, Stability, and Ease of Operation"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Hydraulic Broom"
        subtitle="The XL-400 is the perfect choice for contractors seeking mobility, flexibility, and reliability in a cost-effective kerb laying solution."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The XL-400 is compact yet engineered with industrial-grade components for precision kerb laying and long operational life."
        }
        components={components}
        img =  "/images/plants/kerb-laying/kreb-2.jpeg"
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
