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

export default function MOBMIXCLASSIC30() {
  const { getOtherProducts } = useCategoryProducts();
  const otherProducts = getOtherProducts(
    "concrete-plants",
    "mobile-concrete-batching-plant-planetary-mixer-classic",
    "mobmix-classic-30"
  );

  const product = {
    title: "MOBMIX CLASSIC 30 (Pan Mixer) Mobile Concrete Batching Plant",
    subtitle:
      "Pan Mixer (500 Liters, 30M3/HR) | Control: PLC + HMI (SCADA Optional)",
    description: [
      "The Atlas MOBMIX CLASSIC 30 (Pan Mixer) offers dependable, cost-effective concrete production for contractors who need mobility and consistent output. Delivering 30 m³/hr, it brings together Atlas’s heavy-duty fabrication quality and proven pan-mixer efficiency in a compact, towable configuration designed for quick setup and reliable on-site operation.",
      "Great for small RMC operations, rural infrastructure, housing foundations, and precast production, the MOBMIX CLASSIC 30 provides gentle but thorough mixing performance, precise batching, and easy mobility — all at an economical operating cost.",
    ],
    features: ["Compact Design", "Reliable Mixing", "Proven Performance"],
    images: [
      "/images/concrete-plants/mobmix-classic-30-1.jpg",
      "/images/concrete-plants/mobmix-classic-30-2.jpg",
      "/images/concrete-plants/mobmix-classic-30-3.jpg",
      "/images/concrete-plants/mobmix-classic-30-4.jpg",
    ],
  };

  const featureData = [
    {
      title: "30 m³/hr Rated Output",
      desc: "Consistent production for small to mid-scale RMC and construction projects.",
      image: "/images/concrete-plants/mobmix-classic-30-1.jpg",
    },
    {
      title: "Atlas Pan Mixer (750/500 L)",
      desc: "Six-arm mixing spider with Ni-Hard tips; twin-stage planetary gearboxes (94 % efficiency) minimize vibration and torque stress.",
      image: "/images/concrete-plants/mobmix-classic-30-2.jpg",
    },
    {
      title: "Fully Mobile Single-Chassis Design",
      desc: "Mixer, bins, conveyors, and control cabin mounted on one chassis — for quick setup, towing, and transport between sites.",
      image: "/images/concrete-plants/mobmix-classic-30-3.jpg",
    },
    {
      title: "Energy-Efficient Operation",
      desc: "62 HP total connected load and low-friction mechanicals reduce running cost and maintenance frequency.",
      image: "/images/concrete-plants/mobmix-classic-30-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Economical Mixing Solution",
      desc: "Optimized for standard M20–M40 grades; gentle pan action ensures uniformity while conserving energy.",
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Quick Installation & Compact Footprint",
      desc: "Foldable structure and pre-wired modules allow deployment within hours, ideal for constrained or remote sites.",
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Durability You Can Count On",
      desc: "Ni-Hard tips, replaceable liners, PU paint finish, and ISI-standard motors guarantee long service life.",
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Automation & Ease of Control",
      desc: "PLC + HMI system with recipe storage, data logging, and optional SCADA/Wi-Fi for remote access and monitoring.",
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Load-Cell Based Weighing System",
      desc: "Independent load-cell measurement for aggregates, cement, water, and additives ensures precise batching.",
      icon: "/images/comman/logo/campus.png",
    },
  ];

  const components = [
    {
      title: "Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>• Two / Four bins (4.5 m³ each) made of 5 mm MS plate.</li>
          <li>
            • Pneumatically operated discharge gates with vibrator motor;
            loading height ≈ 5 m.
          </li>
        </ul>
      ),
    },
    {
      title: "Weigh Conveyor System",
      desc: (
        <ul>
          <li>
            • 800 mm, 4-ply chevron belt (8 m length) mounted on 4 × 2000 kg
            S-type load cells (1 m³ capacity).
          </li>
          <li>• 15 HP gear motor drive with belt scraper and tension bolts.</li>
        </ul>
      ),
    },
    {
      title: "Pan Mixer (750/500 L)",
      desc: (
        <ul>
          <li>• 0.5 m³ batch capacity.</li>
          <li>
            • 6-arm mixing spider with Ni-Hard tips and 12 mm replaceable
            liners.
          </li>
          <li>
            • Driven by a 30 HP motor through twin-stage planetary gearboxes (94
            % efficiency).
          </li>
        </ul>
      ),
    },
    {
      title: "Cement, Water & Additive Weigh Hoppers",
      desc: (
        <ul>
          <li>
            • Cement hopper: 500 kg capacity with 3 × 200 kg shear-beam load
            cells, 0.18 HP vibrator.
          </li>
          <li>
            • Water hopper: 300 L with 2 × 200 kg load cells and 75 mm pneumatic
            valve.
          </li>
          <li>
            • Additive hopper: 10 L acrylic tank on 50 kg S-type load cell.
          </li>
        </ul>
      ),
    },
    {
      title: "Pneumatics & Compressor",
      desc: (
        <ul>
          <li>• 3 HP compressor delivering 12 kg/cm² pressure (10.8 CFM).</li>
          <li>
            • Cylinders, solenoid valves, and nylon pipe network for reliable
            operation.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Cabin",
      desc: (
        <ul>
          <li>
            • Corrugated steel foldable cabin with 30 mm insulation, LED
            lighting, optional AC.
          </li>
          <li>
            • Equipped with PLC panel and HMI (5.7&quot; TFT display –
            B&R/Delta).
          </li>
        </ul>
      ),
    },
    {
      title: "Underframe & Structure",
      desc: (
        <ul>
          <li>• Fabricated rolled-steel chassis with fixed support jacks.</li>
          <li>
            • 4.1 m clearance under mixer outlet chute; includes maintenance
            platform and ladder.
          </li>
        </ul>
      ),
    },
  ];

  const faqData = [
    {
      title: "1. What type of projects is the MOBMIX CLASSIC 30 best for?",
      content: (
        <p>
          Ideal for small RMC plants, housing projects, rural roads, and precast
          sites needing 30 m³/hr output with mobility.
        </p>
      ),
    },
    {
      title: "2. What is the main advantage of a pan mixer?",
      content: (
        <p>
          The gentle, multi-arm action produces uniform mixes without aggregate
          damage, suiting standard M20–M40 grades and recycled aggregates.
        </p>
      ),
    },
    {
      title: "3. Is the plant automated?",
      content: (
        <p>
          Yes — equipped with PLC + HMI for automatic weighing and mixing,
          manual override, and SCADA/Wi-Fi remote control (optional).
        </p>
      ),
    },
    {
      title: "4. What power supply does it require?",
      content: (
        <p>
          Total connected load ≈ 62 HP; Atlas recommends an 82 kVA generator for
          optimal operation.
        </p>
      ),
    },
    {
      title: "5. Does it support cement silos or bag feed systems?",
      content: (
        <p>
          Yes — supports 1.5 T hopper or vertical 100 T cement silo with 219 mm
          × 12 m screw conveyor.
        </p>
      ),
    },
    {
      title: "6. What safety features are included?",
      content: (
        <p>
          Safety guards on belts and drives, interlocked covers, emergency
          stops, and motor overload protection.
        </p>
      ),
    },
    {
      title: "7. How easy is it to transport and set up?",
      content: (
        <p>
          It’s a single-chassis mobile unit with pre-wired sections, allowing
          erection and commissioning within a few hours.
        </p>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>
          MOBMIX CLASSIC 30 Mobile Concrete Batching Plant – Pan Mixer
        </title>
        <meta
          name="description"
          content="The MOBMIX CLASSIC 30 (Pan Mixer) Mobile Concrete Batching Plant delivers 30 m³/hr cost-efficient concrete production with PLC + HMI automation for small to mid-scale projects."
        />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
      videoThumbnail="/images/concrete-plants/mobmix-classic-30-1.jpg"
        pageUrl="/concrete-plants/mobile-concrete-batching-plant-pan-mixer/mobmix-classic-30"
      />

      <ProductOverview {...product} />

      <Video
        thumbnail="/images/concrete-plants/mobmix-classic-30-1.jpg"
        videoUrl="https://www.youtube.com/embed/HA0c60XvlwY"
        title={
          "MOBMIX CLASSIC 30 (Pan Mixer): Mobile and Efficient Concrete Production"
        }
        isYoutube={true}
      />

      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Designed for easy Mobility, reliable Accuracy, and Cost-Efficiency"
        features={featureData}
      />

      <FeatureGrid
        title="Why Choose MOBMIX CLASSIC 30 (Pan Mixer)"
        subtitle="Built for dependable, low-maintenance operation, the MOBMIX CLASSIC 30 ensures consistent batching accuracy, reduced downtime, and long-term structural reliability."
        features={featuresGridData}
      />

      <Productfaq
        title="Components Breakdown"
        para="Each module of the MOBMIX CLASSIC 30 is built for rugged use, accurate batching, and transportability."
        components={components}
      />

      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of mobile plants designed for exceptional performance and reliability."
        cards={otherProducts}
      />

      <ContactForm page={product.title} />

      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
