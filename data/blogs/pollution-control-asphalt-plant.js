import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
import Half_slider from "../../components/others/half_slider";
const imageArray = [
  "/images/blogs/img_9050.jpg",
  "/images/blogs/img_01851.jpg",
  "/images/blogs/img_9050.jpg",
  "/images/blogs/img_01851.jpg",
];

const myContent = (
  <div>
    <p>
      Major air pollution concern is the dryer burner. A clogged or a dirty
      burner and or improper air to fuel ratio can result in excessive smoke and
      also other combustion by products. Close attention and cleanliness in
      maintaining and adjustments of burners and accessories is important.
    </p>
  </div>
);

const myContent1 = (
  <div>
    <p>
      The aim of wet dust collector is to trap the dust particles in water
      droplets and remove them. Most of the wet dust collectors are used in
      connection with cyclone separators (dry dust collectors). The flow of
      water is in the opposite direction of the dust suction allowing entrapment
      of large particles and treating them to cyclonic effect before settling
      the sludge. The water is then collected into a sludge pond which has to be
      periodically cleaned. The wet dust collector has to be periodically
      cleaned and inspected so that water flows freely. Water spray nozzles have
      to be regularly cleaned for clogging and to ensure smooth operation.{" "}
    </p>
  </div>
);
const post = {
  title: "Pollution control systems of asphalt plant",
  slug: "pollution-control-asphalt-plant",
  date: "2013-10-13",
  summary:
    "Since the dust collection system is integrated with the asphalt plant, the operator is required to be aware with the controls and maintenance standards. The operator is also supposed to be aware of how the dust collector system performance affects the properties of the hot mix asphalt.",
  seoTitle: "Pollution Control Systems of Asphalt Plant | Atlas Industries",
  seoDescription:
    "How Atlas integrates advanced pollution control systems for eco-friendly asphalt production.",
  image: "/images/blogs/img_9050.jpg",
  content: (
    <>
      <p>
        Since the dust collection system is integrated with the asphalt plant,
        the operator is required to be aware with the controls and maintenance
        standards. The operator is also supposed to be aware of how the dust
        collector system performance affects the properties of the hot mix
        asphalt.
      </p>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="md:w-[50%] flex justify-center items-center">
          <Image
            src="/images/blogs/img_9050.jpg"
            alt="batch-plant"
            width={500}
            height={500}
          />
        </div>
        <div className="md:w-[50%] flex justify-center items-center">
          <p>
            Major air pollution concern is the dryer burner. A clogged or a
            dirty burner and or improper air to fuel ratio can result in
            excessive smoke and also other combustion by products. Close
            attention and cleanliness in maintaining and adjustments of burners
            and accessories is important.
          </p>
        </div>
      </div>

      <p>
        Dust from the aggregates can also be reason for air pollution. Dust
        emissions can be kept under control by use of anti pollution equipments.
        The common types of dust collectors that are used to capture dust are
        multi cyclone dry dust collector; venture type wet dust collector and
        bag house. Mostly two or more of these pollution control devices may be
        used in sequence.
      </p>

      <p>
        Maintenance and cleaning of the duct line connecting the dryer and the
        dry dust collector is as important as maintaining the pollution control
        systems. This is very important as clogging will not deliver good
        results. Usually the duct line can be inspected every month but if the
        dust is more, it has to be done frequently.
      </p>

      <Half_slider
        images={imageArray}
        content={myContent}
        imageOnLeft={true} // Set to true to place image on left
      />
      <Half_slider
        images={imageArray}
        content={myContent1}
        imageOnLeft={false} // Set to true to place image on left
      />

      <p>
        Bag house filters is the best way to contain aggregate dust. Bag house
        filter works on the principle of vacuum cleaner as it creates vacuum and
        sucks the dust filled air towards the bags. A bag house is a huge
        compartment having numerous heat resistant fabric bags for collection of
        fines. Since the volume of the gases to be handled is huge, a very large
        number of bags are required. The filter bag accumulates the particles as
        the gas passes through the bags. This will, over a period of time,
        result in accumulation of dust which will require periodic cleaning or
        it can stop the flow of gas form the chamber. Dust collected can be
        wasted or reused.
      </p>

      <div className="mb-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/iuLEO0t8T2g"
            title="Concrete Batch Plant Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p>
        Video of counterflow asphalt plant – double drum plant showing the
        efficiency of venturi.
      </p>
    </>
  ),
};

export default post;
