import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
const post = {
  title: "Asphalt drum mix plant process",
  slug: "asphalt-drum-mix-plant-process",
  date: "2015-09-18",
  summary:
    "WAsphalt drum mix plant and counter flow asphalt mixing plant are the two types of plants that are categorized as continuous mixing plants. Both these types of plants produce hot mix asphalt in a continuous process. Batch mix plants are also there which make hot mix asphalt in batch. The end product is to get hot mix asphalt but the process of batching plants and continuous plants is totally different from each other. The difference in the process is what makes the quality of hot mix asphalt different in all the types of plants.",
  seoTitle: "Asphalt Drum Mix Plant Process | Atlas Industries",
  seoDescription:
    "Step-by-step breakdown of the asphalt drum mix plant process for continuous production.",
  image: "/images/blogs/untitled-1.webp",
  content: (
    <>
      <p>
        Asphalt drum mix plant and counter flow asphalt mixing plant are the two
        types of plants that are categorized as continuous mixing plants. Both
        these types of plants produce hot mix asphalt in a continuous process.
        Batch mix plants are also there which make hot mix asphalt in batch. The
        end product is to get hot mix asphalt but the process of batching plants
        and continuous plants is totally different from each other. The
        difference in the process is what makes the quality of hot mix asphalt
        different in all the types of plants.
      </p>

      <p className="font-bold">
        Related:{" "}
        <Links href={"/blog/asphalt-batch-plant-process/"}>
          Click here to get information on asphalt batch plant process.
        </Links>
      </p>
      <p>
        Do you want to know how does an{" "}
        <span className="font-bold"> asphalt drum mix plant operation </span>{" "}
        work? Then see the image below..
      </p>
      <Image
        src="/images/blogs/drum-mix-plant-operation-diagram.webp"
        alt="untitled-1"
        width={500}
        height={500}
      />

      <p>
        Asphalt drum mix plant diagram (Size: 650 kb) Click to download the
        diagram of drum mix plant operation in pdf.{" "}
        <Links
          href={
            "https://www.atlasindustries.in/images/uploaded/asphalt-mixing-plant-pdf.pdf%20"
          }
        >
          <button> Asphalt mixing plant.pdf </button>
        </Links>
      </p>

      <p>
        {" "}
        <Links href={"/asphalt-drum-mix-plant"}>
          {" "}
          Asphalt drum mix plant{" "}
        </Links>{" "}
        process starts with the feeding of cold aggregates into feed bins. The
        equipment is usually equipped with three or four bin feeders (or more)
        and aggregates are loaded into different bins as per their sizes. This
        is done so that different sized aggregates can be graded as per the
        requirement. Each bin is provided with separate adjustable gates for
        controlling the flow of material. There is a long conveyor belt below
        the bins which takes the aggregates to the scalping screen.
      </p>

      <p className="font-bold">
        Related:{" "}
        <Links href={"/blog/asphalt-drum-mix-plant-lebanon/"}>
          Click here to get information on asphalt drum mix plant from our
          website.
        </Links>
      </p>

      <p>
        The next part is the screening process. Here is a single deck vibrating
        screen which removes the oversized aggregates thus preventing them from
        entering the drum.
      </p>
      <p>
        Charging conveyor plays an important role in the{" "}
        <span className="font-bold"> asphalt plant process </span> because it
        not only transfers the cold aggregates from below the screen to the drum
        but also does the weighing of the aggregates. This conveyor is equipped
        with a load cell which continuously weighs the aggregates and sends
        signal to the control panel.
      </p>

      <p>
        Drying and mixing drum is responsible for two operations first drying
        and then mixing. This drum is continuously rotating and in the course of
        the rotation, aggregates are transferred from one end to the other. The
        aggregates are treated to heat by the burner flame to reduce the
        moisture content in the aggregates. When we talk about the process in a
        parallel flow plant, the aggregates move away from the burner flame and
        in the counter flow plant, the aggregates move towards the burner flame.
        On the other end of the drum, the heated aggregates are mixed with
        bitumen and minerals. The drum plays an important role in the drum mix
        plant process.
      </p>

      <div className="mb-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/QvSAB8LFX0Y"
            title="Concrete Batch Plant Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p>
        Fuel tank for drying drum burner stores and provides fuel to the drum
        burner. Apart from that, the critical component includes asphalt storage
        tanks which store, heat and also pump required asphalt to the drying
        drum for mixing with the hot aggregates. Filler silos are for addition
        for optional filler / binder material into the mixer.
      </p>
      <p>
        Pollution control devices play an important part in the process. They
        help to eliminate the harmful gases that may have escaped the
        environment. Primary dust collector is a dry dust collector and it works
        in sync with secondary dust collector which can be a bag filter or a wet
        dust scrubber.
      </p>

      <p>
        Load out conveyor collects the ready hot mix asphalt from below the drum
        and takes it to the waiting truck or into the storage silo. Optional
        storage silo stores the HMA till the truck arrives.
      </p>

      <p>
        Control panel with today’s machines comes with modern and sophisticated
        controls. They allow storage of different mix recipes as per customer’s
        demand. Plant can be controlled from a single place from the control
        panel.
      </p>

      <Image
        src="/images/blogs/untitled-1.webp"
        alt="untitled-1"
        width={500}
        height={500}
      />

      <p>
        There are two types of continuous mixing plants: parallel flow and
        counter flow. The below image represents and compares both the
        parallel-flow and counter-flow asphalt plant. In parallel flow plant the
        flow of aggregates is parallel to the burner flame. This also means that
        the aggregates are moving away from the burner flame during their
        journey. In the counter flow plant, the flow of aggregates is opposite
        (counter) to that of burner flame and hence the aggregates are moving
        towards the burner flame before getting mixed with bitumen and other
        minerals. This seems simple but it makes a huge difference to the
        process of both these types of asphalt mixers and even affects the
        quality of the HMA. It is believed that counter flow mixer is better for
        fuel saving and also offers better HMA compared to the other.
      </p>
      <p className="font-bold">Conclusion:</p>
      <p>
        However tough or challenging you hot mix asphalt job may be, if you
        choose the right type of equipment from the right manufacturer you will
        be amazed with the results that you machine delivers.
      </p>
    </>
  ),
};

export default post;
