import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
const post = {
  title: "What is an asphalt plant?",
  slug: "what-is-an-asphalt-plantt",
  date: "2017-09-07",
  summary:
    "Asphalt plant is equipment that is designed to produce hot mix asphalt. It uses aggregates, sand, bitumen and filler material in specific proportions to produce HMA also known as asphalt concrete or black top. The main feature of an asphalt mixing plant is that it will heat aggregates and then mix them with bitumen and other adhesive substances to prepare hot mix asphalt which is a paving material. Aggregate here can be a single sized material or it can be combination of various materials of different sizes with a combination of fine and coarse particles with or without addition of a filler unit..",
  seoTitle: "What is an Asphalt Plant? | Atlas Industries",
  seoDescription:
    "An introduction to asphalt plants, their types, and applications in modern road construction.",
  image: "/images/blogs/asphalt-mixing-plant-layout-1.webp",
  content: (
    <>
      <p>
        Asphalt plant is equipment that is designed to produce{" "}
        <Links href={"/mobile-hot-asphalt-plant"}></Links> hot mix asphalt. It
        uses aggregates, sand, bitumen and filler material in specific
        proportions to produce HMA also known as asphalt concrete or black top.
        The main feature of an{" "}
        <Links href={"/asphalt-plants"}>asphalt mixing plant</Links> is that it
        will heat aggregates and then mix them with bitumen and other adhesive
        substances to prepare hot mix asphalt which is a paving material.
        Aggregate here can be a single sized material or it can be combination
        of various materials of different sizes with a combination of fine and
        coarse particles with or without addition of a filler unit.
      </p>
      <h2>Types of hot mix plants</h2>
      <p>
        There are{" "}
        <span className="font-bold">
          {" "}
          two basic types of hot mix plants available{" "}
        </span>{" "}
        in the market today batch mix plants and drum mix plants. If we talk
        about any plant it will fulfill the basic purpose of producing HMA. The
        key difference will be in the operation of each{" "}
        <Links href={"/blog/types-of-asphalt-plants/"}>
          type of asphalt plants.
        </Links>{" "}
        Depending on the choice of buyer the asphalt mixers can be stationary
        type or portable type.
      </p>

      <h3> 1. Batch Mix Plant</h3>
      <p>
        The asphalt concrete batch mix plant consists of a number of components.
      </p>
      <p>
        The first component is the cold aggregate feeder bins where the
        aggregates are stored/fed in separate components as per their sizes.
        There are auxiliary feeder belts below each bin and gathering conveyor
        that runs below all the bins. This conveyor will transfer all the
        aggregates to another inclined conveyor belt that will take all the
        materials into the drying drum. Before the materials are transferred to
        the inclined conveyor belt, they aggregates have to pass through
        vibrating screen so that oversize materials are removed.
      </p>
      <Image
        src="/images/blogs/asphalt-mixing-plant-layout-1.webp"
        alt="asphalt-mixing-plant-layout-1"
        width={500}
        height={500}
      />
      <p>
        The next component is the drying drum. It is fitted with a burner unit
        for moisture removal and heating of aggregates are carried out to
        achieve proper mixing temperature. These aggregates are them carried to
        the top of the tower unit by an elevator.
      </p>

      <p>
        <span className="font-bold">
          The tower unit consists of 3 main units:
        </span>{" "}
        vibrating screen on top then we have the hot bins and mixing unit is
        below the hot bins. As the aggregates are carried to the top of the
        tower unit, they are made to pass through the multi deck vibrating
        screen (usually four screens are there) so that aggregates are separated
        as per their sizes. After separation they are temporarily stored in
        different compartments called as hot bins. This section of hot bins is
        just below the screening unit. Hot bins will store the aggregates in
        individual bins and then release the same into the mixing unit below as
        per the weight set in the control panel. At the time when aggregates are
        weighed and released into the mixing unit, bitumen and optional mineral
        filler is also weighed and released into the mixing unit. After proper
        mixing, the mixture is released into waiting trucks of into the storage
        silo.
      </p>
      <p>
        For environmental protection, air pollution control devices are
        equipped. These devices in most of the cases are bag filter units. The
        fines are made to pass through the bags present in the bag filter and
        the dust is trapped by the bags. This dust collected can also be
        reintroduced into the aggregate elevator.
      </p>

      <h3>2. Drum Mix Asphalt Plant</h3>

      <p>
        The cold bins are the same in{" "}
        <Links href={"/asphalt-drum-mix-plant"}>asphalt drum mixers</Links> like
        in batching plants. The process here is also the same till the
        aggregates enters the drum unit by passing through the vibrating screen.
        The drum here serves two purposes – that of drying and mixing.
      </p>

      <Image
        src="/images/blogs/drum-mix-plant-operation-diagram-1.webp"
        alt="drum-mix-plant-operation-diagram-1"
        width={500}
        height={500}
      />

      <p>
        The first half of the drum is for heating the aggregates and in the
        second half mixing with bitumen and filler material takes place. Since
        this is a <span className="font-bold">continuous mixing plant,</span> a
        small sized hopper for temporary holding the HMA is provided. Bitumen is
        stored in separate tanks and it is added into the second part of the
        drum. For pollution control, wet scrubber or bag filters are provided
        with the asphalt plant. To get in touch with us call{" "}
        <Links href={"tel:+91 97238 10565"}>+91 97238 10565</Links>{" "}
        <span className="font-bold"> or write to </span>
        <Links href={"mailto:contact@atlasindustries.in"}>
          contact@atlasindustries.in.
        </Links>
      </p>
    </>
  ),
};

export default post;
