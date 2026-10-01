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
    title: "ABP 120 Stationary Asphalt Batch Plant",
    subtitle: "120 TPH Production | 1600 kg Twin-Shaft Mixer | RAP & SMA Ready",
    description: [
      "The ABP 120 is a stationary, fully automatic asphalt batching plant designed for high-volume projects. With its 120 tons per hour output, robust twin-shaft mixer, and advanced PLC-based controls, it ensures consistent asphalt quality for highways, airports, and large-scale infrastructure projects.",
      "The ABP 120 is designed for productivity and long service life, featuring a modular design that enables fast setup, reliable operation, and easy maintenance.",
    ],
    features: ["High Capacity", "Precision", "Durability"],
    // price: "1,65,00,000",
    images: [
      "/images/sabp/twinshaftmixercomponent-1500.webp",
      "/images/sabp/abp-120-img-2.jpg",
      "/images/sabp/abp-120-img-3.jpg",
      "/images/sabp/abp-120-img-4.jpg",
      "/images/sabp/abp-120-img-5.jpg",
      "/images/sabp/abp-120-img-6.jpg",
    ],
  };

  const faqData = [
    {
      title: "What is the production capacity of the ABP 120?",
      content: (
        <>
          <p>
            The ABP 120 produces up to <strong>120 TPH</strong> with a{" "}
            <strong>1600 kg batch size</strong> and{" "}
            <strong>80 mixing cycles per hour</strong>, assuming 3% moisture and
            150°C output temperature.
          </p>
        </>
      ),
    },
    {
      title: "Can the ABP 120 use RAP?",
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
      title: "What makes the ABP 120’s mixer unique?",
      content: (
        <>
          <p>
            It uses a <strong>twin-shaft pugmill mixer</strong> with{" "}
            <strong>wear-resistant liners</strong>, specially designed arms, and
            ensures <strong>homogenous mixing at 1600 kg batch capacity</strong>
            .
          </p>
        </>
      ),
    },
    {
      title: "How does the dust collection system perform?",
      content: (
        <>
          <p>
            The <strong>baghouse filter</strong> uses <strong>216 bags</strong>{" "}
            with <strong>300 m² filter area</strong>, keeping emissions ≤0.1
            g/m³.
          </p>
        </>
      ),
    },
    {
      title: "Can the ABP 120 produce Stone Mastic Asphalt (SMA)?",
      content: (
        <>
          <p>
            Yes, with optional modifications including a dedicated{" "}
            <strong>SMA bitumen spray bar</strong>,{" "}
            <strong>additional filler silo</strong>, and{" "}
            <strong>extended mixing time setting</strong>.
          </p>
        </>
      ),
    },
  ];

  const featureData = [
    {
      title: "High-Volume Production",
      desc: (
        <>
          <span className="font-bold">120 TPH</span> rated output with{" "}
          <span className="font-bold">1600 kg batch size</span>, achieving up to{" "}
          <span className="font-bold">80 cycles per hour</span>.
        </>
      ),
      image: "/images/sabp/abp-120-img-1.jpg",
    },
    {
      title: "Precision Mixing",
      desc: (
        <>
          <span className="font-bold">Twin-shaft pugmill mixer</span> with{" "}
          <span className="font-bold">wear-resistant liners</span> ensures
          uniform and homogenous mixing.
        </>
      ),
      image: "/images/sabp/abp-120-img-2.jpg",
    },
    {
      title: "Efficient Dust Control",
      desc: (
        <>
          <span className="font-bold">Baghouse filter</span> with{" "}
          <span className="font-bold">300 m² filtration area</span> and{" "}
          <span className="font-bold">216 bags</span> keeps emissions{" "}
          <span className="font-bold">≤0.1 g/m³</span>.
        </>
      ),
      image: "/images/sabp/abp-120-img-3.jpg",
    },
    {
      title: "Automated Control",
      desc: (
        <>
          <span className="font-bold">PLC-based system</span> with{" "}
          <span className="font-bold">manual override</span>,{" "}
          <span className="font-bold">free-fall compensation</span>, and storage
          of <span className="font-bold">50+ mix designs</span>.
        </>
      ),
      image: "/images/sabp/abp-120-img-4.jpg",
    },
    {
      title: "Sustainable Operation",
      desc: (
        <>
          Supports up to <span className="font-bold">40% cold RAP</span> and{" "}
          <span className="font-bold">60% hot RAP</span> with optional{" "}
          <span className="font-bold">HRC system</span>;{" "}
          <span className="font-bold">SMA</span> and{" "}
          <span className="font-bold">foam bitumen</span> configurations also
          available.
        </>
      ),
      image: "/images/sabp/abp-120-img-5.jpg",
    },
  ];

  const featuresGridData = [
    {
      title: "Reduced Transport Costs",
      desc: (
        <>
          <span className="font-bold">
            Modular container-friendly construction
          </span>{" "}
          reduces freight and installation effort.
        </>
      ),
      icon: "/images/comman/logo/money.png",
    },
    {
      title: "Energy-Efficient Drying",
      desc: (
        <>
          <span className="font-bold">Counterflow dryer drum</span> (1.82 m ×
          6.4 m) with{" "}
          <span className="font-bold">8.5 MW modulating burner</span> ensures
          consistent heating.
        </>
      ),
      icon: "/images/comman/logo/globe.png",
    },
    {
      title: "Accurate Weighing",
      desc: (
        <>
          <span className="font-bold">Aggregate hopper: 2600 kg</span>,{" "}
          <span className="font-bold">Bitumen: 180 kg</span>,{" "}
          <span className="font-bold">Filler: 225 kg</span> — all load-cell
          based for precise dosing.
        </>
      ),
      icon: "/images/comman/logo/custom.png",
    },
    {
      title: "Reliable Operation",
      desc: (
        <>
          <span className="font-bold">Wear-resistant parts</span> and{" "}
          <span className="font-bold">robust chassis</span> minimize downtime
          and extend service life.
        </>
      ),
      icon: "/images/comman/logo/eco.png",
    },
    {
      title: "RAP Integration",
      desc: (
        <>
          <span className="font-bold">Cold and hot recycling systems</span>{" "}
          enable sustainable production with significant cost savings.
        </>
      ),
      icon: "/images/comman/logo/money.png",
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
    // {
    //   img: "/images/comman/slider.png",
    //   title: "ABP 120",
    //   desc: "1500 Kg | Twin Shaft | 120 TPH",
    //   url: "/asphalt-plants/stationary-asphalt-batching-plant/1500kg-twin-shaft-mixer-120-tph",
    //   img: "/images/sabp/abp-120-1.jpg",
    // },
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
            <span className="font-bold">4 bins, 9 m³ each (36 m³ total)</span>
          </li>
          <li>
            <span className="font-bold">Anti-bridging design</span>,
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
            <span className="font-bold">4-deck vibrating screen</span> (130 TPH
            capacity)
          </li>
          <li>
            <span className="font-bold">Oversized removal</span> and easy screen
            replacement
          </li>
        </ul>
      ),
    },
    {
      title: "Drying Drum",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Counterflow drum</span>, 1.82 m × 6.4 m
          </li>
          <li>
            <span className="font-bold">Max output temperature: 300°C</span>
          </li>
          <li>
            <span className="font-bold">Trunnion and thrust rollers</span>{" "}
            support
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
            <span className="font-bold">216 bags, 300 m² filter area</span>
          </li>
          <li>
            <span className="font-bold">Reverse-air pulse cleaning</span> with
            ≤0.1 g/m³ emissions
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
            <span className="font-bold">
              Thermic oil coils and jacketed piping
            </span>
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
            <span className="font-bold">Enclosed bucket system</span>, 130 TPH
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
            <span className="font-bold">Quick-change panels</span> with duplex
            spring absorbers
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
            <span className="font-bold">4 compartments, 12 m³ total</span>
          </li>
          <li>
            <span className="font-bold">Pneumatic cut-off gates</span> and
            sampling devices
          </li>
        </ul>
      ),
    },
    {
      title: "Twin-Shaft Mixing Unit",
      desc: (
        <ul>
          <li>
            <span className="font-bold">1600 kg per batch</span>
          </li>
          <li>
            <span className="font-bold">Wide air-operated discharge gate</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Precision Weighing System",
      desc: (
        <ul>
          <li>
            <span className="font-bold">Aggregate:</span> 2600 kg
          </li>
          <li>
            <span className="font-bold">Bitumen:</span> 180 kg
          </li>
          <li>
            <span className="font-bold">Filler:</span> 225 kg
          </li>
          <li>
            <span className="font-bold">
              All load cells supported for accuracy
            </span>
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
            <span className="font-bold">Stores 50+ mix designs</span>
          </li>
          <li>
            <span className="font-bold">
              Real-time temperature monitoring & alarms
            </span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>ABP 120 | 120 TPH | 1600kg Mixer | 300m² Baghouse | Atlas</title>
        <meta name="description" content="ABP 120 — 120 TPH, 1600kg twin-shaft mixer, 300m² baghouse filter (≤0.1 g/m³), 40% cold RAP, 50+ mix designs stored. PLC automation standard. Get specs and quote." />
        
      </Head>
      <ProductSchema
        product={product}
        faqData={faqData}
        videoUrl="https://www.youtube.com/embed/HgO96dXbMDs"
        videoThumbnail="/images/sabp/abp-120-img-1.jpg"
        pageUrl="/asphalt-plants/stationary-asphalt-batching-plant/1500kg-twin-shaft-mixer-120-tph"
        includeProduct={false}
      />
      <ProductOverview {...product} />
      <Video
        thumbnail="/images/sabp/abp-120-img-1.jpg"
        videoUrl="https://www.youtube.com/embed/HgO96dXbMDs"
        title={"See the ABP (120) Stationary Plant in Action"}
        isYoutube={true}
      />
      <FeatureSlider
        sectionTitle="Key Features & Benefits"
        sectionDesc="Discover what makes the ABP Series (120) a leader in asphalt production."
        features={featureData}
      />
      ;
      <FeatureGrid
        title="Designed for Efficiency"
        subtitle="Delivering reliable asphalt production solutions to over 40 countries, here the reasons to choose Atlas ABP (120)"
        features={featuresGridData}
      />
      <Productfaq
        title={"Precision-Engineered Components"}
        para={
          "Each component of the ABP (120) is designed for maximum efficiency and reliability"
        }
        components={components}
        img="/images/sabp/twinshaftmixercomponent-1500.webp"
      />
      <ProductSlider2
        sectionTitle="Smart Design, Seamless Operation"
        sectionDesc="Browse our range of products designed for exceptional performance and reliability."
        cards={products}
      />
      <ContactForm page={"ABP (120) Stationary Asphalt Batch Plant"} />
      <FAQSection2 faqData={faqData} bg={"#E7F1E9"} />
    </>
  );
}
