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
import ProductSchema from "../../../../components/schema/ProductSchema";
export default function ABP80() {
  const product = {
    title: "ABP 180 Stationary Asphalt Batch Plant",
    subtitle: "180 TPH Production | 2250kg Twin Shaft Mixer | RAP & SMA Ready",
    description: [
      "The ABP 180 is a stationary, fully automatic asphalt batching plant designed for high-capacity production. With its 180 tons per hour rated capacity, a 2250 kg twin-shaft mixer, and PLC-based automated controls, it delivers consistent asphalt mix for highways, expressways, airports, and large-scale infrastructure projects.",
      "Engineered with modular construction and durable wear parts, the ABP 180 offers efficiency, reliability, and ease of maintenance for long-term operation.",
    ],
    features: ["High Capacity", "Precision", "Efficiency"],
    // price: "2,85,00,000",
    images: [
      // "/images/sabp/abp-180-1.JPG",
      // "/images/sabp/abp-180-2.JPG",
      "/images/sabp/third-product-image-abp180.webp",
      "/images/sabp/four-product-image-abp180-new.webp",
      "/images/sabp/abp-180-5.JPG",
      "/images/sabp/abp-180-6.JPG",
    ],
  };

  const faqData = [
    {
      title: "What is the production capacity of the ABP 180?",
      content: (
        <>
          <p>
            The ABP 180 produces up to <strong>180 TPH</strong> with a{" "}
            <strong>2250 kg batch size</strong> and{" "}
            <strong>80 mixing cycles per hour</strong>, based on 3% aggregate
            moisture and 150°C output.
          </p>
        </>
      ),
    },
    {
      title: "Can the ABP 180 use RAP?",
      content: (
        <>
          <p>
            Yes, it supports up to <strong>40% cold RAP</strong> and{" "}
            <strong>60% hot RAP</strong> with the optional HRC system.
          </p>
        </>
      ),
    },
    {
      title: "What makes the ABP 180’s mixer reliable?",
      content: (
        <>
          <p>
            It delivers <strong>2250 kg batch capacity</strong>, with{" "}
            <strong>wear-resistant spiral liners</strong>, specially designed
            arms, and a wide air-operated discharge gate.
          </p>
        </>
      ),
    },
    {
      title: "How does the dust collection system perform?",
      content: (
        <>
          <p>
            The baghouse filter has <strong>384 Nomex bags</strong> with{" "}
            <strong>510 m² filtration area</strong>, keeping emissions ≤0.1
            g/m³.
          </p>
        </>
      ),
    },
    {
      title: "Can the ABP 180 produce Stone Mastic Asphalt (SMA)?",
      content: (
        <>
          <p>
            Yes, with optional upgrades including an{" "}
            <strong>SMA-specific spray bar</strong>, additional filler silo, and
            extended mixing time.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Volume Production",
      desc: (
        <span>
          <strong>180 TPH</strong> rated output with{" "}
          <strong>2250 kg batch size</strong>, supporting up to{" "}
          <strong>80 mixing cycles per hour</strong>
        </span>
      ),
      image: "/images/sabp/abp-180-1.JPG",
    },
    {
      title: "Reliable Mixing",
      desc: (
        <span>
          <strong>Twin-shaft pugmill mixer</strong> with{" "}
          <strong>wear-resistant liners</strong> and{" "}
          <strong>specially designed arms</strong> for homogenous mixing
        </span>
      ),
      image: "/images/sabp/abp-180-2.JPG",
    },
    {
      title: "Advanced Dust Control",
      desc: (
        <span>
          <strong>Baghouse filter</strong> with{" "}
          <strong>510 m² filtration area</strong> and{" "}
          <strong>384 Nomex filter bags</strong> keeps emissions ≤0.1 g/m³
        </span>
      ),
      image: "/images/sabp/abp-180-3.JPG",
    },
    {
      title: "Automated Controls",
      desc: (
        <span>
          <strong>PLC-based control system</strong> with{" "}
          <strong>manual override</strong>,{" "}
          <strong>free-fall compensation</strong>, <strong>alarms</strong>, and
          storage of <strong>50+ mix designs</strong>
        </span>
      ),
      image: "/images/sabp/abp-180-4.JPG",
    },
    {
      title: "Sustainable Operation",
      desc: (
        <span>
          Supports up to <strong>40% cold RAP</strong> and{" "}
          <strong>60% hot RAP</strong> with <strong>HRC system</strong>; SMA and
          foam bitumen production possible with optional accessories
        </span>
      ),
      image: "/images/sabp/abp-180-5.JPG",
    },
  ];

  const featuresGridData = [
    {
      title: "Modular Transport & Setup",
      desc: (
        <span>
          <strong>Container-friendly design</strong> simplifies logistics and
          reduces installation time
        </span>
      ),
      icon: "/images/comman/logo/star.png", // Star represents excellence and long-standing reputation
    },
    {
      title: "Efficient Drying",
      desc: (
        <span>
          <strong>Counterflow dryer drum</strong> (2.1 m × 8.0 m) with optimized
          flights and <strong>14 MW air-atomized burner</strong> for high
          thermal efficiency
        </span>
      ),
      icon: "/images/comman/logo/globe.png", // Globe represents worldwide coverage
    },
    {
      title: "Accurate Weighing",
      desc: (
        <span>
          <strong>Aggregate:</strong> 3700 kg, <strong>Bitumen:</strong> 270 kg,{" "}
          <strong>Filler:</strong> 225 kg — all load-cell based for high
          precision
        </span>
      ),
      icon: "/images/comman/logo/custom.png", // Custom represents personalized solutions
    },
    {
      title: "Durable & Reliable",
      desc: (
        <span>
          <strong>Heavy-duty chassis</strong>, wear-resistant components, and
          centralized lubrication for reduced downtime
        </span>
      ),
      icon: "/images/comman/logo/recycle.png", // Recycle represents recycling and sustainability
    },
    {
      title: "RAP Integration",
      desc: (
        <span>
          Cold and hot recycling systems allow{" "}
          <strong>sustainable, cost-efficient asphalt production</strong>
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png", // Profit&ROI directly represents return on investment
    },
  ];

  const products = [
    {
      img: "/images/sabp/abp_80_4.JPG",
      title: "ABP 80",
      desc: "1000 Kg | Twin Shaft | 60-80 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/abp-80-mixer-1000kg-twin-shaft-mixer-60-80-tph",
    },
    {
      img: "/images/sabp/abp_80_1.JPG",
      title: "ABP 100",
      desc: "1250 Kg | Twin Shaft | 80-100 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1250kg-twin-shaft-mixer-80-100-tph",
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 120",
      desc: "1500 Kg | Twin Shaft | 120 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1500kg-twin-shaft-mixer-120-tph",
      img: "/images/sabp/abp-120-img-1.jpg",
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 140",
      desc: "1750 Kg | Twin Shaft | 140 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/1750kg-twin-shaft-mixer-140-tph",
      img: "/images/sabp/abp-140-1.jpg",
    },
  {
      // img: "/images/comman/slider.png",
      title: "ABP 160",
      desc: "2000 Kg | Twin Shaft | 160 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2000kg-twin-shaft-mixer-160-tph",
      img: "/images/sabp/abponesixty-newfour.jpeg",
    },
    // {
    //   // img: "/images/comman/slider.png",
    //   title: "ABP 180",
    //   desc: "2250 Kg | Twin Shaft | 180 TPH",
    //   url: "/asphalt-plants/stationary-asphalt-batching-plant/2250kg-twin-shaft-mixer-180-tph",
    //   img: "/images/sabp/abp-180-5.JPG",
    // },
    {
      img: "/images/comman/slider.png",
      title: "ABP 200",
      desc: "2500 Kg | Twin Shaft | 200 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2500kg-twin-shaft-mixer-200-tph",
      img: "/images/sabp/abp-200-1.JPG",
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 260",
      desc: "3000 Kg | Twin Shaft | 240-260 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/3000kg-twin-shaft-mixer-240-260-tph",
      img: "/images/sabp/abp-260-1.JPG",
    },
    {
      img: "/images/comman/slider.png",
      title: "ABP 320",
      desc: "5000 Kg | Twin Shaft | 240-260 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/5000kg-twin-shaft-mixer-240-260-tph",
      img: "/images/sabp/abp-320-1.jpg",
    },
  ];

  const components = [
    {
      title: "Cold Aggregate Feeder Bins",
      desc: (
        <ul>
          <li>
            <span className="font-bold">5 bins</span>, 10 m³ each (
            <span className="font-bold">50 m³ total</span>)
          </li>
          <li>
            <span className="font-bold">Anti-bridging design</span>,
            variable-speed feeders
          </li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Charging Conveyor",
      desc: (
        <ul>
          <li>
            <span className="font-bold">5-deck vibrating screen</span>,{" "}
            <span className="font-bold">180 TPH capacity</span>
          </li>
          <li>
            <span className="font-bold">Quick-change sieve system</span>,
            oversize rejection chute
          </li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Counterflow type</span>, 2.1 m × 8.0 m
          </li>
          <li>
            <span className="font-bold">Max output temperature:</span> 300°C
          </li>
        </ul>
      ),
    },
    {
      title: "Burner System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">
              14 MW air-atomized/modulating burner
            </span>{" "}
            (diesel/LDO standard)
          </li>
          <li>
            <span className="font-bold">Optional FO/gas/CNG compatibility</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Primary Dust Collector",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Cyclone separator</span> with screw
            conveyor return
          </li>
        </ul>
      ),
    },
    {
      title: "Advanced Bag Filter Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">384 Nomex bags</span>,{" "}
            <span className="font-bold">510 m² filter area</span>
          </li>
          <li>
            <span className="font-bold">Reverse-air pulse cleaning</span>; ≤0.1
            g/m³ emissions
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Two insulated tanks</span>, 50,000
            liters each
          </li>
          <li>
            <span className="font-bold">Thermic oil heating</span> with jacketed
            pipelines
          </li>
        </ul>
      ),
    },
    {
      title: "Fuel Storage Tank",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Vertical tank</span>, up to 24,000
            liters capacity
          </li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Elevator",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Enclosed bucket elevator</span>, 200 TPH
            capacity
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Standard:</span> 20 m³ filler silo with
            screw conveyor
          </li>
          <li>
            <span className="font-bold">Reclaim the filler screw</span> from the
            bag filter
          </li>
        </ul>
      ),
    },
    {
      title: "Multi-Deck Vibrating Screen",
      desc: (
        <ul>
          <li>
            <span className="font-bold">5-deck circular motion screen</span>
          </li>
          <li>
            <span className="font-bold">Duplex springs</span> reduce vibration
            transfer
          </li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Storage Bins",
      desc: (
        <ul>
          <li>
            <span className="font-bold">5 compartments</span>,{" "}
            <span className="font-bold">20 m³ total</span>
          </li>
          <li>
            <span className="font-bold">Pneumatic gates</span> and sampling
            devices
          </li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Mixing Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">2250 kg batch capacity</span>
          </li>
          <li>
            <span className="font-bold">Wear-resistant liners</span> and wide
            discharge gate
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing Hoppers",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Aggregate:</span> 3700 kg
          </li>
          <li>
            <span className="font-bold">Bitumen:</span> 270 kg
          </li>
          <li>
            <span className="font-bold">Filler:</span> 225 kg
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>
            <span className="font-bold">PLC-based sequencing</span> with
            touchscreen interface
          </li>
          <li>
            <span className="font-bold">Mix design storage:</span> 50+, alarms,
            and daily production data logging
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ABP 180 | 180 TPH | 2250kg Mixer | Atlas Technologies India</title>
        <meta name="description" content="ABP 180 — 180 TPH, 2250kg twin-shaft mixer, RAP up to 50%, SMA-capable, CPCB-compliant baghouse. For expressways and large road contracts. Get quote." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/qwipXw1MNKs"
        videoThumbnail="/images/sabp/abp-180-1.JPG"
        pageUrl="/asphalt-plants/stationary-asphalt-batching-plant/2250kg-twin-shaft-mixer-180-tph"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/sabp/abp-180-2.JPG"
        videoUrl="https://www.youtube.com/embed/qwipXw1MNKs"
        title={"See the ABP (180) Stationary Plant in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what makes the ABP Series (180) a leader in high-capacity asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="The Efficiency Excellence"
        subtitle="Discover why contractors prefer ABP (180) for asphalt production in the road and civil construction projects"
        features={featuresGridData}
      />
      <Productfaq
        title={"Precision-Engineered Components"}
        para={
          "Each component of the Stationary Asphalt Batch Plants (ABP) is designed for maximum efficiency and reliability       "
        }
        components={components}
        img ="/images/sabp/four-product-image-abp180-new.webp"
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
