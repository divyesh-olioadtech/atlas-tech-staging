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
    title: "AE-6000 Bitumen Sprayer",
    subtitle: "6 T | Spray Width: 2.4 m – 4.2 m | Engine: 25 HP",
    description: [
      "AE-6000 is a compact, truck-mounted bitumen pressure distributor designed for precise bitumen application in pothole repairs and small road patches, and also used during construction of national and state highways. Its 6-ton heated tank, adjustable spray bar (2.4–4.2 m), and dependable 25 HP Kirloskar engine deliver consistent spray rates and easy manoeuvrability for urban and remote repair crews as well as large-scale projects.",
      "Compact, accurate, and fuel-efficient, AE-6000 is ideal for municipal crews, road maintenance contractors, and utility teams who need a reliable sprayer that’s quick to mobilize and simple to operate.",
    ],
    features: ["Compact Design", "Precise Spraying", "Low Operating Cost"],
    images: [
      "/images/bitumen-sprayer/newreplacednine.webp",
      "/images/bitumen-sprayer/newreplacedone.webp",
      "/images/bitumen-sprayer/newreplacedseven.webp",
     "/images/bitumen-sprayer/newreplacedsix.webp",
      "/images/bitumen-sprayer/newreplacedsixteen.webp",
      "/images/bitumen-sprayer/newreplacedten.webp",
    ],
  };

  const faqData = [
    {
      title: "1. Is AE-6000 suitable for tight urban streets?",
      content: (
        <>
          <p>
            Yes. The compact footprint and adjustable spray width let operators
            work in narrow lanes and confined urban environments with precision.
          </p>
        </>
      ),
    },
    {
      title: "2. What maintenance does the engine need?",
      content: (
        <>
          <p>
            Routine diesel engine maintenance, oil changes, air filter
            servicing, and fuel system checks. Plus, regular cleaning of coils
            and the nozzle ensures reliable operation.
          </p>
        </>
      ),
    },
    {
      title: "3. Can the spray width be customized beyond 4.2 m?",
      content: (
        <>
          <p>
            Atlas offers extended-bar options and bespoke nozzle configurations;
            contact sales for project-specific requirements and mounting
            details.
          </p>
        </>
      ),
    },
    {
      title: "4. Does AE-6000 support hand spraying for potholes?",
      content: (
        <>
          <p>
            Yes. A hand-gun attachment is provided or available as an option for
            spot repairs, edges, and detailed work.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "Adjustable Spray Width (2.4–4.2 m)",
      desc: (
        <span>
          Fold-out spray bar supports narrow lane work and wider surface
          treatment with quick pneumatic or manual adjustment for accurate
          coverage.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-6000-1.jpeg",
    },
    {
      title: "Reliable 25 HP Kirloskar Engine",
      desc: (
        <span>
          Air-cooled twin-cylinder diesel delivers dependable power in hot and
          dusty jobsite conditions, with straightforward serviceability and low
          downtime.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-6000-2.jpeg",
    },
    {
      title: "6-Ton Heated Tank with Coil System",
      desc: (
        <span>
          Insulated tank and integrated heating coils maintain bitumen at
          sprayable temperature, ensuring even flow and excellent adhesion to
          paved surfaces.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-6000-3.jpeg",
    },
    {
      title: "Simple Controls & Low Maintenance",
      desc: (
        <span>
          Intuitive dashboard for flow and temperature control, quick-connect
          hoses, and accessible maintenance points reduce operator training and
          service time.
        </span>
      ),
      image: "/images/bitumen-sprayer/ae-6000-4.jpeg",
    },
  ];

  const featuresGridData = [
    {
      title: "Ideal for Rapid Patch Repairs",
      desc: (
        <span>
          With a 6-ton tank and variable spray width, AE-6000 ensures quick
          deployment for road patches and small stretches, improving daily
          productivity and reducing idle machine time.
        </span>
      ),
      icon: "/images/comman/logo/rapid.png", // use relevant icon
    },
    {
      title: "Consistent & Uniform Bitumen Application",
      desc: (
        <span>
          The calibrated spray bar maintains even flow across the full 2.4 m–4.2
          m width, minimizing wastage and guaranteeing a smooth, consistent coat
          every time.
        </span>
      ),
      icon: "/images/comman/logo/campus.png", // use relevant icon
    },
    {
      title: "Reliable Engine for Field Conditions",
      desc: (
        <span>
          The Kirloskar 25 HP air-cooled engine offers stable performance in
          hot, dusty sites while remaining easy to maintain with readily
          available spares.
        </span>
      ),
      icon: "/images/comman/logo/reliable.png", // use relevant icon
    },
    {
      title: "Economical Operation",
      desc: (
        <span>
          Optimized hydraulics and fuel-efficient heating reduce running costs,
          making AE-6000 one of the most cost-effective sprayers in its class.
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // use relevant icon
    },
    {
      title: "Atlas Support & Optional Add-ons",
      desc: (
        <span>
          Atlas provides local training, parts, and customization options such
          as hand-gun attachments, extended bars, or automatic spray control
          systems.
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // use relevant icon
    },
  ];

  const products = [
    {
      img: "/images/bitumen-sprayer/newreplacedeleven.webp",
      title: "Bitumen Sprayer AE-4000",
      desc: "4 Ton Capacity",
      url: "/bitumen-sprayer/ae-4000",
    },
    //     {
    //       img: "/images/bitumen-sprayer/ae-6000-1.jpeg",
    //       title: "Bitumen Sprayer AE-6000",
    //       desc: "6 Ton Capacity",
    //       url: "/bitumen-sprayer/ae-6000",
    //     },
    {
      img: "/images/bitumen-sprayer/newreplacedfifteen.webp",
      title: "Bitumen Sprayer AE-8000",
      desc: "8 Ton Capacity",
      url: "/bitumen-sprayer/ae-8000",
    },
    {
      img:  "/images/bitumen-sprayer/newreplacedfive.webp",
      title: "Bitumen Sprayer AE-10000",
      desc: "10 Ton Capacity",
      url: "/bitumen-sprayer/ae-10000",
    },
    {
      img: "/images/bitumen-sprayer/newreplacedfour.webp",
      title: "Bitumen Sprayer AE-12000",
      desc: "12 Ton Capacity",
      url: "/bitumen-sprayer/ae-12000",
    },
    {
      img: "/images/bitumen-sprayer/newreplacedfourteen.webp",
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
            • Fold-out bar configurable from 2.4 m to 4.2 m with individual
            nozzle assemblies for even coverage.
          </li>
          <li>
            • Quick-release nozzles and removable tips simplify cleaning and
            replacement.
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Tank & Heating System",
      desc: (
        <ul>
          <li>
            • 6-ton insulated tank with internal heating coils to keep bitumen
            fluid and spray-ready.
          </li>
          <li>
            • Access ports and a level gauge for safe filling and sampling.
          </li>
        </ul>
      ),
    },
    {
      title: "Drive Engine & Hydraulic Pump",
      desc: (
        <ul>
          <li>
            • 25 HP Kirloskar air-cooled twin-cylinder diesel engine powers the
            pump and heating system.
          </li>
          <li>
            • Robust pump delivers steady pressure and adjustable flow for
            different coating rates.
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel & Metering",
      desc: (
        <ul>
          <li>
            • Simple dashboard with spray-rate meter, temperature display, and
            flow adjustment controls.
          </li>
          <li>• Manual override for pump operation.</li>
        </ul>
      ),
    },
    {
      title: "Handgun & Cleaning Kit",
      desc: (
        <ul>
          <li>
            • Handgun attachment for detail work and pothole filling with
            accurate spot control.
          </li>
          <li>
            • Quick-connect hoses and cleaning ports for rapid post-use
            flushing.
          </li>
        </ul>
      ),
    },
    {
      title: "Mounting & Chassis Interface",
      desc: (
        <ul>
          <li>
            • Designed for truck or trailer mounting with standard chassis
            brackets; optional bespoke mounts available.
          </li>
          <li>
            • Electrical and hydraulic interfaces are located for easy
            connection and service access.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AE-6000 | 6 Ton Bitumen Sprayer | Truck-Mounted | Atlas India</title>
        <meta name="description" content="AE-6000 — 6 ton thermally insulated bitumen sprayer, foldable spray bar up to 4.5m, 25 HP Kirloskar engine. Mounts on any truck chassis. Get specs and price." />
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
      videoUrl="https://www.youtube.com/embed/AhBkEv9qE50"
      videoThumbnail="/images/admp/mdm-35-1.jpeg"
        pageUrl="/bitumen-sprayer/ae-6000"
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/bitumen-sprayer/newreplacednine.webp"
        videoUrl="https://www.youtube.com/embed/AhBkEv9qE50"
        title={"AE-6000: Precise Bitumen Spraying for Patch & Repair Work"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Engineered for Accuracy and Operator Ease"
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Why Choose AE-6000"
        subtitle="The AE-6000 is designed for maintenance teams that need efficient, accurate bitumen spraying with minimal setup time and dependable results on patch and repair projects."
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
