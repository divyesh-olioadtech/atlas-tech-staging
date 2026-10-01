import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
import Half_slider from "../../components/others/half_slider";

const imageArray = [
  "/images/blogs/maintenance-paving-blocks.webp",
  "/images/blogs/concrete-crack.webp",
  "/images/blogs/asthetic1.webp",
];

const myContent = (
  <div>
    <p className="mb-2 font-bold underline">Aesthetics</p>
    <p>
      Paved concrete blocks have the advantage when it comes to aesthetic value.
      With many patterns available, you can choose how your drive way or walk
      way looks like and customize the same. Different coloured paving blocks
      can be used in combination to customize the look. <br /> <br />
      Concrete can be strained or embedded with stones to make it look
      decorative and attractive. Stamped concrete closely resembles paving
      stones.
    </p>
  </div>
);

const myContent1 = (
  <div>
    <p className="mb-2 font-bold underline">Durability</p>
    <p>
      Concrete slabs can crack if the ground beneath it shifts. Its durability
      is greatly depended on the movement of the earth below. If incorrectly
      graded, there will be chances of water getting accumulated over the
      concrete slab. On the other hand, water will not settle on the paver
      blocks due to the numerous joints in the paver blocks. If the grading is
      correct, water will not stay on top of the paver blocks and will not
      create drainage issues. Paving blocks are good because they will allow
      water to seep to the earth also helping the ground water level. If
      properly done, paving blocks can last for a life time and can also take
      more loads compared to concrete slabs. Load distribution is better in the
      paving blocks as it can disperse pressure or weight evenly.
    </p>
  </div>
);

const myContent2 = (
  <div>
    <p className="mb-2 font-bold underline">Maintenance</p>
    <p>
      If concrete gets cracked it will need to be sealed which will spoil the
      strength of the product and the aesthetic value of the pavement or
      driveway due to mismatch colouring. In the long run this can be very
      costly. Stains and pits can occour on concrete slabs by atmospheric
      effect. <br />
      Since pavestones consist of paved blocks interlinked, it is easy to
      replace a single piece when required. Few pieces of concrete paver blocks
      can be removed and underground problems can be solved which will be very
      difficult when concrete is poured. This is less expensive compared to
      concrete slab maintenance.
    </p>
  </div>
);

const post = {
  title: "Pollution control systems of asphalt plant",
  slug: "concrete-slabs-vs-pavers",
  date: "2013-10-27",
  summary: "concrete-slabs-vs-pavers",
  seoTitle: "Concrete Slabs vs Pavers | Atlas Industries",
  seoDescription:
    "A comparative guide to choosing between concrete slabs and pavers for driveways and pathways.",
  image: "/images/blogs/pavers-or-concrete-slabs-1.webp",
  content: (
    <>
      <p>
        Whenever one considers paving their driveway or walkway, they have a
        number of choices but to make the right choice is very critical as it
        can affect the aesthetic look of your walkway or drive way and even
        affect the life span of the pavement depending on the usage.
      </p>
      <Image
        src="/images/blogs/pavers-or-concrete-slabs-1.webp"
        alt="batch-plant"
        width={500}
        height={500}
      />
      <p>
        Poured concrete is installed in large blocks and has the advantages of
        being durable. It can resist pattern stamps, acid stains, or rough. On
        the other hand, pavers also referred to as paving stones or brick pavers
        are interlocked tiles of concrete. Some people like the flexibility,
        colour and appearance of the paved blocks and hence prefer them over
        poured concrete. Both the options have their own advantages and
        disadvantages.
      </p>
      <Half_slider images={imageArray} content={myContent} imageOnLeft={true} />

      <p>
        <span className="font-bold underline"> Cost</span> <br />
        Poured concrete can cost less initially compared to paved blocks but the
        long time repairs or maintenance cost of concrete can far exceed the
        cost of paved blocks and outweigh the initial savings done with concrete
        slabs. <br />
        Poured concrete can cost less initially compared to paved blocks but the
        long time repairs or maintenance cost of concrete can far exceed the
        cost of paved blocks and outweigh the initial savings done with concrete
        slabs.
      </p>

      <p>
        <span className="font-bold underline"> Installation</span> <br />
        Concrete can be poured and is easy to install. The drying of concrete
        will take time and the installation process may include excavation,
        preparation of foundation and setting forms for concrete pouring. The
        ground has to be stabilized or concrete may crack over a period of time.
        We have seen improperly graded concrete leading to low spots which will
        hold water and leave stains on the concrete. So we know the importance
        of concrete grading. <br />
        Installation of paving stones requires more labours comparatively. Here
        there is no curing time involved and the pavement is ready to use upon
        installation. Excavation, grading, making a proper sub base layer,
        compaction of the base is very important. Even after the paves are laid,
        compaction of the paver blocks within the bonding beams and sealing the
        paver blocks completely is very crucial to get the best result with
        paver blocks. The problem of grading can be solved later by readjusting
        or replacing the paving blocks.
      </p>

      <Half_slider
        images={imageArray}
        content={myContent1}
        imageOnLeft={false}
      />
      <Half_slider
        images={imageArray}
        content={myContent2}
        imageOnLeft={true}
      />

      <p>
        <span className="font-bold underline"> Value addition</span> <br />
        Concrete can be slippery when wet unless the surface has be grinded when
        wet. Anti skid agent can also be applied to prevent the slipping. Paving
        blocks are non skid and offer good traction comparatively. They also
        offer instant aesthetic value upon installation
      </p>
    </>
  ),
};

export default post;
