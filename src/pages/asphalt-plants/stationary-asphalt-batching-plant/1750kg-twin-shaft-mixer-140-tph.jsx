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
    title: "ABP 140 Stationary Asphalt Batch Plan",
    subtitle: "140 TPH Production | 1750kg Twin Shaft Mixer | RAP & SMA Ready",
    description: [
      "The ABP Series 140 is a stationary, fully automatic asphalt batching plant designed for high-volume production. With a rated output of 140 tons per hour, a 1750 kg twin-shaft mixer, and advanced PLC-based control systems, it ensures a consistent quality mix for highways, airports, and large-scale infrastructure projects.",
      "Engineered for durability and efficiency, the ABP 140 features a modular design for easier transport, quick installation, and simplified servicing.",
    ],
    features: ["High Capacity", "Precision", "Durability"],
    // price: "1,85,00,000",
    images: [
      "/images/sabp/abp-140-6.jpg",
      "/images/sabp/abp-140-1.jpg",
      "/images/sabp/abp-140-2.jpg",
      "/images/sabp/abp-140-3.jpg",
      "/images/sabp/abp-140-4.jpg",
      "/images/sabp/abp-140-5.jpg",
    ],
  };

  const faqData = [
    {
      title: "What is the production capacity of the ABP 140?",
      content: (
        <p>
          The ABP 140 produces up to <strong>140 TPH</strong> with a batch size
          of <strong>1750 kg</strong> and{" "}
          <strong>80 mixing cycles per hour</strong>, assuming 3% aggregate
          moisture and 150°C output temperature.
        </p>
      ),
    },
    {
      title: "Does the ABP 140 support RAP usage?",
      content: (
        <p>
          Yes, it supports up to <strong>40% cold RAP</strong> and{" "}
          <strong>60% hot RAP</strong> with the optional HRC system.
        </p>
      ),
    },
    {
      title: "What makes the ABP 140’s mixer special?",
      content: (
        <p>
          The twin-shaft pugmill mixer handles{" "}
          <strong>1750 kg per batch</strong>, with{" "}
          <strong>wear-resistant liners</strong> and specially designed arms for
          homogenous mixing.
        </p>
      ),
    },
    {
      title: "How does the dust collection system perform?",
      content: (
        <p>
          The baghouse filter uses <strong>252 bags</strong> with a{" "}
          <strong>330 m² filtration area</strong>, ensuring emissions ≤{" "}
          <strong>0.1 g/m³</strong>.
        </p>
      ),
    },
    {
      title: "Can the ABP 140 produce Stone Mastic Asphalt (SMA)?",
      content: (
        <p>
          Yes, with optional upgrades including a{" "}
          <strong>dedicated SMA spray bar</strong>,{" "}
          <strong>additional filler silo</strong>, and an{" "}
          <strong>extended mixing time</strong> setting.
        </p>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Volume Production",
      desc: (
        <span>
          <strong>140 TPH output</strong> with{" "}
          <strong>1750 kg batch size</strong>, achieving up to{" "}
          <strong>80 cycles per hour</strong>
        </span>
      ),
      image: "/images/sabp/abp-140-6.jpg",
    },
    {
      title: "Precision Mixing",
      desc: (
        <span>
          <strong>Twin-shaft pugmill mixer</strong> with{" "}
          <strong>replaceable wear liners</strong>
          ensures uniform and homogenous mixing
        </span>
      ),
      image: "/images/sabp/abp-140-1.jpg",
    },
    {
      title: "Efficient Dust Control",
      desc: (
        <span>
          <strong>Reverse air-flow baghouse filter</strong> with{" "}
          <strong>330 m² filter area</strong>
          and <strong>252 filter bags</strong> keeps emissions ≤0.1 g/m³
        </span>
      ),
      image: "/images/sabp/abp-140-2.jpg",
    },
    {
      title: "Automated Controls",
      desc: (
        <span>
          <strong>PLC-based system</strong> with manual override, free-fall
          compensation, and storage of <strong>50+ mix designs</strong>
        </span>
      ),
      image: "/images/sabp/abp-140-3.jpg",
    },
    {
      title: "Sustainable Operation",
      desc: (
        <span>
          Supports up to <strong>40% cold RAP</strong> and{" "}
          <strong>60% hot RAP</strong>
          with HRC system; optional <strong>SMA</strong> and{" "}
          <strong>foam bitumen</strong> production
        </span>
      ),
      image: "/images/sabp/abp-140-4.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Reduced Transport Costs",
      desc: (
        <span>
          <strong>Modular, container-friendly design</strong> for simplified
          transport and setup
        </span>
      ),
      icon: "/images/comman/logo/star.png",
    },
    {
      title: "Energy-Efficient Drying",
      desc: (
        <span>
          <strong>Counterflow dryer drum</strong> (1.82 m × 7.0 m) with
          optimized flights and <strong>8.5 MW modulating burner</strong> for
          consistent aggregate heating
        </span>
      ),
      icon: "/images/comman/logo/rapid.png",
    },
    {
      title: "Accurate Weighing",
      desc: (
        <span>
          Aggregate hopper: <strong>2600 kg</strong>, Bitumen:{" "}
          <strong>180 kg</strong>, Filler: <strong>225 kg</strong> — all
          load-cell supported for dosing precision
        </span>
      ),
      icon: "/images/comman/logo/engineering.png",
    },
    {
      title: "Reliable Operation",
      desc: (
        <span>
          <strong>Heavy-duty construction</strong> and{" "}
          <strong>wear-resistant parts</strong>
          reduce downtime and extend service life
        </span>
      ),
      icon: "/images/comman/logo/eco.png",
    },
    {
      title: "RAP Integration",
      desc: (
        <span>
          <strong>Cold and hot recycling systems</strong> enable cost savings
          and sustainable asphalt production
        </span>
      ),
      icon: "/images/comman/logo/profit&roi.png",
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
    // {
    //   img: "/images/comman/slider.png",
    //   title: "ABP 140",
    //   desc: "1750 Kg | Twin Shaft | 140 TPH",
    //   url: "/asphalt-plants/stationary-asphalt-batching-plant/1750kg-twin-shaft-mixer-140-tph",
    //   img: "/images/sabp/abp-140-1.jpg",
    // },
    {
      // img: "/images/comman/slider.png",
      title: "ABP 160",
      desc: "2000 Kg | Twin Shaft | 160 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2000kg-twin-shaft-mixer-160-tph",
      img: "/images/sabp/abponesixty-newfour.jpeg",
    },
    {
      // img: "/images/comman/slider.png",
      title: "ABP 180",
      desc: "2250 Kg | Twin Shaft | 180 TPH",
      url: "/asphalt-plants/stationary-asphalt-batching-plant/2250kg-twin-shaft-mixer-180-tph",
      img: "/images/sabp/abp-180-5.JPG",
    },
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
            <span className="font-bold">4 bins, 10 m³ each</span> (40 m³ total)
          </li>
          <li>
            <span className="font-bold">Anti-bridging design</span> with
            frequency-controlled drives
          </li>
        </ul>
      ),
    },
    {
      title: "Vibrating Screen & Charging Conveyor",
      desc: (
        <ul>
          <li>
            <span className="font-bold">4-deck vibrating screen</span>, 160 TPH
            capacity
          </li>
          <li>
            <span className="font-bold">Oversized material removal</span> and
            quick-change sieves
          </li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Counterflow design</span>, 1.82 m × 7.0
            m
          </li>
          <li>
            Supported by <span className="font-bold">trunnion rollers</span>,
            max output temperature: <span className="font-bold">150°C</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Multi-Fuel Burner System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">8.5 MW modulating burner</span>{" "}
            (diesel/LDO standard)
          </li>
          <li>
            Optional <span className="font-bold">FO/gas/CNG compatibility</span>
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
            conveyor fines return
          </li>
        </ul>
      ),
    },
    {
      title: "Advanced Bag Filter Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">252 bags, 330 m² filter area</span>
          </li>
          <li>
            <span className="font-bold">Reverse-air cleaning</span>; emissions
            ≤0.1 g/m³
          </li>
        </ul>
      ),
    },
    {
      title: "Bitumen Storage & Heating",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Two insulated tanks</span>, 30,000
            liters each
          </li>
          <li>
            <span className="font-bold">Thermic oil coils</span> and jacketed
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
            <span className="font-bold">Vertical tanks</span>, up to 18,000
            liters
          </li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Elevator",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Enclosed bucket design</span>, 170 TPH
            capacity
          </li>
        </ul>
      ),
    },
    {
      title: "Mineral Filler Delivery System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Standard:</span> 3T hopper with screw
            conveyor
          </li>
          <li>
            <span className="font-bold">Optional:</span> high-volume silo &
            elevator system
          </li>
        </ul>
      ),
    },
    {
      title: "Multi-Deck Vibrating Screen",
      desc: (
        <ul>
          <li>
            <span className="font-bold">4-deck design</span>, duplex spring
            absorbers
          </li>
          <li>
            <span className="font-bold">Circular motion</span> reduces clogging
          </li>
        </ul>
      ),
    },
    {
      title: "Hot Aggregate Storage Bins",
      desc: (
        <ul>
          <li>
            <span className="font-bold">4 compartments</span>, 12 m³ total
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
            <span className="font-bold">1750 kg per batch capacity</span>
          </li>
          <li>
            <span className="font-bold">Wear-resistant liners</span> and wide
            air-operated discharge gate
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing Hoppers",
      desc: (
        <ul>
          <li>
            Aggregate: <span className="font-bold">2600 kg</span>
          </li>
          <li>
            Bitumen: <span className="font-bold">180 kg</span>
          </li>
          <li>
            Filler: <span className="font-bold">225 kg</span>
          </li>
          <li>
            All with <span className="font-bold">dedicated load cells</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Control Panel",
      desc: (
        <ul>
          <li>
            <span className="font-bold">PLC-based, automatic sequencing</span>{" "}
            with manual override
          </li>
          <li>
            <span className="font-bold">Mix design storage</span> (50+), alarms,
            and real-time monitoring
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ABP 140 | 140 TPH | 1750kg Mixer | RAP Ready | Atlas India</title>
        <meta name="description" content="ABP 140 — 140 TPH, 1750kg twin-shaft mixer, baghouse filter, RAP & SMA capability, PLC/SCADA automation. For national highways. Get specs from Atlas." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/HgO96dXbMDs"
        videoThumbnail="/images/sabp/abp-140-6.jpg"
        pageUrl="/asphalt-plants/stationary-asphalt-batching-plant/1750kg-twin-shaft-mixer-140-tph"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/sabp/abp-140-6.jpg"
        videoUrl="https://www.youtube.com/embed/HgO96dXbMDs"
        title={"See the ABP (140) Stationary Plant in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what sets the ABP Series (140) apart in the world of asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="The Efficiency Excellence"
        subtitle="Why is the ABP (140) the ultimate choice for large-scale asphalt production?"
        features={featuresGridData}
      />
      <Productfaq
        title={"Precision-Engineered Components"}
        para={
          "Each component of the Stationary Asphalt Batch Plants (ABP) is designed for maximum efficiency and reliability"
        }
        components={components}
        img="/images/sabp/1750kg-component.webp"
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      />
      <ContactForm page={"ABP (140) Stationary Asphalt Batch Plant"} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
