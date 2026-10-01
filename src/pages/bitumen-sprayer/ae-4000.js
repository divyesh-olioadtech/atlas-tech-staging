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
    title: "AE-4000 Bitumen Sprayer",
    subtitle: "4 T | Spray Width: 2.4 m – 4.2 m | Engine: 25 HP",
    description: [
      "The Atlas AE-4000 Bitumen Sprayer is a compact, truck-mounted unit built for precision bitumen spraying on small and medium maintenance jobs — used in national highways also and big projects also. With a 4-ton insulated tank and adjustable 2.4 m–4.2 m spray width, it provides uniform binder application for highways, driveways, patch works, and narrow-lane surfaces.",
      "Designed for contractors who need quick setup and reliable spraying on budget-sensitive or space-limited projects, AE-4000 combines mobility, economy, and ease of use in a single, efficient package.",
    ],
    features: ["Compact Design", "Accurate Spray", "Low Operating Cost"],
    images: [
      "/images/bitumen-sprayer/newreplacedeleven.webp",
      "/images/bitumen-sprayer/newreplacedfifteen.webp",
      "/images/bitumen-sprayer/newreplacedfive.webp",
      "/images/bitumen-sprayer/newreplacedfour.webp",
      "/images/bitumen-sprayer/newreplacedfourteen.webp",
      
    ],
  };

  const faqData = [
    {
      title: "1. What kind of projects is AE-4000 best for?",
      content: (
        <>
          <p>
            Ideal for small road patches, pothole repairs, and local lane
            maintenance where a lightweight unit is more practical than a
            full-sized sprayer.
          </p>
        </>
      ),
    },
    {
      title: "2. Can it be mounted on different trucks?",
      content: (
        <>
          <p>
            Yes. AE-4000 is compatible with most standard commercial truck
            chassis.
          </p>
        </>
      ),
    },
    {
      title: "3. How do I ensure uniform spraying?",
      content: (
        <>
          <p>
            Maintain recommended driving speed and pressure settings; regularly
            clean nozzles for even bitumen flow.
          </p>
        </>
      ),
    },
    {
      title: "4. Is customization available for fuel system or width?",
      content: (
        <>
          <p>
            Atlas offers bar extensions, automatic controls, and alternative
            fuel burner options on request.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Adjustable Spray Width (2.4 m–4.2 m)",
      desc: (
        <span>
          Fold-out spray bar supports narrow lane work and wider surface
          treatment with quick pneumatic or manual adjustment for accurate
          coverage.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-4000-1.jpeg",
    },
    {
      title: "Reliable 20 HP Diesel Engine",
      desc: (
        <span>
          Kirloskar air-cooled engine offers dependable performance with low
          fuel consumption and easy field maintenance.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-4000-2.jpeg",
    },
    {
      title: "4-Ton Heated Tank with Coil System",
      desc: (
        <span>
          Insulated tank and direct heating coils keep bitumen at optimum
          temperature for consistent spraying and adhesion.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-4000-3.jpeg",
    },
    {
      title: "Simple Controls & Low Servicing Needs",
      desc: (
        <span>
          Compact control panel, quick-release nozzles, and accessible ports
          simplify operation and cleaning for daily use.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-4000-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Ideal for Compact Projects",
      desc: (
        <span>
          With a 4-ton capacity and adjustable bar, AE-4000 fits perfectly on
          tight urban streets or local roads where larger distributors can’t
          operate easily.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Accurate and Consistent Spray",
      desc: (
        <span>
          Uniform nozzle layout ensures a steady bitumen film for strong bonding
          and reduced material wastage on each pass.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Fuel-Efficient and Low Running Cost",
      desc: (
        <span>
          Optimized hydraulic and heating systems minimize fuel use, making it
          cost-effective for daily road repairs or spot maintenance.
        </span>
      ),
      icon: "/images/comman/logo/eco.png", // use relevant icon
    },
    {
      title: "Lightweight and Easy to Operate",
      desc: (
        <span>
          Compact form factor and intuitive controls let one operator handle
          spraying safely and efficiently with minimal training.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Reliable Atlas Support Worldwide",
      desc: (
        <span>
          Atlas offers installation guidance, operator training and custom
          options like hand-spray gun attachments and automatic controls to fit
          local requirements.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
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
      img: "/images/bitumen-sprayer/newreplacednine.webp",
      title: "Bitumen Sprayer AE-6000",
      desc: "6 Ton Capacity",
      url: "/bitumen-sprayer/ae-6000",
    },
    {
      img: "/images/bitumen-sprayer/newreplacedone.webp",
      title: "Bitumen Sprayer AE-8000",
      desc: "8 Ton Capacity",
      url: "/bitumen-sprayer/ae-8000",
    },
    {
      img:  "/images/bitumen-sprayer/newreplacedseven.webp",
      title: "Bitumen Sprayer AE-10000",
      desc: "10 Ton Capacity",
      url: "/bitumen-sprayer/ae-10000",
    },
    {
      img:"/images/bitumen-sprayer/newreplacedsix.webp",
      title: "Bitumen Sprayer AE-12000",
      desc: "12 Ton Capacity",
      url: "/bitumen-sprayer/ae-12000",
    },
    {
      img: "/images/bitumen-sprayer/newreplacedsixteen.webp",
      title: "Bitumen Sprayer (With Hydraulic Hopper)",
      desc: "6 T / 8 T / 10 T Options",
      url: "/bitumen-sprayer/ae-12000",
    },
  ];

  const components = [
    {
      title: "Spray Bar & Nozzles",
      desc: (
        <ul>
          <li>
            • Fold-out spray bar with individual nozzle control for accurate
            coverage.
          </li>
          <li>• Quick-release design simplifies cleaning and maintenance.</li>
        </ul>
      ),
    },
    {
      title: "Bitumen Tank & Heater",
      desc: (
        <ul>
          <li>• 4-ton insulated tank with internal heating coil system.</li>
          <li>• Ensures steady bitumen temperature and prevents clogging.</li>
        </ul>
      ),
    },
    {
      title: "Engine & Pneumatic",
      desc: (
        <ul>
          <li>
            • 25 HP Kirloskar air-cooled diesel engine powers the pump and
            heating unit.
          </li>
          <li>
            • Pneumatic controls help in easy operations and are used in
            cleaning nozzles and spray bars.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Metering",
      desc: (
        <ul>
          <li>
            • Simple operator panel with pressure gauge and flow controls.
          </li>
          <li>• Manual override for pump operation.</li>
        </ul>
      ),
    },
    {
      title: "Hand-Gun and Cleaning Kit",
      desc: (
        <ul>
          <li>• Hand-spray gun for precision spot repairs and edges.</li>
          <li>• Cleaning system for quick flush and nozzle maintenance.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AE-4000 | 4 Ton Bitumen Sprayer | Foldable Bar | Atlas India</title>
        <meta name="description" content="AE-4000 — 4 ton bitumen sprayer, foldable spray bar, mounts on any truck chassis, 25 HP Kirloskar engine. For patch work and road contracts. Get price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/Cwd80QFRSzI"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-sprayer/ae-4000"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-sprayer/newreplacedeleven.webp"
        videoUrl="https://www.youtube.com/embed/Cwd80QFRSzI"
        title={"AE-4000: Efficient Bitumen Spraying for Small Road Projects"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for accuracy and mobility"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose AE-4000"
        subtitle="AE-4000 is purpose-built for small-scale road maintenance and rural infrastructure projects where precision and speed matter most. (compulsory use in highways & national highways)"
        features={featuresGridData}
      />
      <Productfaq
        title={"Components Breakdown"}
        para={
          "Atlas’s Bitumen Sprayer shares proven distributor design with Atlas’s sprayer range, engineered for long life and simple field maintenance."
        }
        components={components}
        img = "/images/bitumen-sprayer/newreplaced-21.webp"
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      />
      <ContactForm page={product.title} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
