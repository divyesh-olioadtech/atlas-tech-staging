import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
const post = {
  title: "Asphalt Plant Process Flow",
  slug: "asphalt-plant-process-flow",
  date: "2017-02-13",
  summary:
    "The process flow of any asphalt plant will depend on the type of the plant. Right now we have different types of asphalt mixer available in the market. These mixers are build keeping in mind different customer types.",
  seoTitle: "Asphalt Plant Process Flow | Atlas Industries",
  seoDescription:
    "A visual guide to the asphalt production process, from aggregates to hot mix asphalt.",
  image: "/images/blogs/drum-mix-plant-operation-diagram-1.webp",
  content: (
    <>
      <p>
        The process flow of{" "}
        <Links href={"/asphalt-plants"}>any asphalt plant</Links> will depend on
        the type of the plant. Right now we have different types of asphalt
        mixer available in the market. These mixers are build keeping in mind
        different customer types.
      </p>
      <p>
        There are two major types / categories: batch type and continuous type.
      </p>
      <ul>
        <li>
          <span className="font-bold">Batch type:</span> With this design the
          production of hot mix will be done in batches of specific sizes.
        </li>
        <li>
          <span className="font-bold">Continuous type:</span> Here the
          production of HMA will be done in a continuous process.
        </li>
      </ul>
      <p>
        As the process of each type changes, the quality of the end product also
        differs.
      </p>

      <h2>Continuous Asphalt Plant Process Flow</h2>
      <p>
        The starting point of the{" "}
        <Links href={"/asphalt-drum-mix-plant"}>
          asphalt drum mix plant process
        </Links>{" "}
        is the continuous feeding of cold aggregates into the feeder bins.
        Aggregates have to be fed as per the size into different feeder bins.
        The number of bins are three, four or even more. The flow of aggregates
        from individual bins are controlled as required by the mix material
        design. This flow is also controlled and regulated from the control
        panel.
      </p>

      <p>
        Primary vibrating screen will screen the over sized material and
        aggregates will enter the drum for heating and then mixing. The drum
        mixer will evenly apply heat to the aggregates and then coat it
        uniformly with bitumen as aggregates pass from one end of the drum. The
        drum unit is inclined and rotating that facilitates easy flow of
        aggregates from one end to the other. Fuel for bitumen tank drum burner
        is stored in a separate tank.
      </p>
      <Image
        src="/images/blogs/drum-mix-plant-operation-diagram-1.webp"
        alt="drum-mix-plant-operation-diagram-1"
        width={500}
        height={500}
      />
      <p>
        See the image below to understand{" "}
        <Links href={"/blog/asphalt-drum-mix-plant-process/"}>
          asphalt drum mixing plant
        </Links>{" "}
        process operations.
      </p>
      <p>
        Bitumen and filler material are the ones that are added into the drum
        for mixing with aggregates. Bitumen is stored in separate tanks and then
        added into the drum by a pipe line by a bitumen pump controlled by a
        variable speed drive motor. Filler material is stored in separate filler
        hopper and transferred by means of a compressor
      </p>
      <p>
        Pollution control is taken care by dry and wet type pollution control
        devices. After proper mixing, the hot mix is discharged to the other end
        of the drum and onto a conveyor. This conveyor takes the HMA into the
        waiting trucks or storage silos.
      </p>
      <p>
        All these processes are controlled by a computerized control panel that
        comes with the asphalt mix plant.
      </p>
      <h2>Batch Asphalt Plant Process Flow</h2>
      <p>
        The process or flow for the asphalt plant – batch type starts the same
        way as we have to feed the aggregates into separate feeder bins. The
        aggregates then pass through a primary vibrating screen that helps in
        removal of oversized material. After that the aggregates are treated to
        heat in a drum which is fitted with a burner unit.
      </p>

      <p>
        Dust suction is done at the entry point of the aggregates into the drum
        and the dust absorbed is treated by pre-separator and then by a bag
        filter unit.
      </p>
      <p>
        The heated aggregates are then transferred to the top of mixing tower
        into the vibrating screen. Vibrating screen has screens of different
        sizes laid out for separation of aggregates. After separation,
        aggregates are stored into different bins as per their size. This area
        is called hot bins and it is just below the vibrating screens.
      </p>
      <Image
        src="/images/blogs/asphalt-mixing-plant-layout-1 (1).webp"
        alt="asphalt-mixing-plant-layout-1 (1)"
        width={500}
        height={500}
      />

      <p>
        See the image below to understand the asphalt batching plant operation:
      </p>
      <p>
        On the other hand, bitumen which is stored in the storage tanks is
        transferred to the weigh hopper near the mixing unit. Same happens for
        filler material as it gets transferred to its weigh hopper.
      </p>
      <p>
        Aggregates will be weighed and then discharged into the mixing unit by
        opening of pneumatic cylinders as set in the control panel. Bitumen and
        filler material are also added by weight into the mixing unit to
        complete the batch. Batch mixing time is set in the control panel and
        after the mixing time is over, the pneumatic gates below the mixing unit
        will open leading to the discharge of hot mix asphalt into the storage
        silo or directly into waiting trucks.
      </p>
      <p>
        Now-a-days these{" "}
        <Links href={"/asphalt-mixing-plant"}>asphalt mixing plants</Links> come
        with advanced control panel that show display of all important
        parameters and also allow adding, removing and editing of recipes. All
        important mix material data can be viewed and printed from the control
        panel or stored into pen drive.
      </p>
      <p>
        <strong>What are continuous plants?</strong>
        <br />
        Continuous plants will make asphalt cement in an uninterrupted flow of
        process. There is no breaking down of the process into separate batches.
      </p>

      <p>
        <strong>What are the two types of asphalt plants?</strong>
        <br />
        The two types of asphalt plants are: asphalt batch type plants and
        continuous (drum) type plants.
      </p>

      <p>
        <strong>What is a continuous process?</strong>
        <br />
        Continuous process in asphalt production takes place when HMA is
        produced without being broken into batches. The plant employs a
        continuous process for production instead of breaking the production
        into separate batches.
      </p>
    </>
  ),
};

export default post;
