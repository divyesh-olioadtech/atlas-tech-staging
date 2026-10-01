import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
const post = {
  title: "Concrete plant with: twin shaft v/s reversible mixer",
  slug: "concrete-plants-comparison",
  date: "2013-10-18",
  summary:
    "Atlas manufactures and exports mobile concrete mixers with capacity 10 m3/hr. to 60 m3/hr. These portable concrete plants are available in two different designs and the main differentiating factor is the mixing unit offered with the two different types of concrete making equipment.",
  seoTitle:
    "Concrete Plant with Twin Shaft vs Reversible Mixer | Atlas Industries",
  seoDescription:
    "Differences between twin-shaft and reversible mixers for optimal concrete production.",
  image: "/images/blogs/untitled-3.webp",
  content: (
    <>
      <p>
        Atlas manufactures and{" "}
        <Links href={"/portable-concrete-plants"}>
          {" "}
          exports mobile concrete mixers{" "}
        </Links>{" "}
        with capacity 10 m3/hr. to 60 m3/hr. These portable concrete plants are
        available in two different designs and the main differentiating factor
        is the mixing unit offered with the two different types of concrete
        making equipment.
      </p>
      <Image
        src="/images/blogs/untitled-3.webp"
        alt="batch-plant"
        width={500}
        height={500}
      />
      <p>
        <Links href={"/mobile-concrete-batching-plant"}>
          Mobile concrete batch plants{" "}
        </Links>{" "}
        with reversible drum mixers are available in the capacities: 10 cum/hr.;
        15 cum/hr.; 20 cum/hr. and 25 cum/hr.The mobile concrete plants with 20
        m3/hr.; 30 m3/hr.; 45 m3/hr. and 60 m3/hr. are offered with twin shaft
        mixer as their mixing device.
      </p>
      <p>
        Both the plants featured are batch mix plants and offer separate
        weighing for aggregates, cement, water and additives.
      </p>

      <h2>
        Atlas Concrete plant comparison: Twin shaft vs reversible drum mixer
      </h2>
      <p>
        Atlas is manufacturer and exporter of concrete plants. Here we will
        compare the 2 basic types of concrete plants on basis of their mixer
        types.
      </p>
      <p className="font-bold">
        {" "}
        Twin shaft concrete plants vs reversible drum mixers.
      </p>
      <p>
        If we talk about the cold feed devices, both the plants are with a 2 x 2
        bin feeder with two separate vibrators provided on two bins.
      </p>
      <Image
        src="/images/blogs/untitled-5.webp"
        alt="batch-plant"
        width={500}
        height={500}
      />
      <p className="font-bold">
        Loading of the aggregates is by loader in both the plants:
      </p>
      <p>
        Loading height in plant with reversible drum is a little lower compared
        to the other concrete plant.In the concrete plant with twin shaft mixer,
        there is a single conveyor which does the weighing of the aggregates and
        then transfers them to the mixing unit. In the mobile concrete batch mix
        plant, the aggregates are weighed in a conveyor and transferred to the
        mixing unit by another conveyor.
      </p>
      <p>
        The location of air compressor for the pneumatic functions is on the
        feeder chassis of both the plants. Water weighing is done in the water
        storage hopper and both the plants come with water pump to suck in water
        to the weighing hopper. The discharge of water in the plant with twin
        shaft mixer is by butterfly valve and by pump in the plant with
        reversible drum mixer.
      </p>

      <Image
        src="/images/blogs/untitled-31.webp"
        alt="batch-plant"
        width={500}
        height={500}
      />
      <p>
        Lubrication system for twin shaft mixer is by a grease pump manually and
        in the plant with reversible drum, there is a lubrication system for the
        mixing drum.HMI panel is inside a foldable cabin in concrete batch mix
        plant with twin shaft mixer and in the portable concrete batch plant,
        the HMI panel can be in a cabin
      </p>

      <p>
        It is possible to directly discharge concrete into a transit mixer or
        concrete pump. The approximate concrete discharge height is 3.7 meters
        in plant with twin shaft mixer. In the plant with reversible drum mixer,
        the approximate concrete discharge height is 1.9 meters.
      </p>
      <p>
        It is possible to directly discharge concrete into a transit mixer or
        concrete pump. The approximate concrete discharge height is 3.7 meters
        in plant with twin shaft mixer. In the plant with reversible drum mixer,
        the approximate concrete discharge height is 1.9 meters.
      </p>

      <p>
        <span className="font-bold">Concrete batch mixing plant</span> with twin
        shaft mixer is on a single axle, plant with reversible drum is on two
        axles.
      </p>

      <p className="font-bold">
        Comparison of concrete plants in form of a video
      </p>

      <div className="mb-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/J5R7jl77Vog"
            title="Concrete Batch Plant Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  ),
};

export default post;
