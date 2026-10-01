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
import ProductSchema from "../../../components/schema/ProductSchema";
export default function ABP80() {
  const product = {
    title: "AI-3000 Mini Bitumen Sprayer",
    subtitle: "2.5 T | Tank Capacity ≈ 3000 L | Engine: 6.5 HP",
    description: [
      "The Atlas Mini Bitumen Sprayer (AI-3000) is a compact, air-cooled, and towable unit engineered for small and medium road-maintenance jobs. With a 2.5-ton insulated galvanized coating tank and hand-spray nozzle & 2.2 m spray bar, it delivers precise hot-bitumen application on road shoulders, potholes, narrow streets, and hilly routes.",
      "Efficient, portable, and low-maintenance, this mini sprayer combines Atlas reliability with an economical diesel engine and heavy-duty pump system to give contractors maximum control and flexibility on every small-scale project.",
    ],
    features: ["Maximum Capacity", "Uniform Performance", "Fuel Efficient"],
    images: [
     
      "/images/bitumen-sprayer/ai-3000-2.jpg",
      "/images/bitumen-sprayer/ai-3000-1-new.jpg",
      "/images/bitumen-sprayer/ai-3000-3.jpg",
      "/images/bitumen-sprayer/ai-3000-4.jpg",
      "/images/bitumen-sprayer/ai-3000-5.jpg",
      "/images/bitumen-sprayer/ai-3000-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "1. What is the capacity of the Mini Bitumen Sprayer?",
      content: (
        <>
          <p>
            It has a 2.5 T (≈ 3000 L) tank with thermal insulation to maintain
            bitumen temperature throughout the day.
          </p>
        </>
      ),
    },
    {
      title: "2. Can it be towed by a standard vehicle?",
      content: (
        <>
          <p>
            Yes. The unit is mounted on a towable chassis and can be transported
            by a light commercial vehicle or tractor.
          </p>
        </>
      ),
    },
    {
      title:
        "3. How long does it retain bitumen temperature without reheating?",
      content: (
        <>
          <p>
            The 40 mm glass-wool insulation keeps bitumen at workable
            temperature for many hours, depending on ambient conditions.
          </p>
        </>
      ),
    },
    {
      title: "4. Is cleaning complicated?",
      content: (
        <>
          <p>
            No. The system is flushed with air and diesel at day’s end to clear
            nozzles and pipelines, preventing clogs and ensuring long service
            life.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "2.5 T (≈ 3000 L) Insulated Tank",
      desc: (
        <span>
          Fabricated with 5 mm MS sheet, 40 mm glass-wool insulation, and a
          galvanized outer shell to retain heat and resist corrosion in humid or
          monsoon climates.
        </span>
      ),
      image: "/images/bitumen-sprayer/ai-3000-1.jpg",
    },
    {
      title: "Economical 6.5 HP Diesel Engine",
      desc: (
        <span>
          Air-cooled design with 0.7–1 L/hr fuel use powers the bitumen pump and
          burner efficiently for extended daily operations.
        </span>
      ),
      image: "/images/bitumen-sprayer/ai-3000-2.jpg",
    },
    {
      title: "High-Pressure Oil Burner (7–8 L/hr)",
      desc: (
        <span>
          Single diesel-fired burner heats bitumen quickly to working
          temperature, ready for uniform spraying without overheating.
        </span>
      ),
      image: "/images/bitumen-sprayer/ai-3000-3.jpg",
    },
    {
      title: "Hand-Spray Nozzle & Air Compressor",
      desc: (
        <span>
          2 HP single-piston compressor with air tank enables cleaning and to
          operate pneumatic controls.
        </span>
      ),
      image: "/images/bitumen-sprayer/ai-3000-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Perfect for Last-Mile Road Work",
      desc: (
        <span>
          Towable design fits tight streets and remote terrains where large
          sprayers can’t operate, offering unmatched mobility and ease of
          deployment.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // replace with relevant icon
    },
    {
      title: "Accurate and Controlled Spraying",
      desc: (
        <span>
          The hand-spray nozzle provides fine control for pothole repairs and
          surface edges, ensuring a uniform coat without overspray or bitumen
          waste. The 2.2 m spray bar can be used on narrow roads.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png",
    },
    {
      title: "Fuel-Efficient Performance",
      desc: (
        <span>
          Low engine consumption (≈ 1 L/hr) and optimized burner design reduce
          operating costs while maintaining steady heat throughout the day.
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
    {
      title: "Corrosion-Resistant & Weather-Ready",
      desc: (
        <span>
          Galvanized tank and insulation extend service life in humid zones,
          keeping bitumen hot for hours without reheating.
        </span>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Support & Customization",
      desc: (
        <span>
          Atlas provides nationwide spares and training; options include custom
          nozzle sets and fuel burners to meet local transport standards.
        </span>
      ),
      icon: "/images/comman/logo/globe.png",
    },
  ];

  const products = [
    //     {
    //       img: "/images/bitumen-sprayer/ae-4000-1.jpeg",
    //       title: "Bitumen Sprayer AE-4000",
    //       desc: "4 Ton Capacity",
    //       url: "/bitumen-sprayer/ae-4000",
    //     },
    {
      img: "/images/bitumen-sprayer/ae-6000-1.jpeg",
      title: "Bitumen Sprayer AE-6000",
      desc: "6 Ton Capacity",
      url: "/bitumen-sprayer/ae-6000",
    },
    {
      img: "/images/bitumen-sprayer/ae-8000-1.jpeg",
      title: "Bitumen Sprayer AE-8000",
      desc: "8 Ton Capacity",
      url: "/bitumen-sprayer/ae-8000",
    },
    {
      img: "/images/bitumen-sprayer/ae-10000-1.jpeg",
      title: "Bitumen Sprayer AE-10000",
      desc: "10 Ton Capacity",
      url: "/bitumen-sprayer/ae-10000",
    },
    {
      img: "/images/bitumen-sprayer/ae-12000-1.jpeg",
      title: "Bitumen Sprayer AE-12000",
      desc: "12 Ton Capacity",
      url: "/bitumen-sprayer/ae-12000",
    },
    {
      img: "/images/bitumen-sprayer/ae-12000-1.jpeg",
      title: "Bitumen Sprayer (With Hydraulic Hopper)",
      desc: "6 T / 8 T / 10 T Options",
      url: "/bitumen-sprayer/ae-12000",
    },
  ];

  const components = [
    {
      title: "Bitumen Tank & Insulation",
      desc: (
        <ul>
          <li>
            • 5 mm MS sheet tank with 40 mm glass-wool insulation and galvanized
            outer shell.
          </li>
          <li>
            • 600 × 600 mm manhole with manual temperature gauge (up to 300 °C).
          </li>
        </ul>
      ),
    },
    {
      title: "Diesel Engine & Pump System",
      desc: (
        <ul>
          <li>• 6.5 HP air-cooled diesel engine consuming ≈ 0.7–1 L/hr.</li>
          <li>
            • Gear-type bitumen pump (200–300 L/min) with manual clutch
            engagement.
          </li>
        </ul>
      ),
    },
    {
      title: "Burner Assembly",
      desc: (
        <ul>
          <li>
            • Single high-pressure diesel-fired burner (7–8 L/hr consumption).
          </li>
          <li>• Ensures fast heating and temperature consistency.</li>
        </ul>
      ),
    },
    {
      title: "Air Compressor & Cleaning System",
      desc: (
        <ul>
          <li>
            • 2 HP single-piston compressor with air tank for cleaning roads and
            lines.
          </li>
          <li>
            • Drain valve and diesel flush system simplify post-operation
            maintenance.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Nozzle Set",
      desc: (
        <ul>
          <li>
            • Manual controls for pump and burner operation with a pressure
            indicator.
          </li>
          <li>
            • Hand-spray nozzle enables precise application in restricted
            spaces.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AI-3000 | 3 Ton Mini Bitumen Sprayer | Towable | Atlas India</title>
        <meta name="description" content="AI-3000 — 3 ton towable mini sprayer, no truck needed, 6.5 HP diesel, hand-spray nozzle, 200–300 L/min pump. For pothole patching and narrow routes. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/Cwd80QFRSzI"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/mini-bitumen-sprayer/ai-3000"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-sprayer/ai-3000-6.jpg"
        videoUrl="https://www.youtube.com/embed/Cwd80QFRSzI"
        title={
          "AI-3000: Compact, Efficient & Built for Small-Scale Road Projects"
        }
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Portability and Precision"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose AI-3000"
        subtitle="This mini bitumen sprayer is designed for small contractors and municipal teams who need reliable, quick-mobilizing bitumen spraying equipment for targeted applications."
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "The Mini Bitumen Sprayer incorporates all essential components that ensure reliable heating, circulation, and spray performance for smaller projects."
        }
        components={components}
        img = "/images/bitumen-sprayer/ai-3000-3.jpg"
      />
      {/* <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      /> */}
      <ContactForm page={product.title} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
