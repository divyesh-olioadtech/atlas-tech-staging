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
    "concrete-plants",
    "mobile-concrete-batching-plant-twin-shaft",
    "mobmix-pro-45",
  );

  const product = {
    title: "MOBMIX PRO 45 Mobile Concrete Batching Plant (Twin Shaft)",
    subtitle:
      "Twin Shaft Mixer (750 Liters, 45M3/HR) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas MOBMIX PRO 45 Mobile Concrete Batching Plant brings stationary-level concrete quality to job sites that demand frequent relocation. With a rated capacity of 45 m³/hr, it offers high-efficiency twin-shaft mixing in a compact, towable design, ensuring quick setup and reliable production even in remote or shifting project conditions.",

      "Ideal for bridges, roadworks, mid-scale RMC production, and infrastructure projects, the MOBMIX PRO 45 combines rugged Atlas engineering with a mobility-optimized structure for precise, repeatable batching performance anywhere.",
    ],
    features: ["True Mobility", "Heavy-Duty Mixing", "Quick Setup"],
    // price: "29,50,000",
    images: [
      // "/images/concrete-plants/mobmix-pro-45-2.JPG",
      "/images/concrete-plants/mobmix-pro45-newone.webp",
      "/images/concrete-plants/mobmix-pro-45-3.JPG",
      "/images/concrete-plants/mobmix-pro-45-4.JPG",
      
      "/images/concrete-plants/mobmix-pro-45-6.jpg",
      "/images/concrete-plants/mobmix-pro-45-7.jpg",
    ],
  };

  const featureData = [
    {
      title: "45 m³/hr Mobile Output",
      desc: (
        <span>
          Designed for mid-range project volumes, delivering uniform concrete
          batch after batch with 60-second cycles.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-45-1.jpeg",
    },
    {
      title: "Twin Shaft Mixer (1125/750 L)",
      desc: (
        <span>
          Produces 0.75 m³ of vibrated concrete per cycle; Ni-Hard liners (12
          mm), cast-iron blades (600 HB), and hydraulic discharge.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-45-2.jpeg",
    },
    {
      title: "Mobile Single-Chassis Design",
      desc: (
        <span>
          Compact layout mounts aggregate bins, mixer, and control cabin on one
          towable frame for rapid relocation and minimal foundation work.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-45-3.jpeg",
    },
    {
      title: "Smart PLC + HMI Automation",
      desc: (
        <span>
          5.7&quot; colour touchscreen interface (B&R / Delta) with recipe
          storage, data logging, and optional SCADA or Wi-Fi remote operation.
        </span>
      ),
      image: "/images/concrete-plants/mobmix-pro-45-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Stationary-Level Quality, Mobile Design",
      desc: (
        <span>
          Delivers the same mixing performance as Atlas stationary plants with
          the benefit of fast setup and relocation.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Rugged and Easy to Maintain",
      desc: (
        <span>
          Ni-Hard liners, hydraulic discharge, and grease automation reduce wear
          and maintenance frequency.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Fully Automated Operation",
      desc: (
        <span>
          PLC-based control desk with auto / manual modes and data logging for
          complete process traceability.
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Flexible Configuration",
      desc: (
        <span>
          Optional 100 T cement silo, 14 m screw conveyor, and diesel genset
          options for remote locations.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Load-Cell Batching",
      desc: (
        <span>
          Aggregates, cement, water, and additives are measured independently on
          load cells for accurate material proportioning and consistent quality.
        </span>
      ),
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            • Four bins (7.5 m³ each) with pneumatic discharge gates and
            vibrator motor.
          </li>
          <li>• Constructed from 5 mm MS plate; loading height 5.5 m.</li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>
            • 800 mm, 4-ply chevron belt (8.3 m length) mounted on load cells
            (1.5 m³ total capacity).
          </li>
          <li>
            • Driven by a 15 HP gear motor with a troughed idler support frame
            and belt scraper.
          </li>
        </ul>
      ),
    },
    {
      title: "Twin Shaft Mixer (1125/750 L)",
      desc: (
        <ul>
          <li>• Produces 0.75 m³ of vibrated concrete per batch.</li>
          <li>
            • 16 mixing blades, 20 arms, and 4 scrapers in cast iron (600 HB).
          </li>
          <li>
            • Hydraulic door with manual emergency pump, auto grease pump, and
            dual motors (15 HP × 2 = 30 HP).
          </li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>
            • Cement hopper: 850 kg capacity with 3 × 450 kg shear-beam load
            cells and 0.18 HP vibrator.
          </li>
          <li>
            • Water hopper: 400 L with 3 × 225 kg load cells and pneumatic
            butterfly valve.
          </li>
          <li>
            • Additive hopper: 10 L transparent acrylic tank on 50 kg S-type
            load cell.
          </li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 3 HP compressor delivering 12 kg/cm² pressure (10.8 CFM).</li>
          <li>• Includes solenoid valves, cylinders, and nylon pipework.</li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Tiltable, corrugated steel cabin folding into the under-frame for
            transport.
          </li>
          <li>
            • Insulated walls (30 mm mineral wool), LED lighting, optional AC,
            and lockable access door.
          </li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>
            • Rolled-steel chassis with fixed support jacks; 3.6 m clearance
            below mixer outlet.
          </li>
          <li>• Maintenance platform with handrails and a ladder.</li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What projects is the MOBMIX PRO 45 best suited for?",
      content: (
        <>
          <p>
            Ideal for bridges, infra sites, mid-scale RMC production, and road
            construction, where frequent site shifts occur.
          </p>
        </>
      ),
    },
    {
      title: "2. What kind of concrete can it produce?",
      content: (
        <>
          <p>
            Handles RMC, high-strength structural mixes, RCC, PQC, and mixes
            with recycled aggregates thanks to twin-shaft shear action.
          </p>
        </>
      ),
    },
    {
      title: "3. How accurate is the batching process?",
      content: (
        <>
          <p>
            All materials are load-cell weighed and PLC-controlled for ±1%
            accuracy in each batch.
          </p>
        </>
      ),
    },
    {
      title: "4. What is the power requirement?",
      content: (
        <>
          <p>
            Total connected load ≈ 109 HP; Atlas recommends a 125 kVA generator
            for field operation.
          </p>
        </>
      ),
    },
    {
      title: "5. Does the plant support cement silos?",
      content: (
        <>
          <p>
            Yes — compatible with Atlas 100 T vertical silo and 14 m screw
            conveyor (219 mm dia).
          </p>
        </>
      ),
    },
    {
      title: "6. How portable is the setup?",
      content: (
        <>
          <p>
            Fully mobile, single-chassis design folds for transport. It requires
            minimal foundation and reassembles in hours.
          </p>
        </>
      ),
    },
    {
      title: "7. What safety measures are included?",
      content: (
        <>
          <p>
            Emergency stops, belt guards, hydraulic limit switches, and
            interlocked inspection doors for operator safety.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Mobile asphalt drum mix plant – 35-30-40 Tph Capacity</title>
        <meta
          name="description"
          content="The 35–40 TPH mobile asphalt drum mix plant from Atlas is suitable for on-site mixing in mid-size projects. Offered by a reliable mobile asphalt drum mix plant manufacturer in India."
        />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        videoThumbnail="/images/concrete-plants/mobmix-pro-45-5.jpg"
        pageUrl="/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer/mobmix-pro-45"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/concrete-plants/mobmix-pro-45-5.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={"MOBMIX PRO 45: Reliable Concrete Production On the Move"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Portability, Consistency, and Performance"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose MOBMIX PRO 45 (Twin Shaft Mixer)"
        subtitle="Built for dependable, low-maintenance operation, the MOBMIX PRO 45 ensures consistent batching accuracy, reduced downtime, and long-term reliability."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Each sub-system of the MOBMIX PRO 45 is engineered for accuracy, safety, and ease of transport."
        }
        components={components}
        img="/images/concrete-plants/mobmix-pro-45-5.jpg"
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
