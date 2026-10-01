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
    "xl-550",
  );

  const product = {
    title: "XL-550 Kerb Laying Machine",
    subtitle:
      "Diesel Engine | Best for: Large-Scale and High-Precision Projects",
    description: [
      "The Atlas XL-550 Kerb Laying Machine is a high-performance, fully automatic slip-form paver engineered for large-scale road, highway, and urban infrastructure projects. Powered by a 27 kW (36 HP) water-cooled diesel engine, it delivers exceptional power, precision, and control for continuous kerb casting under demanding conditions.",
      "Built for productivity and precision, the XL-550 combines advanced automation, auto-grade and slope sensors, and hydrostatic drive control for perfectly aligned kerbs and dividers. It’s the ideal solution for contractors handling highway medians, city dividers, and heavy-duty curbstone projects that require accuracy and consistency.",
    ],
    // price: "30,00,000",
    features: ["High Accuracy", "Automated Control", "Heavy-Duty Performance"],
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
      title: "1. What type of projects is the XL-550 best suited for?",
      content: (
        <>
          <p>
            It’s ideal for large-scale and high-precision projects such as
            highways, city dividers, and airport or industrial perimeter roads.
          </p>
        </>
      ),
    },
    {
      title: "2. What is the maximum kerb height capacity?",
      content: (
        <>
          <p>
            The XL-550 can cast kerbs up to 600 mm in height, depending on the
            mould and site conditions.
          </p>
        </>
      ),
    },
    {
      title: "3. How fast can the XL-550 lay kerbs?",
      content: (
        <>
          <p>
            It can lay up to 2 meters per minute, maintaining ±3 mm alignment
            accuracy with auto-steering or laser-guided control.
          </p>
        </>
      ),
    },
    {
      title: "4. Can the XL-550 handle curved kerb profiles?",
      content: (
        <>
          <p>
            Yes. It can cast kerbs with a minimum radius of 5 meters using
            auto-grade and slope control. For tighter curves, laser guidance is
            recommended.
          </p>
        </>
      ),
    },
    {
      title: "5. What are the recommended maintenance intervals?",
      content: (
        <>
          <p>
            Routine checks should be performed every 50 operating hours, with
            full servicing done as per the official Atlas maintenance schedule.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Power Diesel Engine (27 kW / 36 HP)",
      desc: (
        <span>
          The water-cooled diesel engine provides strong torque and smooth
          operation, ensuring uninterrupted kerb laying in long, continuous
          stretches.
        </span>
      ),
      image: "/images/kerb-laying/xl-550-1.jpeg",
    },
    {
      title: "Auto-Grade & Slope Control System",
      desc: (
        <span>
          Integrated auto-grade and slope sensors maintain precise kerb
          alignment and level accuracy, even on gradient or curved profiles.
        </span>
      ),
      image: "/images/kerb-laying/xl-550-2.jpeg",
    },
    {
      title: "Hydrostatic Drive System",
      desc: (
        <span>
          Advanced hydrostatic propulsion offers infinitely variable speed
          control, resulting in smooth motion, fine steering, and perfect mould
          tracking.
        </span>
      ),
      image: "/images/kerb-laying/xl-550-3.jpeg",
    },
    {
      title: "Flexible Mould Setup",
      desc: (
        <span>
          Side-mounted modular moulds can be quickly replaced to suit different
          kerb shapes and sizes, optimizing productivity across project types.
        </span>
      ),
      image: "/images/kerb-laying/xl-550-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "High Productivity with Minimal Downtime",
      desc: (
        <span>
          Hydrostatic drive and diesel power enable continuous operation while
          minimizing mechanical maintenance.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Laser Guidance Ready",
      desc: (
        <span>
          The XL-550 is compatible with optional laser guidance systems for
          high-precision alignment on complex layouts and long-run highway
          projects.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Precision Automation for Quality Output",
      desc: (
        <span>
          Auto-grade, slope sensors, and optional laser systems ensure kerbs are
          perfectly aligned, even on curved or inclined surfaces.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Exceptional Stability and Strength",
      desc: (
        <span>
          A reinforced steel chassis and heavy-duty tracks provide excellent
          traction and stability across variable site terrains.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Adaptable and Efficient Design",
      desc: (
        <span>
          Quick-change mould system and modular components make the XL-550
          adaptable to a wide range of kerb dimensions and profiles.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Slope & Grade Sensor",
      desc: (
        <span>
          Monitors ground slope and grade in real time to maintain accurate kerb
          height and alignment during continuous paving operations.
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
            • High-power 27 kW (36 HP) water-cooled diesel engine ensures strong
            torque and continuous kerb laying performance.
          </li>
          <li>
            • Protective housing enhances engine longevity and shields
            components during heavy-duty operations.
          </li>
        </ul>
      ),
    },
    {
      title: "Hydrostatic Drive Mechanism",
      desc: (
        <ul>
          <li>
            • Enables infinitely variable speed control for smooth, precise
            forward motion and steering accuracy.
          </li>
          <li>
            • Reduces mechanical wear and minimizes operator input effort during
            long paving cycles.
          </li>
        </ul>
      ),
    },
    {
      title: "Kerb Mould Assembly",
      desc: (
        <ul>
          <li>
            • Side-mounted modular moulds support a wide variety of kerb shapes
            and dimensions.
          </li>
          <li>
            • Quick-change locking system allows fast mould replacements on
            site.
          </li>
        </ul>
      ),
    },
    {
      title: "Steel Track Chassis",
      desc: (
        <ul>
          <li>
            • Heavy-duty reinforced steel tracks provide strong traction and
            stability across uneven or rough ground surfaces.
          </li>
          <li>
            • Robust construction prevents deformation during continuous
            heavy-load operations.
          </li>
        </ul>
      ),
    },
    {
      title: "Operator Control Panel",
      desc: (
        <ul>
          <li>
            • Ergonomically arranged controls for steering, hydrostatic drive
            speed, and mould vibration settings.
          </li>
          <li>
            • Clear forward visibility supports high-precision kerb alignment
            and smooth machine handling.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>XL-550 Kerb Layer | 27kW | Up to 450mm Height | Atlas India</title>
        <meta name="description" content="XL-550 — 27kW/36HP water-cooled diesel, up to 450mm kerb height, hydrostatic drive, curved profile. For large-scale highway kerb work. Get price from Atlas." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/E0U-9Cy92Y4"
        videoThumbnail="/images/plants/kerb-laying/kreb-4.jpeg"
        pageUrl="/other-products/kerb-laying-machine/XL-550"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/plants/kerb-laying/kreb-4.jpeg"
        videoUrl="https://www.youtube.com/embed/E0U-9Cy92Y4"
        title={
          "XL-550: Advanced Slip-Form Paving for Large-Scale Infrastructure"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Accuracy, Efficiency, and Heavy-Duty Reliability"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose the Hydraulic Broom"
        subtitle="The XL-550 is designed for contractors who demand automation, accuracy, and output in high-volume kerb production. "
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The XL-550 is precision-engineered with powerful automation and a heavy-duty structure to deliver industrial-grade kerb laying performance."
        }
        components={components}
        img ="/images/plants/kerb-laying/kreb-4.jpeg"
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
