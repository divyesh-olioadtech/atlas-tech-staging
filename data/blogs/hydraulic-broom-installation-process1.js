import Image from "next/image";
import Link from "next/link";
import Links from "../../components/Links";
const post = {
  title: "Hydraulic Broom Installation Process",
  slug: "hydraulic-broom-installation-process",
  date: "2020-04-11",
  summary:
    "Hydraulic broom is very convenient and easy to use a type of road sweeper. The hydraulic broom installation process is simple. Many road contractors and maintenance personnel prefer the simplicity of the hydraulic road cleaning machine. It can be conveniently attached to most of the tractors and used.",
  seoTitle: "Hydraulic Broom Installation Process | Atlas Industries",
  seoDescription:
    "Step-by-step guide to installing hydraulic brooms for effective road cleaning and maintenance.",
  image: "/images/blogs/hydraulic-broom-connection-diagram.webp",
  content: (
    <>
      <p>
        Hydraulic broom is very convenient and easy to use a type of road
        sweeper. <Links href={"/hydraulic-broom"}>The hydraulic broom</Links>{" "}
        installation process is simple. Many road contractors and maintenance
        personnel prefer the simplicity of the hydraulic road cleaning machine.
        It can be conveniently attached to most of the tractors and used.
      </p>

      <p>
        It is a tractor towable road sweeping broom. Tractor requirement is
        simple, mostly 35 to 50 HP tractor is sufficient. Massey Ferguson’s make
        of tractor is not adjustable for the broom. Any tractor that has a
        hydraulic pump outside will be suitable for use with a hydraulic broom.
      </p>

      <p>Below is the hydraulic broom connection diagram:</p>

      <Image
        src="/images/blogs/hydraulic-broom-connection-diagram.webp"
        alt="hydraulic-broom-connection-diagram"
        width={500}
        height={500}
      />
      <p>
        Before we start with the fitting of{" "}
        <Links href={"/hydraulic-broom"}>Atlas hydraulic road sweeper</Links> to
        the suitable tractor, we will need to understand the hydraulic control
        valve basics. Below is the self-explanatory image.
      </p>

      <Image
        src="/images/blogs/hydraulic-broom-installation-process-1024x576.webp"
        alt="hydraulic-broom-installation-process-1024x576"
        width={500}
        height={500}
      />

      <p>
        The image shows the marked pressure line, tank (return) line, and two
        hydraulic control spools. One of them is the detaining (lock) type – it
        is for the hydro motor. The other is for spring type – it is for a
        hydraulic cylinder.
      </p>
      <p>
        Engaging the spool will give an idea if it is a spring-type or detain
        type.
      </p>
      <p>
        The next step is to fix the hex nipples using Teflon tape. These nipples
        have to be fitted at the hydro motor. After that, we need to connect the
        2 hydraulic hose pipes coming from the detain (lock) type spool into the
        hydro motor.
      </p>

      <p>Then cross-check the spool type on the hydraulic control valve.</p>
      <p>
        Connect the remaining 2 hydraulic hose pipes into the hydraulic cylinder
        of the{" "}
        <Links href={"/road-sweeping-equipment"}>hydraulic road sweeper.</Links>{" "}
        The other end of these hose pipes will be connected to spring-type spool
        into the control valve.
      </p>
      <p>The next step is to connect the hydraulic broom to the tractor.</p>

      <p>
        See video below for complete details on how to install the hydraulic
        broom to tractor:
      </p>

      <div className="mb-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/whWvK20djJI"
            title="Concrete Batch Plant Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p>
        After the connection of the hydraulic broom to the tractor, the next
        step will be to connect the hydraulic road sweeping machine’s hydraulic
        line with that of the tractor. We have to locate the tractor’s hydro
        pump’s pressure line. It should be near the tractor driver seat.
      </p>

      <p>
        Then we have to cut the pipeline and weld hydraulic hex nipple both
        sides. It is provided in the box with the broom.
      </p>
      <p>
        Connect the hydraulic hose, one end to control valve P line on the broom
        and other ends to the hex nipple on the tractor’s P (pressure) line.
        <br />P to P
      </p>

      <p>
        After that we have to connect another hydraulic hose, one end to control
        valve T line and other ends to the tractor’s T (return) line.
        <br />T to T
      </p>

      <p>The broom is now ready to be used with the tractor.</p>
    </>
  ),
};

export default post;
