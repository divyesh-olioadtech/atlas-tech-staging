// menuData.js

export const menuData = [
  {
    name: "ASPHALT",
    link: "/asphalt-plants",
    subMenu: [
      {
        label: "PLANTS",
        items: [
          {
            name: "Stationary Asphalt Batch Plants (ABP)",
            link: "/asphalt-plants/stationary-asphalt-batching-plant",
          },
          {
            name: "Mobile Asphalt Batch Plants (MABP)",
            link: "/asphalt-plants/mobile-asphalt-batching-plant",
          },
          {
            name: "Double Drum Asphalt Plant",
            link: "/asphalt-plants/double-drum-asphalt-plant",
          },
          {
            name: "Counter Flow Asphalt Plant",
            link: "/asphalt-plants/counter-flow-asphalt-plant",
          },
          {
            name: "Asphalt Drum Mix Plant",
            link: "/asphalt-plants/asphalt-drum-mix-plant",
          },
          {
            name: "Mobile Asphalt Drum Mix Plant",
            link: "/asphalt-plants/mobile-asphalt-drum-mix-plant",
          },
        ],
      },
      {
        label: "MACHINES",
        items: [
          {
            name: "Bitumen Decanter",
            link: "/bitumen-decanter",
          },
          {
            name: "Bitumen Sprayer",
            link: "/bitumen-sprayer",
          },
          {
            name: "Mini Bitumen Sprayer",
            link: "/mini-bitumen-sprayer",
          },
          { name: "Wet Mix Plant", link: "/wet-mix-plant" },
          { name: "Mastic cooker", link: "/mastic-cooker" },
        ],
      },
      // {
      //   label: "SPARE PARTS",
      //   items: [{ name: "View Spare Parts (coming soon)", link: "" }],
      // },
      // {
      //   label: "CORE COMPONENTS",
      //   items: [{ name: "View Core Components (coming soon)", link: "" }],
      // },
    ],
  },
  {
    name: "CONCRETE",
    link: "/concrete-plants",
    subMenu: [
      {
        label: "PLANTS",
        items: [
          {
            name: "Stationary Concrete Batching Plants",
            link: "/concrete-plants/stationary-concrete-batching-plant",
            titleColor: "text-white",
            titleHoverColor: "text-white",
            description:
              "The gold standard for high-capacity production, our stationary plants ensure precise batching and mixing for large-scale projects like airports, dams, and highways.",
            image: "/images/ascb/ascb.JPG",
          },
          {
            name: "Mobile Concrete Batching Plants",
            link: "/concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer",
            titleColor: "text-[#1A1D2D]",
            titleHoverColor: "text-white",
            description:
              "Compact, portable, and quick to set up, our mobile plants are ideal for remote locations and projects requiring frequent site shifts.",
            image: "/images/acmp/Mobile-Concrete-batching-plant.png",
          },
          {
            name: "Mini Concrete Batching Plant",
            link: "/concrete-plants/mini-concrete-batching-plant",
            titleColor: "text-white",
            titleHoverColor: "text-white",
            description:
              "Perfect for small-scale projects (requiring a capacity of 10 to 25 m³/hr), these plants are a reliable and affordable choice for rural roads and building foundations.",
            image: "/images/acmp/Mini Concrete plant.png",
          },
          {
            name: "Reversible Mixer Concrete Batching Plant",
            link: "/concrete-plants/reversible-mixer-concrete-plant",
            titleColor: "text-[#1A1D2D]",
            titleHoverColor: "text-white",
            description:
              "Designed for simplicity and cost-effectiveness, these plants are perfect for projects where mobility and ease of operation are key.",
            image:
              "/images/acmp/PORTABLE CONCRETE BATCH MIX PLANT WITH REVERSIBLE MIXER.png",
          },
          // {
          //   name: "Planetary Mixer Concrete Plants",
          //   link: "/concrete-plants/stationary-concrete-batching-plant-planetary-mixer",
          //   titleColor: "text-white",
          //   titleHoverColor: "text-white",
          //   description:
          //     "Engineered for demanding applications, these plants deliver superior mixing quality for specialty concrete like SCC, fiber-reinforced mixes, and architectural finishes.",
          //   image: "/images/ascb/pan.JPG",
          // },
          {
            name: "Stationary Concrete Batching Plants – Pan Mixer",
            link: "/concrete-plants/stationary-concrete-batching-plant-pan-mixer",
            titleColor: "text-[#1A1D2D]",
            titleHoverColor: "text-white",
            description:
              "A cost-effective solution for standard concrete mixes, these plants are ideal for everyday construction needs like pavements and small RMC operations.",
            image: "/images/acmp/pan-mixer.jpg",
          },
        ],
      },
      {
        label: "MACHINES",
        items: [
          {
            name: "Concrete Mixers (10/7)",
            link: "/concrete-mixer",
          },
          {
            name: "Concrete Pumps",
            link: "/concrete-pump",
          },
          {
            name: "Kerb Cutting Machines",
            link: "/kerb-cutting-machine",
          },
        ],
      },
      // {
      //   label: "SPARE PARTS",
      //   items: [{ name: "View Spare Parts", link: "#" }],
      // },
      // {
      //   label: "CORE COMPONENTS",
      //   items: [{ name: "View Core Components", link: "#" }],
      // },
    ],
  },
  {
    name: "OTHER PRODUCTS",
    link: "/other-products",
    subMenu: [
      {
        label: "MACHINES",
        items: [
          {
            name: "Hydraulic Brooms / Road Sweepers",
            link: "/other-products/hydraulic-broomer",
          },
          // {
          //   name: "Groove / Curb Cutting & Related Tools",
          //   link: "/other-products/groove-cutter",
          // },
          {
            name: "Vacuum Dewatering Systems",
            link: "/other-products/vacuum-dewatering-systems",
          },
          {
            name: "Kerb / Curb Laying Machines",
            link: "/other-products/kerb-laying-machine",
          },
        ],
      },
    ],
  },
  // {
  //   name: "KNOWLEDGE",
  //   link: "/blog",
  //   subMenu: [
  //     // {
  //     //   label: "PLANTS",
  //     //   items: [{ name: "Service Plant 1", link: "#" }],
  //     // },
  //     // {
  //     //   label: "MACHINES",
  //     //   items: [{ name: "Service Machine 1", link: "#" }],
  //     // },
  //     // {
  //     //   label: "SPARE PARTS",
  //     //   items: [{ name: "View Spare Parts", link: "#" }],
  //     // },
  //     // {
  //     //   label: "CORE COMPONENTS",
  //     //   items: [{ name: "View Core Components", link: "#" }],
  //     // },
  //   ],
  // },
  {name: "CASE STUDIES",
        link: "/case-studies",
        subMenu: [],
      },
  {
    name: "ABOUT US",
    link: "/about",
    subMenu: [],
  },
];

export const bottomLinks = [
  { label: "About Us", link: "/about" },
  { label: "Blogs", link: "/blog" },
  { label: "Case Studies", link: "/case-studies" },
];
