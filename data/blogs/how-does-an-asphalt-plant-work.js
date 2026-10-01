import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
const post = {
  title: "How does an Asphalt plant work?",
  slug: "how-does-an-asphalt-plant-work",
  date: "2013-11-22",
  summary:
    "Hot mix asphalt material for paving is usually a mixture of graded, high quality different sizes of aggregates which are heated and mixed with liquid bitumen in measured quantities to produce hot mix asphalt. Asphalt is a paving material made out of crushed rocks and bitumen.Apart from the relative amounts and types of aggregate and recycled asphalt pavement used to produce hot mix asphalt, characteristics of hot mix asphalt is determined by the amount and grade of bitumen used while making the asphalt.",
  seoTitle: "How Does an Asphalt Plant Work? | Atlas Industries",
  seoDescription:
    "A step-by-step explanation of asphalt production processes in modern plants.",
  image: "/images/blogs/batch-plant.webp",
  content: (
    <>
      <p>
        Hot mix asphalt material for paving is usually a mixture of graded, high
        quality different sizes of aggregates which are heated and mixed with
        liquid bitumen in measured quantities to produce hot mix asphalt.
        Asphalt is a paving material made out of crushed rocks and bitumen.
      </p>
      <p>
        Apart from the relative amounts and types of aggregate and recycled
        asphalt pavement used to produce hot mix asphalt, characteristics of hot
        mix asphalt is determined by the amount and grade of bitumen used while
        making the asphalt.
      </p>
      <div className="mb-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/_-rmMf4lURY"
            title="Concrete Batch Plant Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p>
        Hot mix asphalt production requires drying and heating of aggregates so
        that bitumen can be coated easily. The drying process involves drying of
        the aggregates in rotating, slightly inclined dryer drum equipped with a
        burner. Aggregate is introduced in the higher end of the drum. Interior
        of the drum is equipped with different types of flights that help in
        properly heating the aggregates and also aid in properly coating it with
        bitumen{" "}
      </p>

      <p className="font-bold underline">
        Two basic types of asphalt plants are:
      </p>

      <ul>
        <li>
          Batch plants also known as{" "}
          <Links href={"/asphalt-batching-plant"}>
            {" "}
            discontinuous tower plant{" "}
          </Links>{" "}
          – Batch plants make asphalt in batches.
        </li>
        <li>
          Drum plants also known as continuous plants – Drum plants make asphalt
          continuously.
        </li>
      </ul>

      <p>Drum plants can be parallel flow and counter flow drum mix plants.</p>

      <p className="font-bold underline">Batch mix plants:</p>

      <div className="mb-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/pJDXk-4CMGo"
            title="Concrete Batch Plant Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p>
        The batch mix plant process begins when the aggregates is placed in
        appropriate bins of the aggregate feeders. The aggregates are then
        transferred to the drying drum by means of a conveyor. Drying drum is
        equipped with flights internally to promote drying efficiency. Once the
        aggregates leave the dryer, they are transferred to vibratory screen
        which does the task of separation of aggregates according to the size
        and the aggregates are dropped into the separate hot bins.
      </p>

      <Image
        src="/images/blogs/batch-plant (1).webp"
        alt="batch-plant (1)"
        width={500}
        height={500}
      />

      <p>BASIC PROCESS OF ASPHALT BATCH PLANT</p>

      <p>
        Since the aggregate size distribution is controlled, the desired
        aggregates and desired type is allowed to enter the mixing unit of the
        asphalt plant where it gets mixed with the liquid bitumen which comes
        pre-weighed from a heated storage tank. The mixing of asphalt and
        aggregates takes place in desired proportion as required in the final
        mix. Hot mix asphalt is then dropped into a hot storage silo or a truck.
      </p>

      <p className="font-bold underline">
        Parallel flow asphalt drum mix plants:
      </p>
      <p>
        The process of making asphalt in this plant is continuous process unlike
        in batches as seen in the batch mix plants. Here the dryer is used to
        dry as well as mix the aggregates along with bitumen. Weighing in drum
        mix plants takes place on the charging conveyor belt when the material
        is being transferred from the cold feed bins to the drying and mixing
        drum. The mixer is discharged at the lower end of the drum where it can
        be stored in the silos or discharged on the trucks.
      </p>

      <p>
        In{" "}
        <Links href={"/asphalt-drum-mix-plant"}>
          parallel flow asphalt mixer
        </Links>
        , usually dry and wet dust collector type pollution control devices are
        used.
      </p>

      <Image
        src="/images/blogs/drum-mix-plant.webp"
        alt="drum-mix-plant"
        width={500}
        height={500}
      />
      <p>BASIC PROCESS OF ASPHALT DRUM PLANT</p>

      <p className="font-bold underline">Counter flow drum plants:</p>
      <p>
        Here the aggregate in the drum moves in counter or opposite direction to
        the burner flame. The liquid bitumen mixing zone is located behind the
        burner flame zone so that the burner flame does not come in direct
        contact with bitumen.
      </p>

      <div className="mb-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/3x_hhjyvzoE"
            title="Concrete Batch Plant Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  ),
};

export default post;
